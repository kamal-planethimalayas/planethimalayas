// src/data/treksData.js
export const treks = [
  {
    id: "pin-bhaba-pass-trek",
    name: "Pin Bhaba Pass Trek",
    tags: ["pass"],
    difficulty: ["difficult"],
    season: ["monsoon", "autumn"],
    month: ["july", "august", "september", "october"],
    region: "himachal",
    duration: "6 Nights / 7 Days",
    coordinates: [
                  [31.5397, 77.9364], // Kafnu (start)
                  [32.0453, 78.0431], // Mud Village (end)
                  ],

    heroImage: "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535291/pin-bhaba-view1_ixsyit.jpg",
    
     heroImages: [
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535291/pin-bhaba-view1_ixsyit.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535262/pin-bhaba-view10_t3jkfh.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535268/pin-bhaba-view16_v14bg6.jpg",
  ],

    subtitle: "The Most Beautiful Himalayan Crossover",

    seo: {
    title: "Pin Bhaba Pass Trek | Itinerary, Cost & Dates | Planethimalayas",
    description: "Pin Bhaba Pass Trek (16,105 ft) is Himachal’s most dramatic crossover from lush Kinnaur to stark Spiti. 7 days of forests, rivers, meadows, and high-altitude adventure."
  },

    overview: {
      facts: [
        { emoji: "⏳", label: "Trek Duration", value: "6 Nights / 7 Days" },
        { emoji: "⚡", label: "Trek Grade", value: "Difficult" },
        { emoji: "🏔️", label: "Max Altitude", value: "16,105 ft (Pin Bhaba Pass)" },
        { emoji: "⚡", label: "Trek Distance", value: "50 Km" },
        { emoji: "🌤️", label: "Best Time", value: "July to mid-September" },
        { emoji: "🗺️", label: "Region", value: "Crossover from Bhaba Valley in Kinnaur to Pin Valley in Spiti, H.P." },      
        { emoji: "📍", label: "Start Point", value: "Kafnu (Kinnaur Valley, H.P.)" },
        { emoji: "🏁", label: "End Point", value: "Mudh (Spiti Valley, H.P.)" },
        { emoji: "🧥", label: "Cloakroom facility", value: "Not available" },                
      ],
      snippet: `The Pin Bhaba Pass Trek is a rare Himalayan journey where the landscape changes so dramatically, it feels as if the mountains are turning their own pages for you. What begins in the deep green folds of Kinnaur slowly transforms into the cold, wind-shaped desert of Spiti — and this transition is so surreal that trekkers often pause not just to admire the view, but to absorb the shift happening around them.

<br>The trail opens gently, leading you through the cool forests of Kafnu and into the enchanting woods of Mulling. A pale blue river rushes beside you, weaving between moss-covered rocks, while sunlight filters through tall birches and pines. In moments, the forest parts and you step into wide meadows — soft, rolling grasslands with ridgelines rising on either side. This is the first hint of how unpredictable and rewarding this trek is going to be.

<br>Beyond Mulling, the valley expands into the vast green amphitheater of Karah. Here the mountains feel closer, the meadows broader, and the silence deeper. Horses graze freely, wildflowers nod in the breeze, and the evening light paints everything gold. It’s the kind of campsite that stays with you long after the trek ends.

<br>As you move higher, the terrain sharpens. Streams braid themselves across the land, boulders scatter the slopes, and the air becomes colder, cleaner, and thinner. The approach to Phutsirang — a high-altitude river delta surrounded by massive mountain walls — feels like stepping into an untouched corner of the world. The glacial chill in the air, the sound of meltwater flowing through multiple channels, and the sheer sense of isolation create an atmosphere both humbling and exhilarating.

<br>The pass day is the culmination of everything the trek has built up to. At 16,100 ft, the ascent is steep and thrilling, and the moment you reach the top, the panorama hits you with a silence that feels sacred. Behind you lie the green valleys of Kinnaur — forests, grasslands, rivers, life. Ahead of you unfolds the stark beauty of Spiti — pastel mountains, wide open spaces, and a desert carved by ancient winds. Standing on the pass feels like standing between two worlds.

<br>The descent takes you into the mystical openness of Pin Valley, where the trails widen and the colours of the mountains shift with the sun — pinks, purples, browns, and whites blending into each other like a natural painting. Villages appear slowly, their Buddhist roots evident in fluttering prayer flags, whitewashed homes, and tiny gompas perched against the mountains.

<br>Every step on Pin Bhaba Pass feels like a discovery — of terrain, of culture, of yourself. It is a trek for those who crave variety, who love the idea of waking up to new landscapes every day, and who want to feel the Himalayas in their purest, most dramatic form. This isn’t just a crossover trek — it is a Himalayan story unfolding in front of you, one breathtaking chapter at a time.
    `},

    price: 17900,
    priceNote: "* Kafnu to Kaza",
    addons: {
      transport: 4000,
      offloadingbag: 4800,
      transportNote: "* Shimla to Manali",
      offloadingNote: "* Maximum weight 9kg / bag"
    },

    inclusionsNote: "🍽️ All Meals – Nutritious meals provided from dinner on Day 1 to lunch on Day 6",

    dates: [
      { label: "11 Jul - 17 Jul", start: "2026-07-11", end: "2026-07-17" },
      { label: "12 Jul - 18 Jul", start: "2026-07-12", end: "2026-07-18" },
      { label: "18 Jul - 24 Jul", start: "2026-07-18", end: "2026-07-24" },
      { label: "19 Jul - 25 Jul", start: "2026-07-19", end: "2026-07-25" },
      { label: "25 Jul - 31 Jul", start: "2026-07-25", end: "2026-07-31" },
      { label: "26 Jul - 01 Aug", start: "2026-07-26", end: "2026-08-01" },
      { label: "01 Aug - 07 Aug", start: "2026-08-01", end: "2026-08-07" },
      { label: "02 Aug - 08 Aug", start: "2026-08-02", end: "2026-08-08" },
      { label: "08 Aug - 14 Aug", start: "2026-08-08", end: "2026-08-14" },
      { label: "09 Aug - 15 Aug", start: "2026-08-09", end: "2026-08-15" },
      { label: "15 Aug - 21 Aug", start: "2026-08-15", end: "2026-08-21" },
      { label: "16 Aug - 22 Aug", start: "2026-08-16", end: "2026-08-22" },
      { label: "22 Aug - 28 Aug", start: "2026-08-22", end: "2026-08-28" },
      { label: "23 Aug - 29 Aug", start: "2026-08-23", end: "2026-08-29" },
      { label: "29 Aug - 04 Sep", start: "2026-08-29", end: "2026-09-04" },
      { label: "30 Aug - 05 Sep", start: "2026-08-30", end: "2026-09-05" },
      { label: "05 Sep - 11 Sep", start: "2026-09-05", end: "2026-09-11" },
      { label: "06 Sep - 12 Sep", start: "2026-09-06", end: "2026-09-12" },
      { label: "12 Sep - 18 Sep", start: "2026-09-12", end: "2026-09-18" },
      { label: "13 Sep - 19 Sep", start: "2026-09-13", end: "2026-09-19" },
      { label: "19 Sep - 25 Sep", start: "2026-09-19", end: "2026-09-25" },
      { label: "20 Sep - 26 Sep", start: "2026-09-20", end: "2026-09-26" },
      { label: "26 Sep - 02 Oct", start: "2026-09-26", end: "2026-10-02" },
      { label: "27 Sep - 03 Oct", start: "2026-09-27", end: "2026-10-03" },
      { label: "03 Oct - 09 Oct", start: "2026-10-03", end: "2026-10-09" },
      { label: "04 Oct - 10 Oct", start: "2026-10-04", end: "2026-10-10" },
      
    
    ],

    highlights: [
      "Stunning crossover from the green Kinnaur to the arid Spiti Valley",
      "Pin Bhaba Pass at 16,105 ft with panoramic mountain views",
      "Walk through dense forests, meadows, river crossings, and glacier zones",
      "Camp beside rivers and under starry skies at scenic campsites like Kara and Phustirang",
      "Experience two distinct cultures — Kinnauri and Spitian — in one trek",
    ],

    itinerary: [
  {
    "day": 1,
    "title": "Shimla to Janglik (9,200 ft)",
    "details": "<strong>• Drive distance: ~200 km | Duration: 7–8 hours.</strong><br>• The adventure begins with a long drive from Shimla into the heart of Kinnaur. As you leave the city behind, the landscape shifts quickly from crowded roads to rolling hills, dense forests, and terraced villages. The Rohru–Tangnu stretch is especially scenic, lined with pine and deodar trees and dotted with small wooden bridges over gurgling streams. As the road climbs higher, the Pabbar River appears in glimpses below, carving its way through the valley with quiet determination. The final stretch into Janglik winds through narrow lanes flanked by apple orchards and clusters of wooden houses. The village feels untouched by time, perched tranquilly amid the hills, and offers a gentle introduction to the isolation and serenity of the high Himalayas. Overnight stay is in a local homestay or guesthouse, where the evening air is crisp, the sky clear, and the distant peaks silhouetted against the setting sun."
  },
  {
    "day": 2,
    "title": "Janglik to Dayara (11,000 ft)",
    "details": "<strong>• Trek distance: ~10 km | Duration: 6–7 hours | Altitude gain: ~1,800 ft.</strong><br>• Leaving Janglik, the trail climbs gently through lush oak and pine forests, the Bhaba River accompanying you with its melodic rush. You cross small streams and wooden bridges, entering dense forest sections where sunlight filters through the leaves. After a steady climb, the forest opens to expansive alpine meadows. Dayara, a vast, open grassland, comes into view — surrounded by towering ridges and dotted with wildflowers in summer. The campsite offers panoramic views, soft breezes, and a chance to enjoy the stillness of high-altitude meadows. This first trek day reveals the wilderness charm of Buran Ghati."
  },
  {
    "day": 3,
    "title": "Dayara to Litham (11,800 ft)",
    "details": "<strong>• Trek distance: ~8 km | Duration: 5–6 hours | Altitude gain: ~800 ft.</strong><br>• Today's journey starts with gentle slopes across Dayara’s meadows. The path gradually ascends, moving into mixed forest sections with towering birches and occasional silver oak. Small streams cross your trail, offering refreshing breaks. As the forest thins, glimpses of Litham appear ahead, perched on a hillside beside a sparkling brook. The campsite is set in open meadows with distant views of hidden waterfalls and snow-capped peaks. Overnight at Litham prepares you for the higher-altitude excursion tomorrow."
  },
  {
    "day": 4,
    "title": "Acclimatization Excursion to Chandranahan Lakes (13,800 ft)",
    "details": "<strong>• Trek distance: ~10 km | Duration: 6–7 hours | Altitude gain: ~2,000 ft.</strong><br>• An early start takes you toward the pristine Chandranahan Lakes. The trail is steeper, climbing over boulders and rocky outcrops, interspersed with alpine meadows. Snow patches may linger depending on season. The serene lakes glisten under the morning sun, surrounded by cascading streams and wild alpine flora. After soaking in the high-altitude scenery, you return to Litham for overnight stay. This acclimatization hike strengthens your body for the upcoming pass crossing."
  },
  {
    "day": 5,
    "title": "Litham to Dunda (13,300 ft)",
    "details": "<strong>• Trek distance: ~9 km | Duration: 6–7 hours | Altitude gain: ~1,500 ft.</strong><br>• Leaving Litham, the trail transitions from gentle meadows to rocky ridges and scree slopes. Streams crisscross your path, and the valley narrows as you ascend. Wildflowers and grasses accompany your steps, and distant views of Buran Ghati appear. The Dunda campsite sits on a high plateau with sweeping views of the surrounding mountains and the route toward Gunas Pass. This is your last camp before the pass, making it a crucial resting point. Evening offers a chance to observe the interplay of light and shadow on the peaks and valleys."
  },
  {
    "day": 6,
    "title": "Dunda to Munirang via Buran Ghati Pass (15,000+ ft) | Descent ~2,700 ft",
    "details": "<strong>• Trek distance: ~12 km | Duration: 9–10 hours | Altitude gain: ~1,700 ft ascent, ~2,700 ft descent.</strong><br>• Today is the pinnacle of the trek. The climb to Buran Ghati Pass starts before sunrise, with the trail weaving through rocky slopes, scree, and occasional snowfields. At the saddle, the view is breathtaking — behind lies Bhaba Valley, green and lush, while ahead spreads the barren, rugged expanse of Spiti. The descent begins carefully, navigating moraine and glacier remnants. Crossing icy streams, you finally reach Munirang campsite, nestled in alpine meadows beside the river. The dramatic contrast between lush Kinnaur and stark Spiti is fully realized here, marking a memorable high point of the trek."
  },
  {
    "day": 7,
    "title": "Munirang to Barua Village → Drive to Shimla",
    "details": "<strong>• Trek distance: ~16 km | Duration: 6–7 hours | Altitude loss: ~2,300 ft.</strong><br>• Descending from Munirang, the trail passes through pastures, boulder fields, and scattered alpine shrubs. The Pin River flows nearby, and the valley gradually widens. Crossing wooden bridges and small streams, you approach Barua Village — a tranquil settlement of whitewashed homes and barley fields. From Barua, vehicles take you back to Shimla. Along the drive, the landscape shifts from barren high-altitude desert to lush valleys and dense forests. Arriving in Shimla marks the end of an unforgettable journey through two contrasting Himalayan worlds."
  }

],


    didYouKnow: [
      "Pin Bhaba Pass connects lush Bhaba Valley to the cold desert of Spiti — a rare crossover trek.",
      "Located at 16,105 ft, the pass offers views of Pin Valley National Park, home to snow leopards and Himalayan ibex.",
      "Shares an endpoint with the famous Pin Parvati Pass, but is considered safer and more scenic.",
      "Locals say this trail was once used by ancient traders and shepherds — it’s a route rich in history.",
      "The Kinnaur side of the trek (up to Kara and Phustirang) is rich in alpine flora — you’ll walk through forests of pine, oak, and silver birch, and later meadows carpeted with wildflowers like Himalayan blue poppies, primulas, and orchids during peak summer.",
      "The Bhaba Valley is home to diverse birdlife — keep an eye out for Himalayan monals, lammergeiers (bearded vultures), golden eagles, and partridges on the grassy slopes.",
      "On the Spiti side, the landscape becomes stark and cold desert–like, but you may spot herds of Himalayan ibex grazing the cliffs, blue sheep (bharal) crossing ridges, and if lucky, signs of the elusive snow leopard.",
      "Medicinal plants like aconite, gentians, and rhubarb grow naturally in high-altitude meadows and have been used by locals for centuries.",
      "The sharp contrast across the pass is astonishing — lush, green, and life-filled valleys of Kinnaur suddenly give way to the arid, almost Martian landscapes of Spiti, where only the hardiest plants and animals survive."
    ],

    howToReach: {
      air: "Nearest Airport: Shimla Airport (200 km) or Chandigarh Airport (310 km). From there, take a taxi/bus to Rampur → Kafnu.",
      train: "Nearest Railway Station: Shimla. Or reach Kalka (broad gauge) and take the toy train to Shimla. Continue by road to Kafnu.",
      road: "From Shimla: 200 km / 7–8 hrs via Rampur and Tapri. From Chandigarh: 310 km / 10–11 hrs via Shimla.",
      travelTip: "Reach Shimla a day early and start for Kafnu early next morning to avoid delays due to traffic or weather.",
    },
    
    gallery: [
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535293/pin-bhaba-view6_eizy03.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535293/pin-bhaba-view15_rwnoph.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535292/pin-bhaba-view14_hlyors.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535291/pin-bhaba-view13_thkzzu.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535291/pin-bhaba-view1_ixsyit.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535289/pin-bhaba-view7_f40z5s.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535285/pin-bhaba-view12_dqaoi0.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535284/pin-bhaba-view11_iz6bwg.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535281/pin-bhaba-view3_pjht03.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535269/pin-bhaba-view5_ouhugg.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535268/pin-bhaba-view2_gvnfjr.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535268/pin-bhaba-view16_v14bg6.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535266/pin-bhaba-view18_thvhus.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535265/pin-bhaba-hero_jcrw0o.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535264/pin-bhaba-view17_aud9we.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535262/pin-bhaba-view4_weoxhv.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535262/pin-bhaba-view10_t3jkfh.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535260/pin-bhaba-view8_rlpwpy.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535257/pin-bhaba-view9_vhhald.jpg",
    ],

    downloadLink: "/docs/Himalayan_Trek_Packing_List.pdf",

    faqs: {
      questions: [
        {
          question: "Who can participate in the Pin Bhaba Pass trek?",
          answer: "This trek is suitable for individuals with prior high-altitude trekking experience and good physical fitness. It involves steep ascents, river crossings, and high-altitude camping.",
        },
        {
          question: "What should I pack for the Pin Bhaba Pass trek?",
          answer: "Essential items include waterproof trekking shoes, layered clothing, a 50L rucksack with rain cover, thermal wear, and a headlamp. For a detailed packing list, refer to the downloadable PDF above.",
        },
        {
          question: "Is offloading available during the trek?",
          answer: "Yes, offloading services are available at an additional cost. Please check with the trek organizer for current rates and availability.",
        },
        {
          question: "Will there be mobile network coverage during the trek?",
          answer: "Mobile network coverage is limited. Airtel has 4G coverage at Kafnu, but connectivity is unreliable beyond that point. It's advisable to inform family and friends about the limited communication options.",
        },
        {
          question: "What permits are required for the trek?",
          answer: "The trek requires Inner Line Permits, National Park Permits, and Forest Permits. These are typically arranged by the trek organizer.",
        },
      ],
    },
    faqsLink: "/pages/faqs-and-articles",
  },

  
  {
    id: "hampta-pass-trek",
    name: "Hampta Pass Trek",
    tags: ["beginner", "pass"],
    difficulty: ["moderate"],
    season: ["monsoon", "autumn"],
    month: ["july", "august", "september", "october"],
    duration: ["4 Nights / 5 Days"],
    region: "himachal",
    coordinates: [
    [32.2396, 77.1892], // Jobra (start)
    [32.2592, 77.2503], // Jwara
    [32.2789, 77.3125], // Balu ka Ghera
    [32.3078, 77.3750], // Shea Goru
    [32.3236, 77.4456], // Hampta Pass (end)
  ],
    heroImage: "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535045/hampta-pass-hero_tp9o7j.jpg",
    
    heroImages: [
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535045/hampta-pass-hero_tp9o7j.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535063/hampta-pass-6_v4mdqp.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535062/hampta-pass-1_lcseig.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535051/hampta-pass-12_xjjdgc.jpg",
  ],

    subtitle: "A Dramatic Himalayan Crossover",

    seo: {
    title: "Hampta Pass Trek | Itinerary, Cost & Dates | Planethimalayas",
    description: "Hampta Pass Trek (14,035 ft) is a stunning crossover from the lush valleys of Kullu to the barren cold deserts of Lahaul. A 5-day Himalayan adventure filled with forests, wildflowers, and dramatic landscapes."
  },

    overview: {
      facts: [
        { emoji: "⏳", label: "Trek Duration", value: "4 Nights / 5 Days" },
        { emoji: "⚡", label: "Trek Grade", value: "Moderate" },
        { emoji: "🏔️", label: "Max Altitude", value: "14,100 ft (Hampta Pass)" },
        { emoji: "⚡", label: "Trek Distance", value: "26 Km" },
        { emoji: "🌤️", label: "Best Time", value: "July to October" },
        { emoji: "🗺️", label: "Region", value: "Crossover from Kullu valley to Lahaul valley, Himachal Pradesh" },
        { emoji: "📍", label: "Start Point", value: "Jobra (Near Manali)" },
        { emoji: "🏁", label: "End Point", value: "Chatru" },
        { emoji: "🧥", label: "Cloakroom facility", value: "Available" },
      ],
      snippet: 'Imagine stepping onto a trail where every single day introduces you to a brand-new Himalayan world.<br>The Hampta Pass trek in Himachal Pradesh begins deep inside the lush Kullu Valley, where pine forests, maple groves, and apple orchards wrap the trail in shades of green. The early sections feel warm and welcoming — gentle gradients, forest canopies, and the soft roar of the Rani Nala accompanying you through the first stretch.<br>As you climb higher, the landscape unfolds into wide alpine meadows, carpeted with monsoon wildflowers and crisscrossed with snow-fed streams. These meadows — especially around Jwara — are among the prettiest on any Himalayan trek, and they offer crystal-clear views of the surrounding Pir Panjal range.<br>The climb towards the pass brings a dramatic shift. The valley narrows, the terrain becomes glacial, and the mountain walls rise sharply on either side. This is where the Hampta Pass trail begins to feel truly alpine. As you gain height, two iconic Himalayan giants — Mt. Deo Tibba (19,688 ft) and Mt. Indrasan (20,413 ft) — stand proudly over the horizon. Their hanging glaciers and sharp ridgelines dominate the skyline, adding a thrilling high-altitude backdrop to the final approach.<br>At Hampta Pass (14,000 ft), everything changes. Standing on the saddle feels like stepping across a natural border between worlds. Behind you lies the lush greenery of Manali and Kullu; ahead lies the stark, moon-like desert of Lahaul–Spiti. The contrast is so sudden and so intense that it feels almost unreal — barren ridges, rugged cliffs, brown mountains, and vast open valleys stretching endlessly into Spiti.<br>The descent towards Shea Goru and Chhatru takes you through dramatic glacial terrain, moraine fields, and icy river crossings — the kind of variety few short Himalayan treks offer.<br>And then comes the perfect finale: A scenic drive to the legendary Chandratal Lake — the high-altitude, crescent-shaped blue lake tucked deep within Spiti. Visiting Chandratal after the Hampta Pass trek is like walking into a different dimension — turquoise water, snow peaks reflecting in the lake, and the crystal-clear Spiti sky arching overhead. Many trekkers consider this the highlight of the entire Hampta experience.<br>In just 5 days, the Hampta Pass trek packs in forests, meadows, waterfalls, river-crossings, glacial valleys, high-altitude pass, and the crossover into Spiti — making it one of the most cinematic, diverse, and rewarding treks in the Indian Himalayas. Add the views of Deo Tibba & Indrasan, and the optional visit to Chandratal Lake, and this becomes a must-do trek for anyone seeking adventure, variety, and unforgettable Himalayan landscapes.'
    },

    price: 11900,
    priceNote: "* Manali to Manali (including Chandratal)",
    addons: {
      offloadingbag: 4000,
      offloadingNote: "* Maximum weight 9kg  /bag"
    },

    inclusionsNote: "🍽️ All Meals – Nutritious meals provided from lunch on Day 1 to breakfast on Day 5",

    dates: [
      { label: "11 Jul - 17 Jul", start: "2026-07-11", end: "2026-07-17" },
      { label: "12 Jul - 18 Jul", start: "2026-07-12", end: "2026-07-18" },
      { label: "18 Jul - 24 Jul", start: "2026-07-18", end: "2026-07-24" },
      { label: "19 Jul - 25 Jul", start: "2026-07-19", end: "2026-07-25" },
      { label: "25 Jul - 31 Jul", start: "2026-07-25", end: "2026-07-31" },
      { label: "26 Jul - 01 Aug", start: "2026-07-26", end: "2026-08-01" },
      { label: "01 Aug - 07 Aug", start: "2026-08-01", end: "2026-08-07" },
      { label: "02 Aug - 08 Aug", start: "2026-08-02", end: "2026-08-08" },
      { label: "08 Aug - 14 Aug", start: "2026-08-08", end: "2026-08-14" },
      { label: "09 Aug - 15 Aug", start: "2026-08-09", end: "2026-08-15" },
      { label: "15 Aug - 21 Aug", start: "2026-08-15", end: "2026-08-21" },
      { label: "16 Aug - 22 Aug", start: "2026-08-16", end: "2026-08-22" },
      { label: "22 Aug - 28 Aug", start: "2026-08-22", end: "2026-08-28" },
      { label: "23 Aug - 29 Aug", start: "2026-08-23", end: "2026-08-29" },
      { label: "29 Aug - 04 Sep", start: "2026-08-29", end: "2026-09-04" },
      { label: "30 Aug - 05 Sep", start: "2026-08-30", end: "2026-09-05" },
      { label: "05 Sep - 11 Sep", start: "2026-09-05", end: "2026-09-11" },
      { label: "06 Sep - 12 Sep", start: "2026-09-06", end: "2026-09-12" },
      { label: "12 Sep - 18 Sep", start: "2026-09-12", end: "2026-09-18" },
      { label: "13 Sep - 19 Sep", start: "2026-09-13", end: "2026-09-19" },
      { label: "19 Sep - 25 Sep", start: "2026-09-19", end: "2026-09-25" },
      { label: "20 Sep - 26 Sep", start: "2026-09-20", end: "2026-09-26" },
      { label: "26 Sep - 02 Oct", start: "2026-09-26", end: "2026-10-02" },
      { label: "27 Sep - 03 Oct", start: "2026-09-27", end: "2026-10-03" },
      { label: "03 Oct - 09 Oct", start: "2026-10-03", end: "2026-10-09" },
      { label: "04 Oct - 10 Oct", start: "2026-10-04", end: "2026-10-10" },
      
    ],

    highlights: [
      "Start from the green forests and meadows of Jobra near Manali",
      "Walk through lush valleys filled with wildflowers, waterfalls, and river crossings",
      "Camp at stunning locations like Chika, Balu Ka Ghera, Shea Goru, & Chatru",
      "Cross the thrilling Hampta Pass at 14,100 ft for a 360° view of the Himalayas, including peaks like Indrasan and Deotibba",
      "Witness the dramatic shift from the green Kullu Valley to the barren Spiti landscapes",
      "Detour to the crystal-blue Chandratal Lake, a jewel of Spiti (optional as add-on)",
      "Ideal trek for beginners looking for their first high-altitude Himalayan experience",
    ],

    itinerary: [
  {
    "day": 1,
    "title": "Drive from Manali (6,700 ft) to Jobra (9,800 ft) → Trek to Chika (10,100 ft)",
    "details": "<strong>• Drive: ~2 hrs through dense pine & deodar forests | Trek: ~3 km / 2–3 hrs along the Rani Nallah stream.</strong><br>• Your journey begins with a short but scenic drive from Manali to Jobra, where the thick pine, deodar, and maple forest immediately give the trek a refreshing start. Once you step onto the trail, the walk feels gentle, calming, and steadily immersive — the sound of the Rani Nallah flowing beside you becomes your constant companion. The forest gradually opens into the broad Chika meadows, surrounded by tall cliffs, waterfalls, and distant snow peaks. This easy first day helps your body settle into the altitude while offering a perfect introduction to the serene beauty of the Hampta Valley. Overnight stay in the quiet, open grasslands of Chika."
  },
  {
    "day": 2,
    "title": "Trek from Chika (10,100 ft) to Balu Ka Ghera (11,900 ft)",
    "details": "<strong>• Trek: ~9 km | Duration: 6–7 hrs across meadows, river crossings & wildflower zones.</strong><br>• The morning begins with a gentle walk across open meadows before the trail narrows and leads to a series of lively river crossings over boulders and wooden bridges. During July–September, carpets of wildflowers line the valley, filling the landscape with colour. As you climb higher, the forests fade and wide alpine basins take over. The final approach to Balu Ka Ghera — the ‘bed of sand’ — is scenic and peaceful, with the mighty Hampta Pass ridge towering above. This flat, sandy campsite sits at the very base of the pass and offers panoramic views of the surrounding snow-covered mountains. A cold, beautiful night awaits."
  },
  {
    "day": 3,
    "title": "Cross Hampta Pass (14,100 ft) → Trek to Shea Goru (12,900 ft)",
    "details": "<strong>• Trek: ~10 km | Duration: 8–9 hrs, steep ascent to the pass followed by a sharp descent.</strong><br>• This is the most demanding yet rewarding day of the trek. The route climbs immediately from Balu Ka Ghera, weaving through steep switchbacks, snow slopes (depending on season), and narrow ridges. The moment you reach the top of Hampta Pass, an entirely new world opens up: lush Kullu Valley behind you, stark Lahaul-Spiti desert ahead. Many trekkers consider this one of the most dramatic crossovers in the Himalayas. From the pass, a long and careful descent leads you into the cold desert basin of Shea Goru — a surreal glacial valley bordered by dark rock walls and flowing glacial streams. Expect some of the coldest temperatures of the trek here."
  },
  {
  "day": 4,
  "title": "Trek from Shea Goru (12,900 ft) to Chatru (10,800 ft) → Optional Drive to Chandratal Lake (14,100 ft)",
  "details": "<strong>• Trek: ~7 km | Duration: 4–5 hrs | Optional Chandratal drive: ~3 hrs round trip.</strong><br>• The day begins with the classic icy river-crossing adventure — the water only ankle-deep, but sharp and freezing as it flows straight from the glacier just above Shea Goru. Once across, the trail settles into a relaxed walk along the riverbed as the valley widens and the raw Spiti landscape takes over — barren slopes, scattered boulders, and rugged mountains stretching endlessly ahead. The descent is comfortable, eventually bringing you to the remote campsite of Chatru, alonside Chandra river, situated at the confluence of three major valleys: Hampta, Spiti, and Rohtang. If weather and road conditions allow, you can take the iconic detour to Chandratal Lake — the jewel of Spiti at 14,100 ft, known for its crescent shape and crystal-clear turquoise waters. Overnight stay at Chatru."
  },
  {
    "day": 5,
    "title": "Drive from Chatru to Manali (6,700 ft)",
    "details": "<strong>• Drive: 5–6 hrs via Atal Tunnel or Rohtang Pass (depending on road conditions).</strong><br>• The final drive retraces the dramatic landscapes of Lahaul before gradually blending into the greenery of the Kullu Valley. The route passes through stretches of barren Spiti cliffs, glacial streams, and wide valleys before entering the lush, forested slopes near Manali. By afternoon or evening, you reach Manali — marking the end of the Hampta Pass adventure. The drive is a perfect moment to look back on the changing landscapes you walked through: meadows, forests, snowfields, high passes, and the desert beauty of Spiti."
  }
],

    howToReach: {
      air: "Nearest airport: Bhuntar Airport (Kullu) – 50 km from Manali. You can take a cab or local bus to reach Manali from the airport.",
      train: "Nearest major railway station: Chandigarh Railway Station. From Chandigarh, take a Volvo bus or private cab to Manali (~8–10 hrs).",
      road: "From Delhi: Overnight Volvo buses (12–14 hrs) regularly ply to Manali. From Chandigarh: 8–10 hrs by cab or bus. Manali is well-connected and has frequent bus services.",
      travelTip: "Arrive in Manali a day before the trek for better acclimatization and to avoid delays."
    },

    didYouKnow: [
  "Hampta Pass was once a traditional route used by shepherds to cross from the lush Kullu Valley to the dry grazing pastures of Spiti.",
  "The name “Hampta” comes from the tiny village of Hampta near Sethan, which lies on the trail.",
  "Chandratal Lake, is one of the highest altitude lakes in India and is often called the 'Moon Lake.'",
  "Though relatively easy, Hampta Pass offers one of the most dramatic crossovers in the Indian Himalayas — perfect for first-time trekkers!",
  "On the Kullu side, you’ll walk through forests of oak, pine, birch and rhododendron, where wildflowers bloom in meadows through summer.",
  "Crossing the pass into Spiti, the landscape shifts dramatically — barren cliffs and alpine deserts, where you may spot blue sheep, marmots, and even elusive birds like the golden eagle.",
  "The trek gives you a glimpse of both Himachal’s rich greenery and the stark, surreal beauty of Spiti — all in one short, accessible adventure."
],

    gallery: [
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535063/hampta-pass-6_v4mdqp.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535062/hampta-pass-1_lcseig.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535061/hampta-pass-11_uyhrdz.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535060/hampta-pass-14_s7jkyx.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535059/hampta-pass-2_n6ngdu.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535058/hampta-pass-4_etl9tn.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535057/hampta-pass-16_cke9er.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535051/hampta-pass-12_xjjdgc.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535051/hampta-pass-7_graj1q.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535049/hampta-pass-13_kuylu5.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535049/hampta-pass-8_ozbnnp.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535048/hampta-pass-10_zorbhw.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535045/hampta-pass-hero_tp9o7j.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535045/hampta-pass-9_gwgfat.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535044/hampta-pass-3_lx8lce.jpg",
    ],

    downloadLink: "/docs/Himalayan_Trek_Packing_List.pdf",

    faqs: {
  questions: [
    {
      question: "Who can participate in the Hampta Pass trek?",
      answer: "This trek is ideal for beginners as well as experienced trekkers. With its moderate difficulty level, anyone with basic fitness and stamina can do it. Expect long walking days (6–9 hours) and a challenging pass crossing, so preparation is important.",
    },
    {
      question: "What should I pack for the Hampta Pass trek?",
      answer: "You’ll need layered clothing (thermals, fleece, padded jacket, rain gear), waterproof trekking shoes, trekking poles, and a 50–60L rucksack with a rain cover. Nights can be very cold, especially at Shea Goru. A detailed seasonal packing checklist is available in the PDF above.",
    },
    {
      question: "Is offloading available during the trek?",
      answer: "Yes, offloading (mule/porter service) is available at an additional cost (₹3200 approx). You must inform the trek organizer in advance if you want to avail this facility.",
    },
    {
      question: "Will there be mobile network coverage during the trek?",
      answer: "Mobile coverage is limited. Airtel and Jio work in Manali and Jobra, but beyond that the signal is weak to non-existent. Shea Goru and Chatru have no coverage. Inform family and friends about the blackout period.",
    },
    {
      question: "What permits are required for the Hampta Pass trek?",
      answer: "You’ll need forest entry permits and camping fees for the Himachal region. These are usually arranged by the trek organizer, so you don’t have to apply separately.",
    },
    {
      question: "Is Chandratal Lake visit guaranteed?",
      answer: "Chandratal Lake detour depends on weather and road conditions. If the road from Chatru to Chandratal is open and safe, the trek organizer will arrange a drive. If not, it may be skipped for safety reasons.",
    },
    {
      question: "How cold does it get on the Hampta Pass trek?",
      answer: "Temperatures can drop to 0°C or lower at higher camps like Shea Goru, even in summer. Carry proper layering, gloves, and a woollen cap. Expect colder nights in September–October.",
    },
    {
      question: "Is acclimatization required before starting?",
      answer: "Yes, it’s strongly recommended to arrive in Manali a day before the trek. This helps your body adjust to the altitude and reduces the risk of AMS (Acute Mountain Sickness).",
    },
  ],
},

    faqsLink: "/faqs-and-articles",
  },



  {
    id: "rupin-pass-trek",
    name: "Rupin Pass Trek",
    tags: ["pass"],
    difficulty: ["difficult"],
    season: ["summer", "autumn"],
    month: ["may", "june", "september", "october"],
    duration: ["6 Nights / 7 Days"],
    region: "himachal",
    coordinates: [
    [31.4742, 78.1791], // Dhaula (start)
    [31.5236, 78.2856], // Jiskun
    [31.5501, 78.3678], // Jakha
    [31.5867, 78.4511], // Upper Waterfall Camp
    [31.6275, 78.5167], // Rupin Pass (end)
  ],
    heroImage: "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535222/rupin-pass-hero_u3itsr.jpg",
    
    heroImages: ["https://res.cloudinary.com/dr44hob9b/image/upload/v1755535222/rupin-pass-hero_u3itsr.jpg",
                "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535234/rupin-pass-hero2_kohvua.jpg",
                "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535212/rupin-pass-hero1_wjor73.jpg",
                "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535204/rupin-pass-view14_qqz3lx.jpg",
                "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535186/rupin-pass-view21_bywsqb.jpg",
                "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535231/rupin-pass-view3_abbt21.jpg",
    ],
    subtitle: "A Wild Himalayan Adventure",

    seo: {
    title: "Rupin Pass Trek | Itinerary, Cost & Dates | Planethimalayas",
    description: "Rupin Pass Trek (15,250 ft) is one of India’s most thrilling Himalayan treks, with waterfalls, meadows, snow bridges, and a steep gully climb to the pass. Best experienced over 7 days."
  },

    overview: {
      facts: [
        { emoji: "⏳", label: "Trek Duration", value: "6 Nights / 7 Days" },
        { emoji: "⚡", label: "Trek Grade", value: "Difficult" },
        { emoji: "🏔️", label: "Max Altitude", value: "15,250 ft (Rupin Pass)" },
        { emoji: "⚡", label: "Trek Distance", value: "40 Km" },
        { emoji: "🌤️", label: "Best Time", value: "May-June & September-October" },
        { emoji: "🗺️", label: "Region", value: "Crossover from Shimla valley to Kinnaur valley, Himachal Pradesh" },
        { emoji: "📍", label: "Start Point", value: "Jiskoon (Himachal)" },
        { emoji: "🏁", label: "End Point", value: "sangla (Himachal)" },
        { emoji: "🧥", label: "Cloakroom facility", value: "Not available" },        
      ],
      snippet: 
        `Imagine a trail where every few kilometres feel like a different world — where forests turn into meadows, meadows dissolve into snowfields, and snowfields rise into a dramatic high-altitude gully that leads you to one of the most memorable pass crossings in the Himalayas. That is the magic of the Rupin Pass Trek, a route that unfolds like a cinematic journey through nature’s most unexpected transitions.

<br>Your adventure begins deep inside Himachal’s remote valleys, where charming wooden villages sit perched on steep mountainsides and locals greet you with stories older than the forests around them. The initial days take you past hanging wooden bridges, apple orchards, and dense stretches of oak, pine, and ancient fir — the kind of forests where sunlight filters through like liquid gold. Suddenly, the trail bursts open into Saruwas Thatch, a meadow straight out of mythology, with the Rupin River carving its path beside you.

<br>Then comes the moment every trekker remembers forever — the first sight of the legendary Rupin Waterfall. Dropping nearly 1,500 feet in three roaring tiers, the waterfall appears suddenly at the head of a perfectly carved U-shaped glacial valley. No photo or review prepares you for the scale of this wall of water; it feels like the mountains are splitting open in front of you.

<br>From the base of the waterfall, the trail gets progressively more dramatic. You climb through the vast amphitheatre of Dhanderas Thatch, camp surrounded by towering cliffs streaked with snow, and trace the roaring river all the way to Rata Pheri. It is here that the mighty Rupin Gully comes into view — a steep, narrow snow corridor that leads to the pass at nearly 15,300 ft. The climb is intense, powerful, and unforgettable. Every step echoes, every gust of wind feels sharper, and the sense of scale is overwhelming.

<br>Reaching the top of the pass is like stepping into another universe. On the other side lies Kinnaur’s legendary highlands — rolling pastures, sweeping grasslands of Sangla Kanda, and distant glimpses of the sacred Kinnaur Kailash range glowing against the sky. The descent into Sangla feels like entering a softer, greener world after days of rugged altitude and raw terrain.

<br>What makes the Rupin Pass trek extraordinary isn’t just its beauty, but its constantly shifting character. One morning you’re walking through fiery-red rhododendron groves, and the same afternoon you’re crunching over snow bridges. Another day you’re in thick forests; the next you’re walking across vast alpine basins surrounded by cliffs and glaciers. Few Himalayan treks pack such diversity into a single trail.

<br><strong>🌸 Seasonal Notes:</strong>

<br><strong>* Summer (May–June):</strong> Lingering snowfields dominate the upper valley, transforming the entire approach to Dhanderas Thatch into a stunning white amphitheatre. You’ll cross giant snow bridges, navigate icy shelves, and enjoy the thrill of sliding down snow slopes after crossing the pass. Meadows sparkle with fresh grass and early blooms just released from winter.

<br><strong>* Autumn (Sept–Oct):</strong> The trek turns into a painter’s palette — golden oak leaves, fiery-red maples, multiple other high waterfalls on either side the valley, and slopes bursting with alpine flowers. Clear skies reveal razor-sharp views of the waterfall, the gully, and the Kinnaur peaks. The valley feels crisp, colourful, and beautifully alive — arguably the best season for photography and long, thoughtful walks along the Rupin.`
  },

    price: 16500,
    priceNote: "* Jiskoon to Sangla",
    addons: {
      transport: 4000, 
      offloadingbag: 4800,
      transportNote: "* Shimla to Shimla",
      offloadingNote: "* Maximum weight 9kg / bag"
    },

    inclusionsNote: "🍽️ All Meals – Nutritious meals provided from dinner on Day 1 to lunch on Day 7",

    dates: [
      { label: "16 May - 22 May", start: "2026-05-16", end: "2026-05-22" },
      { label: "17 May - 23 May", start: "2026-05-17", end: "2026-05-23" },
      { label: "23 May - 29 May", start: "2026-05-23", end: "2026-05-29" },
      { label: "24 May - 30 May", start: "2026-05-24", end: "2026-05-30" },
      { label: "30 May - 05 Jun", start: "2026-05-30", end: "2026-06-05" },
      { label: "31 May - 06 Jun", start: "2026-05-31", end: "2026-06-06" },
      { label: "06 Jun - 12 Jun", start: "2026-06-06", end: "2026-06-12" },
      { label: "07 Jun - 13 Jun", start: "2026-06-07", end: "2026-06-13" },
      { label: "13 Jun - 19 Jun", start: "2026-06-13", end: "2026-06-19" },
      { label: "14 Jun - 20 Jun", start: "2026-06-14", end: "2026-06-20" },
      { label: "19 Sep - 25 Sep", start: "2026-09-19", end: "2026-09-25" },
      { label: "20 Sep - 26 Sep", start: "2026-09-20", end: "2026-09-26" },
      { label: "26 Sep - 02 Oct", start: "2026-09-26", end: "2026-10-02" },
      { label: "27 Sep - 03 Oct", start: "2026-09-27", end: "2026-10-03" },
      { label: "03 Oct - 09 Oct", start: "2026-10-03", end: "2026-10-09" },
      { label: "04 Oct - 10 Oct", start: "2026-10-04", end: "2026-10-10" },
    ],

    highlights: [
      " The trek starts from the remote village of Jiskoon nestled in the Shimla valley of Himachal and follows the wild & scenic Rupin River from valley floor to source",
      " Climb the iconic Rupin Waterfall",
      " Trek through remote villages, forests, and meadows",
      " Conquer the steep Rupin Gully to reach the high-altitude pass",
      " Witness the majestic Kinnaur Kailash range",
      " End in the beautiful pastures of Sangla in the Kinnaur Valley of Himachal",
    ],

    itinerary: [
{
"day": 1,
"title": "Arrive at Jiskoon (7,630 ft)",
"details": "<strong>• Drive: ~190 km from Shimla | Duration: 10–12 hrs via Rohru & Chanshal Pass (12,000 ft).</strong><br>• The approach is the first act of the Rupin story — a long, scenic drive that climbs out of Shimla’s foothills and moves through apple orchards, tight pine corridors and quiet Himachali hamlets. We skirt the dramatic Chanshal Pass, where open grasslands and distant ridgelines replace the forested slopes below. From Rohru the road forks — one way to Janglik, the other to Jiskoon — and the short detour through the Chainsheel valley feels like a condensed trek in itself, all wild meadows and sudden views. Jiskoon (also written Jiskun) sits high above the confluence of the Rupin and Nargani, a practical, friendly village with small shops to top up food and fuel. Use this evening to check gear, buy last-minute supplies, and sleep early — the trail begins tomorrow."
},
{
"day": 2,
"title": "Jiskoon to Jakha (8,750 ft)",
"details": "<strong>• Trek: ~4 km | Duration: 4–5 hrs | Short but steep; last inhabited village on the trail.</strong><br>• The path out of Jiskoon drops and then climbs in a sequence of forested folds, passing under deodar and walnut canopies before threading into a dark rock-cut bend where you’ll spot the remains of an old wooden bridge and a new one below. The final hour is a memorable zig-zag up a ridgeline that from below looks fearsome but rewards you with wide views and a scent of pine. Jakha is a hanging village in the truest sense — houses clinging to a cliff, narrow lanes, and a strong local rhythm shaped by satsang traditions. The campsite sits just above the village (or inside the school courtyard) and has that rare village feel: wood-smoke, porch light, kids playing. This is your last reliable place to resupply or hire porters; beyond Jakha the valley opens into remote territory punctuated by shepherd camps."
},
{
"day": 3,
"title": "Jakha to Saruwas Thatch (10,500 ft)",
"details": "<strong>• Trek: ~7 km | Duration: 5–6 hrs | Forest to boulder-strewn riverbed to meadows.</strong><br>• You climb out of Jakha through terraced fields and enter an almost cathedral-like fir forest — towering blue pines hundreds of years old that make the trail feel sacred. The forest ends as abruptly as it begins and the valley opens: for the first time you may see a lower-altitude snow bridge spanning the Rupin, a surreal sheet of white with the river carving holes beneath. If the bridge is gone in a dry summer, the trail still leads across tributaries and a wooden bridge before continuing on a narrow shepherd’s path with the Rupin always on your left. The river here turns an impossible icy-blue; small tributaries tumble in from above and the valley is littered with boulders and braided streams — perfect places to refill water. The latter half of the day brings rhododendron thickets in bloom (May–June) and a sequence of clearings that end at Saruwas Thatch, a wide meadow with the Rupin gushing below and the promise of the waterfall ahead."
},
{
"day": 4,
"title": "Saruwas Thatch to Dhanderas Thatch (11,700 ft)",
"details": "<strong>• Trek: ~3 km | Duration: 2–3 hrs | Gentle meadow walk with dramatic waterfall reveal.</strong><br>• From the lip of the U-shaped Rupin valley you watch hundreds of narrow waterfalls stitch down the brown cliffs into the main gorge. The trail drops into a sea of yellow marigolds and alpine grass, a slow, joyful walk punctuated by ankle-deep rivulets and tiny wooden step-bridges. Soon you reach a wide riverbed and climb onto the largest snow bridge on the trail before stepping up to a plateau. And then — the curtain lifts. Dhanderas Thatch is a natural amphitheatre: a sweeping bowl of green with the Rupin Waterfall plunging in three thunderous tiers from the head of the valley. The noise, the spray, the scale of that 1,500-ft drop are hard to forget. Water is abundant; choose a campsite that looks over the snout of the falls and spend the evening watching clouds slide over the Dhauladar ridges."
},
{
"day": 5,
"title": "Dhanderas Thatch to Upper Waterfall Camp (13,250 ft)",
"details": "<strong>• Trek: ~4 km | Duration: 3–4 hrs | Steep technical sections beside the waterfall; acclimatisation day.</strong><br>• Today is intentionally slower — an acclimatisation and technical prep day. Begin with a measured climb toward the base of the upper snow patches, hopping streams and winding through carpets of marigolds. Approaching the waterfall’s higher tiers you’ll scramble across boulder-strewn ledges and skirt ice patches; depending on season there can be snow bridges that require careful footwork or step-cutting. Use poles, and if the group carries them, an ice axe and gaiters make life easier. The top of the middle cascade reveals a strange and beautiful sight: the Rupin disappears beneath a thick snow bridge, flowing invisibly underfoot. Continue to the upper waterfall meadow — a wide, flat bowl where minor snowfields feed tiny streams that converge to birth the Rupin. This campsite is exposed, cold, and raw — perfect for preparing your body and nerves for the pass push to come."
},
{
"day": 6,
"title": "Upper Waterfall Camp to Rupin Pass (15,250 ft) → Descend to Ronti Gad (13,400 ft)",
"details": "<strong>• Trek: ~11–12 km | Duration: 8–9 hrs | Early pre-dawn start; long snowfields & gully climb.</strong><br>• The day begins long before sunrise. You carry breakfast and set off in headlamp light toward Rati Pheri — a steep, breathy climb that leads onto vast undulating snowfields. The Rupin valley slips from view and the Dhauladar range tightens to your right. Rati Pheri is a last-water stop and a place to adjust layers; beyond it the route crosses wide snow expanses where boots sink and progress is slow. Keep sight of the distant gully — a narrow, tube-like channel carved into the ridge that marks the Rupin Pass. After an arduous approach you reach the foot of the gully: the technical 200-metre scramble up mixed snow, scree and loose boulders. Step carefully, follow your guide, and accept that every foothold matters. Emerging onto the ridge is a payoff few trails match — prayer flags snapping in thin air, stone cairns marking the saddle, and a 360° sweep of Himalayan ranges including views toward Kinnaur Kailash and the far ridges beyond. The descent slides you down snow chutes (summer glissades if conditions allow) or careful scree traverses into the green meadows of Ronti Gad, where a cold but sheltered campsite awaits."
},
{
"day": 7,
"title": "Ronti Gad to Sanglakanda → Exit at Sangla",
"details": "<strong>• Trek: ~8–9 km | Duration: 4–5 hrs | Long descent through alpine pastures to civilization.</strong><br>• The final morning is a gradual, scenic surrender to lower altitudes. The descent from Ronti Gad drops you through a patchwork of shepherd trails, meadows and blue-pine slopes. Keep your knees loose — switchbacks are long and the trail can be slippery in wet conditions — but the views are endlessly rewarding: the serrated Kinner Kailash range appears suddenly, huge and jagged, a dramatic curtain over the Baspa valley. Sangla Kanda unfolds as a broad green bowl with lakes and terraced fields; from here a short walk or drive takes you into Sangla town. Enjoy the first cups of town tea, swap stories with villagers, and if time allows stroll through apple orchards or visit a Kinnauri temple before catching onward transport. The Rupin Pass concludes here — seven days of abrupt landscapes, roaring water, hidden snow bridges and one unforgettable gully crossing."
}
],

    howToReach: {
      air: "Fly to Shimla Airport (Jubbarhatti) or to Chandigarh Airport (better connectivity).",
      train: "Reach Kalka via train → take the toy train or a taxi to Shimla.",
      road: "Take an overnight Volvo from Delhi to Shimla (approx. 8–9 hours).",
      travelTip: "Shimla to Jiskoon by Road (approx. 190 km, 9–10 hours): There is no direct public bus to Jiskoon, but here are your options:<br><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🔹 Option A: Private Taxi (most convenient): Hire a shared or private taxi from Shimla to Jiskoon. <br><br>1. Route: Shimla → Rohru → Chirgaon → Tikri → Jiskoon <br>2. Time: 9–10 hours <br>3. Cost: <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Shared vehicle-- ₹1,000–₹1,500 per person  <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Private vehicle-- ₹6,000–₹8,000 total (can be split among 4–6 trekkers) <br><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🔹 Option B: Local Buses + Shared Cabs (for budget travellers) <br><br>1. Shimla → Rohru: HRTC bus (6–7 hrs) <br>2. Rohru → Chirgaon → Tikri: Shared jeeps/taxis <br>3. Tikri → Jiskoon: Hire a local 4x4 vehicle or hike the last 2–3 km if road is rough"
    },

    didYouKnow: [
    " <b>Rupin Waterfall is over 300 ft tall!</b>  <br>One of the highlights of the trek, the cascading Rupin waterfall forms naturally stepped rock formations and creates one of the most surreal campsites in the Indian Himalayas.",
  
    " <b>The trail is full of hanging villages!</b>  <br>Villages like Jhaka seem suspended on cliffs — so much so that Jhaka is often called the “hanging village” for its jaw-dropping location and terraced walkways.",
  
    " <b>Rupin Valley is rich in wildflowers!</b>  <br>From May to July, the meadows burst with blue poppies, primulas, Himalayan orchids, and dwarf rhododendrons, turning the valley into a natural garden at 12,000 ft.",
      
    " <b>A haven for Himalayan fauna!</b>  <br>Keep your eyes open for Himalayan monals (the state bird of Uttarakhand, with rainbow plumage), yellow-billed choughs circling high above, and mountain goats like bharal (blue sheep) grazing on steep slopes.",
  
    " <b>The pass summit is a natural rock ramp!</b>  <br>Unlike most high passes that require ropes or technical climbing, Rupin Pass is crossed via a steep snow ramp that feels like a stairway into another world — adventurous but doable for fit trekkers.",
  
    " <b>It follows ancient shepherd and trade routes!</b>  <br>For centuries, the trail was used by local shepherds guiding their flocks and by traders moving between the Baspa and Tons river valleys — long before it became a trekker’s dream route."
  ],


    gallery: [
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535239/rupin-pass-view24_ozwnhl.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535235/rupin-pass-view17_wv1krm.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535234/rupin-pass-hero2_kohvua.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535233/rupin-pass-hero4_nrghjd.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535232/rupin-pass-view23_akshxt.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535231/rupin-pass-view3_abbt21.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535229/rupin-pass-view26_dioqzd.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535227/rupin-pass-view10_mxkgn5.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535223/rupin-pass-view22_r1qmtj.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535222/rupin-pass-hero_u3itsr.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535219/rupin-pass-view12_xpkkqx.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535215/rupin-pass-view20_r3vzui.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535215/rupin-pass-hero3_akbvpi.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535212/rupin-pass-view11_cpeknh.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535212/rupin-pass-hero1_wjor73.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535210/rupin-pass-view7_ucfmwz.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535204/rupin-pass-view14_qqz3lx.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535203/rupin-pass-view19_ycmijg.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535201/rupin-pass-view4_kp44lm.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535200/rupin-pass-view1_ed5x3z.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535200/rupin-pass-view5_vzhyu6.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535199/rupin-pass-view15_apxuzr.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535197/rupin-pass-view6_jsim2b.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535195/rupin-pass-view13_uexh6b.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535195/rupin-pass-view25_fbbgxz.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535188/rupin-pass-view2_fybic4.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535186/rupin-pass-view21_bywsqb.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535185/rupin-pass-view18_qp5vom.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535184/rupin-pass-view9_zuypiw.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535183/rupin-pass-view16_ihdugx.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535182/rupin-pass-view8_cd4kd3.jpg",

    ],

    downloadLink: "/docs/Himalayan_Trek_Packing_List.pdf",

    faqs: {
  questions: [
    {
      question: "Who can participate in the Rupin Pass trek?",
      answer: "The Rupin Pass trek is best suited for trekkers with prior high-altitude trekking experience and good physical fitness. It involves steep ascents, long trekking days (up to 8–9 hrs), snow crossings, and high-altitude camping above 13,000 ft. Beginners are advised to start with easier treks before attempting Rupin.",
    },
    {
      question: "What should I pack for the Rupin Pass trek?",
      answer: "Essential gear includes sturdy waterproof trekking shoes, 3–4 layers of warm clothing (including thermals, fleece, and down jacket), a 50–60L backpack with rain cover, trekking poles, personal medicines, and a headlamp. For a full checklist, download the PDF packing list above.",
    },
    {
      question: "Is offloading available on the Rupin Pass trek?",
      answer: "Yes, backpack offloading is available at an additional charge (₹4,800 approx). This lets you trek light while your main backpack is carried by mules/porters. However, trekkers should always carry a small daypack with water, rainwear, and essentials.",
    },
    {
      question: "Will there be mobile network coverage during the Rupin Pass trek?",
      answer: "Network is very limited on the trail. Jiskoon and Jhaka may have patchy BSNL or Airtel signals, but beyond that, expect complete disconnection. It’s advisable to inform family and friends beforehand and enjoy the digital detox in the mountains.",
    },
    {
      question: "What permits are required for the Rupin Pass trek?",
      answer: "The trek requires permits from the Himachal Pradesh Forest Department and local panchayats for entry into Rupin Valley and camping in alpine meadows. These permits are usually arranged by the trek operator, so trekkers don’t need to worry about the paperwork.",
    },
    {
      question: "When is the best time to do the Rupin Pass trek?",
      answer: "The ideal seasons are summer (May–June) and autumn (September–October). In summer, you’ll walk over snowfields and experience thrilling ice crossings. In autumn, the meadows bloom with alpine flowers and the forests turn golden and crimson, offering crystal-clear mountain views.",
    },
    {
      question: "How difficult is the Rupin Pass trek compared to Hampta Pass?",
      answer: "Rupin Pass is more challenging than Hampta Pass. While Hampta is suitable for first-timers, Rupin demands higher endurance with long trekking hours, snow gully climbs, and a demanding pass crossing at 15,250 ft. It’s recommended for trekkers who have done at least one high-altitude trek before.",
    },
  ],
},

    faqsLink: "/faqs-and-articles",
  },


{
    id: "buran-ghati-trek",
    name: "Buran Ghati Trek",
    tags: ["pass"],
    difficulty: ["moderate", "difficult"],
    season: ["summer", "autumn"],
    month: ["may", "june", "september", "october"],
    duration: ["6 Nights / 7 Days"],
    region: "himachal",
    coordinates: [
    [31.1184, 77.5783], // Janglik (start)
    [31.1653, 77.6481], // Dayara
    [31.2147, 77.6911], // Litham
    [31.2628, 77.7369], // Dhunda
    [31.2836, 77.7581], // Buran Ghati Pass (end)
  ],
    heroImage: "https://res.cloudinary.com/dr44hob9b/image/upload/v1762007239/buran-ghati-view21_p8onot.jpg",

    heroImages: ["https://res.cloudinary.com/dr44hob9b/image/upload/v1762007239/buran-ghati-view21_p8onot.jpg",
                "https://res.cloudinary.com/dr44hob9b/image/upload/v1762007240/buran-ghati-view35_znayci.jpg",
                "https://res.cloudinary.com/dr44hob9b/image/upload/v1762007249/buran-ghati-view26_tpwze7.jpg",
                "https://res.cloudinary.com/dr44hob9b/image/upload/v1762007239/buran-ghati-view33_sqkwhz.jpg",
  ],
    subtitle: "A Himalayan Canvas of Thrill & Beauty",

    seo: {
    title: "Buran Ghati Trek | Itinerary, Cost & Dates | Planethimalayas",
    description: "Buran Ghati Trek (15,000 ft) in Himachal offers a perfect mix of forests, villages, alpine meadows, and a thrilling snow wall descent. A 7-day adventure for seasoned trekkers."
  },

    overview: {
      facts: [
        { emoji: "⏳", label: "Trek Duration", value: "6 Nights / 7 Days" },
        { emoji: "⚡", label: "Trek Grade", value: "Moderate to Difficult" },
        { emoji: "🏔️", label: "Max Altitude", value: ">15,000 ft (Buran Ghati)" },
        { emoji: "⚡", label: "Trek Distance", value: "42 Km" },
        { emoji: "🌤️", label: "Best Time", value: "May-June & September-October" },
        { emoji: "🗺️", label: "Region", value: "Crossover from Pabbar valley to Kinnaur valley, Himachal" },
        { emoji: "📍", label: "Start Point", value: "Janglik (Himachal)" },
        { emoji: "🏁", label: "End Point", value: "Baruva (Himachal)" },
        { emoji: "🧥", label: "Cloakroom facility", value: "Not available" },
      ],
      snippet: `Every trek has breathtaking moments, and every trek has sections that test your patience. The Buran Ghati Trek, however, seems to have taken all the best parts of Himalayan trekking and woven them into one unforgettable journey. From the very first step, it captures your imagination and refuses to let go.

<br>The adventure begins in the ancient village of Janglik, perched at 9,000 ft in the Pabbar Valley. This is not just a starting point — it’s your first taste of high-altitude Himalayan life, a village seemingly untouched by time, where stone houses and narrow lanes whisper of centuries past. Acclimatization is key here: sip water slowly, take in the crisp air, and let your body settle into the rhythm of the mountains.

<br>From Janglik, the trail winds through dense pine and oak forests, gradually opening to the vast Dayara meadows. One glance at this wide green tabletop, with the Dhauladhar Range rising like silent sentinels in the distance, and you’ll stop in awe. The meadows are alive with wildflowers in summer, and in autumn, they glow golden under the crisp Himalayan sky. Camping here feels like standing on a natural amphitheater, with the mountains themselves applauding your arrival.

<br>A gentle hike the next day brings you to Litham, passing a majestic waterfall and tracing the banks of the Pabbar River. Hidden in a secluded valley above the falls lie the Chandranahan Lakes, sacred to locals who walk barefoot along their shores. Here, an acclimatization day allows you to explore the lakes, witness their glacial serenity, and absorb the quiet energy of the high Himalayas.

<br>From Litham, the landscape shifts dramatically. Pastures give way to rocky screes, and the trail gradually climbs along the valley floor, crossing rivers — in summer, sometimes over snow bridges — until you reach Lower Dunda. A final steep ascent takes you to Upper Dunda, a spectacular alpine meadow where a sparkling stream winds through wildflowers carpeting the grasslands. Here, beneath towering peaks, your trek leader briefs you for the pass day — the technical challenges ahead demand respect and focus.

<br>The pass crossing day begins before dawn. Trekking from Dunda, the gully opens into a field of screes and boulders. In summer, microspikes and gaiters are essential; in autumn, the snow has melted, leaving a narrow trail hugging the mountainside. At the top, a 70-ft rappel (summer) or careful traverse (autumn) awaits. Summer adventurers then slide down a long glissade, an exhilarating descent into the valley below. Across the river and through lush grasslands, you arrive at Munirang, your final alpine campsite, serenaded by the river rushing far below.

<br>The last day is a gentle descent through apple, apricot, and walnut orchards, a serene contrast to the high-altitude thrills. It culminates in the charming village of Barua, where your vehicles await, and your journey — a perfect blend of adventure, nature, and Himalayan culture — comes to an unforgettable close.

<br><strong>Seasonal Highlights:</strong>

<br><strong>Summer:</strong> Snow on the upper slopes, adrenaline-pumping rappels, long glissades, and blooming alpine flowers.

<br><strong>Autumn:</strong> Crisp skies, golden meadows, high-altitude flowers, and a scenic, serene trek with no rappelling or glissading.

<br>The Buran Ghati Trek is more than a trek; it’s an immersion in the heart of the Himalayas, a journey that leaves you humbled, exhilarated, and longing for more.` },

    price: 16500,
    priceNote: "* Janglik to Baruva",
    addons: {
      transport: 4000, 
      offloadingbag: 4800,
      transportNote: "* Shimla to Shimla",
      offloadingNote: "* Maximum weight 9kg / bag"
    },

    inclusionsNote: "🍽️ All Meals – Nutritious meals provided from dinner on Day 1 to lunch on Day 7",

    dates: [
      { label: "16 May - 22 May", start: "2026-05-16", end: "2026-05-22" },
      { label: "17 May - 23 May", start: "2026-05-17", end: "2026-05-23" },
      { label: "23 May - 29 May", start: "2026-05-23", end: "2026-05-29" },
      { label: "24 May - 30 May", start: "2026-05-24", end: "2026-05-30" },
      { label: "30 May - 05 Jun", start: "2026-05-30", end: "2026-06-05" },
      { label: "31 May - 06 Jun", start: "2026-05-31", end: "2026-06-06" },
      { label: "06 Jun - 12 Jun", start: "2026-06-06", end: "2026-06-12" },
      { label: "07 Jun - 13 Jun", start: "2026-06-07", end: "2026-06-13" },
      { label: "13 Jun - 19 Jun", start: "2026-06-13", end: "2026-06-19" },
      { label: "14 Jun - 20 Jun", start: "2026-06-14", end: "2026-06-20" },
      { label: "19 Sep - 25 Sep", start: "2026-09-19", end: "2026-09-25" },
      { label: "20 Sep - 26 Sep", start: "2026-09-20", end: "2026-09-26" },
      { label: "26 Sep - 02 Oct", start: "2026-09-26", end: "2026-10-02" },
      { label: "27 Sep - 03 Oct", start: "2026-09-27", end: "2026-10-03" },
      { label: "03 Oct - 09 Oct", start: "2026-10-03", end: "2026-10-09" },
      { label: "04 Oct - 10 Oct", start: "2026-10-04", end: "2026-10-10" },
    ],

    highlights: [
      "Dense Alpine Forests – Towering pine and oak trees surround your path as you begin the ascent.",
      "Endless Grassy Meadows – Wander through the vast alpine meadows of Dayara, Litham, and Dunda.",
      "Gushing Waterfalls & Rivers – Cross lively streams and marvel at waterfalls thundering down cliffs.",
      "Pristine Alpine Lakes – Visit the sacred Chandranahan Lake, a hidden gem high above the valley.",
      "The Final Challenge: Buran Pass – Conquer the 15,000 ft Buran Ghati with rope-assisted rappelling – pure adrenaline and unforgettable views!",

    ],

    itinerary: [
  {
    "day": 1,
    "title": "Arrival at Janglik (9,200 ft)",
    "details": "• Drive: Shimla → Rohru → Tangnu → Diude → Janglik: ~7–8 hrs.<br>• Highlights: Blue waters of the Pabbar River, terraced wheat fields, Himachali wooden homes, pine and mixed forests.<br>• Road notes: After Tikri, the motorable track becomes a dirt road winding through switchbacks to reach Diude, then a short walk to Janglik.<br>• Stay: Homestay/guesthouse — warm hospitality, local Himachali cuisine, perfect to rest and acclimatize."
  },
  {
    "day": 2,
    "title": "Janglik to Dayara (11,000 ft)",
    "details": "• Distance: ~5 km | Duration: 4–5 hrs.<br>• Trail: Climb past wheat fields and wooden farmhouses, gradually ascending into oak and pine forests. Streams crisscross the path, and shady forest sections provide refreshing breaks.<br>• Meadows: Sudden opening into expansive alpine meadows with snow patches on distant cliffs.<br>• Flora: Wild strawberries, Himalayan roses, oak ferns.<br>• Camp: Dayara — wide green tabletop meadow with panoramic views of Dhauladhar Range; perfect for your first night under the stars."
  },
  {
    "day": 3,
    "title": "Dayara to Litham (11,800 ft)",
    "details": "• Distance: ~4 km | Duration: 3–4 hrs.<br>• Trail: Traverses through forests, gurgling streams, wide meadows, and rolling hills. Gentle ascent of 737 ft.<br>• Highlights: Views of Dhauladhar Range and Gunas Pass; small waterfalls and Pabbar River tributaries along the way.<br>• Flora & Fauna: Summer brings blue poppies; watch for Himalayan griffon vultures.<br>• Camp: Litham — dramatic meadow with cascading streams, backdrop of snow-clad peaks and glimpses of hidden Chandranahan Lakes."
  },
  {
    "day": 4,
    "title": "Excursion to Chandranahan Lakes (13,800 ft) — Acclimatization Day",
    "details": "• Distance: ~5 km round trip | Duration: 4–5 hrs.<br>• Trail: Steep climb from Litham along shepherds’ trails with boulders and snow patches early season.<br>• Destination: Chandranahan — cluster of glacial tarns, sacred to locals, nestled in a glacial amphitheatre with tiny trickling waterfalls and alpine meadows.<br>• Experience: Spend the day exploring and acclimatizing, soaking in pristine high-altitude Himalayan scenery before returning to Litham for the night."
  },
  {
    "day": 5,
    "title": "Litham to Dunda (13,300 ft)",
    "details": "• Distance: ~5 km | Duration: 4–5 hrs.<br>• Trail: Ascends steadily through alpine meadows, grazing pastures, and gradually rocky terrain with screes.<br>• Highlights: Dramatic views of Buran Ghati and Gunas Pass; first glimpse of the challenging pass ahead.<br>• Flora: Alpine primulas, buttercups, and anemones in June–July.<br>• Camp: Dunda — high-altitude meadow with snow-capped mountains surrounding the campsite; perfect for preparing mentally and physically for the pass day."
  },
  {
    "day": 6,
    "title": "Cross Buran Ghati (15,000+ ft) → Descend to Munirang/River Camp (11,000 ft)",
    "details": "• Distance: ~9 km | Duration: 7–8 hrs.<br>• Ascent: Early morning start from Dunda, climb through scree and boulder gully to the base of the pass.<br>• Summit: Buran Ghati at 15,000+ ft — summer trekkers rappel 70-ft snow wall and slide down glissades; autumn trekkers traverse narrow mountain ledges.<br>• Descent: Series of snowfields, alpine trails, and river crossings leading to lush meadows.<br>• Camp: Munirang — serene grasslands by a flowing stream, surrounded by wild alpine flowers, perfect to relax after high-altitude thrills."
  },
  {
    "day": 7,
    "title": "Munirang to Barua Village → Drive to Shimla",
    "details": "• Trek: ~4 km | Drive: 8–9 hrs.<br>• Trail: Gentle descent through orchards of apples, apricots, walnuts; diverse flora and forest types along the Barua Khud.<br>• Village: Barua — quaint Kinnauri hamlet with temples, fruit orchards, and friendly locals offering a warm welcome.<br>• End: Vehicles from Barua take you back to Shimla, completing a journey rich with Himalayan landscapes, adventure, and cultural immersion."
  }
],

    howToReach: {
      air: "Nearest Airport: Shimla Airport (Jubbarhatti) – ~23 km from Shimla<br>Alternative Airport: Chandigarh Airport – well connected with major cities<br>From Chandigarh, take a taxi or bus to Shimla (~7–8 hrs drive)",
      train: "Nearest Railway Station: Shimla Railway Station (connected via Kalka)<br>From Delhi → Kalka (by train) → Kalka to Shimla (by toy train or taxi)",
      road: "From Shimla to Janglik:<br>Distance: ~150 km<br>Time: 7–8 hours by taxi or local transport<br>Route: Shimla → Rohru → Chirgaon → Tangnu → Janglik",
      travelTip: "*Roads are narrow mountain roads after Rohru; private taxi recommended"
    },

    didYouKnow: [
    " <b>Buran Ghati has everything a trekker dreams of — in one trail!</b>  <br>Forests, wildflower meadows, glacial lakes, ancient villages, thrilling snow descents — few treks in India pack so much variety into a single route.",
  
    " <b>The Buran Pass descent involves rappelling with a rope!</b>  <br>A 400–500 ft snow wall on the pass often requires rope-assisted descent. For many trekkers, this is the most thrilling alpine adventure they’ll experience without technical mountaineering.",
  
    " <b>You pass through centuries-old Himalayan villages!</b>  <br>Janglik and Baruva still preserve traditional Himachali architecture, slate-roofed wooden houses, and terraced farming — a living heritage few outsiders ever see.",
  
    " <b>Dayara meadows rival Uttarakhand’s bugyals!</b>  <br>Carpets of alpine flowers like Himalayan iris, blue poppies, and bistorts bloom here, attracting colorful butterflies and even the Himalayan monal in summer.",
  
    " <b>The trek hides a sacred alpine gem — Chandranahan Lake!</b>  <br>A cluster of seven glacial tarns, Chandranahan is considered the source of the Pabbar River and is worshipped by locals. Snow often lingers here till July.",
  
    " <b>Buran Ghati is a crossover trek!</b>  <br>You begin in the lush Pabbar Valley of Shimla and descend into the stark yet fertile orchards of Kinnaur, experiencing two distinct Himalayan landscapes in just one journey.",
  
    " <b>Wildlife thrives here!</b>  <br>Look out for Himalayan snowcocks, yellow-billed choughs circling the cliffs, and if lucky, even the elusive Himalayan fox or goral grazing on high pastures."
  ],


    gallery: [
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755517793/buran-ghati-view1_tgp9m7.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755517790/buran-ghati-view13_db4er5.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755517789/buran-ghati-view7_eqiwgk.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755517787/buran-ghati-view3_uma8zr.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755517786/buran-ghati-hero1_d4topd.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755517785/buran-ghati-view2_plkgy7.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755517785/buran-ghati-hero2_hgwepy.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755517779/buran-ghati-view19_akcpng.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755517776/buran-ghati-view12_jey4kt.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755517774/buran-ghati-view16_nahhaq.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755517771/buran-ghati-hero_iunjqk.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755517771/buran-ghati-view10_kxp2de.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755517768/buran-ghati-view6_rmgxaq.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755517767/buran-ghati-view11_aaqbi7.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755517761/buran-ghati-view15_svxxty.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755517758/buran-ghati-view20_p8ail2.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755517757/buran-ghati-view18_oekekm.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755517756/buran-ghati-view14_chp4fe.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755517747/buran-ghati-view17_grnxbv.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755517747/buran-ghati-view21_kl9ten.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755517747/buran-ghati-view5_qq6iw3.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755517746/buran-ghati-view4_xxsmbn.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755517738/buran-ghati-view9_o29ib9.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755517737/buran-ghati-view8_oioktb.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1762007239/buran-ghati-view21_p8onot.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1762007240/buran-ghati-view35_znayci.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1762007249/buran-ghati-view26_tpwze7.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1762007239/buran-ghati-view33_sqkwhz.jpg",

    ],

    downloadLink: "/docs/Himalayan_Trek_Packing_List.pdf",

    faqs: {
  questions: [
    {
      question: "Who can participate in the Buran Ghati trek?",
      answer: "The Buran Ghati trek is recommended for trekkers with prior high-altitude trekking experience. It is a moderately difficult to difficult trek, reaching 15,000 ft, with long walking days, snow traverses, and a thrilling 400–500 ft ice wall descent from the pass. Strong fitness and some technical exposure are highly beneficial.",
    },
    {
      question: "What makes the Buran Ghati trek unique?",
      answer: "Buran Ghati is one of the most versatile Himalayan treks. It combines ancient villages, dense oak-pine forests, high-altitude meadows, glacier basins, and a dramatic pass crossing with snow slides. Trekkers get both cultural immersion and adventure in a single trail, making it one of the best 'complete' Himalayan experiences.",
    },
    {
      question: "What should I pack for the Buran Ghati trek?",
      answer: "Along with the standard Himalayan trekking essentials (waterproof shoes, layered warm clothing, backpack with rain cover, personal medicines, and a headlamp), trekkers must carry trekking poles and sturdy gloves for the snow wall descent. Download the PDF checklist above for a detailed packing list.",
    },
    {
      question: "Is technical equipment provided for the Buran Ghati pass crossing?",
      answer: "Yes. For the snow descent from the Buran Pass, trekkers are equipped with ropes, harnesses, and helmets by the trek leaders. Microspikes and gaiters are also provided depending on snow conditions. Safety gear and technical assistance are arranged by the trek operator.",
    },
    {
      question: "Is offloading available on the Buran Ghati trek?",
      answer: "Yes, offloading is available at an additional charge (₹4,800 approx). This allows trekkers to hand over their main backpack to mules/porters while carrying only a light daypack. However, during the pass-crossing day, trekkers are expected to manage their own bags for safety and mobility.",
    },
    {
      question: "What is the best time to do the Buran Ghati trek?",
      answer: "The trek is best done in June (early summer) and September–October (autumn). In June, expect heavy snow around the pass and thrilling snow slides. In autumn, the meadows turn golden, the forests glow in shades of red and yellow, and the trails are snow-free, offering crystal-clear views.",
    },
    {
      question: "How difficult is the Buran Ghati trek compared to Rupin Pass?",
      answer: "Both are high-adventure treks, but Buran Ghati is slightly more technical due to the steep snow-wall descent from the pass. Rupin demands more endurance with long trekking days and continuous altitude gain, while Buran tests trekkers’ grit with its technical challenge at 15,000 ft.",
    },
    {
      question: "Will there be network coverage on the Buran Ghati trek?",
      answer: "Network is limited. You may find weak signals at Janglik (the base village), but once you enter the valley, expect no connectivity until Barua village on the other side of the pass. Prepare for a complete digital detox during the trek.",
    },
  ],
},

    faqsLink: "/faqs-and-articles",
  },



  {
    id: "ali-bedni-bugyal-trek",
    name: "Ali Bedni Bugyal Trek",
    tags: ["family", "beginner"],
    difficulty: ["easy"],
    season: ["spring", "autumn", "winter"],
    month: ["january", "february", "march", "april", "may", "june", "september", "october", "november", "december"],
    duration: ["5 Nights / 6 Days"],
    region: "uttarakhand",
    heroImage: "https://res.cloudinary.com/dr44hob9b/image/upload/v1755517462/ali-bedni-hero1_irkwxk.jpg",

    heroImages: ["https://res.cloudinary.com/dr44hob9b/image/upload/v1755517462/ali-bedni-hero1_irkwxk.jpg",
                "https://res.cloudinary.com/dr44hob9b/image/upload/v1755517485/ali-bedni-view6_ofmkxs.jpg",
                "https://res.cloudinary.com/dr44hob9b/image/upload/v1761153747/IMG_20170919_090518_jkbosf.jpg",
    ],

    subtitle: "A Timeless Himalayan Meadow Walk",
    coordinates: [
  [30.2106, 79.5861], // Lohajung (start)
  [30.3014, 79.6467], // Bedni Bugyal (end)
],

seo: {
  title: "Ali Bedni Bugyal Trek | Itinerary, Cost & Dates | Planethimalayas",
  description: "Ali Bedni Bugyal Trek (11,686 ft) is famous for India’s most beautiful alpine meadows. Over 6 days, you walk through oak forests, rolling grasslands, and camp with Mt. Trishul & Nanda Ghunti in view."
},
    overview: {
      facts: [
        { emoji: "⏳", label: "Trek Duration", value: "5 Nights / 6 Days" },
        { emoji: "🏔️", label: "Max Altitude", value: "11,500 ft (Bedni bugyal)" },
        { emoji: "⚡", label: "Trek Grade", value: "Easy" },
        { emoji: "⚡", label: "Trek Distance", value: "28 Km" },
        { emoji: "🌤️", label: "Best Time", value: "September-May" },
        { emoji: "🗺️", label: "Region", value: "Chamoli district, Uttarakhand" },
        { emoji: "📍", label: "Start Point", value: "Lohajung (Uttarakhand)" },
        { emoji: "🏁", label: "End Point", value: "Wan (Uttarakhand)" },
        { emoji: "🧥", label: "Cloakroom facility", value: "Available" },
      ],
      snippet: 
  "The Ali–Bedni Bugyal Trek is a journey into the heart of Uttarakhand’s most enchanting high-altitude meadows — vast rolling grasslands that look like they’ve been brushed onto the earth by the hands of the gods. Starting from the quiet mountain village of Lohajung, the trail gently climbs through ancient oak and rhododendron forests where sunlight filters in golden beams and the woods echo with Himalayan thrushes, woodpeckers, and the occasional rustle of a mountain fox slipping between the shadows.<br>Then, almost without warning, the forests fall away and the world opens up into the endless green waves of Ali Bugyal — one of the largest alpine meadows in Asia. Walking here feels surreal. The air becomes crisp, the earth soft underfoot, and far on the horizon rise the great guardians of the Garhwal Himalayas: Mt. Trishul, Nanda Ghunti, and Chaukhamba, glowing white under the morning sun or flushed in shades of rose and gold at dusk. It’s a landscape so vast and quiet that you can hear the wind travel across the grass.<br>A gentle traverse leads you to Bedni Bugyal, equally magical yet imbued with a deeper spiritual energy. At its center lies Bedni Kund, a sacred, mirror-like pond believed to have witnessed centuries of rituals and the legendary Nanda Devi Raj Jat Yatra, one of the Himalayas’ most revered pilgrimages. The meadows here are dotted with wildflowers — blue poppies, brahmakamal, bistorts, and primulas — turning the terrain into a vibrant tapestry during summer.<br>Ali and Bedni are more than just meadows; they are living, breathing landscapes where nature, culture, and ancient lore blend seamlessly. Whether you are a first-time trekker or an experienced wanderer, these bugyals welcome you into a world where the sky feels close enough to touch, the mountains watch silently over the valleys, and every step fills you with a quiet sense of wonder."
    },

    price: 9500,
    priceNote: "* Lohajung to Wan",
    addons: {
      transport: 2800, 
      offloadingbag: 2400,
      transportNote: "* Rishikesh to Rishikesh",
      offloadingNote: "* Maximum weight 9kg / bag"
    },

    inclusionsNote: "🍽️ All Meals – Nutritious meals provided from dinner on Day 1 to breakfast on Day 6",

    dates: [
      
      { label: "22 Nov - 27 Nov", start: "2025-11-22", end: "2025-11-27" },
      { label: "23 Nov - 28 Nov", start: "2025-11-23", end: "2025-11-28" },
      { label: "24 Nov - 29 Nov", start: "2025-11-24", end: "2025-11-29" },
      { label: "29 Nov - 04 Dec", start: "2025-11-29", end: "2025-12-04" },
      { label: "30 Nov - 05 Dec", start: "2025-11-30", end: "2025-12-05" },
      { label: "01 Dec - 06 Dec", start: "2025-12-01", end: "2025-12-06" },
      { label: "06 Dec - 11 Dec", start: "2025-12-06", end: "2025-12-11" },
      { label: "07 Dec - 12 Dec", start: "2025-12-07", end: "2025-12-12" },
      { label: "08 Dec - 13 Dec", start: "2025-12-08", end: "2025-12-13" },
      { label: "13 Dec - 18 Dec", start: "2025-12-13", end: "2025-12-18" },
      { label: "14 Dec - 19 Dec", start: "2025-12-14", end: "2025-12-19" },
      { label: "15 Dec - 20 Dec", start: "2025-12-15", end: "2025-12-20" },
      { label: "20 Dec - 25 Dec", start: "2025-12-20", end: "2025-12-25" },
      { label: "21 Dec - 26 Dec", start: "2025-12-21", end: "2025-12-26" },
      { label: "22 Dec - 27 Dec", start: "2025-12-22", end: "2025-12-27" },
      { label: "27 Dec - 01 Jan", start: "2025-12-27", end: "2026-01-01" },
      { label: "28 Dec - 02 Jan", start: "2025-12-28", end: "2026-01-02" },
      { label: "29 Dec - 03 Jan", start: "2025-12-29", end: "2026-01-03" },
      { label: "03 Jan - 08 Jan", start: "2026-01-03", end: "2026-01-08" },
      { label: "04 Jan - 09 Jan", start: "2026-01-04", end: "2026-01-09" },
      { label: "05 Jan - 10 Jan", start: "2026-01-05", end: "2026-01-10" },
      { label: "10 Jan - 15 Jan", start: "2026-01-10", end: "2026-01-15" },
      { label: "11 Jan - 16 Jan", start: "2026-01-11", end: "2026-01-16" },
      { label: "12 Jan - 17 Jan", start: "2026-01-12", end: "2026-01-17" },
      { label: "17 Jan - 22 Jan", start: "2026-01-17", end: "2026-01-22" },
      { label: "18 Jan - 23 Jan", start: "2026-01-18", end: "2026-01-23" },
      { label: "19 Jan - 24 Jan", start: "2026-01-19", end: "2026-01-24" },
      { label: "24 Jan - 29 Jan", start: "2026-01-24", end: "2026-01-29" },
      { label: "25 Jan - 30 Jan", start: "2026-01-25", end: "2026-01-30" },
      { label: "26 Jan - 31 Jan", start: "2026-01-26", end: "2026-01-31" },
      { label: "31 Jan - 05 Feb", start: "2026-01-31", end: "2026-02-05" },
      { label: "01 Feb - 06 Feb", start: "2026-02-01", end: "2026-02-06" },
      { label: "02 Feb - 07 Feb", start: "2026-02-02", end: "2026-02-07" },
      { label: "07 Feb - 12 Feb", start: "2026-02-07", end: "2026-02-12" },
      { label: "08 Feb - 13 Feb", start: "2026-02-08", end: "2026-02-13" },
      { label: "09 Feb - 14 Feb", start: "2026-02-09", end: "2026-02-14" },
      { label: "14 Feb - 19 Feb", start: "2026-02-14", end: "2026-02-19" },
      { label: "15 Feb - 20 Feb", start: "2026-02-15", end: "2026-02-20" },
      { label: "16 Feb - 21 Feb", start: "2026-02-16", end: "2026-02-21" },
      { label: "21 Feb - 26 Feb", start: "2026-02-21", end: "2026-02-26" },
      { label: "22 Feb - 27 Feb", start: "2026-02-22", end: "2026-02-27" },
      { label: "23 Feb - 28 Feb", start: "2026-02-23", end: "2026-02-28" },
      { label: "28 Feb - 05 Mar", start: "2026-02-28", end: "2026-03-05" },
      { label: "01 Mar - 06 Mar", start: "2026-03-01", end: "2026-03-06" },
      { label: "02 Mar - 07 Mar", start: "2026-03-02", end: "2026-03-07" },
      { label: "07 Mar - 12 Mar", start: "2026-03-07", end: "2026-03-12" },
      { label: "08 Mar - 13 Mar", start: "2026-03-08", end: "2026-03-13" },
      { label: "09 Mar - 14 Mar", start: "2026-03-09", end: "2026-03-14" },
      { label: "14 Mar - 19 Mar", start: "2026-03-14", end: "2026-03-19" },
      { label: "15 Mar - 20 Mar", start: "2026-03-15", end: "2026-03-20" },
      { label: "16 Mar - 21 Mar", start: "2026-03-16", end: "2026-03-21" },
      { label: "21 Mar - 26 Mar", start: "2026-03-21", end: "2026-03-26" },
      { label: "22 Mar - 27 Mar", start: "2026-03-22", end: "2026-03-27" },
      { label: "23 Mar - 28 Mar", start: "2026-03-23", end: "2026-03-28" },
      { label: "28 Mar - 02 Apr", start: "2026-03-28", end: "2026-04-02" },
      { label: "29 Mar - 03 Apr", start: "2026-03-29", end: "2026-04-03" },
      { label: "30 Mar - 04 Apr", start: "2026-03-30", end: "2026-04-04" },
      { label: "04 Apr - 09 Apr", start: "2026-04-04", end: "2026-04-09" },
      { label: "05 Apr - 10 Apr", start: "2026-04-05", end: "2026-04-10" },
      { label: "06 Apr - 11 Apr", start: "2026-04-06", end: "2026-04-11" },
      { label: "11 Apr - 16 Apr", start: "2026-04-11", end: "2026-04-16" },
      { label: "12 Apr - 17 Apr", start: "2026-04-12", end: "2026-04-17" },
      { label: "13 Apr - 18 Apr", start: "2026-04-13", end: "2026-04-18" },
      { label: "18 Apr - 23 Apr", start: "2026-04-18", end: "2026-04-23" },
      { label: "19 Apr - 24 Apr", start: "2026-04-19", end: "2026-04-24" },
      { label: "20 Apr - 25 Apr", start: "2026-04-20", end: "2026-04-25" },
      { label: "25 Apr - 30 Apr", start: "2026-04-25", end: "2026-04-30" },
      { label: "26 Apr - 01 May", start: "2026-04-26", end: "2026-05-01" },
      { label: "27 Apr - 02 May", start: "2026-04-27", end: "2026-05-02" },
    ],

    highlights: [
      "Panoramic views of Trishul and Nanda Ghunti",
      "Lush oak and rhododendron forests burst into vibrant bloom during spring, painting the trail in shades of red and pink — while in winter, the same forests turn magical under a soft blanket of snow, offering a calm, fairy-tale-like charm.",
      "Easy-moderate trail suitable for fit beginners",
      "Vibrant sunrises and starry night skies from campsites",
      "Cultural exposure to mountain life in villages like Didna and Wan",
      "A balanced mix of forests, meadows, and ridge walks"
    ],

    itinerary: [
  {
    day: 1,
    title: "Drive from Rishikesh to Lohajung (7,600 ft)",
    details: "<strong>• Distance: ~250 km | Duration: 9–10 hrs.</strong><br>• Your journey to Ali Bedni Bugyal Trek begins with an early morning drive from Rishikesh to Lohajung, a scenic Himalayan village that serves as the base for many treks in Uttarakhand. The drive takes around 10–11 hours, covering roughly 220 km through winding mountain roads and breathtaking river valleys.<br>As you leave behind the spiritual town of Rishikesh, where the holy Ganga flows gracefully, the landscape transforms into steep ridges and dense pine forests. Along the way, you’ll pass through three of the Panch Prayags — Devprayag, Rudraprayag, and Karnaprayag — each a sacred confluence where tributaries of the Alaknanda meet other rivers.<br>At Devprayag, witness the iconic meeting of the Bhagirathi and Alaknanda Rivers, marking the birth of the mighty Ganga. It’s a spectacular sight that captures both the serenity and power of the Himalayas.<br>The road continues through charming mountain towns and terraced fields, with the Alaknanda River keeping you company for most of the journey. As you approach Lohajung (7,600 ft), the first views of the Nanda Ghunti Peak emerge — a glimpse of the snowy giants awaiting you in the coming days.<br>Lohajung is a small yet lively settlement with a few local shops and guesthouses. If you arrive before sunset, take a gentle walk around the village to acclimatize and enjoy the mountain air. According to local folklore, the name Lohajung comes from an ancient tale — it’s believed that Goddess Parvati fought a demon named Lohasur here, hence the name ‘Lohajung,’ meaning ‘the war with Lohasur’.<br>End your day with a hot, comforting dinner at the guesthouse and prepare for the trek ahead — tomorrow, the real adventure begins."
  },
  {
    day: 2,
    title: "Lohajung to Didna Village (8,200 ft)",
    details: "<strong>• Trek Distance: ~6 km | Duration: 4–5 hrs.</strong><br>• The trek to Didna (8,200 ft) starts with a clearly defined forest path that meanders through oak and rhododendron trees. The initial section includes gentle ascents and descents through shaded woodland, making it a pleasant start to your Himalayan journey.<br>After about an hour and a half of hiking, we’ll reach the Neel Ganga River, a sparkling mountain stream that marks the midpoint of today’s trek. It’s a perfect spot to rest, refill your bottles, and soak in the calming sound of the gushing water surrounded by thick forest.<br>From Neel Ganga, the trail climbs steeply for the next couple of hours — this is the most challenging part of the day. The steady ascent leads us up to Didna village, a charming hamlet known for its traditional stone houses and terraced fields. The views start opening up beautifully as you gain altitude.<br>We’ll continue a little further ahead into the outskirts of Didna, where we’ll set up camp in a peaceful forest clearing. The site offers a quiet, natural ambience — surrounded by tall trees and the distant hum of the valley below.<br>Evening time is perfect for short acclimatization walks or simply relaxing near the campsite. You can watch the sun dip behind the hills, enjoy some photography, and later, a warm, freshly cooked dinner under a canopy of stars.<br>Sleep early tonight — tomorrow’s trek will take us above the tree line into open alpine meadows."
  },
  {
    day: 3,
    title: "Didna to Ali Bugyal (11,000 ft)",
    details: "<strong>• Trek Distance: ~6 km | Duration: 5–6 hrs.</strong><br>• Day 3 of the trek unfolds the heart of the trek — vast rolling meadows, crisp mountain air, and unforgettable views. Today, we trek from Didna to Khobal Tal, passing through the legendary Ali Bugyal, one of the most scenic alpine meadows in India.<br>We begin the morning with an early breakfast before setting out on the trail. The initial section climbs steadily through dense oak and rhododendron forests — a tranquil stretch filled with bird calls and soft mountain light filtering through the trees.<br>A few hours into the trek, we’ll reach Tolpani, a small clearing that serves as the only reliable water source on this route. It’s the perfect spot to rest, refill your bottles, and gather energy for the ascent ahead.<br>Soon after, the forest begins to thin, and the breathtaking Ali Bugyal opens up before you — a sweeping expanse of velvet-green slopes stretching endlessly into the horizon. This section of the trail is truly a photographer’s paradise, offering panoramic views of Mt. Trishul and Mt. Mrigthuni standing tall against the skyline. During winter, these meadows turn into a snow-laden wonderland, glowing under the Himalayan sun.<br>As you traverse the gentle undulations of Ali Bugyal, take your time to immerse yourself in the calmness and grandeur of this high-altitude landscape.<br>From here, the trail continues towards Khobal Tal, our campsite for the night. Located near a serene lake at the edge of the meadows, Khobal Tal is surrounded by pine forests and open views of the mountains. As dusk settles, you’ll find yourself sitting by your tent under a clear, starlit sky — the perfect setting to unwind after a long, rewarding day of trekking.<br>Tonight, we camp here in the wilderness, lulled to sleep by the whispers of the alpine breeze and the tranquility of the high meadows."
  },
  {
    day: 4,
    title: "Ali Bugyal to Ghairoli Patal (10,500 ft) via Bedni Bugyal (Bedni Top: 12,500 ft)",
    details: "<strong>• Trek Distance: ~7 km round trip | Duration: 5–6 hrs.</strong><br>• Day 4 brings yet another magical chapter of this Himalayan journey as we move from Khobal Tal to Bedni Bugyal, one of the most enchanting alpine meadows in India. After a refreshing cup of morning tea and a wholesome breakfast, we’ll begin our gradual ascent along a narrow, scenic trail that winds through rolling ridges and open landscapes.<br>Soon, the trail opens up to the magnificent Bedni Bugyal, a vast green expanse set against the dramatic backdrop of towering Himalayan peaks. This is where the grandeur of the Garhwal Himalayas truly comes alive — with Mt. Trishul, Nanda Ghunti, Neelkanth, and Chaukhamba gleaming in the morning light. During early hours, the meadows shimmer with dew and golden sunlight, making it one of the most photogenic stretches of the entire trek.<br>At the heart of the meadow lies the sacred Bedni Kund, a small glacial pond surrounded by legends. Deeply rooted in local mythology, this site plays a key role in the Nanda Devi Raj Jat Yatra, a grand pilgrimage held once every 12 years. On a clear day, the reflection of the mighty peaks in the calm waters of Bedni Kund creates a breathtaking sight you’ll never forget.<br>After spending time soaking in the spiritual and natural beauty of Bedni Bugyal, we’ll begin our descent toward Ghairoli Patal, our campsite for the night. The route drops sharply through enchanting meadows and dense oak forests, filled with birdsong and misty glades.<br>Ghairoli Patal is a tranquil clearing nestled deep in the woods — the perfect spot to rest after a rewarding day. As evening falls, enjoy a hot dinner, share stories with your trek mates, and gaze up at the starlit sky through the canopy of trees. The gentle silence of the forest will lull you into a peaceful night’s sleep in your tents."
  },
  {
    day: 5,
    title: "Ghairoli Patal to Wan Village (7,800 ft) | Drive to Lohajung",
    details: "<strong>• Trek Distance: ~10 km | Duration: 5–6 hrs.</strong><br>• Your final day on the Ali Bedni Bugyal Trek begins with the soft glow of dawn and the crisp mountain air brushing past your tent. Enjoy a comforting cup of tea followed by a hearty breakfast while taking one last look at the serene Himalayan landscape that has been your home for the past few days. Today marks your descent from Ghairoli Patal to Wan Village, followed by a short drive back to Lohajung.<br>The trail begins with a long, zigzag descent through a peaceful forest filled with ancient oak groves and moss-laden trees. As you make your way down, you’ll pass a few rustic shepherd huts — still used by nomadic herders who graze their flocks in these highlands during summer. The route then leads you once again to the Neelganga River, its crystal-clear waters cutting through the valley. Pause for a moment here — this is your final river crossing of the trek, and it offers a perfect chance to rest and reflect on the journey so far.<br>After crossing the river, the trail climbs gradually toward Ran Ka Dhar, a charming spot to catch your breath and take in sweeping views of the lower valley. A short and pleasant hike from here will bring you to Wan, one of the highest motorable villages in this part of Uttarakhand. Wan is a picturesque hamlet, known for its wooden houses, terraced farms, and warm-hearted locals.<br>Before concluding your trek, make sure to stop by the centuries-old Latu Devta temple, a sacred shrine steeped in local legend. The deity here is considered so powerful that even the priest enters blindfolded during rituals — a fascinating glimpse into the region’s deep-rooted traditions.<br>From Wan, board your vehicle for a short 45-minute drive to Lohajung, marking the end of your incredible Himalayan journey. Once back, unwind at your guesthouse, explore the small local market, or simply relax and soak in the quiet satisfaction of completing one of the most scenic treks in India. In the evening, gather with your trek mates for a celebratory dinner, share stories from the trail, and rest well after a truly memorable adventure."
  },
  {
    day: 6,
    title: "Drive from Lohajung to Rishikesh",
    details: "<strong>• Distance: ~250 km | Duration: 10–11 hrs.</strong><br>• Today marks your departure day, the moment when your Himalayan adventure gently transitions back toward everyday life. After a warm breakfast, it’s time to bid farewell to the mountains that have been your home for the past few days. The drive winds through the heart of Garhwal’s valleys, passing river confluences, pine-covered slopes, and quiet mountain settlements that seem to whisper stories of the trek you’ve just completed.<br>As you journey back, every bend in the road feels like a reflection — of misty mornings on the trail, laughter shared at campsites, and the calm of endless meadows. Though the adventure ends here, the spirit of the Himalayas travels with you — in your heart, in your thoughts, and in the renewed energy you carry home."
  }
],

    howToReach: {
      air: "Nearest airport is Jolly Grant Airport, Dehradun (approx. 250 km from Lohajung)",
      train: "Nearest railway stations: Rishikesh or Haridwar. Frequent trains from Delhi, Dehradun, and major cities",
      road: "Overnight buses available from Delhi to Rishikesh/Haridwar",
      travelTip: "Shared cabs or private taxis are available from Rishikesh to Lohajung, usually departing early in the morning. Here's how you can make the journey smoother:<br><br>**Route A (Direct or via major hubs):**<br>Rishikesh → Devprayag → Srinagar → Rudraprayag → Karnaprayag → Tharali → Debal → Lohajung. This route spans approximately **260–270 km** and takes **10 to 12 hours** depending on road conditions.<br><br>**Option B (Break journey for comfort):**<br>Split the trek: Take public transport or a taxi to Karnaprayag (~6–7 h), then switch to shared cabs via Tharali and Debal to reach Lohajung in around 3–4 more hours.<br> **Key travel hubs:** Karnaprayag is approximately 172 km from Rishikesh; from there, it's about 60 km to Debal, then another 20 km to Lohajung.<br> **Pro tips:**<br>• Book shared cabs early—seats are limited and fill up fast.<br>• Carry enough cash—ATMs are rare beyond Karnaprayag.<br>• Travel breaks at Devprayag, Srinagar, or Karnaprayag offer scenic river confluences and local food stops."

    },

  didYouKnow: [
    " <b>Roopkund, the mysterious Skeleton Lake, lies further on this trail!</b>  <br>Beyond Bedni Bugyal, the route leads to Roopkund (16,499 ft), where hundreds of ancient human skeletons were discovered — still a mystery for historians and scientists. This is also the route for the sacred Nanda Devi Raj Jat Yatra.",
  
    " <b>Bedni Kund is steeped in Himalayan mythology.</b>  <br>Locals believe Goddess Nanda Devi rests here during the Raj Jat Yatra, a once-in-12-years pilgrimage. Shepherds and villagers still offer flowers and ghee lamps at the pond before moving their flocks into the meadows.",
  
    " <b>Ali & Bedni Bugyal are among the largest high-altitude meadows in Asia!</b>  <br>Stretching over several square kilometers, they burst into seasonal color with brahmakamal (the sacred Himalayan flower), blue poppies, primulas, and anemones, while attracting Himalayan monals and griffon vultures.",
  
    " <b>Wan — a village from another time.</b>  <br>Perched at 7,800 ft, Wan is dotted with slate-roofed wooden homes, step fields, and the mystical Latu Devta Temple. Its culture and architecture reflect centuries of Himalayan tradition, untouched by mass tourism.",
  
    " <b>The forests here are ancient biodiversity hotspots.</b>  <br>The oak, pine, and rhododendron forests around Ali & Bedni host langurs, mountain foxes, and dozens of bird species — from yellow-billed blue magpies to Himalayan barbets. Spring transforms these woods into a riot of blossoms, while autumn paints them golden.",
  
    " <b>Lohajung carries a legend of battle.</b>  <br>The name comes from 'Lohasur Jung,' meaning the battle with the demon Lohasur, whom Goddess Parvati is said to have slain here. Today, Lohajung is the starting point for several legendary treks including Ali Bedni Bugyal, Brahmatal, and Roopkund."
  ],

    gallery: [
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755517488/ali-bedni-view3_xspbzv.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755517485/ali-bedni-view5_wcnz0a.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755517485/ali-bedni-view6_ofmkxs.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755517484/ali-bedni-view1_yorzo0.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755517482/ali-bedni-view12_me84xf.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755517482/ali-bedni-view4_ptzjzr.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755517481/ali-bedni-view2_xyiwnr.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755517472/ali-bedni-view7_o5jazf.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755517472/ali-bedni-view15_hm1a9p.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755517470/ali-bedni-view16_mzwzum.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755517469/ali-bedni-view14_m90ohv.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755517469/ali-bedni-view13_mi7mra.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755517468/ali-bedni-view8_sb2vpt.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755517467/ali-bedni-view10_hblv99.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755517466/ali-bedni-view11_pzgmcn.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755517465/ali-bedni-view9_k1surt.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755517462/ali-bedni-hero_ttwxwq.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755517462/ali-bedni-hero1_irkwxk.jpg"

    ],

    downloadLink: "/docs/Himalayan_Trek_Packing_List.pdf",

    faqs: {
  questions: [
    {
      question: "Who can participate in the Ali Bedni Bugyal trek?",
      answer: "The Ali-Bedni Bugyal trek is meant for everyone — whether you're stepping into the Himalayas for the first time or are a seasoned trekker seeking a refreshing experience. With moderate slopes, easy accessibility, and a comfortable altitude profile, it’s ideal for first-timers while remaining equally rewarding for experienced trekkers who enjoy panoramic trails and classic Himalayan landscapes.",
    },
    {
      question: "What makes the Ali Bedni Bugyal trek special?",
      answer: "Ali Bedni Bugyal is one of Uttarakhand’s most scenic alpine meadows. Trekkers experience lush green grasslands, panoramic views of Himalayan peaks like Swargarohini and Bandarpoonch, and serene landscapes dotted with wildflowers. It is perfect for photographers, nature lovers, and those seeking a calm, less-crowded Himalayan trek.",
    },
    {
      question: "What are the temperature levels during different seasons on the Ali Bedni Bugyal trek?",
      answer: "In spring (April–June), daytime temperatures range between 10°C to 18°C, with chilly nights dropping to around 0°C. During autumn (September–November), expect pleasant days between 8°C to 15°C and cold nights around -2°C to 3°C. Winter (December–March) brings snow and sub-zero conditions — daytime temperatures hover around 0°C to 5°C, while nights can fall as low as -8°C to -10°C, offering a true Himalayan winter experience.",
    },
    {
      question: "What should I pack for the Ali Bedni Bugyal trek?",
      answer: "Essential items include comfortable trekking shoes, layered clothing for variable weather, a 40–50L backpack with rain cover, trekking poles, thermal wear, a hat, and sunscreen. Refer to the downloadable PDF above for a complete packing checklist.",
    },
    {
      question: "Is offloading available during the trek?",
      answer: "Yes, offloading services are available for an additional fee. Trekkers can carry a light daypack while the main backpack is carried by porters, ensuring a more comfortable experience on the meadow trails.",
    },
    {
      question: "What is the best time to do the Ali Bedni Bugyal trek?",
      answer: "The trek is best undertaken from March to June (spring–early summer) when wildflowers blanket the meadows and rhododendrons bloom in abundance in the forests, turning the entire trek a fairytale. Next best time is from September to October (autumn) when the skies are crystal clear and the landscape glows golden. Winter (December to February) is equally rewarding for those seeking solitude and snow — the meadows and forests turn pristine white, offering a completely different, magical experience. Monsoon (July–August) is less recommended due to slippery trails and heavy cloud cover.",
    },
    {
      question: "Will there be mobile network coverage during the trek?",
      answer: "Network coverage is limited. Airtel and Jio may have intermittent signals at base villages like Lohajung, but once on the higher meadows, expect little to no connectivity. It is advisable to inform family or friends beforehand.",
    },
    {
      question: "Are there any cultural or natural highlights on the Ali Bedni Bugyal trek?",
      answer: "Yes, the trek passes through quaint Uttarakhand villages, rhododendron forests, and alpine streams. Trekkers can enjoy the vibrant flora, spot Himalayan birds, and witness panoramic sunrise and sunset views over the Garhwal Himalayas from the meadow.",
    },
    {
      question: "Is the Ali Bedni Bugyal trek suitable for solo trekkers?",
      answer: "Yes, this trek is safe for solo travelers with basic trekking experience. Group treks are recommended for support, but the trail is well-marked and organized campsites make solo trekking manageable.",
    },
  ],
},

    faqsLink: "/faqs-and-articles",
  },


  {
    id: "deoriatal-chandrashila-trek",
    name: "Deoriatal Chandrashila Trek",
    tags: ["family", "beginner"],
    difficulty: ["easy"],
    season: ["spring", "autumn", "winter"],
    month: ["january", "february", "march", "april", "may", "june", "september", "october", "november", "december"],
    duration: ["5 Nights / 6 Days"],
    region: "uttarakhand",
    coordinates: [
    [30.5416, 79.1801], // Sari Village (start)
    [30.5519, 79.1886], // Deoriatal
    [30.5489, 79.2100], // Chopta
    [30.5278, 79.2236], // Tungnath
    [30.5411, 79.2253], // Chandrashila Summit (end)
  ],
    heroImage: "https://res.cloudinary.com/dr44hob9b/image/upload/v1762329745/chandrashila-summit-view2_gr4dyd.jpg",

    heroImages: ["https://res.cloudinary.com/dr44hob9b/image/upload/v1762329745/chandrashila-summit-view2_gr4dyd.jpg",
                "https://res.cloudinary.com/dr44hob9b/image/upload/v1755517852/chandrashila-hero_r8w4xm.jpg",
                "https://res.cloudinary.com/dr44hob9b/image/upload/v1755517841/chandrashila-view5_e0xdz7.jpg",
                "https://res.cloudinary.com/dr44hob9b/image/upload/v1762329747/chandrasila-trek-spring-view_hcem1p.jpg",
                "https://res.cloudinary.com/dr44hob9b/image/upload/v1755517847/chandrashila-hero2_zmhy2k.jpg",
                "https://res.cloudinary.com/dr44hob9b/image/upload/v1755517840/chandrashila-view6_le2ugy.jpg",
                "https://res.cloudinary.com/dr44hob9b/image/upload/v1762329740/chandrashila-summit-view1_qg5i13.jpg",
    ],
    subtitle: "A Perfect Himalayan Panorama",

    seo: {
    title: "Deoriatal Chandrashila Trek | Itinerary, Cost & Dates | Planethimalayas",
    description: "Deoriatal Chandrashila Trek (12,083 ft) is Uttarakhand’s best short trek, offering panoramic views of Nanda Devi, Chaukhamba, and Kedarnath peaks. A 6-day easy Himalayan escape."
  },

    overview: {
      facts: [
        { emoji: "⏳", label: "Trek Duration", value: "5 Nights / 6 Days" },
        { emoji: "⚡", label: "Trek Grade", value: "Easy" },
        { emoji: "🏔️", label: "Max Altitude", value: "12,000 ft (Chandrashila peak)" },
        { emoji: "⚡", label: "Trek Distance", value: "32 Km" },
        { emoji: "🌤️", label: "Best Time", value: "September-May" },
        { emoji: "🗺️", label: "Region", value: "Rudrayaprayag district, Kedarnath Wildlife Sanctuary, Uttarakhand" },
        { emoji: "📍", label: "Start Point", value: "Sari (Uttarakhand)" },
        { emoji: "🏁", label: "End Point", value: "sari (Uttarakhand)" },
        { emoji: "🧥", label: "Cloakroom facility", value: "Available" },
      ],
    snippet: 
      "Experience a side of the Garhwal Himalayas that feels both mythical and impossibly serene. The Deoriatal–Chandrashila Trek begins gently, winding through ancient oak and rhododendron forests where the air is cool, birdsong echoes between the trees, and the forest floor glows with moss and wildflowers. As you climb, the landscape becomes a moving canvas — Himalayan woodpeckers darting between branches, verditer flycatchers glowing turquoise in the sunlight, and the elusive Himalayan Monal flashing iridescent colours in the undergrowth.<br>Soon the trail opens to the emerald shores of Deoriatal, a quiet, glass-still lake set against a backdrop of towering snow peaks of Chaukhamba and Kedarnath range. Locals believe gods and goddesses once bathed here — and when you see Chaukhamba reflected perfectly in the water, you’ll understand why this place feels sacred.<br>Beyond the lake lie wide, breezy meadows like Rohini and Shyalmi Bugyal, where the world suddenly expands. Shepherd shelters, soft grasslands dotted with seasonal blooms, and sweeping ridgelines guide you forward as the forests slowly give way to open Himalayan wilderness. Sunrise and sunset here are unforgettable — golden light spilling across distant ranges, clouds drifting like slow rivers below your feet.<br>The final ascent to Chandrashila Peak (12,083 ft) is short but exhilarating. As you reach the summit, the horizon bursts open into a full 360° panorama of the greatest Himalayan giants — Nanda Devi, Trishul, Chaukhamba, Kedar Dome, Kamet, Nilkanth, and countless unnamed ridges fading into the sky. No other easy–moderate trek offers a summit view this grand.<br>Along the way, the spiritual heartbeat of the region accompanies you — especially at the Tungnath Temple, the highest Shiva temple in the world, standing resilient against roaring winds and centuries of snow.<br>This trek is more than a scenic trail — it’s a gentle, soul-stirring journey where forests, lakes, meadows, mythology, and mountains come together to create an experience that stays with you long after the trek ends."
    },

    price: 10500,
    priceNote: "* Sari to Sari",
    addons: {
      transport: 2800, 
      offloadingbag: 1200,
      transportNote: "* Haridwar to Haridwar",
      offloadingNote: "* Maximum weight 9kg / bag"
    },

    inclusionsNote: "🍽️ All Meals – Nutritious meals provided from dinner on Day 1 to breakfast on Day 6",

    dates: [
      
    
      { label: "22 Nov - 27 Nov", start: "2025-11-22", end: "2025-11-27" },
      { label: "23 Nov - 28 Nov", start: "2025-11-23", end: "2025-11-28" },
      { label: "24 Nov - 29 Nov", start: "2025-11-24", end: "2025-11-29" },
      { label: "29 Nov - 04 Dec", start: "2025-11-29", end: "2025-12-04" },
      { label: "30 Nov - 05 Dec", start: "2025-11-30", end: "2025-12-05" },
      { label: "01 Dec - 06 Dec", start: "2025-12-01", end: "2025-12-06" },
      { label: "06 Dec - 11 Dec", start: "2025-12-06", end: "2025-12-11" },
      { label: "07 Dec - 12 Dec", start: "2025-12-07", end: "2025-12-12" },
      { label: "08 Dec - 13 Dec", start: "2025-12-08", end: "2025-12-13" },
      { label: "13 Dec - 18 Dec", start: "2025-12-13", end: "2025-12-18" },
      { label: "14 Dec - 19 Dec", start: "2025-12-14", end: "2025-12-19" },
      { label: "15 Dec - 20 Dec", start: "2025-12-15", end: "2025-12-20" },
      { label: "20 Dec - 25 Dec", start: "2025-12-20", end: "2025-12-25" },
      { label: "21 Dec - 26 Dec", start: "2025-12-21", end: "2025-12-26" },
      { label: "22 Dec - 27 Dec", start: "2025-12-22", end: "2025-12-27" },
      { label: "27 Dec - 01 Jan", start: "2025-12-27", end: "2026-01-01" },
      { label: "28 Dec - 02 Jan", start: "2025-12-28", end: "2026-01-02" },
      { label: "29 Dec - 03 Jan", start: "2025-12-29", end: "2026-01-03" },
      { label: "03 Jan - 08 Jan", start: "2026-01-03", end: "2026-01-08" },
    { label: "04 Jan - 09 Jan", start: "2026-01-04", end: "2026-01-09" },
    { label: "05 Jan - 10 Jan", start: "2026-01-05", end: "2026-01-10" },
    { label: "10 Jan - 15 Jan", start: "2026-01-10", end: "2026-01-15" },
    { label: "11 Jan - 16 Jan", start: "2026-01-11", end: "2026-01-16" },
    { label: "12 Jan - 17 Jan", start: "2026-01-12", end: "2026-01-17" },
    { label: "17 Jan - 22 Jan", start: "2026-01-17", end: "2026-01-22" },
    { label: "18 Jan - 23 Jan", start: "2026-01-18", end: "2026-01-23" },
    { label: "19 Jan - 24 Jan", start: "2026-01-19", end: "2026-01-24" },
    { label: "24 Jan - 29 Jan", start: "2026-01-24", end: "2026-01-29" },
    { label: "25 Jan - 30 Jan", start: "2026-01-25", end: "2026-01-30" },
    { label: "26 Jan - 31 Jan", start: "2026-01-26", end: "2026-01-31" },
    { label: "31 Jan - 05 Feb", start: "2026-01-31", end: "2026-02-05" },
    { label: "01 Feb - 06 Feb", start: "2026-02-01", end: "2026-02-06" },
    { label: "02 Feb - 07 Feb", start: "2026-02-02", end: "2026-02-07" },
    { label: "07 Feb - 12 Feb", start: "2026-02-07", end: "2026-02-12" },
    { label: "08 Feb - 13 Feb", start: "2026-02-08", end: "2026-02-13" },
    { label: "09 Feb - 14 Feb", start: "2026-02-09", end: "2026-02-14" },
    { label: "14 Feb - 19 Feb", start: "2026-02-14", end: "2026-02-19" },
    { label: "15 Feb - 20 Feb", start: "2026-02-15", end: "2026-02-20" },
    { label: "16 Feb - 21 Feb", start: "2026-02-16", end: "2026-02-21" },
    { label: "21 Feb - 26 Feb", start: "2026-02-21", end: "2026-02-26" },
    { label: "22 Feb - 27 Feb", start: "2026-02-22", end: "2026-02-27" },
    { label: "23 Feb - 28 Feb", start: "2026-02-23", end: "2026-02-28" },
    { label: "28 Feb - 05 Mar", start: "2026-02-28", end: "2026-03-05" },
    { label: "01 Mar - 06 Mar", start: "2026-03-01", end: "2026-03-06" },
    { label: "02 Mar - 07 Mar", start: "2026-03-02", end: "2026-03-07" },
    { label: "07 Mar - 12 Mar", start: "2026-03-07", end: "2026-03-12" },
    { label: "08 Mar - 13 Mar", start: "2026-03-08", end: "2026-03-13" },
    { label: "09 Mar - 14 Mar", start: "2026-03-09", end: "2026-03-14" },
    { label: "14 Mar - 19 Mar", start: "2026-03-14", end: "2026-03-19" },
    { label: "15 Mar - 20 Mar", start: "2026-03-15", end: "2026-03-20" },
    { label: "16 Mar - 21 Mar", start: "2026-03-16", end: "2026-03-21" },
    { label: "21 Mar - 26 Mar", start: "2026-03-21", end: "2026-03-26" },
    { label: "22 Mar - 27 Mar", start: "2026-03-22", end: "2026-03-27" },
    { label: "23 Mar - 28 Mar", start: "2026-03-23", end: "2026-03-28" },
    { label: "28 Mar - 02 Apr", start: "2026-03-28", end: "2026-04-02" },
    { label: "29 Mar - 03 Apr", start: "2026-03-29", end: "2026-04-03" },
    { label: "30 Mar - 04 Apr", start: "2026-03-30", end: "2026-04-04" },
    { label: "04 Apr - 09 Apr", start: "2026-04-04", end: "2026-04-09" },
    { label: "05 Apr - 10 Apr", start: "2026-04-05", end: "2026-04-10" },
    { label: "06 Apr - 11 Apr", start: "2026-04-06", end: "2026-04-11" },
    { label: "11 Apr - 16 Apr", start: "2026-04-11", end: "2026-04-16" },
    { label: "12 Apr - 17 Apr", start: "2026-04-12", end: "2026-04-17" },
    { label: "13 Apr - 18 Apr", start: "2026-04-13", end: "2026-04-18" },
    { label: "18 Apr - 23 Apr", start: "2026-04-18", end: "2026-04-23" },
    { label: "19 Apr - 24 Apr", start: "2026-04-19", end: "2026-04-24" },
    { label: "20 Apr - 25 Apr", start: "2026-04-20", end: "2026-04-25" },
    { label: "25 Apr - 30 Apr", start: "2026-04-25", end: "2026-04-30" },
    { label: "26 Apr - 01 May", start: "2026-04-26", end: "2026-05-01" },
    { label: "27 Apr - 02 May", start: "2026-04-27", end: "2026-05-02" }, 
    ],

    highlights: [
      "Trek starts from Sari Village, a scenic hamlet nestled in the Garhwal Himalayas",
      "Visit the tranquil Deoriatal Lake, reflecting snow-capped peaks",
      "Walk through lush green forests of rhododendron, maple, and oak in the Chopta region",
      "Camp in the serene Shyalmi Bugyal (meadow) under starlit skies",
      "Stay in Swiss tents at the picturesque Baniyakund",
      "Catch sunrise from Chandrashila, one of the most breathtaking views in Uttarakhand",
      "A perfect blend of spirituality, adventure, and nature — this trek is ideal for both beginners and seasoned trekkers looking for a rewarding Himalayan experience."
    ],

   itinerary: [
  {
    day: 1,
    title: "Arrival in Sari Village (6,600 ft)",
    details: "<strong>• Drive: From Rishikesh → Sari Village (195 km / 7–8 hrs).</strong><br>• Your journey begins from Rishikesh — the last bustling foothill town before the Himalayas rise ahead. The drive snakes along the turquoise Alaknanda and Mandakini rivers, crossing Devprayag where these two sacred waters merge to form the Ganga. Every turn introduces you to deeper mountain silence, mist curling around pine forests, and distant peaks glimmering above terraced valleys.<br>As you reach Sari by late afternoon, the air feels cooler and sharper. Tiny homestays line the narrow road, prayer flags flutter in the wind, and the first view of the mountains fills you with quiet excitement. Evenings here are simple — a cup of tea with the villagers, the smell of wood-smoke, and the sound of crickets echoing through the valley. This is where your trek officially begins. Overnight stay in Sari Village Guest House / Homestay"
  },
  {
    day: 2,
    title: "Sari to Deoriatal (7,810 ft)",
    details: "<strong>• Trek Distance: 4.1 km | Duration: 2.5–3 hrs.</strong><br>• The day begins in the quiet mountain village of Sari, where trails wind past terraced fields and stone houses. After breakfast, you set out on a gradual uphill path that gently curves through oak, rhododendron, and maple forests alive with mountain birds.<br> About an hour into the trek, the trees thin out to reveal wide views of the valley below. Far ahead, the twin landmarks of Tungnath Temple and Chandrashila summit appear faintly across the ridgeline — a hint of what lies further on this journey.<br> The trail soon passes through Ropini Bugyal, a beautiful open meadow where you can rest and take in the first grand view of Mt. Chaukhambha glowing in the distance. From here, the final stretch meanders through a shaded forest and then suddenly opens up to the shimmering emerald waters of Deoriatal.<br> The reflection of the snow-clad Chaukhambha massif on the lake is a sight that stops every trekker in awe. Legends say the lake was once a celestial bathing spot for the gods — and as you stand there in silence, it’s easy to believe it.<br> Since camping by the lake is restricted, you trek another short stretch uphill (about 400 m) to the forest campsite. Don’t miss the sunset over the lake — when the mountains turn golden and their reflections dance on the still water, it feels like the Himalayas are quietly breathing with you."
  },
  {
    day: 3,
    title: "Deoriatal to Syalmi via Rohini Bugyal (7,600 ft)",
    details: "<strong>• Trek Distance: 9.1 km | Duration: 6–7 hrs.</strong><br>• The morning begins with mist swirling above the lake as you leave Deoriatal behind and head southeast toward Jhandi Top. The trail winds through a dreamy forest of rhododendron, oak, and maple trees — the kind that glows pink and red during spring. Every now and then, the mighty peaks of Chaukhambha and Kedar Dome peek through the branches to your left, reminding you that you’re walking deep inside the Kedarnath Wildlife Sanctuary.<br> After about an hour of gentle ascent, you reach the open ridge of **Jhandi Top**, a flag-posted viewpoint offering a 360° panorama — from the terraced fields of Sari far below to the snow towers of Kedarnath and Chaukhambha ahead. The descent from here is sharp but pleasant, winding back into thick forest where sunlight flickers through the leaves and birds fill the silence. You may spot Himalayan woodpeckers, verditer flycatchers, and even small forest shrines marked with yellow flags.<br> The trail then climbs gradually again towards **Rohini Bugyal**, passing through ancient oak and maple groves. Soon, the forest opens into a serene clearing with grand views of Kala Parvat and the distant Chandrashila peak. This small meadow, surrounded by glowing rhododendrons, is the perfect spot for lunch and photographs.<br> From Rohini Bugyal, a short forest ascent brings you to the day’s highest point. Afterward, the path drops steeply through dense forest to reach **Syalmi**, your campsite for the night — a quiet, hidden meadow alive with the sounds of nature. This area is known for its rich wildlife, so keep your eyes open for foxes, Himalayan griffons, or the occasional barking deer.<br> As dusk settles, the forest turns golden and silent. Sitting around the campsite, surrounded by thick oak woods and distant mountain silhouettes, you realize you’re deep in the heart of the Himalayas — far from roads, phones, and the rush of the world."
  },
  {
    day: 4,
    title: "Syalmi to Baniya Kund (8,520 ft)",
    details: "<strong>• Trek Distance: 6 km | Duration: 6 hrs.</strong><br>• The day starts from the serene **Syalmi campsite** with a gentle southeast descent towards the **Akashkamini River**, a clear mountain stream originating from Chandrashila. Pause to refill your water bottles and enjoy the soothing sound of the gurgling water as you cross a small wooden bridge.<br> Past the rivulet the trail ascends gradually through dense mixed forest. Immerse yourself in the jungle symphony which is rarely experienced on any other Himalayan trek.<br> After a few gradual ascents and descents, passing a few rivulets, walk past a fenced government forest office land, reach Baniyakund. A few hotels and a lot of swiss tents mark your way towards your own accomodation. Tonight, you stay in comfortable **Swiss-style tents** at Baniya Kund, surrounded by towering pines and the crisp Himalayan air. As dusk falls, the surrounding mountains glow in soft golden hues, creating a perfect alpine evening under the stars."
  },
  {
    day: 5,
    title: "Baniya Kund to Chandrashila Peak (12,083 ft) via Tungnath and return to Sari",
    details: "<strong>• Trek Distance: 10 km | Duration: 5–6 hrs trek + 40 min drive.</strong><br>• Begin your day early from **Baniya Kund campsite** and drive 5 km towards Chopta, the base for the sacred **Tungnath Temple**. From Chopta, follow the well-marked cemented pilgrim trail ascending sharply through scissor bends. After approximately 4 km of climb, you reach Tungnath temple, the highest Shiva temple in the world, located at 12,083 ft. Along the way, keep an eye out for Himalayan Monals and other mountain birds nesting among the Birch trees.<br> From Tungnath, the trail continues behind the temple complex towards **Chandrashila Peak**. The path winds steeply with several switchbacks, covering a 600 ft ascent over 1.5 km. During winter months, expect snow-covered trails and ensure proper gear such as crampons or microspikes.<br> Reaching the summit, you are rewarded with a breathtaking **360° panoramic view** of the Garhwal and Kumaon ranges — Nanda Devi, Trishul, Chaukhamba, Kedar Dome, Kamet, Dunagiri, and Gangotri ranges unfold in every direction. The sunrise here is spectacular and considered one of the best in the Himalayas.<br> After soaking in the views, descend via the same route back to Tungnath and then drive back to Baniya Kund. From Baniya Kund, after lunch, a 40-minute drive brings you back to Sari, completing your trek. Today’s journey combines high-altitude pilgrimage, steep climbs, and some of the most iconic vistas of the Garhwal Himalayas, leaving you with memories that last a lifetime."
  },
  {
    day: 6,
    title: "Sari to Rishikesh (Drive)",
    details: "<strong>• Drive Distance: ~195 km | Duration: 7–8 hrs.</strong><br>• Your final morning in the Himalayas begins slowly — perhaps a last look at the Chandrashilla peak glowing in the early light. After breakfast, you start the return drive following the same river valleys that now feel familiar. The mountains gradually give way to foothills, and the sounds of horns replace the wind and birds. Yet, something inside you has shifted — a calmness that the mountains leave behind. The trek ends, but the memory of Chandrashila’s sunrise stays forever."
  }
],

    howToReach: {
      air: "Nearest airport: Jolly Grant airport, Dehradun ",
      train: "Nearest railway station: Haridwar/Rishikesh",
      road: "<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp📍 Distance from Haridwar/Rishikesh: ~210 km<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp🕒 Travel Time: 7–8 hours<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp🌍 Route: Haridwar/Dehradun → Rishikesh → Devprayg → Srinagar → Rudraprayag → Agastyamuni → Ukhimath → Sari Village",
      travelTip: "Transport Options:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp<b>1. Private Cab / Taxi</b> (Recommended for Groups)<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbspDuration: 7–8 hours<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbspCost: ₹5,000–₹7,000 (for a one-way cab for 4–6 people)<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbspWhere to book: Local taxi stands in Haridwar or Rishikesh<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp<b>2. Public Transport</b><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbspReach Ukhimath: Bus/shared jeep from Haridwar to Ukhimath (6–7 hrs) <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbspOR <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbspBus/shared jeep to Rudraprayag (5-6hrs) and then a shared jeep from Rudraprayag to Ukhimath (1-2hrs)<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbspReach Sari: Shared jeep or taxi from Ukhimath to Sari (~30 mins)"
    },

    didYouKnow: [
    " <b>Deoriatal is steeped in Mahabharata lore!</b>  <br>This mystical lake is believed to be the site where the Pandavas encountered Yaksha, who tested their wisdom with riddles before granting them life.",
  
    " <b>Chandrashila means ‘Moon Rock’.</b>  <br>Legend says Lord Rama meditated here after slaying Ravana, while another tale claims it’s where the Moon God performed penance. Mythology breathes life into its rocky summit.",
  
    " <b>Five towering Himalayan peaks in one frame!</b>  <br>From Chandrashila you can see Nanda Devi, Trishul, Chaukhamba, Kedarnath Dome, and Bandarpunch — a rare 270° panorama that few treks in India can match.",
  
    " <b>Tungnath is the world’s highest Shiva temple.</b>  <br>At 3,680 m, Tungnath is part of the Panch Kedar shrines, older than Kedarnath itself, and is believed to have been built by the Pandavas.",
  
    " <b>A haven for birdwatchers.</b>  <br>The trek lies inside the Kedarnath Wildlife Sanctuary. Expect sightings of the Himalayan Monal (Uttarakhand’s state bird), crimson sunbirds, Himalayan barbets, and lammergeiers.",
  
    " <b>A rare 4-season trek.</b>  <br>While most Himalayan trails shut in winter, this trek remains open year-round — rhododendron blooms in spring, lush greenery in monsoon, crisp skies in autumn, and snow-draped magic in winter."
  ],


    gallery: [
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755517860/chandrashila-view2_dlfccr.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755517859/chandrashila-hero1_vvwwz0.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755517856/chandrashila-view4_tsytar.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755517855/chandrashila-view3_idrehy.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755517854/chandrashila-view1_emw1ad.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755517852/chandrashila-hero_r8w4xm.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755517847/chandrashila-hero2_zmhy2k.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755517841/chandrashila-view5_e0xdz7.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755517840/chandrashila-view6_le2ugy.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1762329886/chandrasila-trek-spring-view2_bg7mi8.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1762329745/chandrashila-summit-view2_gr4dyd.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1762329747/chandrashila-summit-view_ur9bev.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1762329747/chandrasila-trek-spring-view_hcem1p.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1762329743/chandrasila-trek-spring-view1_w4djrk.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1762329740/chandrashila-summit-view1_qg5i13.jpg",
    ],

    downloadLink: "/docs/Himalayan_Trek_Packing_List.pdf",

    faqs: {
  questions: [
    {
      question: "Who can participate in the Deoriatal-Chandrashila trek?",
      answer: "The Deoriatal-Chandrashilla trek is meant for everyone — whether you're stepping into the Himalayas for the first time or are a seasoned trekker seeking a refreshing experience. With moderate slopes, easy accessibility, and a comfortable altitude profile, it’s ideal for first-timers while remaining equally rewarding for experienced trekkers who enjoy panoramic trails and classic Himalayan landscapes."
    },
    {
      question: "What should I pack for the Deoriatal-Chandrashila trek?",
      answer: "Essential items include sturdy trekking shoes, layered clothing, a 40–50L rucksack with rain cover, thermal wear, a water bottle, trekking poles, and a headlamp. For a detailed packing list, refer to the downloadable PDF above."
    },
    {
      question: "What are the temperature levels during different seasons on the Deoriatal-Chandrashila trek?",
      answer: "In spring (April–June), daytime temperatures range between 10°C to 18°C, with chilly nights dropping to around 0°C. During autumn (September–November), expect pleasant days between 8°C to 15°C and cold nights around -2°C to 3°C. Winter (December–March) brings snow and sub-zero conditions — daytime temperatures hover around 0°C to 5°C, while nights can fall as low as -8°C to -10°C, offering a true Himalayan winter experience.",
    },
    {
      question: "Is offloading available during the trek?",
      answer: "Yes, offloading services are available at an additional cost. Please check with the trek organizer for current rates and availability."
    },
    {
      question: "Will there be mobile network coverage during the trek?",
      answer: "Mobile network coverage of Airtel and JIo is available throughout the trek. You may get intermittent signals while inside the forest, still overall connectivity is unreliable. It's recommended to inform friends and family beforehand."
    },
    {
      question: "What permits are required for the trek?",
      answer: "The trek requires forest permits for the entry of Deoriatal region and also for the entry of Tungnath trail from Chopta when temple is closed. These are typically arranged by the trek organizer and included in the trek package."
    },
    {
      question: "What is the best time to undertake the Deoriatal-Chandrashila trek?",
      answer: "The trek is best undertaken from February to June (spring–early summer) when rhododendrons bloom in abundance throughout the forest turning it red and trails a carpet of flowers. Also wildflowers blanket the upper meadows. Next best season is from September to November (autumn) when the skies are crystal clear and the landscape glows golden. Winter (December to February) is equally rewarding for those seeking solitude and snow — the meadows and forests turn pristine white, offering a completely different, magical experience. Monsoon (July–August) is less recommended due to slippery trails and heavy cloud cover."
    },
    {
      question: "What makes the Deoriatal-Chandrashila trek unique?",
      answer: "This trek combines serene Deoriatal Lake with a thrilling ascent to Chandrashila Peak, offering 360° panoramic views of peaks like Chaukhamba, Trishul, and Nanda Ghunti. It's a short yet highly rewarding trek that showcases the best of Garhwal Himalayas in a single adventure."
    }
  ]
},


    faqsLink: "/faqs-and-articles",
  },



  {
    id: "gaumukh-tapovan-trek",
    name: "Gaumukh Tapovan Trek",
    tags: ["beginner"],
    difficulty: ["moderate" , "difficult"],
    season: ["summer", "autumn"],
    month: ["may", "june", "september", "october"],
    duration: ["6 Nights / 7 Days"],
    region: "uttarakhand",
    coordinates: [
    [30.9995, 78.9398], // Gangotri (start)
    [30.9756, 79.0644], // Chirbasa
    [30.9583, 79.1022], // Bhojbasa
    [30.9422, 79.0933], // Gaumukh
    [30.9489, 79.1147], // Tapovan (end)
  ],
    heroImage: "https://res.cloudinary.com/dr44hob9b/image/upload/v1755517996/gaumukh-tapovan-hero2_fsilpd.jpg",

    heroImages: [ "https://res.cloudinary.com/dr44hob9b/image/upload/v1762016477/IMG_20190918_073624_xskg9n.jpg",
                  "https://res.cloudinary.com/dr44hob9b/image/upload/v1755517996/gaumukh-tapovan-hero2_fsilpd.jpg",
                  "https://res.cloudinary.com/dr44hob9b/image/upload/v1755517994/gaumukh-tapovan-hero_wmdfa9.jpg",
                  "https://res.cloudinary.com/dr44hob9b/image/upload/v1762016476/IMG_20190927_133832_hgnmjz.jpg",
                  "https://res.cloudinary.com/dr44hob9b/image/upload/v1755517986/gaumukh-tapovan-hero1_cwlzeb.jpg",
    ],
    subtitle: "The Holy Land Of The Himalayan Giants",

    seo: {
      title: "Gaumukh Tapovan Trek | Itinerary, Cost & Dates | Planethimalayas",
      description: "Gaumukh Tapovan Trek (14,600 ft) takes you to the sacred source of the Ganga and the high-altitude meadows of Tapovan with grand views of Mt. Shivling, Bhagirathi peaks, and the Gangotri glacier."
    },

    overview: {
      facts: [
        { emoji: "⏳", label: "Trek Duration", value: "6 Nights / 7 Days" },
        { emoji: "⚡", label: "Trek Grade", value: "Moderate-Difficult" },
        { emoji: "🏔️", label: "Max Altitude", value: "14,600 ft (Meru Base Camp)" },
        { emoji: "⚡", label: "Trek Distance", value: "42 Km" },
        { emoji: "🌤️", label: "Best Time", value: "May-June & September-October" },
        { emoji: "🗺️", label: "Region", value: "Uttarkashi district, Gangotri National Park, Uttarakhand" },
        { emoji: "📍", label: "Start Point", value: "Gangotri (Uttarakhand)" },
        { emoji: "🏁", label: "End Point", value: "Gangotri (Uttarakhand)" },
        { emoji: "🧥", label: "Cloakroom facility", value: "Available" },
      ],
      snippet: 
  "The Gaumukh–Tapovan trek is where spirituality meets raw Himalayan wilderness. Starting from the sacred town of Gangotri, the trail follows the Bhagirathi river deep into the Gangotri National Park — home to blue pines, silver birches, bharals (blue sheep), and even elusive snow leopards. The journey takes you past Bhojwasa, named after the ancient birch forests that once covered the valley, and leads to Gaumukh, the revered glacier snout and birthplace of the Ganga. Beyond lies Tapovan — a windswept high-altitude meadow at 14,500 ft, framed by the mighty Shivling, Meru, and Bhagirathi peaks. Here, saints, mountaineers, and trekkers alike find themselves humbled by the scale and silence of the mountains. This trek is not just a physical adventure — it’s a pilgrimage through geology, mythology, and one of India’s grandest alpine landscapes."
    },

    price: 16900,
    priceNote: "* Gangotri to Gangotri",
    addons: {
      transport: 3000, 
      offloadingbag: 5000,
      transportNote: "* Rishikesh to Rishikesh",
      offloadingNote: "* Maximum weight 9kg / bag"
    },

    inclusionsNote: "🍽️ All Meals – Nutritious meals provided from dinner on Day 1 to dinner on Day 6",

    dates: [
      { label: "16 May - 22 May", start: "2026-05-16", end: "2026-05-22" },
      { label: "17 May - 23 May", start: "2026-05-17", end: "2026-05-23" },
      { label: "23 May - 29 May", start: "2026-05-23", end: "2026-05-29" },
      { label: "24 May - 30 May", start: "2026-05-24", end: "2026-05-30" },
      { label: "30 May - 05 Jun", start: "2026-05-30", end: "2026-06-05" },
      { label: "31 May - 06 Jun", start: "2026-05-31", end: "2026-06-06" },
      { label: "06 Jun - 12 Jun", start: "2026-06-06", end: "2026-06-12" },
      { label: "07 Jun - 13 Jun", start: "2026-06-07", end: "2026-06-13" },
      { label: "13 Jun - 19 Jun", start: "2026-06-13", end: "2026-06-19" },
      { label: "14 Jun - 20 Jun", start: "2026-06-14", end: "2026-06-20" },
      { label: "19 Sep - 25 Sep", start: "2026-09-19", end: "2026-09-25" },
      { label: "20 Sep - 26 Sep", start: "2026-09-20", end: "2026-09-26" },
      { label: "26 Sep - 02 Oct", start: "2026-09-26", end: "2026-10-02" },
      { label: "27 Sep - 03 Oct", start: "2026-09-27", end: "2026-10-03" },
      { label: "03 Oct - 09 Oct", start: "2026-10-03", end: "2026-10-09" },
      { label: "04 Oct - 10 Oct", start: "2026-10-04", end: "2026-10-10" },
    ],

    highlights: [
      "The trek starts from Gangotri - one of the sacred dhams in Uttarakhand.",
      "Venture deep into a landscape shaped by time and elemental force.",
      "Walk alongside the mighty Gangotri Glacier, and stand in awe before Gaumukh, the sacred snout of the glacier and the revered origin of the Bhagirathi River — which merges with the Alaknanda at Devprayag to become the Ganga.",
      "Experience camping at Tapovan (14000ft) surrounded by an awe-inspiring amphitheatre of iconic Himalayan giants.",
      "Sleep beneath the shadow of Mt. Shivling – the Indian Matterhorn, and wake up to the surreal view of this sacred peak glowing in the golden light of dawn"
    ],

    itinerary: [
  {
    day: 1,
    title: "Arrive in Gangotri (3,048 m / 10,000 ft)",
    details: "• Scenic 9–10 hr drive from Dehradun/Haridwar via Uttarkashi and the apple orchards of Harsil Valley.<br>• Follow the Bhagirathi river upstream past sacred confluences.<br>• Evening visit to Gangotri Temple — one of the Char Dhams of Uttarakhand.<br>• Overnight stay in guesthouse/hotel."
  },
  {
    day: 2,
    title: "Acclimatization in Gangotri",
    details: "• Explore nearby trails to Pandava Gufa or Surya Kund waterfalls.<br>• Trek briefing and gear check.<br>• Ideal day for photography and birdwatching — look out for Himalayan griffon vultures and yellow-billed choughs.<br>• Overnight in Gangotri."
  },
  {
    day: 3,
    title: "Gangotri to Bhojwasa (3,780 m) | 14 km | 6–7 hrs",
    details: "• Enter Gangotri National Park — oak, pine, and birch forests gradually give way to alpine terrain.<br>• Trail hugs the Bhagirathi river with views of Sudarshan and Bhagirathi peaks.<br>• Cross Chirbasa (literally ‘pine dwelling’) where dense forests thrive.<br>• Bhojwasa — a windswept plain named after ancient bhojpatra (birch) groves.<br>• Overnight in tents beside the last tree line."
  },
  {
    day: 4,
    title: "Bhojwasa to Gaumukh (3,900 m) – Tapovan (4,450 m) | 10 km | 6 hrs",
    details: "• Reach Gaumukh, the snout of Gangotri Glacier and the sacred source of the Ganga.<br>• Trek across glacial moraines and steep boulder slopes — rugged but rewarding.<br>• Steep climb to Tapovan, one of the highest alpine meadows in India.<br>• Set camp beneath the awe-inspiring Shivling peak, with Meru and Bhagirathi towers encircling the valley."
  },
  {
    day: 5,
    title: "Exploration at Tapovan",
    details: "• Optional hike towards Meru Base Camp or Kirti Bamak glacier.<br>• Experience sunrise and sunset over Shivling — glowing like a golden spire, often called the Indian Matterhorn.<br>• Spot herds of bharal grazing the slopes, and in rare moments, footprints of snow leopards.<br>• Meditation walks or photography in the silence of the high Himalayas."
  },
  {
    day: 6,
    title: "Tapovan to Gangotri | 20 km | 8–10 hrs",
    details: "• Descend along the glacier and moraine trails to Gaumukh.<br>• Retrace steps via Bhojwasa and Chirbasa to Gangotri.<br>• Overnight stay in guesthouse/hotel."
  },
  {
    day: 7,
    title: "Gangotri to Dehradun/Haridwar",
    details: "• Return drive along the Bhagirathi valley.<br>• Trek concludes with spiritual and natural impressions that last a lifetime."
  }
],


    howToReach: {
      air: "**Fly to Jolly Grant Airport (Dehradun – DED)**<br>* Located about 225–260 km from Gangotri<br>* Daily flights connect Dehradun with major Indian cities like Delhi, Mumbai, Bangalore, Kolkata, and Chennai",
      train: "**Rishikesh Railway Station (RKSH): ~230–264 km away**<br>* Haridwar Station: slightly farther at ~290 km**<br>* Dehradun station is also around 240 km away, but Rishikesh is preferred as most trains stop there.",
      road: "From Rishikesh/Haridwar/Dehdradun to Gangotri",
      travelTip: "Route via taxi or public bus through Rishikesh → Uttarkashi → Harsil → Gangotri. Total road journey: 8–12 hours, depending on stops and traffic."
    },

    didYouKnow: [
  " <b>Gaumukh literally means ‘Cow’s Mouth.’</b>  <br>The glacier snout once resembled the mouth of a cow — a sacred symbol in Hinduism. Pilgrims believe bathing here absolves sins and grants moksha.",

  " <b>Tapovan is one of India’s highest alpine meadows.</b>  <br>At ~4,450 m (14,600 ft), it is not just grassland but also a meditation ground for sages and a base camp for expeditions to Shivling and Meru.",

  " <b>Shivling is called the ‘Matterhorn of India.’</b>  <br>Its sheer pyramid shape dominates the valley and has attracted world-class climbers. Locals believe it is the earthly throne of Lord Shiva.",

  " <b>The Gangotri Glacier is massive — nearly 30 km long!</b>  <br>It is one of the largest glaciers in the Indian Himalayas and a primary source of the Ganga, with tributaries like Raktavarn and Kirti Bamak joining it.",

  " <b>Bhojwasa was once covered in birch forests.</b>  <br>The bhojpatra tree (Himalayan birch) had bark so fine that ancient scriptures, including the Vedas, were written on it.",

  " <b>Rich in Himalayan wildlife.</b>  <br>Gangotri National Park shelters snow leopards, bears, musk deer, Himalayan tahr, and over 150 bird species — from golden eagles to Himalayan monals.",

  " <b>Legend of King Bhagirath.</b>  <br>The Bhagirathi peaks are named after him — it was his penance that brought the Ganga down from heaven to earth to purify the ashes of his ancestors."
],


    gallery: [
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755517998/gaumukh-tapovan-view11_x5r5s8.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755517997/gaumukh-tapovan-view10_my2yrv.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755517996/gaumukh-tapovan-hero2_fsilpd.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755517994/gaumukh-tapovan-hero_wmdfa9.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755517991/gaumukh-tapovan-view4_m23qqv.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755517990/gaumukh-tapovan-view6_stwv7o.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755517990/gaumukh-tapovan-view12_c7xfjp.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755517990/gaumukh-tapovan-view3_uswkoe.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755517986/gaumukh-tapovan-hero1_cwlzeb.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755517984/gaumukh-tapovan-view5_vu9aas.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755517981/gaumukh-tapovan-view7_x5zhix.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755517977/gaumukh-tapovan-view1_xxgsnt.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755517976/gaumukh-tapovan-view9_fi24z4.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755517971/gaumukh-tapovan-view2_lpmnew.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755517959/gaumukh-tapovan-view8_lebb2f.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1762016477/IMG_20190918_073624_xskg9n.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1762016476/IMG_20190927_133832_hgnmjz.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1762016469/IMG_20190919_111827_rpjy8z.jpg",
    
    ],

    downloadLink: "/docs/Himalayan_Trek_Packing_List.pdf",

    faqs: {
  questions: [
    {
      question: "Who can participate in the Gaumukh-Tapovan trek?",
      answer: "This trek is recommended for intermediate to experienced trekkers with good fitness. The trail includes steep ascents, high-altitude camping, and glacier-side trekking, making it suitable for those prepared for physically demanding Himalayan trails."
    },
    {
      question: "What should I pack for the Gaumukh-Tapovan trek?",
      answer: "Essential items include high-altitude trekking shoes, layered clothing, a 50L rucksack with rain cover, thermal wear, trekking poles, insulated water bottles, and a headlamp. For a detailed packing list, refer to the downloadable PDF above."
    },
    {
      question: "Is offloading available during the trek?",
      answer: "Yes, offloading services are available at an additional cost. Check with the trek organizer for rates and availability."
    },
    {
      question: "Will there be mobile network coverage during the trek?",
      answer: "Mobile network coverage is extremely limited along this trail. Occasional signals may be available near Gangotri or at select high-altitude clearings. Trekkers should plan for minimal communication and inform family beforehand."
    },
    {
      question: "What permits are required for the trek?",
      answer: "Trek permits for the Gangotri National Park and forest area are mandatory. These are typically arranged by the trek organizer and included in the trek package."
    },
    {
      question: "What is the best time to undertake the Gaumukh-Tapovan trek?",
      answer: "The best time is from May to June and September to October. Summer months offer melting snow and flowing streams, while autumn provides clear skies and panoramic Himalayan vistas."
    },
    {
      question: "What makes the Gaumukh-Tapovan trek unique?",
      answer: "This trek leads to the sacred Gaumukh glacier — the origin of the Ganga — and the high-altitude Tapovan meadows. Trekkers experience breathtaking views of peaks like Shivling, Bhagirathi, and Meru, alongside serene glaciers and alpine landscapes, making it a spiritually and visually rewarding Himalayan adventure."
    }
  ]
},


    faqsLink: "/faqs-and-articles",
  },



  {
    id: "goechala-trek",
    name: "Goechala Trek",
    tags: ["pass"],
    difficulty: ["difficult"],
    season: ["spring", "summer", "autumn","winter"],
    month: ["march", "april", "may", "september", "october", "november"],
    duration: ["9 Nights / 10 Days"],
    region: "sikkim",
    coordinates: [
  [27.3745, 88.2350], // Yuksom (start)
  [27.5679, 88.2817], // Tshoka
  [27.5997, 88.2942], // Dzongri
  [27.6353, 88.2875], // Thansing
  [27.6431, 88.2877], // Lamuney
  [27.6493, 88.2861], // Samiti Lake
  [27.6673, 88.2820], // Goecha La Viewpoint (end)
],

  heroImage: "https://res.cloudinary.com/dr44hob9b/image/upload/v1755534957/goechala-hero1_gv5uoh.jpg",

  heroImages: ["https://res.cloudinary.com/dr44hob9b/image/upload/v1755534957/goechala-hero1_gv5uoh.jpg",
                "https://res.cloudinary.com/dr44hob9b/image/upload/v1755534979/goechala-view16_whcd24.jpg",
                "https://res.cloudinary.com/dr44hob9b/image/upload/v1755534971/goechala-view13_dni0oj.jpg",
                "https://res.cloudinary.com/dr44hob9b/image/upload/v1755534967/goechala-view11_cwp15u.jpg",
                "https://res.cloudinary.com/dr44hob9b/image/upload/v1755534974/goechala-hero_h266sf.jpg"
  ],

  subtitle: "A Himalayan Symphony Of Nature & Majesty",

  seo: {
    title: "Goechala Trek | Itinerary, Cost & Dates | Planethimalayas",
    description: "Goechala Trek (15,100 ft) in Sikkim is the closest you can get to Mt. Kanchenjunga, the world’s third-highest peak. A 10-day trek through rhododendron forests, alpine lakes, and dramatic high-altitude landscapes."
},

    overview: {
      facts: [
        { emoji: "⏳", label: "Trek Duration", value: "9 Nights / 10 Days" },
        { emoji: "⚡", label: "Trek Grade", value: "Difficult" },
        { emoji: "🏔️", label: "Max Altitude", value: "15,200 ft (Goechala Viewpoint-1)" },
        { emoji: "⚡", label: "Trek Distance", value: "≈85 Km" },
        { emoji: "🌤️", label: "Best Time", value: "March-June & September-November" },
        { emoji: "🗺️", label: "Region", value: "Khangchendzonga National Park, Sikkim" },
        { emoji: "📍", label: "Start Point", value: "Yuksom (West Sikkim)" },
        { emoji: "🏁", label: "End Point", value: "Yuksom (West Sikkim)" },
        { emoji: "🧥", label: "Cloakroom facility", value: "Available" },
      ],

    snippet: `The Goecha La Trek is one of the grandest journeys in the Indian Himalayas — a trail that pulls you deeper and deeper into the mystical heart of the Eastern Himalayas, right into the untouched wilderness of the Khangchendzonga National Park, a UNESCO World Heritage site. Beginning in Yuksom, Sikkim’s first capital and a village wrapped in centuries of history, the trek eases you into an ancient world: stone paths draped in moss, whispering rhododendron forests, wooden bridges over roaring glacial streams, and mist drifting silently through towering oak and maple.

<br>As the climb progresses, the forest gives way to sweeping high-altitude meadows and dramatic valleys carved by old glaciers. Dawn light paints Dzongri’s ridgelines in gold, and the panorama from Dzongri Top feels almost unreal — Kanchenjunga glowing in the distance, flanked by the mighty Pandim, Kabru, Rathong, and countless lesser-known but equally striking peaks. Higher up, the trail leads to the jewel of the route: the shimmering Samiti Lake. Its turquoise waters lie perfectly still at sunrise, mirroring the mountains with a purity few places on earth can match.

<br>From here, the terrain turns stark and rugged, guiding trekkers toward the wind-blasted heights of Goecha La. This is where the Himalayas reveal their full majesty — a legendary vantage point that offers an astonishing roster of Himalayan giants, including close, unobstructed views of Kanchenjunga’s massive south face. With nearly 14 prominent peaks visible from the region, this trek brings you closer to the world’s third-highest mountain than any other trail in India.

<br>But Goecha La’s magic is not just in the scale of its mountains. It is in its atmosphere — the silence of its altitude deserts, the flutter of prayer flags beside shepherd huts, the sweet smell of juniper smoke, the spiritual hum of monasteries, and the deep sense of solitude that settles in the mountains after sunset. This is a trek that blends wilderness with culture, adventure with introspection.

<br>Standing at 4,940 m, Goecha La is a challenging and demanding route meant for trekkers prepared for long climbs, cold nights, and dramatic altitude gains. Autumn brings clear skies and crisp views stretching for miles, while spring transforms the entire lower trail into a corridor of blooming rhododendrons — reds, pinks, and purples splashed across the forest like a living painting.

<br>For many, Goecha La is not just a trek — it is a pilgrimage to the throne of Kanchenjunga. A journey of scale, silence, perseverance, and pure Himalayan drama that stays etched in memory long after the trail ends.`    },

    price: 20900,
    priceNote: "* Yuksom to Yuksom",
    addons: {
      transport: 3000, 
      offloadingbag: 6300,
      transportNote: "* Siliguri / Bagdogra to Siliguri / Bagdogra",
      offloadingNote: "* Maximum weight 9kg / bag"
    },

    inclusionsNote: "🍽️ All Meals – Nutritious meals provided from dinner on Day 1 to dinner on Day 9",

    dates: [
      
      { label: "22 Nov - 01 Dec", start: "2025-11-22", end: "2025-12-01" },
      { label: "29 Nov - 08 Dec", start: "2025-11-29", end: "2025-12-08" },
      { label: "06 Dec - 15 Dec", start: "2025-12-06", end: "2025-12-15" },
      { label: "13 Dec - 22 Dec", start: "2025-12-13", end: "2025-12-22" },
      { label: "14 Mar - 23 Mar", start: "2026-03-14", end: "2026-03-23" },
      { label: "21 Mar - 30 Mar", start: "2026-03-21", end: "2026-03-30" },
      { label: "28 Mar - 06 Apr", start: "2026-03-28", end: "2026-04-06" },
      { label: "04 Apr - 13 Apr", start: "2026-04-04", end: "2026-04-13" },
      { label: "11 Apr - 20 Apr", start: "2026-04-04", end: "2026-04-20" },
      { label: "18 Apr - 27 Apr", start: "2026-04-18", end: "2026-04-27" },
      { label: "25 Apr - 04 May", start: "2026-04-25", end: "2026-05-04" },
      { label: "02 May - 11 May", start: "2026-05-02", end: "2026-05-11" },
      { label: "09 May - 18 May", start: "2026-05-09", end: "2026-05-18" },
    ],

    highlights: [
      "Located in the heart of Khangchendzonga National Park, a UNESCO World Heritage Site",
      "Grand views of Mount Kanchendzonga (8,586m), the world’s 3rd highest peak",
      "Experience lush rhododendron forests, hanging bridges, and sparkling waterfalls",
      "Camp at picturesque alpine meadows like Dzongri and Thansing",
      "Rich bird and wildlife diversity, including the snow leopard and red panda"
    ],

   itinerary: [
  {
    day: 1,
    title: "NJP-Siliguri / Bagdogra to Yuksom (1,780 m / 5,840 ft)",
    details: "<strong>• ~150 km | 6–7 hr drive.</strong><br>• The journey to Yuksom takes you through a scenic 6–7 hour drive from NJP or Bagdogra, winding past emerald tea gardens, misty river valleys, and the rolling foothills of Sikkim. As you ascend into the Himalayas, the air turns cooler and crisper, and the rhythm of life slows down. Yuksom, once the first capital of Sikkim (established in 1642), still carries the charm of an ancient Himalayan settlement — fluttering prayer flags, old monasteries, and quiet lanes lined with traditional homes. After checking into a cozy guesthouse, spend the evening sorting out documents for trek permits, checking your gear. If you reach Yuksom early, take a short acclimatization walk to Kathok Lake or the Norbugang Coronation Throne, both steeped in Sikkim’s royal and spiritual history. As dusk settles over the valley, meet your trek crew over a warm dinner, discuss the trail ahead, and get a good night’s rest — tomorrow, your Himalayan adventure truly begins."
  },
  {
    day: 2,
    title: "Yuksom to Sachen (2,180 m / 7,150 ft)",
    details: "<strong>• Trek: ~8 km | 5–6 hrs.</strong><br>• Your Goechala adventure begins today with the first trek from Yuksom to Sachen — a beautiful introduction to the forests and rivers of Sikkim’s Kanchenjunga National Park. After a filling breakfast in Yuksom, the trail takes you past a few traditional wooden homes and cultivated fields before gently leading you into the wilderness. Mobile networks fade, human settlements disappear, and the soothing sounds of nature begin to take over.<br>You’ll soon pass through the grand gate that marks the entrance to Kanchenjunga National Park, a UNESCO World Heritage site known for its pristine biodiversity. The path meanders through lush forest dominated by broadleaf, golden oak, and silver oak, with a stunning display of ferns, orchids, and Himalayan wildflowers lining the trail. Three picturesque bridges span the Prek Chhu River, each offering peaceful stops where you can feel the cool mountain breeze and hear the rhythmic sound of flowing water.<br>The gradient remains moderate until after the second bridge, from where a steep ascent begins towards Sachen. As you climb higher, the air grows cooler and denser with forest aroma.<br>By late afternoon, you’ll reach the Sachen campsite, tucked inside a quiet clearing deep within the forest. The campsite sits above the Prek Chhu Valley, and at night, the distant sound of the river adds to the tranquility. It’s a simple yet soulful place to rest after your first day on the trail — perfect for reflecting on the journey ahead and recharging for tomorrow’s climb to Tshoka. Keep an eye out for leeches — carrying a bit of salt or anti-leech spray is wise."
  },
  {
    day: 3,
    title: "Sachen to Tshoka (2,960 m / 9,700 ft) via Bakhim",
    details: "<strong>• Trek: ~7 km | 4–5 hrs.</strong><br>• The second day of your Goechala Trek takes you from the deep forested camp of Sachen to the vibrant Tibetan settlement of Tshoka, with a refreshing halt at Bakhim along the way. As dawn breaks, the forest awakens to a soft chorus of Himalayan birds — thrushes, flycatchers, and the occasional laughing thrush echoing through the valley. The air feels cool and clean, and the early sunlight streams through oak leaves, painting golden streaks across the trail.<br>After breakfast, you begin a beautiful forest walk that winds gently up and down, following the sound of the Prek Chu River below. The first landmark is the Prek Chu Bridge, a sturdy wooden crossing that sways lightly above a rushing mountain stream — a wonderful photo stop. From here, the trail starts to climb steadily through lush oak, maple, and rhododendron forests, where the melody of birds and rustling leaves set the perfect trekking rhythm. Keep your eyes peeled for the Yellow-billed Blue Magpie, a striking bird that often flits among the canopy.<br>Soon, a steep zigzag ascent brings you to Bakhim (8,600 ft) — a small rest point with mesmerizing views of the Yuksom Valley far below. Trekkers often stop here for tea and snacks while refilling water bottles before the next stretch. From Bakhim, the path turns steeper but far more rewarding as you climb through groves of magnolia trees. In spring, these trees burst into pink and white blooms, transforming the forest into a dreamlike scene straight out of a painting.<br>A little later, you’ll reach Tshoka, a picturesque hamlet perched on an open shelf with prayer-flagged huts and a small monastery overlooking snow-covered giants like Mt. Pandim and Tenzing Khang. The campsite here is stunning — with wooden huts, a serene lake nearby, and a sweeping view of the Eastern Himalayas. Evening is the best time to explore the Tshoka Monastery or simply sit by the lakeside, watching the clouds drift past the peaks.<br>As night falls, the air turns crisp and silent except for the flutter of prayer flags in the wind. Rest well — tomorrow, the trail takes you even deeper into rhododendron country, towards Dzongri."
  },
  {
    day: 4,
    title: "Tshoka to Dzongri (3,960 m / 13,000 ft) via Phedang",
    details: "<strong>• Trek: ~8 km | 6–8 hrs.</strong><br>• The fourth day of the Goechala Trek marks one of the most breathtaking — and demanding — sections of the journey, as you climb from the peaceful settlement of Tshoka to the high alpine meadows of Dzongri. The morning at Tshoka feels magical: mist rolling over the wooden huts, prayer flags fluttering softly, and a faint glow on distant snow peaks. After a warm breakfast, you begin your steady ascent toward higher altitudes.<br>The trail starts gently, winding through a dense rhododendron and oak forest, where the cool mountain air carries the earthy scent of moss and rain-soaked wood. Soon, a beautiful wooden walkway appears — a series of planks that guide you through one of the most enchanting sections of the entire trek. In spring, this path transforms into a tunnel of colors, with blooming red, pink, and white rhododendrons draping the forest in a surreal floral canopy. Each step along this stretch feels like walking through a dream — soft creaks beneath your boots, petals scattered across the trail, and an almost sacred stillness in the air.<br>Gradually, the forest thickens again, and the path grows steeper as you climb toward Phedang (12,000 ft) — a scenic clearing lined with prayer flags fluttering against the backdrop of deep green valleys. This is the perfect spot to rest, enjoy a snack, and hydrate before the final push to Dzongri. Beyond Phedang, the trees begin to thin, and the climb becomes more relentless. The gain in altitude is noticeable, so move slowly, breathe deeply, and pace yourself to avoid altitude-related fatigue.<br>After a challenging ascent, you’ll reach Deorali Top, a panoramic ridge that rewards every step of the climb. From here, the view opens dramatically — Kanchenjunga, Pandim, and other towering peaks rise majestically across the skyline, often shimmering through drifting clouds. It’s one of those rare Himalayan moments where silence, effort, and beauty merge perfectly.<br>From Deorali, the terrain levels out into a more gradual path leading to Dzongri, one of the most iconic high-altitude camps in Sikkim. The landscape shifts to open meadows, dwarf rhododendrons, and patches of frost-crusted grass. As the wind turns colder and stronger, you’ll know you’ve truly entered the alpine zone.<br>By evening, you arrive at the Dzongri campsite — a windswept meadow surrounded by snow peaks and crisp mountain air. After settling in, enjoy a hot meal, stay warm inside your tent, and rest deeply. The next morning brings a special reward — the legendary sunrise from Dzongri Top, one of the most magnificent sights in the Eastern Himalayas."
  },
  {
    day: 5,
    title: "Sunrise at Dzongri Top (4,170 m / 13,675 ft) & trek to Thansing (3,930 m / 12,900 ft)",
    details: "<strong>• Trek: ~10 km | 6–8 hrs.</strong><br>•Wake up early at Dzongri campsite to start a truly unforgettable day. Your morning begins with a short trek to Dzongri Top, just about an hour from camp. By sunrise, you’ll reach the top and witness the majestic Himalayas bathed in soft morning light. Kanchenjunga, Pandim, Kabru North & South, Kokthang, and other towering peaks glow golden as the first rays hit the snow, while colorful Tibetan prayer flags flutter in the wind. Take your time to capture photographs, soak in the panoramic views, and savor this magical Himalayan moment before heading back down to Dzongri for a hearty breakfast.<br>After refueling, continue your trek toward Thansing, passing through the open meadows and alpine thickets that make this trail so scenic. The path takes you through wide, rolling Dzongri meadows, where clouds often drift across the mountains, creating a constantly shifting and dreamlike landscape. Moving ahead, the trail enters high-altitude rhododendron and oak forests, where the chirping of birds and rustling leaves provide a peaceful soundtrack to your trek.<br>At the end of the Dzongri meadows, a steep and extended zigzag descent leads to Kokchurang, a small hut and rest point for trekkers at the Prek Chhu riverbed, a place staight out of a storybook. Take a short break here, hydrate, and enjoy a quick snack. From Kokchurang, the trail gradually descends through lush forests, crossing a small river bridge across the Prek Chhu river. On the other side of the river, gentle climbs and open clearings continue to greet you as the landscape transitions from dense woodland to expansive meadows.<br>Finally, the trail opens into the Thansing campsite, nestled at the base of Mt. Tenzing Khang. The close-up views of the surrounding snow-capped peaks are spectacular — on clear days, you can admire the shoulder of Kanchenjunga and the towering Pandim Peak. Once at camp, enjoy a hot lunch and spend the rest of the day relaxing. Layer up as temperatures can drop sharply, especially in the evening. Take short walks around the campsite, capture the stunning scenery, and savor the serene alpine atmosphere.<br>By nightfall, retreat to your tent for a warm meal and a good rest, preparing your body and mind for the adventures that lie ahead. This day combines the thrill of a high-altitude sunrise, panoramic Himalayan views, and a rewarding trek to a stunning campsite — all in one memorable stretch."
  },
  {
    day: 6,
    title: "Thansing to Lamuney (4,180 m / 13,700 ft)",
    details: "<strong>• Trek: ~4 km | 2–3 hrs (short day with important acclimatisation emphasis).</strong><br>• Today offers a break from the tougher sections of the Goechala trek, as you move from Thansing to Lamuney. The trail is short and mostly level, giving your legs a chance to recover while letting you fully enjoy the stunning landscapes around you. After a relaxed breakfast, you’ll start walking through wide, open meadows dotted with wildflowers and gentle streams. The path meanders through the valley, with the snow-capped peaks of Kanchenjunga and its neighboring giants keeping you company along the way.<br>The walk to Lamuney takes around three hours, giving you plenty of time to soak in the serenity and snap photos of the expansive pastures. Once at the campsite, settle into the calm environment, enjoy a hot lunch, and take short walks along the riverside or across the meadows. The quiet of the mountains and the flowing Prek Chu River creates the perfect setting to unwind and reflect on the trek so far.<br>In the evening, your guides will gather everyone for a briefing about the next day — the Goechala Summit. They’ll outline the route, share practical tips, and answer questions to ensure you’re prepared for the most challenging and rewarding day of the trek.<br>As night descends, watch the stars fill the sky above Lamuney, a breathtaking backdrop that reminds you how remote and magical these mountains are. With an early start tomorrow, it’s the perfect opportunity to rest well and recharge for the adventure ahead."
  },
  {
    day: 7,
    title: "Lamuney to Goecha La Viewpoint 1 (4,940 m / 16,200 ft) and return to Thansing/Kokchurang",
    details: "<strong>• Trek: ~12–13 km round trip | 8–10 hrs (start pre-dawn with headlamps).</strong><br>• Today is the highlight of your Goechala trek, a day of challenge, awe, and unforgettable mountain vistas. You’ll start before dawn, so an early wake-up is essential. As you step onto the trail in the soft pre-dawn light, the Himalayas slowly come alive around you. Packing your bags the night before will make it easy to move quickly once you return, allowing for lunch and a descent to Thangsing or Kokchurang without any rush.<br>The trek begins with a steady climb over rocky moraines, gradually winding toward Samiti Lake. Since it will still be dark when you start, the lake’s beauty will remain hidden for a while, but the anticipation builds as you trek upward. From here, the trail ascends further, narrowing as it hugs the ridge, leading to the Goechala Viewpoint. Headlamps will guide you along this part of the trail, ensuring safe steps on the rocky path.<br>Reaching the Goechala Viewpoint at sunrise is nothing short of magical. Before you, the towering peaks of Kanchenjunga, Pandim, and Tenzing Khang glow golden as the first light of morning spreads across the Himalayas. The sheer scale and proximity of these giants leave trekkers speechless, and the panorama stretching from snow-covered ridges to distant valleys makes every step of the early climb worthwhile. This moment, standing above the world with the crisp mountain air around you, is one of the most memorable experiences of the trek.<br>After lingering to take in the sweeping vistas, you’ll begin your descent. A short walk brings you to Samiti Lake, where the still waters mirror the surrounding mountains in perfect clarity. Take time to explore the lakeshore, capture photos, and enjoy the serene ambiance before heading back to Lamuney for a hot, satisfying lunch.<br>Depending on the weather and energy levels, you’ll continue your descent to either Thangsing or Kokchurang, retracing some of the trail you covered earlier in the trek. Once you arrive at your campsite, relax in your tent, enjoy a warm meal, and soak in the sense of accomplishment after conquering one of the most stunning viewpoints of the Indian Himalayas."
  },
  {
    day: 8,
    title: "Thansing/Kokchurang to Tshoka",
    details: "<strong>• Trek: ~15–16 km | 6–7 hrs (long descent day).</strong><br>• Today marks your descent toward Tshoka, giving your legs a mix of gentle climbs and easy downhill stretches through some of the trek’s most enchanting forests. Start your morning at the campsite with a wholesome breakfast, soaking in the fresh mountain air and panoramic surroundings before setting off.<br>Instead of retracing your earlier route, today you’ll follow a different trail from Kokchurang. The path winds through dense, verdant forests where only a single hiker can walk at a time. Tall rhododendrons, pines, and other Himalayan trees flank the trail, creating a serene canopy overhead. If trekking during spring, bursts of red and pink rhododendron flowers add vibrant color to your walk, making the forest feel almost magical.<br>The trail is mostly straightforward but requires attention, especially on steeper sections where the ground can be slippery. Move steadily, breathe in the crisp mountain air, and take time to enjoy the tranquility and natural beauty around you.<br>After about 4–5 hours of trekking, you’ll reach Phedang, your first rest stop of the day. Here, you can pause for a packed lunch while the cool breeze and gentle sounds of the forest refresh you. Re-energized, you’ll continue descending through thick rhododendron groves, following the familiar trail toward Tshoka. The latter part of the trek is gentler, offering a pleasant walk as the forest gradually opens to reveal distant Himalayan peaks.<br>Upon reaching Tshoka, settle into your campsite for the evening. Enjoy a warm meal, reflect on the day’s journey, and rest well — tomorrow will take you further down the trail as the trek winds toward its conclusion."
  },
  {
    day: 9,
    title: "Tshoka to Yuksom",
    details: "<strong>• Trek: ~14 km | 5–6 hrs (final trekking day).</strong><br>• Your final day of the Goechala Trek takes you back to Yuksom, retracing the scenic trails along the Prek Chu River, through Bakhim and Sachen. Wake up early and enjoy a hearty breakfast at the campsite, preparing for a mostly downhill journey that still promises stunning forested landscapes and river views.<br>The trail is gentle and serene, letting you soak in the last moments of the Himalayas’ tranquility. Along the way, you’ll cross the three iconic iron bridges once more, pass through the quiet hamlets of Bakhim and Sachen, and witness the peaceful rhythm of mountain life. While the descent is easier than climbing, take care on steeper sections to avoid putting too much strain on your knees. Maintain a steady pace and pause whenever you want to capture the surrounding beauty.<br>As you approach Yuksom, a short uphill stretch signals the final push back to civilization. Soon, the familiar sights of the town greet you, along with the return of mobile connectivity. Take some time to explore Yuksom’s rich history and culture. Wander through its quaint streets, visit local monasteries, browse handicraft shops, or simply soak in the welcoming atmosphere.<br>Once you arrive at your guesthouse, enjoy a wholesome meal and reflect on the incredible journey you’ve just completed. This is a day to relax, celebrate your achievement, and take in the memories of a trek that will stay with you forever."
  },
  {
    day: 10,
    title: "Departure from Yuksom",
    details: "<strong>• Drive back to NJP/Bagdogra (6–7 hrs).</strong><br>• Timing: depart after a relaxed breakfast; allow for road traffic and mountain weather delays.<br>• Final notes: as forests and foothills unfold into tea gardens, reflect on the range of ecosystems you traversed — from subtropical valleys to glacial meadows and the sacred views of Kanchenjunga. Carry out all non-biodegradable waste and respect local customs and conservation rules."
  }
],


    howToReach: {
      air: "<br>• Bagdogra Airport (West Bengal) is the most practical air gateway (~150 km from Yuksom; ~6–7 hr by road).<br>• Pakyong Airport (Sikkim) is closer (~130 km away, ~5–6 hr) but has limited flights and is weather-dependent.<br><em>From both airports book a private cab to yuksom which may cost between ₹4000 - ₹8000</em>",
      train: "New Jalpaiguri (NJP) or Siliguri, the nearest railhead (~145–153 km from Yuksom; 6–7 hr by road)",
      road: "<br>• Route: Siliguri → Sevoke → Melli → Jorethang → Legship → Yuksom<br>• Shared jeeps from Siliguri's Tenzing Norgay Bus Terminus(near NJP railway station to Jorethang<br>• From Jorethang to Yuksom",
      travelTip: "Start early from Siliguri if opting for a shared vehicle as last jeep for Yuksom from Jorethang departs by 1PM - 2PM."
    },

    didYouKnow: [
  " <b>You can’t trek to the actual Goecha La Pass anymore!</b> <br>For environmental and safety reasons, trekkers stop at View Point 1 (4,940 m). But this spot offers the most dramatic and close-up views of Kanchenjunga and its neighboring peaks.",

  " <b>Mt. Kanchenjunga is revered as a sacred mountain.</b> <br>At 8,586 m, it’s the third-highest mountain in the world. Locals never climb its summit out of respect — the first successful ascent in 1955 deliberately stopped short of the true summit.",

  " <b>Samiti Lake is both sacred and stunning.</b> <br>This turquoise alpine lake mirrors Pandim and Kanchenjunga at sunrise. Locals consider it holy, so camping or washing in it is strictly forbidden.",

  " <b>Khangchendzonga National Park is a UNESCO World Heritage Site.</b> <br>It’s home to red pandas, Himalayan black bears, blue sheep, and over 500 species of birds including the Himalayan monal and blood pheasant.",

  " <b>Flora changes dramatically with altitude.</b> <br>From orchids, magnolias, and lush rhododendrons at lower elevations, to silver firs, junipers, and finally alpine meadows dotted with edelweiss — the trail is a botanist’s paradise.",

  " <b>Rhododendron bloom transforms the trek in spring.</b> <br>In April–May, the forests turn crimson, pink, and purple — Sikkim has over 30 species of rhododendrons, more than anywhere else in India.",

  " <b>The trek is steeped in Tibetan and Sikkimese spirituality.</b> <br>Prayer flags, monasteries, and sacred lakes reflect the belief that the entire Kanchenjunga range is the abode of protective mountain deities."
],


    gallery: [
      
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755534990/goechala-view7_z1hrcv.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755534988/goechala-view8_ukhvfv.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755534987/goechala-view9_jmt3ln.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755534986/goechala-view5_tcefc4.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755534984/goechala-view6_zxmfea.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755534984/goechala-view14_lnsoag.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755534983/goechala-view4_aonzed.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755534979/goechala-view16_whcd24.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755534979/goechala-view2_jlxprg.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755534978/goechala-view3_et6beb.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755534974/goechala-hero_h266sf.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755534973/goechala-view12_gnasys.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755534973/goechala-view15_wrfshw.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755534971/goechala-view13_dni0oj.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755534967/goechala-view11_cwp15u.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755534967/goechala-view10_bujpza.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755534958/goechala-view1_mj2zxp.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755534957/goechala-hero1_gv5uoh.jpg",
    
    ],

    downloadLink: "/docs/Himalayan_Trek_Packing_List.pdf",

    faqs: {
  questions: [
    {
      question: "Who can attempt the Goecha La trek?",
      answer: "This trek is best suited for moderately experienced trekkers with a good level of fitness. While the trail is not technically difficult, long days and high altitude require stamina and proper acclimatization.",
    },
    {
      question: "What is the best time to do the Goecha La trek?",
      answer: "The Goecha La trek offers a unique charm in every season. Spring (April to June) is known for its vibrant bloom of rhododendrons, magnolias, wild strawberries, and countless alpine flowers — the forests come alive with color and birdsong. While skies may turn cloudy during the day, mornings and evenings usually offer clear, golden views of Kanchenjunga. Autumn (September to November) is the most popular season for trekkers seeking uninterrupted Himalayan views — crystal-clear skies, stable weather, and the golden hues of meadows and forests create postcard-perfect landscapes. Winter (December to February) transforms the region into a serene white world; Goecha La is one of the few high-altitude treks (up to ~15,000 ft) that can still be attempted during this time, offering the best mountain visibility and a magical chance to witness snowfall in the Eastern Himalayas.",
    },
    {
      question: "What are the temperature levels during different seasons on the Goecha La trek?",
      answer: "In spring (April–June), daytime temperatures range between 8°C to 25°C, while nights can drop to around -2°C, especially at higher camps like Lamuney and Thansing. Autumn (September–November) offers the most stable weather — days remain cool around 5°C to 12°C, and nights often dip to -5°C or lower. Winter (December–February) is extremely cold, with daytime highs near 0°C to 5°C and night temperatures plunging to -10°C or below, particularly above Dzongri, often accompanied by snow and crystal-clear mountain views.",
    },
    {
      question: "What essential gear should I carry for Goecha La?",
      answer: "Layered clothing, waterproof trekking shoes, insulated jackets, thermal wear, a 50L backpack, trekking poles, and a headlamp are essential. For a full checklist, download the PDF above.",
    },
    {
      question: "Are there camping facilities along the trek?",
      answer: "Yes, the trek involves overnight stays at organized camps at Dzongri, Thansing, and Goecha La base camps. Camp facilities include tents, basic bedding, and meals provided by the organizers.",
    },
    {
      question: "Will I have mobile network coverage during the trek?",
      answer: "Connectivity is very limited. Some areas may have intermittent BSNL or Airtel coverage, but don’t rely on it. Inform family beforehand about limited communication.",
    },
    {
      question: "Do I need any permits for Goecha La trek?",
      answer: "Yes, trekkers require an Sikkim State Permit and Kanchenjunga National Park permit, which are generally arranged by the trek operator before the trek starts.",
    },
    {
      question: "Is the Goecha La trek suitable for solo trekkers?",
      answer: "While possible, solo trekking in Sikkim is not recommended due to remote terrain and the need for park permits. It’s safer to join a guided group trek.",
    },
    {
      question: "What makes Goecha La unique compared to other Himalayan treks?",
      answer: "It offers one of the most spectacular close-up views of the Kanchenjunga range, including glaciers, alpine meadows, and rhododendron forests. The combination of diverse landscapes and cultural exposure makes it truly exceptional.",
    }
  ],
},


    faqsLink: "/faqs-and-articles",
  },


  {
    id: "phulara-ridge-trek",
    name: "Phulara Ridge Trek",
    tags: ["beginner"],
    difficulty: ["moderate"],
    season: ["spring", "autumn"],
    month: ["april", "may", "june", "september", "october", "november"],
    duration: ["5 Nights / 6 Days"],
    region: "uttarakhand",
   coordinates: [
    [31.1051, 78.4305], // Sankri (start)
    [31.1872, 78.3378], // Phulara Ridge 
    [31.1133, 78.4278], // Taluka (end)
    
  ],
    heroImage: "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535324/phulara-ridge-hero_i6vu6r.jpg",

    heroImages: ["https://res.cloudinary.com/dr44hob9b/image/upload/v1755535324/phulara-ridge-hero_i6vu6r.jpg",
                  "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535330/phulara-ridge-view3_fra80o.jpg",
                  "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535330/phulara-ridge-view1_ouomnh.jpg",
                  "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535325/phulara-ridge-view2_qjvnjx.jpg",
    ],
    subtitle: "A Panoramic Himalayan Ridgewalk",

    seo: {
      title: "Phulara Ridge Trek | Itinerary, Cost & Dates | Planethimalayas",
      description: "Phulara Ridge Trek (12,150 ft) is Uttarakhand’s unique ridge-walk trek, offering a 360° panorama of the Himalayas throughout the trail. A 6-day offbeat adventure through forests, meadows, and endless mountain views."
  },

    overview: {
      facts: [
        { emoji: "⏳", label: "Trek Duration", value: "5 Nights / 6 Days" },
        { emoji: "⚡", label: "Trek Grade", value: "Moderate" },
        { emoji: "🏔️", label: "Max Altitude", value: "12,150 ft (3,700 m)" },
        { emoji: "⚡", label: "Trek Distance", value: "30 Km" },
        { emoji: "🌤️", label: "Best Time", value: "April-May & September-November" },
        { emoji: "🗺️", label: "Region", value: "Uttarkashi district, Govind Pashu Vihar Wildlife Sanctuary, Uttarakhand" },
        { emoji: "📍", label: "Start Point", value: "Sankri (Uttarakhand)" },
        { emoji: "🏁", label: "End Point", value: "Sankri (Uttarakhand)" },
        { emoji: "🧥", label: "Cloakroom facility", value: "Available" },
      ],
      snippet: `The Phulara Ridge Trek is a rare Himalayan adventure that transforms every step into a story, where the mountains don’t just tower in the distance — they move with you, flank you, and become companions along the way. The journey begins at Sankri, a tranquil Uttarkashi village whose wooden homes, fluttering prayer flags, and crisp mountain air feel like the first whisper of the Himalayas themselves. From here, the trail winds gently into dense forests of pine, oak, and rhododendron, thick with birdsong and the scent of moss, leading to Juda-ka-Talab, the first campsite nestled in the heart of the forest. Here, the lake mirrors the towering trees and snow-dusted peaks beyond, offering a quiet pause before the adventure truly unfolds.

<br>The next day, trekkers plunge deeper into the forest, following hidden trails long traveled by local shepherds. Ancient paths weave between trees, revealing secret clearings, trickling streams, and glimpses of Himalayan wildlife. After hours of serene woodland walking, the forest opens onto Bhoj Gadi, a vast alpine meadow alive with the rhythms of shepherd life. Temporary huts dot the slopes, and in season, grazing cattle wander peacefully under the watchful eyes of the herders. This is where the mountains begin to reveal their grandeur. A gentle climb from here next day leads to a sudden, breathtaking unveiling of the Phulara Ridge spine, a long, undulating knife-edge that stretches like a natural balcony above deep valleys.

<br>Walking along the ridge, the experience is almost surreal. Peaks like Swargarohini, Kedarkantha, and Bandarpoonch rise alongside, flanking the path and accompanying every step. The ridge rolls and dips gently, wildflowers brush against your boots, and the wind carries a freedom that feels untamed. From this spine, the Himalayas no longer feel distant — they are companions, silent yet profoundly present, guiding your journey as much as the trail itself. The forested valleys below, the shepherd meadows, and the open ridge together create a tapestry of life, nature, and timeless adventure.

<br>The trail continues to Pushtara Meadows, a high amphitheater surrounded by high mountains and towering walls of Phulara Ridge. After soaking in the open ridge and alpine splendor, the path descends into the dense forests of Taluka, eventually opening to the quiet village below. From Taluka, trekkers catch a vehicle back to Sankri, where the journey concludes, leaving a lingering sense of connection with the mountains.

<br>The Phulara Ridge Trek is not merely a trail to traverse; it is a story to inhabit. Each day reveals layers of the Himalayas — the hidden forests, the vibrant shepherd meadows, and the endless sky-road of the ridge. For those who walk it, the mountains become more than scenery; they become a rhythm, a presence, and a memory carved deep into the heart, an adventure that lingers long after the descent.`    
},

    price: 10500,
    priceNote: "* Sankri to Sankri",
    addons: {
      transport: 3000, 
      offloadingbag: 2400,
      transportNote: "* Dehradun to Dehradun",
      offloadingNote: "* Maximum weight 9kg/bag"
    },

    inclusionsNote: "🍽️ All Meals – Nutritious meals provided from dinner on Day 1 to dinner on Day 5",

    dates: [
      
     
      { label: "22 Nov - 27 Nov", start: "2025-11-22", end: "2025-11-27" },
      { label: "23 Nov - 28 Nov", start: "2025-11-23", end: "2025-11-28" },
      { label: "11 Apr - 16 Apr", start: "2026-04-11", end: "2026-04-16" },
      { label: "12 Apr - 17 Apr", start: "2026-04-12", end: "2026-04-17" },
      { label: "18 Apr - 23 Apr", start: "2026-04-18", end: "2026-04-23" },
      { label: "19 Apr - 24 Apr", start: "2026-04-19", end: "2026-04-24" },
      { label: "25 Apr - 30 Apr", start: "2026-04-25", end: "2026-04-30" },
      { label: "26 Apr - 01 May", start: "2026-04-26", end: "2026-05-01" },
      { label: "02 May - 07 May", start: "2026-05-02", end: "2026-05-07" },
      { label: "03 May - 08 May", start: "2026-05-03", end: "2026-05-08" },
      { label: "09 May - 14 May", start: "2026-05-09", end: "2026-05-14" },
      { label: "10 May - 15 May", start: "2026-05-10", end: "2026-05-15" },
      { label: "16 May - 21 May", start: "2026-05-16", end: "2026-05-21" },
      { label: "17 May - 22 May", start: "2026-05-17", end: "2026-05-22" },
      { label: "23 May - 28 May", start: "2026-05-23", end: "2026-05-28" },
      { label: "24 May - 29 May", start: "2026-05-24", end: "2026-05-29" },
      { label: "30 May - 04 Jun", start: "2026-05-30", end: "2026-06-04" },
      { label: "31 May - 05 Jun", start: "2026-05-31", end: "2026-06-05" },
    ],

    highlights: [
      "Magnificent Ridge Walk with uninterrupted views of snow-clad peaks like Swargarohini, Bandarpoonch, and Kalanag.",
      "Dense, untouched forest trails inside Govind Pashu Vihar Wildlife Sanctuary.",
      "Beautiful campsites at Juda ka Talab, Bhoj Gadi, and the stunning alpine meadow of Pushtara.",
      "Spring brings blooming rhododendrons, while autumn offers golden meadows and crisp views."
    ],

    itinerary: [
  {
    day: 1,
    title: "Dehradun to Sankri (Drive – 190 km | 8–9 hours), Altitude: ~6,400 ft (1,950 m)",
    details: "• Early morning pickup from Dehradun (ISBT/railway station/airport).<br> • Scenic drive through Mussoorie, Purola, Mori, and Netwar.<br> • Roads wind through pine forests, apple orchards, and the Tons River valley.<br> • Cross the entry gate of Govind Pashu Vihar National Park near Netwar.<br> • Sankri is a small yet popular base village for treks like Kedarkantha, Har Ki Dun, and Phulara Ridge.<br> • Overnight Stay: Guesthouse/hotel at Sankri (basic facilities, but good views of Swargarohini massif)."
  },
  {
    day: 2,
    title: "Sankri to Juda ka Talab (Trek – 4 km | 4–5 hours), Altitude: ~9,000 ft (2,750 m)",
    details: "• Trail starts with a gradual ascent from Sankri, passing local wooden houses and terraced fields.<br> • Walk under dense canopy of pine, maple, and oak forests.<br> • Spot Himalayan birds like the grey-headed woodpecker or barbets along the trail.<br> • Juda ka Talab is a high-altitude glacial lake surrounded by pine trees, often partially frozen in early season.<br> • Winter: lake freezes into a sheet of ice, summer: it reflects the forests around.<br> • Campsite offers flat clearings around the lake.<br> • Overnight Stay: Tent camping at Juda ka Talab (night temperatures can drop sharply)."
  },
  {
    day: 3,
    title: "Juda ka Talab to Bhoj Gadi (Trek – 4.5 km | 4–5 hours), Altitude: ~11,200 ft (3,400 m)",
    details: "• Begin with a steady climb through mixed forests of pine and silver birch (locally called Bhoj trees).<br> • As altitude increases, the tree line starts thinning and open meadows appear.<br> • Views of snow-clad ranges (Swargarohini, Bandarpoonch, and Kalanag) emerge more prominently.<br> • Bhoj Gadi campsite is an open alpine meadow with fantastic sunset views — clouds often create a golden horizon.<br> • This campsite is also used as an acclimatization point before ridge day.<br> • Overnight Stay: Tent camping at Bhoj Gadi."
  },
  {
    day: 4,
    title: "Bhoj Gadi to Pushtara via Phulara Ridge (Trek – 7 km | 6–7 hours), Altitude: Ridge top ~12,150 ft (3,700 m)",
    details: "• The signature day of the trek — trek along the Phulara Ridge.<br> • Ridge walking is rare in Indian treks — here you walk along a long spine with steep drop-offs on either side.<br> • Panoramic 360° Himalayan views include Swargarohini, Bandarpoonch, Kalanag, Kedarkantha, and Ranglana peaks.<br> • The sense of 'walking in the sky' is unforgettable; trekkers often compare it to European Alpine treks.<br> • Meadows on the ridge are carpeted with alpine flowers (May–June) or golden-brown grasses (Sept–Oct).<br> • Gradual descent from ridge into expansive meadows of Pushtara.<br> • Overnight Stay: Tent camping in wide meadows of Pushtara, with big sky stargazing opportunities."
  },
  {
    day: 5,
    title: "Pushtara to Taluka – Drive to Sankri (Trek – 8 km | 4–5 hours + Drive 1 hr)",
    details: "• Descend steadily through pine and rhododendron forests.<br> • Trail joins the motorable road near Taluka village, a picturesque settlement with traditional wooden houses.<br> • Drive from Taluka back to Sankri (around 1 hour).<br> • Trek ends here; last evening at Sankri to relax.<br> • Overnight Stay: Guesthouse/hotel at Sankri."
  },
  {
    day: 6,
    title: "Sankri to Dehradun (Drive – 190 km | 8–9 hours)",
    details: "• After breakfast, start return drive to Dehradun.<br> • Expect to reach Dehradun by late afternoon/evening (plan return journeys accordingly).<br> • Drive retraces the same route along Tons River, Mori, Purola, and Mussoorie.<br> • Trip ends with memories of the unique ridge walk and vast Himalayan panoramas."
  },
],


    howToReach: {
      air: "<br>• Nearest Airport: Jolly Grant Airport, Dehradun (DED)<br>• Regular flights available from Delhi, Mumbai, Bangalore, and other major cities.Regular flights available from Delhi, Mumbai, Bangalore, and other major cities.<br>• From the airport, you can hire a taxi to Dehradun ISBT or directly to Sankri.",
      train: "<br>• Nearest Railway Station: Dehradun Railway Station<br>• Well connected with major cities like Delhi, Haridwar, Rishikesh, and Lucknow.",
      road: "Dehradun to Sankri (190 km | 8–9 hours)",
      travelTip: "<br>• Private Cab: Can be booked in advance. Costlier but comfortable.<br>• Local Bus: From Dehradun ISBT to Sankri via Purola (limited availability, leaves early morning)."
    },

    didYouKnow: [
      " <b>Phulara Ridge is one of the only true ridge treks in India!</b> - Unlike most trails that dip into valleys, this trek lets you walk along a high mountain ridge for hours — with panoramic 250° views of snow-capped peaks the entire time.",
      " <b>You walk on a ridge for nearly 4 km!</b> - Most treks have short ridge sections. Phulara gives you one of the longest ridge walks, often above clouds and with peaks on both sides — making it feel like you’re on top of the world.",
      " <b>The trail blooms with over 500 species of alpine flowers!</b> - True to its name (Phulara = “flower-filled”), the meadows in late spring and post-monsoon are covered in wildflowers, making it a dream trek for nature lovers and photographers.",
      " <b>It’s a great alternative to the popular Kedarkantha Trek!</b> - While Kedarkantha is snowy and crowded, Phulara offers solitude, more variety in terrain, and longer views — all at a similar altitude and difficulty level.",
      " <b>The forests are alive with rare Himalayan birds!</b> - Trek through Govind Pashu Vihar Wildlife Sanctuary, home to the Himalayan Monal, Koklass Pheasant, and even elusive leopards. Birdwatchers love this route.",
      " <b>Pushtara meadows are among the best-kept secrets of Uttarakhand!</b> - Tucked away on the final stretch, these vast grasslands rival the beauty of any alpine bugyal — and you’ll likely have them all to yourself."
    ],

    gallery: [
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535332/phulara-ridge-view6_t57zdk.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535331/phulara-ridge-view5_nywref.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535331/phulara-ridge-view4_dv8abg.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535330/phulara-ridge-view3_fra80o.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535330/phulara-ridge-view1_ouomnh.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535325/phulara-ridge-view2_qjvnjx.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535324/phulara-ridge-hero_i6vu6r.jpg",
    
    ],

    downloadLink: "/docs/Himalayan_Trek_Packing_List.pdf",

    faqs: {
  questions: [
    {
      question: "Who is the Phulara Ridge trek suitable for?",
      answer: "This trek is ideal for beginners to moderately experienced trekkers looking for a short but scenic Himalayan adventure. It involves moderate altitude and manageable daily distances.",
    },
    {
      question: "What is the best season to trek Phulara Ridge?",
      answer: "The best time is from April to June and September to November when the weather is stable, skies are clear, and the views of surrounding peaks like Bandarpoonch and Swargarohini are unobstructed.",
    },
    {
      question: "What gear should I carry for the Phulara Ridge trek?",
      answer: "Carry waterproof trekking shoes, layered clothing, thermal wear, a 40–50L backpack, trekking poles, and a headlamp. For a complete packing checklist, refer to the downloadable PDF above.",
    },
    {
      question: "Are there camping facilities along the trek?",
      answer: "Yes, the trek includes overnight stays at well-established camps along the ridge and meadows, with tents, bedding, and meals provided by the organizers.",
    },
    {
      question: "Is mobile network available during the trek?",
      answer: "Mobile coverage is very limited. Some areas may have intermittent Airtel or BSNL service, but it is generally unreliable. Trekkers should plan to stay disconnected.",
    },
    {
      question: "Do I need permits for the Phulara Ridge trek?",
      answer: "No special permits are generally required for this trek as it is within Uttarakhand state forests, but it’s advisable to confirm with your trek operator.",
    },
    {
      question: "Can beginners join the Phulara Ridge trek alone?",
      answer: "Solo beginners are welcome if accompanied by a guided trek group. The route is safe, but professional guidance ensures proper acclimatization and a smoother experience.",
    },
    {
      question: "What makes Phulara Ridge unique among Uttarakhand treks?",
      answer: "It offers sweeping panoramic views of the Garhwal Himalayas, beautiful alpine meadows, and lesser-trodden trails, providing a serene and immersive Himalayan experience without extreme difficulty.",
    }
  ],
},


    faqsLink: "/faqs-and-articles",
  },


  {
    id: "harkidun-ruinsaratal-trek",
    name: "Harkidun Ruinsaratal Trek",
    difficulty: ["moderate"],
    season: ["spring", "summer", "autumn"],
    month: ["april", "may", "june", "september", "october"],
    duration: ["7 Nights / 8 Days"],
    region: "uttarakhand",
    coordinates: [
    [31.1051, 78.4305], // Sankri (start)
    [31.1133, 78.4278], // Taluka
    [31.1406, 78.3983], // Seema
    [31.1575, 78.3736], // Har Ki Dun
    [31.1767, 78.4142], // Ruinsara Tal (end)
  ],
    heroImage: "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535146/harkidun-ruinsara-hero_xgyzwp.jpg",

    heroImages: ["https://res.cloudinary.com/dr44hob9b/image/upload/v1755535146/harkidun-ruinsara-hero_xgyzwp.jpg",
                  "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535149/harkidun-ruinsara-view5_zrff3m.jpg",
                  "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535148/harkidun-ruinsara-view6_rxaezg.jpg",
                  "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535145/harkidun-ruinsara-view3_a2a9so.jpg",
                ],
      subtitle: "A Timeless Himalayan Masterpiece",

    seo: {
      title: "Har Ki Dun Ruinsara Tal Trek | Itinerary, Cost & Dates | Planethimalayas",
      description: "Har Ki Dun & Ruinsara Tal Trek (11,800 ft) blends ancient villages, alpine valleys, and a pristine high-altitude lake. A 8-day trek rich in history and Himalayan beauty."
    },

    overview: {
      facts: [
        { emoji: "⏳", label: "Trek Duration", value: "7 Nights / 8 Days" },
        { emoji: "⚡", label: "Trek Grade", value: "Moderate" },     
        { emoji: "🏔️", label: "Max Altitude", value: "12,000 ft (Ruinsaratal)" },
        { emoji: "⚡", label: "Trek Distance", value: "65 Km" },
        { emoji: "🌤️", label: "Best Time", value: "May-June & September-November" },
        { emoji: "🗺️", label: "Region", value: "Uttarkashi district, Govind Pashu Vihar Wildlife Sanctuary, Uttarakhand" },
        { emoji: "📍", label: "Start Point", value: "Sankri (Uttarakhand)" },
        { emoji: "🏁", label: "End Point", value: "Sankri (Uttarakhand)" },
        { emoji: "🧥", label: "Cloakroom facility", value: "Available" },
      ],
      snippet: "The Har Ki Dun–Ruinsara Tal Trek is a rare Himalayan journey where myth, wilderness, and silence come together in perfect harmony. Hidden within the Govind Pashu Vihar National Park, this trail takes you beyond the ordinary — from ancient mountain villages to a sacred alpine lake nestled at the base of the mighty Swargarohini peaks.<br>The journey begins in the Har Ki Dun Valley, a cradle-shaped paradise often called the Valley of the Gods. The path follows the shimmering Supin River, winding through whispering pine and deodar forests, past wooden bridges, and sun-drenched meadows that open to views of Bandarpoonch, Black Peak (Kalanag), and the snow-bound Swargarohini massif. Villages like Osla, Gangad, and Seema still carry the scent of living legend — their carved wooden temples and centuries-old homes echo stories from the Mahabharata, preserved through generations of mountain life.<br>Beyond Seema, the trail diverts toward Devsu Bugyal, a high meadow framed by oak and silver-fir forests. In summer, it bursts into color with wildflowers; by autumn, it glows gold beneath a crisp Himalayan sky. From here, the trek grows quieter and wilder — descending to the valley floor and following the Supin River deeper into the heart of the mountains.<br>At last, the forest opens to reveal Ruinsara Tal — a tranquil glacial lake shimmering at 3,600 meters, surrounded by glaciers and towering peaks. Its still waters mirror the heavens above and the Swargarohini range beyond, creating a sight that feels both sacred and surreal. Nights here are unforgettable — stars scattered across the sky, the lake gleaming in silver light, and an unbroken silence that humbles you to the core.<br>The return trail retraces this divine landscape, giving you one last chance to absorb the valley’s peace and beauty. The Har Ki Dun–Ruinsara Tal Trek is more than a route — it’s a dialogue between you and the mountains, between legend and reality, between solitude and belonging. It leaves you with stories you’ll carry long after you’ve descended — of rivers that sang, peaks that glowed, and a lake that reflected the sky."
    },

    price: 17500,
    priceNote: "* Sankri to Sankri",
    addons: {
      transport: 3000, 
      offloadingbag: 3600,
      transportNote: "* Dehradun to Dehradun",
      offloadingNote: "* Maximum weight 9kg/bag"
    },

    inclusionsNote: "🍽️ All Meals – Nutritious meals provided from dinner on Day 1 to dinner on Day 7",

    dates: [
      
     
      { label: "22 Nov - 29 Nov", start: "2025-11-22", end: "2025-11-29" },
      { label: "28 Mar - 04 Apr", start: "2026-03-28", end: "2026-04-04" },
      { label: "11 Apr - 18 Apr", start: "2026-04-11", end: "2026-04-18" },
      { label: "18 Apr - 25 Apr", start: "2026-04-18", end: "2026-04-25" },
      { label: "02 May - 09 May", start: "2026-05-02", end: "2026-05-09" },
      { label: "16 May - 23 May", start: "2026-05-16", end: "2026-05-23" },
      { label: "30 May - 06 Jun", start: "2026-05-30", end: "2026-06-06" },
      
    ],

    highlights: [
  "Ancient Himalayan villages: Osla & Gangad with traditional wooden architecture",
  "Panoramic Himalayan views of Swargarohini, Bandarpoonch, Kalanag, and Black Peak",
  "Pristine alpine lake: Ruinsaratal, surrounded by untouched meadows and snow-capped peaks",
  "Diverse landscapes: pine and oak forests, alpine meadows, glacial streams, and high-altitude ridges",
  "Rich flora and fauna: Himalayan Monal, Koklass Pheasant, musk deer, blue poppies, primulas, and rhododendrons",
  "Cultural immersion: century-old shepherd trails and century-old temples in remote villages"
],


    itinerary: [
  {
    day: 1,
    title: "Drive to Sankri | Distance: ~200 km | Time: 7–8 hrs | Altitude: 1,950 m",
    details: "• Your journey to the mountains begins early in the morning from Dehradun. To reach on time, trekkers usually take an overnight bus or train from Delhi to Dehradun ISBT. From here, we start our long yet beautiful drive towards Sankri, the gateway to several iconic treks in the Western Garhwal Himalayas, including Har Ki Dun and Kedarkantha.<br>The drive winds through Mussoorie – the Queen of Hills, where the air turns crisp and pine-scented. As we descend past Kempty Falls and enter the Tons River valley, the landscape changes dramatically — terraced fields, apple orchards, and conifer-covered slopes replace the city bustle. The route passes through small mountain towns like Naugaon, Purola, Mori, and Netwar, each offering a glimpse into the slow, content rhythm of Himalayan life.<br>We stop en route for a hearty mountain-side lunch and continue deeper into the valley. Past Purola, mobile networks fade — only BSNL and Jio work intermittently beyond this point. The final stretch to Sankri is a treat: narrow roads weaving through dense pine forests, the sun flickering through branches, and the Tons River gliding alongside.<br>By early evening, we arrive at Sankri (6,400 ft), a peaceful mountain village nestled amidst apple orchards and snow-capped peaks. From the village, the first views of Swargarohini shimmer in the distance — a hint of what awaits ahead. After freshening up at our cozy guesthouse, you can stroll through the small local market for tea, woollens, or last-minute gear. During winter, Sankri itself often wears a fresh coat of snow — marking the true beginning of your Himalayan adventure."
  },
  {
    day: 2,
    title: "Drive to Gangad – Trek to Seema | Distance: 10 km | Time: 4–5 hrs | Altitude: 2,500 m",
    details: "• Start your day with a warm breakfast amidst crisp mountain air and panoramic Himalayan views — the perfect start before setting off for another memorable day on the trail. After packing up, a short 1.5-hour drive from Sankri takes you to Dhatmeer, the last motorable point before the valley narrows into trekking country. The drive itself is a delight — winding mountain roads, fresh pine-scented breeze, and glimpses of towering peaks set the tone for the adventure ahead.<br>From Dhatmeer, the trek begins on a well-marked trail that meanders through lush cedar and pine forests, with the Supin River glistening below. The air carries the scent of wild herbs and wet earth as you cross small wooden bridges and mountain streams. Along the way lies Gangar, a small Himalayan hamlet where traditional wooden houses and terraced fields reflect the simple, enduring life of the mountains. After a brief rest here, continue a little further to Pawani Garat, your campsite for the night.<br>As the trail climbs gradually, views of Bandarpoonch and the Swargarohini peaks open up, adding grandeur to the landscape. During monsoon, the trail bursts with life — blooming amaranth shrubs painting the slopes in striking red hues, and in spring, meadows carpeted with blue poppies, primulas, and rhododendrons.<br>Set up camp beside the forest clearing, surrounded by oak and pine, with the sound of the Supin River echoing through the valley. Higher up the mountains on the other side of th river you can see the lat village of this valley- Osla. As night falls, the stars appear bright and endless above — a reminder of why the Himalayas feel like home to every trekker who walks these trails."
  },
  {
    day: 3,
    title: "Trek from Seema to Rainbasera | Distance: 8 km | Time: 5–6 hrs | Altitude: 3,200 m",
    details: "• Today the trail diverges from the classic Har Ki Dun route. Instead of crossing the Seema bridge, we take the trail that climbs gradually to the right of Seema village. The initial stretch is a mix of gentle ascents through oak and pine forest, getting steeper as you approach Devsu Bugyal.<br>Devsu is a breathtaking meadow surrounded by thick oak, deodar, and silver fir trees. During summer, the grassland glows in rich green hues dotted with wildflowers, while in autumn it turns golden-brown — equally beautiful. The views of the Swargarohini peaks from here are simply stunning.<br>From Devsu, the trail descends sharply through a series of switchbacks to the valley floor. After crossing the Supin River via a small wooden bridge, we continue trekking along its left bank. The path winds through lush forests, with glimpses of waterfalls and snow-fed streams on the way.<br>A few gentle ups and downs bring you to Rainbasera, a serene campsite set beside the river. The sound of flowing water and the surrounding cliffs make this a peaceful spot to unwind after a fulfilling day’s trek. Overnight in tents."
  },
  {
    day: 4,
    title: "Trek from Rainbasera to Ruinsaratal | Distance: 10 km | Time: 6–7 hrs | Altitude: 3,650 m",
    details: "• The trail from Rainbasera to Ruinsara Lake is an unforgettable experience. As you move ahead, the valley begins to transform — tall birch and rhododendron trees give way to dwarf vegetation, and the easy riverbanks turn into rocky terrain surrounded by towering gorges.<br>Soon, the valley opens up to reveal a grand amphitheater of high peaks — the Swargarohini Massif rises proudly to your left, while beneath it lies the tranquil Ruinsara Tal, a glacial lake reflecting the mighty mountains.<br>Ahead lies Kyarkatta, a high-altitude meadow leading to the Black Peak (Kalanag) and Dhumdhar Kandi expeditions. On the right, across the river, the trail continues toward the famous Bali Pass. Camp beside Ruinsara Lake and spend the night under a sky filled with stars, surrounded by silent snow-clad peaks."
  },
  {
    day: 5,
    title: "Trek from Ruinsaratal to Seematra | Distance: 12 km | Time: 6–7 hrs | Altitude: 2,800 m",
    details: "• After breakfast, we retrace our steps along the same scenic trail, passing Rainbasera but instead of climbing to debshu bugyal we trek straight and cross the river over an wooden bridge a little ahead to climb up the meadows of Seematra. The descent offers a completely different perspective of the valley and surrounding peaks. By late noon, we reach Seematra, where we camp for the night."
  },
  {
    day: 6,
    title: "Trek to Har Ki Dun & back | Distance: 14 km | Time: 7–8 hrs | Altitude: 3,566 m",
    details: "• Today marks the most awaited day of the entire trek — the day you finally step into the legendary Har Ki Dun Valley, often called the Valley of the Gods. After a warm breakfast amidst the high mountains, set off early for a long yet deeply rewarding journey through one of the most enchanting landscapes in the Himalayas.<br>The trail begins with a steady climb through alpine meadows, where the early morning sun paints the snow peaks in golden hues. As you gain altitude, the air turns crisper, and snow patches begin to appear, shimmering against the deep green of the valley. You’ll walk through lush meadows and forested slopes, sometimes crossing small glacial streams and boulder-strewn patches. In spring, the route bursts alive with wildflowers — primulas, rhododendrons, and gentians, while in winter, it transforms into a white wonderland straight out of a dream.<br>As the valley opens up, you’ll catch your first breathtaking view of Swargarohini Peak, followed by the grand sight of Hata Peak, Black Peak (Kalanag), and Bandarpoonch standing tall in the distance. Each step forward unveils new panoramas — soaring ridges, icy waterfalls, and endless alpine expanses that seem untouched by time.<br>At the heart of the valley lies a small stone temple dedicated to Lord Shiva, with a sacred Shivling and a statue of Nandi overlooking the mighty peaks. The place holds immense mythological significance — it is believed to be the path taken by the Pandavas on their way to heaven, giving the valley its divine aura and name, Har Ki Dun — “The Valley of the Gods.”<br>Spend some quiet time here, letting the serenity of the valley sink in. Capture the vastness of this heavenly amphitheater, surrounded by snow-clad summits and the murmuring of glacial streams.<br>After immersing yourself in this Himalayan paradise, begin your descent back to Seematra, retracing the same scenic trail. The journey down feels gentler and filled with reflection. By evening, you’ll reach your campsite, where a warm dinner and peaceful night under a starlit sky await — a perfect close to one of the most memorable days of your trek."
  },
  {
    day: 7,
    title: "Trek to Gangad – Drive to Sankri | Distance: 10 km | Time: 4–5 hrs | Altitude: 1,950 m",
    details: "•  We begin our return journey from Seematra, retracing the same scenic trail that once led us deep into the valley. As we descend, the familiar trail feels different in the soft morning light. This time instead od descending to Seema bridge we will trek through the Osla village, where you’ll get a glimpse into its century-old wooden homes and the revered Someshwar Temple, where local culture and traditions are still alive and deeply rooted.<br>Continuing further, we descend down and terk past Pawani Garat to reach Gangad, a charming little hamlet by the riverbank — the perfect spot to pause and soak in the final moments of mountain peace. From here, we board our vehicles and drive back to Sankri, arriving by evening. After a long but fulfilling day, unwind at the guesthouse with a hot meal and cherish the memories of the journey."
  },
  {
    day: 8,
    title: "Departure from Sankri to Dehradun | Distance: ~200 km | Time: 7–8 hrs",
    details: "• Today marks the end of a truly memorable Himalayan journey. After an early breakfast, we bid farewell to Sankri and begin our long drive back to Dehradun. The route retraces the same winding mountain roads, passing through pine forests, terraced villages, and lively mountain streams that now feel beautifully familiar.<br>It’s a scenic yet lengthy drive of about 10 hours so an early start helps us make the most of the day. Along the way, enjoy short breaks to stretch and take in the final glimpses of the valley — a last reminder of the wilderness you’ve just explored on foot.<br>By evening, we reach Dehradun late in the evening, marking the conclusion of the trek. As you part ways with the mountains and fellow trekkers, take with you the stories, laughter, and quiet moments that made this journey truly special. Until next time — see you on another trail with Planethimalayas!."
  }
],


    howToReach: {
      air: "<br>• Nearest Airport: Jolly Grant Airport, Dehradun (DED)<br>• Regular flights available from Delhi, Mumbai, Bangalore, and other major cities.Regular flights available from Delhi, Mumbai, Bangalore, and other major cities.<br>• From the airport, you can hire a taxi to Dehradun ISBT or directly to Sankri.",
      train: "<br>• Nearest Railway Station: Dehradun Railway Station<br>• Well connected with major cities like Delhi, Haridwar, Rishikesh, and Lucknow.",
      road: "Dehradun to Sankri (190 km | 8–9 hours)",
      travelTip: "<br>• Private Cab: Can be booked in advance. Costlier but comfortable.<br>• Local Bus: From Dehradun ISBT to Sankri via Purola (limited availability, leaves early morning)."
    },

    didYouKnow: [
  "<b>Har Ki Dun means 'Valley of the Gods'!</b> - Named for its divine serenity and mythological significance, believed to be the path Pandavas took to ascend to heaven via Swargarohini peak.",
  "<b>Osla village worships Duryodhana!</b> - This remote Himalayan village has a 200+ year-old wooden temple dedicated to the Kaurava prince, showcasing unique local traditions.",
  "<b>Swargarohini is the 'stairway to heaven'!</b> - Snow-clad peaks believed to be the route taken by the Pandavas, offering an awe-inspiring backdrop for trekkers.",
  "<b>Ancient shepherd routes traverse the valley!</b> - For centuries, Gujjar shepherds and traders moved through these forests and alpine meadows, long before it became a modern trek.",
  "<b>Three climate zones in one trek!</b> - From subtropical pine forests to temperate oak forests to alpine grasslands, the trek covers a diverse range of ecosystems.",
  "<b>Govind Pashu Vihar Wildlife Sanctuary</b> - Home to snow leopards, black bears, musk deer, and dozens of rare Himalayan birds and wildflowers, the trek is a wildlife enthusiast’s delight."
],


    gallery: [
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535158/harkidun-ruinsara-view2_r0rwas.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535152/harkidun-ruinsara-view1_vwqkyf.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535149/harkidun-ruinsara-view5_zrff3m.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535148/harkidun-ruinsara-view6_rxaezg.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535146/harkidun-ruinsara-hero_xgyzwp.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535146/harkidun-ruinsara-view4_trdbbj.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535145/harkidun-ruinsara-view3_a2a9so.jpg",
    ],

    downloadLink: "/docs/Himalayan_Trek_Packing_List.pdf",

    faqs: {
  questions: [
    {
      question: "Who can participate in the Har Ki Dun & Ruinsara Tal trek?",
      answer: "This trek is suitable for beginners with moderate fitness levels as well as experienced trekkers. The trail involves forest walks, moderate ascents, and high-altitude camping.",
    },
    {
      question: "What is the best time to do the Har Ki Dun & Ruinsara Tal trek?",
      answer: "The best seasons are May to June and September to October. During these months, the weather is stable, the meadows are lush, and snow patches are minimal, offering clear views of peaks like Swargarohini and Bandarpoonch.",
    },
    {
      question: "What essential gear should I carry for this trek?",
      answer: "Carry waterproof trekking shoes, layered clothing, a 40–50L backpack, thermal wear, a rain jacket, trekking poles, and a headlamp. For a detailed list, download the packing PDF above.",
    },
    {
      question: "Are there camping facilities on the Har Ki Dun & Ruinsara Tal trek?",
      answer: "Yes, overnight camping is arranged at scenic locations along the trek, including Har Ki Dun meadows and near Ruinsara Tal. Tents, bedding, and meals are provided.",
    },
    {
      question: "Is mobile network coverage available during the trek?",
      answer: "Network coverage is limited. Some areas may have intermittent Airtel or BSNL service, but connectivity is generally unreliable. Trekkers should plan accordingly.",
    },
    {
      question: "Do I need any permits for this trek?",
      answer: "No special permits are required for Har Ki Dun & Ruinsara Tal as it lies within Uttarakhand’s state forest area. Your trek operator will handle necessary permissions for camping.",
    },
    {
      question: "Can families or solo trekkers join this trek?",
      answer: "Yes, families with teenagers and solo trekkers can join, provided they are in a guided group. The route is safe, with moderate gradients and well-marked trails.",
    },
    {
      question: "What makes Har Ki Dun & Ruinsara Tal trek unique?",
      answer: "This trek combines enchanting Himalayan meadows, pristine Ruinsara Tal, and panoramic views of the Garhwal peaks. It’s ideal for photographers, nature lovers, and anyone seeking a serene Himalayan experience.",
    }
  ],
},


    faqsLink: "/faqs-and-articles",
  },


  {
    id: "harkidun-trek",
    name: "Harkidun Trek",
    tags: ["family", "beginner"],
    difficulty: ["easy"],
    season: ["spring", "summer", "autumn"],
    month: ["may", "april", "june", "march", "september", "october", "november"],
    duration: ["5 Nights / 6 Days"],
    region: "uttarakhand",
    coordinates: [
  [31.0817, 78.0611], // Sankri (start)
  [31.0567, 78.4281], // Har Ki Dun Valley (end)
],
    heroImage: "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535093/harkidun-hero1_nwtfqh.jpg",
    
    heroImages: [
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535093/harkidun-hero1_nwtfqh.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535102/harkidun-view2_bmvyqy.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535098/harkidun-view4_o8psfe.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535145/harkidun-ruinsara-view3_a2a9so.jpg",
  ],
    
    subtitle: "A Timeless Himalayan Masterpiece",

    seo: {
      title: "Har Ki Dun Trek | Itinerary, Cost & Dates | Planethimalayas",
      description: "Har Ki Dun Trek (11,700 ft) is a 6-day valley trek in Uttarakhand, known for ancient villages, pine forests, and grand views of Swargarohini and Bandarpoonch peaks."
    },

    overview: {
      facts: [
        { emoji: "⏳", label: "Trek Duration", value: "5 Nights / 6 Days" },
        { emoji: "⚡", label: "Trek Grade", value: "Easy" },     
        { emoji: "🏔️", label: "Max Altitude", value: "11,200 ft (Harkidun)" },
        { emoji: "⚡", label: "Trek Distance", value: "40 Km" },
        { emoji: "🌤️", label: "Best Time", value: "March-June & September-November" },
        { emoji: "🗺️", label: "Region", value: "Uttarkashi district, Govind Pashu Vihar Wildlife Sanctuary, Uttarakhand" },
        { emoji: "📍", label: "Start Point", value: "Sankri (Uttarakhand)" },
        { emoji: "🏁", label: "End Point", value: "Sankri (Uttarakhand)" },
        { emoji: "🧥", label: "Cloakroom facility", value: "Available" },
      ],
      snippet: 
"The Har Ki Dun Trek is one of those rare Himalayan journeys where myth, nature, and human warmth come together to create pure magic. Hidden deep in the Govind Pashu Vihar National Park, this cradle-shaped valley opens up a world of towering peaks, ancient legends, and timeless mountain life. The trail follows the clear blue waters of the Supin River, winding past whispering pine and deodar forests, wooden bridges, and meadows that seem to glow under the morning sun.<br>What makes Har Ki Dun unforgettable is its sense of peace — no roads, no crowds, only the soft hum of the valley and the rhythm of your steps. Every bend brings a new surprise — a cluster of wild rhododendrons, a snow-fed stream, or the distant sight of Swargarohini shining under a veil of clouds.<br>Trekkers walk through centuries-old villages like Osla, Gangad, and Seema, where time seems to move slower. The intricate wooden temples, carved with mythological motifs, tell stories of faith that still live strong in the mountains. The Duryodhana Temple of Osla, now devoted to Lord Someshwar, stands as a reminder of the valley’s deep connection to the Mahabharata.<br>As the trail climbs higher, it leads to alpine meadows and moraine fields, revealing stunning views of Bandarpoonch, Kalanag (Black Peak), and the Swargarohini massif — the same peaks said to mark the path to heaven taken by the Pandavas.<br>Har Ki Dun is not just a trek; it’s a living story. A story of rivers that sing, forests that whisper, and people who still greet you with warmth and mountain grace. Whether you’re drawn by mythology, nature, or the spirit of solitude, this trek will make you feel like you’ve stepped into another world — one that’s real, raw, and deeply human."
    },

    price: 10900,
    priceNote: "* Sanri to Sankri",
    addons: {
      transport: 3000, 
      offloadingbag: 2400,
      transportNote: "* Dehradun to Dehradun",
      offloadingNote: "* Maximum weight 9kg/bag"
    },

    inclusionsNote: "🍽️ All Meals – Nutritious meals provided from dinner on Day 1 to dinner on Day 5",

    dates: [
      
      
      { label: "22 Nov - 27 Nov", start: "2025-11-22", end: "2025-11-27" },
      { label: "23 Nov - 28 Nov", start: "2025-11-23", end: "2025-11-28" },
      { label: "21 Mar - 26 Mar", start: "2026-03-21", end: "2026-03-26" },
      { label: "22 Mar - 27 Mar", start: "2026-03-22", end: "2026-03-27" },
      { label: "28 Mar - 02 Apr", start: "2026-03-28", end: "2026-04-02" },
      { label: "29 Mar - 03 Apr", start: "2026-03-29", end: "2026-04-03" },
      { label: "04 Apr - 09 Apr", start: "2026-04-04", end: "2026-04-09" },
      { label: "05 Apr - 10 Apr", start: "2026-04-05", end: "2026-04-10" },
      { label: "11 Apr - 16 Apr", start: "2026-04-11", end: "2026-04-16" },
      { label: "12 Apr - 17 Apr", start: "2026-04-12", end: "2026-04-17" },
      { label: "18 Apr - 23 Apr", start: "2026-04-18", end: "2026-04-23" },
      { label: "19 Apr - 24 Apr", start: "2026-04-19", end: "2026-04-24" },
      { label: "25 Apr - 30 Apr", start: "2026-04-25", end: "2026-04-30" },
      { label: "26 Apr - 01 May", start: "2026-04-26", end: "2026-05-01" },
      { label: "02 May - 07 May", start: "2026-05-02", end: "2026-05-07" },
      { label: "03 May - 08 May", start: "2026-05-03", end: "2026-05-08" },
      { label: "09 May - 14 May", start: "2026-05-09", end: "2026-05-14" },
      { label: "10 May - 15 May", start: "2026-05-10", end: "2026-05-15" },
      { label: "16 May - 21 May", start: "2026-05-16", end: "2026-05-21" },
      { label: "17 May - 22 May", start: "2026-05-17", end: "2026-05-22" },
      { label: "23 May - 28 May", start: "2026-05-23", end: "2026-05-28" },
      { label: "24 May - 29 May", start: "2026-05-24", end: "2026-05-29" },

    ],

    highlights: [
      "Ancient Himalayan villages: Osla & Gangad",
      "Panoramic views of Swargarohini, Bandarpoonch, Kalanag",
      "Diverse landscapes: forests, meadows, rivers, glaciers"
    ],

    itinerary: [
  {
    day: 1,
    title: "Drive to Sankri | Distance: ~200 km | Time: 7–8 hrs | Altitude: 1,950 m",
    details: "• Your journey to the mountains begins early in the morning from Dehradun. To reach on time, trekkers usually take an overnight bus or train from Delhi to Dehradun ISBT. From here, we start our long yet beautiful drive towards Sankri, the gateway to several iconic treks in the Western Garhwal Himalayas, including Har Ki Dun and Kedarkantha.<br>The drive winds through Mussoorie – the Queen of Hills, where the air turns crisp and pine-scented. As we descend past Kempty Falls and enter the Tons River valley, the landscape changes dramatically — terraced fields, apple orchards, and conifer-covered slopes replace the city bustle. The route passes through small mountain towns like Naugaon, Purola, Mori, and Netwar, each offering a glimpse into the slow, content rhythm of Himalayan life.<br>We stop en route for a hearty mountain-side lunch and continue deeper into the valley. Past Purola, mobile networks fade — only BSNL and Jio work intermittently beyond this point. The final stretch to Sankri is a treat: narrow roads weaving through dense pine forests, the sun flickering through branches, and the Tons River gliding alongside.<br>By early evening, we arrive at Sankri (6,400 ft), a peaceful mountain village nestled amidst apple orchards and snow-capped peaks. From the village, the first views of Swargarohini shimmer in the distance — a hint of what awaits ahead. After freshening up at our cozy guesthouse, you can stroll through the small local market for tea, woollens, or last-minute gear. During winter, Sankri itself often wears a fresh coat of snow — marking the true beginning of your Himalayan adventure."
  },
  {
    day: 2,
    title: "Drive to Gangad – Trek to Seema | Distance: 10 km | Time: 4–5 hrs | Altitude: 2,500 m",
    details: "• Start your day with a warm breakfast amidst crisp mountain air and panoramic Himalayan views — the perfect start before setting off for another memorable day on the trail. After packing up, a short 1.5-hour drive from Sankri takes you to Dhatmeer, the last motorable point before the valley narrows into trekking country. The drive itself is a delight — winding mountain roads, fresh pine-scented breeze, and glimpses of towering peaks set the tone for the adventure ahead.<br>From Dhatmeer, the trek begins on a well-marked trail that meanders through lush cedar and pine forests, with the Supin River glistening below. The air carries the scent of wild herbs and wet earth as you cross small wooden bridges and mountain streams. Along the way lies Gangar, a small Himalayan hamlet where traditional wooden houses and terraced fields reflect the simple, enduring life of the mountains. After a brief rest here, continue a little further to Pawani Garat, your campsite for the night.<br>As the trail climbs gradually, views of Bandarpoonch and the Swargarohini peaks open up, adding grandeur to the landscape. During monsoon, the trail bursts with life — blooming amaranth shrubs painting the slopes in striking red hues, and in spring, meadows carpeted with blue poppies, primulas, and rhododendrons.<br>Set up camp beside the forest clearing, surrounded by oak and pine, with the sound of the Supin River echoing through the valley. Higher up the mountains on the other side of th river you can see the lat village of this valley- Osla. As night falls, the stars appear bright and endless above — a reminder of why the Himalayas feel like home to every trekker who walks these trails."
  },
  {
    day: 3,
    title: "Trek from Seema to Seematra | Distance: 8 km | Time: 5–6 hrs | Altitude: 3,200 m",
    details: "• Today’s trek unfolds through a stunning mix of landscapes — gentle ascents through forests, open meadows, and rolling ridgelines that bring you closer to the heart of the valley. After a while on the trail you reach Seema, a little ahead lies the Seema bridge. Crossing the bridge, the trail gradually climbs through thick stands of pine and oak, opening at intervals to breathtaking views of the surrounding peaks. With every turn, the mountains seem to draw nearer, their snow-laden ridges gleaming under the sun.<br>As you gain altitude, the scenery becomes even more dramatic. The trail winds past scenic vantage points overlooking the mighty Dhauladhar Range, revealing vast expanses of the Himalayan skyline. After a while, the path levels out to a beautiful tabletop meadow known as Kalkattiyadhar — a green oasis perched high above the valley. From here, you can gaze upon the Bugyal Devsu, the Ruinsara Range, and the majestic summits of Black Peak and Kedarkantha in the distance. This is one of those rare places where you’ll want to pause, breathe deeply, and let the stillness of the mountains sink in.<br>Beyond Kalkattiyadhar, the trail continues through lush greenery where the forest teems with life — if you’re lucky, you might spot the Himalayan Monal, Uttarakhand’s state bird, or footprints of a musk deer on soft ground. The mix of gradual climbs and short descents keeps the walk engaging and rhythmic.<br>By afternoon, you’ll arrive at Seematra, a serene high-altitude campsite surrounded by panoramic views of Swargarohini, Bandarpoonch, Kalanag, and Black Peak. As dusk settles, the valley glows under shades of orange and pink, turning the entire landscape into a dreamlike painting. Spend the evening sharing stories around the campsite before resting under a star-filled sky — a perfect end to a truly memorable day."
  },
  {
    day: 4,
    title: "Trek to Har Ki Dun Valley & back | Distance: 14 km | Time: 7–8 hrs | Altitude: 3,566 m",
    details: "• Today marks the most awaited day of the entire trek — the day you finally step into the legendary Har Ki Dun Valley, often called the Valley of the Gods. After a warm breakfast amidst the high mountains, set off early for a long yet deeply rewarding journey through one of the most enchanting landscapes in the Himalayas.<br>The trail begins with a steady climb through alpine meadows, where the early morning sun paints the snow peaks in golden hues. As you gain altitude, the air turns crisper, and snow patches begin to appear, shimmering against the deep green of the valley. You’ll walk through lush meadows and forested slopes, sometimes crossing small glacial streams and boulder-strewn patches. In spring, the route bursts alive with wildflowers — primulas, rhododendrons, and gentians, while in winter, it transforms into a white wonderland straight out of a dream.<br>As the valley opens up, you’ll catch your first breathtaking view of Swargarohini Peak, followed by the grand sight of Hata Peak, Black Peak (Kalanag), and Bandarpoonch standing tall in the distance. Each step forward unveils new panoramas — soaring ridges, icy waterfalls, and endless alpine expanses that seem untouched by time.<br>At the heart of the valley lies a small stone temple dedicated to Lord Shiva, with a sacred Shivling and a statue of Nandi overlooking the mighty peaks. The place holds immense mythological significance — it is believed to be the path taken by the Pandavas on their way to heaven, giving the valley its divine aura and name, Har Ki Dun — “The Valley of the Gods.”<br>Spend some quiet time here, letting the serenity of the valley sink in. Capture the vastness of this heavenly amphitheater, surrounded by snow-clad summits and the murmuring of glacial streams.<br>After immersing yourself in this Himalayan paradise, begin your descent back to Seematra, retracing the same scenic trail. The journey down feels gentler and filled with reflection. By evening, you’ll reach your campsite, where a warm dinner and peaceful night under a starlit sky await — a perfect close to one of the most memorable days of your trek." 
  },
  {
    day: 5,
    title: "Trek to Gangad – Drive to Sankri | Distance: 10 km | Time: 4–5 hrs | Altitude: 1,950 m",
    details: "• We begin our return journey from Seematra, retracing the same scenic trail that once led us deep into the valley. As we descend, the familiar trail feels different in the soft morning light. This time instead od descending to Seema bridge we will trek through the Osla village, where you’ll get a glimpse into its century-old wooden homes and the revered Someshwar Temple, where local culture and traditions are still alive and deeply rooted.<br>Continuing further, we descend down and terk past Pawani Garat to reach Gangad, a charming little hamlet by the riverbank — the perfect spot to pause and soak in the final moments of mountain peace. From here, we board our vehicles and drive back to Sankri, arriving by evening. After a long but fulfilling day, unwind at the guesthouse with a hot meal and cherish the memories of the journey."
  },
  {
    day: 6,
    title: "Departure from Sankri to Dehradun | Distance: ~200 km | Time: 7–8 hrs",
    details: "Today marks the end of a truly memorable Himalayan journey. After an early breakfast, we bid farewell to Sankri and begin our long drive back to Dehradun. The route retraces the same winding mountain roads, passing through pine forests, terraced villages, and lively mountain streams that now feel beautifully familiar.<br>It’s a scenic yet lengthy drive of about 10 hours so an early start helps us make the most of the day. Along the way, enjoy short breaks to stretch and take in the final glimpses of the valley — a last reminder of the wilderness you’ve just explored on foot.<br>By evening, we reach Dehradun late in the evening, marking the conclusion of the trek. As you part ways with the mountains and fellow trekkers, take with you the stories, laughter, and quiet moments that made this journey truly special. Until next time — see you on another trail with Planethimalayas!."
  }
],


    howToReach: {
      air: "<br>• Nearest Airport: Jolly Grant Airport, Dehradun (DED)<br>• Regular flights available from Delhi, Mumbai, Bangalore, and other major cities.Regular flights available from Delhi, Mumbai, Bangalore, and other major cities.<br>• From the airport, you can hire a taxi to Dehradun ISBT or directly to Sankri.",
      train: "<br>• Nearest Railway Station: Dehradun Railway Station<br>• Well connected with major cities like Delhi, Haridwar, Rishikesh, and Lucknow.",
      road: "Dehradun to Sankri (190 km | 8–9 hours)",
      travelTip: "<br>• Private Cab: Can be booked in advance. Costlier but comfortable.<br>• Local Bus: From Dehradun ISBT to Sankri via Purola (limited availability, leaves early morning)."
    },

    didYouKnow: [
  "<b>Har Ki Dun means 'Valley of the Gods'!</b> - Mythology suggests that the Pandavas traversed this valley on their way to heaven via Swargarohini peak, giving the trek spiritual significance.",
  "<b>Osla village worships Duryodhana!</b> - A rare Himalayan custom: the village temple is dedicated to the Kaurava prince, with wooden architecture over 200 years old.",
  "<b>Swargarohini is called the 'stairway to heaven'!</b> - Its snow-clad peaks mark the legendary path of the Pandavas and dominate the skyline throughout the trek.",
  "<b>Ancient Indo-Tibetan trade routes pass here!</b> - Long before trekking tourism, this valley was used by traders and shepherds moving between Uttarakhand, Himachal, and Tibet.",
  "<b>Three distinct climate zones in one trek!</b> - Pine and deodar forests in lower valleys, temperate oak forests mid-way, and alpine meadows with glacial basins near Har Ki Dun.",
  "<b>Govind Pashu Vihar Wildlife Sanctuary</b> - Home to elusive snow leopards, black bears, musk deer, Himalayan Monal, Koklass Pheasant, and dozens of rare alpine flowers, making it a wildlife hotspot.",
  "<b>Rhododendrons, primulas, and gentians bloom along the trail!</b> - In spring, the valley and meadows are painted with vibrant red, pink, purple, and blue hues.",
  "<b>Terraced Himalayan villages:</b> - Osla, Gangad, and Seema showcase centuries-old architecture and traditional agriculture unique to the Garhwal region."
],


    gallery: [
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535105/harkidun-view1_mvk7ru.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535102/harkidun-view2_bmvyqy.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535099/harkidun-view3_cuqmu9.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535098/harkidun-view4_o8psfe.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535093/harkidun-hero1_nwtfqh.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535092/harkidun-view6_tsp4ab.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535088/harkidun-view5_njkqaz.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535084/harkidun-hero_hirxbl.jpg",
    ],
    
    downloadLink: "/docs/Himalayan_Trek_Packing_List.pdf",

    faqs: {
  questions: [
    {
      question: "Who can participate in the Har Ki Dun trek?",
      answer: "This trek is suitable for beginners with moderate fitness and for experienced trekkers looking for a scenic Himalayan experience. The trail involves gradual ascents through forests and meadows, making it ideal for first-time high-altitude trekkers.",
    },
    {
      question: "What is the best time to do the Har Ki Dun trek?",
      answer: "The ideal seasons are May–June and September–October, when the weather is stable, meadows are lush, and peaks like Swargarohini and Bandarpoonch are clearly visible.",
    },
    {
      question: "What essential gear should I carry for the Har Ki Dun trek?",
      answer: "Essential items include waterproof trekking shoes, layered clothing, a 40–50L backpack, thermal wear, rain jacket, trekking poles, and a headlamp. Refer to the packing list PDF above for detailed guidance.",
    },
    {
      question: "Are there camping facilities on the trek?",
      answer: "Yes, overnight camping is arranged at scenic locations along the trek, including Har Ki Dun meadows. Tents, bedding, and meals are provided.",
    },
    {
      question: "Is mobile network coverage available during the trek?",
      answer: "Mobile network coverage is limited. Some areas may have intermittent Airtel or BSNL service, but overall connectivity is unreliable.",
    },
    {
      question: "Do I need any permits for this trek?",
      answer: "No special permits are required for Har Ki Dun as it lies within Uttarakhand state forest areas. The trek operator handles all necessary permissions for camping.",
    },
    {
      question: "What makes the Har Ki Dun trek unique?",
      answer: "Har Ki Dun offers a combination of lush alpine meadows, panoramic views of the Garhwal Himalayas, and opportunities to experience the serene beauty of Uttarakhand’s pristine wilderness.",
    }
  ],
},


    faqsLink: "/faqs-and-articles",
  },

    {
    id: "markha-valley-trek",
    name: "Markha Valley Trek",
    tags: ["pass"],
    difficulty: ["difficult"],
    season: ["monson"],
    month: ["august", "september"],
    region: "ladakh",
    duration: "7 Nights / 8 Days",
    coordinates: [
      [33.970001, 77.260002], // Skiu (start near Leh)
      [33.8644, 77.5826], // Hemis (end near Leh)
    ],

    heroImage: "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535590/markha-valley-hero1_wjsawn.jpg",

    heroImages: ["https://res.cloudinary.com/dr44hob9b/image/upload/v1755535590/markha-valley-hero1_wjsawn.jpg",
                "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535584/markha-valley-hero_yvm2ji.jpg",
                "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535614/markha-valley-view6_cob1jc.jpg",
    ],

    subtitle: "The Classic Trek of Ladakh’s High-Altitude Desert",

    seo: {
      title: "Markha Valley Trek | Itinerary, Cost & Dates | Planethimalayas",
      description: "Markha Valley Trek (17,060 ft) is Ladakh’s most iconic trek, crossing high passes, river crossings, Buddhist monasteries, and dramatic desert landscapes over 8 days."
    },

    overview: {
      facts: [
        { emoji: "⏳", label: "Trek Duration", value: "7 Nights / 8 Days" },
        { emoji: "⚡", label: "Trek Grade", value: "Difficult" },
        { emoji: "🏔️", label: "Max Altitude", value: "17,100 ft (Kongmaru La)" },
        { emoji: "⚡", label: "Trek Distance", value: "55–60 Km" },
        { emoji: "🌤️", label: "Best Time", value: "August to September" },
        { emoji: "🗺️", label: "Region", value: "Markha Valley, Ladakh (Hemis National Park)" },
        { emoji: "📍", label: "Start Point", value: "Skiu (near Leh)" },
        { emoji: "🏁", label: "End Point", value: "Hemis (near Leh)" },
        { emoji: "🧥", label: "Cloakroom facility", value: "Available" },
      ],
      snippet: "Markha Valley Trek is the crown jewel of Ladakh, an unparalleled Himalayan adventure weaving through rugged gorges, remote villages, ancient monasteries, and arid high-altitude deserts. Known as the 'Tea House Trek of Ladakh', this trail combines raw natural landscapes with authentic cultural immersion. Beginning from Leh, the trek passes willow-lined streams, fluttering prayer flags, and centuries-old settlements like Skiu, Markha, and Hankar, where mud houses blend seamlessly with the stark mountains. Trekkers will experience dramatic terrain changes — from barren deserts and rocky gorges to high pastures dotted with wildflowers and grazing yaks. At the highest point, Kongmaru La (17,300 ft), the panoramic views of the Karakoram, Stok, and Kang Yatse ranges are soul-stirring. The trek also offers a glimpse into the unique flora and fauna of the region, including Himalayan marmots, snow leopards (rare), ibex, Himalayan blue poppies, and arid desert shrubs, while immersing in the deep Buddhist heritage with monasteries, prayer wheels, and chortens. Markha Valley Trek is a journey that combines adventure, culture, wildlife, and breathtaking Himalayan scenery — a truly unforgettable Ladakhi experience."
    },

    price: 22500,
    priceNote: "* Leh to Leh",
    addons: {
      transport: null,
      transportNote: "* Trekkers can request transport arrangements from Leh airport to hotel and drop. Transport will be organized on the spot, and costs are to be shared by trekkers directly.",
      offloadingbag: 5000,
      offloadingNote: "* Maximum weight 9kg/bag"
    },

    inclusionsNote: "🍽️ All Meals – Nutritious meals provided from packed lunch on Day 3 to packed lunch on Day 7",

    dates: [
      { label: "08 Aug - 15 Aug", start: "2026-08-08", end: "2025-08-15" },
      { label: "09 Aug - 16 Aug", start: "2026-08-09", end: "2025-08-16" },
      { label: "15 Aug - 22 Aug", start: "2026-08-15", end: "2025-08-22" },
      { label: "16 Aug - 23 Aug", start: "2026-08-16", end: "2025-08-23" },
      { label: "22 Aug - 29 Aug", start: "2026-08-22", end: "2025-08-29" },
      { label: "23 Aug - 30 Aug", start: "2026-08-23", end: "2025-08-30" },
      { label: "29 Aug - 05 Sep", start: "2026-08-29", end: "2025-09-05" },
      { label: "30 Aug - 06 Sep", start: "2026-08-30", end: "2025-09-06" },
      { label: "05 Sep - 12 Sep", start: "2026-09-05", end: "2025-09-12" },
      { label: "06 Sep - 13 Sep", start: "2026-09-06", end: "2025-09-13" },
      { label: "12 Sep - 19 Sep", start: "2026-09-12", end: "2025-09-19" },
      { label: "13 Sep - 20 Sep", start: "2026-09-13", end: "2025-09-20" },
    ],

    highlights: [
      "Explore the heart of Ladakh’s Hemis National Park, home to rare wildlife like the snow leopard",
      "Cross the iconic Kongmaru La (17,100 ft) with breathtaking views of the Karakoram range",
      "Stay in traditional Ladakhi villages with centuries-old mud houses and friendly locals",
      "Walk past ancient monasteries, prayer wheels, and river crossings on wooden bridges",
      "Experience stark contrasts — barren high-altitude deserts and oasis-like settlements",
    ],

    itinerary: [
  {
    day: 1,
    title: "Arrival in Leh (11,500 ft / 3,500 m)",
    details: "• Pickup from Leh airport or bus stand.<br>• Rest day for acclimatization; explore Leh market, Leh Palace, and Shanti Stupa.<br>• Optional short walks in town to feel the high-altitude environment.<br>• Overnight stay in Leh; important to hydrate and rest for high-altitude trek."
  },
  {
    day: 2,
    title: "Acclimatization and Sightseeing in Leh",
    details: "• Visit key monasteries: Shey (former royal palace), Thiksey (Tibetan-style architecture), Hemis (largest monastery in Ladakh), and Sangam (confluence of Indus and Zanskar rivers).<br>• Optional cycling tour in Leh town for acclimatization.<br>• Learn about local Ladakhi culture, prayer rituals, and Tibetan Buddhism.<br>• Overnight in Leh."
  },
  {
    day: 3,
    title: "Leh → Skiu (Drive, 70 km / 2–3 hrs) → Trek to Sara (11,800 ft / 3,600 m)",
    details: "• Drive through the Indus River valley and stop to admire the breathtaking landscape.<br>• Start trekking from Skiu, crossing willow-lined streams, wooden bridges, and fields with barley cultivation.<br>• Observe the ancient mud-brick houses and prayer flags in Skiu and Chilling villages.<br>• Trek 11 km / 5–6 hrs to Sara village, passing remote settlements and watching Himalayan marmots, Himalayan griffon vultures, and arid desert flora.<br>• Camp at Sara amidst the arid high desert with distant snow-capped peaks as backdrop."
  },
  {
    day: 4,
    title: "Sara → Markha Village (12,200 ft / 3,700 m)",
    details: "• Trek 10 km / 5–6 hrs along the Markha River, crossing multiple wooden bridges and small tributaries.<br>• Trail passes through Yak pastures and high desert terrain with sparse vegetation like Caragana shrubs and juniper bushes.<br>• Explore Markha village: centuries-old mud houses, prayer walls, and the local gompa (monastery).<br>• Overnight camp at Markha village with Himalayan panorama, witness the sunset over Stok and Kang Yatse ranges."
  },
  {
    day: 5,
    title: "Markha → Hankar (13,400 ft / 4,080 m)",
    details: "• Trek 13 km / 7–8 hrs through arid desert landscapes with occasional green oases.<br>• Pass remote hamlets and mani walls; encounter grazing yaks and horses.<br>• Gradual ascent to Hankar, where high pastures open views to Stok Kangri, Kang Yatse, and Karakoram ranges.<br>• Overnight camp at Hankar under clear night skies; perfect for stargazing."
  },
  {
    day: 6,
    title: "Hankar → Nimaling (15,800 ft / 4,815 m)",
    details: "• Trek 12 km / 7–8 hrs through high-altitude pastures (la fields) with yak herds and sparse shrubs.<br>• Observe endemic alpine flowers: Himalayan blue poppy, edelweiss, and primulas.<br>• Camp at Nimaling surrounded by Kongmaru La and Kang Yatse peaks; breathtaking sunsets over the Karakoram range.<br>• Optional acclimatization hikes in surrounding meadows."
  },
  {
    day: 7,
    title: "Nimaling → Chokdo via Kongmaru La (17,300 ft / 5,275 m) → Drive to Leh",
    details: "• Early morning trek over Kongmaru La, the highest point of the trek, with 360° views of Karakoram, Stok, and Kang Yatse ranges.<br>• Trek 13 km / 7–8 hrs descending into Chokdo village, crossing streams, glacial moraines, and arid desert terrain.<br>• Drive 60 km / 3 hrs back to Leh.<br>• Overnight stay in Leh; celebrate completion of Markha Valley Trek."
  },
  {
    day: 8,
    title: "Departure from Leh",
    details: "• Drop to Leh airport or bus stand.<br>• Take with you memories of stark high-altitude deserts, glacial streams, mud villages, and Himalayan grandeur."
  }
],


    didYouKnow: [
  "<b>Markha Valley is inside Hemis National Park!</b> - Home to rare species like snow leopards, ibex, Himalayan marmots, and golden eagles.",
  "<b>Tea House Trek of Ladakh:</b> Villages like Skiu, Markha, and Hankar offer homestays where trekkers experience traditional Ladakhi hospitality.",
  "<b>Kongmaru La is 17,300 ft high!</b> - The pass gives sweeping views of the Karakoram, Stok, and Kang Yatse ranges, a rare high-altitude desert panorama.",
  "<b>Ancient monasteries and chortens:</b> The trail is dotted with centuries-old Buddhist structures, prayer walls, and mani stones, reflecting Ladakh's deep spiritual heritage.",
  "<b>Endemic flora and fauna:</b> Look out for Himalayan blue poppies, edelweiss, primulas, yaks, ibex, and high-altitude Himalayan marmots.",
  "<b>Arid cold desert ecosystem:</b> Unique in the Himalayas, the Markha Valley features barren rocky gorges and oasis-like green pastures where life adapts to extreme altitude and dryness.",
  "<b>Traditional Ladakhi architecture:</b> Mud houses and wooden structures have survived centuries of harsh winters while blending sustainably with the environment.",
  "<b>High-altitude river crossings:</b> The trek crosses multiple streams and tributaries of the Markha River; bridges and rocky fords offer adventure and scenic photography opportunities."
],


    howToReach: {
      air: "Nearest Airport: Kushok Bakula Rimpochee Airport, Leh (well connected to Delhi and major Indian cities).",
      train: "No direct trains. Nearest station: Jammu Tawi (approx. 700 km). Continue by road or flight to Leh.",
      road: "From Manali: 470 km / 2 days via Manali–Leh Highway. From Srinagar: 420 km / 2 days via Srinagar–Leh Highway.",
      travelTip: "Arrive in Leh at least 2 days before the trek for proper acclimatization to avoid altitude sickness.",
    },

    gallery: [
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535621/markha-valley-view3_ghyqx6.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535616/markha-valley-view5_cyek8v.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535614/markha-valley-view6_cob1jc.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535612/markha-valley-view4_hhjdvd.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535608/markha-valley-view7_fwjqd8.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535606/markha-valley-view9_adspc2.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535604/markha-valley-view8_frpdcl.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535600/markha-valley-view2_pkja6f.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535598/markha-valley-view13_ra6l59.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535597/markha-valley-view12_c36aaf.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535592/markha-valley-view11_mcf7g4.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535590/markha-valley-hero1_wjsawn.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535586/markha-valley-view10_xovktb.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535584/markha-valley-view1_regn76.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535584/markha-valley-hero_yvm2ji.jpg",
    ],

    downloadLink: "/docs/Himalayan_Trek_Packing_List.pdf",

    faqs: {
  questions: [
    {
      question: "Who can participate in the Markha Valley trek?",
      answer: "This trek is suitable for intermediate trekkers with basic high-altitude experience. While the trails are moderate, some days involve long distances and high-altitude camping.",
    },
    {
      question: "What is the best season for the Markha Valley trek?",
      answer: "The ideal months are June to September, avoiding the heavy snowfall of winter and the extreme cold of early spring. During this period, the valley is lush, rivers are flowing, and skies are generally clear.",
    },
    {
      question: "What essential gear should I carry for the Markha Valley trek?",
      answer: "Essentials include waterproof trekking boots, layered clothing, warm jacket, trekking poles, 40–50L backpack, thermal wear, and a headlamp. Refer to the downloadable PDF for a detailed packing list.",
    },
    {
      question: "Are camping facilities available on the trek?",
      answer: "Yes, the trek involves camping at scenic locations in Markha Valley, with tents, bedding, and nutritious meals provided by the trek organizers.",
    },
    {
      question: "Is mobile network coverage available during the trek?",
      answer: "Network coverage is extremely limited. Occasionally, BSNL and Airtel may work in Leh or at certain high points, but trekkers should plan for minimal connectivity.",
    },
    {
      question: "Do I need any permits for the Markha Valley trek?",
      answer: "Yes, trekkers require an Inner Line Permit (ILP) for restricted areas of Ladakh. Trek operators typically arrange these permits on behalf of the participants.",
    },
    {
      question: "What makes the Markha Valley trek unique?",
      answer: "Markha Valley offers a combination of pristine Himalayan landscapes, traditional Ladakhi villages, gompas (monasteries), and breathtaking views of the Stok and Kang Yatse peaks. The cultural immersion alongside high-altitude trekking makes it a truly memorable adventure.",
    }
  ],
},


    faqsLink: "/faqs-and-articles",
  },

  {
  id: "kuari-pass-trek",
  name: "Kuari Pass Trek",
  tags: ["beginner"],
  difficulty: ["easy", "moderate"],
  season: ["winter", "spring", "autumn"],
  month: ["september", "october", "november", "december", "january", "february", "march", "april"],
  region: "uttarakhand",
  duration: "5 Nights / 6 Days",
  coordinates: [
    [30.5561, 79.5617], // Joshimath (base)
    [30.48226, 79.5981], 
    [30.4755, 79.6151], // Kuari Pass summit
  ],

  heroImage: "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535437/kuari-pass-view13_iafpu5.jpg",

  heroImages: [
              "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535420/kuari-pass-view9_iv5fwk.jpg",
              "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535437/kuari-pass-view13_iafpu5.jpg",
              "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535468/kuari-pass-view18_omgk4v.jpg",
              "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535454/kuari-pass-view4_te0tbe.jpg",
  ],

    subtitle: "The Lord Curzon Trail with Iconic Himalayan Views",

  seo: {
  title: "Kuari Pass Trek | Itinerary, Cost & Dates | Planethimalayas",
  description: "Kuari Pass Trek (12,516 ft), also called the Lord Curzon Trail, offers unbeatable views of Nanda Devi, Dronagiri, and Kamet peaks. A 6-day trek through oak forests and alpine meadows."
},

  overview: {
    facts: [
      { emoji: "⏳", label: "Trek Duration", value: "5 Nights / 6 Days" },
      { emoji: "⚡", label: "Trek Grade", value: "Easy to Moderate" },
      { emoji: "🏔️", label: "Max Altitude", value: "12,516 ft (Kuari Pass)" },
      { emoji: "⚡", label: "Trek Distance", value: "30–35 Km" },
      { emoji: "🌤️", label: "Best Time", value: "November to April" },
      { emoji: "🗺️", label: "Region", value: "Garhwal Himalayas, Uttarakhand" },
      { emoji: "📍", label: "Start Point", value: "Joshimath" },
      { emoji: "🏁", label: "End Point", value: "Joshimath" },
      { emoji: "🧥", label: "Cloakroom Facility", value: "Available" },
    ],
    snippet: `The Kuari Pass Trek — often called the legendary Lord Curzon Trail — is a journey straight into the grand amphitheater of the Garhwal Himalayas. It begins quietly above Joshimath, where ancient oak, deodar, and fiery-red rhododendron forests form a living cathedral of light and shadow. As you climb gently through these old woods, the trail suddenly opens into the rolling grasslands of Chitrakantha and Gorson Bugyal, vast alpine meadows that glow gold in autumn, burst with wildflowers in spring, and transform into pristine snowfields through winter.

<br>It’s here that Kuari Pass shows its real magic — a skyline so dramatic and so close that it feels like the mountains are leaning in to greet you. Nanda Devi, India’s highest accessible peak, rises in unmatched elegance alongside Chaukhamba, Dronagiri, Kamet, Neelkanth, and the twin massifs of Hathi–Ghodi Parvat. Nowhere else in Uttarakhand does such a majestic parade of 6,000–7,000 m summits reveal itself so openly and so continuously.

<br>The trail winds through quiet shepherd settlements and age-old grazing routes, where the scent of juniper hangs in the air and the bells of distant mules echo softly across the valleys. You walk through the buffer zone of the Nanda Devi Biosphere Reserve, a UNESCO World Heritage region alive with Himalayan monals, lammergeiers, and rare high-altitude flora that thrive in this protected wilderness.

<br>In winter, Kuari Pass becomes one of India’s most beautiful snow treks — a sparkling world of powder-white slopes, frozen streams, and crisp blue skies framed by some of the most iconic peaks of the Indian Himalayas. In spring and autumn, it turns gentle and colorful, offering long, peaceful walks across open ridgelines and sunlit meadows.

<br>Accessible, rewarding, and rich in both natural grandeur and mountain culture, the Kuari Pass Trek is not just a high-altitude adventure — it’s a graceful introduction to the soul of the Himalayas, a journey where every step reminds you why these mountains have inspired explorers for over a century.`  },

  price: 10900,
  priceNote: "* Joshimath to Joshimath",
  addons: {
    transport: 3000,
    offloadingbag: 1800,
    transportNote: "* Rishikesh to Rishikesh",
    offloadingNote: "* Maximum weight 9kg/bag"
  },

  inclusionsNote: "🍽️ All Meals – From packed lunch on Day 2 to breakfast on Day 6",

  dates: [
    
    
    { label: "22 Nov - 27 Nov", start: "2025-11-22", end: "2025-11-27" },
    { label: "23 Nov - 28 Nov", start: "2025-11-23", end: "2025-11-28" },
    { label: "24 Nov - 29 Nov", start: "2025-11-24", end: "2025-11-29" },
    { label: "29 Nov - 04 Dec", start: "2025-11-29", end: "2025-12-04" },
    { label: "30 Nov - 05 Dec", start: "2025-11-30", end: "2025-12-05" },
    { label: "01 Dec - 06 Dec", start: "2025-12-01", end: "2025-12-06" },
    { label: "06 Dec - 11 Dec", start: "2025-12-06", end: "2025-12-11" },
    { label: "07 Dec - 12 Dec", start: "2025-12-07", end: "2025-12-12" },
    { label: "08 Dec - 13 Dec", start: "2025-12-08", end: "2025-12-13" },
    { label: "13 Dec - 18 Dec", start: "2025-12-13", end: "2025-12-18" },
    { label: "14 Dec - 19 Dec", start: "2025-12-14", end: "2025-12-19" },
    { label: "15 Dec - 20 Dec", start: "2025-12-15", end: "2025-12-20" },
    { label: "20 Dec - 25 Dec", start: "2025-12-20", end: "2025-12-25" },
    { label: "21 Dec - 26 Dec", start: "2025-12-21", end: "2025-12-26" },
    { label: "22 Dec - 27 Dec", start: "2025-12-22", end: "2025-12-27" },
    { label: "27 Dec - 01 Jan", start: "2025-12-27", end: "2026-01-01" },
    { label: "28 Dec - 02 Jan", start: "2025-12-28", end: "2026-01-02" },
    { label: "29 Dec - 03 Jan", start: "2025-12-29", end: "2026-01-03" },
    { label: "03 Jan - 08 Jan", start: "2026-01-03", end: "2026-01-08" },
    { label: "04 Jan - 09 Jan", start: "2026-01-04", end: "2026-01-09" },
    { label: "05 Jan - 10 Jan", start: "2026-01-05", end: "2026-01-10" },
    { label: "10 Jan - 15 Jan", start: "2026-01-10", end: "2026-01-15" },
    { label: "11 Jan - 16 Jan", start: "2026-01-11", end: "2026-01-16" },
    { label: "12 Jan - 17 Jan", start: "2026-01-12", end: "2026-01-17" },
    { label: "17 Jan - 22 Jan", start: "2026-01-17", end: "2026-01-22" },
    { label: "18 Jan - 23 Jan", start: "2026-01-18", end: "2026-01-23" },
    { label: "19 Jan - 24 Jan", start: "2026-01-19", end: "2026-01-24" },
    { label: "24 Jan - 29 Jan", start: "2026-01-24", end: "2026-01-29" },
    { label: "25 Jan - 30 Jan", start: "2026-01-25", end: "2026-01-30" },
    { label: "26 Jan - 31 Jan", start: "2026-01-26", end: "2026-01-31" },
    { label: "31 Jan - 05 Feb", start: "2026-01-31", end: "2026-02-05" },
    { label: "01 Feb - 06 Feb", start: "2026-02-01", end: "2026-02-06" },
    { label: "02 Feb - 07 Feb", start: "2026-02-02", end: "2026-02-07" },
    { label: "07 Feb - 12 Feb", start: "2026-02-07", end: "2026-02-12" },
    { label: "08 Feb - 13 Feb", start: "2026-02-08", end: "2026-02-13" },
    { label: "09 Feb - 14 Feb", start: "2026-02-09", end: "2026-02-14" },
    { label: "14 Feb - 19 Feb", start: "2026-02-14", end: "2026-02-19" },
    { label: "15 Feb - 20 Feb", start: "2026-02-15", end: "2026-02-20" },
    { label: "16 Feb - 21 Feb", start: "2026-02-16", end: "2026-02-21" },
    { label: "21 Feb - 26 Feb", start: "2026-02-21", end: "2026-02-26" },
    { label: "22 Feb - 27 Feb", start: "2026-02-22", end: "2026-02-27" },
    { label: "23 Feb - 28 Feb", start: "2026-02-23", end: "2026-02-28" },
    { label: "28 Feb - 05 Mar", start: "2026-02-28", end: "2026-03-05" },
    { label: "01 Mar - 06 Mar", start: "2026-03-01", end: "2026-03-06" },
    { label: "02 Mar - 07 Mar", start: "2026-03-02", end: "2026-03-07" },
    { label: "07 Mar - 12 Mar", start: "2026-03-07", end: "2026-03-12" },
    { label: "08 Mar - 13 Mar", start: "2026-03-08", end: "2026-03-13" },
    { label: "09 Mar - 14 Mar", start: "2026-03-09", end: "2026-03-14" },
    { label: "14 Mar - 19 Mar", start: "2026-03-14", end: "2026-03-19" },
    { label: "15 Mar - 20 Mar", start: "2026-03-15", end: "2026-03-20" },
    { label: "16 Mar - 21 Mar", start: "2026-03-16", end: "2026-03-21" },
    { label: "21 Mar - 26 Mar", start: "2026-03-21", end: "2026-03-26" },
    { label: "22 Mar - 27 Mar", start: "2026-03-22", end: "2026-03-27" },
    { label: "23 Mar - 28 Mar", start: "2026-03-23", end: "2026-03-28" },
    { label: "28 Mar - 02 Apr", start: "2026-03-28", end: "2026-04-02" },
    { label: "29 Mar - 03 Apr", start: "2026-03-29", end: "2026-04-03" },
    { label: "30 Mar - 04 Apr", start: "2026-03-30", end: "2026-04-04" },
    { label: "04 Apr - 09 Apr", start: "2026-04-04", end: "2026-04-09" },
    { label: "05 Apr - 10 Apr", start: "2026-04-05", end: "2026-04-10" },
    { label: "06 Apr - 11 Apr", start: "2026-04-06", end: "2026-04-11" },
    { label: "11 Apr - 16 Apr", start: "2026-04-11", end: "2026-04-16" },
    { label: "12 Apr - 17 Apr", start: "2026-04-12", end: "2026-04-17" },
    { label: "13 Apr - 18 Apr", start: "2026-04-13", end: "2026-04-18" },
    { label: "18 Apr - 23 Apr", start: "2026-04-18", end: "2026-04-23" },
    { label: "19 Apr - 24 Apr", start: "2026-04-19", end: "2026-04-24" },
    { label: "20 Apr - 25 Apr", start: "2026-04-20", end: "2026-04-25" },
    { label: "25 Apr - 30 Apr", start: "2026-04-25", end: "2026-04-30" },
    { label: "26 Apr - 01 May", start: "2026-04-26", end: "2026-05-01" },
    { label: "27 Apr - 02 May", start: "2026-04-27", end: "2026-05-02" },
  ],

  highlights: [
    "Panoramic views of India’s highest peak Nanda Devi and surrounding Himalayan giants like Donagiri, Hathi-Ghodi, Kamet, Nandakhat, etc.",
    "Walk through enchanting oak, deodar, and rhododendron forests",
    "Snow-covered meadows in winter that look like a white carpet stretching to the horizon",
    "Stunning sunrise and sunset views over Mt. Dronagiri",
    "A historic trail once traversed by Lord Curzon in the early 1900s",
  ],

  itinerary: [
  { 
    day: 1, 
    title: "Rishikesh to Joshimath (6,700 ft)", 
    details: "<strong>• Drive distance: 250 km / 10-11 hrs.</strong><br>• Your road journey today follows the beautiful Badrinath highway, one of the most scenic routes in Uttarakhand. Though it’s a long 9–10 hour drive to Joshimath, every stretch of the road offers something mesmerizing — from quiet mountain villages to sweeping views of deep valleys and fast-flowing rivers. For most of the drive, the Alaknanda River will be your constant companion. At first, it flows gently beside the road, but as you gain altitude, it grows wilder and more dramatic, carving its way fiercely through steep gorges. The changing moods of the river make this journey feel alive and full of energy. Along the way, you’ll cross the four sacred Prayags, each a holy confluence of rivers that eventually form the Ganga. Devprayag marks the meeting of the Alaknanda and Bhagirathi, where the Ganga officially begins her journey. Rudraprayag follows, where the Mandakini joins in; then Karnaprayag, where the Pindar River merges; and finally Nandaprayag, where the Nandakini meets the Alaknanda. Each of these spots is breathtaking in its own way — places where spirituality and nature blend seamlessly. Though the drive is long, it never feels dull. The scenery keeps shifting — emerald forests, distant snow peaks, hanging bridges, and small hillside temples — all adding to the charm of the Himalayas. Keep your camera handy." 
  },
  { 
    day: 2, 
    title: "Drive from Joshimath to Tugashi (8000 ft) → Trek to Guling Top (9,400 ft)", 
    details: "<strong>• Drive 15 km | Trek 3 km / 2–3 hrs.</strong><br>• Drive from Joshimath to Tugashi, Your trek begins here, a quiet little mountain village surrounded by terraced fields and traditional Garhwali homes. The trail from here is a mix of gentle and steep climbs, gradually leading you away from village life and into the raw beauty of the mountains. The first stretch winds through farmlands — neat terraces where locals grow potatoes, rajma, and barley. While the lower slopes may seem modest in greenery, the views open up quickly. Far below, the Dhauli Ganga River glimmers like a silver ribbon, and in the distance, you can spot the Vishnugad–Tapovan Hydroelectric Project, reminding you how civilization still lingers in these wild spaces. As you climb higher, the trail grows steeper, but so does the reward. The first glimpse of Dronagiri Peak appears dramatically across the valley — its sharp ridges glowing in the mountain light. It’s one of those moments that stays with you — when the Himalayas suddenly feel close and alive. The final stretch to Gulling Top takes you through patches of forest that slowly open into wide meadows. By the time you reach the campsite, you’re surrounded by grand Himalayan peaks — Dronagiri, Hathi Parvat, Gauri Parvat, and Brahmal Peak — all standing tall against the sky. As the sun dips behind the ridges, the meadows turn golden, and a deep calm settles over the oak forests around. It’s the perfect way to end your first day — with tired legs, a full heart, and the quiet company of the mountains." 
  },
  { 
    day: 3, 
    title: "Guling to Khullara (11,070 ft)", 
    details: "<strong>• Trek 6 km / 5 hrs.</strong><br>• The trail today ascends gradually through a dense forest of oak, rhododendron, and birch, where sunlight filters through the trees and paints the ground in shifting shades of green. In spring and summer, the path comes alive with wildflowers blooming along the way, adding color to the quiet wilderness. Small streams and ridges appear at intervals, offering short breaks and sweeping glimpses of distant snow-covered peaks. The forest feels alive — filled with the natural rhythm of the mountains. You’ll hear rivulets murmuring, birds calling, and the rustle of leaves stirred by curious monkeys. Look closely, and you might spot sunbirds, woodpeckers, or even rare Himalayan herbs growing quietly by the trail. After several hours of walking under the thick canopy, the trees suddenly thin out, giving way to dwarf rhododendrons — a sure sign that you’re nearing the alpine zone. Soon, the landscape opens into the stunning Tali Meadows — a vast, undulating expanse surrounded by towering peaks. By the time you reach the Tali campsite, the views are nothing short of magical. In every direction rise the great Himalayan giants — Dronagiri, Kamet, Hathi–Ghodi, Nanda Ghunti, Nanda Devi — glowing golden at sunset and silver under the moonlight. Stay up a little late if the sky is clear — this is one of the best places in the region to witness a breathtaking canopy of stars, spread endlessly above the meadows." 
  },
  { 
  day: 4, 
  title: "Khullara to Tali (11,060 ft) via Kuari Pass (12,516 ft)", 
  details: "<strong>• Trek 11 km / 7–8 hrs.</strong><br>• This is the most exhilarating day of the Kuari Pass trek — where the true high-altitude adventure begins. The trail from Khullara climbs steadily above the tree line, leading you into the vast alpine world of sweeping ridges and endless Himalayan views. Within about an hour, you’ll gain the high ridge section of the legendary Lord Curzon Trail. From here, the horizon explodes with grandeur — Mt. Chaukhamba, Neelkanth, Dronagiri, Nilgiri, Hathi–Ghoda Parvat, Trishul, and even distant glimpses of Nanda Devi shimmer under the blue sky. The ridge walk continues to the upper meadows of Kuari Pass — where a small shrine marks the top. Just beyond lies Pangarchulla Peak, one of the most exciting and challenging spring summit climbs in the Garhwal Himalayas.<br><br>From here, a gentle climb leads to Kuari Top — the highest vantage point, offering a 270° panoramic view of the Himalayan range. The actual pass lies further down at a small depression. After soaking in the magnificent scenery, retrace your steps back to the ridge and continue walking ahead toward Jhandi Top. The narrow ridge feels like the very spine of the mountains, before gently descending through the enchanting Chitrakantha meadows. As the forest returns, the trail winds through ancient oaks, pines, and dwarf rhododendrons, with sunlight streaming through the canopy. Finally, you’ll reach Tali — a quiet forest campsite surrounded by tall trees, perfect for a peaceful night after a rewarding climb.<br><br><strong>Note for Winter Trekkers:</strong> In peak winter, after heavy snowfall, the trail beyond Kuari Pass toward Tali and Gorson Bugyal is often closed. This section involves traversing a narrow, exposed ledge that becomes icy and dangerously slippery. For participant safety, the return route from Kuari Pass goes back to Khullara instead of continuing to Tali during such conditions."
},
{ 
  day: 5, 
  title: "Tali to Auli (9,186 ft) → Drive to Joshimath (12 km)", 
  details: "<strong>• Trek 8 km / 6 hrs.</strong><br>• Begin your day with a serene walk toward Tali Lake — a small alpine pond nestled amidst tall oaks and pines. As you rise above the treeline, the grand panorama of Nanda Devi and the surrounding peaks unfolds once again. From the lake, a steep climb takes you to the thrilling cliffside traverse — a narrow ledge walk overlooking the Tugasi valley far below. This adventurous stretch soon leads to the open meadows of Gorson Bugyal, among the most picturesque in all of Garhwal. Walking through Gorson’s rolling slopes, you’re treated to sweeping Himalayan views and soft mountain breezes. The descent from here takes you through Padiyar Temple and into Auli, marking the end of your incredible Himalayan journey. From Auli, a short drive brings you back to Joshimath for an overnight stay in a cozy guesthouse.<br><br><strong>Winter Route Update:</strong> When the Tali–Gorson trail is inaccessible due to heavy snowfall, trekkers return the same way they came — from Khullara back to Joshimath. This alternate descent through the familiar forest route ensures both safety and comfort while still offering enchanting winter views of the Garhwal Himalayas."
},
  { 
    day: 6, 
    title: "Departure from Joshimath", 
    details: "• Drive back to Rishikesh/Haridwar, passing through terraced fields, alpine forests, and scenic valleys. The journey offers a final glimpse of the majestic Himalayan ranges and the lush Mandakini Valley. Trip concludes with memories of Kuari Pass, its diverse landscapes, local culture, and natural beauty."
  }
],


  didYouKnow: [
    "Kuari Pass was first popularized by Lord Curzon in 1905, giving it the nickname 'Curzon Trail'.",
    "Kuari Pass falls within the buffer zone of the Nanda Devi Biosphere Reserve, a UNESCO World Heritage Site. While trekkers don’t enter the restricted core of Nanda Devi National Park, the trail still offers glimpses of its unique alpine ecosystem.",
    "The Nanda Devi Biosphere Reserve is home to rare species like the Himalayan musk deer, snow leopard, and Himalayan monal (the state bird of Uttarakhand).",
    "On clear days, you can spot India’s highest peak Nanda Devi (25,643 ft) and as many as 12 other 7,000m summits.",
    "Gorson Bugyal, a vast alpine meadow en route, turns into a ski paradise in winter.",
    "Local folklore says Kuari Pass was once a traditional shepherd’s route connecting villages across the valleys.",
  ],

  howToReach: {
    air: "Nearest Airport: Jolly Grant Airport, Dehradun (approx. 270 km from Joshimath).",
    train: "Nearest major railway station: Haridwar (approx. 280 km from Joshimath).",
    road: "Regular buses and shared cabs available from Rishikesh/Haridwar to Joshimath (9–10 hrs).",
    travelTip: "Arrive a day early in Joshimath for acclimatization and to buffer against delays on mountain roads.",
  },

  gallery: [
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535468/kuari-pass-view18_omgk4v.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535465/kuari-pass-view2_oxhgmd.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535460/kuari-pass-view17_zymig5.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535458/kuari-pass-view1_expcd5.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535457/kuari-pass-view19_qn2urg.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535457/kuari-pass-view15_gp5aep.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535454/kuari-pass-view4_te0tbe.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535452/kuari-pass-view10_dsyc7e.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535446/kuari-pass-view7_jbvh7a.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535445/kuari-pass-view16_rmowmz.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535441/kuari-pass-hero_i7brif.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535439/kuari-pass-view5_u9r93l.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535437/kuari-pass-view13_iafpu5.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535436/kuari-pass-view6_hqdpax.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535431/kuari-pass-view14_a6n2br.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535429/kuari-pass-view12_hob7q5.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535429/kuari-pass-hero1_sho7ie.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535429/kuari-pass-view3_inyksi.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535421/kuari-pass-view11_c1d51c.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535420/kuari-pass-view9_iv5fwk.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535419/kuari-pass-view8_sso7sa.jpg",

  ],

  downloadLink: "/docs/Himalayan_Trek_Packing_List.pdf",

  faqs: {
  questions: [
    {
      question: "Who can participate in the Kuari Pass trek?",
      answer: "The Kuari Pass trek is meant for everyone — whether you're stepping into the Himalayas for the first time or are a seasoned trekker seeking a refreshing experience. With moderate slopes, easy accessibility, and a comfortable altitude profile, it’s ideal for first-timers while remaining equally rewarding for experienced trekkers who enjoy panoramic trails and classic Himalayan landscapes.",
    },
    {
      question: "What is the best season for the Kuari Pass trek?",
      answer: "The Kuari Pass trek is beautiful across three main seasons. In spring (April–June), the trail comes alive with blooming rhododendrons, fresh meadows, and clear views of Nanda Devi and Dronagiri. Autumn (September–November) offers golden forests, crisp air, and unmatched mountain clarity. Winter (December–March) transforms the trail into a snow-covered wonderland — perfect for trekkers who wish to experience the charm of the Himalayas in their quietest and most magical form.",
    },
    {
      question: "What essential gear should I carry for the Kuari Pass trek?",
      answer: "Essentials include sturdy trekking shoes, layered clothing, rain jacket, 40–50L backpack, thermal wear, trekking poles, and a headlamp. A detailed packing list is available in the PDF above.",
    },
    {
      question: "What are the temperature levels during different seasons on the Kuari Pass trek?",
      answer: "In spring (April–June), daytime temperatures range between 10°C to 18°C, with chilly nights dropping to around 0°C. During autumn (September–November), expect pleasant days between 8°C to 15°C and cold nights around -2°C to 3°C. Winter (December–March) brings snow and sub-zero conditions — daytime temperatures hover around 0°C to 5°C, while nights can fall as low as -8°C to -10°C, offering a true Himalayan winter experience.",
    },
    {
      question: "Are camping facilities available on the trek?",
      answer: "Yes, overnight camping is organized at scenic spots along the trek route, with tents, bedding, and meals provided.",
    },
    {
      question: "Is mobile network coverage available during the trek?",
      answer: "Network coverage is limited. Airtel and BSNL may work intermittently, but connectivity is generally unreliable.",
    },
    {
      question: "Do I need any permits for the Kuari Pass trek?",
      answer: "No special permits are required for Kuari Pass, as it is within the forest areas of Uttarakhand. The trek operator manages all camping arrangements and permissions.",
    },
    {
      question: "What makes the Kuari Pass trek unique?",
      answer: "Kuari Pass offers spectacular and close-up panoramic views of the highest peaks of Uttarakhand like Nanda Devi, Chaukhamba, Hathi-Ghodi, Neelkanth, Kamet, Dronagiri and many more. The trek combines pristine forests, and colorful meadows, making it a favorite for photography enthusiasts and nature lovers.",
    }
  ],
},


  faqsLink: "/faqs-and-articles",
},

{
  id: "kedarkantha-trek",
  name: "Kedarkantha Trek",
  tags: ["beginner"],
  difficulty: ["easy", "moderate"],
  season: ["winter", "spring", "autumn"],
  month: ["september", "october", "november", "december", "january", "february", "march", "april"],
  region: "uttarakhand",
  duration: "5 Nights / 6 Days",
  coordinates: [
    [31.0362, 78.1746], // Sankri (base)
    [31.0837, 78.2167], // Kedarkantha summit
  ],

  heroImage: "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535492/kedarkantha-hero_afsxo1.jpg",

  heroImages: ["https://res.cloudinary.com/dr44hob9b/image/upload/v1755535492/kedarkantha-hero_afsxo1.jpg",
              "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535489/kedarkantha-view4_uf3aor.jpg",
              "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535483/kedarkantha-view5_us9lve.jpg",
  ],
  
    subtitle: "The Quintessential Himalayan Winter Trek",

  seo: {
  title: "Kedarkantha Trek | Itinerary, Cost & Dates | Planethimalayas",
  description: "Kedarkantha Trek (12,500 ft) is Uttarakhand’s most popular winter trek, with pine forests, clearings, and a rewarding 360° summit climb. A perfect 6-day beginner-friendly Himalayan trek."
},

  overview: {
    facts: [
      { emoji: "⏳", label: "Trek Duration", value: "5 Nights / 6 Days" },
      { emoji: "⚡", label: "Trek Grade", value: "Easy to Moderate" },
      { emoji: "🏔️", label: "Max Altitude", value: "12,500 ft (Kedarkantha Summit)" },
      { emoji: "⚡", label: "Trek Distance", value: "20–22 Km" },
      { emoji: "🌤️", label: "Best Time", value: "November to April (Best Winter Snow Trek)" },
      { emoji: "🗺️", label: "Region", value: "Govind Pashu Vihar National Park, Uttarkashi, Uttarakhand" },
      { emoji: "📍", label: "Start Point", value: "Sankri" },
      { emoji: "🏁", label: "End Point", value: "Sankri" },
      { emoji: "🧥", label: "Cloakroom Facility", value: "Available" },
    ],
    snippet: `The Kedarkantha Trek is where winter in the Himalayas feels truly alive. Beginning from the charming wooden village of Sankri, the trail climbs through silent forests of pine, maple, and oak, each turn opening into wider views of snow-brushed ridgelines and distant white summits. As you move higher, the landscape transforms dramatically — frozen streams, ancient trees heavy with fresh powder, and long rolling meadows that glow under winter sun.

<br>Midway lies the serene lake of Juda Ka Talab, a still sheet of ice in the heart of dense alpine woods. Beyond it, the terrain rises gently toward the open slopes of Kedarkantha Base, one of the most breathtaking winter campsites in Uttarakhand. Nights here are unforgettable — crisp air, bright constellations, and the silence of untouched snow all around you.

<br>The final climb to the Kedarkantha summit is the moment every trekker waits for. At 12,500 ft, the world opens into a sweeping Himalayan panorama: the Swargarohini group, Bandarpoonch, Black Peak, and the valleys of Har Ki Dun and Rupin stretching deep into the distance. With sunrise lighting up the peaks in fiery orange, the summit feels less like a mountain top and more like a place suspended between earth and sky.

<br>Balanced in difficulty and rich in reward, Kedarkantha is a winter trek that blends gentle adventure with unforgettable Himalayan drama — the perfect journey for anyone dreaming of snow-covered forests, wide mountain views, and an intimate connection with the winter wilderness.`
  },

  price: 10500,
  priceNote: "* Sankri to Sankri",
  addons: {
    transport: 3000,
    offloadingbag: 1800,
    transportNote: "* Dehradun to Dehradun",
    offloadingNote: "* Maximum weight 9kg/bag",
  },

  inclusionsNote: "🍽️ All Meals – From dinner on Day 1 to breakfast on Day 6",

  dates: [
    
    
    { label: "22 Nov - 27 Nov", start: "2025-11-22", end: "2025-11-27" },
    { label: "23 Nov - 28 Nov", start: "2025-11-23", end: "2025-11-28" },
    { label: "24 Nov - 29 Nov", start: "2025-11-24", end: "2025-11-29" },
    { label: "29 Nov - 04 Dec", start: "2025-11-29", end: "2025-12-04" },
    { label: "30 Nov - 05 Dec", start: "2025-11-30", end: "2025-12-05" },
    { label: "01 Dec - 06 Dec", start: "2025-12-01", end: "2025-12-06" },
    { label: "06 Dec - 11 Dec", start: "2025-12-06", end: "2025-12-11" },
    { label: "07 Dec - 12 Dec", start: "2025-12-07", end: "2025-12-12" },
    { label: "08 Dec - 13 Dec", start: "2025-12-08", end: "2025-12-13" },
    { label: "13 Dec - 18 Dec", start: "2025-12-13", end: "2025-12-18" },
    { label: "14 Dec - 19 Dec", start: "2025-12-14", end: "2025-12-19" },
    { label: "15 Dec - 20 Dec", start: "2025-12-15", end: "2025-12-20" },
    { label: "20 Dec - 25 Dec", start: "2025-12-20", end: "2025-12-25" },
    { label: "21 Dec - 26 Dec", start: "2025-12-21", end: "2025-12-26" },
    { label: "22 Dec - 27 Dec", start: "2025-12-22", end: "2025-12-27" },
    { label: "27 Dec - 01 Jan", start: "2025-12-27", end: "2026-01-01" },
    { label: "28 Dec - 02 Jan", start: "2025-12-28", end: "2026-01-02" },
    { label: "29 Dec - 03 Jan", start: "2025-12-29", end: "2026-01-03" },
    { label: "03 Jan - 08 Jan", start: "2026-01-03", end: "2026-01-08" },
    { label: "04 Jan - 09 Jan", start: "2026-01-04", end: "2026-01-09" },
    { label: "05 Jan - 10 Jan", start: "2026-01-05", end: "2026-01-10" },
    { label: "10 Jan - 15 Jan", start: "2026-01-10", end: "2026-01-15" },
    { label: "11 Jan - 16 Jan", start: "2026-01-11", end: "2026-01-16" },
    { label: "12 Jan - 17 Jan", start: "2026-01-12", end: "2026-01-17" },
    { label: "17 Jan - 22 Jan", start: "2026-01-17", end: "2026-01-22" },
    { label: "18 Jan - 23 Jan", start: "2026-01-18", end: "2026-01-23" },
    { label: "19 Jan - 24 Jan", start: "2026-01-19", end: "2026-01-24" },
    { label: "24 Jan - 29 Jan", start: "2026-01-24", end: "2026-01-29" },
    { label: "25 Jan - 30 Jan", start: "2026-01-25", end: "2026-01-30" },
    { label: "26 Jan - 31 Jan", start: "2026-01-26", end: "2026-01-31" },
    { label: "31 Jan - 05 Feb", start: "2026-01-31", end: "2026-02-05" },
    { label: "01 Feb - 06 Feb", start: "2026-02-01", end: "2026-02-06" },
    { label: "02 Feb - 07 Feb", start: "2026-02-02", end: "2026-02-07" },
    { label: "07 Feb - 12 Feb", start: "2026-02-07", end: "2026-02-12" },
    { label: "08 Feb - 13 Feb", start: "2026-02-08", end: "2026-02-13" },
    { label: "09 Feb - 14 Feb", start: "2026-02-09", end: "2026-02-14" },
    { label: "14 Feb - 19 Feb", start: "2026-02-14", end: "2026-02-19" },
    { label: "15 Feb - 20 Feb", start: "2026-02-15", end: "2026-02-20" },
    { label: "16 Feb - 21 Feb", start: "2026-02-16", end: "2026-02-21" },
    { label: "21 Feb - 26 Feb", start: "2026-02-21", end: "2026-02-26" },
    { label: "22 Feb - 27 Feb", start: "2026-02-22", end: "2026-02-27" },
    { label: "23 Feb - 28 Feb", start: "2026-02-23", end: "2026-02-28" },
    { label: "28 Feb - 05 Mar", start: "2026-02-28", end: "2026-03-05" },
    { label: "01 Mar - 06 Mar", start: "2026-03-01", end: "2026-03-06" },
    { label: "02 Mar - 07 Mar", start: "2026-03-02", end: "2026-03-07" },
    { label: "07 Mar - 12 Mar", start: "2026-03-07", end: "2026-03-12" },
    { label: "08 Mar - 13 Mar", start: "2026-03-08", end: "2026-03-13" },
    { label: "09 Mar - 14 Mar", start: "2026-03-09", end: "2026-03-14" },
    { label: "14 Mar - 19 Mar", start: "2026-03-14", end: "2026-03-19" },
    { label: "15 Mar - 20 Mar", start: "2026-03-15", end: "2026-03-20" },
    { label: "16 Mar - 21 Mar", start: "2026-03-16", end: "2026-03-21" },
    { label: "21 Mar - 26 Mar", start: "2026-03-21", end: "2026-03-26" },
    { label: "22 Mar - 27 Mar", start: "2026-03-22", end: "2026-03-27" },
    { label: "23 Mar - 28 Mar", start: "2026-03-23", end: "2026-03-28" },
    { label: "28 Mar - 02 Apr", start: "2026-03-28", end: "2026-04-02" },
    { label: "29 Mar - 03 Apr", start: "2026-03-29", end: "2026-04-03" },
    { label: "30 Mar - 04 Apr", start: "2026-03-30", end: "2026-04-04" },
    { label: "04 Apr - 09 Apr", start: "2026-04-04", end: "2026-04-09" },
    { label: "05 Apr - 10 Apr", start: "2026-04-05", end: "2026-04-10" },
    { label: "06 Apr - 11 Apr", start: "2026-04-06", end: "2026-04-11" },
    { label: "11 Apr - 16 Apr", start: "2026-04-11", end: "2026-04-16" },
    { label: "12 Apr - 17 Apr", start: "2026-04-12", end: "2026-04-17" },
    { label: "13 Apr - 18 Apr", start: "2026-04-13", end: "2026-04-18" },
    { label: "18 Apr - 23 Apr", start: "2026-04-18", end: "2026-04-23" },
    { label: "19 Apr - 24 Apr", start: "2026-04-19", end: "2026-04-24" },
    { label: "20 Apr - 25 Apr", start: "2026-04-20", end: "2026-04-25" },
    { label: "25 Apr - 30 Apr", start: "2026-04-25", end: "2026-04-30" },
    { label: "26 Apr - 01 May", start: "2026-04-26", end: "2026-05-01" },
    { label: "27 Apr - 02 May", start: "2026-04-27", end: "2026-05-02" },
  ],

  highlights: [
    "Summit climb with 360° views of Himalayan peaks like Swargarohini, Bandarpoonch, and Black Peak",
    "A true snow trek — trails and meadows covered in deep powder during peak winter",
    "Dense forests of pine, oak, and rhododendron inside Govind Pashu Vihar National Park",
    "Beautiful campsites like Juda Ka Talab and Hargaon",
    "Rich Garhwali culture with temples, folklore, and warm hospitality",
  ],

itinerary: [
  { day: 1, title: "Arrival at Sankri (6,400 ft)", 
    details: `• Drive approx. 8–9 hrs from Dehradun (200 km) through Yamuna Valley and Tons River, witnessing cascading waterfalls and terraced farmland.<br>
• Pass small Garhwali villages with stone cottages and prayer flags fluttering in the breeze.<br>
• Overnight stay in guesthouse at Sankri, a quaint hamlet that serves as the gateway to Kedarkantha.` 
  },
  { day: 2, title: "Sankri to Juda Ka Talab (9,100 ft)", 
    details: `• Trek 4 km / 4 hrs, gradual ascent through dense pine, oak, and maple forests.<br>
• Trail passes traditional hamlets where shepherds herd goats and cows.<br>
• Witness winter snow gradually covering the meadows, with birds like Himalayan monal and pheasants visible along the trail.<br>
• Camp beside Juda Ka Talab, a serene high-altitude lake surrounded by alpine forests, reflecting snow-capped peaks.` 
  },
  { day: 3, title: "Juda Ka Talab to Kedarkantha Base Camp (11,200 ft)", 
    details: `• Trek 4 km / 3–4 hrs through oak and deodar forests, opening into expansive snow meadows.<br>
• Trail offers views of Swargarohini and Bandarpoonch ranges in the distance.<br>
• Ascend gentle ridges with panoramic vistas of winter forests dotted with frost-covered shrubs.<br>
• Camp at Kedarkantha Base Camp with stunning views of towering peaks and frozen streams.` 
  },
  { day: 4, title: "Summit Day: Kedarkantha Base → Summit (12,500 ft) → Descend to Hargaon (8,900 ft)", 
    details: `• Early morning 6 km / 7–8 hrs climb to summit, starting pre-dawn to witness sunrise.<br>
• The ascent passes alpine meadows blanketed in snow, with scattered rhododendron and juniper shrubs.<br>
• Reaching the summit rewards trekkers with 360° views of Himalayan giants including Swargarohini, Black Peak, and Bandarpoonch.<br>
• Descend via the same route to Hargaon campsite, experiencing changing light on the mountains and glimpses of wildlife like musk deer and Himalayan monal.<br>
• Overnight stay at Hargaon, interacting with locals and learning Garhwali folklore.` 
  },
  { day: 5, title: "Hargaon to Sankri", 
    details: `• Trek 6 km / 4 hrs through forested trails, crossing small streams and meadows dotted with wildflowers in season.<br>
• Observe shepherds and local villagers tending to livestock, and small stone-built shrines along the way.<br>
• Return to Sankri, evening free to explore local market, taste Garhwali cuisine, and interact with residents.` 
  },
  { day: 6, title: "Departure from Sankri", 
    details: `• Drive back 8–9 hrs to Dehradun through scenic valleys.<br>
• Memories of snow-capped peaks, alpine meadows, and cultural encounters accompany trekkers as the journey concludes.` 
  },
],

  didYouKnow: [
  `Kedarkantha lies inside Govind Pashu Vihar National Park, home to Himalayan black bears, snow leopards, musk deer, and a variety of pheasants and eagles.`,
  `The Kedarkantha summit is marked by a sacred Lord Shiva temple; locals believe the peak is blessed, adding spiritual charm to the trek.`,
  `"Kedarkantha" translates to "Throat of Lord Shiva" in Garhwali folklore, symbolizing divine protection of the valley.`,
  `Juda Ka Talab is said to have formed when Lord Shiva dropped a droplet of water from his hair, giving it a mystical allure.`,
  `Trekkers can spot rare Himalayan flora like rhododendrons, junipers, and medicinal herbs along the trail.`,
  `The route was historically used by shepherds moving flocks between alpine meadows, and remnants of traditional stone huts can still be seen.`,
  `Birdwatchers often spot Himalayan monal, golden eagles, and woodpeckers in the forests along the trek.`,
  `Local Garhwali villages along the route maintain centuries-old traditions, festivals, and architecture, offering a glimpse into Himalayan culture.`
],

  howToReach: {
    air: "Nearest Airport: Jolly Grant Airport, Dehradun (approx. 220 km from Sankri).",
    train: "Nearest major railway station: Dehradun (approx. 200 km from Sankri).",
    road: "Regular buses and shared jeeps available from Dehradun to Sankri via Purola and Mori (8–9 hrs).",
    travelTip: "Arrive in Dehradun a day early to avoid delays and to catch the morning transport to Sankri.",
  },

  gallery: [
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535507/kedarkantha-view3_hmwbtm.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535504/kedarkantha-view1_ohohf4.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535497/kedarkantha-view6_p7xhl8.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535492/kedarkantha-hero_afsxo1.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535490/kedarkantha-view2_rywclm.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535489/kedarkantha-view4_uf3aor.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535483/kedarkantha-view5_us9lve.jpg",
  ],

  downloadLink: "/docs/Himalayan_Trek_Packing_List.pdf",

  faqs: {
  questions: [
    {
      question: "Who can participate in the Kedarkantha trek?",
      answer: "The trek is beginner-friendly but requires a basic level of fitness. It’s perfect for first-time snow trekkers, families, and groups looking for a scenic Himalayan winter adventure."
    },
    {
      question: "What is the best season for the Kedarkantha trek?",
      answer: "December to April is ideal, with January and February offering the thickest snow cover. Winter conditions provide stunning snow-laden meadows and clear views of peaks like Swargarohini and Bandarpoonch."
    },
    {
      question: "What essential gear should I carry for the Kedarkantha trek?",
      answer: "Carry insulated jackets, thermal wear, waterproof trekking shoes, gloves, woolen hats, a 30–40L backpack, trekking poles, and sunglasses for snow glare. A full winter packing checklist is in the downloadable PDF."
    },
    {
      question: "Is camping provided during the trek?",
      answer: "Yes, overnight stays are in well-equipped tents at scenic campsites. Snow camping during winter requires warm sleeping bags, which are provided by trek organizers."
    },
    {
      question: "Will there be mobile network coverage on the Kedarkantha trek?",
      answer: "Network coverage is limited. You may get signal at Sankri village, but the higher sections, including the summit, are offline. Inform friends and family beforehand."
    },
    {
      question: "Do I need permits for the Kedarkantha trek?",
      answer: "No special permits are required, as the trek lies within Uttarkashi district. Local operators typically handle any minor permissions if needed."
    },
    {
      question: "What makes Kedarkantha trek unique in winter?",
      answer: "The trek transforms into a snow paradise during winter. Trails pass through dense pine and deodar forests blanketed in snow, open meadows turn into perfect skiing slopes, and sunrise views from Kedarkantha summit over the snow-covered Garhwal peaks are unforgettable."
    },
    {
      question: "Are there any winter-specific challenges on this trek?",
      answer: "Yes, snow-covered trails can be slippery, and cold temperatures can drop below -5°C at night. Proper gear, trekking poles, and guidance from experienced guides ensure a safe experience."
    }
  ],
},


  faqsLink: "/faqs-and-articles",
},

{
  id: "dayara-bugyal-trek",
  name: "Dayara Bugyal Trek",
  tags: ["family", "beginner"],
  difficulty: ["easy"],
  season: ["autumn", "winter", "spring"],
  month: ["september", "october", "november", "december", "january", "february", "march", "april"],
  region: "uttarakhand",
  duration: "4 Nights / 5 Days",
  coordinates: [
    [30.8376, 78.5651], // Barsu (base village)
    [30.8783, 78.5877], // Dayara Bugyal
    [30.8922, 78.6024], // Bakaria Top (highest point)
  ],

  heroImage: "https://res.cloudinary.com/dr44hob9b/image/upload/v1756831840/dayara-hero_xad9ui.jpg",

  heroImages: ["https://res.cloudinary.com/dr44hob9b/image/upload/v1756831840/dayara-hero_xad9ui.jpg",
              "https://res.cloudinary.com/dr44hob9b/image/upload/v1756831852/dayara-view8_s1yzmy.jpg",
              "https://res.cloudinary.com/dr44hob9b/image/upload/v1756831832/dayara-view5_b7qlh1.jpg",
  ],

  subtitle: "The Himalayan Meadow Dreamscape",

  seo: {
  title: "Dayara Bugyal Trek | Itinerary, Cost & Dates | Planethimalayas",
  description: "Dayara Bugyal Trek (12,100 ft) is Uttarakhand’s most scenic meadow trek. In 6 days, experience rolling alpine grasslands with stunning views of Bandarpoonch, Draupadi ka Danda, and Jaonli."
},

  overview: {
    facts: [
      { emoji: "⏳", label: "Trek Duration", value: "5 Nights / 6 Days" },
      { emoji: "⚡", label: "Trek Grade", value: "Easy" },
      { emoji: "🏔️", label: "Max Altitude", value: "12,100 ft (Bakaria Top)" },
      { emoji: "⚡", label: "Trek Distance", value: "22–24 Km" },
      { emoji: "🌤️", label: "Best Time", value: "November to April" },
      { emoji: "🗺️", label: "Region", value: "Gangotri Range, Uttarkashi, Uttarakhand" },
      { emoji: "📍", label: "Start Point", value: "Barsu Village" },
      { emoji: "🏁", label: "End Point", value: "Barsu Village" },
      { emoji: "🧥", label: "Cloakroom Facility", value: "Available" },
    ],
    snippet: `The Dayara Bugyal Trek from Barsu is a gentle yet breathtaking journey into one of Uttarakhand’s most magical landscapes — a vast amphitheatre of alpine meadows that unfold like rolling waves beneath towering Himalayan peaks. From the moment you leave the quiet village of Barsu, the trail feels alive: crisp mountain air scented with pine, ancient oak forests echoing with the calls of thrushes, and flashes of Himalayan monal wings glimmering between the trees.

<br>As the climb continues, the forest thins and the world suddenly opens into Dayara Bugyal — a sweeping, high-altitude meadow that seems almost endless in every direction. Here, the Himalayas dominate the skyline: Bandarpoonch rises like a snowy guardian, with Draupadi ka Danda, Srikanth, and Jaonli forming a majestic backdrop that glows dramatically under changing mountain light. The beauty of this landscape shifts with every season — spring brings carpets of wildflowers and fresh green slopes, autumn washes the meadows in warm gold, and winter turns the entire region into a pristine snow plateau where silence feels sacred.

<br>The trail winds toward Bakaria Top (12,100 ft), one of the finest vantage points in the Garhwal Himalayas, offering an unbroken 360° panorama of the entire Gangotri range. Along the way, trekkers pass ancient stone huts, grazing grounds, and pathways still used by traditional herders who move with the seasons. Their presence adds a subtle cultural depth to the journey, reminding you that these meadows have been part of Himalayan life for generations.

<br>Evenings often settle around serene spots like Barnala Tal, where mirror-still waters reflect towering pines and fiery sunsets. The calm here is profound: starlit skies, crisp winds brushing the grass, and the distant silhouette of snow peaks glowing under moonlight.

<br>With its short duration, gentle gradients, and remarkable diversity of scenery, the Dayara Bugyal Trek is ideal for beginners, families, nature lovers, and photographers — yet remains a deeply rejuvenating experience for seasoned trekkers seeking the quiet magic of the Garhwal Himalayas.`
  },

  price: 10500,
  priceNote: "* Barsu to Barsu",
  addons: {
    transport: 2500,
    offloadingbag: 1800,
    transportNote: "* Rishikesh to Rishikesh",
    offloadingNote: "* Maximum weight 9kg/bag"
  },

  inclusionsNote: "🍽️ All Meals – From dinner on Day 1 to breakfast on Day 6",

  dates: [
    
   
    { label: "22 Nov - 26 Nov", start: "2025-11-22", end: "2025-11-26" },
    { label: "23 Nov - 27 Nov", start: "2025-11-23", end: "2025-11-27" },
    { label: "24 Nov - 28 Nov", start: "2025-11-24", end: "2025-11-28" },
    { label: "29 Nov - 03 Dec", start: "2025-11-29", end: "2025-12-03" },
    { label: "30 Nov - 04 Dec", start: "2025-11-30", end: "2025-12-04" },
    { label: "01 Dec - 05 Dec", start: "2025-12-01", end: "2025-12-05" },
    { label: "06 Dec - 10 Dec", start: "2025-12-06", end: "2025-12-10" },
    { label: "07 Dec - 11 Dec", start: "2025-12-07", end: "2025-12-11" },
    { label: "08 Dec - 12 Dec", start: "2025-12-08", end: "2025-12-12" },
    { label: "13 Dec - 17 Dec", start: "2025-12-13", end: "2025-12-17" },
    { label: "14 Dec - 18 Dec", start: "2025-12-14", end: "2025-12-18" },
    { label: "15 Dec - 19 Dec", start: "2025-12-15", end: "2025-12-19" },
    { label: "20 Dec - 24 Dec", start: "2025-12-20", end: "2025-12-24" },
    { label: "21 Dec - 25 Dec", start: "2025-12-21", end: "2025-12-25" },
    { label: "22 Dec - 26 Dec", start: "2025-12-22", end: "2025-12-26" },
    { label: "27 Dec - 31 Dec", start: "2025-12-27", end: "2025-12-31" },
    { label: "28 Dec - 01 Jan", start: "2025-12-28", end: "2026-01-01" },
    { label: "29 Dec - 02 Jan", start: "2025-12-29", end: "2026-01-02" },
    { label: "03 Jan - 07 Jan", start: "2026-01-03", end: "2026-01-07" },
    { label: "04 Jan - 08 Jan", start: "2026-01-04", end: "2026-01-08" },
    { label: "05 Jan - 09 Jan", start: "2026-01-05", end: "2026-01-09" },
    { label: "10 Jan - 14 Jan", start: "2026-01-10", end: "2026-01-14" },
    { label: "11 Jan - 15 Jan", start: "2026-01-11", end: "2026-01-15" },
    { label: "12 Jan - 16 Jan", start: "2026-01-12", end: "2026-01-16" },
    { label: "17 Jan - 21 Jan", start: "2026-01-17", end: "2026-01-21" },
    { label: "18 Jan - 22 Jan", start: "2026-01-18", end: "2026-01-22" },
    { label: "19 Jan - 23 Jan", start: "2026-01-19", end: "2026-01-23" },
    { label: "24 Jan - 28 Jan", start: "2026-01-24", end: "2026-01-28" },
    { label: "25 Jan - 29 Jan", start: "2026-01-25", end: "2026-01-29" },
    { label: "26 Jan - 30 Jan", start: "2026-01-26", end: "2026-01-30" },
    { label: "31 Jan - 04 Feb", start: "2026-01-31", end: "2026-02-04" },
    { label: "01 Feb - 05 Feb", start: "2026-02-01", end: "2026-02-05" },
    { label: "02 Feb - 06 Feb", start: "2026-02-02", end: "2026-02-06" },
    { label: "07 Feb - 11 Feb", start: "2026-02-07", end: "2026-02-11" },
    { label: "08 Feb - 12 Feb", start: "2026-02-08", end: "2026-02-12" },
    { label: "09 Feb - 13 Feb", start: "2026-02-09", end: "2026-02-13" },
    { label: "14 Feb - 18 Feb", start: "2026-02-14", end: "2026-02-18" },
    { label: "15 Feb - 19 Feb", start: "2026-02-15", end: "2026-02-19" },
    { label: "16 Feb - 20 Feb", start: "2026-02-16", end: "2026-02-20" },
    { label: "21 Feb - 25 Feb", start: "2026-02-21", end: "2026-02-25" },
    { label: "22 Feb - 26 Feb", start: "2026-02-22", end: "2026-02-26" },
    { label: "23 Feb - 27 Feb", start: "2026-02-23", end: "2026-02-27" },
    { label: "28 Feb - 04 Mar", start: "2026-02-28", end: "2026-03-04" },
    { label: "01 Mar - 05 Mar", start: "2026-03-01", end: "2026-03-05" },
    { label: "02 Mar - 06 Mar", start: "2026-03-02", end: "2026-03-06" },
    { label: "07 Mar - 11 Mar", start: "2026-03-07", end: "2026-03-11" },
    { label: "08 Mar - 12 Mar", start: "2026-03-08", end: "2026-03-12" },
    { label: "09 Mar - 13 Mar", start: "2026-03-09", end: "2026-03-13" },
    { label: "14 Mar - 18 Mar", start: "2026-03-14", end: "2026-03-18" },
    { label: "15 Mar - 19 Mar", start: "2026-03-15", end: "2026-03-19" },
    { label: "16 Mar - 20 Mar", start: "2026-03-16", end: "2026-03-20" },
    { label: "21 Mar - 25 Mar", start: "2026-03-21", end: "2026-03-25" },
    { label: "22 Mar - 26 Mar", start: "2026-03-22", end: "2026-03-26" },
    { label: "23 Mar - 27 Mar", start: "2026-03-23", end: "2026-03-27" },
    { label: "28 Mar - 01 Apr", start: "2026-03-28", end: "2026-04-01" },
    { label: "29 Mar - 02 Apr", start: "2026-03-29", end: "2026-04-02" },
    { label: "30 Mar - 03 Apr", start: "2026-03-30", end: "2026-04-03" },
    { label: "04 Apr - 08 Apr", start: "2026-04-04", end: "2026-04-08" },
    { label: "05 Apr - 09 Apr", start: "2026-04-05", end: "2026-04-09" },
    { label: "06 Apr - 10 Apr", start: "2026-04-06", end: "2026-04-10" },
    { label: "11 Apr - 15 Apr", start: "2026-04-11", end: "2026-04-15" },
    { label: "12 Apr - 16 Apr", start: "2026-04-12", end: "2026-04-16" },
    { label: "13 Apr - 17 Apr", start: "2026-04-13", end: "2026-04-17" },
    { label: "18 Apr - 22 Apr", start: "2026-04-18", end: "2026-04-22" },
    { label: "19 Apr - 23 Apr", start: "2026-04-19", end: "2026-04-23" },
    { label: "20 Apr - 24 Apr", start: "2026-04-20", end: "2026-04-24" },
    { label: "25 Apr - 29 Apr", start: "2026-04-25", end: "2026-04-29" },
    { label: "26 Apr - 30 Apr", start: "2026-04-26", end: "2026-04-30" },
    { label: "27 Apr - 01 May", start: "2026-04-27", end: "2026-05-01" },
   ],


  highlights: [
    "Vast alpine meadow stretching across 28 sq. km – one of the largest in India",
    "Seasonal beauty: snow trek in winter, wildflower paradise in summer, golden meadows in autumn",
    "Panoramic views of Bandarpoonch, Srikanth, Draupadi ka Danda, Jaonli, and Gangotri peaks",
    "Peaceful forest trails of oak, rhododendron, and maple with rich birdlife",
    "Village stay at Barsu offering Garhwali culture and traditional hospitality",
    "Bakaria Top (12,100 ft) for a sweeping 360° Himalayan panorama",
    "Gentle gradient makes it perfect for beginners, families, and children",
  ],

 itinerary: [
  {
    day: 1,
    title: "Arrival at Barsu (7,500 ft)",
    details: `<strong>• Drive: 7–8 hrs from Dehradun via Uttarkashi, following the scenic Bhagirathi River valley.</strong><br>• En route, witness terraced fields, apple orchards, and quaint Garhwali hamlets tucked into steep slopes. Stop by local dhabas or temples along the way — this route beautifully captures the rhythm of mountain life. Evening arrival at Barsu, a charming base village overlooking snow-clad Bandarpoonch and Srikanth peaks. Settle into a cozy homestay or guesthouse and enjoy local hospitality with home-cooked meals under a starry night sky.`
  },
  {
    day: 2,
    title: "Barsu to Barnala Tal (9,000 ft)",
    details: `<strong>• Trek: ~4 km | Duration: 4–5 hrs | Trail: Gradual ascent through oak, maple, and rhododendron forests.</strong><br>• The air becomes crisp as you leave the village behind and step into a silent, moss-covered forest alive with bird calls. You may spot Himalayan thrushes, magpies, or even a barking deer disappearing into the trees. The trail opens up to a clearing beside the serene Barnala Tal — a small glacial lake surrounded by alpine trees and meadows. The reflections of distant peaks shimmer on the still water — an ideal spot to pause and breathe in the quiet of the Garhwal Himalayas. Evening tea and early dinner at camp by the lake. Overnight stay in tents under dazzling starlight.`
  },
  {
    day: 3,
    title: "Barnala Tal to Dayara Bugyal (11,000 ft)",
    details: `<strong>• Trek: ~6–7 km | Duration: 6–7 hrs | Trail: Gradual climb through high-altitude pastures and forest patches.</strong><br>• Today’s trail is a stunning blend of forest and open ridges — every turn reveals a wider Himalayan panorama. As you climb higher, the meadows of Dayara Bugyal unfurl before you — vast, undulating grasslands stretching endlessly across the skyline. Snow peaks like Bandarpoonch, Jaonli, and Draupadi ka Danda appear incredibly close. During summer, the meadows burst with wildflowers and alpine herbs; in autumn and winter, golden and snow-white hues dominate. Spend time walking through the Bugyal, capturing photographs or just lying on the grass watching clouds drift past. Overnight camping at Dayara Bugyal, with views of the Milky Way above the Garhwal range.`
  },
  {
    day: 4,
    title: "Excursion to Bakaria Top (12,200 ft) and return to Barnala Tal",
    details: `<strong>• Trek: ~4–5 km round trip | Duration: 5–6 hrs | Trail: Gentle ascent and descent.</strong><br>• After breakfast, start a rewarding morning hike to Bakaria Top — the highest point of the trek. From here, enjoy a 360° panorama of the Gangotri and Yamunotri ranges, including peaks like Srikanth, Bandarpoonch, and Black Peak. The crisp mountain air and wide horizon make this a truly meditative experience — a moment to pause and feel deeply connected to the Himalayas. Descend back to the Dayara meadow for lunch, then continue gently down to Barnala Tal. Evening at camp with hot soup, laughter, and the final night under Himalayan skies.`
  },
  {
    day: 5,
    title: "Barnala Tal to Barsu and drive back to Rishikesh",
    details: `<strong>• Trek: ~5 km descent | Drive: ~200 km / 8–10 hrs to Rishikesh via Uttarkashi and Chamba.</strong><br>• Retrace your steps through whispering forests and terraced slopes, often crossing shepherds with their flocks on the way down. Arrive Barsu by late morning — take one last look at the distant snow peaks before bidding goodbye. After breakfast, begin the long but scenic drive back through Garhwal’s valleys, river confluences, and mountain settlements. The journey back feels bittersweet — the trek ends, but the peace of the meadows and the rhythm of the mountains stay with you long after you’ve left. Reach Rishikesh by evening or night. Trek concludes with memories of vast alpine meadows and the quiet magic of the Himalayas.`
  },
],

  didYouKnow: [
  `Dayara Bugyal is among the largest high-altitude meadows in Asia, covering ~28 sq. km, with panoramic views of surrounding Himalayan ranges.`,
  `The meadow transforms dramatically with seasons—wildflowers in summer, golden hues in autumn, and pristine snow in winter.`,
  `Shepherds have historically used Dayara Bugyal for grazing livestock for centuries; flocks of sheep and goats can still be seen.` ,
  `The Bugyal feeds streams that flow into the Bhagirathi River, supporting local flora and fauna.`,
  `From Bakaria Top, trekkers can see peaks from both Gangotri and Yamunotri ranges, including Srikanth, Jaonli, and Draupadi ka Danda.`,
  `Birdwatchers may spot Himalayan monal, lammergeier, golden eagles, and other rare alpine species along the trek.`,
  `Barnala Tal holds mythological and spiritual significance in local Garhwali folklore.`,
  `The trek route offers two main approaches: Barsu (gentler, scenic) and Raithal village (shorter but steeper), catering to different trekking preferences.`,
  `The trail is abundant with Himalayan flora including rhododendrons, junipers, alpine wildflowers, and medicinal herbs, making it a botanist’s delight.`,
  `Local villages along the trail maintain centuries-old architecture, folk traditions, and cultural festivals, offering immersive interactions with Garhwali life.`
],

  howToReach: {
    air: "Nearest Airport: Jolly Grant Airport, Dehradun (approx. 220 km from Barsu).",
    train: "Nearest major railway station: Dehradun (approx. 200 km from Barsu).",
    road: "Shared jeeps and buses run from Dehradun to Uttarkashi, from where taxis connect to Barsu (7–8 hrs).",
    travelTip: "Arrive in Dehradun a day early to catch early-morning transport. Mobile network is limited beyond Uttarkashi.",
  },

  gallery: [
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1756831852/dayara-view8_s1yzmy.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1756831850/dayara-view4_ijn1rf.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1756831840/dayara-hero_xad9ui.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1756831839/dayara-view9_lcroyg.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1756831835/dayara-view2_yzmyil.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1756831834/dayara-view6_pheoxt.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1756831834/dayara-view7_mcmdi7.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1756831832/dayara-view5_b7qlh1.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1756831830/dayara-view3_l9gwv4.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1756831829/dayara-view1_ks4agv.jpg",
  ],

  downloadLink: "/docs/Himalayan_Trek_Packing_List.pdf",

  faqs: {
  questions: [
    {
      question: "Who can participate in the Dayara Bugyal trek?",
      answer: "This trek is suitable for beginners and moderately fit individuals. Its gentle slopes and open meadows make it an excellent choice for first-time Himalayan trekkers and families."
    },
    {
      question: "What is the best season for the Dayara Bugyal trek?",
      answer: "April to June and September to November are ideal. Spring brings blooming wildflowers, while autumn offers golden grasslands and crisp skies. Occasionally, late winter or early spring treks may have lingering snow."
    },
    {
      question: "What should I pack for the Dayara Bugyal trek?",
      answer: "Essentials include trekking shoes, layered clothing, a 30–40L backpack, a warm jacket, hat, gloves, water bottle, and trekking poles. For detailed packing, refer to the downloadable PDF."
    },
    {
      question: "Are there camping facilities on the trek?",
      answer: "Yes, overnight stays are in spacious tents on the Bugyal meadows, offering panoramic views of the surrounding Himalayan peaks."
    },
    {
      question: "Will there be mobile network coverage?",
      answer: "Network coverage is limited. You may get sporadic signals near village settlements, but expect no connectivity on the meadows themselves."
    },
    {
      question: "Do I need permits for Dayara Bugyal trek?",
      answer: "No special permits are required, but the trek passes through Uttarkashi forest areas. Your trek operator typically arranges necessary forest permissions."
    },
    {
      question: "What makes Dayara Bugyal special?",
      answer: "Dayara Bugyal is a vast alpine meadow at 12,000 ft, offering rolling grasslands with sweeping views of peaks like Bandarpunch and Swargarohini. It’s one of Uttarakhand’s most picturesque treks with minimal altitude challenges."
    },
    {
      question: "Are there winter-specific considerations?",
      answer: "Yes, snow can cover the meadows from December to February, making the trek challenging but scenic. Proper insulated gear is necessary, and some trails may require snowshoes or poles."
    }
  ],
},


  faqsLink: "/faqs-and-articles",
},

{
  id: "bali-pass-trek",
  name: "Bali Pass Trek",
  tags: ["pass"],
  difficulty: ["difficult"],
  season: ["summer", "autumn"],
  month: ["may", "june", "september", "october"],
  region: "uttarakhand",
  duration: "7 Nights / 8 Days",
  coordinates: [
    [31.0266, 78.4469], // Sankri (start)
    [31.0853, 78.7069], // Janki Chatti (end)
  ],

  heroImage: "https://res.cloudinary.com/dr44hob9b/image/upload/v1760852516/bali-pass-hero1_cqa2bg.jpg",

  heroImages: ["https://res.cloudinary.com/dr44hob9b/image/upload/v1760852516/bali-pass-hero1_cqa2bg.jpg",
              "https://res.cloudinary.com/dr44hob9b/image/upload/v1760852252/bali-pass-view14_sgtbwj.jpg",
              "https://res.cloudinary.com/dr44hob9b/image/upload/v1760852564/bali-pass-view7_yneryq.jpg",
              "https://res.cloudinary.com/dr44hob9b/image/upload/v1760852565/bali-pass-view8_itunxl.jpg",
  ],

  subtitle: "The Wildest High-Altitude Crossover in Garhwal",

  seo: {
    title: "Bali Pass Trek | Detailed Itinerary, Cost & Route | Planethimalayas",
    description:
      "Bali Pass Trek (16,207 ft) is a challenging high-altitude route connecting Har Ki Dun valley to Yamunotri in Uttarakhand. A thrilling 8-day Himalayan adventure through alpine meadows, glacial basins, and rugged mountain passes.",
  },

  overview: {
    facts: [
      { emoji: "⏳", label: "Trek Duration", value: "7 Nights / 8 Days" },
      { emoji: "⚡", label: "Trek Grade", value: "Difficult" },
      { emoji: "🏔️", label: "Max Altitude", value: "16,207 ft (Bali Pass)" },
      { emoji: "⚡", label: "Trek Distance", value: "64 Km" },
      { emoji: "🌤️", label: "Best Time", value: "May–June & September–October" },
      { emoji: "🗺️", label: "Region", value: "Govind Pashu Vihar National Park, Uttarkashi, Uttarakhand" },
      { emoji: "📍", label: "Start Point", value: "Sankri (Uttarkashi, Uttarakhand)" },
      { emoji: "🏁", label: "End Point", value: "Janki Chatti (Yamunotri, Uttarkashi, Uttarakhand)" },
      { emoji: "🧥", label: "Cloakroom facility", value: "Not Available" },
    ],
    snippet: `Bali Pass Trek is one of the most adventurous high-altitude crossovers in the Indian Himalayas, connecting the lush Har Ki Dun valley with the sacred Yamunotri region. Rising to 16,207 ft, this trek offers everything — alpine meadows, ancient Himalayan villages, glacial valleys, moraine crossings, and breathtaking views of Swargarohini, Bandarpoonch, and Kala Nag peaks. The trail begins in dense forests of pine and oak, passes through quaint villages like Osla and Seema, ascends to the alpine Ruinsara Tal lake, and then climbs steeply to the Bali Pass, offering a spectacular panorama of the Garhwal Himalayas. Descending into the Yamunotri valley feels like entering another world, making this trek a true Himalayan odyssey.`,
  },

  price: 21900,
  priceNote: "* Sankri to Janki Chatti",
  addons: {
    transport: 3000,
    offloadingbag: 5600,
    transportNote: "* Dehradun to Dehradun",
    offloadingNote: "* Maximum weight 9kg/bag"
  },

  inclusionsNote: "🍽️ All Meals – Nutritious meals from dinner on Day 1 to breakfast on Day 8",

  dates: [
    { label: "15 May - 22 May", start: "2026-05-15", end: "2026-05-22" },
    { label: "16 May - 23 May", start: "2026-05-16", end: "2026-05-23" },
    { label: "22 May - 29 May", start: "2026-05-22", end: "2026-05-29" },
    { label: "23 May - 30 May", start: "2026-05-23", end: "2026-05-30" },
    { label: "29 May - 22 May", start: "2026-05-29", end: "2026-06-05" },
    { label: "30 May - 22 May", start: "2026-05-30", end: "2026-06-06" },
    { label: "05 Jun - 12 Jun", start: "2026-06-05", end: "2026-06-12" },
    { label: "06 Jun - 13 Jun", start: "2026-06-06", end: "2026-06-13" },
    { label: "12 Jun - 19 Jun", start: "2026-06-12", end: "2026-06-19" },
    { label: "13 Jun - 20 Jun", start: "2026-06-13", end: "2026-06-20" },
  ],

  highlights: [
    "A rare high-altitude crossover connecting Har Ki Dun to Yamunotri",
    "Stunning views of Swargarohini, Bandarpoonch, and Kala Nag peaks",
    "Campsites by the pristine Ruinsara Tal and under towering glaciers",
    "Traverse through alpine meadows, moraines, and icy slopes at 16,200 ft",
    "Blend of remote villages, Hindu mythology, and raw Himalayan wilderness",
  ],

  itinerary: [
  { 
    day: 1, 
    title: "Arrive in Sankri (6,400 ft)", 
    details: "• Drive distance: ~195 km | Duration: 6–8 hours. <br>• Drive from Dehradun to Sankri through Mussoorie, Purola, and Mori — one of the most scenic drives in the Garhwal Himalayas. <br>• The route winds through pine and deodar forests, with glimpses of the Tons River below. <br>• Sankri, a quaint village in Govind Pashu Vihar National Park, serves as the base for several famous treks. <br>• Overnight stay in a guesthouse or homestay at Sankri." 
  },
  { 
    day: 2, 
    title: "Sankri to Dhatmeer (7,875 ft) – Trek to Seema (8,400 ft)", 
    details: "• Drive distance: 18 km | Trek distance: ~8 km | Duration: 1.5 hrs drive + 5–6 hrs trek. <br>• Short morning drive from Sankri to Dhatmeer village, the trek’s starting point. <br>• Trail begins with a gentle walk along the Supin River through chestnut, walnut, and deodar forests. <br>• Cross charming wooden bridges, cascading waterfalls, and small villages like Gangaar. <br>• The route offers first views of snow peaks of the Swargarohini range. <br>• Camp at Seema by the river, surrounded by thick forest and open meadows." 
  },
  { 
    day: 3, 
    title: "Seema (8,400 ft) to Devsu Thatch (10,200 ft)", 
    details: "• Trek distance: ~6 km | Duration: 4–5 hours. <br>• Follow the Supin River upstream, crossing mixed forest trails of oak, pine, and silver birch. <br>• The climb gradually opens into lush alpine meadows of Devsu Thatch — one of the most beautiful campsites on this trail. <br>• From here, you get sweeping views of Kala Nag (Black Peak, 20,955 ft) and Bandarpunch ranges. <br>• The trail is mildly steep but scenic throughout, with birds and rhododendrons in bloom (April–June). <br>• Camp overnight in tents at Devsu Thatch, surrounded by vast green meadows and icy peaks." 
  },
  { 
    day: 4, 
    title: "Devsu Thatch (10,200 ft) to Ruinsara Tal (11,700 ft)", 
    details: "• Trek distance: ~8.5 km | Duration: 5–6 hours. <br>• A moderate day following the Supin River for the last time before reaching Ruinsara Lake. <br>• Trail passes through silver birch and rhododendron forests, then opens into vast alpine terrain dotted with boulders and streams. <br>• Ruinsara Tal is a glacial lake surrounded by grassy meadows and towering peaks like Swargarohini and Dhumdhar Kandi. <br>• The area is known for Himalayan blue poppies and primulas during summer bloom. <br>• Overnight stay in wooden huts or tents beside the lake." 
  },
  { 
    day: 5, 
    title: "Ruinsara Tal (11,700 ft) to Odari (13,150 ft)", 
    details: "• Trek distance: ~4 km | Duration: 3 hours. <br>• Short but scenic day through boulder sections and gentle river crossings. <br>• Odari means 'rock cave' — believed to be the place where Bali (Hanuman’s brother) once stayed, giving the trek its name. <br>• The trail gradually gains altitude and offers stunning views of Swargarohini I & II. <br>• Camp beside the river at Odari, surrounded by rocky ridges and high mountains. <br>• Evening briefing and acclimatization walk to prepare for the higher camp." 
  },
  { 
    day: 6, 
    title: "Odari (13,150 ft) to Bali Base Camp (15,350 ft)", 
    details: "• Trek distance: ~3.5 km | Duration: 3–4 hours. <br>• Short but steep ascent over rocky and moraine terrain. <br>• The trail climbs through loose scree slopes with panoramic views of the Ruinsara Valley below. <br>• Campsite at Bali Base Camp offers mesmerizing sunset views and close-up look at glaciated peaks. <br>• Night temperatures drop below freezing; stay hydrated and warm. <br>• Overnight stay in tents at Bali Base Camp." 
  },
  { 
    day: 7, 
    title: "Bali Base Camp (15,350 ft) to Lower Dhamni (11,200 ft) via Bali Pass (16,207 ft)", 
    details: "• Trek distance: ~10 km | Duration: 8–10 hours. <br>• The toughest and most spectacular day of the trek. <br>• Early start around 5 AM for the pass crossing — the trail is snow-covered and steep in early season. <br>• After a demanding climb, reach Bali Pass (16,207 ft), offering 360° views of Swargarohini, Banderpunch, and Garhwal ranges, with the Yamunotri valley far below. <br>• The descent from the pass is steep and scree-filled — use microspikes or gaiters if snow remains. <br>• Cross the narrow 'goat trail' section with caution. <br>• Reach Upper Dhamni for rest, then continue to Lower Dhamni campsite through mixed forest. <br>• Overnight stay in tents." 
  },
  { 
    day: 8, 
    title: "Lower Dhamni (11,200 ft) to Yamunotri (10,800 ft) – Drive to Dehradun", 
    details: "• Trek distance: ~9.5 km | Duration: 5–6 hours. <br>• Descend through dense oak and rhododendron forest until the trail merges with the cemented pilgrim path to Yamunotri. <br>• Take a dip in the sacred hot springs — perfect for soothing tired muscles. <br>• Visit the Yamunotri temple, one of the Char Dham shrines. <br>• Continue trekking to Janki Chatti (base of Yamunotri), where vehicles to Dehradun will be waiting. <br>• Trek ends with memories of one of Garhwal’s most rewarding high-altitude crossings. <br>• You can plan onward travel the same day or explore Dehradun city." 
  },
],

  didYouKnow: [
    "Bali Pass connects Har Ki Dun valley with Yamunotri — a trail ancient traders and pilgrims once used to move between the Tons and Yamuna valleys.",
    "The pass stands at 16,207 ft, offering rare simultaneous views of Bandarpoonch and Swargarohini peaks.",
    "Ruinsara Tal is a sacred lake believed to be linked to the Pandavas’ ascent to heaven through Swargarohini.",
    "The trek lies entirely within the Govind Pashu Vihar National Park, home to Himalayan black bears, blue sheep, and monals.",
    "During late spring, alpine meadows near Devsu Thatch are carpeted with blue primulas and pink rhododendrons.",
    "The local legend says that Odari cave was once used by Bali — the mighty monkey king from the Ramayana — hence the name ‘Bali Pass’.",
    "Bali Pass is one of the few treks where you can literally see the transition from lush green forests to stark glacial wilderness within a single day’s climb.",
    "The valley is also home to traditional wooden architecture and ancient stone temples that remain untouched by modernity.",
  ],

  howToReach: {
      air: "<br>• Nearest Airport: Jolly Grant Airport, Dehradun (DED)<br>• Regular flights available from Delhi, Mumbai, Bangalore, and other major cities.Regular flights available from Delhi, Mumbai, Bangalore, and other major cities.<br>• From the airport, you can hire a taxi to Dehradun ISBT or directly to Sankri.",
      train: "<br>• Nearest Railway Station: Dehradun Railway Station<br>• Well connected with major cities like Delhi, Haridwar, Rishikesh, and Lucknow.",
      road: "Dehradun to Sankri (190 km | 8–9 hours)",
      travelTip: "<br>• Private Cab: Can be booked in advance. Costlier but comfortable.<br>• Local Bus: From Dehradun ISBT to Sankri via Purola (limited availability, leaves early morning)."
  },

  gallery: [
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1760852568/bali-pass-view6_miv39h.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1760852565/bali-pass-view8_itunxl.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1760852564/bali-pass-view7_yneryq.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1760852548/bali-pass-view4_f5x8rm.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1760852524/bali-pass-view5_eyqbrx.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1760852516/bali-pass-hero1_cqa2bg.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1760852504/bali-pass-view1_hashpp.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1760852503/bali-pass-view2_ovxd66.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1760852503/bali-pass-hero2_djlwyw.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1760852501/bali-pass-hero_fk6dmd.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1760852450/bali-pass-view3_jufegf.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1760852443/bali-pass-view19_mcsjql.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1760852395/bali-pass-view18_suxknn.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1760852382/bali-pass-view21_tpo0g7.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1760852313/bali-pass-view24_ufrj59.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1760852310/bali-pass-view25_kj7v3u.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1760852302/bali-pass-view26_l9e8ml.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1760852294/bali-pass-view23_wmy9gy.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1760852290/bali-pass-view22_pgyydw.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1760852280/bali-pass-view20_ujedea.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1760852267/bali-pass-view17_nnpi8a.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1760852253/bali-pass-view10_qgq9kd.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1760852252/bali-pass-view14_sgtbwj.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1760852236/bali-pass-view16_p0sxbo.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1760852232/bali-pass-view12_zgn7kd.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1760852223/bali-pass-view15_hlkl5o.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1760852193/bali-pass-view13_ufzkiv.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1760852187/bali-pass-view9_jjwb7q.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1760852177/bali-pass-view11_r82fn1.jpg"
  ],

  downloadLink: "/docs/Himalayan_Trek_Packing_List.pdf",

  faqs: {
    questions: [
      {
        question: "Who can join the Bali Pass Trek?",
        answer:
          "Bali Pass is ideal for experienced trekkers with prior exposure to high-altitude conditions. It involves steep ascents, scree slopes, and snow crossings.",
      },
      {
        question: "What kind of weather should I expect?",
        answer:
          "Expect pleasant days (10–15°C) in lower camps and freezing temperatures near the pass (0°C to -5°C). Snow is common in early summer and post-monsoon.",
      },
      {
        question: "Is it safe for solo trekkers?",
        answer:
          "Yes, if undertaken with a professional organization. The trail passes through remote areas, so solo attempts without guides are not advised.",
      },
      {
        question: "Will I get mobile network during the trek?",
        answer:
          "Mobile networks (BSNL, Jio) work till Sankri and partly till Osla. Beyond that, connectivity is minimal or unavailable.",
      },
      {
        question: "Are there any cultural or religious sites en route?",
        answer:
          "Yes, Osla village has a unique wooden temple dedicated to Duryodhana, and Yamunotri temple at the end of the trek is one of the Char Dhams of Uttarakhand.",
      },
    ],
  },
  faqsLink: "/pages/faqs-and-articles",
},

  {
    id: "roopkund-trek",
    name: "Roopkund Trek",
    tags: ["pass"],
    difficulty: ["difficult"],
    season: ["summer", "autumn"],
    month: ["may", "june", "september", "october"],
    region: "uttarakhand",
    duration: "7 Nights / 8 Days",
    coordinates: [
      [30.0333, 79.3300], // Lohajung (start) – approx
      [30.2157,79.6958], // Bedni Bugyal
      [30.1897, 79.6925], // Patar Nachauni
      [30.2089, 79.7034], // Bagwabasa
      [30.2230, 79.7068], // Roopkund lake
      
    ],

    heroImage: "https://res.cloudinary.com/dr44hob9b/image/upload/v1761153698/IMG_20180522_073321_ih9icw.jpg",  // replace with actual image URL
    
    heroImages: ["https://res.cloudinary.com/dr44hob9b/image/upload/v1761153698/IMG_20180522_073321_ih9icw.jpg",
                  "https://res.cloudinary.com/dr44hob9b/image/upload/v1761152188/roopkund-view9_kyctab.jpg",
                  "https://res.cloudinary.com/dr44hob9b/image/upload/v1761152189/roopkund-view10_ix3gpv.jpg",
                  "https://res.cloudinary.com/dr44hob9b/image/upload/v1761152209/roopkund-hero_vl6thl.jpg",
                  "https://res.cloudinary.com/dr44hob9b/image/upload/v1761152218/roopkund-view5_rrommv.jpg",
    ],
    
    subtitle: "Mystery Lake of the Himalayas",

    seo: {
      title: "Roopkund Trek | Itinerary, Cost & Dates | YourTrekCompany",
      description: "Roopkund Trek (15,750 ft) in Uttarakhand through alpine meadows, forests & mystery lake. 8 days of high-altitude adventure from Lohajung to Wan."
    },

    overview: {
      facts: [
        { emoji: "⏳", label: "Trek Duration", value: "7 Nights / 8 Days" },
        { emoji: "⚡", label: "Trek Grade", value: "Difficult" },
        { emoji: "🏔️", label: "Max Altitude", value: "15,750 ft (Roopkund Lake)" },
        { emoji: "⚡", label: "Trek Distance", value: "≈53 km" },
        { emoji: "🌤️", label: "Best Time", value: "May–June & September–October" },
        { emoji: "🗺️", label: "Region", value: "Chamoli District, Uttarakhand" },
        { emoji: "📍", label: "Start Point", value: "Lohajung (Uttarakhand)" },
        { emoji: "🏁", label: "End Point", value: "Wan Village (Uttarakhand)" },
        { emoji: "🧥", label: "Cloakroom facility", value: "Available" },
      ],
      snippet: `The Roopkund Trek (15,750 ft) in Uttarakhand is one of the most legendary Himalayan trails, blending mystery, adventure, and mythology. Starting from the charming village of Lohajung and ending at Wan, this 8-day trek takes you through ancient oak and rhododendron forests, vast alpine meadows like Ali Bugyal and Bedni Bugyal, and finally to the enigmatic Roopkund Lake—famous for hundreds of human skeletons visible beneath its icy surface. The trek offers breathtaking views of Mt. Trishul and Nanda Ghunti while passing through sacred sites linked to the Nanda Devi Raj Jat Yatra, one of Uttarakhand’s most revered pilgrimages held once every twelve years. Along the route, trekkers witness Himalayan flora like blue poppies and brahma kamal, and spot wildlife such as Himalayan monals and barking deer. Lohajung, the trailhead, carries folklore of the goddess Parvati defeating a demon here ('Loha Jung' literally meaning 'War of Iron'), while Wan, the concluding village, retains its ancient Kumaoni architecture and tranquil charm. The Roopkund Trek is a complete Himalayan experience—rich in culture, myth, and natural beauty—ideal for seasoned trekkers and mountain enthusiasts seeking a blend of mystery, high-altitude adventure, and heritage.`
    },

    price: 19500,     // you can fill in actual price
    priceNote: "* Lohajung to Wan",
    addons: {
      transport: 2800,    // fill in as applicable
      offloadingbag: 4800, // if any
      transportNote: "* Rishikesh to Rishikesh",
      offloadingNote: "* Maximum weight 9kg/bag"
    },

    inclusionsNote: "🍽️ All Meals – from dinner on Day 1 to breakfast on Day 8",

    enquireOnly: true,

    highlights: [
      "Trek through dense oak & rhododendron forests from Lohajung",
      "Walk across expansive alpine meadows of Ali Bugyal & Bedni Bugyal",
      "Reach Roopkund Lake (~15,750 ft) and witness its mysterious human skeletons",
      "Panoramic views of Mt Trishul, Nanda Ghunti & the Garhwal peaks",
      "Finish via Wan village — small Himalayan hamlet with traditional charm",
    ],

    itinerary: [
  {
    day: 1,
    title: "Kathgodam / Rishikesh to Lohajung (7,600 ft)",
    details: "• Drive Distance: ~210–230 km (9–11 hrs) via Almora / Kausani.<br>• The journey takes you through the winding mountain roads of Kumaon, passing through pine forests, terraced valleys and small hill towns like Gwaldam and Dewal.<br>• By evening, reach Lohajung — a scenic Himalayan base village overlooking the confluence of the Pindar and Kail rivers.<br>• The air is cool and crisp, and the sunset paints Mt Nanda Ghunti in golden hues.<br>• Overnight stay in a cozy guesthouse/homestay. Short evening acclimatisation walk to nearby viewpoints recommended."
  },
  {
    day: 2,
    title: "Lohajung to Didna Village (8,530 ft)",
    details: "• Trek Distance: ~7–8 km | Duration: ~4–5 hrs.<br>• The day begins with a descent through mixed forests of oak and rhododendron to the sparkling Neel Ganga river — a serene spot to rest and refill bottles.<br>• After crossing the bridge, climb gradually through dense forest dotted with wildflowers and chirping mountain birds to reach Didna village, located on a gentle slope amidst terraced fields.<br>• The trail offers views of snow-capped ridges beyond the valley.<br>• Overnight stay in a rustic guesthouse or homestay; expect pleasant mountain breeze and starlit skies."
  },
  {
    day: 3,
    title: "Didna to Ali Bugyal (11,320 ft)",
    details: "• Trek Distance: ~10–12 km | Duration: ~6–7 hrs.<br>• The morning trail starts steeply through oak, maple, and rhododendron forests alive with Himalayan monals (state bird of Uttarakhand) and langurs leaping between trees.<br>• As you climb higher, the tree line begins to fade, and the lush alpine meadows of Ali Bugyal open up — an ocean of green grass stretching endlessly, often kissed by soft mist.<br>• Snow peaks like Mt Trishul and Nanda Ghunti rise majestically in the backdrop.<br>• Depending on the season, wild horses graze peacefully on the slopes.<br>• Overnight stay in tents or homestay at Ali Bugyal; expect cold winds and a stunning night sky."
  },
  {
    day: 4,
    title: "Ali Bugyal to Patar Nachauni (12,818 ft)",
    details: "• Trek Distance: ~6–10 km | Duration: ~4–6 hrs.<br>• Begin your day with a gentle traverse across the meadow linking Ali Bugyal to Bedni Bugyal — one of India’s largest alpine meadows with spellbinding 360° views.<br>• Visit the sacred Bedni Kund (lake) reflecting the Trishul massif; locals believe Goddess Nanda Devi blesses every traveler here.<br>• The trail gradually ascends beyond the meadow as you enter higher, more rugged terrain towards Patar Nachauni.<br>• Weather turns colder and windier; nights can dip close to 0 °C even in summer.<br>• Camp at Patar Nachauni overlooking the vast alpine bowl under a starry sky."
  },
  {
    day: 5,
    title: "Patar Nachauni to Bhagwabasa (14,100–14,500 ft)",
    details: "• Trek Distance: ~5–7 km | Duration: ~4–5 hrs.<br>• The trail steepens today, climbing over rocky switchbacks towards Kalu Vinayak temple — a small stone shrine perched dramatically at ~14,200 ft.<br>• From here, the panorama widens — Nanda Ghunti, Chaukhamba, and Trishul appear spectacularly close.<br>• Descend slightly over boulder-strewn moraine to reach Bhagwabasa, the last campsite before the lake.<br>• Vegetation fades; the landscape turns barren and grey with patches of snow even in early summer.<br>• Nights here are frigid with sub-zero temperatures; strong winds are common.<br>• Overnight stay in tents surrounded by the raw grandeur of high Himalayas."
  },
  {
    day: 6,
    title: "Bhagwabasa to Roopkund Lake (15,750 ft) and back to Patar Nachauni",
    details: "• Trek Distance: ~10–12 km | Duration: ~8–9 hrs (round trip).<br>• Early pre-dawn start (around 3–4 AM) to catch firm snow and clear weather.<br>• The climb is steep and zigzagging over snow slopes, scree, and rocky patches leading to the fabled Roopkund Lake — a glacial tarn nestled in a crater surrounded by snow walls.<br>• When the snow melts, human skeletons dating back centuries can be seen at the edge of the lake — one of the great mysteries of the Himalayas.<br>• Important seasonal note: In May–June, the trail beyond Bhagwabasa often has a mix of hard ice and soft snow, making it slippery and risky. Always walk strictly under your guide’s supervision — no selfies or rushing at any point.<br>• Descending on snow from Roopkund to Bhagwabasa can be equally tricky; take extreme caution and use trekking poles properly.<br>• Sunglasses are **mandatory** on this stretch to prevent snow blindness — the glare from early morning snow can be intense and disorienting.<br>• The climb to Junargali Top (16,200 ft) is **tricky** during icy conditions in May–June but opens up post-monsoon (September–October) when snow has melted. During that season, trekkers can climb safely to Junargali for a spectacular close view of Mt Trishul — appearing almost at arm’s distance.<br>• Weather at this altitude can change rapidly — if strong winds, whiteout, or snowfall occur, the **turnaround point will be decided by the trek leader/guide** for safety reasons.<br>• After spending some quiet moments at the lake, descend carefully to Bhagwabasa for breakfast, then continue down to Patar Nachauni by afternoon.<br>• Expect biting cold winds before sunrise and softening snow after 8 AM, which can make footing unstable — start early and maintain a steady, cautious pace.<br>• Overnight stay in tents at Patar Nachauni."
  },
  {
    day: 7,
    title: "Patar Nachauni to Wan Village (7,900–8,200 ft) + Drive to Lohajung",
    details: "• Trek Distance: ~12–17 km | Duration: ~6–7 hrs.<br>• Begin descent through rolling meadows and retrace the path via Bedni Bugyal and Ghora Lotani, where you might spot mountain goats and Himalayan eagles circling above.<br>• The trail passes through Doliya Dhar ridges with occasional rocky patches — trekking poles are highly recommended to protect knees during the steep descent.<br>• As you descend below the tree line, the temperature warms and forest fragrances return — pine, oak, and rhododendron canopy the trail.<br>• Cross the Neel Ganga river again before the final short climb to Wan village.<br>• A 45-minute scenic drive brings you back to Lohajung.<br>• Relax with a hot meal, share stories, and enjoy your last night in the mountains."
  },
  {
    day: 8,
    title: "Lohajung to Kathgodam / Rishikesh",
    details: "• Drive Distance: ~210–230 km | Duration: ~9–11 hrs.<br>• After breakfast, bid farewell to the trek team and retrace the mountain roads down to the plains.<br>• Expect changing landscapes — dense forests giving way to terraced fields and finally the bustling towns of Kumaon/Garhwal.<br>• Reach Kathgodam or Rishikesh by evening/night — trek concludes with lifelong memories of the mysterious lake and the grand meadows of Roopkund."
  },
],

    didYouKnow: [
  "Roopkund Lake lies at 15,750 ft and is famously known as the ‘Skeleton Lake’ because over 300 human skeletons dating back to the 9th century were discovered at its bottom — a mystery linked to a rare hailstorm disaster uncovered by scientists only recently.",
  
  "The Roopkund trail passes through Bedni Bugyal and Ali Bugyal, two of Asia’s largest alpine meadows, carpeted with wildflowers like Brahma Kamal, blue poppies, and primulas in summer. These grasslands also offer majestic panoramas of Mt. Trishul and Nanda Ghunti.",
  
  "Roopkund lies on the ancient route of the sacred Nanda Devi Raj Jat Yatra — a grand pilgrimage that happens once every 12 years. Devotees trek for over 280 km from Nauti village to Homkund, carrying a four-horned ram believed to be a messenger of Goddess Nanda Devi.",
  
  "Lohajung, the starting point of the trek, literally means ‘War of Iron’. Local folklore says it’s named after a mythical battle fought between Goddess Parvati and a demon. The charming mountain village also serves as a gateway to several Kumaon and Garhwal treks.",
  
  "The small hamlet of Wan, your trek’s ending point, is one of the last inhabited villages in this part of Uttarakhand. Its ancient Latu Devta temple is closely tied to the Nanda Devi legend — locals believe you must cover your head and enter barefoot to pay respect.",
  
  "Wildlife enthusiasts often spot Himalayan monals, yellow-billed choughs, and even musk deer along the trail. The changing vegetation — from oak and rhododendron forests to alpine meadows — makes Roopkund one of the most ecologically diverse Himalayan treks.",
  
  "September to early October is the best time for clear mountain views and to glimpse the skeletal remains when the lake’s snow cover melts. May–June, on the other hand, transforms the meadows into a paradise of flowers, making both seasons uniquely rewarding."
],

    howToReach: {
      air: "Nearest Airport: Jolly Grant Airport, Dehradun. Then drive to Kathgodam → Lohajung.",
      train: "Nearest major Railway Station: Kathgodam. Then drive to Lohajung (approx 9-10 hours).",
      road: "Regular bus/cab from Rishikesh/Dehradun to Lohajung (~250 km, 9–10 hrs).",
      travelTip: "Reach Lohajung a day early and acclimatise; carry cash and essentials as facilities get limited beyond Didna/Wan."
    },

    gallery: [
      // add actual URLs of images
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1761152218/roopkund-view5_rrommv.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1761152216/roopkund-view3_sy0g9r.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1761152216/roopkund-view4_iz8m4r.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1761152210/roopkund-view1_ysjscz.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1761152209/roopkund-hero_vl6thl.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1761152206/roopkund-view21_e0jal1.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1761152222/roopkund-view2_qqkkdh.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1761152204/roopkund-view20_dwm0ya.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1761152202/roopkund-view19_ozdstu.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1761152200/roopkund-view18_fobwqf.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1761152199/roopkund-view17_v3xxq5.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1761152198/roopkund-view16_btpbkg.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1761152195/roopkund-view14_d0eydz.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1761152195/roopkund-view15_escvrp.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1761152194/roopkund-view13_sksjy0.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1761152191/roopkund-view12_gq1ugj.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1761152190/roopkund-view11_kh2y52.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1761152188/roopkund-view9_kyctab.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1761152189/roopkund-view10_ix3gpv.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1761152187/roopkund-view6_lkvsxo.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1761152187/roopkund-view7_z8cxdp.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1761153775/IMG_20180522_073851_fgrqqb.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1761153766/IMG_20180522_073626_rpdqks.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1761153747/IMG_20170919_090518_jkbosf.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1761153744/IMG_20180521_125815-EFFECTS_itx8tn.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1761153711/IMG_20170921_070505_ysolij.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1761153698/IMG_20180522_073321_ih9icw.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1761153627/IMG_20170921_062819_nybboj.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1761153610/IMG_20170920_092449_dfp5t1.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1761153581/IMG_20170921_075317_evymnt.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1761153573/IMG_20170918_135501_ngfrtw.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1761153566/IMG_20170920_182915_bgutd4.jpg",
    ],

    downloadLink: "/docs/Himalayan_Trek_Packing_List.pdf",

    faqs: {
  questions: [
    {
      question: "Who can participate in the Roopkund trek?",
      answer: "This trek is suitable for individuals with good physical fitness and some high-altitude trekking experience. It involves steep ascents, high camps and variable terrain."
    },
    {
      question: "What should I pack for the Roopkund trek?",
      answer: "Essential items include waterproof trekking shoes, layered clothing, 50 L rucksack with rain cover, thermal wear, sleeping bag rated for cold nights, headlamp, trekking poles."
    },
    {
      question: "Is camping allowed at the alpine meadows like Bedni Bugyal or Ali Bugyal?",
      answer: "Some high-altitude meadows are ecologically fragile and may be subject to restrictions or bans on overnight camping — please check with your trek operator for latest updates."
    },
    {
      question: "Will there be mobile network coverage during the trek?",
      answer: "Mobile network is limited. You may get some signal at Lohajung or Didna, but beyond that expect very little or none — inform family accordingly."
    },
    {
      question: "What permits are required for the Roopkund trek?",
      answer: "You would typically need forest/wildlife permits and entry passes for the area. Permit formalities are usually handled by the trek operator."
    },
    {
      question: "What is the best season to do the Roopkund trek?",
      answer: "The ideal windows are **May-June** (late spring) when alpine meadows bloom and snow remains at higher altitudes, and **September-October** (early autumn) when skies are clear and the “Skeleton Lake” becomes visible. :contentReference[oaicite:2]{index=2}"
    },
    {
      question: "What wildlife and flora can I spot on this trek?",
      answer: "On the Roopkund trail you pass through oak and rhododendron forests, alpine meadows and snow-high ridges. You may spot Himalayan monals, yellow-billed choughs, musk deer and a variety of wildflowers like blue poppies and brahma kamal. :contentReference[oaicite:3]{index=3}"
    },
    {
      question: "How difficult is the Roopkund trek and what fitness level is required?",
      answer: "The trek is rated Moderate-to-Difficult: there are sudden elevation gains (from ~7,700 ft at Lohajung up to ~15,750 ft at Roopkund), snow patches, exposed ridges and steep climbs. Preparation with cardio, altitude awareness and proper gear is essential. :contentReference[oaicite:4]{index=4}"
    },
    {
      question: "Can I still reach Roopkund if overnight camping on meadows is banned?",
      answer: "Camping in certain meadows may be restricted. While the trail is open, some operators avoid overnight stays in specific zones to comply with regulations — check with your operator for the current status. :contentReference[oaicite:5]{index=5}"
    },
    {
      question: "What are the temperature and weather conditions I should expect?",
      answer: "During May–June daytime temps may range from 8-15 °C at higher altitudes, while nights can drop to below zero. In September–October, day temps may be 7-12 °C; nights drop to –2 °C to –7 °C. :contentReference[oaicite:6]{index=6}"
    }
  ]

    },
    faqsLink: "/pages/faqs-and-articles",
  },

  {
  id: "sandakphu-trek",
  name: "Sandakphu Trek",
  tags: ["beginner"],
  difficulty: ["moderate"],
  season: ["winter", "spring", "autumn"],
  month: ["october", "november", "december", "january", "february", "march", "april", "may"],
  region: ["west bengal", "nepal"],
  duration: "6 Nights / 7 Days",
  coordinates: [
    [26.8826, 88.1584], // Manebhanjan (Start)
    [26.9504, 88.1067], // Tumling
    [27.0150, 88.0710], // Kalipokhri
    [27.0604, 88.0256], // Sandakphu Top
    [27.0630, 88.0014], // Phalut
    [26.9601, 88.0670], // Gorkhey
    [26.9084, 88.1473]  // Srikhola (End)
  ],

  heroImage: "https://res.cloudinary.com/dr44hob9b/image/upload/v1761628707/sandakphu-hero_recfo0.jpg",

  heroImages: ["https://res.cloudinary.com/dr44hob9b/image/upload/v1761628707/sandakphu-hero_recfo0.jpg",
                "https://res.cloudinary.com/dr44hob9b/image/upload/v1761628658/sadakphu-view16_vsefge.jpg",            
                "https://res.cloudinary.com/dr44hob9b/image/upload/v1761628742/sadakphu-view12_pygien.jpg",
                "https://res.cloudinary.com/dr44hob9b/image/upload/v1761628729/sadakphu-view4_ih8lem.jpg",  
  ],

  subtitle: "Sleeping Buddha Trail – Gateway to the Eastern Himalayas",

  seo: {
    title: "Sandakphu Trek | Itinerary, Cost & Dates | Planethimalayas",
    description: "Sandakphu Trek (11,930 ft) – West Bengal’s highest point on the Singalila Ridge offering views of Mt. Everest, Kanchenjunga, Lhotse, and Makalu. A scenic Indo-Nepal border trek through rhododendron forests, villages, and mountain viewpoints."
  },

  overview: {
    facts: [
      { emoji: "⏳", label: "Trek Duration", value: "6 Nights / 7 Days" },
      { emoji: "⚡", label: "Trek Grade", value: "Moderate" },
      { emoji: "🏔️", label: "Max Altitude", value: "11,930 ft (Sandakphu Top)" },
      { emoji: "📏", label: "Total Trek Distance", value: "≈ 80 km" },
      { emoji: "🌤️", label: "Best Time", value: "October–May" },
      { emoji: "🗺️", label: "Region", value: "Singalila Ridge, Darjeeling District" },
      { emoji: "📍", label: "Start Point", value: "Manebhanjan (Darjeeling, West Bengal)" },
      { emoji: "🏁", label: "End Point", value: "Srikhola (West Bengal)" },
      { emoji: "🧥", label: "Cloakroom facility", value: "Available" },
    ],
    snippet: `The Sandakphu–Phalut Trek is a journey along one of the most iconic ridgelines in the Himalayas — a trail that rises and falls along the Indo–Nepal border, revealing the world’s greatest mountains in one sweeping frame. From the very first day, the landscape feels different: moss-covered oak forests humming with birdlife, mist drifting through ancient rhododendron trees, and long undulating paths that open suddenly into wide, wind-carved meadows.

<br>As you climb higher into the Singalila Ridge, the horizon sharpens into a jaw-dropping panorama — Everest, Lhotse, Makalu, and Kanchenjunga standing together like a silent wall of giants. At dawn, these peaks ignite in soft pink light, while at dusk the entire ridge glows in deep gold and crimson. The Sleeping Buddha — the legendary silhouette formed by Kanchenjunga and its neighbouring peaks — appears so close at sunrise that it feels alive, breathing with the rhythm of the mountains.

<br>The route winds through the heart of Singalila National Park, a sanctuary of rare Himalayan biodiversity. Here, dense forests hide red pandas, black bears, yellow-throated martens, and an astonishing variety of high-altitude birds. Spring transforms the trail into a natural festival of blooming rhododendrons and magnolias, while autumn offers crystal-clear skies and crisp mountain winds.

<br>Trekkers walk through charming border villages like Tumling, Kalipokhri, and Gorkhey — quiet settlements where prayer flags flutter from rooftops, children play outside stone houses, and warm homestays serve Himalayan meals cooked with local ingredients. The blend of Nepali and Indian cultures along this route is unlike anywhere else in the Himalayas: a fusion of languages, traditions, and hospitality that enriches every step of the journey.

<br>From cloud-draped forests to ridges that soar above the world, Sandakphu and Phalut offer an experience that balances adventure with soulful beauty — a trek where the mountains feel close, the culture feels alive, and every viewpoint leaves you humbled by the scale of the Eastern Himalayas. Perfect for fit beginners and seasoned trekkers alike, this is a route that stays with you long after the trail ends.`
  },

  price: 12900,
  priceNote: "* Manebhanjan to Srikhola",
  addons: {
    transport: 2500,
    offloadingbag: 3500,
    transportNote: "* NJP / Bagdogra to NJP / Bagdogra",
    offloadingNote: "* Maximum weight 9kg/bag"
  },

  inclusionsNote: "🍽️ All Meals – from dinner on Day 1 to breakfast on Day 7",

  dates: [
      { label: "03 Jan - 09 Jan", start: "2026-01-03", end: "2026-01-09" },
      { label: "04 Jan - 10 Jan", start: "2026-01-04", end: "2026-01-10" },
      { label: "10 Jan - 16 Jan", start: "2026-01-10", end: "2026-01-16" },
      { label: "11 Jan - 17 Jan", start: "2026-01-11", end: "2026-01-17" },
      { label: "17 Jan - 23 Jan", start: "2026-01-17", end: "2026-01-23" },
      { label: "18 Jan - 24 Jan", start: "2026-01-18", end: "2026-01-24" },  
      { label: "24 Jan - 30 Jan", start: "2026-01-24", end: "2026-01-30" },
      { label: "25 Jan - 31 Jan", start: "2026-01-25", end: "2026-01-31" },
      { label: "31 Jan - 06 Feb", start: "2026-01-31", end: "2026-02-06" },
      { label: "01 Feb - 07 Feb", start: "2026-02-01", end: "2026-02-07" },
      { label: "07 Feb - 13 Feb", start: "2026-02-07", end: "2026-02-13" },
      { label: "08 Feb - 14 Feb", start: "2026-02-08", end: "2026-02-14" },
      { label: "14 Feb - 20 Feb", start: "2026-02-14", end: "2026-02-20" },
      { label: "15 Feb - 21 Feb", start: "2026-02-15", end: "2026-02-21" },    
      { label: "21 Feb - 27 Feb", start: "2026-02-21", end: "2026-02-27" },
      { label: "22 Feb - 28 Feb", start: "2026-02-22", end: "2026-02-28" },
      { label: "28 Feb - 06 Mar", start: "2026-02-28", end: "2026-03-06" },
      { label: "01 Mar - 07 Mar", start: "2026-03-01", end: "2026-03-07" },    
      { label: "07 Mar - 13 Mar", start: "2026-03-07", end: "2026-03-13" },
      { label: "08 Mar - 14 Mar", start: "2026-03-08", end: "2026-03-14" },   
      { label: "14 Mar - 20 Mar", start: "2026-03-14", end: "2026-03-20" },
      { label: "15 Mar - 21 Mar", start: "2026-03-15", end: "2026-03-21" },    
      { label: "21 Mar - 27 Mar", start: "2026-03-21", end: "2026-03-27" },
      { label: "22 Mar - 28 Mar", start: "2026-03-22", end: "2026-03-28" },
      { label: "28 Mar - 03 Apr", start: "2026-03-28", end: "2026-04-03" },
      { label: "29 Mar - 04 Apr", start: "2026-03-29", end: "2026-04-04" },    
      { label: "04 Apr - 10 Apr", start: "2026-04-04", end: "2026-04-10" },
      { label: "05 Apr - 11 Apr", start: "2026-04-05", end: "2026-04-11" },    
      { label: "11 Apr - 17 Apr", start: "2026-04-11", end: "2026-04-17" },
      { label: "12 Apr - 18 Apr", start: "2026-04-12", end: "2026-04-18" },    
      { label: "18 Apr - 24 Apr", start: "2026-04-18", end: "2026-04-24" },
      { label: "19 Apr - 25 Apr", start: "2026-04-19", end: "2026-04-25" },   
      { label: "25 Apr - 01 May", start: "2026-04-25", end: "2026-05-01" },
      { label: "26 Apr - 02 May", start: "2026-04-26", end: "2026-05-02" },
    ],

  highlights: [
    "View the legendary Sleeping Buddha formation including Kanchenjunga, Pandim & Kumbhakarna",
    "See four of the world’s five highest peaks from one viewpoint — Everest, Lhotse, Makalu, and Kanchenjunga",
    "Walk along the Indo–Nepal border through forests of rhododendron and bamboo",
    "Experience the Singalila National Park – home to the elusive Red Panda",
    "Stay in charming Nepali and Sikkimese tea houses offering warm hospitality and hot local food",
    "Panoramic sunrise and sunset from Tumling, Sandakphu, and Phalut",
    "Blend of Indian, Nepali, and Tibetan cultures across villages"
  ],

  itinerary: [
    {
      day: 1,
      title: "NJP / Bagdogra to Manebhanjan (7,054 ft)",
      details: "• Drive Distance: ~85 km | Duration: 4–5 hrs.<br>• Arrive at New Jalpaiguri (NJP) or Bagdogra Airport and drive through scenic Darjeeling hills via Sukhiapokhri to reach Manebhanjan, the gateway to Singalila National Park.<br>• The road winds through tea gardens and pine forests. Obtain your park entry permits here.<br>• Evening acclimatization walk around the bazaar and monastery.<br>• Overnight stay in a homestay or lodge at Manebhanjan."
    },
    {
      day: 2,
      title: "Manebhanjan to Tumling (9,700 ft)",
      details: "• Trek Distance: ~11 km | Duration: ~6–7 hrs.<br>• The trek begins with a steep ascent on a jeep track passing through dense oak and rhododendron forests.<br>• You’ll cross Chitre village (8,400 ft) with its Buddhist monastery, fluttering prayer flags, and views of the snowline.<br>• The trail meanders in and out of India and Nepal — you can literally have one foot in each country.<br>• Reach Tumling by afternoon, a quaint Nepali village offering the first panoramic view of the Sleeping Buddha.<br>• Stay in a warm tea house and enjoy a spectacular sunset over Kanchenjunga."
    },
    {
      day: 3,
      title: "Tumling to Kalipokhri (10,400 ft)",
      details: "• Trek Distance: ~13 km | Duration: ~6 hrs.<br>• The trail moves through Singalila National Park, alive with chirping birds and Himalayan flora.<br>• Cross Gairibas (8,600 ft) – a small settlement where you can rest and have tea.<br>• From here, the trail ascends gradually through bamboo and magnolia forest to Kaiyakatta and then Kalipokhri.<br>• The black sacred lake 'Kalipokhri' (meaning black water) is fringed by prayer flags.<br>• The air is crisp and cool, often with mist swirling over the lake in the evening.<br>• Overnight in tea house."
    },
    {
      day: 4,
      title: "Kalipokhri to Sandakphu (11,930 ft)",
      details: "• Trek Distance: ~6 km | Duration: ~3–4 hrs.<br>• A short but steep climb today as you gain nearly 1,500 ft.<br>• The trail passes Bikheybhanjang ('Valley of Poison'), named after a local poisonous herb.<br>• Final ascent to Sandakphu is steep but rewarding – the entire panorama of the world’s highest peaks opens up.<br>• On a clear day, see Kanchenjunga (8,586 m), Everest, Lhotse, Makalu, and many more.<br>• Sunrise and sunset from Sandakphu top is one of the most unforgettable sights in the Himalayas.<br>• Stay in a tea house; expect cold winds and sub-zero nights in winter."
    },
    {
      day: 5,
      title: "Sandakphu to Phalut (11,811 ft)",
      details: "• Trek Distance: ~21 km | Duration: ~7–8 hrs.<br>• A long ridge walk through rolling alpine meadows, rhododendron bushes, and dwarf bamboo.<br>• The route is mostly level with gentle ups and downs offering unending views of the snow range.<br>• Phalut is the highest point of the trek route and the best spot for a 360° view of the entire Everest–Kanchenjunga range.<br>• Overnight stay in a forest hut or trekkers’ hut at Phalut."
    },
    {
      day: 6,
      title: "Phalut to Gorkhey (7,546 ft)",
      details: "• Trek Distance: ~15 km | Duration: ~6–7 hrs.<br>• After sunrise at Phalut viewpoint, begin descent through forests of rhododendron, chestnut, and pine.<br>• Gorkhey is a stunning riverside hamlet surrounded by forests – one of the most beautiful Himalayan villages.<br>• Refresh your feet in the icy Gorkhey Khola stream.<br>• Stay in a wooden homestay and enjoy local food cooked over a wood stove."
    },
    {
      day: 7,
      title: "Gorkhey to Srikhola (6,800 ft) and drive to NJP / Bagdogra",
      details: "• Trek Distance: ~12 km | Duration: ~4 hrs + Drive ~6–7 hrs.<br>• The final leg is an easy descent through dense forest alive with birdsong.<br>• Cross Samanden and Rammam villages before reaching Srikhola.<br>• From Srikhola, drive back to NJP / Bagdogra.<br>• Trek concludes with lifetime memories of the Sleeping Buddha and warm village hospitality."
    }
  ],

  didYouKnow: [
    "The “Sleeping Buddha” formation isn’t just poetic — it’s a precise alignment of Himalayan peaks. When viewed from Sandakphu or Phalut, Kanchenjunga forms the torso, Kumbhakarna the face, and Pandim the feet, resembling a sleeping figure of Lord Buddha. This alignment is visible only from this part of the Eastern Himalayas.",
    "Sandakphu literally means “Height of the Poison Plant” — named after the Aconite flower, a rare Himalayan plant that grows abundantly here and is highly toxic if consumed.",
    "Singalila National Park, through which the trek passes, is one of the few regions in India where you can spot the endangered Red Panda in the wild. Bird enthusiasts can also find over 150 Himalayan species, including blood pheasants and satyr tragopans.",
    "The trail lies along the Indo–Nepal border, and at many points trekkers unknowingly walk in and out of both countries. Tea houses on one side of the ridge belong to India, while those on the other belong to Nepal — no checkpoints, just open friendship across borders.",
    "The region is home to the old British Land Rovers, dating back to the 1950s, which still operate between Manebhanjan and Sandakphu — one of the steepest motorable routes in the Himalayas.",
    "Spring (March–May) turns the trail into a riot of rhododendrons and magnolias, while winter (Nov–Jan) transforms it into a snowy wonderland with crystal-clear mountain views.",
    "Phalut, the highest point of the trek, holds immense spiritual significance for locals. The name derives from the Lepcha word “Falut”, meaning “peak at the end”, and locals believe it to be the abode of mountain deities.",
    "Spring (March–April) transforms the Singalila forests into a rhododendron paradise, while autumn (October–November) offers the clearest views of the Himalayan range. During winter, the upper trails turn into a snow wonderland, making it an all-season Himalayan gem.",
    "Despite being moderate in difficulty, the Sandakphu–Phalut trek is at high altitude (above 11,000 ft) and can experience sudden weather shifts — trekkers often witness clear blue skies one moment and swirling mist the next, making every day an unpredictable mountain drama.",
  ],

  howToReach: {
    air: "Nearest Airport: Bagdogra (IXB), ~85 km from Manebhanjan. Regular flights from Delhi, Kolkata, and Guwahati.",
    train: "Nearest Railway Station: New Jalpaiguri (NJP). Overnight trains from major Indian cities. From NJP, drive to Manebhanjan (4–5 hrs).",
    road: "Shared jeeps and taxis available from Siliguri, Darjeeling, or NJP to Manebhanjan. Permit for Singalila National Park obtained at entry gate.",
    travelTip: "Avoid arriving late in Manebhanjan — park permits close by evening. Carry some Nepali currency if needed for tea houses inside Nepal."
  },

  gallery: [
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1761628751/sandakphu-srikhola_a2s03s.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1761628750/sadakphu-view13_klc4xn.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1761628750/sadakphu-view11_hnw0jx.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1761628742/sadakphu-view9_pjse1w.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1761628742/sadakphu-view12_pygien.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1761628740/sadakphu-view8_eyihky.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1761628735/sadakphu-view10_wfuw3p.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1761628729/sadakphu-view4_ih8lem.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1761628729/sadakphu-view24_olab2e.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1761628728/sadakphu-view3_m3zlka.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1761628726/sadakphu-view2_n288nw.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1761628719/sandakphu-hero1_xw1zfc.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1761628720/sadakphu-view1_fdubez.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1761628713/sandakphu-gorkhey_zxmvsz.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1761628711/sadakphu-view22_vcj9je.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1761628707/sandakphu-hero_recfo0.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1761628701/sandakhphu-teahouse_x4udky.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1761628700/sadakphu-view23_ky6vma.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1761628695/sadakphu-view19_tqqrn9.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1761628690/sadakphu-view20_eidqak.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1761628681/sadakphu-view21_tsgjpu.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1761628679/sadakphu-view14_mbpgks.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1761628678/sadakphu-view18_hgcwhf.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1761628670/sadakphu-view7_rfddep.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1761628669/sadakphu-view6_eamnjf.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1761628666/sadakphu-view5_e4tfwn.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1761628657/sadakphu-view17_og2kn8.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1761628658/sadakphu-view16_vsefge.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1761628657/sadakphu-view15_yjeaxx.jpg",
  ],

  downloadLink: "/docs/Himalayan_Trek_Packing_List.pdf",

  faqs: {
    questions: [
      {
        question: "Who can participate in the Sandakphu trek?",
        answer: "Anyone with basic fitness and no major health issues can do this trek. Daily walks of 8–10 km are manageable due to gradual altitude gain and availability of tea houses. However, participants must be comfortable walking uphill for 5–6 hours a day."
      },
      {
        question: "Is this trek suitable for beginners?",
        answer: "Yes. The Sandakphu trek is among the best beginner-friendly Himalayan treks since accommodation and food are available en route, and altitude gain is gradual."
      },
      {
        question: "What’s the best season for the Sandakphu trek?",
        answer: "Spring (March–May) for rhododendrons, Autumn (October–December) for clear mountain views, and Winter (January–February) for snow-covered trails."
      },
      {
        question: "What kind of accommodation is available?",
        answer: "Unlike most treks, Sandakphu offers homestays and tea houses throughout the route with beds, blankets, and simple but warm local meals."
      },
      {
        question: "Is a permit required for this trek?",
        answer: "Yes. Singalila National Park permit is mandatory and issued at Manebhanjan. If you’re trekking via Nepalese sections, separate ID proof (passport, voter ID, or Aadhaar) is required but no visa."
      },
      {
        question: "What peaks are visible from Sandakphu?",
        answer: "The panoramic view includes Kanchenjunga, Pandim, Kumbhakarna, Kabru range, Everest, Lhotse, and Makalu — often called the ‘Sleeping Buddha’ formation."
      },
      {
        question: "What is the weather like during different seasons?",
        answer: "In Oct–Dec, expect clear skies with daytime 8–12°C and subzero nights. In March–April, temperatures are milder (5–15°C) and forests bloom. Winters (Dec–Feb) bring snow above Tumling."
      },
      {
        question: "What about mobile connectivity and power?",
        answer: "Network available at most villages (BSNL and Jio better). Tea houses offer charging (sometimes paid). No coverage between Phalut and Gorkhey."
      },
      {
        question: "Can vehicles reach Sandakphu?",
        answer: "Yes. A unique feature — Land Rovers (from British era) can reach Sandakphu via a motorable trail, though the ride is extremely rough. Most trekkers prefer walking."
      },
      {
        question: "Are there water sources en route?",
        answer: "Yes, every village and tea house provides filtered or boiled water. Carry two bottles and refill at stops. Streams also available between sections in summer."
      }
    ]
  },

  faqsLink: "/pages/faqs-and-articles",
},

{
  id: "pin-parvati-pass-trek",
  name: "Pin Parvati Pass Trek",
  tags: ["pass"],
  difficulty: ["difficult"],
  season: ["summer", "autumn"],
  month: ["july", "august", "september"],
  duration: ["10 Nights / 11 Days"],
  region: "himachal pradesh",
  coordinates: [
    [31.9985, 77.3588], // Barshaini (start)
    [32.0127, 77.4311], // Kheerganga
    [32.0442, 77.5189], // Tunda Bhuj
    [32.0761, 77.6123], // Thakur Kuan
    [32.0911, 77.7135], // Odi Thach
    [32.0985, 77.8262], // Mantalai Lake
    [32.0978, 77.8917], // Base Camp (Parvati side)
    [32.1022, 77.9445], // Pin Parvati Pass (17,450 ft)
    [32.1318, 77.9814], // Pin Valley
    [32.1862, 78.0544], // Mudh Village (end)
  ],

  heroImage: "https://res.cloudinary.com/dr44hob9b/image/upload/v1762191118/pin-parvati-pass-hero_wmee4d.jpg",

  heroImages: [
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1762191118/pin-parvati-pass-hero_wmee4d.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1762191174/pin-parvati-pass-hero1_tzhawk.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1762191120/pin-parvati-pass-hero2_il9meh.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1762191173/pin-parvati-pass-hero3_biwnrs.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1762191174/pin-parvati-pass-hero4_nen1ly.jpg",
  ],

  subtitle: "Traverse the Untamed Himalayas",

  seo: {
    title: "Pin Parvati Pass Trek | Route, Itinerary & Cost | Planethimalayas",
    description: "Pin Parvati Pass Trek (17,450 ft) is one of the most thrilling high-altitude crossovers in Himachal. A 11-day expedition that bridges lush Parvati Valley and stark Pin Valley of Spiti — glaciers, meadows, and raw Himalayan drama in one trek."
  },

  overview: {
    facts: [
      { emoji: "⏳", label: "Trek Duration", value: "10 Nights / 11 Days (+1 buffer day)" },
      { emoji: "⚡", label: "Trek Grade", value: "Difficult" },
      { emoji: "🏔️", label: "Max Altitude", value: "17,450 ft (Pin Parvati Pass)" },
      { emoji: "⚡", label: "Trek Distance", value: "≈110 Km" },
      { emoji: "🌤️", label: "Best Time", value: "July to September" },
      { emoji: "🗺️", label: "Region", value: "Kullu & Spiti, Himachal Pradesh" },
      { emoji: "📍", label: "Start Point", value: "Barshaini (near Kasol)" },
      { emoji: "🏁", label: "End Point", value: "Kaza, Spiti Valley" },
      { emoji: "🧥", label: "Cloakroom facility", value: "Not vailable" },
    ],

    snippet:
      "The Pin Parvati Pass Trek is far more than just a Himalayan trail — it’s a bold journey across two completely distinct worlds. On one side, the Parvati Valley greets you with its lush, emerald forests, cascading waterfalls, hot springs, and vibrant meadows alive with flowers and birdsong. On the other, the Pin Valley unfolds as a high-altitude cold desert, a land of ochre cliffs, sapphire skies, and barren stretches that seem untouched by time. At an astonishing 5,289 meters, the pass itself stands as the ultimate bridge between these extremes — a place where greenery gives way to arid lands, moisture yields to thin, crisp air, and gentle streams transform into ice-laden rivers. <br>The trek begins at Barshaini, near the quaint village of Kasol, where the trail winds through the dreamy meadows of Kheerganga and Odi Thach, each step immersing you deeper into the wild heart of Himachal. You traverse rivers, cross wooden bridges, navigate dense forests, and ascend flower-strewn meadows before reaching the serene glacial lake of Mantalai, a campsite cradled by the towering peaks. The final push to the pass is a test of endurance and mountain sense, negotiating glaciers, steep ascents, and unpredictable high-altitude conditions. The moment you stand on the pass, gazing at the dramatic transition from Parvati’s green abundance to the stark, almost surreal Spiti Valley, you feel the Himalayas in their raw, unfiltered glory. <br>This is not a trek for the faint-hearted. The Pin Parvati Pass demands stamina, acclimatization, and respect for the high-altitude wilderness, where help is far away, and every stream crossing, rock scramble, or icy patch carries its own risks. Yet, it is precisely this challenge that makes it so unforgettable. Along the way, you also witness the fascinating coexistence of Himalayan cultures — from the forest-dwelling communities of Parvati Valley to the resilient villages of Spiti, shaped entirely by their environment. Every day brings new perspectives, new terrain, and new moments of awe that imprint themselves on your memory."
  },

  price: 46900,
  priceNote: "* Barshaini to Kaza (Kasol to Spiti crossover)",
  addons: {
    transport: null,
    offloadingbag: 7500,
    transportNote: "* Trekkers can request transport arrangements from Manali to Barshaini and from Kaza back to Manali. Transport will be organized on the spot, and costs are to be shared by trekkers directly.",
    offloadingNote: "* Max weight 9 kg per bag."
  },

  inclusionsNote: "🍽️ All Meals – From dinner on Day 1 to packed lunch on Day 10",

  enquireOnly: true,

  highlights: [
    "A rare crossover connecting lush Parvati Valley to arid Spiti Valley",
    "Cross one of the highest Himalayan passes at 17,450 ft",
    "Witness dramatic terrain shifts — meadows, moraines, glaciers, and deserts",
    "Camp beside the sacred Mantalai Lake, the origin of the Parvati River",
    "Experience both Buddhist and Hindu cultures in a single trek route",
    "A challenging, raw, and rewarding trek for seasoned trekkers only"
  ],

 itinerary: [
  {
    day: 1,
    title: "Bhuntar (2,000M) to Barsheni (2,580M)",
    details: `• Distance: 50 kms | Duration: 2.5 hours<br>

• The trek begins with a relaxed start — assembling at Bhuntar and driving up to Barsheni, the trailhead for the Pin Parvati Pass trek. Bhuntar, just 11 km from Kullu, is well connected via its airport to major cities. The scenic drive of 50 km takes around 2.5 hours. From Barsheni, we trek a short stretch of less than 20 minutes to Kalga. The remainder of the day is spent going through the trek itinerary, meeting fellow trekkers, checking gear, and settling into your guesthouse or campsite. This day allows you to absorb the first glimpse of the Himalayan landscape and prepare for the adventure ahead.`
  },
  {
    day: 2,
    title: "Kalga (2,280M) to Kheerganga (2,960M)",
    details: `• Distance: 8 kms | Duration: 6 hours<br>

• Kalga is a quaint village in Parvati Valley, surrounded by apple orchards and colorful flora. The trail begins with a steep descent to the riverbed, followed by a moderate climb to Nakthan village — a tiny settlement of 20–30 households. Nakthan offers a brief respite and some refreshments, with views of the roaring Parvati River. From here, we continue through meadows and past Rudranag Temple, named after the nearby serpent-like waterfall. After crossing a wooden bridge over the Parvati River, the trail gradually ascends to Kheerganga. This campsite lies in the heart of a vast meadow, with natural hot springs perfect for a warm dip — likely the last for several days. The trail has multiple stream crossings, but plenty of rest points make it manageable.`
  },
  {
    day: 3,
    title: "Kheerganga (2,960M) to Tunda Bhuj (3,200M)",
    details: `• Distance: 11.37 kms | Duration: 4-5 hours<br>

• We begin early from Kheerganga, trekking through flower-strewn meadows. The trail alternates between muddy paths and flat terrain through dense forests. While the distance is moderate, the real challenge is resisting frequent halts to admire the landscape and capture photographs. The final stretch involves a steep climb through mucky terrain, followed by a short walk across meadows. As you spot the foamy waterfalls across the river, you'll know you've reached the Tunda Bhuj campsite, surrounded by cliffs and the gentle roar of the Parvati River.`
  },
  {
    day: 4,
    title: "Tunda Bhuj (3,200M) to Thakur Kuan (3,620M)",
    details: `• Distance: 5.24 kms | Duration: 3-4 hours<br>

• After breakfast, we leave Tunda Bhuj, following a trail dotted with meadows and cascading waterfalls. The day involves a 400M climb, making it a relatively easy trek. There is a tricky section about an hour into the trail, where landslides are possible, so caution is advised. As the tree line ends, the terrain becomes rocky. Thakur Kuan’s campsite is a vast pasture beside the Parvati River, with a nearby trolley bridge to explore if you arrive early.`
  },
  {
    day: 5,
    title: "Thakur Kuan (3,620M) to Odi Thatch (3,815M)",
    details: `• Distance: 9.66 kms | Duration: 4-5 hours<br>

• Today is thrilling, with two natural boulder bridges to cross — Pandu Pul 1 and Pandu Pul 2 — in the middle of the ferocious Parvati River. After the river-crossing adventure, the trail eases into a straight shepherd trail with multiple paths leading to Odi Thatch. This campsite, true to its name meaning 'meadows', is set in an expansive alpine pasture, offering a galactic-like panorama. Careful navigation is needed to follow the guide through the labyrinthine trail.`
  },
  {
    day: 6,
    title: "Odi Thatch (3,815M) to Mantalai Lake (4,096M)",
    details: `• Distance: 10.31 kms | Duration: 5-6 hours<br>

• The trail today is straightforward with gentle ascents until the final 300M climb to Mantalai Lake. Along the way, we reach Mini Mantalai, a junction where numerous streams converge. The lake is glacial, serene, and considered sacred, surrounded by the mighty Himalayas. The campsite is on the lake’s banks, offering a peaceful environment to relax and prepare for the higher altitude sections ahead.`
  },
  {
    day: 7,
    title: "Mantalai (4,096M) to Base Camp I (4,800M)",
    details: `• Distance: 4.45 kms | Duration: 5-6 hours<br>

• A demanding day with an 800M ascent. We start early before dawn while temperatures are lowest. The trail begins muddy with sections of loose scree. After crossing these, the ascent continues to a spur, then a moraine section which, though short, is challenging. Base Camp I sits on the edge of the Parvati glacier, offering spectacular views under moonlight or sunrise.`
  },
  {
    day: 8,
    title: "Base Camp I (4,800M) to Base Camp II via Pin Parvati Pass (5,289M)",
    details: `• Distance: 6.37 kms | Duration: 7-8 hours<br>

• Today is the summit push. An early start ensures firm ice for safer trekking. We traverse glaciers, negotiating open and hidden crevasses. The final 300–400M steep climb leads to the Pin Parvati Pass at 5,289M, with breathtaking views of Parvati Valley on one side and Pin Valley on the other. A long descent of about 1.5 km brings us to Base Camp II on the Pin Valley side, where we set up camp for the night.`
  },
  {
    day: 9,
    title: "Base Camp II (4,800M) to Wichkurung Thatch (3,500M)",
    details: `• Distance: 11.83 kms | Duration: 6 hours<br>

• The trail today is mostly descent. The first 3 km is steep, followed by river crossings and gentle flat stretches. After crossing streams and walking along the riverbank, we reach Wichkurung Thatch — a scenic, peaceful campsite in the Spiti region. The pace is easier, giving trekkers time to enjoy the high-altitude desert landscape.`
  },
  {
    day: 10,
    title: "Wichkurung Thatch (3,500M) to Mudh Village (3,970M) & Drive to Kaza (3,800M)",
    details: `• Distance: 15.26 kms | Duration: 5 hours trekking + 2-hour drive<br>

• The trail meanders through the wide-open Pin Valley, with multiple streams and unique high-altitude flora. We stop for lunch by a stream, absorbing the barren yet mesmerizing landscape. The trek ends at Mudh Village, the last settlement in Pin Valley, where you can explore local culture and cuisine. Afterwards, we drive for about 2 hours to Kaza, the administrative hub of Spiti Valley, for overnight stay in a guesthouse.`
  },
  {
    day: 11,
    title: "Kaza (3,800M) to Manali (2,050M) / Buffer Day",
    details: `• Distance: ~200 km | Duration: 9–10 hours drive<br>

• Kaza is the largest township of Spiti, with monasteries and small hamlets nearby to explore. We drive down to Manali via Kunzum La and Rohtang Pass. In case of delays due to weather or unforeseen circumstances, Day 12 acts as a buffer day. If used, an additional INR 5,000 per person is collected by the trek leader in Kaza. End of trek — a hot shower, hearty meal, and memories for a lifetime.`
  },
  {
    day: 12,
    title: "Buffer Day",
    details: 
`Day 12 is reserved as a buffer to account for unexpected weather changes, trail conditions, or other unforeseeable circumstances. While most trekkers may not need it, it ensures the group has flexibility without compromising safety. If this day is utilized, an additional INR 5,000 per person will be collected by the trek leader in Kaza. It’s advisable to keep this day in mind while planning your travel back, so that your journey ends safely and comfortably.`
  },
],

  howToReach: {
    air: "<br>• Bhuntar Airport (near Kullu) is the closest, about 50 km from Kasol / Barshaini.<br>• Chandigarh Airport offers better connectivity; drive to Kasol takes about 8–9 hrs.<br><em>Shared or private cabs available from Bhuntar to Barshaini (₹1,500–₹3,000)</em>",
    train: "Joginder Nagar Railway Station (~125 km from Kasol) is the nearest narrow-gauge line; Chandigarh and Pathankot are better connected options for major trains.",
    road: "<br>• Regular overnight Volvo buses run from Delhi to Bhuntar or Manali.<br>• From Bhuntar, local taxis connect to Kasol and Barshaini.",
    travelTip: "Start early for the drive to Barshaini to avoid mountain traffic near Kasol."
  },

  didYouKnow: [
    "<b>Pin Parvati Pass was discovered by accident in 1884!</b> <br>British surveyors crossed it while mapping routes between Kullu and Spiti — they had no idea a natural route even existed until then.",
    "<b>The trek connects two completely different worlds.</b> <br>Parvati Valley’s lush meadows and hot springs suddenly give way to Spiti’s dry, high-altitude desert — a surreal transition in just two days.",
    "<b>Mantalai Lake is considered sacred.</b> <br>Locals believe it’s where Lord Shiva meditated. You’ll often see small stone shrines and prayer flags near its shores.",
    "<b>Wildlife on the trail is rare but fascinating.</b> <br>You may spot Himalayan blue sheep, marmots, or even footprints of snow leopards near the higher camps.",
    "<b>It’s a non-technical trek, but not without serious challenges.</b> <br>While you don’t need advanced climbing skills, the trail includes steep sections, river crossings, glacier stretches, and rocky terrain where extreme caution is necessary. The wilderness is remote, with help often far away, so trekkers must be well-prepared, vigilant, and self-reliant throughout this high-altitude journey.",
    "<b>Pin Valley is part of the Cold Desert Biosphere Reserve.</b> <br>The region’s unique geology and rare high-altitude flora make it one of India’s most striking landscapes."
  ],

  gallery: [
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1762191227/pin-parvati-pass-view6_h4eopd.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1762191226/pin-parvati-pass-view4_uoz9kw.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1762191213/pin-parvati-pass-view5_dxm14k.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1762191208/pin-parvati-pass-view3_upywlf.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1762191198/pin-parvati-pass-view2_xgyrkx.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1762191185/pin-parvati-pass-view1_xinpz5.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1762191174/pin-parvati-pass-hero4_nen1ly.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1762191174/pin-parvati-pass-hero1_tzhawk.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1762191173/pin-parvati-pass-hero3_biwnrs.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1762191138/pin-parvati-pass-view32_jpfpjy.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1762191133/pin-parvati-pass-view33_ifw6hn.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1762191120/pin-parvati-pass-hero2_il9meh.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1762191124/pin-parvati-pass-view30_evtqhz.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1762191118/pin-parvati-pass-hero_wmee4d.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1762191100/pin-parvati-pass-view24_ylkggh.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1762191098/pin-parvati-pass-view28_ecsbsq.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1762191097/pin-parvati-pass-view31_qa6qlz.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1762191084/pin-parvati-pass-view27_rakjcr.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1762191080/pin-parvati-pass-view21_mw163u.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1762191077/pin-parvati-pass-view26_qg4zpy.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1762191077/pin-parvati-pass-view29_fbn5w4.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1762191065/pin-parvati-pass-view20_kqa8xy.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1762191058/pin-parvati-pass-view17_soyif8.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1762191053/pin-parvati-pass-view23_lao9fx.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1762191041/pin-parvati-pass-view25_qleo8d.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1762191031/pin-parvati-pass-view16_rg6hmk.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1762191020/pin-parvati-pass-view22_xo2eue.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1762191016/pin-parvati-pass-view18_hqgcwr.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1762191010/pin-parvati-pass-view13_kxs6lz.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1762191003/pin-parvati-pass-view15_jz5ttl.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1762191002/pin-parvati-pass-view19_c1dxs4.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1762190992/pin-parvati-pass-view9_kaakgq.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1762190988/pin-parvati-pass-view14_tlh415.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1762190979/pin-parvati-pass-view8_dvy2w9.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1762190950/pin-parvati-pass-view12_i1ie0h.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1762190950/pin-parvati-pass-view7_yczld4.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1762190948/pin-parvati-pass-view10_arrpcz.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1762190911/pin-parvati-pass-view11_vt5w1s.jpg"
  ],

  downloadLink: "/docs/Himalayan_Trek_Packing_List.pdf",

  faqs: {
    questions: [
      {
        question: "Is Pin Parvati Pass trek suitable for beginners?",
        answer:
          "No. This is a difficult, high-altitude trek recommended only for experienced trekkers with prior exposure to 14,000+ ft treks. You must be physically fit and mentally prepared for long days, snowfields, and river crossings."
      },
      {
        question: "What is the best time for Pin Parvati Pass?",
        answer:
          "Mid-July to late September is ideal, when snow has melted enough to make the pass accessible and Spiti roads are open."
      },
      {
        question: "How should I prepare for the Pin Parvati Pass Trek?",
        answer:
          "Preparing for the Pin Parvati Pass trek requires both physical and mental readiness. Physically, focus on endurance training, long hikes with backpacks, and altitude acclimatization if possible. Mentally, be ready for challenging terrain, river crossings, and unpredictable weather — staying positive, patient, and alert will make the experience safer and more rewarding."
      },
      {
        question: "How challenging is the pass crossing day?",
        answer:
          "It’s the toughest day of the trek — 8–9 hrs of continuous walking over moraine and snowfields, with a steep climb to the pass and long descent. Early start and proper acclimatization are key."
      },
      {
        question: "Is camping allowed near Mantalai Lake?",
        answer:
          "Yes, but campsites are limited. It’s a sacred site — trekkers must maintain silence and avoid littering. No washing or cooking directly at the lake’s edge."
      },
      {
        question: "Will I get mobile network during the trek?",
        answer:
          "Network is available only till Barshaini/Kheerganga. After that, it’s a complete digital detox till you reach Mudh in Spiti."
      },
      {
        question: "What kind of gear do I need?",
        answer:
          "Good trekking shoes, multiple warm layers, waterproof jacket, poles, headlamp, and snow gloves. Crampons/microspikes may be needed depending on snow."
      },
      {
        question: "Can the trek be done in reverse (from Spiti to Parvati)?",
        answer:
          "Technically yes, but it’s tougher due to steeper ascent from the Spiti side and difficult acclimatization. Most organized groups do it from Parvati to Spiti for safety and better altitude gain."
      },
      {
        question: "What makes this trek special?",
        answer:
          "The Pin Parvati Pass offers one of the most dramatic landscape shifts in the Indian Himalayas — from lush greenery to stark desert — making it both physically demanding and visually unforgettable."
      },
      
    ]
  }
},

  // Add other trek objects here...
];
