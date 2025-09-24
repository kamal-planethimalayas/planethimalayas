// src/data/treksData.js
export const treks = [
  {
    id: "pin-bhaba-pass-trek",
    name: "Pin Bhaba Pass Trek",
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
    subtitle: "The Most Beautiful Himalayan Crossover",

    seo: {
    title: "Pin Bhaba Pass Trek | Itinerary, Cost & Dates | Planethimalayas",
    description: "Pin Bhaba Pass Trek (16,105 ft) is Himachal’s most dramatic crossover from lush Kinnaur to stark Spiti. 7 days of forests, rivers, meadows, and high-altitude adventure."
  },

    overview: {
      facts: [
        { emoji: "⏳", label: "Trek Duration", value: "6 Nights / 7 Days" },
        { emoji: "⚡", label: "Trek Grade", value: "Moderate to Difficult" },
        { emoji: "🏔️", label: "Max Altitude", value: "16,105 ft (Pin Bhaba Pass)" },
        { emoji: "⚡", label: "Trek Distance", value: "50 Km" },
        { emoji: "🌤️", label: "Best Time", value: "July to mid-September" },
        { emoji: "🗺️", label: "Region", value: "Crossover from Bhaba Valley in Kinnaur to Pin Valley in Spiti, H.P." },      
        { emoji: "📍", label: "Start Point", value: "Kafnu (Kinnaur Valley, H.P.)" },
        { emoji: "🏁", label: "End Point", value: "Mudh (Spiti Valley, H.P.)" },
        { emoji: "🧥", label: "Cloakroom facility", value: "Not available" },                
      ],
      snippet: `Pin Bhaba Pass Trek is one of the most dramatic crossover treks in the Indian Himalayas, connecting the lush green valleys of Kinnaur with the stark, high-altitude deserts of Spiti. Starting from dense forests and vibrant meadows, the trail gradually opens into vast landscapes, glacial streams, and finally the otherworldly terrain of Spiti. At 16,100 ft, the pass offers breathtaking views of snow-clad peaks and a thrilling transition between two strikingly different worlds. Perfect for trekkers seeking variety, adventure, and raw Himalayan beauty, Pin Bhaba Pass is truly a once-in-a-lifetime journey. Unlike its harsher sibling Pin Parvati, this trail is gentler yet equally rewarding, with river crossings, flower-filled meadows of Kara and Phutsirang, and dramatic contrasts between Kinnaur’s pine valleys and Spiti’s barren slopes. The trek also passes through remote villages where ancient Buddhist culture thrives, giving trekkers a rare chance to experience both natural grandeur and cultural richness in a single journey.`,
    },

    price: 17500,
    priceNote: "* Kafnu to Kaza",
    addons: {
      transport: 4000,
      offloadingbag: 5600,
      transportNote: "* Shimla to Manali"
    },

    inclusionsNote: "🍽️ All Meals – Nutritious meals provided from dinner on Day 1 to lunch on Day 6",

    dates: [
      { label: "27 Sep - 03 Oct", start: "2025-09-27", end: "2025-10-03" },
      { label: "28 Sep - 04 Oct", start: "2025-09-28", end: "2025-10-04" },
      { label: "04 Oct - 10 Oct", start: "2025-10-04", end: "2025-10-10" },
      { label: "05 Oct - 11 Oct", start: "2025-10-05", end: "2025-10-11" },
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
    day: 1, 
    title: "Shimla to Kafnu (7,900 ft)", 
    details: "• Drive distance: ~200 km (7–8 hours). <br>• The journey follows the historic Hindustan–Tibet highway, crossing apple orchards, pine forests, and riverside villages of Kinnaur. <br>• Kafnu, a quaint Himalayan village by the Bhaba River, is the trek’s starting point. <br>• Overnight stay in a guesthouse or homestay at Kafnu." 
  },
  { 
    day: 2, 
    title: "Kafnu to Mulling (10,800 ft)", 
    details: "• Trek distance: ~11 km | Duration: 6–7 hours | Altitude gain: ~2,900 ft. <br>• Trail begins with a gentle ascent through pine and oak forests, with occasional waterfalls and shepherd huts. <br>• Cross wooden bridges over the Bhaba River, with the sound of gushing streams accompanying the climb. <br>• The campsite at Mulling lies in an open meadow with sweeping views of surrounding peaks. <br>• Overnight stay in tents at Mulling." 
  },
  { 
    day: 3, 
    title: "Mulling to Kara (11,700 ft)", 
    details: "• Trek distance: ~6 km | Duration: 4–5 hours | Altitude gain: ~900 ft. <br>• The trail flattens out, following the river through wide valleys and open alpine meadows. <br>• Vibrant flowers carpet the landscape in summer, while snowy ridges tower above. <br>• Kara campsite is one of the most picturesque on the trek, set beside the Bhaba River. <br>• Overnight stay in tents at Kara." 
  },
  { 
    day: 4, 
    title: "Kara to Phustirang (13,500 ft)", 
    details: "• Trek distance: ~5 km | Duration: 4–5 hours | Altitude gain: ~1,800 ft. <br>• Trail climbs steadily over rocky terrain, with panoramic views of towering peaks and hanging glaciers. <br>• The approach to Phustirang takes you closer to the base of the pass, with clear views of the massive Hansbeshan Peak. <br>• Camp at Phustirang surrounded by dramatic high mountains, preparing for the pass crossing. <br>• Overnight stay in tents at Phustirang." 
  },
  { 
    day: 5, 
    title: "Phustirang to Mangrungse (13,000 ft) via Pin Bhaba Pass (16,105 ft)", 
    details: "• Trek distance: ~12 km | Duration: 9–10 hours | Altitude gain: ~2,600 ft ascent and ~3,100 ft descent. <br>• The toughest and most rewarding day of the trek. <br>• Begin with a steep climb on scree slopes and glacial patches to reach Pin Bhaba Pass at 16,105 ft. <br>• From the top, breathtaking views unfold—lush green valleys of Kinnaur on one side, and stark, barren mountains of Spiti on the other. <br>• After soaking in the scenery, descend gradually into Spiti’s arid landscape, dotted with purple and pink mountains. <br>• Camp at Mangrungse, a high-altitude meadow at 13,000 ft. <br>• Overnight stay in tents." 
  },
  { 
    day: 6, 
    title: "Mangrungse to Mudh (12,300 ft) – Drive to Kaza (12,000 ft)", 
    details: "• Trek distance: ~9 km | Duration: 4–5 hours | Easy descent. <br>• Follow the Pin River downstream through wide valleys and colorful Spiti terrain. <br>• End the trek at Mudh village, the first settlement in the Spiti side of the trail. <br>• Drive from Mudh to Kaza (2–3 hours), the cultural and commercial hub of Spiti. <br>• Overnight stay in a guesthouse or hotel at Kaza. Trek ends with celebrations!" 
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
    subtitle: "A Dramatic Himalayan Crossover",

    seo: {
    title: "Hampta Pass Trek | Itinerary, Cost & Dates | Planethimalayas",
    description: "Hampta Pass Trek (14,035 ft) is a stunning crossover from the lush valleys of Kullu to the barren cold deserts of Lahaul. A 5-day Himalayan adventure filled with forests, wildflowers, and dramatic landscapes."
  },

    overview: {
      facts: [
        { emoji: "⏳", label: "Trek Duration", value: "4 Nights / 5 Days" },
        { emoji: "⚡", label: "Trek Grade", value: "Easy to Moderate" },
        { emoji: "🏔️", label: "Max Altitude", value: "14,100 ft (Hampta Pass)" },
        { emoji: "⚡", label: "Trek Distance", value: "26 Km" },
        { emoji: "🌤️", label: "Best Time", value: "July to October" },
        { emoji: "🗺️", label: "Region", value: "Crossover from Kullu valley to Lahaul valley, Himachal Pradesh" },
        { emoji: "📍", label: "Start Point", value: "Jobra (Near Manali)" },
        { emoji: "🏁", label: "End Point", value: "Chatru" },
        { emoji: "🧥", label: "Cloakroom facility", value: "Available" },
      ],
      snippet: `Imagine stepping into a trail where every day feels like a new world. The Hampta Pass trek begins in the lush Kullu Valley, where pine forests, maple groves, and apple orchards line the trail. As you climb higher, the landscape transforms into alpine meadows filled with wildflowers, pristine streams, and snow-fed waterfalls. The approach to the pass unveils sweeping views of the Dhauladhar and Pir Panjal ranges, while the crossing itself feels like a gateway into another planet. On the other side lies the stark, high-altitude desert of Spiti — barren cliffs, rugged ridges, and surreal, moon-like valleys that stand in striking contrast to the greenery left behind. 
      In just 5 days, Hampta captures the best of Himachal’s diverse landscapes — from forests and meadows to glaciers and deserts — making it a perfect choice for trekkers seeking variety, adventure, and a truly cinematic Himalayan experience.`
    },

    price: 11500,
    priceNote: "* Manali to Manali (including Chandratal)",
    addons: {
      offloadingbag: 3200,
    },

    inclusionsNote: "🍽️ All Meals – Nutritious meals provided from lunch on Day 1 to breakfast on Day 5",

    dates: [
      { label: "28 Sep - 02 Oct", start: "2025-09-28", end: "2025-10-02" },
      { label: "29 Sep - 03 Oct", start: "2025-09-29", end: "2025-10-03" },
      { label: "05 Oct - 09 Oct", start: "2025-10-05", end: "2025-10-09" },
      { label: "06 Oct - 10 Oct", start: "2025-10-06", end: "2025-10-10" },
      
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
    day: 1,
    title: "Drive from Manali (6,700 ft) to Jobra (9,800 ft) → Trek to Chika (10,100 ft)",
    details: "• Drive: ~2 hrs on winding mountain roads through pine & deodar forests. <br>• Trek: ~3 km / 2–3 hrs along the Rani Nallah stream. <br>• Trail passes through thick pine, maple, and birch forests, opening into vast meadows. <br>• Gentle gradient, perfect acclimatization day. <br>• Overnight camping at Chika meadow with views of snow-clad peaks."
  },
  {
    day: 2,
    title: "Trek from Chika (10,100 ft) to Balu Ka Ghera (11,900 ft)",
    details: "• Distance: ~9 km | Duration: 6–7 hrs. <br>• Initial stretch includes river crossings over boulders and wooden bridges. <br>• Trail moves through meadows carpeted with wildflowers in season (July–Sept). <br>• Gentle ascent with occasional rocky patches. <br>• Balu Ka Ghera literally means 'bed of sand'—a flat campsite at the foot of Hampta Pass. <br>• Overnight stay with panoramic views of snow-covered mountains."
  },
  {
    day: 3,
    title: "Cross Hampta Pass (14,100 ft) → Trek to Shea Goru (12,900 ft)",
    details: "• Distance: ~10 km | Duration: 8–9 hrs (longest & toughest day). <br>• Early start required; trail includes steep switchbacks and snow patches (depending on season). <br>• Breathtaking 360° view from the pass—lush Kullu Valley on one side, stark Lahaul-Spiti on the other. <br>• Sharp descent into Spiti side, often slippery with scree and snow. <br>• Shea Goru campsite is set in a cold desert landscape beside a glacial stream. <br>• Expect very low night temperatures here."
  },
  {
    day: 4,
    title: "Trek from Shea Goru (12,900 ft) to Chatru (10,800 ft) → Optional Drive to Chandratal Lake (14,100 ft)",
    details: "• Distance: ~7 km | Duration: 4–5 hrs. <br>• Easy descent along the river bed, with moraine and scree terrain. <br>• Valley widens, with rugged mountains typical of Spiti. <br>• Chatru is a remote camping ground at the confluence of Hampta, Spiti, and Rohtang valleys. <br>• If weather and road conditions permit, drive to Chandratal Lake (round trip ~3 hrs). <br>• Overnight camp at Chatru or Chandratal."
  },
  {
    day: 5,
    title: "Drive from Chatru to Manali (6,700 ft)",
    details: "• Drive: 5–6 hrs via Atal Tunnel or Rohtang Pass (road conditions may vary). <br>• Scenic drive through barren Spiti terrain gradually merging into green Kullu valley. <br>• Trek concludes at Manali by afternoon/evening."
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
    subtitle: "A Wild Himalayan Adventure",

    seo: {
    title: "Rupin Pass Trek | Itinerary, Cost & Dates | Planethimalayas",
    description: "Rupin Pass Trek (15,250 ft) is one of India’s most thrilling Himalayan treks, with waterfalls, meadows, snow bridges, and a steep gully climb to the pass. Best experienced over 7 days."
  },

    overview: {
      facts: [
        { emoji: "⏳", label: "Trek Duration", value: "6 Nights / 7 Days" },
        { emoji: "⚡", label: "Trek Grade", value: "Moderate to Difficult" },
        { emoji: "🏔️", label: "Max Altitude", value: "15,250 ft (Rupin Pass)" },
        { emoji: "⚡", label: "Trek Distance", value: "40 Km" },
        { emoji: "🌤️", label: "Best Time", value: "May-June & September-October" },
        { emoji: "🗺️", label: "Region", value: "Crossover from Shimla valley to Kinnaur valley, Himachal Pradesh" },
        { emoji: "📍", label: "Start Point", value: "Jiskoon (Himachal)" },
        { emoji: "🏁", label: "End Point", value: "sangla (Himachal)" },
        { emoji: "🧥", label: "Cloakroom facility", value: "Not available" },        
      ],
      snippet: 
        "If you’re seeking a trek that blends raw adventure, staggering natural beauty, and a sense of journey through changing worlds, Rupin Pass deserves a place at the very top. Beginning in the quaint villages of Shimla’s remote valleys, the trail winds through apple orchards, hanging wooden bridges, and dense forests of oak, pine, and rhododendron, before opening up into vast alpine meadows where the Rupin River roars alongside you. The heart of the trek lies in its drama — climbing beside the thunderous three-stage Rupin Waterfall, camping at the amphitheater-like Dhanderas Thatch, and finally tackling the steep snow-filled Rupin Gully to stand atop the high-altitude pass at nearly 15,300 ft. From here, the panorama unfolds into Kinnaur’s majestic landscapes, including glimpses of the sacred Kinnaur Kailash range and the lush meadows of Sangla Valley. This trek isn’t just about the views, but about the ever-changing terrain: one day a shady pine forest, the next a vibrant rhododendron grove, followed by stark snowfields and glacial basins. The Rupin Pass trek compresses into a single journey what feels like a cross-section of the entire Indian Himalaya.<br><br>🌸<b>Seasonal Notes:</b><br><br><b>Summer (May–June):</b> Expect lingering snowfields above Dhanderas Thatch, thrilling ice walks, and the chance to slide down long snow slopes after the pass crossing. The meadows below, freshly revealed after winter, sparkle with new grass and early wildflowers.<br><br><b>Autumn (Sept–Oct):</b> The snow retreats, revealing the Rupin Valley in full bloom. Meadows are alive with alpine flowers, while oak and maple forests turn golden and crimson. Crisp skies make for crystal-clear views of distant peaks — the Himalayas at their most colorful and vibrant." 
      },

    price: 16500,
    priceNote: "* Jiskoon to Sangla",
    addons: {
      transport: 4000, 
      offloadingbag: 4800,
      transportNote: "* Shimla to Shimla"
    },

    inclusionsNote: "🍽️ All Meals – Nutritious meals provided from dinner on Day 1 to lunch on Day 7",

    dates: [
      { label: "27 Sep - 03 Oct", start: "2025-09-27", end: "2025-10-03" },
      { label: "28 Sep - 04 Oct", start: "2025-09-28", end: "2025-10-04" },
      { label: "29 Sep - 05 Oct", start: "2025-09-29", end: "2025-10-05" },
      { label: "04 Oct - 10 Oct", start: "2025-10-04", end: "2025-10-10" },
      { label: "05 Oct - 11 Oct", start: "2025-10-05", end: "2025-10-11" },
      { label: "06 Oct - 12 Oct", start: "2025-10-06", end: "2025-10-12" },
      { label: "11 Oct - 17 Oct", start: "2025-10-11", end: "2025-10-17" },
      { label: "12 Oct - 18 Oct", start: "2025-10-12", end: "2025-10-18" },
      { label: "13 Oct - 19 Oct", start: "2025-10-13", end: "2025-10-19" },
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
    day: 1,
    title: "Arrive at Jiskoon (7,630 ft)",
    details: "• Distance from Shimla: ~190 km | Drive: 10–12 hrs via Rohru & Chanshal Pass (12,000 ft). <br>• Trail Info: Road journey through apple orchards, pine forests, and tiny Himachali hamlets. <br>• Highlights: Stunning crossover of Chanshal Pass, first glimpses of remote Kinnauri culture. <br>• Stay: Homestay in Jiskoon — warm hospitality of a high-mountain village."
  },
  {
    day: 2,
    title: "Jiskoon to Jhaka (8,750 ft)",
    details: "• Trek Distance: ~4 km | Time: 4–5 hrs. <br>• Trail Info: A short but steep uphill climb, with well-trodden shepherd trails. <br>• Highlights: The 'hanging village' of Jhaka — houses perched dramatically on a cliff edge. <br>• Experience: Interaction with villagers, old wooden Himachali homes, terraced fields of barley & buckwheat. <br>• Stay: Homestay in Jhaka."
  },
  {
    day: 3,
    title: "Jhaka to Saruwas Thatch (10,500 ft)",
    details: "• Trek Distance: ~7 km | Time: 5–6 hrs. <br>• Trail Info: Forested trail of oak, pine, and rhododendron opens into boulder sections, then alpine meadows. <br>• Highlights: Enter the wide Rupin Valley with the Rupin River snaking through. <br>• Flora & Fauna: Rhododendron (in bloom May–June), chances of spotting Himalayan monals or langurs. <br>• Stay: Tented campsite in Saruwas Thatch, meadow-side."
  },
  {
    day: 4,
    title: "Saruwas Thatch to Dhanderas Thatch (11,700 ft)",
    details: "• Trek Distance: ~3 km | Time: 2–3 hrs. <br>• Trail Info: Easy meadow walk with wildflowers in summer, golden grasslands in autumn. <br>• Highlights: First dramatic views of the three-stage Rupin Waterfall cascading down the cliff ahead. <br>• Experience: Camp at Dhanderas Thatch, a massive amphitheater-like meadow cradled by high cliffs. <br>• Stay: Tents in the meadow."
  },
  {
    day: 5,
    title: "Dhanderas Thatch to Upper Waterfall Camp (13,250 ft)",
    details: "• Trek Distance: ~4 km | Time: 3–4 hrs. <br>• Trail Info: Steep ascent, climbing beside the roaring Rupin Waterfall on a narrow trail carved into the mountainside. <br>• Highlights: The surreal climb next to the thundering waterfall, often snow-lined in May–June. <br>• Flora/Seasonal: Snow bridges in early summer, flowering alpine herbs in autumn. <br>• Stay: Campsite above the waterfall, the coldest night of the trek, with snow peaks in every direction."
  },
  {
    day: 6,
    title: "Upper Waterfall Camp to Rupin Pass (15,250 ft) → Descend to Ronti Gad (13,400 ft)",
    details: "• Trek Distance: ~11–12 km | Time: 8–9 hrs (longest & hardest day). <br>• Trail Info: <br>&nbsp;&nbsp;• Ascent: Snow-filled gully climb to the Rupin Pass. <br>&nbsp;&nbsp;• Descent: Steep descent on snowfields (summer) or loose scree & glacial moraine (autumn). <br>• Highlights: <br>&nbsp;&nbsp;• Summit View: 360° Himalayan panorama including Kinnaur Kailash, Charang Ghati, and distant peaks of Uttarakhand. <br>&nbsp;&nbsp;• Thrill: Snow glissading after the pass in summer. <br>• Stay: Meadow campsite at Ronti Gad, surrounded by high ridges and streams."
  },
  {
    day: 7,
    title: "Ronti Gad to Sanglakanda (via Sangla Kanda) → Trek Ends",
    details: "• Trek Distance: ~8–9 km | Time: 4–5 hrs. <br>• Trail Info: Gradual descent through lush alpine pastures dotted with shepherd huts. <br>• Highlights: Stunning grasslands of Sangla Kanda, with expansive views of lower Kinnaur valleys. <br>• Exit Point: Trek ends at Sanglakanda with road access to Sangla town (short 1-hr drive). <br>• Optional: Explore Sangla’s orchards and traditional Kinnauri temples before departure."
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
    heroImage: "https://res.cloudinary.com/dr44hob9b/image/upload/v1755517786/buran-ghati-hero1_d4topd.jpg",
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
      snippet: 
  "The Buran Ghati Trek is a hidden Himalayan gem that combines the best elements of every great trek in India — meadows, forests, villages, high passes, alpine lakes, and thrilling adventure. Starting from the ancient village of Janglik in the Pabbar Valley (Shimla side), the trail winds through pine and oak forests, golden birch groves, and sprawling meadows dotted with wildflowers. Along the way, trekkers encounter Chandranahan Lake, a glacial tarn sacred to locals, and camp in breathtaking alpine settings like Dayara and Litham. The climax comes at Buran Pass (15,000+ ft), where an adrenaline-filled snow-wall descent or rope rappel leads into the contrasting landscapes of Kinnaur Valley. Ending at Baruva village, the trek offers not just Himalayan grandeur but also a cultural window into centuries-old Himachali settlements. Rich in biodiversity, from Himalayan monals and griffon vultures to wild roses, primulas, and junipers, Buran Ghati is truly a complete Himalayan experience."
    },

    price: 16500,
    priceNote: "* Janglik to Baruva",
    addons: {
      transport: 4000, 
      offloadingbag: 4800,
      transportNote: "* Shimla to Shimla"
    },

    inclusionsNote: "🍽️ All Meals – Nutritious meals provided from dinner on Day 1 to lunch on Day 7",

    dates: [
      
      { label: "27 Sep - 03 Oct", start: "2025-09-27", end: "2025-10-03" },
      { label: "28 Sep - 04 Oct", start: "2025-09-28", end: "2025-10-04" },
      { label: "29 Sep - 05 Oct", start: "2025-09-29", end: "2025-10-05" },
      { label: "04 Oct - 10 Oct", start: "2025-10-04", end: "2025-10-10" },
      { label: "05 Oct - 11 Oct", start: "2025-10-05", end: "2025-10-11" },
      { label: "06 Oct - 12 Oct", start: "2025-10-06", end: "2025-10-12" },
      { label: "11 Oct - 17 Oct", start: "2025-10-11", end: "2025-10-17" },
      { label: "12 Oct - 18 Oct", start: "2025-10-12", end: "2025-10-18" },
      { label: "13 Oct - 19 Oct", start: "2025-10-13", end: "2025-10-19" },
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
    day: 1,
    title: "Arrival at Janglik (9,200 ft)",
    details: "• Drive from Shimla to Janglik: 7–8 hrs via Rohru and Tangnu.<br>• Journey highlights: Pabbar River valley, apple orchards, terraced fields, and traditional Himachali wooden houses.<br>• Janglik village offers a glimpse of old-world charm, untouched by commercialization.<br>• Stay: Homestay/guesthouse — warm hospitality with local Himachali food."
  },
  {
    day: 2,
    title: "Janglik to Dayara (11,000 ft)",
    details: "• Distance: ~5 km | Duration: 4–5 hrs.<br>• Trail: Gentle ascent through oak, pine, and rhododendron forests before opening into vast meadows.<br>• Flora: Spot wild strawberries, Himalayan roses, and oak ferns along the trail.<br>• Camp at Dayara — a sweeping meadow offering panoramic views of the snow peaks."
  },
  {
    day: 3,
    title: "Dayara to Litham (11,800 ft)",
    details: "• Distance: ~4 km | Duration: 3–4 hrs.<br>• Trail: A mix of grasslands, forested patches, and stream crossings.<br>• Highlights: Towering views of the Dhauladhar range and Gunas Pass in the distance.<br>• Flora & fauna: Fields of blue poppies in summer; chance sightings of Himalayan griffon vultures.<br>• Campsite by the Pabbar River, with views of cascading waterfalls and snowfields."
  },
  {
    day: 4,
    title: "Excursion to Chandranahan Lake (13,800 ft) — Acclimatization Day",
    details: "• Distance: ~5 km round trip | Duration: 4–5 hrs.<br>• Steep climb into alpine terrain with boulder sections and snow patches (early season).<br>• Destination: Chandranahan — a cluster of 7 glacial tarns, sacred to locals, often surrounded by snow.<br>• Perfect acclimatization day, with rewarding views and high-altitude exposure."
  },
  {
    day: 5,
    title: "Litham to Dunda (13,000 ft)",
    details: "• Distance: ~5 km | Duration: 4–5 hrs.<br>• Trail: Steady ascent through alpine meadows with views of towering snow peaks.<br>• Flora: Meadows bloom with primulas, anemones, and buttercups during June–July.<br>• Campsite at Dunda: A dramatic high-altitude setting with Buran Pass clearly visible ahead."
  },
  {
    day: 6,
    title: "Cross Buran Ghati (15,000 ft) → Descend to River Camp (11,000 ft)",
    details: "• Distance: ~9 km | Duration: 7–8 hrs.<br>• Ascent: Challenging climb to the top of the pass.<br>• Summit: Jaw-dropping 360° views of the Greater Himalaya and Kinnaur ranges.<br>• Descent: Snow wall rappel or rope-assisted descent (depending on season) followed by scree and alpine valley trails.<br>• Campsite at River Camp — lush green pastures beside a glacial stream."
  },
  {
    day: 7,
    title: "River Camp to Baruva Village → Drive to Shimla",
    details: "• Trek: ~4 km | Drive: 8 hrs.<br>• Trail: Gentle descent through deodar and pine forests, interspersed with fruit orchards.<br>• Baruva: A quaint Kinnauri hamlet, marking the end of the trek.<br>• Drive back to Shimla with memories of crossing one of Himachal’s most thrilling high passes."
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
    difficulty: ["easy"],
    season: ["spring", "autumn", "winter"],
    month: ["january", "february", "march", "april", "may", "june", "september", "october", "november", "december"],
    duration: ["5 Nights / 6 Days"],
    region: "uttarakhand",
    heroImage: "https://res.cloudinary.com/dr44hob9b/image/upload/v1755517462/ali-bedni-hero1_irkwxk.jpg",
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
        { emoji: "⚡", label: "Trek Grade", value: "Easy to Moderate" },
        { emoji: "⚡", label: "Trek Distance", value: "28 Km" },
        { emoji: "🌤️", label: "Best Time", value: "September-May" },
        { emoji: "🗺️", label: "Region", value: "Chamoli district, Uttarakhand" },
        { emoji: "📍", label: "Start Point", value: "Lohajung (Uttarakhand)" },
        { emoji: "🏁", label: "End Point", value: "Wan (Uttarakhand)" },
        { emoji: "🧥", label: "Cloakroom facility", value: "Available" },
      ],
      snippet: 
  "Ali Bedni Bugyal is a journey into some of the most enchanting alpine meadows of the Indian Himalayas. Perched above 11,000 ft in Uttarakhand’s Chamoli district, these twin bugyals (high-altitude grasslands) are among the largest in Asia. The trail begins from Lohajung, winding through oak and rhododendron forests alive with birdsong, before suddenly opening into miles of rolling green pastures that stretch to the horizon. From Ali Bugyal, trekkers are rewarded with uninterrupted views of Himalayan giants — Mt. Trishul, Nanda Ghunti, and Chaukhamba — glowing golden under sunrise and sunset skies. Bedni Bugyal, equally captivating, is home to the sacred Bedni Kund, a high-altitude lake steeped in mythology and part of the legendary Nanda Devi Raj Jat pilgrimage. Rich in flora like Himalayan blue poppies, brahmakamal, and primulas, and fauna ranging from monals to mountain foxes, Ali & Bedni are not just treks — they are Himalayan dreamscapes where nature, culture, and legend meet. Perfect for beginners and seasoned trekkers alike, this trek is a gentle yet unforgettable introduction to the magic of Uttarakhand’s high meadows."
    },

    price: 10500,
    priceNote: "* Lohajung to Wan",
    addons: {
      transport: 2800, 
      offloadingbag: 2400,
      transportNote: "* Dehradun/Rishikesh/Haridwar to Dehradun/Rishikesh/Haridwar"
    },

    inclusionsNote: "🍽️ All Meals – Nutritious meals provided from dinner on Day 1 to breakfast on Day 6",

    dates: [
      { label: "27 Sep - 02 Oct", start: "2025-09-27", end: "2025-10-02" },
      { label: "28 Sep - 03 Oct", start: "2025-09-28", end: "2025-10-03" },
      { label: "04 Oct - 09 Oct", start: "2025-10-04", end: "2025-10-09" },
      { label: "05 Oct - 10 Oct", start: "2025-10-05", end: "2025-10-10" },
      { label: "11 Oct - 16 Oct", start: "2025-10-11", end: "2025-10-16" },
      { label: "12 Oct - 17 Oct", start: "2025-10-12", end: "2025-10-17" },
      { label: "25 Oct - 30 Oct", start: "2025-10-25", end: "2025-10-30" },
      { label: "26 Oct - 31 Oct", start: "2025-10-26", end: "2025-10-31" },
      { label: "01 Nov - 06 Nov", start: "2025-11-01", end: "2025-11-06" },
      { label: "02 Nov - 07 Nov", start: "2025-11-02", end: "2025-11-07" },
      { label: "08 Nov - 13 Nov", start: "2025-11-08", end: "2025-11-13" },
      { label: "09 Nov - 14 Nov", start: "2025-11-09", end: "2025-11-14" },
      { label: "15 Nov - 20 Nov", start: "2025-11-15", end: "2025-11-20" },
      { label: "16 Nov - 21 Nov", start: "2025-11-16", end: "2025-11-21" },
      { label: "22 Nov - 27 Nov", start: "2025-11-22", end: "2025-11-27" },
      { label: "23 Nov - 28 Nov", start: "2025-11-23", end: "2025-11-28" },

    ],

    highlights: [
      "Panoramic views of Trishul and Nanda Ghunti",
      "Lush oak and rhododendron forests in full bloom during spring",
      "Easy-moderate trail suitable for fit beginners",
      "Vibrant sunrises and starry night skies from campsites",
      "Cultural exposure to mountain life in villages like Didna and Wan",
      "A balanced mix of forests, meadows, and ridge walks"
    ],

    itinerary: [
  {
    day: 1,
    title: "Drive from Rishikesh to Lohajung (7,600 ft)",
    details: "• Distance: ~250 km | Duration: 9–10 hrs<br>• Scenic drive through Devprayag, Rudraprayag, and Karnaprayag — confluences where sacred rivers merge.<br>• Rolling Himalayan foothills, terraced fields, and apple orchards along the way.<br>• Stay at Lohajung — a quaint base village steeped in local legends of Goddess Parvati’s battle with the demon Lohasur."
  },
  {
    day: 2,
    title: "Lohajung to Didna Village (8,200 ft)",
    details: "• Trek Distance: ~6 km | Duration: 4–5 hrs.<br>• Initial descent to the Neel Ganga river — a refreshing rest spot with crystal-clear waters.<br>• Gradual ascent through oak and rhododendron forests, especially spectacular in spring when blossoms paint the trail red and pink.<br>• Reach Didna — a rustic Himalayan hamlet offering insights into traditional mountain life.<br>• Stay in tents or local homestays."
  },
  {
    day: 3,
    title: "Didna to Ali Bugyal (11,000 ft)",
    details: "• Trek Distance: ~6 km | Duration: 5–6 hrs.<br>• Forest climb transforms into open meadows as you enter Ali Bugyal.<br>• Experience the magical moment when the tree line vanishes and sprawling grasslands suddenly stretch as far as the eye can see.<br>• Himalayan flora: dwarf rhododendrons, primulas, and tiny wild strawberries in season.<br>• Camp amidst panoramic views of Trishul and Nanda Ghunti."
  },
  {
    day: 4,
    title: "Ali Bugyal to Bedni Bugyal (11,500 ft) and return",
    details: "• Trek Distance: ~5 km round trip | Duration: 4–5 hrs.<br>• Gentle ridge walk connecting Ali & Bedni — considered one of the most beautiful meadow walks in India.<br>• Visit Bedni Kund — a sacred pond where pilgrims perform rituals during the Nanda Devi Raj Jat Yatra.<br>• Panoramic views of Chaukhamba, Neelkanth, and Hathi–Ghodi Parvat ranges.<br>• Return to camp at Ali Bugyal for an evening under star-studded skies."
  },
  {
    day: 5,
    title: "Ali Bugyal to Wan Village (7,800 ft)",
    details: "• Trek Distance: ~10 km | Duration: 5–6 hrs.<br>• Long descent through ancient oak groves and shepherd huts, still used by nomadic herders.<br>• Stop at the centuries-old Latu Devta shrine — locals believe even priests enter blindfolded due to the deity’s immense power.<br>• Reach Wan — one of the highest motorable villages in the region, with wooden homes and terraced fields.<br>• Stay in guesthouse/homestay."
  },
  {
    day: 6,
    title: "Drive from Wan/Lohajung to Rishikesh",
    details: "• Distance: ~250 km | Duration: 10–11 hrs.<br>• Return through Garhwal’s valleys, river confluences, and mountain settlements.<br>• A long but scenic journey back, carrying meadow memories and Himalayan energy."
  }
],

    howToReach: {
      air: "Nearest airport is Jolly Grant Airport, Dehradun (approx. 250 km from Lohajung)",
      train: "Nearest railway stations: Rishikesh or Haridwar. Frequent trains from Delhi, Dehradun, and major cities",
      road: "Overnight buses available from Delhi to Rishikesh/Haridwar",
      travelTip: "Shared cabs or private taxis are available from Rishikesh to Lohajung, usually departing early in the morning. Here's how you can make the journey smoother:<br><br>**Route A (Direct or via major hubs):**<br>Rishikesh → Devprayag → Srinagar → Rudraprayag → Karnaprayag → Tharali → Debal → Lohajung. This route spans approximately **260–270 km** and takes **10 to 12 hours** depending on road conditions.<br><br>**Option B (Break journey for comfort):**<br>Split the trek: Take public transport or a taxi to Karnaprayag (~6–7 h), then switch to shared cabs via Tharali and Debal to reach Lohajung in around 3–4 more hours. :contentReference[oaicite:1]{index=1}<br><br> **Key travel hubs:** Karnaprayag is approximately 172 km from Rishikesh; from there, it's about 60 km to Debal, then another 20 km to Lohajung. :contentReference[oaicite:2]{index=2}<br><br> **Pro tips:**<br>• Book shared cabs early—seats are limited and fill up fast.<br>• Carry enough cash—ATMs are rare beyond Karnaprayag.<br>• Travel breaks at Devprayag, Srinagar, or Karnaprayag offer scenic river confluences and local food stops."

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
      answer: "This trek is ideal for beginners and moderately experienced trekkers. The trail involves moderate altitude (up to 12,800 ft), gentle ascents, and well-marked paths, making it accessible for individuals with basic fitness and no prior high-altitude experience.",
    },
    {
      question: "What makes the Ali Bedni Bugyal trek special?",
      answer: "Ali Bedni Bugyal is one of Uttarakhand’s most scenic alpine meadows. Trekkers experience lush green grasslands, panoramic views of Himalayan peaks like Swargarohini and Bandarpoonch, and serene landscapes dotted with wildflowers. It is perfect for photographers, nature lovers, and those seeking a calm, less-crowded Himalayan trek.",
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
      answer: "The trek is best undertaken from May to June (spring–early summer) when wildflowers bloom, and September to October (autumn) when the meadows are golden, skies are clear, and the Himalayan panorama is stunning. Monsoon (July–August) is less recommended due to slippery trails and cloud cover.",
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
    heroImage: "https://res.cloudinary.com/dr44hob9b/image/upload/v1755517859/chandrashila-hero1_vvwwz0.jpg",
    subtitle: "A Perfect Himalayan Panorama",

    seo: {
    title: "Deoriatal Chandrashila Trek | Itinerary, Cost & Dates | Planethimalayas",
    description: "Deoriatal Chandrashila Trek (12,083 ft) is Uttarakhand’s best short trek, offering panoramic views of Nanda Devi, Chaukhamba, and Kedarnath peaks. A 6-day easy Himalayan escape."
  },

    overview: {
      facts: [
        { emoji: "⏳", label: "Trek Duration", value: "5 Nights / 6 Days" },
        { emoji: "⚡", label: "Trek Grade", value: "Easy to Moderate" },
        { emoji: "🏔️", label: "Max Altitude", value: "12,000 ft (Chandrashila peak)" },
        { emoji: "⚡", label: "Trek Distance", value: "32 Km" },
        { emoji: "🌤️", label: "Best Time", value: "September-May" },
        { emoji: "🗺️", label: "Region", value: "Rudrayaprayag district, Kedarnath Wildlife Sanctuary, Uttarakhand" },
        { emoji: "📍", label: "Start Point", value: "Sari (Uttarakhand)" },
        { emoji: "🏁", label: "End Point", value: "sari (Uttarakhand)" },
        { emoji: "🧥", label: "Cloakroom facility", value: "Available" },
      ],
      snippet: 
  "The Deoriatal–Tungnath–Chandrashila trek is a soul-stirring Himalayan experience where mythology, meadows, and mountains converge. Starting with the mystical lake of Deoriatal, where Chaukhamba reflects in still waters, the trail winds through rhododendron and oak forests alive with bird calls, including the resplendent Himalayan Monal. Higher up, the stone-carved temple of Tungnath — the highest Shiva shrine in the world at 11,400 ft — greets trekkers with timeless devotion. The final push to Chandrashila summit at 12,083 ft rewards you with one of the grandest Himalayan panoramas: Nanda Devi, Trishul, Chaukhamba, Kedarnath Dome, and Bandarpunch glowing under sunrise. Accessible year-round, this trek is equally enchanting in spring’s blossoms, monsoon’s mist, autumn’s clarity, and winter’s snow — a rare 4-season gem where nature and legend walk hand in hand."
    },

    price: 10500,
    priceNote: "* Sari to Sari",
    addons: {
      transport: 2800, 
      offloadingbag: 1200,
      transportNote: "* Dehradun/Rishikesh/Haridwar to Dehradun/Rishikesh/Haridwar"
    },

    inclusionsNote: "🍽️ All Meals – Nutritious meals provided from dinner on Day 1 to breakfast on Day 6",

    dates: [
      { label: "27 Sep - 02 Oct", start: "2025-09-27", end: "2025-10-02" },
      { label: "28 Sep - 03 Oct", start: "2025-09-28", end: "2025-10-03" },
      { label: "04 Oct - 09 Oct", start: "2025-10-04", end: "2025-10-09" },
      { label: "05 Oct - 10 Oct", start: "2025-10-05", end: "2025-10-10" },
      { label: "11 Oct - 16 Oct", start: "2025-10-11", end: "2025-10-16" },
      { label: "12 Oct - 17 Oct", start: "2025-10-12", end: "2025-10-17" },
      { label: "25 Oct - 30 Oct", start: "2025-10-25", end: "2025-10-30" },
      { label: "26 Oct - 31 Oct", start: "2025-10-26", end: "2025-10-31" },
      { label: "01 Nov - 06 Nov", start: "2025-11-01", end: "2025-11-06" },
      { label: "02 Nov - 07 Nov", start: "2025-11-02", end: "2025-11-07" },
      { label: "08 Nov - 13 Nov", start: "2025-11-08", end: "2025-11-13" },
      { label: "09 Nov - 14 Nov", start: "2025-11-09", end: "2025-11-14" },
      { label: "15 Nov - 20 Nov", start: "2025-11-15", end: "2025-11-20" },
      { label: "16 Nov - 21 Nov", start: "2025-11-16", end: "2025-11-21" },
      { label: "22 Nov - 27 Nov", start: "2025-11-22", end: "2025-11-27" },
      { label: "23 Nov - 28 Nov", start: "2025-11-23", end: "2025-11-28" },

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
    title: "Haridwar to Sari (6,600 ft)",
    details: "• Distance: ~210 km | Duration: 7–8 hrs<br>• Drive through the holy confluences of Devprayag, Rudraprayag, and Karnaprayag — where rivers meet to form the sacred Ganga.<br>• Scenic Garhwal hills dotted with terraced fields and mountain villages.<br>• Check-in at guesthouse in Sari — a charming village with slate-roofed homes.<br>• Overnight stay at Sari."
  },
  {
    day: 2,
    title: "Sari to Deoriatal (8,000 ft)",
    details: "• Trek Distance: ~4 km | Duration: 2–3 hrs<br>• Short but steep climb through rhododendron and oak forests.<br>• Reach the pristine Deoriatal Lake, with crystal reflections of Chaukhamba and surrounding peaks.<br>• Birdwatcher’s paradise — magpies, barbets, and Monals are commonly spotted here.<br>• Overnight camping by the lake under a starlit sky."
  },
  {
    day: 3,
    title: "Deoriatal to Shyalmi (9,000 ft)",
    details: "• Trek Distance: ~10 km | Duration: 6–7 hrs<br>• Forested trail filled with wildflowers and mossy undergrowth — magical in monsoon, fiery in spring.<br>• Panoramic views of Kedarnath and Chaukhamba ranges along clear ridges.<br>• Cross meadows where shepherds graze their flocks.<br>• Camp at Shyalmi Bugyal surrounded by alpine wilderness."
  },
  {
    day: 4,
    title: "Shyalmi to Baniyakund (8,700 ft)",
    details: "• Trek Distance: ~6 km | Duration: 3–4 hrs<br>• Gentle hike through forested glades and grasslands.<br>• Scenic camping site at Baniyakund — often called the ‘balcony to the Himalayas.’<br>• Evening bonfire and sunset views over rolling meadows."
  },
  {
    day: 5,
    title: "Baniyakund to Tungnath (11,400 ft) and Chandrashila (12,083 ft) | Return",
    details: "• Trek Distance: ~10 km round trip | Duration: 6–7 hrs<br>• Early morning ascent to Tungnath, the highest Shiva temple in the world.<br>• Continue to Chandrashila for sunrise — witness 360° Himalayan views of Nanda Devi, Trishul, Chaukhamba, Kedarnath Dome, and Bandarpunch.<br>• Trail rich in Himalayan flora like dwarf rhododendrons, and in winter, blanketed with snow.<br>• Return to Baniyakund for overnight stay."
  },
  {
    day: 6,
    title: "Baniyakund to Haridwar (Drive)",
    details: "• Distance: ~210 km | Duration: 7–8 hrs<br>• Retrace the scenic drive along Alaknanda and Bhagirathi river valleys.<br>• Trek ends with blessings from the mountains and unforgettable Himalayan memories."
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
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755517840/chandrashila-view6_le2ugy.jpg"

    ],

    downloadLink: "/docs/Himalayan_Trek_Packing_List.pdf",

    faqs: {
  questions: [
    {
      question: "Who can participate in the Deoriatal-Chandrashila trek?",
      answer: "This trek is suitable for beginners and intermediate trekkers with basic fitness. The trail involves moderate ascents, forest paths, and alpine meadows, making it ideal for those seeking their first Himalayan high-altitude experience."
    },
    {
      question: "What should I pack for the Deoriatal-Chandrashila trek?",
      answer: "Essential items include sturdy trekking shoes, layered clothing, a 40–50L rucksack with rain cover, thermal wear, a water bottle, trekking poles, and a headlamp. For a detailed packing list, refer to the downloadable PDF above."
    },
    {
      question: "Is offloading available during the trek?",
      answer: "Yes, offloading services are available at an additional cost. Please check with the trek organizer for current rates and availability."
    },
    {
      question: "Will there be mobile network coverage during the trek?",
      answer: "Mobile network coverage is limited along the trek. You may get intermittent signals from Airtel or Jio near the starting point and at certain high-altitude clearings, but overall connectivity is unreliable. It's recommended to inform friends and family beforehand."
    },
    {
      question: "What permits are required for the trek?",
      answer: "The trek requires forest permits for the Govind Pashu Vihar region. These are typically arranged by the trek organizer and included in the trek package."
    },
    {
      question: "What is the best time to undertake the Deoriatal-Chandrashila trek?",
      answer: "The ideal time is between April and June for spring blooms, and September to November for clear skies and autumn colors. Summer months offer lush meadows, while autumn provides crisp weather and panoramic Himalayan views."
    },
    {
      question: "What makes the Deoriatal-Chandrashila trek unique?",
      answer: "This trek combines serene Deoriatal Lake with a challenging ascent to Chandrashila Peak, offering 360° panoramic views of peaks like Chaukhamba, Trishul, and Nanda Ghunti. It's a short yet highly rewarding trek that showcases the best of Garhwal Himalayas in a single adventure."
    }
  ]
},


    faqsLink: "/faqs-and-articles",
  },



  {
    id: "gaumukh-tapovan-trek",
    name: "Gaumukh Tapovan Trek",
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

    price: 17000,
    priceNote: "* Gangotri to Gangotri",
    addons: {
      transport: 3000, 
      offloadingbag: 4000,
      transportNote: "* Dehradun/Rishikesh/Haridwar to Dehradun/Rishikesh/Haridwar"
    },

    inclusionsNote: "🍽️ All Meals – Nutritious meals provided from dinner on Day 1 to dinner on Day 6",

    dates: [
      
      { label: "27 Sep - 03 Oct", start: "2025-09-27", end: "2025-10-03" },
      { label: "28 Sep - 04 Oct", start: "2025-09-28", end: "2025-10-04" },
      { label: "29 Sep - 05 Oct", start: "2025-09-29", end: "2025-10-05" },
      { label: "04 Oct - 10 Oct", start: "2025-10-04", end: "2025-10-10" },
      { label: "05 Oct - 11 Oct", start: "2025-10-05", end: "2025-10-11" },
      { label: "06 Oct - 12 Oct", start: "2025-10-06", end: "2025-10-12" },
      { label: "11 Oct - 17 Oct", start: "2025-10-11", end: "2025-10-17" },
      { label: "12 Oct - 18 Oct", start: "2025-10-12", end: "2025-10-18" },
      { label: "13 Oct - 19 Oct", start: "2025-10-13", end: "2025-10-19" },
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
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755517959/gaumukh-tapovan-view8_lebb2f.jpg"
    
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
    difficulty: ["difficult"],
    season: ["spring", "summer", "autumn"],
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
  subtitle: "A Himalayan Symphony Of Nature & Majesty",

  seo: {
    title: "Goechala Trek | Itinerary, Cost & Dates | Planethimalayas",
    description: "Goechala Trek (15,100 ft) in Sikkim is the closest you can get to Mt. Kanchenjunga, the world’s third-highest peak. A 10-day trek through rhododendron forests, alpine lakes, and dramatic high-altitude landscapes."
},

    overview: {
      facts: [
        { emoji: "⏳", label: "Trek Duration", value: "9 Nights / 10 Days" },
        { emoji: "⚡", label: "Trek Grade", value: "Moderate-Difficult" },
        { emoji: "🏔️", label: "Max Altitude", value: "15,200 ft (Goechala Viewpoint-1)" },
        { emoji: "⚡", label: "Trek Distance", value: "75 Km" },
        { emoji: "🌤️", label: "Best Time", value: "March-June & September-November" },
        { emoji: "🗺️", label: "Region", value: "Khangchendzonga National Park, Sikkim" },
        { emoji: "📍", label: "Start Point", value: "Yuksom (West Sikkim)" },
        { emoji: "🏁", label: "End Point", value: "Yuksom (West Sikkim)" },
        { emoji: "🧥", label: "Cloakroom facility", value: "Available" },
      ],

    snippet: 
  "The Goecha La trek is one of India’s most iconic journeys, taking you deep into the heart of the Eastern Himalayas inside the UNESCO World Heritage-listed Khangchendzonga National Park. Beginning in the historic village of Yuksom, the trail winds through moss-laden forests, waterfalls, wooden bridges, and rhododendron valleys that burst into bloom in spring. Higher up, the landscape shifts into windswept meadows and glacial moraines, culminating in a front-row seat to Mt. Kanchenjunga — the third-highest mountain in the world — glowing at sunrise. Along the way, you might spot vibrant Himalayan monals, the elusive red panda, or blue sheep grazing the alpine slopes. This is not just a trek, but a rare immersion into Sikkim’s wild beauty, spirituality, and biodiversity — a true pilgrimage for both nature lovers and mountain dreamers."
    },

    price: 21000,
    priceNote: "* Yuksom to Yuksom",
    addons: {
      transport: 3000, 
      offloadingbag: 6400,
      transportNote: "* Siliguri/Bagdogra to Siliguri/Bagdogra"
    },

    inclusionsNote: "🍽️ All Meals – Nutritious meals provided from dinner on Day 1 to dinner on Day 9",

    dates: [
     
      { label: "27 Sep - 06 Oct", start: "2025-09-27", end: "2025-10-06" },
      { label: "04 Oct - 13 Oct", start: "2025-10-04", end: "2025-10-13" },
      { label: "11 Oct - 20 Oct", start: "2025-10-11", end: "2025-10-20" },
      { label: "18 Oct - 27 Oct", start: "2025-10-18", end: "2025-10-27" },
      { label: "25 Oct - 03 Nov", start: "2025-10-25", end: "2025-11-03" },
      { label: "01 Nov - 10 Nov", start: "2025-11-01", end: "2025-11-10" },
      { label: "08 Nov - 17 Nov", start: "2025-11-08", end: "2025-11-17" },
      { label: "15 Nov - 24 Nov", start: "2025-11-15", end: "2025-11-24" },
      { label: "22 Nov - 01 Dec", start: "2025-11-22", end: "2025-12-01" },
      { label: "29 Nov - 08 Dec", start: "2025-11-29", end: "2025-12-08" },
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
    title: "Arrive at Yuksom (1,780 m / 5,840 ft)",
    details: "• 6–7 hr drive from NJP/Bagdogra through tea gardens and winding Sikkimese roads.<br>• Yuksom is the first capital of Sikkim (1642) and a deeply spiritual village.<br>• Stay in homestay/guesthouse; soak in the peaceful vibe before the trek begins."
  },
  {
    day: 2,
    title: "Yuksom to Sachen (2,180 m / 7,150 ft)",
    details: "• Trek: 8 km | 5–6 hrs.<br>• Walk alongside the Rathong river, crossing hanging wooden bridges.<br>• Forests full of ferns, orchids, and moss-draped oaks and magnolias.<br>• Camp in a forest clearing under towering pines."
  },
  {
    day: 3,
    title: "Sachen to Tshoka (2,960 m / 9,700 ft) via Bakhim",
    details: "• Trek: 7 km | 4–5 hrs.<br>• Trail passes Bakhim (first views of snow peaks).<br>• Steep switchbacks into dense rhododendron forests.<br>• Reach Tshoka, a small Tibetan settlement with wooden huts and monasteries."
  },
  {
    day: 4,
    title: "Tshoka to Dzongri (3,960 m / 13,000 ft) via Phedang",
    details: "• Trek: 10 km | 6–7 hrs.<br>• Continuous climb through rhododendrons and silver fir forests.<br>• Sudden landscape change: alpine meadows with first panoramic views of Kanchenjunga and Pandim.<br>• Camp in open meadows at Dzongri."
  },
  {
    day: 5,
    title: "Sunrise at Dzongri Top (4,170 m / 13,675 ft) & trek to Thansing (3,930 m / 12,900 ft)",
    details: "• Early morning climb to Dzongri top for one of the best Himalayan sunrise views — Kanchenjunga, Kabru, Rathong, and Pandim all glowing golden.<br>• Descend to Kokchurang through forests, then gentle climb to Thansing meadow beside a glacier-fed stream.<br>• Camp amid yak pastures and high peaks."
  },
  {
    day: 6,
    title: "Thansing to Lamuney (4,180 m / 13,700 ft)",
    details: "• Trek: 4 km | 2–3 hrs.<br>• Short, easy walk through alpine meadows with up-close views of Mt. Pandim.<br>• Coldest campsite of the trek — rest early for summit push."
  },
  {
    day: 7,
    title: "Lamuney to Goecha La Viewpoint 1 (4,940 m / 16,200 ft) and back to Thansing/Kokchurang",
    details: "• Trek: 12–13 km round trip | 7–8 hrs.<br>• Start before dawn with headlamps.<br>• Pass the sacred Samiti Lake (no camping allowed).<br>• Reach Viewpoint 1 for an unforgettable sunrise on Kanchenjunga.<br>• Return to lower camps for overnight stay."
  },
  {
    day: 8,
    title: "Thansing/Kokchurang to Tshoka",
    details: "• Trek: 15–16 km | 6–7 hrs.<br>• Long but scenic descent through rhododendron and fir forests.<br>• Overnight in huts or campsite at Tshoka."
  },
  {
    day: 9,
    title: "Tshoka to Yuksom",
    details: "• Trek: 14 km | 5–6 hrs.<br>• Retrace forest trails back to Yuksom.<br>• End trek with local food and warm showers in guesthouse."
  },
  {
    day: 10,
    title: "Departure",
    details: "• Drive back to NJP/Bagdogra (6–7 hrs)."
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
      answer: "The best time is from April to June and September to November, when skies are clear, weather is stable, and the Kanchenjunga range is visible in all its glory.",
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
    subtitle: "A Panoramic Himalayan Ridgewalk",

    seo: {
      title: "Phulara Ridge Trek | Itinerary, Cost & Dates | Planethimalayas",
      description: "Phulara Ridge Trek (12,150 ft) is Uttarakhand’s unique ridge-walk trek, offering a 360° panorama of the Himalayas throughout the trail. A 6-day offbeat adventure through forests, meadows, and endless mountain views."
  },

    overview: {
      facts: [
        { emoji: "⏳", label: "Trek Duration", value: "5 Nights / 6 Days" },
        { emoji: "⚡", label: "Trek Grade", value: "Easy-Moderate" },
        { emoji: "🏔️", label: "Max Altitude", value: "12,150 ft (3,700 m)" },
        { emoji: "⚡", label: "Trek Distance", value: "30 Km" },
        { emoji: "🌤️", label: "Best Time", value: "April-May & September-November" },
        { emoji: "🗺️", label: "Region", value: "Uttarkashi district, Govind Pashu Vihar Wildlife Sanctuary, Uttarakhand" },
        { emoji: "📍", label: "Start Point", value: "Sankri (Uttarakhand)" },
        { emoji: "🏁", label: "End Point", value: "Sankri (Uttarakhand)" },
        { emoji: "🧥", label: "Cloakroom facility", value: "Available" },
      ],
      snippet: "The Phulara Ridge Trek is one of the most unique and rewarding treks in the Indian Himalayas, famous for its rare ridge walk that stretches for hours with uninterrupted 360-degree Himalayan views. Starting from Sankri village inside the Govind Pashu Vihar National Park in Uttarkashi, Uttarakhand, this trail takes you through ancient forests of pine, oak, and rhododendron before opening into wide alpine meadows dotted with vibrant wildflowers. Along the way, trekkers often spot Himalayan monals, langurs, and even signs of musk deer and black bears. The ridge itself offers breathtaking panoramas of Swargarohini, Bandarpoonch, Kedarkantha, and other Garhwal peaks, making it a paradise for nature lovers, photographers, and seasoned trekkers alike. With its blend of scenic beauty, rich biodiversity, and cultural charm of the Sankri region, Phulara Ridge stands out as a must-do offbeat trek in Uttarakhand."
    },

    price: 10500,
    priceNote: "* Sankri to Sankri",
    addons: {
      transport: 3000, 
      offloadingbag: 3200,
      transportNote: "* Dehradun/Rishikesh/Haridwar to Dehradun/Rishikesh/Haridwar"
    },

    inclusionsNote: "🍽️ All Meals – Nutritious meals provided from dinner on Day 1 to dinner on Day 5",

    dates: [
      { label: "27 Sep - 02 Oct", start: "2025-09-27", end: "2025-10-02" },
      { label: "28 Sep - 03 Oct", start: "2025-09-28", end: "2025-10-03" },
      { label: "04 Oct - 09 Oct", start: "2025-10-04", end: "2025-10-09" },
      { label: "05 Oct - 10 Oct", start: "2025-10-05", end: "2025-10-10" },
      { label: "11 Oct - 16 Oct", start: "2025-10-11", end: "2025-10-16" },
      { label: "12 Oct - 17 Oct", start: "2025-10-12", end: "2025-10-17" },
      { label: "25 Oct - 30 Oct", start: "2025-10-25", end: "2025-10-30" },
      { label: "26 Oct - 31 Oct", start: "2025-10-26", end: "2025-10-31" },
      { label: "01 Nov - 06 Nov", start: "2025-11-01", end: "2025-11-06" },
      { label: "02 Nov - 07 Nov", start: "2025-11-02", end: "2025-11-07" },
      { label: "08 Nov - 13 Nov", start: "2025-11-08", end: "2025-11-13" },
      { label: "09 Nov - 14 Nov", start: "2025-11-09", end: "2025-11-14" },
      { label: "15 Nov - 20 Nov", start: "2025-11-15", end: "2025-11-20" },
      { label: "16 Nov - 21 Nov", start: "2025-11-16", end: "2025-11-21" },
      { label: "22 Nov - 27 Nov", start: "2025-11-22", end: "2025-11-27" },
      { label: "23 Nov - 28 Nov", start: "2025-11-23", end: "2025-11-28" },
      
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
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535324/phulara-ridge-hero_i6vu6r.jpg"
    
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
    season: ["summer", "autumn"],
    month: ["may", "june", "september", "october"],
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
    subtitle: "A Timeless Himalayan Masterpiece",

    seo: {
      title: "Har Ki Dun Ruinsara Tal Trek | Itinerary, Cost & Dates | Planethimalayas",
      description: "Har Ki Dun & Ruinsara Tal Trek (11,800 ft) blends ancient villages, alpine valleys, and a pristine high-altitude lake. A 8-day trek rich in history and Himalayan beauty."
    },

    overview: {
      facts: [
        { emoji: "⏳", label: "Trek Duration", value: "7 Nights / 8 Days" },
        { emoji: "⚡", label: "Trek Grade", value: "Moderate-Difficult" },     
        { emoji: "🏔️", label: "Max Altitude", value: "12,000 ft (Ruinsaratal)" },
        { emoji: "⚡", label: "Trek Distance", value: "65 Km" },
        { emoji: "🌤️", label: "Best Time", value: "May-June & September-November" },
        { emoji: "🗺️", label: "Region", value: "Uttarkashi district, Govind Pashu Vihar Wildlife Sanctuary, Uttarakhand" },
        { emoji: "📍", label: "Start Point", value: "Sankri (Uttarakhand)" },
        { emoji: "🏁", label: "End Point", value: "Sankri (Uttarakhand)" },
        { emoji: "🧥", label: "Cloakroom facility", value: "Available" },
      ],
      snippet: "The Har Ki Dun – Ruinsaratal Lake trek is a captivating Himalayan adventure that immerses trekkers in one of the most pristine and culturally rich valleys of Uttarakhand. Nestled within the cradle-shaped Har Ki Dun valley, this trek follows the gurgling Supin River, passes ancient villages such as Osla and Gangad, and ascends to the breathtaking alpine beauty of Ruinsaratal Lake. Along the route, trekkers traverse dense pine and oak forests, vibrant meadows, glacial streams, and snow-capped peaks like Swargarohini, Bandarpoonch, and Kalanag. This journey is not only a feast for the eyes but also a deep cultural and ecological experience, offering glimpses into traditional Himalayan life, rare Himalayan flora and fauna, and untouched landscapes that leave an indelible mark on the soul."
    },

    price: 17000,
    priceNote: "* Sankri to Sankri",
    addons: {
      transport: 3000, 
      offloadingbag: 4800,
      transportNote: "* Dehradun/Rishikesh/Haridwar to Dehradun/Rishikesh/Haridwar"
    },

    inclusionsNote: "🍽️ All Meals – Nutritious meals provided from dinner on Day 1 to dinner on Day 7",

    dates: [
      { label: "26 Sep - 03 Oct", start: "2025-09-26", end: "2025-10-03" },
      { label: "27 Sep - 04 Oct", start: "2025-09-27", end: "2025-10-04" },
      { label: "28 Sep - 05 Oct", start: "2025-09-28", end: "2025-10-05" },
      { label: "03 Oct - 10 Oct", start: "2025-10-03", end: "2025-10-10" },
      { label: "04 Oct - 11 Oct", start: "2025-10-04", end: "2025-10-11" },
      { label: "05 Oct - 12 Oct", start: "2025-10-05", end: "2025-10-12" },
      { label: "10 Oct - 17 Oct", start: "2025-10-10", end: "2025-10-17" },
      { label: "11 Oct - 18 Oct", start: "2025-10-11", end: "2025-10-18" },
      { label: "12 Oct - 19 Oct", start: "2025-10-12", end: "2025-10-19" },
      { label: "17 Oct - 24 Oct", start: "2025-10-17", end: "2025-10-24" },
      { label: "18 Oct - 25 Oct", start: "2025-10-18", end: "2025-10-25" },
      { label: "19 Oct - 26 Oct", start: "2025-10-19", end: "2025-10-26" },
      
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
    details: "• Early morning departure from Dehradun or nearby pickup point.<br>• Scenic drive via Mussoorie, Purola, Mori, and Netwar through terraced fields, pine forests, and river valleys.<br>• Cross the entrance of Govind Pashu Vihar National Park.<br>• Arrive at Sankri, the gateway village for Har Ki Dun treks.<br>• Overnight stay in guesthouse; prepare trekking gear and acclimatize."
  },
  {
    day: 2,
    title: "Drive to Gangad – Trek to Seema | Distance: 10 km | Time: 4–5 hrs | Altitude: 2,500 m",
    details: "• Drive early to Gangad village.<br>• Begin trek along the Supin River, passing pine, oak, and rhododendron forests.<br>• Cross crystal-clear streams and footbridges.<br>• Arrive at Seema village, known for traditional wooden houses and terraced fields.<br>• Overnight stay in tents at Seema campsite."
  },
  {
    day: 3,
    title: "Trek from Seema to Rainbasera | Distance: 8 km | Time: 5–6 hrs | Altitude: 3,200 m",
    details: "• Gradual ascent through mixed forests and open meadows.<br>• Observe Himalayan flora including blue poppies, primulas, and rhododendrons in season.<br>• Views of surrounding peaks such as Swargarohini and Bandarpoonch emerge along the trail.<br>• Set up camp at Rainbasera, a flat meadow with panoramic mountain views.<br>• Overnight stay in tents."
  },
  {
    day: 4,
    title: "Trek from Rainbasera to Ruinsaratal | Distance: 10 km | Time: 6–7 hrs | Altitude: 3,650 m",
    details: "• Trek through alpine meadows, rocky trails, and glacial streams.<br>• Ruinsaratal Lake appears as a pristine high-altitude gem, surrounded by snow-dusted peaks.<br>• Watch for Himalayan Monal, Koklass Pheasant, and other endemic birds.<br>• Camp near the lake on flat ground; enjoy sunset over the peaks and starlit night sky.<br>• Overnight stay in tents at Ruinsaratal."
  },
  {
    day: 5,
    title: "Trek from Ruinsaratal to Seematra | Distance: 12 km | Time: 6–7 hrs | Altitude: 2,800 m",
    details: "• Begin descent through alpine meadows, pine forests, and ridges.<br>• Witness rare Himalayan flora and fauna en route, including musk deer tracks and exotic birds.<br>• Arrive at Seematra campsite for overnight stay in tents."
  },
  {
    day: 6,
    title: "Trek to Har Ki Dun & back | Distance: 14 km | Time: 7–8 hrs | Altitude: 3,566 m",
    details: "• Full-day trek to Har Ki Dun valley, the 'Valley of the Gods'.<br>• Explore lush alpine meadows and panoramic views of snow-capped Himalayan peaks.<br>• Observe cultural remnants like shepherd huts and terraced fields.<br>• Return to Seematra campsite for overnight stay."
  },
  {
    day: 7,
    title: "Trek to Gangad – Drive to Sankri | Distance: 10 km | Time: 4–5 hrs | Altitude: 1,950 m",
    details: "• Descend through scenic trails to Gangad village.<br>• Experience Osla village's traditional lifestyle, wooden houses, and temples.<br>• Drive back to Sankri for overnight stay at guesthouse."
  },
  {
    day: 8,
    title: "Departure from Sankri to Dehradun | Distance: ~200 km | Time: 7–8 hrs",
    details: "• Morning departure for Dehradun.<br>• Scenic drive through valleys, forests, and river basins.<br>• Trip ends with cherished memories of the Har Ki Dun and Ruinsaratal trek."
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
    subtitle: "A Timeless Himalayan Masterpiece",

    seo: {
      title: "Har Ki Dun Trek | Itinerary, Cost & Dates | Planethimalayas",
      description: "Har Ki Dun Trek (11,700 ft) is a 6-day valley trek in Uttarakhand, known for ancient villages, pine forests, and grand views of Swargarohini and Bandarpoonch peaks."
    },

    overview: {
      facts: [
        { emoji: "⏳", label: "Trek Duration", value: "5 Nights / 6 Days" },
        { emoji: "⚡", label: "Trek Grade", value: "Easy-Moderate" },     
        { emoji: "🏔️", label: "Max Altitude", value: "11,200 ft (Harkidun)" },
        { emoji: "⚡", label: "Trek Distance", value: "40 Km" },
        { emoji: "🌤️", label: "Best Time", value: "March-June & September-November" },
        { emoji: "🗺️", label: "Region", value: "Uttarkashi district, Govind Pashu Vihar Wildlife Sanctuary, Uttarakhand" },
        { emoji: "📍", label: "Start Point", value: "Sankri (Uttarakhand)" },
        { emoji: "🏁", label: "End Point", value: "Sankri (Uttarakhand)" },
        { emoji: "🧥", label: "Cloakroom facility", value: "Available" },
      ],
      snippet: 
"The Har Ki Dun Trek is a spectacular Himalayan adventure that ranks among the finest valley treks in Uttarakhand. This journey takes trekkers deep into the cradle-shaped Har Ki Dun valley, following the gurgling Supin River through dense pine, deodar, and oak forests. Along the trail, trekkers pass ancient Himalayan villages like Osla, Gangad, and Seema, where traditional wooden houses, terraced fields, and centuries-old temples offer a rare glimpse into local life. The trek ascends through alpine meadows and glacial basins to Ruinsaratal Lake, a pristine high-altitude gem surrounded by snow-capped peaks including Swargarohini, Bandarpoonch, Kalanag, and Black Peak. This trek is an extraordinary blend of adventure, nature, culture, and wildlife — perfect for trekking enthusiasts, nature photographers, and those seeking a spiritual Himalayan experience. Along the route, trekkers may encounter Himalayan Monal, Koklass Pheasant, musk deer, snow leopards (rarely), and a wide variety of alpine flowers, making this trek a living showcase of Uttarakhand's biodiversity."
    },

    price: 10500,
    priceNote: "* Sanri to Sankri",
    addons: {
      transport: 3000, 
      offloadingbag: 3200,
      transportNote: "* Dehradun/Rishikesh/Haridwar to Dehradun/Rishikesh/Haridwar"
    },

    inclusionsNote: "🍽️ All Meals – Nutritious meals provided from dinner on Day 1 to dinner on Day 5",

    dates: [
      { label: "27 Sep - 02 Oct", start: "2025-09-27", end: "2025-10-02" },
      { label: "28 Sep - 03 Oct", start: "2025-09-28", end: "2025-10-03" },
      { label: "04 Oct - 09 Oct", start: "2025-10-04", end: "2025-10-09" },
      { label: "05 Oct - 10 Oct", start: "2025-10-05", end: "2025-10-10" },
      { label: "11 Oct - 16 Oct", start: "2025-10-11", end: "2025-10-16" },
      { label: "12 Oct - 17 Oct", start: "2025-10-12", end: "2025-10-17" },
      { label: "25 Oct - 30 Oct", start: "2025-10-25", end: "2025-10-30" },
      { label: "26 Oct - 31 Oct", start: "2025-10-26", end: "2025-10-31" },
      { label: "01 Nov - 06 Nov", start: "2025-11-01", end: "2025-11-06" },
      { label: "02 Nov - 07 Nov", start: "2025-11-02", end: "2025-11-07" },
      { label: "08 Nov - 13 Nov", start: "2025-11-08", end: "2025-11-13" },
      { label: "09 Nov - 14 Nov", start: "2025-11-09", end: "2025-11-14" },
      { label: "15 Nov - 20 Nov", start: "2025-11-15", end: "2025-11-20" },
      { label: "16 Nov - 21 Nov", start: "2025-11-16", end: "2025-11-21" },
      { label: "22 Nov - 27 Nov", start: "2025-11-22", end: "2025-11-27" },
      { label: "23 Nov - 28 Nov", start: "2025-11-23", end: "2025-11-28" },
      
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
    details: "• Early morning departure from Dehradun or your designated pickup point.<br>• Scenic drive through Mussoorie, Purola, and Mori, crossing terraced fields, pine forests, and river valleys.<br>• Enter Govind Pashu Vihar Wildlife Sanctuary; spot occasional Himalayan Monal or Koklass Pheasant along the way.<br>• Arrive at Sankri village, the gateway to Har Ki Dun trek.<br>• Overnight stay at guesthouse; organize trekking gear and acclimatize."
  },
  {
    day: 2,
    title: "Drive to Gangad – Trek to Seema | Distance: 10 km | Time: 4–5 hrs | Altitude: 2,500 m",
    details: "• Drive early morning to Gangad village, located along the Supin River.<br>• Begin trek along gentle trails through dense pine, deodar, and oak forests.<br>• Cross streams and small wooden bridges; spot wildflowers like blue poppies, primulas, and rhododendrons in spring.<br>• Arrive at Seema, a remote village with traditional Himalayan wooden houses and terraced farmland.<br>• Overnight stay in tents at Seema campsite, surrounded by forest and mountain views."
  },
  {
    day: 3,
    title: "Trek from Seema to Seematra | Distance: 8 km | Time: 5–6 hrs | Altitude: 3,200 m",
    details: "• Ascend steadily through mixed forests, open meadows, and rolling hills.<br>• Cross Kalkatiyadhar, a small glacial-fed stream with footbridges and mossy banks.<br>• Look out for Himalayan fauna including musk deer tracks and Himalayan Monal sightings.<br>• Trek offers increasing views of Swargarohini, Bandarpoonch, Kalanag, and Black Peak.<br>• Camp at Seematra, a high-altitude meadow with panoramic vistas and serene surroundings."
  },
  {
    day: 4,
    title: "Trek to Har Ki Dun Valley & back | Distance: 14 km | Time: 7–8 hrs | Altitude: 3,566 m",
    details: "• Full-day trek to the heart of Har Ki Dun valley, known as the 'Valley of the Gods'.<br>• Walk through lush alpine meadows, scattered boulders, and glacial streams.<br>• Spectacular views of snow-capped peaks: Swargarohini (6,252 m), Bandarpoonch (6,316 m), and Kalanag (6,387 m).<br>• Observe alpine flora such as primulas, rhododendrons, and gentians; possible sighting of Himalayan Monal, Koklass Pheasant, and Himalayan Tahrs.<br>• Return to Seematra campsite for overnight stay."
  },
  {
    day: 5,
    title: "Trek to Gangad – Drive to Sankri | Distance: 10 km | Time: 4–5 hrs | Altitude: 1,950 m",
    details: "• Descend gently through mixed forests and meadows back to Gangad village.<br>• Experience Osla village, its wooden houses, terraced fields, and centuries-old temples dedicated to local deities.<br>• Drive down to Sankri for overnight stay in guesthouse.<br>• Evening walk around Sankri village; interact with locals and learn about Himalayan traditions."
  },
  {
    day: 6,
    title: "Departure from Sankri to Dehradun | Distance: ~200 km | Time: 7–8 hrs",
    details: "• Morning drive back to Dehradun through terraced valleys, pine and oak forests, and scenic river basins.<br>• End of trek with unforgettable memories of pristine valleys, alpine meadows, rich biodiversity, and Himalayan culture."
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
    subtitle: "The Classic Trek of Ladakh’s High-Altitude Desert",

    seo: {
      title: "Markha Valley Trek | Itinerary, Cost & Dates | Planethimalayas",
      description: "Markha Valley Trek (17,060 ft) is Ladakh’s most iconic trek, crossing high passes, river crossings, Buddhist monasteries, and dramatic desert landscapes over 8 days."
    },

    overview: {
      facts: [
        { emoji: "⏳", label: "Trek Duration", value: "7 Nights / 8 Days" },
        { emoji: "⚡", label: "Trek Grade", value: "Moderate to Difficult" },
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
      offloadingbag: 4200,
    },

    inclusionsNote: "🍽️ All Meals – Nutritious meals provided from packed lunch on Day 3 to packed lunch on Day 7",

    dates: [
      { label: "27 Sep - 04 Oct", start: "2025-09-27", end: "2025-10-04" },
      { label: "28 Sep - 05 Oct", start: "2025-09-28", end: "2025-10-05" },
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
  difficulty: ["easy"],
  season: ["winter", "spring", "autumn"],
  month: ["september", "october", "november", "december", "january", "february", "march", "april"],
  region: "uttarakhand",
  duration: "5 Nights / 6 Days",
  coordinates: [
    [30.4141, 79.5603], // Joshimath (base)
    [30.4755, 79.6151], // Kuari Pass summit
  ],

  heroImage: "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535454/kuari-pass-view4_te0tbe.jpg",
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
    snippet: `Kuari Pass Trek, famously called the Curzon Trail, is one of the classic Himalayan treks in Uttarakhand, offering postcard-perfect views of Nanda Devi, Kamet, Chaukhamba, and Dronagiri peaks. This moderate trek is ideal for beginners and intermediate trekkers, combining serene oak and rhododendron forests, lush alpine meadows, and snow-clad trails into a truly immersive Himalayan experience. The trail passes through the buffer zone of the Nanda Devi Biosphere Reserve, allowing trekkers to witness rare flora and fauna of this UNESCO-protected region, while remaining outside the restricted core of Nanda Devi National Park. Along the route, trekkers encounter charming Garhwali villages, traditional stone cottages, and the warm hospitality of the local mountain communities. During winter, Kuari Pass transforms into a pristine snow paradise, making it one of the best snow treks in India. With its relatively short duration, manageable altitude gain, and rewarding panoramic summit views, Kuari Pass offers an unforgettable Himalayan adventure blending natural beauty, cultural encounters, and high-altitude trekking thrill.`
  },

  price: 10500,
  priceNote: "* Joshimath to Joshimath",
  addons: {
    transport: 3000,
    offloadingbag: 2000,
  },

  inclusionsNote: "🍽️ All Meals – From packed lunch on Day 2 to breakfast on Day 6",

  dates: [
    
    { label: "27 Sep - 02 Oct", start: "2025-09-27", end: "2025-10-02" },
    { label: "28 Sep - 03 Oct", start: "2025-09-28", end: "2025-10-03" },
    { label: "29 Sep - 04 Oct", start: "2025-09-29", end: "2025-10-04" },
    { label: "04 Oct - 09 Oct", start: "2025-10-04", end: "2025-10-09" },
    { label: "05 Oct - 10 Oct", start: "2025-10-05", end: "2025-10-10" },
    { label: "06 Oct - 11 Oct", start: "2025-10-06", end: "2025-10-11" },
    { label: "11 Oct - 16 Oct", start: "2025-10-11", end: "2025-10-16" },
    { label: "12 Oct - 17 Oct", start: "2025-10-12", end: "2025-10-17" },
    { label: "13 Oct - 18 Oct", start: "2025-10-13", end: "2025-10-18" },
    { label: "25 Oct - 30 Oct", start: "2025-10-25", end: "2025-10-30" },
    { label: "26 Oct - 31 Oct", start: "2025-10-26", end: "2025-10-31" },
    { label: "27 Oct - 01 Nov", start: "2025-10-27", end: "2025-11-01" },
    { label: "01 Nov - 06 Nov", start: "2025-11-01", end: "2025-11-06" },
    { label: "02 Nov - 07 Nov", start: "2025-11-02", end: "2025-11-07" },
    { label: "03 Nov - 08 Nov", start: "2025-11-03", end: "2025-11-08" },
    { label: "08 Nov - 13 Nov", start: "2025-11-08", end: "2025-11-13" },
    { label: "09 Nov - 14 Nov", start: "2025-11-09", end: "2025-11-14" },
    { label: "10 Nov - 15 Nov", start: "2025-11-10", end: "2025-11-15" },
    { label: "15 Nov - 20 Nov", start: "2025-11-15", end: "2025-11-20" },
    { label: "16 Nov - 21 Nov", start: "2025-11-16", end: "2025-11-21" },
    { label: "17 Nov - 22 Nov", start: "2025-11-17", end: "2025-11-22" },
    { label: "22 Nov - 27 Nov", start: "2025-11-22", end: "2025-11-27" },
    { label: "23 Nov - 28 Nov", start: "2025-11-23", end: "2025-11-28" },
    { label: "24 Nov - 29 Nov", start: "2025-11-24", end: "2025-11-29" },
    { label: "29 Nov - 04 Dec", start: "2025-11-29", end: "2025-12-04" },
    { label: "30 Nov - 05 Dec", start: "2025-11-30", end: "2025-12-05" },
    { label: "01 Dec - 06 Dec", start: "2025-12-01", end: "2025-12-06" },
  ],

  highlights: [
    "Panoramic views of India’s highest peak Nanda Devi and surrounding Himalayan giants",
    "Walk through enchanting oak, deodar, and rhododendron forests",
    "Snow-covered meadows in winter that look like a white carpet stretching to the horizon",
    "Stunning sunrise and sunset views over Mt. Dronagiri",
    "A historic trail once traversed by Lord Curzon in the early 1900s",
  ],

  itinerary: [
  { 
    day: 1, 
    title: "Arrival at Joshimath (6,700 ft)", 
    details: "• Drive from Rishikesh/Haridwar (approx. 9–10 hrs) along the Alaknanda River, passing picturesque Himalayan valleys and traditional Garhwali villages.<br>• Observe terraced fields, stone houses, and local temples en route, providing a glimpse into the culture and lifestyle of the region.<br>• Scenic views of snow-capped peaks like Nanda Devi and Kamet along the way.<br>• Overnight stay in a guesthouse at Joshimath with local cuisine experience and preparation briefing for the trek." 
  },
  { 
    day: 2, 
    title: "Joshimath to Dhak (drive) → Trek to Guling (9,600 ft)", 
    details: "• Drive 12 km from Joshimath to Dhak, the starting point of the trek.<br>• Begin trekking 6 km / 4–5 hrs through charming mountain villages, where locals may be seen tending to herds of cows and goats.<br>• Trail winds through pine, oak, and rhododendron forests, with the first glimpses of snow-clad peaks in the distance.<br>• Encounter traditional Garhwali stone cottages and prayer flags fluttering along the trail.<br>• Moderate ascent to Guling, with panoramic views of the Mandakini Valley and surrounding peaks.<br>• Camp at Guling amidst serene meadows, perfect for stargazing and experiencing the Himalayan wilderness." 
  },
  { 
    day: 3, 
    title: "Guling to Tali (11,070 ft)", 
    details: "• Trek 6 km / 5 hrs ascending gradually through dense oak, rhododendron, and birch forests, with seasonal wildflowers along the trail.<br>• Pass through small streams and ridges, offering sweeping views of snow peaks like Nanda Ghunti and Chaukhamba.<br>• Observe Himalayan flora including medicinal herbs and a variety of birds such as Himalayan monal and woodpeckers.<br>• Cultural glimpses of shepherds and their temporary huts along the way.<br>• Reach Tali meadow, a beautiful alpine pasture with panoramic views of the surrounding peaks.<br>• Camp at Tali with optional short nature walks in the evening to explore the flora and fauna." 
  },
  { 
    day: 4, 
    title: "Tali to Kuari Pass (12,516 ft) → Return to Tali", 
    details: "• Trek 11 km / 7–8 hrs, ascending through a mix of alpine meadows, snow patches (depending on season), and rocky ridges.<br>• Cross sparkling streams, rhododendron-dotted slopes, and open meadows with grazing yaks.<br>• Reach Kuari Pass, where you are rewarded with a stunning 360° view of the Himalayan giants: Nanda Devi, Dronagiri, Chaukhamba, and Hathi Parvat.<br>• Experience the thrill of high-altitude trekking with gradual ascents and some moderate climbs; descend carefully back to Tali.<br>• Overnight stay at Tali campsite with evening stories of local folklore and the mountain environment." 
  },
  { 
    day: 5, 
    title: "Tali to Auli → Drive to Joshimath", 
    details: "• Trek 8 km / 5 hrs through Gorson Meadows, a vast expanse of alpine grasslands dotted with wildflowers and offering panoramic views of snow-capped peaks.<br>• Gentle ascent and descent through trails lined with rhododendron shrubs and pine forests.<br>• Witness shepherds tending to their flocks and nomadic life in high-altitude pastures.<br>• Reach Auli, the famous ski destination, with breathtaking vistas of Nanda Devi and surrounding peaks.<br>• Drive 12 km down to Joshimath for an overnight stay, reflecting on the trek and enjoying local Garhwali cuisine." 
  },
  { 
    day: 6, 
    title: "Departure from Joshimath", 
    details: "• Drive back to Rishikesh/Haridwar, passing through terraced fields, alpine forests, and scenic valleys.<br>• The journey offers a final glimpse of the majestic Himalayan ranges and the lush Mandakini Valley.<br>• Trip concludes with memories of Kuari Pass, its diverse landscapes, local culture, and natural beauty."
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
      answer: "This trek is suitable for beginners and intermediate trekkers. With gentle ascents and well-defined trails, it is ideal for first-time trekkers looking to experience the Garhwal Himalayas.",
    },
    {
      question: "What is the best season for the Kuari Pass trek?",
      answer: "The best time is April to June and September to November, when the meadows are lush, rhododendrons bloom, and snow-capped peaks like Nanda Devi, Dronagiri, and Chaukhamba are clearly visible.",
    },
    {
      question: "What essential gear should I carry for the Kuari Pass trek?",
      answer: "Essentials include sturdy trekking shoes, layered clothing, rain jacket, 40–50L backpack, thermal wear, trekking poles, and a headlamp. A detailed packing list is available in the PDF above.",
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
      answer: "Kuari Pass offers spectacular views of the Nanda Devi and Chaukhamba peaks, pristine forests, and colorful meadows. The trek combines easy gradients with incredible Himalayan panoramas, making it a favorite for photography enthusiasts and nature lovers.",
    }
  ],
},


  faqsLink: "/faqs-and-articles",
},

{
  id: "kedarkantha-trek",
  name: "Kedarkantha Trek",
  difficulty: ["easy"],
  season: ["winter", "spring", "autumn"],
  month: ["september", "october", "november", "december", "january", "february", "march", "april"],
  region: "uttarakhand",
  duration: "5 Nights / 6 Days",
  coordinates: [
    [31.0362, 78.1746], // Sankri (base)
    [31.0837, 78.2167], // Kedarkantha summit
  ],

  heroImage: "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535492/kedarkantha-hero_afsxo1.jpg",
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
    snippet: `Kedarkantha Trek, often hailed as the "Queen of Winter Treks," is a mesmerizing Himalayan journey offering pristine snow trails, dense pine and oak forests, and sweeping alpine meadows. Nestled inside the Govind Pashu Vihar National Park in Uttarakhand, the trail takes trekkers through serene valleys, high-altitude lakes, and charming mountain hamlets steeped in Garhwali traditions. At 12,500 ft, the summit provides a 360° panorama of Himalayan giants like Swargarohini, Bandarpoonch, and Black Peak. This trek blends manageable difficulty with breathtaking winter landscapes, cultural encounters, and encounters with rare Himalayan flora and fauna, making it perfect for both beginners and seasoned adventurers seeking an authentic Himalayan experience.`
  },

  price: 10500,
  priceNote: "* Sankri to Sankri",
  addons: {
    transport: 3000,
    offloadingbag: 2000,
  },

  inclusionsNote: "🍽️ All Meals – From dinner on Day 1 to breakfast on Day 6",

  dates: [
    
    { label: "27 Sep - 02 Oct", start: "2025-09-27", end: "2025-10-02" },
    { label: "28 Sep - 03 Oct", start: "2025-09-28", end: "2025-10-03" },
    { label: "29 Sep - 04 Oct", start: "2025-09-29", end: "2025-10-04" },
    { label: "04 Oct - 09 Oct", start: "2025-10-04", end: "2025-10-09" },
    { label: "05 Oct - 10 Oct", start: "2025-10-05", end: "2025-10-10" },
    { label: "06 Oct - 11 Oct", start: "2025-10-06", end: "2025-10-11" },
    { label: "11 Oct - 16 Oct", start: "2025-10-11", end: "2025-10-16" },
    { label: "12 Oct - 17 Oct", start: "2025-10-12", end: "2025-10-17" },
    { label: "13 Oct - 18 Oct", start: "2025-10-13", end: "2025-10-18" },
    { label: "25 Oct - 30 Oct", start: "2025-10-25", end: "2025-10-30" },
    { label: "26 Oct - 31 Oct", start: "2025-10-26", end: "2025-10-31" },
    { label: "27 Oct - 01 Nov", start: "2025-10-27", end: "2025-11-01" },
    { label: "01 Nov - 06 Nov", start: "2025-11-01", end: "2025-11-06" },
    { label: "02 Nov - 07 Nov", start: "2025-11-02", end: "2025-11-07" },
    { label: "03 Nov - 08 Nov", start: "2025-11-03", end: "2025-11-08" },
    { label: "08 Nov - 13 Nov", start: "2025-11-08", end: "2025-11-13" },
    { label: "09 Nov - 14 Nov", start: "2025-11-09", end: "2025-11-14" },
    { label: "10 Nov - 15 Nov", start: "2025-11-10", end: "2025-11-15" },
    { label: "15 Nov - 20 Nov", start: "2025-11-15", end: "2025-11-20" },
    { label: "16 Nov - 21 Nov", start: "2025-11-16", end: "2025-11-21" },
    { label: "17 Nov - 22 Nov", start: "2025-11-17", end: "2025-11-22" },
    { label: "22 Nov - 27 Nov", start: "2025-11-22", end: "2025-11-27" },
    { label: "23 Nov - 28 Nov", start: "2025-11-23", end: "2025-11-28" },
    { label: "24 Nov - 29 Nov", start: "2025-11-24", end: "2025-11-29" },
    { label: "29 Nov - 04 Dec", start: "2025-11-29", end: "2025-12-04" },
    { label: "30 Nov - 05 Dec", start: "2025-11-30", end: "2025-12-05" },
    { label: "01 Dec - 06 Dec", start: "2025-12-01", end: "2025-12-06" },
    
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
  difficulty: ["easy"],
  season: ["autumn", "winter", "spring"],
  month: ["september", "october", "november", "december", "january", "february", "march", "april"],
  region: "uttarakhand",
  duration: "5 Nights / 6 Days",
  coordinates: [
    [30.8376, 78.5651], // Barsu (base village)
    [30.8783, 78.5877], // Dayara Bugyal
    [30.8922, 78.6024], // Bakaria Top (highest point)
  ],

  heroImage: "https://res.cloudinary.com/dr44hob9b/image/upload/v1756831840/dayara-hero_xad9ui.jpg",
  subtitle: "The Himalayan Meadow Dreamscape",

  seo: {
  title: "Dayara Bugyal Trek | Itinerary, Cost & Dates | Planethimalayas",
  description: "Dayara Bugyal Trek (12,100 ft) is Uttarakhand’s most scenic meadow trek. In 6 days, experience rolling alpine grasslands with stunning views of Bandarpoonch, Draupadi ka Danda, and Jaonli."
},

  overview: {
    facts: [
      { emoji: "⏳", label: "Trek Duration", value: "5 Nights / 6 Days" },
      { emoji: "⚡", label: "Trek Grade", value: "Easy to Moderate" },
      { emoji: "🏔️", label: "Max Altitude", value: "12,100 ft (Bakaria Top)" },
      { emoji: "⚡", label: "Trek Distance", value: "22–24 Km" },
      { emoji: "🌤️", label: "Best Time", value: "November to April" },
      { emoji: "🗺️", label: "Region", value: "Gangotri Range, Uttarkashi, Uttarakhand" },
      { emoji: "📍", label: "Start Point", value: "Barsu Village" },
      { emoji: "🏁", label: "End Point", value: "Barsu Village" },
      { emoji: "🧥", label: "Cloakroom Facility", value: "Available" },
    ],
    snippet: `Dayara Bugyal Trek from Barsu is one of Uttarakhand’s most rewarding alpine meadow treks, combining gentle trails with panoramic Himalayan views. Rising to 12,100 ft at Bakaria Top, the trek unfolds vast rolling grasslands that shift with the seasons—wildflowers in summer, golden pastures in autumn, and a snow-blanketed wonderland in winter. The trail passes through dense oak, maple, and rhododendron forests, where trekkers may spot Himalayan monal, lammergeier, and other birds. Overlooking peaks like Bandarpoonch, Draupadi ka Danda, Jaonli, and Srikanth, it offers 360° views few trails can match. En route, trekkers experience the charm of Barsu village, its warm Garhwali culture, and centuries-old shepherding traditions. With its short itinerary, moderate ascents, and stunning landscapes, Dayara Bugyal is ideal for beginners, families, photographers, and seasoned trekkers seeking a quintessential Himalayan meadow adventure.` 
  },

  price: 10500,
  priceNote: "* Barsu to Barsu",
  addons: {
    transport: 2500,
    offloadingbag: 2000,
  },

  inclusionsNote: "🍽️ All Meals – From dinner on Day 1 to breakfast on Day 6",

  dates: [
   
    { label: "27 Sep - 02 Oct", start: "2025-09-27", end: "2025-10-02" },
    { label: "28 Sep - 03 Oct", start: "2025-09-28", end: "2025-10-03" },
    { label: "29 Sep - 04 Oct", start: "2025-09-29", end: "2025-10-04" },
    { label: "04 Oct - 09 Oct", start: "2025-10-04", end: "2025-10-09" },
    { label: "05 Oct - 10 Oct", start: "2025-10-05", end: "2025-10-10" },
    { label: "06 Oct - 11 Oct", start: "2025-10-06", end: "2025-10-11" },
    { label: "11 Oct - 16 Oct", start: "2025-10-11", end: "2025-10-16" },
    { label: "12 Oct - 17 Oct", start: "2025-10-12", end: "2025-10-17" },
    { label: "13 Oct - 18 Oct", start: "2025-10-13", end: "2025-10-18" },
    { label: "25 Oct - 30 Oct", start: "2025-10-25", end: "2025-10-30" },
    { label: "26 Oct - 31 Oct", start: "2025-10-26", end: "2025-10-31" },
    { label: "27 Oct - 01 Nov", start: "2025-10-27", end: "2025-11-01" },
    { label: "01 Nov - 06 Nov", start: "2025-11-01", end: "2025-11-06" },
    { label: "02 Nov - 07 Nov", start: "2025-11-02", end: "2025-11-07" },
    { label: "03 Nov - 08 Nov", start: "2025-11-03", end: "2025-11-08" },
    { label: "08 Nov - 13 Nov", start: "2025-11-08", end: "2025-11-13" },
    { label: "09 Nov - 14 Nov", start: "2025-11-09", end: "2025-11-14" },
    { label: "10 Nov - 15 Nov", start: "2025-11-10", end: "2025-11-15" },
    { label: "15 Nov - 20 Nov", start: "2025-11-15", end: "2025-11-20" },
    { label: "16 Nov - 21 Nov", start: "2025-11-16", end: "2025-11-21" },
    { label: "17 Nov - 22 Nov", start: "2025-11-17", end: "2025-11-22" },
    { label: "22 Nov - 27 Nov", start: "2025-11-22", end: "2025-11-27" },
    { label: "23 Nov - 28 Nov", start: "2025-11-23", end: "2025-11-28" },
    { label: "24 Nov - 29 Nov", start: "2025-11-24", end: "2025-11-29" },
    { label: "29 Nov - 04 Dec", start: "2025-11-29", end: "2025-12-04" },
    { label: "30 Nov - 05 Dec", start: "2025-11-30", end: "2025-12-05" },
    { label: "01 Dec - 06 Dec", start: "2025-12-01", end: "2025-12-06" },
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
  { day: 1, title: "Arrival at Barsu (7,500 ft)", 
    details: `• Drive approx. 7–8 hrs from Dehradun via Uttarkashi, passing the scenic Bhagirathi River valley.<br>
• Witness terraced fields, small Garhwali hamlets, and local temples along the route.<br>
• Evening at leisure in Barsu village; overnight stay in homestay or guesthouse, experiencing local hospitality.` 
  },
  { day: 2, title: "Barsu to Barnala Tal (9,000 ft)", 
    details: `• Trek 4 km / 4–5 hrs through lush oak, maple, and rhododendron forests.<br>
• Observe the first glimpses of alpine flora and occasional Himalayan fauna such as barking deer or Himalayan thrush.<br>
• Arrive at serene Barnala Tal, a high-altitude lake surrounded by forests and meadows.<br>
• Camp nearby and enjoy peaceful reflections of surrounding peaks in the lake.` 
  },
  { day: 3, title: "Barnala Tal to Dayara Bugyal (11,000 ft)", 
    details: `• Trek 5 km / 4–5 hrs; forest trail gradually opens to expansive alpine meadows.<br>
• Marvel at sweeping vistas of Bandarpoonch, Draupadi ka Danda, and Jaonli.<br>
• The Bugyal is rich in seasonal wildflowers and medicinal herbs, offering perfect photography opportunities.<br>
• Camp under starry skies with panoramic mountain views.` 
  },
  { day: 4, title: "Explore Dayara Bugyal – Hike to Bakaria Top (12,100 ft)", 
    details: `• Gentle 3–4 km hike to Bakaria Top for unmatched 360° views of peaks from Gangotri and Yamunotri ranges.<br>
• Observe marmots, Himalayan monal, and lammergeier soaring above the meadows.<br>
• On clear days, Jaonli, Srikanth, and Bandarpoonch are prominently visible.<br>
• Return to Dayara Bugyal campsite for overnight stay amidst vast meadows.` 
  },
  { day: 5, title: "Dayara Bugyal to Barsu via Barnala", 
    details: `• Trek 9–10 km / 6–7 hrs descending through Bugyal and forests of Barnala.<br>
• Observe shepherds moving flocks, traditional stone huts, and seasonal grazing grounds.<br>
• Evening return to Barsu village, enjoying local Garhwali meals and folk interactions.` 
  },
  { day: 6, title: "Departure from Barsu", 
    details: `• Drive back to Dehradun (7–8 hrs), passing scenic Himalayan valleys.<br>
• Trek concludes with memories of alpine meadows, snow-capped peaks, and local culture.` 
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
}




  // Add other trek objects here...
];
