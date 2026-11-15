/* ============================================================
   BAIEF — interface
   Every user-facing string goes through L10N.t(); every pair goes
   through L10N.pair() before it is drawn.
   ============================================================ */
'use strict';

(() => {

const $  = s => document.querySelector(s);
const el = (tag, cls, html) => {
  const n = document.createElement(tag);
  if (cls) n.className = cls;
  if (html != null) n.innerHTML = html;
  return n;
};
const esc = s => String(s == null ? '' : s)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;');

const T = k => L10N.t(k);

let activePair = null;
let mode = 'stories';
const STORE_KEY = 'baief.comparisons.v1';

/* ───────────────────────── boot ───────────────────────── */

L10N.init();
Twin.build();
applyStatic();
buildPairList();
buildLayerPickers();
Twin.subscribe(render);
selectPair(PAIRS[0]);
wireChrome();

/* ─────────────────── static translations ─────────────────── */

function applyStatic() {
  document.querySelectorAll('[data-i18n]').forEach(n => {
    n.innerHTML = T(n.dataset.i18n);
  });
  document.querySelectorAll('.lang-btn').forEach(b =>
    b.classList.toggle('is-on', b.dataset.lang === L10N.lang));
  const ec = $('#earthChip');
  if (ec) ec.textContent = L10N.body('earth').toUpperCase();
}

/* Redraw everything that carries words — WITHOUT moving either map.
   Switching language mid-exploration must not throw away the view
   the student was looking at. */
function relanguage() {
  applyStatic();
  buildPairList();
  buildLayerPickers();
  if (activePair) paintPair(L10N.pair(activePair));
  if (mode === 'explore') {
    renderExplore();
    paintFreeRoam();
    if (myPick.earth)  Twin.dropPin('earth',  myPick.earth.lat,  myPick.earth.lon,  T('pin.earth'));
    if (myPick.target) Twin.dropPin('target', myPick.target.lat, myPick.target.lon, T('pin.target'));
  }
}

/* ───────────────────── the pair rail ──────────────────── */

function buildPairList() {
  const list = $('#pairList');
  list.innerHTML = '';
  let lastBody = null;

  PAIRS.forEach(src => {
    const pair = L10N.pair(src);
    if (pair.body !== lastBody) {
      lastBody = pair.body;
      list.appendChild(el('li', 'pair-group', `<span>${esc(L10N.body(pair.body))}</span>`));
    }

    const li = el('li', 'pair-item');
    li.innerHTML = `
      <button class="pair-btn" data-id="${esc(pair.id)}" data-world="${esc(L10N.body(pair.body))}">
        <span class="pair-places">
          <span class="pp pp-earth">${esc(pair.earth.name)}</span>
          <span class="pp-vs">&middot;</span>
          <span class="pp pp-target">${esc(pair.target.name)}</span>
        </span>
        <span class="pair-headline">${esc(pair.headline)}</span>
        <span class="pair-hw">${esc(pair.hardware.name)} &middot; ${esc(pair.hardware.lifetime)}</span>
      </button>`;
    li.querySelector('button').addEventListener('click', () => selectPair(src));
    list.appendChild(li);
  });

  if (activePair) {
    document.querySelectorAll('.pair-btn').forEach(b =>
      b.classList.toggle('is-on', b.dataset.id === activePair.id));
  }
}

function selectPair(src) {
  activePair = src;
  const pair = L10N.pair(src);

  document.querySelectorAll('.pair-btn').forEach(b =>
    b.classList.toggle('is-on', b.dataset.id === pair.id));

  Twin.showPair(pair);
  buildLayerPickers();
  paintPair(pair);

  /* Small screens show the pairs as a horizontal strip, so the chosen card
     has to bring itself into view. This runs after the maps have been
     rebuilt: doing it before lets that work interrupt the smooth scroll. */
  if (window.matchMedia('(max-width: 1100px)').matches) centreChosenCard();
}

/* Two things this has to survive: Leaflet reflows the page on the same
   frame (so the move waits for layout to settle), and a smooth scroll
   never advances while the tab is not painting — background tabs, and
   anyone with animations turned down. An instant move always lands, and
   on a strip whose contents just changed it reads fine. */
function centreChosenCard() {
  setTimeout(() => {
    const card = document.querySelector('.pair-btn.is-on')?.parentElement;
    const strip = card?.parentElement;
    if (!card || !strip || !strip.clientWidth) return;
    const left = card.offsetLeft - (strip.clientWidth - card.offsetWidth) / 2;
    strip.scrollLeft = Math.max(0, left);
  }, 160);
}

/* In explore mode there is no "pair", so the headers must stop claiming
   one. Without this the chip kept saying MARS while showing the Moon. */
function paintFreeRoam() {
  $('#targetChip').textContent  = L10N.body(Twin.bodyKey).toUpperCase();
  $('#earthPlace').textContent  = T('ex.freeroam');
  $('#targetPlace').textContent = T('ex.freeroam');
}

/* The words for a pair, with no effect on where the maps are pointing. */
function paintPair(pair) {
  renderStory(pair);
  $('#earthPlace').textContent  = `${pair.earth.name}, ${pair.earth.where}`;
  $('#targetPlace').textContent = pair.target.name;
  $('#targetChip').textContent  = L10N.body(pair.body).toUpperCase();
}

/* ─────────────────── layer dropdowns ─────────────────── */

function buildLayerPickers() {
  ['earth', 'target'].forEach(side => {
    const sel = $(side === 'earth' ? '#earthLayer' : '#targetLayer');
    const act = Twin.activeDef(side);
    sel.innerHTML = '';
    Twin.layerList(side).forEach(l => {
      const o = el('option');
      o.value = l.id;
      o.textContent = L10N.layer(l) + (l.nonNasa ? `  (${T('read.notnasa')})` : '');
      if (act && l.id === act.id) o.selected = true;
      sel.appendChild(o);
    });
    sel.onchange = () => Twin.setLayer(side, sel.value);
  });
}

/* ─────────────────── the story panel ─────────────────── */

function renderStory(pair) {
  const s = $('#story');
  s.innerHTML = '';

  s.appendChild(el('h2', 'story-headline', esc(pair.headline)));

  const places = el('div', 'places');
  [['earth', pair.earth, L10N.body('earth')],
   ['target', pair.target, L10N.body(pair.body)]].forEach(([side, p, world]) => {
    places.appendChild(el('article', `place place-${side}`, `
      <header>
        <span class="place-world">${esc(world)}</span>
        <h3>${esc(p.name)}</h3>
        <p class="place-where">${esc(p.where)}</p>
      </header>
      <p class="place-rock">${esc(p.rock)}</p>
      <p class="place-blurb">${esc(p.blurb)}</p>`));
  });
  s.appendChild(places);

  const hw = pair.hardware;
  const card = el('section', 'hw');
  card.innerHTML = `
    <div class="hw-head">
      <span class="hw-tag">${esc(T('hw.tag'))}</span>
      <h3>${esc(hw.name)}</h3>
      <dl class="hw-facts">
        <div><dt>${esc(T('hw.type'))}</dt><dd>${esc(hw.kind)}</dd></div>
        <div><dt>${esc(T('hw.life'))}</dt><dd>${esc(hw.lifetime)}</dd></div>
        <div><dt>${esc(T('hw.where'))}</dt><dd>${esc(hw.whereNow)}</dd></div>
      </dl>
    </div>
    <div class="hw-gallery" aria-live="polite"><p class="loading">${esc(T('hw.loading'))}</p></div>
    <div class="hw-text">
      <p>${esc(hw.story)}</p>
      <p class="hw-ending"><strong>${esc(T('hw.ending'))}</strong> ${esc(hw.ending)}</p>
      <p class="hw-feel">${esc(hw.feel)}</p>
    </div>`;
  s.appendChild(card);
  loadGallery(card.querySelector('.hw-gallery'), hw);

  const cmp = el('section', 'compare');
  cmp.appendChild(el('h3', null, esc(T('cmp.title'))));
  const table = el('div', 'cmp-table');
  table.appendChild(el('div', 'cmp-row cmp-head', `
    <span class="cmp-label"></span>
    <span class="cmp-e">${esc(L10N.body('earth'))}</span>
    <span class="cmp-t">${esc(L10N.body(pair.body))}</span>`));
  pair.compare.forEach(r => {
    table.appendChild(el('div', 'cmp-row', `
      <span class="cmp-label">${esc(r.label)}</span>
      <span class="cmp-e">${esc(r.earth)}</span>
      <span class="cmp-t">${esc(r.target)}</span>`));
  });
  cmp.appendChild(table);
  s.appendChild(cmp);

  const look = el('section', 'look');
  look.appendChild(el('h3', null, esc(T('look.title'))));
  const ul = el('ul');
  pair.lookFor.forEach(t => ul.appendChild(el('li', null, esc(t))));
  look.appendChild(ul);
  s.appendChild(look);
}

async function loadGallery(host, hw) {
  const imgs = await NASA.imagesFor(hw.images, 3);
  host.innerHTML = '';
  if (!imgs.length) {
    host.appendChild(el('p', 'loading', esc(T('hw.nophoto'))));
    return;
  }
  imgs.forEach(im => {
    const fig = el('figure', 'shot');
    const img = el('img');
    img.src = im.src;
    img.alt = im.title || hw.name;
    img.loading = 'lazy';
    img.decoding = 'async';
    img.addEventListener('error', () => fig.remove());
    img.addEventListener('click', () => openImage(im, hw.name));
    fig.appendChild(img);
    if (im.title) fig.appendChild(el('figcaption', null, esc(im.title)));
    host.appendChild(fig);
  });
}

/* Captions come from NASA and stay in English — they are the
   library's own words, and the id below lets anyone check them. */
function openImage(im, fallback) {
  $('#modalBody').innerHTML = `
    <img src="${esc(im.full || im.src)}" alt="${esc(im.title || fallback)}">
    <h3 id="modalTitle">${esc(im.title || fallback)}</h3>
    ${im.description ? `<p>${esc(im.description).slice(0, 900)}</p>` : ''}
    <p class="modal-credit">${esc(T('modal.credit'))} &middot; ${esc(im.id)}${im.date ? ' &middot; ' + esc(im.date) : ''}</p>`;
  $('#modal').hidden = false;
}

/* ─────────────────────── readouts ────────────────────── */

function render(state) {
  const fmt = st => {
    const c = st.center;
    const bits = [
      formatMpp(st.mpp),
      `${c.lat.toFixed(3)}°, ${((c.lng + 540) % 360 - 180).toFixed(3)}°`
    ];
    if (st.regional) bits.push(T('read.regional'));
    if (st.def && st.def.nonNasa) bits.push(T('read.notnasa'));
    let html = esc(bits.join('  ·  '));
    if (st.enlarged > 1.4) {
      const n = st.enlarged < 10 ? st.enlarged.toFixed(1) : Math.round(st.enlarged);
      html += ` <span class="stretch" title="${esc(T('read.enlargedTip'))}">&times;${n} ${esc(T('read.enlarged'))}</span>`;
    }
    return html;
  };
  $('#earthReadout').innerHTML  = fmt(state.earth);
  $('#targetReadout').innerHTML = fmt(state.target);

  const mpp = state.locked ? (state.earth.mpp + state.target.mpp) / 2 : state.earth.mpp;
  const nice = niceDistance(mpp * 110);
  const bar = $('#scalebar');
  bar.querySelector('.scalebar-line').style.setProperty('--len', Math.round(nice / mpp) + 'px');
  $('#scalebarText').textContent = formatDistance(nice);
  bar.classList.toggle('is-unlocked', !state.locked);

  const note = bar.querySelector('.scalebar-note');
  if (!state.locked) {
    note.innerHTML = T('scale.unlocked');
  } else {
    const off = Math.abs(state.earth.mpp - state.target.mpp) / state.earth.mpp;
    note.innerHTML = off > 0.08 ? T('scale.limit') : T('scale.same');
  }
}

/* ──────────────────── explore mode ───────────────────── */

function setMode(next) {
  mode = next;
  document.querySelectorAll('.mode-btn').forEach(b => {
    const on = b.dataset.mode === next;
    b.classList.toggle('is-active', on);
    b.setAttribute('aria-selected', on ? 'true' : 'false');
  });
  $('#rail').hidden    = next !== 'stories';
  $('#story').hidden   = next !== 'stories';
  $('#explore').hidden = next !== 'explore';
  document.body.classList.toggle('mode-explore', next === 'explore');

  const { earthMap, targetMap } = Twin.maps;
  if (next === 'explore') {
    earthMap.on('click', onExploreClick);
    targetMap.on('click', onExploreClick);
    renderExplore();
    paintFreeRoam();
  } else {
    if (activePair) paintPair(L10N.pair(activePair));
    earthMap.off('click', onExploreClick);
    targetMap.off('click', onExploreClick);
  }
  setTimeout(() => { earthMap.invalidateSize(); targetMap.invalidateSize(); }, 60);
}

const myPick = { earth: null, target: null };

function onExploreClick(e) {
  const side = e.target === Twin.maps.earthMap ? 'earth' : 'target';
  myPick[side] = { lat: e.latlng.lat, lon: e.latlng.lng };
  Twin.dropPin(side, e.latlng.lat, e.latlng.lng, T(side === 'earth' ? 'pin.earth' : 'pin.target'));
  renderExplore();
}

function renderExplore() {
  const host = $('#explore');
  const saved = loadSaved();
  const lon180 = v => (v + 540) % 360 - 180;

  host.innerHTML = `
    <h2>${esc(T('ex.title'))}</h2>
    <p class="ex-intro">${esc(T('ex.intro'))}</p>

    <div class="ex-world">
      <span>${esc(T('ex.compareWith'))}</span>
      <div class="ex-bodies">
        ${Object.keys(LAYERS).filter(k => k !== 'earth').map(k =>
          `<button class="ex-body ${k === Twin.bodyKey ? 'is-on' : ''}" data-body="${k}">${esc(L10N.body(k))}</button>`
        ).join('')}
      </div>
    </div>

    <div class="ex-picks">
      <div class="ex-pick">
        <h4>${esc(L10N.body('earth'))}</h4>
        <p>${myPick.earth
            ? `${myPick.earth.lat.toFixed(3)}°, ${myPick.earth.lon.toFixed(3)}°`
            : `<em>${esc(T('ex.clickLeft'))}</em>`}</p>
      </div>
      <div class="ex-pick">
        <h4>${esc(L10N.body(Twin.bodyKey))}</h4>
        <p>${myPick.target
            ? `${myPick.target.lat.toFixed(3)}°, ${lon180(myPick.target.lon).toFixed(3)}°`
            : `<em>${esc(T('ex.clickRight'))}</em>`}</p>
      </div>
    </div>

    <label class="ex-note">
      <span>${esc(T('ex.noteLabel'))}</span>
      <textarea id="exNote" rows="3" placeholder="${esc(T('ex.notePlaceholder'))}"></textarea>
    </label>
    <button class="primary-btn" id="exSave" ${myPick.earth && myPick.target ? '' : 'disabled'}>${esc(T('ex.save'))}</button>

    <details class="ex-hints" ${saved.length ? '' : 'open'}>
      <summary>${esc(T('ex.hints'))}</summary>
      <ul>${L10N.hints().map(h => `<li>${esc(h)}</li>`).join('')}</ul>
    </details>

    <section class="ex-saved">
      <h3>${esc(T('ex.saved'))} <span class="count">${saved.length}</span></h3>
      ${saved.length ? '' : `<p class="ex-empty">${esc(T('ex.empty'))}</p>`}
      <ul>${saved.map((s, i) => `
        <li>
          <button class="ex-load" data-i="${i}">
            <strong>${esc(s.note || T('ex.untitled'))}</strong>
            <span>${esc(L10N.body('earth'))} ${s.earth.lat.toFixed(2)}°, ${s.earth.lon.toFixed(2)}°
                  &rarr; ${esc(L10N.body(s.body))} ${s.target.lat.toFixed(2)}°, ${lon180(s.target.lon).toFixed(2)}°</span>
            <span class="ex-mpp">${esc(formatMpp(s.mpp))}</span>
          </button>
          <button class="ex-del" data-i="${i}" aria-label="${esc(T('ex.delete'))}">&times;</button>
        </li>`).join('')}
      </ul>
      ${saved.length ? `<button class="ghost-btn" id="exExport">${esc(T('ex.export'))}</button>` : ''}
    </section>`;

  host.querySelectorAll('.ex-body').forEach(b =>
    b.onclick = () => {
      Twin.setBody(b.dataset.body);
      buildLayerPickers();
      renderExplore();
      paintFreeRoam();
    });

  const save = host.querySelector('#exSave');
  if (save) save.onclick = () => {
    const note = (host.querySelector('#exNote').value || '').trim();
    const list = loadSaved();
    list.unshift({
      note, body: Twin.bodyKey,
      earth: myPick.earth, target: myPick.target,
      mpp: MPP.of('earth', Twin.maps.earthMap.getCenter().lat, Twin.maps.earthMap.getZoom()),
      at: new Date().toISOString()
    });
    saveAll(list.slice(0, 60));
    renderExplore();
  };

  host.querySelectorAll('.ex-load').forEach(b => b.onclick = () => {
    const s = loadSaved()[+b.dataset.i];
    if (!s) return;
    if (s.body !== Twin.bodyKey) Twin.setBody(s.body);
    myPick.earth = s.earth; myPick.target = s.target;
    const ez = MPP.zoomFor('earth', s.earth.lat, s.mpp);
    const tz = MPP.zoomFor(s.body, s.target.lat, s.mpp);
    Twin.maps.earthMap.setView([s.earth.lat, s.earth.lon], Math.min(ez, Twin.maps.earthMap.getMaxZoom()));
    Twin.maps.targetMap.setView([s.target.lat, s.target.lon], Math.min(tz, Twin.maps.targetMap.getMaxZoom()));
    Twin.dropPin('earth', s.earth.lat, s.earth.lon, T('pin.earth'));
    Twin.dropPin('target', s.target.lat, s.target.lon, T('pin.target'));
    buildLayerPickers();
    renderExplore();
    paintFreeRoam();
  });

  host.querySelectorAll('.ex-del').forEach(b => b.onclick = () => {
    const list = loadSaved(); list.splice(+b.dataset.i, 1); saveAll(list); renderExplore();
  });

  const exp = host.querySelector('#exExport');
  if (exp) exp.onclick = () => {
    const blob = new Blob([JSON.stringify(loadSaved(), null, 2)], { type: 'application/json' });
    const a = el('a'); a.href = URL.createObjectURL(blob);
    a.download = 'my-comparisons.json'; a.click(); URL.revokeObjectURL(a.href);
  };
}

function loadSaved() {
  try { return JSON.parse(localStorage.getItem(STORE_KEY)) || []; }
  catch { return []; }
}
function saveAll(list) {
  try { localStorage.setItem(STORE_KEY, JSON.stringify(list)); } catch { /* private mode */ }
}

/* ───────────────────── chrome & help ─────────────────── */

function wireChrome() {
  document.querySelectorAll('.mode-btn').forEach(b =>
    b.onclick = () => setMode(b.dataset.mode));

  document.querySelectorAll('.lang-btn').forEach(b =>
    b.onclick = () => { if (b.dataset.lang !== L10N.lang) { L10N.set(b.dataset.lang); relanguage(); } });

  $('#scaleLock').onchange = e => Twin.setLocked(e.target.checked);

  $('#modalClose').onclick = () => { $('#modal').hidden = true; };
  $('#modal').addEventListener('click', e => {
    if (e.target.id === 'modal') $('#modal').hidden = true;
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') $('#modal').hidden = true;
  });

  $('#helpBtn').onclick = () => {
    $('#modalBody').innerHTML = `
      <h3 id="modalTitle">${esc(T('help.title'))}</h3>
      <p class="help-lead">${esc(T('brand.what'))}</p>
      <ol class="help-list">
        <li>${T('help.1')}</li>
        <li>${T('help.2')}</li>
        <li>${T('help.3')}</li>
        <li>${T('help.4')}</li>
        <li>${T('help.5')}</li>
      </ol>
      <p class="modal-credit">${esc(T('help.credit'))}</p>`;
    $('#modal').hidden = false;
  };

  window.addEventListener('resize', () => {
    const { earthMap, targetMap } = Twin.maps;
    earthMap.invalidateSize(); targetMap.invalidateSize();
  });
}

})();
