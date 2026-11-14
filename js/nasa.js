/* ============================================================
   STILL THERE — NASA Image and Video Library client

   The library does NOT generate every size for every item: some
   have orig+small+thumb, some only orig+thumb. Guessing "~medium"
   returns 403 about half the time, so each image's real file list
   is read from the /asset endpoint and the best size is picked.
   ============================================================ */
'use strict';

const NASA = (() => {

  const API   = 'https://images-api.nasa.gov';
  const cache = new Map();

  function once(key, make) {
    if (!cache.has(key)) cache.set(key, make().catch(() => null));
    return cache.get(key);
  }

  const https = u => String(u).replace(/^http:/, 'https:');

  /* What files actually exist for this id, and which to use where. */
  function assets(id) {
    return once(`asset:${id}`, async () => {
      const r = await fetch(`${API}/asset/${encodeURIComponent(id)}`);
      if (!r.ok) return null;
      const j = await r.json();
      const hrefs = (j?.collection?.items || [])
        .map(i => https(i.href))
        .filter(h => /\.(jpe?g|png)$/i.test(h));
      if (!hrefs.length) return null;
      const pick = (...sizes) => {
        for (const s of sizes) {
          const hit = hrefs.find(h => h.includes(`~${s}.`));
          if (hit) return hit;
        }
        return hrefs[0];
      };
      return {
        id,
        /* The gallery renders these about 110 px wide, so take the
           smallest decent file. `orig` can be tens of megabytes. */
        display: pick('small', 'medium', 'thumb', 'large', 'orig'),
        full:    pick('large', 'orig', 'medium', 'small')
      };
    });
  }

  function metadata(id) {
    return once(`meta:${id}`, async () => {
      const r = await fetch(`https://images-assets.nasa.gov/image/${encodeURIComponent(id)}/metadata.json`);
      if (!r.ok) return {};
      const j = await r.json();
      return {
        title:       j['AVAIL:Title'] || j.title || '',
        description: j['AVAIL:Description508'] || j['AVAIL:Description'] || '',
        date:       (j['AVAIL:DateCreated'] || '').slice(0, 10)
      };
    });
  }

  function search(query, limit = 8) {
    return once(`q:${query}`, async () => {
      const r = await fetch(`${API}/search?media_type=image&q=${encodeURIComponent(query)}`);
      if (!r.ok) return [];
      const j = await r.json();
      return (j?.collection?.items || []).slice(0, limit).map(it => {
        const d = (it.data && it.data[0]) || {};
        return {
          id: d.nasa_id,
          title: d.title || '',
          description: d.description || '',
          date: (d.date_created || '').slice(0, 10)
        };
      }).filter(x => x.id);
    });
  }

  /* One resolved, displayable image — or null if the id is unusable. */
  async function resolve(id, known) {
    const [a, m] = await Promise.all([assets(id), known ? Promise.resolve(known) : metadata(id)]);
    if (!a) return null;
    return { id, src: a.display, full: a.full, ...(m || {}) };
  }

  /* Curated ids first. Any that fail are topped up from a live search,
     so a gallery is never left empty by one dead id. */
  async function imagesFor(spec, want = 3) {
    const out = [];
    const seen = new Set();

    for (const id of (spec?.ids || [])) {
      if (out.length >= want) break;
      const im = await resolve(id);
      if (im) { out.push(im); seen.add(id); }
    }

    if (out.length < want && spec?.query) {
      const hits = await search(spec.query, 10) || [];
      for (const h of hits) {
        if (out.length >= want) break;
        if (seen.has(h.id)) continue;
        const im = await resolve(h.id, h);
        if (im) { out.push(im); seen.add(h.id); }
      }
    }
    return out;
  }

  return { assets, metadata, search, resolve, imagesFor };
})();
