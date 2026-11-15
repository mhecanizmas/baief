/* ============================================================
   BAIEF — configuration
   Every endpoint below was probed live before being written in.
   ============================================================ */
'use strict';

const GIBS = 'https://gibs.earthdata.nasa.gov/wmts/epsg3857/best';
const TREK = 'https://trek.nasa.gov/tiles';

/* GIBS wants a date for some layers and refuses one for others.
   `date:true`  -> .../default/{YYYY-MM-DD}/{set}/{z}/{y}/{x}.{ext}
   `date:false` -> .../default/{set}/{z}/{y}/{x}.{ext}                */
function gibsUrl(layer, set, ext, date) {
  return date
    ? `${GIBS}/${layer}/default/{time}/${set}/{z}/{y}/{x}.${ext}`
    : `${GIBS}/${layer}/default/${set}/{z}/{y}/{x}.${ext}`;
}

function trekUrl(body, layer, ext) {
  return `${TREK}/${body}/EQ/${layer}/1.0.0/default/default028mm/{z}/{y}/{x}.${ext}`;
}

/* ------------------------------------------------------------
   Planet constants. Earth is drawn in Web Mercator (GIBS ships
   epsg3857 tiles); Mars and the Moon are drawn in plate carrée,
   because that is what Trek and the Esri CTX service serve.
   ------------------------------------------------------------ */
const BODIES = {
  earth: {
    name: 'Earth',
    radius: 6378137,          // m, equatorial
    crs: 'mercator'
  },
  mars: {
    name: 'Mars',
    radius: 3396190,          // m, IAU 2000 sphere — matches Trek/Esri wkid 104971
    crs: 'equirect'
  },
  moon: {
    name: 'Moon',
    radius: 1737400,
    crs: 'equirect'
  }
};

/* ------------------------------------------------------------
   Imagery layers
   ------------------------------------------------------------ */
const LAYERS = {

  earth: [
    { id: 'weld',   label: 'Landsat true colour · 30 m', labelTr: 'Landsat gerçek renk · 30 m',
      url: gibsUrl('Landsat_WELD_CorrectedReflectance_TrueColor_Global_Annual',
                   'GoogleMapsCompatible_Level12', 'jpg', false),
      maxZoom: 11, tileSize: 256,
      attribution: 'NASA GIBS · Landsat WELD annual composite' },

    { id: 'hls',    label: 'Sentinel-2 recent · 30 m', labelTr: 'Sentinel-2 güncel · 30 m',
      url: gibsUrl('HLS_S30_Nadir_BRDF_Adjusted_Reflectance',
                   'GoogleMapsCompatible_Level12', 'png', true),
      time: '2024-08-20', maxZoom: 11, tileSize: 256,
      note: 'One satellite pass. Blank tiles mean the satellite was not overhead that day.',
      attribution: 'NASA GIBS · HLS S30 (Sentinel-2)' },

    { id: 'relief', label: 'Elevation relief · ASTER', labelTr: 'Yükselti kabartması · ASTER',
      url: gibsUrl('ASTER_GDEM_Color_Shaded_Relief',
                   'GoogleMapsCompatible_Level12', 'jpeg', false),
      maxZoom: 11, tileSize: 256,
      attribution: 'NASA GIBS · ASTER GDEM' },

    { id: 'modis',  label: 'Today from MODIS · 250 m', labelTr: 'MODIS ile bugün · 250 m',
      url: gibsUrl('MODIS_Terra_CorrectedReflectance_TrueColor',
                   'GoogleMapsCompatible_Level9', 'jpg', true),
      time: 'yesterday', maxZoom: 8, tileSize: 256,
      attribution: 'NASA GIBS · MODIS Terra' }
  ],

  mars: [
    { id: 'ctx',    label: 'CTX mosaic · 5 m', labelTr: 'CTX mozaiği · 5 m',
      url: 'https://astro.arcgis.com/arcgis/rest/services/OnMars/CTX/MapServer/tile/{z}/{y}/{x}',
      maxZoom: 12, tileSize: 512, zoomOffset: -1,
      attribution: 'NASA/JPL/MSSS/Caltech Murray Lab CTX · served via Esri' },

    { id: 'viking', label: 'Viking colour · 232 m', labelTr: 'Viking renk · 232 m',
      url: trekUrl('Mars', 'Mars_Viking_MDIM21_ClrMosaic_global_232m', 'jpg'),
      maxZoom: 7, tileSize: 256,
      attribution: 'NASA Mars Trek · Viking MDIM 2.1' },

    { id: 'themis', label: 'THEMIS day infrared · 100 m', labelTr: 'THEMIS gündüz kızılötesi · 100 m',
      url: trekUrl('Mars', 'THEMIS_DayIR_ControlledMosaics_100m_v2_oct2018', 'png'),
      maxZoom: 9, tileSize: 256,
      note: 'Heat, not light. Pale = rocky and bare, dark = fine dust.',
      attribution: 'NASA Mars Trek · Mars Odyssey THEMIS' },

    { id: 'mola',   label: 'Elevation relief · MOLA', labelTr: 'Yükselti kabartması · MOLA',
      url: trekUrl('Mars', 'Mars_MGS_MOLA_ClrShade_merge_global_463m', 'jpg'),
      maxZoom: 7, tileSize: 256,
      note: 'Measured by a laser on Mars Global Surveyor — a spacecraft that went silent in 2006 and is still in orbit.',
      attribution: 'NASA Mars Trek · MGS MOLA' }
  ],

  moon: [
    { id: 'wac',    label: 'LRO wide angle · 100 m', labelTr: 'LRO geniş açı · 100 m',
      url: trekUrl('Moon', 'LRO_WAC_Mosaic_Global_303ppd_v02', 'jpg'),
      maxZoom: 8, tileSize: 256,
      attribution: 'NASA Moon Trek · LRO WAC' },

    { id: 'lola',   label: 'Elevation relief · LOLA', labelTr: 'Yükselti kabartması · LOLA',
      url: trekUrl('Moon', 'LRO_LOLA_ClrShade_Global_128ppd_v04', 'png'),
      maxZoom: 5, tileSize: 256,
      attribution: 'NASA Moon Trek · LRO LOLA' }
  ]
};

/* Sharper-than-NASA imagery for the close-up end of Earth.
   Kept separate and labelled, because the rest of this project
   is deliberately NASA-sourced. */
const EARTH_SHARP = {
  id: 'sharp', label: 'Aerial close-up · sub-metre', labelTr: 'Hava yakın çekim · metre altı',
  url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
  maxZoom: 18, tileSize: 256, nonNasa: true,
  attribution: 'Esri World Imagery (not NASA) — for close-ups only'
};

/* Regional Mars mosaics that beat the global CTX where they exist.
   Bounds come from each layer's own WMTSCapabilities document. */
const MARS_REGIONAL = [
  { id: 'gusev',     layer: 'Gusev_CTX_BlockAdj_dd',
    bounds: [[-16.2218451, 173.2463549], [-10.9930557, 178.4633349]], maxZoom: 12 },
  { id: 'meridiani', layer: 'S_Meridiani_Sinus_Planium_CTX_BlockAdj_dd',
    bounds: [[-4.8925742, -8.093484], [-0.6078623, -2.8037058]], maxZoom: 12 },
  { id: 'insight',   layer: 'InSightCTXMosaic_112917',
    bounds: [[3.728413, 133.935732], [5.0696168, 137.2761299]], maxZoom: 13 }
];

/* ------------------------------------------------------------
   Scale mathematics
   The whole point of this project is that the two maps show the
   same number of metres per pixel, so a kid can trust their eyes.
   ------------------------------------------------------------ */
const MPP = {
  /* Web Mercator, 256 px tiles */
  mercator(body, lat, zoom) {
    const circumference = 2 * Math.PI * body.radius;
    return circumference * Math.cos(lat * Math.PI / 180) / (256 * Math.pow(2, zoom));
  },

  /* Plate carrée as Leaflet's L.CRS.EPSG4326 draws it:
     world width = 512·2^zoom pixels for 360° of longitude. */
  equirect(body, lat, zoom) {
    const degPerPx = 360 / (512 * Math.pow(2, zoom));
    const mPerDeg = 2 * Math.PI * body.radius / 360;
    return degPerPx * mPerDeg * Math.cos(lat * Math.PI / 180);
  },

  of(bodyKey, lat, zoom) {
    const b = BODIES[bodyKey];
    return b.crs === 'mercator' ? this.mercator(b, lat, zoom)
                                : this.equirect(b, lat, zoom);
  },

  /* Zoom on `bodyKey` that produces `targetMpp` metres per pixel at `lat`. */
  zoomFor(bodyKey, lat, targetMpp) {
    const b = BODIES[bodyKey];
    const cos = Math.cos(lat * Math.PI / 180);
    if (b.crs === 'mercator') {
      const c = 2 * Math.PI * b.radius;
      return Math.log2(c * cos / (256 * targetMpp));
    }
    const mPerDeg = 2 * Math.PI * b.radius / 360;
    return Math.log2(360 * mPerDeg * cos / (512 * targetMpp));
  }
};

/* A tidy 1-2-5 number just under `raw`, for the shared scale bar. */
function niceDistance(raw) {
  const pow = Math.pow(10, Math.floor(Math.log10(raw)));
  const mant = raw / pow;
  const step = mant >= 5 ? 5 : mant >= 2 ? 2 : 1;
  return step * pow;
}

function formatDistance(m) {
  if (m >= 1000) return `${(m / 1000).toLocaleString(undefined, { maximumFractionDigits: m >= 10000 ? 0 : 1 })} km`;
  return `${Math.round(m)} m`;
}

function formatMpp(mpp) {
  if (mpp >= 1000) return `${(mpp / 1000).toFixed(1)} km/pixel`;
  if (mpp >= 10)   return `${Math.round(mpp)} m/pixel`;
  return `${mpp.toFixed(1)} m/pixel`;
}

function isoDaysAgo(n) {
  const d = new Date(Date.now() - n * 86400000);
  return d.toISOString().slice(0, 10);
}
