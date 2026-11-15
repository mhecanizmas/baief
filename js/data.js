/* ============================================================
   BAIEF — the pairs
   Each entry is one place on Earth, one place on another world,
   and one piece of hardware that is still sitting there.
   ============================================================ */
'use strict';

const PAIRS = [

/* ─────────────────────────── 1 ─────────────────────────── */
{
  id: 'cappadocia-medusae',
  body: 'mars',
  headline: 'Fairy chimneys, carved twice',
  earth: {
    name: 'Göreme, Cappadocia',
    where: 'Türkiye',
    lat: 38.6432, lon: 34.8283,
    rock: 'Ignimbrite and volcanic ash, 9–2.6 million years old',
    blurb: 'Erciyes and Hasandağ buried this plateau in hot ash. The ash welded into soft rock. Then rain and wind spent millions of years cutting it into towers, and people hollowed the towers into houses and churches.'
  },
  target: {
    name: 'Aeolis & Zephyria Planum',
    where: 'Medusae Fossae Formation, Mars',
    lat: -1.5, lon: -153.0,
    rock: 'The largest loose ash deposit on Mars, hundreds of metres thick',
    blurb: 'Mars has its own ash plateau, and it is enormous — roughly the area of India. With no rain to help, the wind alone has been sanding it into long parallel ridges called yardangs for millions of years.'
  },
  hardware: {
    name: 'Mars Global Surveyor',
    kind: 'Orbiter',
    lifetime: '1996 – 2006',
    whereNow: 'In orbit around Mars, silent',
    story: 'This is the odd one out: the machine behind this map is not on the ground, it is overhead. Mars Global Surveyor carried a laser called MOLA that fired about 670 million pulses at Mars and timed each echo. That is how we learned the true shape of the planet — every elevation map of Mars you have ever seen, including the one you can switch on here, is built from its measurements.',
    ending: 'On 2 November 2006 it was told to adjust a solar panel. A software error pointed the wrong radiator at the Sun, the battery overheated, and the spacecraft went quiet. It never answered again.',
    feel: 'It is still circling Mars right now — a dead satellite orbiting another planet, with nobody to switch it off.',
    images: { ids: ['PIA17486', 'PIA03874'], query: 'mars global surveyor' }
  },
  compare: [
    { label: 'What carved it',
      earth: 'Rain, streams and frost — then wind',
      target: 'Wind only. No rain for billions of years' },
    { label: 'Shape it makes',
      earth: 'Cones and chimneys, often capped by a harder boulder',
      target: 'Yardangs — long ridges, all combed the same direction' },
    { label: 'How to tell them apart',
      earth: 'Roads, fields and villages between the towers',
      target: 'Ridges running dead parallel for tens of kilometres' }
  ],
  lookFor: [
    'On Mars, notice that every ridge points the same way. That is the wind direction, frozen into rock.',
    'On Earth, the valleys branch like a tree. Branching means water. Mars has almost none of that here.',
    'Switch the Mars layer to THEMIS day infrared: the ash glows dark because fine dust holds no heat.'
  ],
  imagery: { earth: 'weld', target: 'ctx', mpp: 50 }
},

/* ─────────────────────────── 2 ─────────────────────────── */
{
  id: 'tuzgolu-meridiani',
  body: 'mars',
  headline: 'The salt that proves there was water',
  earth: {
    name: 'Tuz Gölü (Salt Lake)',
    where: 'Türkiye',
    lat: 38.7500, lon: 33.3700,
    rock: 'Evaporite — salt and sulfate crusts left by drying water',
    blurb: 'Turkey\'s second-largest lake is only a metre or two deep, and most summers it dries out completely, leaving a white crust of salt you can walk on. The crust is a record: it only forms where water sat, and then left.'
  },
  target: {
    name: 'Endeavour Crater',
    where: 'Meridiani Planum, Mars',
    lat: -2.28, lon: -5.23,
    rock: 'Sulfate bedrock studded with hematite spheres',
    blurb: 'A 22 km crater on a vast flat plain. Its rim cuts down through layers of sulfate rock — the same family of minerals that forms on a drying lakebed. A rover spent its last years here, reading those layers like pages.'
  },
  hardware: {
    name: 'Opportunity',
    kind: 'Rover',
    lifetime: '2004 – 2018',
    whereNow: 'Parked in Perseverance Valley, on the rim of Endeavour Crater',
    story: 'Opportunity was built to last 90 Martian days and drive about one kilometre. It lasted 5,111 days and drove 45 kilometres — a marathon, which is why NASA named its final stretch after one. Within weeks of landing it found jarosite and tiny grey spheres of hematite that the team nicknamed blueberries. Both minerals need liquid water to form. That was the answer to the question the rover had been sent to ask.',
    ending: 'In June 2018 a dust storm wrapped the whole planet and blotted out the Sun. Opportunity\'s last signal came on 10 June. NASA called and called for eight months. On 13 February 2019 it stopped calling.',
    feel: 'You may have read that its last words were "my battery is low and it is getting dark." That line is a journalist\'s paraphrase of the engineering data, not a message the rover sent. The real telemetry was a power reading and a temperature. Somehow that is sadder.',
    images: { ids: ['PIA20285', 'PIA21708', 'PIA07108'], query: 'opportunity rover mars' }
  },
  compare: [
    { label: 'Mineral left behind',
      earth: 'Sodium and magnesium salts, gypsum',
      target: 'Magnesium and calcium sulfates, jarosite' },
    { label: 'What the water was like',
      earth: 'Salty, shallow, seasonal',
      target: 'Salty, shallow — and acidic enough to sting' },
    { label: 'Why it is still visible',
      earth: 'The lake keeps refilling and drying each year',
      target: 'Nothing has rained on it in billions of years' }
  ],
  lookFor: [
    'Both surfaces are startlingly flat and pale. That flatness is the signature of standing water.',
    'Find Endeavour\'s rim: it is the only place the flat plain is cut open deep enough to see the layers.',
    'On Earth, look for the straight lines of salt-harvesting ponds along the southern shore. Mars has no straight lines.'
  ],
  imagery: { earth: 'weld', target: 'ctx', mpp: 60 }
},

/* ─────────────────────────── 3 ─────────────────────────── */
{
  id: 'pamukkale-gusev',
  body: 'mars',
  headline: 'Hot springs on a cold planet',
  earth: {
    name: 'Pamukkale',
    where: 'Türkiye',
    lat: 37.9203, lon: 29.1206,
    rock: 'Travertine — calcium carbonate dropped by hot spring water',
    blurb: 'Warm water rises here loaded with dissolved rock. The moment it reaches the air it lets that rock go, building white terraces a step at a time. Hot water plus minerals plus time equals a very distinctive deposit.'
  },
  target: {
    name: 'Home Plate, Columbia Hills',
    where: 'Gusev Crater, Mars',
    lat: -14.57, lon: 175.53,
    rock: 'Opaline silica — the fingerprint of hot water',
    blurb: 'Inside a 160 km crater, a cluster of low hills. A rover scraped them and found almost pure silica of the kind that only forms around hot springs and volcanic steam vents. Life on Earth loves exactly this kind of place.'
  },
  hardware: {
    name: 'Spirit',
    kind: 'Rover',
    lifetime: '2004 – 2010',
    whereNow: 'Sunk to its hubs in soft sand at a spot the team named Troy',
    story: 'Spirit was Opportunity\'s twin, landing three weeks earlier on the other side of the planet. It drew the harder ground. Gusev Crater turned out to be covered in dull volcanic rock, so Spirit drove to the hills on the horizon — and there, at Home Plate, found the opaline silica that showed Gusev once had hot springs. It made that discovery while driving backwards, dragging a wheel that had failed years earlier.',
    ending: 'In April 2009 the crust broke under it and Spirit sank into soft sulfate sand. For ten months engineers tried every escape they could simulate on Earth. None worked. It could not tilt its panels toward the winter Sun, and on 22 March 2010 it went quiet for good.',
    feel: 'It was designed to drive 600 metres. It drove 7,730. It is stuck now, but it is stuck roughly thirteen times further from where it landed than anyone promised.',
    images: { ids: ['PIA13543', 'PIA13730', 'PIA03274'], query: 'spirit rover mars troy' }
  },
  compare: [
    { label: 'Mineral the hot water left',
      earth: 'Calcium carbonate (travertine)',
      target: 'Silica (opal) — a different recipe, same kitchen' },
    { label: 'Heat source',
      earth: 'Deep groundwater warmed by Earth\'s interior',
      target: 'Volcanic heat, long since gone cold' },
    { label: 'Why scientists care',
      earth: 'Microbes thrive in these pools and get fossilised in the rock',
      target: 'If Mars ever had microbes, this is where they would be kept' }
  ],
  lookFor: [
    'Pamukkale is the brilliant white scar on the hillside — you can find it at this scale without help.',
    'In Gusev, pick out the Columbia Hills rising from the crater floor. Spirit climbed them.',
    'Switch Mars to the Gusev regional mosaic for a sharper look at the hills.'
  ],
  imagery: { earth: 'sharp', target: 'ctx', mpp: 10 }
},

/* ─────────────────────────── 4 ─────────────────────────── */
{
  id: 'karapinar-elysium',
  body: 'mars',
  headline: 'A flat, dusty place to listen',
  earth: {
    name: 'Karapınar volcanic plain',
    where: 'Konya, Türkiye',
    lat: 37.7160, lon: 33.5510,
    rock: 'Young basalt lava, maar craters, wind-blown dust',
    blurb: 'A plain of black volcanic rock dotted with explosion craters like Meke and Acıgöl, and swept constantly by wind that lifts the fine soil into the air. Farmers here fight the same dust that defeated a spacecraft on Mars.'
  },
  target: {
    name: 'Elysium Planitia',
    where: 'Mars',
    lat: 4.5024, lon: 135.6234,
    rock: 'Some of the youngest lava on Mars, under a thin dust blanket',
    blurb: 'Chosen not because it is interesting but because it is boring: flat, safe, and quiet. A lander needed somewhere it could sit perfectly still and feel the whole planet shake.'
  },
  hardware: {
    name: 'InSight',
    kind: 'Lander',
    lifetime: '2018 – 2022',
    whereNow: 'Sitting upright in Elysium Planitia under a coat of dust',
    story: 'InSight never moved a metre. It had one job: put a seismometer on the ground and listen. It heard 1,319 marsquakes, and from the way those tremors bent and bounced it worked out what Mars is made of — how thick the crust is, how big the core is. It did for Mars what doctors do with an ultrasound.',
    ending: 'InSight ran on sunlight, and Mars is a dusty place. Year by year the dust settled on its solar panels and the power dropped. The team tried trickling sand onto a panel so the wind would scour it clean. It bought a little time. The last signal came on 15 December 2022.',
    feel: 'Its second-to-last picture is a selfie so dust-covered you can barely tell it is a machine. The team posted it themselves, as a goodbye.',
    images: { ids: ['PIA25287', 'PIA25286', 'PIA23043'], query: 'insight lander mars dust' }
  },
  compare: [
    { label: 'Surface',
      earth: 'Basalt lava under drifting pale dust',
      target: 'Basalt lava under drifting pale dust' },
    { label: 'The wind',
      earth: 'Strong enough to strip topsoil off farmland',
      target: 'Strong enough to coat a spacecraft, too weak to clean it' },
    { label: 'What is underneath',
      earth: 'Crust about 35 km thick here',
      target: 'Crust 20–40 km thick — InSight measured it from the inside' }
  ],
  lookFor: [
    'Find the round maar craters near Karapınar. They are steam explosions, not impacts.',
    'Elysium Planitia looks empty at first. Zoom in and the lava flow fronts appear as faint ripples.',
    'Both look dull in true colour. Switch both to elevation relief, then zoom out — the Martian elevation map is only 300 m per pixel, so it needs room to breathe.'
  ],
  imagery: { earth: 'weld', target: 'ctx', mpp: 60 }
},

/* ─────────────────────────── 5 ─────────────────────────── */
{
  id: 'scablands-chryse',
  body: 'mars',
  headline: 'Scars of a flood that lasted days',
  earth: {
    name: 'Channeled Scablands',
    where: 'Washington, USA',
    lat: 46.6640, lon: -118.2230,
    rock: 'Basalt stripped bare by catastrophic floodwater',
    blurb: 'An ice dam failed and a lake the size of a sea emptied across this plateau in a matter of days, tearing the soil away and leaving naked rock, dry waterfalls and giant gravel ripples. Geologists refused to believe it for forty years.'
  },
  target: {
    name: 'Chryse Planitia',
    where: 'Mars',
    lat: 22.4830, lon: -47.9700,
    rock: 'Flood plain littered with boulders carried from upstream',
    blurb: 'The outflow end of Mars\'s own catastrophic floods. Water burst from the ground somewhere uphill, raced across this plain, and dumped a field of rocks. Then it was gone, and the rocks stayed exactly where they stopped.'
  },
  hardware: {
    name: 'Viking 1',
    kind: 'Lander',
    lifetime: '1976 – 1982',
    whereNow: 'On the Chryse plain, renamed the Thomas Mutch Memorial Station',
    story: 'On 20 July 1976 — seven years to the day after Apollo 11 landed on the Moon — Viking 1 became the first spacecraft to work on the surface of Mars for any length of time. It sent the first colour photographs ever taken from another planet\'s ground, measured the weather for years, and ran three experiments designed to detect life. The results were strange, argued over, and ultimately judged inconclusive. People still argue.',
    ending: 'It lasted six years. In November 1982 a command sent from Earth accidentally overwrote the software that kept its batteries charged. The antenna never pointed home again. Six years of work, ended by a typo.',
    feel: 'It took the first photograph ever made from the surface of Mars. It is still standing in the frame it photographed.',
    images: { ids: ['PIA00565', 'PIA10738', 'PIA01443'], query: 'viking 1 lander mars surface' }
  },
  compare: [
    { label: 'Water involved',
      earth: 'Roughly 2,000 cubic kilometres, drained in days',
      target: 'Comparable or larger — and also drained in days' },
    { label: 'What it left',
      earth: 'Bare basalt, dry cataracts, boulder fields',
      target: 'Bare rock, teardrop islands, boulder fields' },
    { label: 'Telltale shape',
      earth: 'Channels that braid, split and rejoin',
      target: 'Teardrop-shaped islands pointing downstream' }
  ],
  lookFor: [
    'Look for teardrop islands on Mars — rock that split the flood and streamlined behind the obstacle.',
    'In the Scablands, trace the channels: they braid rather than branch. Branching means rain, braiding means a flood.',
    'Both landscapes are basalt. The difference is that Earth\'s has been growing wheat on it for a century.'
  ],
  imagery: { earth: 'weld', target: 'ctx', mpp: 60 }
},

/* ─────────────────────────── 6 ─────────────────────────── */
{
  id: 'svalbard-vastitas',
  body: 'mars',
  headline: 'Ground that cracks into pentagons',
  earth: {
    name: 'Adventdalen',
    where: 'Svalbard, Norway',
    lat: 78.2000, lon: 15.8300,
    rock: 'Permafrost — soil cemented by ice all year round',
    blurb: 'Freeze ground hard enough, long enough, and it cracks into a honeycomb of polygons tens of metres across. Ice fills the cracks and widens them. From above it looks like a tiled floor, and it is one of the few patterns on Earth you can read as a thermometer.'
  },
  target: {
    name: 'Green Valley, Vastitas Borealis',
    where: 'Mars, 68° north',
    lat: 68.2188, lon: -125.7500,
    rock: 'Soil cemented by water ice, a few centimetres down',
    blurb: 'Mars\'s northern plain is tiled with the same polygons, for the same reason. A lander was sent here specifically because orbiters had spotted the pattern and guessed what it meant.'
  },
  hardware: {
    name: 'Phoenix',
    kind: 'Lander',
    lifetime: '2008 (157 Martian days)',
    whereNow: 'Collapsed under polar ice, 68° north',
    story: 'Phoenix had the shortest life and one of the clearest results. Its arm scraped a trench, and the pictures showed bright white chunks at the bottom. Days later those chunks had vanished — they had turned straight from ice into vapour in front of the camera. Not a hint of water, not an inference: water ice on Mars, watched disappearing. It also found perchlorate salts in the soil, which both complicate life and could one day supply oxygen.',
    ending: 'Phoenix landed in the Martian summer and was never meant to survive the winter. As autumn came the Sun sank, the power faded, and on 2 November 2008 it sent its last message. Two years later an orbiter photographed the site: the weight of carbon-dioxide ice through the winter had crushed its solar panels flat.',
    feel: 'It was the only one that got to finish its work exactly as planned, and then die on schedule.',
    images: { ids: ['PIA10906', 'PIA10910', 'PIA11723'], query: 'phoenix lander polar mars' }
  },
  compare: [
    { label: 'Why the ground cracks',
      earth: 'Ice-cemented soil contracts in deep cold',
      target: 'Ice-cemented soil contracts in deep cold' },
    { label: 'Polygon size',
      earth: 'Typically 10–30 m across',
      target: 'Typically 2–5 m across' },
    { label: 'What sits in the cracks',
      earth: 'Wedges of pure ice, growing a little each year',
      target: 'Ice, plus perchlorate salts that lower its melting point' }
  ],
  lookFor: [
    'Unlock the scale and zoom the Earth side right in: at a few metres per pixel the polygons appear. Mars cannot follow you down there — the sharpest orbital images of this plain are 5 m per pixel, which is exactly why somebody had to land on it to be sure.',
    'NASA tests Mars instruments in Svalbard precisely because of this resemblance. The Earth layer here is aerial imagery, not NASA — the Landsat composite has no data this far north.',
    'Switch Mars to the Viking colour layer: the northern plain is noticeably paler than the rest of the planet.'
  ],
  imagery: { earth: 'sharp', target: 'ctx', mpp: 15 }
},

/* ─────────────────────────── 7 ─────────────────────────── */
{
  id: 'maunaulu-hadley',
  body: 'moon',
  headline: 'A river of lava, and the car that parked beside it',
  earth: {
    name: 'Mauna Ulu lava channels',
    where: 'Kīlauea, Hawaiʻi, USA',
    lat: 19.3650, lon: -155.2020,
    rock: 'Basalt lava channels and collapsed tubes, erupted 1969–1974',
    blurb: 'Lava running downhill builds walls of its own cooled rock, roofs itself over, and drains away, leaving an empty stone pipe. Apollo crews trained here, walking on the closest thing Earth has to the surface they were about to visit.'
  },
  target: {
    name: 'Hadley Rille',
    where: 'Hadley–Apennine, the Moon',
    lat: 26.1322, lon: 3.6339,
    rock: 'A sinuous rille — a lava channel 1.5 km wide and 300 m deep',
    blurb: 'A canyon that snakes for about 80 kilometres along the foot of the lunar Apennine mountains. It is the same feature as Hawaiʻi\'s lava channels, built on a world with one-sixth the gravity and nothing to stop it growing.'
  },
  hardware: {
    name: 'Apollo 15 Lunar Roving Vehicle',
    kind: 'Crewed rover, descent stage and science station',
    lifetime: 'July 1971 — three days of driving',
    whereNow: 'Parked east of the landing site, pointed at the sky',
    story: 'Apollo 15 brought the first car to another world. David Scott and James Irwin drove it 27.9 kilometres across three days, out to the edge of Hadley Rille, where they stood and looked down into a lava channel on the Moon. The rover let them travel far enough to reach real geology instead of just the safe flat ground near the lander.',
    ending: 'Nothing failed. When they were done they parked it a short distance from the lander, aimed its television camera back at the ascent stage, and left — so that the camera could film their own departure. It did. Then it sat still.',
    feel: 'It is still parked there, with the last thing it was asked to do already done. The Lunar Reconnaissance Orbiter has photographed it from above: a small bright dot, and the wheel tracks leading to it, as crisp as the day they were made.',
    images: { query: 'apollo 15 lunar roving vehicle hadley', ids: [] }
  },
  compare: [
    { label: 'How it formed',
      earth: 'Lava carved and roofed its own channel, then drained',
      target: 'Lava carved and roofed its own channel, then drained' },
    { label: 'Size',
      earth: 'Channels metres to tens of metres wide',
      target: '1,500 m wide, 300 m deep, 80 km long' },
    { label: 'Why the Moon\'s is so much bigger',
      earth: 'Strong gravity, cooler and stickier lava, and rain to fill it in',
      target: 'One-sixth gravity, runnier lava, and nothing to erase it for 3.3 billion years' }
  ],
  lookFor: [
    'Hadley Rille is unmistakable at this scale — the dark meander against the grey plain.',
    'The Apennine mountains along the rille\'s edge are the rim of an impact basin, not folded peaks like the Alps.',
    'On Earth, the 1969–74 flows are the darkest, freshest ground. Older flows are paler and already green.'
  ],
  imagery: { earth: 'weld', target: 'wac', mpp: 75 }
},

/* ─────────────────────────── 8 ─────────────────────────── */
{
  id: 'snakeriver-procellarum',
  body: 'moon',
  headline: 'The one piece we went back for',
  earth: {
    name: 'Craters of the Moon',
    where: 'Snake River Plain, Idaho, USA',
    lat: 43.4160, lon: -113.5160,
    rock: 'Flood basalt, cinder cones and lava plains',
    blurb: 'A plain built by lava erupting from long cracks rather than single mountains, so it spreads out flat and dark instead of piling up. In 1969 the Apollo 14 crew came here to learn to read volcanic ground. The name was not a coincidence.'
  },
  target: {
    name: 'Oceanus Procellarum',
    where: 'the Moon',
    lat: -3.0124, lon: -23.4219,
    rock: 'Mare basalt — flood lava that filled a basin 3 billion years ago',
    blurb: 'The largest of the dark patches you can see from your window with the naked eye. It is not a sea. It is a lava plain, the same kind of rock as Idaho, erupted on a world with no air and no water.'
  },
  hardware: {
    name: 'Surveyor 3 — and Apollo 12',
    kind: 'Robotic lander, later visited by people',
    lifetime: 'Surveyor 3: 1967. Apollo 12: November 1969',
    whereNow: 'Both, 163 metres apart',
    story: 'Surveyor 3 landed in 1967, worked for two weeks, and was abandoned. Two and a half years later Apollo 12 was deliberately aimed at the same spot and touched down 163 metres away — proof that a crew could be delivered to a precise target. Charles Conrad and Alan Bean then walked over to the old robot, photographed it, and cut off its television camera and pieces of its tubing to bring home.',
    ending: 'Those pieces are the only hardware ever recovered from the surface of the Moon after years of exposure. Laboratories on Earth took them apart to see what two and a half years of vacuum, radiation, micrometeoroids and 250°C temperature swings actually does to paint, metal and glass. Every spacecraft built since has been designed with that answer in hand.',
    feel: 'This is the challenge\'s title in one place: abandoned, and then not forgotten. Most of Surveyor 3 is still standing there — minus a camera, which is in a museum.',
    images: { query: 'surveyor 3 apollo 12 moon', ids: [] }
  },
  compare: [
    { label: 'Rock type',
      earth: 'Basalt, erupted from fissures',
      target: 'Basalt, erupted from fissures' },
    { label: 'Age',
      earth: '15,000 to 2,000 years — geologically newborn',
      target: 'About 3 billion years, and barely weathered' },
    { label: 'What covers it',
      earth: 'Cinders, soil, sagebrush',
      target: 'Regolith — rock ground to powder by impacts' }
  ],
  lookFor: [
    'Both are flat, dark and almost featureless. That is what flood basalt looks like from above on any world.',
    'On the Moon, count the small sharp craters. Each one is an impact that Earth\'s atmosphere would have stopped.',
    'The Apollo 12 and Surveyor 3 site is far too small to see here — but the plain it sits on fills your screen.'
  ],
  imagery: { earth: 'weld', target: 'wac', mpp: 120 }
}

];

/* Things the explore mode suggests when a student has no idea where to start. */
const EXPLORE_HINTS = [
  'Volcano on Earth → volcano on Mars. Try Mount Erciyes against Elysium Mons.',
  'River delta on Earth → Jezero Crater on Mars, where Perseverance is working now.',
  'Sand dunes in the Sahara → the dark dune fields inside almost any big Martian crater.',
  'An impact crater on Earth is rare and worn. Find one, then find a fresh Martian crater the same width.',
  'Pick somewhere you have actually stood. Then find its twin. That is the whole exercise.'
];
