/* ============================================================
   BAIEF — the twin map engine
   Two Leaflet maps in two different projections, kept at the
   same number of metres per pixel so a comparison is honest.
   ============================================================ */
'use strict';

const Twin = (() => {

  let earthMap, targetMap;
  let bodyKey = 'mars';
  let locked = true;
  let syncing = false;                    // re-entry guard
  const current = { earth: null, target: null };   // active tile layers
  let regionalLayer = null;
  let baseLayer = null;
  let pinEarth = null, pinTarget = null;
  const onChange = [];

  /* ---------------- construction ---------------- */

  function build() {
    const common = {
      zoomSnap: 0, zoomDelta: 0.5, wheelPxPerZoomLevel: 140,
      zoomControl: false, attributionControl: true,
      worldCopyJump: false, minZoom: 1
    };

    earthMap = L.map('mapEarth', { ...common, maxZoom: 18 })
      .setView([38.6432, 34.8283], 9);

    targetMap = L.map('mapTarget', {
      ...common, crs: L.CRS.EPSG4326, maxZoom: 13,
      maxBounds: [[-90, -180], [90, 180]], maxBoundsViscosity: 0.9
    }).setView([-1.5, -153.0], 7);

    earthMap.attributionControl.setPrefix('');
    targetMap.attributionControl.setPrefix('');
    L.control.zoom({ position: 'bottomleft' }).addTo(earthMap);
    L.control.zoom({ position: 'bottomleft' }).addTo(targetMap);

    setLayer('earth', 'weld');
    setLayer('target', 'ctx');

    earthMap.on('move zoom', () => propagate('earth'));
    targetMap.on('move zoom', () => propagate('target'));

    // the Mars regional mosaics are better than global CTX where they exist
    targetMap.on('moveend zoomend', maybeRegional);

    return { earthMap, targetMap };
  }

  /* The CTX mosaic has genuine no-data gaps. A global mosaic sits
     permanently underneath so those gaps show ground, not black. */
  function baseId() { return bodyKey === 'mars' ? 'viking' : 'wac'; }

  /* Skip the base entirely when the chosen layer already is it —
     otherwise every tile gets requested twice. */
  function syncBase() {
    const id = baseId();
    const sel = activeDef('target');
    if (sel && sel.id === id) {
      if (baseLayer) { targetMap.removeLayer(baseLayer); baseLayer = null; }
      return;
    }
    if (!baseLayer || baseLayer._stillThereBase !== id) setBase();
  }

  function setBase() {
    if (baseLayer) { targetMap.removeLayer(baseLayer); baseLayer = null; }
    const id = baseId();
    const def = LAYERS[bodyKey].find(l => l.id === id);
    if (!def) return;
    baseLayer = L.tileLayer(def.url, {
      tileSize: def.tileSize || 256,
      maxNativeZoom: def.maxZoom,
      maxZoom: targetMap.options.maxZoom,
      noWrap: true, bounds: [[-90, -180], [90, 180]],
      zIndex: 1, attribution: def.attribution || ''
    }).addTo(targetMap);
    baseLayer._stillThereBase = id;
  }

  /* ---------------- layers ---------------- */

  function layerList(side) {
    if (side === 'earth') return LAYERS.earth.concat([EARTH_SHARP]);
    return LAYERS[bodyKey];
  }

  function layerById(side, id) {
    return layerList(side).find(l => l.id === id) || layerList(side)[0];
  }

  function setLayer(side, id) {
    const map = side === 'earth' ? earthMap : targetMap;
    const def = layerById(side, id);
    let url = def.url;

    if (def.time) {
      const t = def.time === 'yesterday' ? isoDaysAgo(2) : def.time;
      url = url.replace('{time}', t);
    }

    const layer = L.tileLayer(url, {
      tileSize: def.tileSize || 256,
      zoomOffset: def.zoomOffset || 0,
      maxNativeZoom: def.maxZoom,
      maxZoom: map.options.maxZoom,
      noWrap: true,
      bounds: side === 'earth' ? null : [[-90, -180], [90, 180]],
      attribution: def.attribution || '',
      zIndex: 2,
      crossOrigin: true
    });

    layer.addTo(map);
    if (current[side]) map.removeLayer(current[side]);
    current[side] = layer;
    current[side + 'Def'] = def;

    if (side === 'target') { syncBase(); maybeRegional(); }
    fire();
    return def;
  }

  function activeDef(side) { return current[side + 'Def']; }

  /* A sharper, block-adjusted mosaic exists for three Mars sites.
     Drop it on top whenever the view is inside one. */
  function maybeRegional() {
    if (bodyKey !== 'mars') { clearRegional(); return; }
    const c = targetMap.getCenter();
    const hit = MARS_REGIONAL.find(r =>
      c.lat >= r.bounds[0][0] && c.lat <= r.bounds[1][0] &&
      c.lng >= r.bounds[0][1] && c.lng <= r.bounds[1][1]);

    if (!hit) { clearRegional(); return; }
    if (regionalLayer && regionalLayer._stillThereId === hit.id) return;

    clearRegional();
    regionalLayer = L.tileLayer(
      `https://trek.nasa.gov/tiles/Mars/EQ/${hit.layer}/1.0.0/default/default028mm/{z}/{y}/{x}.png`,
      { tileSize: 256, maxNativeZoom: hit.maxZoom, maxZoom: targetMap.options.maxZoom,
        bounds: hit.bounds, noWrap: true, opacity: 1, zIndex: 3,
        attribution: 'NASA Mars Trek · regional CTX mosaic' });
    regionalLayer._stillThereId = hit.id;
    regionalLayer.addTo(targetMap);
  }

  function clearRegional() {
    if (regionalLayer) { targetMap.removeLayer(regionalLayer); regionalLayer = null; }
  }

  /* ---------------- scale locking ---------------- */

  function mppOf(side) {
    const map = side === 'earth' ? earthMap : targetMap;
    const key = side === 'earth' ? 'earth' : bodyKey;
    return MPP.of(key, map.getCenter().lat, map.getZoom());
  }

  function propagate(from) {
    if (syncing) { fire(); return; }
    if (!locked)  { fire(); return; }

    syncing = true;
    try {
      const mpp = mppOf(from);
      if (from === 'earth') {
        const z = MPP.zoomFor(bodyKey, targetMap.getCenter().lat, mpp);
        const clamped = Math.max(targetMap.getMinZoom(), Math.min(targetMap.getMaxZoom(), z));
        if (Math.abs(clamped - targetMap.getZoom()) > 0.01) targetMap.setZoom(clamped, { animate: false });
      } else {
        const z = MPP.zoomFor('earth', earthMap.getCenter().lat, mpp);
        const clamped = Math.max(earthMap.getMinZoom(), Math.min(earthMap.getMaxZoom(), z));
        if (Math.abs(clamped - earthMap.getZoom()) > 0.01) earthMap.setZoom(clamped, { animate: false });
      }
    } finally {
      syncing = false;
    }
    fire();
  }

  function setLocked(v) {
    locked = v;
    if (v) propagate('earth');
    else fire();
  }

  /* ---------------- navigation ---------------- */

  function showPair(pair) {
    if (pair.body !== bodyKey) setBody(pair.body);

    const want = pair.imagery || {};
    if (want.earth)  setLayer('earth',  want.earth);
    if (want.target) setLayer('target', want.target);

    const mpp = want.mpp || 30;
    syncing = true;
    const ez = MPP.zoomFor('earth',  pair.earth.lat,  mpp);
    const tz = MPP.zoomFor(bodyKey,  pair.target.lat, mpp);
    earthMap.setView([pair.earth.lat, pair.earth.lon],
                     Math.min(ez, earthMap.getMaxZoom()), { animate: false });
    targetMap.setView([pair.target.lat, pair.target.lon],
                      Math.min(tz, targetMap.getMaxZoom()), { animate: false });
    syncing = false;

    dropPin('earth',  pair.earth.lat,  pair.earth.lon,  pair.earth.name);
    dropPin('target', pair.target.lat, pair.target.lon, pair.target.name,
            pair.hardware && pair.hardware.name);

    maybeRegional();
    fire();
  }

  function setBody(key) {
    bodyKey = key;
    const def = LAYERS[key][0];
    clearRegional();
    setLayer('target', def.id);
    fire();
  }

  function dropPin(side, lat, lon, label, sub) {
    const map = side === 'earth' ? earthMap : targetMap;
    const old = side === 'earth' ? pinEarth : pinTarget;
    if (old) map.removeLayer(old);

    const cls = side === 'earth' ? 'pin pin-earth' : 'pin pin-target';
    const icon = L.divIcon({
      className: 'pin-wrap',
      html: `<span class="${cls}"></span>`,
      iconSize: [18, 18], iconAnchor: [9, 9]
    });
    const m = L.marker([lat, lon], { icon, keyboard: false }).addTo(map);
    const text = sub
      ? `<strong>${label}</strong><br><em>${sub} ${L10N.t('pin.ishere')}</em>`
      : `<strong>${label}</strong>`;
    m.bindTooltip(text, { direction: 'top', offset: [0, -8] });

    if (side === 'earth') pinEarth = m; else pinTarget = m;
    return m;
  }

  /* ---------------- reporting ---------------- */

  /* How far past its sharpest real pixels a layer is being blown up.
     1 = native. 4 = each real pixel is covering four screen pixels. */
  function stretch(side) {
    const map = side === 'earth' ? earthMap : targetMap;
    const def = activeDef(side);
    if (!def) return 1;
    let best = def.maxZoom;
    if (side === 'target' && regionalLayer)
      best = Math.max(best, regionalLayer.options.maxNativeZoom);
    return Math.pow(2, Math.max(0, map.getZoom() - best));
  }

  function fire() {
    const state = {
      bodyKey, locked,
      earth:  { center: earthMap.getCenter(),  zoom: earthMap.getZoom(),
                mpp: mppOf('earth'),  def: activeDef('earth'),
                enlarged: stretch('earth') },
      target: { center: targetMap.getCenter(), zoom: targetMap.getZoom(),
                mpp: mppOf('target'), def: activeDef('target'),
                enlarged: stretch('target'),
                regional: regionalLayer ? regionalLayer._stillThereId : null }
    };
    onChange.forEach(fn => fn(state));
  }

  return {
    build, setLayer, setLocked, setBody, showPair, dropPin,
    layerList, activeDef,
    get bodyKey() { return bodyKey; },
    get maps() { return { earthMap, targetMap }; },
    subscribe(fn) { onChange.push(fn); }
  };
})();
