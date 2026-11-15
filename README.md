# BAIEF

**Twin places on two worlds — seen by machines we left behind.**

BAIEF puts a place on Earth beside its twin on Mars or the Moon at genuinely
equal scale, and tells the story of the NASA machine still sitting on the far
one — the one nobody ever went back for.

A NASA Space Apps entry for *Abandoned but not Forgotten: Storytelling about
NASA's Discarded Equipment on the Moon and Mars.*

**→ [mhecanizmas.github.io/still-there](https://mhecanizmas.github.io/still-there/)**

Sunum yapacaksanız: [DEMO.md](DEMO.md) — iki dakikalık akış, tıklama sırası ve
jüri sorularına hazırlık. *(Presenting? `DEMO.md` has the two-minute script.)*

---

## The idea

Every piece of hardware NASA left on another world is sitting on a landscape.
That landscape almost always has a twin on Earth — a place a school student
could stand in.

So the project puts the two side by side: Göreme next to a Martian ash plateau,
Pamukkale next to a Martian hot-spring deposit, Tuz Gölü next to a Martian salt
flat. The student compares rock, erosion and craters with their own eyes. Then
they read who took the picture on the right, and learn that it is still there,
silent, and nobody is going back for it.

Geology is the hook. The abandoned machine is the story.

## What makes it honest

**The two maps are locked to the same number of metres per pixel.** Earth is
drawn in Web Mercator (that is what NASA GIBS serves) and Mars and the Moon in
plate carrée (that is what NASA Trek serves), so the two maps use different
projections at different zoom levels. The app solves for the zoom on each side
that produces an equal ground resolution, and draws one scale bar between them.
A crater that looks twice as wide as a Turkish lake really is twice as wide.

**It admits when it is bluffing.** When a view is enlarged past the sharpest
pixels that actually exist, a badge appears: `×5.0 enlarged`. Students find out
that NASA's public Earth imagery tops out around 60 m/pixel, while the Martian
CTX mosaic gives 5 m/pixel — we have sharper pictures of parts of Mars than of
Anatolia. Two pairs need sub-metre aerial imagery that NASA does not publish;
those are labelled **not NASA** in the layer name and in the readout.

**Nothing is simulated.** Every tile and every photograph is fetched live.

**It speaks Turkish and English.** The toggle sits in the top bar, and the
choice is remembered. A Turkish-speaking browser gets Turkish on first visit.
Everything switches — the eight stories, the layer names, the hints, the help —
except the NASA photo captions, which stay in the library's own words with the
image id beside them so anyone can check the source. Switching language never
moves the maps, so a student mid-exploration keeps their view.

## The eight pairs

| Earth | Another world | Still there |
|---|---|---|
| Göreme, Cappadocia | Aeolis & Zephyria Planum, Mars | **Mars Global Surveyor** (1996–2006), dead in orbit |
| Tuz Gölü | Endeavour Crater, Mars | **Opportunity** (2004–2018) |
| Pamukkale | Home Plate, Gusev Crater, Mars | **Spirit** (2004–2010), stuck in sand |
| Karapınar, Konya | Elysium Planitia, Mars | **InSight** (2018–2022), buried in dust |
| Channeled Scablands, USA | Chryse Planitia, Mars | **Viking 1** (1976–1982) |
| Adventdalen, Svalbard | Vastitas Borealis, Mars | **Phoenix** (2008), crushed by polar ice |
| Mauna Ulu, Hawaiʻi | Hadley Rille, the Moon | **Apollo 15's rover**, parked since 1971 |
| Craters of the Moon, Idaho | Oceanus Procellarum, the Moon | **Surveyor 3**, partly carried home by Apollo 12 |

Then **Now you try** hands the map over: click a spot on Earth, click a spot out
there, write down why they match, and save it. Saved comparisons stay in the
browser and export as a file, so a class can hand them in.

## Running it

No build step, no dependencies to install, no API key.

```bash
python -m http.server 8777
```

Then open <http://localhost:8777>. Any static host works — drop the folder on
GitHub Pages as is.

## Data sources

All endpoints were probed live before being written in; the resolution limits
below are measured, not quoted from documentation.

| Layer | Service | Native limit |
|---|---|---|
| Earth true colour | NASA GIBS — `Landsat_WELD_CorrectedReflectance_TrueColor_Global_Annual` | 30 m, zoom ≤ 11, **no data above ~70° N** |
| Earth recent | NASA GIBS — `HLS_S30` (Sentinel-2) | 30 m, one satellite pass per date |
| Earth relief | NASA GIBS — `ASTER_GDEM_Color_Shaded_Relief` | zoom ≤ 11 |
| Mars 5 m | Caltech Murray Lab CTX mosaic, served by Esri as `OnMars/CTX` | 5 m, zoom ≤ 11, 512 px tiles |
| Mars regional | NASA Mars Trek — `Gusev_CTX_BlockAdj_dd`, `S_Meridiani_Sinus_Planium_CTX_BlockAdj_dd`, `InSightCTXMosaic_112917` | 5 m, auto-enabled inside their own bounds |
| Mars colour | NASA Mars Trek — `Mars_Viking_MDIM21_ClrMosaic_global_232m` | 232 m, zoom ≤ 7 — also the base that fills CTX's gaps |
| Mars heat | NASA Mars Trek — `THEMIS_DayIR_ControlledMosaics_100m_v2_oct2018` | 100 m, ±65° latitude only |
| Mars relief | NASA Mars Trek — `Mars_MGS_MOLA_ClrShade_merge_global_463m` | 463 m, zoom ≤ 7 |
| Moon | NASA Moon Trek — `LRO_WAC_Mosaic_Global_303ppd_v02`, `LRO_LOLA_ClrShade_Global_128ppd_v04` | 100 m / elevation |
| Photographs | NASA Image and Video Library | — |
| Close-ups (2 pairs) | Esri World Imagery — **not NASA**, labelled in the UI | sub-metre |

Two notes for anyone extending this:

- **NASA's Mars Rover Photos API is gone.** `api.nasa.gov/mars-photos` was a
  Heroku app and now returns *No such app*. Rover photographs come from the
  NASA Image and Video Library instead.
- **Do not guess image sizes.** `images-assets.nasa.gov/.../{id}~medium.jpg`
  returns 403 for about half of all items, because the library does not
  generate every size for every image. Read `images-api.nasa.gov/asset/{id}`
  and pick from the files that actually exist.

## Structure

```
index.html
css/style.css
js/config.js      layer definitions, projection and metres-per-pixel maths
js/data.js        the eight pairs in English — places, geology, hardware stories
js/i18n.js        UI strings and the language switch
js/content-tr.js  Turkish text for the eight pairs
js/nasa.js        NASA Image and Video Library client
js/maps.js        the twin-map engine, scale locking, layer stack
js/ui.js          panels, galleries, explore mode
```

### Adding a language

English in `data.js` is the source. Turkish is an overlay in `content-tr.js`
keyed by pair id, and any field left out falls back to English, so a partial
translation still renders. A third language is one more overlay file, one more
column in `UI`, and one more button.

## Known limits

- Mars and Moon elevation layers stop around 300 m/pixel, so they need a wide
  view to look like anything. The badge says so when they do not.
- The ice-wedge polygons in the Svalbard pair are smaller than either world's
  best orbital imagery can resolve. That is the point of the pair, and the text
  says it plainly.
- Saved comparisons live in one browser's local storage. They are not synced.
