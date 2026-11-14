/* ============================================================
   STILL THERE — language
   English lives in data.js and is the source text. Turkish is an
   overlay keyed by pair id, so adding a third language means
   adding one more overlay and changing nothing else.
   ============================================================ */
'use strict';

const UI = {
  "brand.tagline":   { en: "Twin places on two worlds — seen by machines we left behind",
                       tr: "İki dünyada ikiz yerler — geride bıraktığımız makinelerin gözünden" },
  "mode.stories":    { en: "Stories", tr: "Hikâyeler" },
  "mode.explore":    { en: "Now you try", tr: "Şimdi sen dene" },
  "lock":            { en: "Lock scale", tr: "Ölçeği kilitle" },
  "help":            { en: "How to use", tr: "Nasıl kullanılır" },

  "body.earth":      { en: "Earth", tr: "Dünya" },
  "body.mars":       { en: "Mars",  tr: "Mars" },
  "body.moon":       { en: "Moon",  tr: "Ay" },

  "rail.title":      { en: "Pick a pair of places", tr: "Bir yer çifti seç" },
  "rail.intro":      { en: "One spot on Earth. One spot on another world that looks startlingly like it.",
                       tr: "Dünya'da bir nokta. Başka bir dünyada, ona şaşırtıcı derecede benzeyen bir nokta." },
  "rail.credit":     { en: "Imagery: NASA GIBS · NASA Mars&nbsp;Trek · NASA Moon&nbsp;Trek · NASA Image&nbsp;Library",
                       tr: "Görüntüler: NASA GIBS · NASA Mars&nbsp;Trek · NASA Moon&nbsp;Trek · NASA Image&nbsp;Library" },

  "scale.same":      { en: "same distance<br>on both maps", tr: "iki haritada da<br>aynı mesafe" },
  "scale.limit":     { en: "scale limit reached<br>on one side", tr: "bir tarafta<br>ölçek sınırı" },
  "scale.unlocked":  { en: "scales unlocked<br>— compare with care", tr: "ölçek kilidi açık<br>— dikkatli karşılaştır" },

  "read.regional":   { en: "regional mosaic", tr: "bölgesel mozaik" },
  "read.notnasa":    { en: "not NASA", tr: "NASA değil" },
  "read.enlarged":   { en: "enlarged", tr: "büyütülmüş" },
  "read.enlargedTip":{ en: "This imagery has been enlarged beyond its true resolution. The detail you are seeing is not real detail.",
                       tr: "Bu görüntü gerçek çözünürlüğünün ötesinde büyütüldü. Gördüğün ayrıntı gerçek ayrıntı değil." },

  "hw.tag":          { en: "Still there", tr: "Hâlâ orada" },
  "hw.type":         { en: "Type", tr: "Türü" },
  "hw.life":         { en: "Working life", tr: "Çalışma ömrü" },
  "hw.where":        { en: "Where it is now", tr: "Şimdi nerede" },
  "hw.ending":       { en: "How it ended.", tr: "Nasıl bitti." },
  "hw.loading":      { en: "Fetching photographs from NASA…", tr: "NASA'dan fotoğraflar getiriliyor…" },
  "hw.nophoto":      { en: "No photograph available from the NASA library right now.",
                       tr: "NASA kütüphanesinden şu an fotoğraf alınamadı." },

  "cmp.title":       { en: "Same shape, different planet", tr: "Aynı biçim, başka gezegen" },
  "look.title":      { en: "What to look for on the maps", tr: "Haritalarda neye bakmalı" },

  "pin.earth":       { en: "Your Earth spot", tr: "Senin Dünya noktan" },
  "pin.target":      { en: "Your spot out there", tr: "Senin oradaki noktan" },
  "pin.ishere":      { en: "is here", tr: "burada" },

  "ex.title":        { en: "Now you try", tr: "Şimdi sen dene" },
  "ex.intro":        { en: "Click anywhere on the left map, then anywhere on the right map, and you have made your own comparison. Keep the scale locked and the two views really are the same size.",
                       tr: "Sol haritada bir yere, sonra sağ haritada bir yere tıkla — kendi karşılaştırmanı yapmış olursun. Ölçek kilidi kapalı kalsın; o zaman iki görüntü gerçekten aynı büyüklükte olur." },
  "ex.compareWith":  { en: "Compare Earth with:", tr: "Dünya'yı şununla karşılaştır:" },
  "ex.clickLeft":    { en: "click the left map", tr: "sol haritaya tıkla" },
  "ex.clickRight":   { en: "click the right map", tr: "sağ haritaya tıkla" },
  "ex.noteLabel":    { en: "What makes these two alike?", tr: "Bu ikisini benzer kılan ne?" },
  "ex.notePlaceholder": { en: "Both have long parallel ridges all pointing the same way, so the wind must blow one way here too…",
                       tr: "İkisinde de hep aynı yöne bakan uzun paralel sırtlar var, demek rüzgâr burada da tek yönden esiyor…" },
  "ex.save":         { en: "Save this comparison", tr: "Bu karşılaştırmayı kaydet" },
  "ex.hints":        { en: "Stuck? Try one of these", tr: "Takıldın mı? Şunlardan birini dene" },
  "ex.saved":        { en: "Saved comparisons", tr: "Kaydedilen karşılaştırmalar" },
  "ex.empty":        { en: "Nothing saved yet. They stay in this browser.",
                       tr: "Henüz bir şey kaydedilmedi. Kayıtlar bu tarayıcıda kalır." },
  "ex.export":       { en: "Download as a file", tr: "Dosya olarak indir" },
  "ex.untitled":     { en: "Untitled comparison", tr: "Adsız karşılaştırma" },
  "ex.delete":       { en: "Delete", tr: "Sil" },
  "ex.freeroam":     { en: "free exploration", tr: "serbest keşif" },

  "help.title":      { en: "How to use this", tr: "Bu nasıl kullanılır" },
  "help.1":          { en: "<strong>Pick a pair.</strong> Each one is a place on Earth next to a place on Mars or the Moon that formed the same way.",
                       tr: "<strong>Bir çift seç.</strong> Her biri, Dünya'daki bir yerin yanına aynı şekilde oluşmuş bir Mars ya da Ay yerini koyar." },
  "help.2":          { en: "<strong>Trust the scale bar.</strong> The bar between the two maps is the same real distance on both sides. A crater that looks twice as wide really is twice as wide.",
                       tr: "<strong>Ölçek çubuğuna güven.</strong> İki haritanın arasındaki çubuk, her iki tarafta da aynı gerçek mesafedir. İki kat geniş görünen bir krater gerçekten iki kat geniştir." },
  "help.3":          { en: "<strong>Change what you are seeing.</strong> The dropdown under each map switches between visible light, heat, and elevation. Elevation is the one that makes landforms obvious.",
                       tr: "<strong>Ne gördüğünü değiştir.</strong> Her haritanın altındaki menü görünür ışık, ısı ve yükselti arasında geçiş yapar. Yer şekillerini en çok yükselti ele verir." },
  "help.4":          { en: "<strong>Read the hardware card.</strong> Every place on the right has a machine sitting on it that nobody is coming back for. The photographs come straight from NASA's library.",
                       tr: "<strong>Donanım kartını oku.</strong> Sağdaki her yerde, kimsenin geri almaya gelmediği bir makine duruyor. Fotoğraflar doğrudan NASA'nın kütüphanesinden geliyor." },
  "help.5":          { en: "<strong>Then make your own.</strong> Switch to <em>Now you try</em>, click a spot on each map, write down why they match, and save it.",
                       tr: "<strong>Sonra kendininkini yap.</strong> <em>Şimdi sen dene</em> sekmesine geç, her haritada bir nokta seç, neden eşleştiklerini yaz ve kaydet." },
  "help.credit":     { en: "Imagery: NASA GIBS (Earth) · NASA Mars Trek and the Caltech Murray Lab CTX mosaic (Mars) · NASA Moon Trek (Moon) · NASA Image and Video Library (photographs). Nothing here is simulated.",
                       tr: "Görüntüler: NASA GIBS (Dünya) · NASA Mars Trek ve Caltech Murray Lab CTX mozaiği (Mars) · NASA Moon Trek (Ay) · NASA Image and Video Library (fotoğraflar). Buradaki hiçbir şey simülasyon değil." }
};

/* Suggestions shown in explore mode. */
const EXPLORE_HINTS_TR = [
  "Dünya'da yanardağ → Mars'ta yanardağ. Erciyes'i Elysium Mons'a karşı dene.",
  "Dünya'da nehir deltası → Mars'ta Jezero Krateri, Perseverance'ın şu an çalıştığı yer.",
  "Sahra'da kum tepeleri → neredeyse her büyük Mars kraterinin içindeki koyu kumul alanları.",
  "Dünya'da çarpma krateri nadirdir ve aşınmıştır. Bir tane bul, sonra aynı genişlikte taze bir Mars krateri bul.",
  "Gerçekten ayak bastığın bir yer seç. Sonra ikizini bul. Bütün mesele bu."
];

/* ------------------------------------------------------------ */

const L10N = {
  lang: 'en',

  init() {
    let saved = null;
    try { saved = localStorage.getItem('stillthere.lang'); } catch { /* private mode */ }
    if (saved === 'tr' || saved === 'en') this.lang = saved;
    else if ((navigator.language || '').toLowerCase().startsWith('tr')) this.lang = 'tr';
    document.documentElement.lang = this.lang;
    return this.lang;
  },

  set(lang) {
    this.lang = (lang === 'tr') ? 'tr' : 'en';
    document.documentElement.lang = this.lang;
    try { localStorage.setItem('stillthere.lang', this.lang); } catch { /* private mode */ }
  },

  t(key) {
    const e = UI[key];
    if (!e) return key;
    return e[this.lang] || e.en;
  },

  body(key) { return this.t('body.' + key); },

  layer(def) { return (this.lang === 'tr' && def.labelTr) ? def.labelTr : def.label; },

  hints() { return this.lang === 'tr' ? EXPLORE_HINTS_TR : EXPLORE_HINTS; },

  /* A pair with Turkish folded in. English passes through untouched,
     and a missing Turkish field falls back to its English original. */
  pair(p) {
    if (this.lang !== 'tr') return p;
    const o = (typeof PAIRS_TR !== 'undefined') ? PAIRS_TR[p.id] : null;
    if (!o) return p;
    return {
      ...p,
      headline: o.headline || p.headline,
      earth:    { ...p.earth,    ...(o.earth    || {}) },
      target:   { ...p.target,   ...(o.target   || {}) },
      hardware: { ...p.hardware, ...(o.hardware || {}) },
      compare:  o.compare || p.compare,
      lookFor:  o.lookFor || p.lookFor
    };
  }
};
