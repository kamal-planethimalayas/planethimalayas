// src/data/treksData.js

export const treks = [
  {
    id: "pin-bhaba-pass-trek",
    name: "Pin Bhaba Pass",
    difficulty: ["moderate", "difficult"],
    season: "monsoon",
    month: ["july", "august", "september"],
    region: "himachal",
    duration: "6 nights / 7 days",
    heroImage: "/images/treks/pin-bhaba-pass/pin-bhaba-view1.jpg",
    subtitle: "The Most Beautiful Himalayan Crossover",

    overview: {
      facts: [
        { emoji: "⏳", label: "Trek Duration", value: "6 Nights / 7 Days" },
        { emoji: "🗺️", label: "Region", value: "Crossover from Bhaba Valley in Kinnaur to Pin Valley in Spiti, Himachal Pradesh" },
        { emoji: "🏔️", label: "Max Altitude", value: "16,105 ft (Pin Bhaba Pass)" },
        { emoji: "📍", label: "Start Point", value: "Kafnu (Himachal Pradesh)" },
        { emoji: "🏁", label: "End Point", value: "Mudh (Spiti Valley, Himachal Pradesh)" },
        { emoji: "🌤️", label: "Best Time", value: "July to mid-September" },
        { emoji: "⚡", label: "Trek Grade", value: "Moderate to Difficult" },
      ],
      snippet: `If you’re looking for a trek that offers stark contrasts — from lush green valleys to arid cold deserts — the Pin Bhaba Pass trek is perfect. This challenging journey takes you from Kinnaur’s rich landscapes into the Spiti Valley’s stark beauty.`,
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
      { label: "17 Aug - 23 Aug", start: "2025-08-17", end: "2025-08-23" },
      { label: "31 Aug - 06 Sep", start: "2025-08-31", end: "2025-09-06" },
    ],

    highlights: [
      "Stunning crossover from the green Kinnaur to the arid Spiti Valley",
      "Pin Bhaba Pass at 16,105 ft with panoramic mountain views",
      "Walk through dense forests, meadows, river crossings, and glacier zones",
      "Camp beside rivers and under starry skies at scenic campsites like Kara and Phustirang",
      "Experience two distinct cultures — Kinnauri and Spitian — in one trek",
    ],

    itinerary: [
      { day: 1, title: "Shimla to Kafnu", 
        details: "• Drive through the scenic Hindustan-Tibet highway to reach Kafnu, a beautiful village in Kinnaur. <br>• Overnight stay in guesthouse or homestay." },
      { day: 2, title: "Kafnu to Mulling", 
        details: "• Gradual ascent through pine forests and river crossings. <br>• Camp at Mulling (10,800 ft)." },
      { day: 3, title: "Mulling to Kara", 
        details: "• Beautiful walk beside the Bhaba River. Meadows, streams, and alpine charm. <br>• Camp at Kara (11,700 ft)." },
      { day: 4, title: "Kara to Phustirang", 
        details: "• Short but steep ascent. <br>• Camp at the base of the pass at 13,500 ft, surrounded by towering peaks." },
      { day: 5, title: "Phustirang to Mangrungse via Pin Bhaba Pass", 
        details: "• Cross the majestic Pin Bhaba Pass (16,105 ft) and descend into the Spiti landscape. <br>• Camp at Mangrungse (13,000 ft)." },
      { day: 6, title: "Mangrungse to Mudh – Drive to Kaza", 
        details: "• Easy walk along the Pin River to Mudh village. <br>• Drive to Kaza for celebration and rest." },
    ],

    didYouKnow: [
      "Pin Bhaba Pass connects lush Bhaba Valley to the cold desert of Spiti — a rare crossover trek.",
      "Located at 16,105 ft, the pass offers views of Pin Valley National Park, home to snow leopards and Himalayan ibex.",
      "It showcases two contrasting terrains in one trek — green meadows to barren highlands.",
      "Shares an endpoint with the famous Pin Parvati Pass, but is considered safer and more scenic.",
      "Locals say this trail was once used by ancient traders and shepherds — it’s a route rich in history.",
    ],

    howToReach: {
      air: "Nearest Airport: Shimla Airport (200 km) or Chandigarh Airport (310 km). From there, take a taxi/bus to Rampur → Kafnu.",
      train: "Nearest Railway Station: Shimla. Or reach Kalka (broad gauge) and take the toy train to Shimla. Continue by road to Kafnu.",
      road: "From Shimla: 200 km / 7–8 hrs via Rampur and Tapri. From Chandigarh: 310 km / 10–11 hrs via Shimla.",
      travelTip: "Reach Shimla a day early and start for Kafnu early next morning to avoid delays due to traffic or weather.",
    },

    gallery: [
      "/images/treks/pin-bhaba-pass/pin-bhaba-view1.jpg",
      "/images/treks/pin-bhaba-pass/pin-bhaba-view2.jpg",
      "/images/treks/pin-bhaba-pass/pin-bhaba-hero.jpg",
    ],

    faqsLink: "/faqs-and-articles",
  },

  
  {
    id: "hampta-pass-trek",
    name: "Hampta Pass",
    difficulty: ["easy", "moderate"],
    season: "monsoon",
    month: ["july", "august", "september", "october"],
    duration: ["4 Nights / 5 Days"],
    region: "himachal",
    heroImage: "/images/treks/hampta-pass/hampta-pass-hero.jpg",
    subtitle: "A Dramatic Himalayan Crossover",

    overview: {
      facts: [
        { emoji: "⏳", label: "Trek Duration", value: "4 Nights / 5 Days" },
        { emoji: "🗺️", label: "Region", value: "Crossover from Kullu valley to Lahaul valley, Himachal Pradesh" },
        { emoji: "🏔️", label: "Max Altitude", value: "14,100 ft (Hampta Pass)" },
        { emoji: "📍", label: "Start Point", value: "Jobra (Near Manali)" },
        { emoji: "🏁", label: "End Point", value: "Chatru" },
        { emoji: "🌤️", label: "Best Time", value: "July to October" },
        { emoji: "⚡", label: "Trek Grade", value: "Easy to Moderate" },
      ],
      snippet: `If you’ve ever dreamt of walking from one world to another — lush green valleys to stark, high-altitude deserts — Hampta Pass is the trek to choose. Starting from the pine forests and apple orchards of Kullu Valley, this trek takes you through alpine meadows, gushing streams, wildflower-covered slopes, and finally across the dramatic Hampta Pass into the moon-like desert of Spiti.
      Perfect for first-time trekkers and seasoned hikers alike, Hampta offers an unforgettable adventure that captures the heart of Himachal Pradesh's two most contrasting landscapes in just a few days.`,
    },

    price: 11500,
    priceNote: "* Manali to Manali (including Chandratal)",
    addons: {
      offloadingbag: 3200,
    },

    inclusionsNote: "🍽️ All Meals – Nutritious meals provided from lunch on Day 1 to breakfast on Day 5",

    dates: [
      { label: "16 Aug - 20 Aug", start: "2025-08-16", end: "2025-08-20" },
      { label: "31 Aug - 04 Sep", start: "2025-08-31", end: "2025-09-04" },
      { label: "14 Sep - 18 Sep", start: "2025-09-14", end: "2025-09-18" },
      { label: "28 Sep - 02 Oct", start: "2025-09-28", end: "2025-10-02" },


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
      title: "Drive from Manali to Jobra → Trek to Chika (10,100 ft)",
      details: "• Drive: ~2 hrs | Trek: ~3 km / 2–3 hrs. <br>• Short scenic hike through forests and streams. <br>• Overnight camping at Chika meadow."
      },
      {
      day: 2,
      title: "Trek from Chika to Balu Ka Ghera (11,900 ft)",
      details: "• Distance: ~9 km | Duration: 6–7 hrs. <br>• Beautiful trail through river crossings and wildflower fields. <br>• Camp at the base of Hampta Pass."
      },
      {
      day: 3,
      title: "Cross Hampta Pass (14,100 ft) → Trek to Shea Goru (12,900 ft)",
      details: "• Distance: ~10 km | Duration: 8–9 hrs. <br>• Steep ascent to the pass, then descent into the Spiti side. <br>• Spectacular views of Lahaul & surrounding glaciers. <br>• Camp at Shea Goru by a glacial stream."
      },
      {
      day: 4,
      title: "Trek from Shea Goru to Chatru (10,800 ft)",
      details: "• Distance: ~7 km | Duration: 4–5 hrs. <br>• Easy descent into the valley. <br>• Drive to Chandratal Lake, only if weather permitting). <br>• Camp or stay in Chatru."
      },
      {
      day: 5,
      title: "Drive from Chatru to Manali",
      details: "• Drive: 5–6 hrs via Atal tunnel. <br>• End of trek and return journey."
      },
    ],

    howToReach: {
      air: "Nearest airport: Bhuntar Airport (Kullu) – 50 km from Manali. You can take a cab or local bus to reach Manali from the airport.",
      train: "Nearest major railway station: Chandigarh Railway Station. From Chandigarh, take a Volvo bus or private cab to Manali (~8–10 hrs).",
      road: "From Delhi: Overnight Volvo buses (12–14 hrs) regularly ply to Manali. From Chandigarh: 8–10 hrs by cab or bus. Manali is well-connected and has frequent bus services.",
      travelTip: "Arrive in Manali a day before the trek for better acclimatization and to avoid delays."
    },

    didYouKnow: [
      "Hampta Pass was once a traditional route used by shepherds to cross from the green valleys of Kullu to the dry grazing pastures of Spiti.",
      "The name “Hampta” comes from the tiny village of Hampta near Sethan, which lies on the trail.",
      "Chandratal Lake, an optional add-on to the trek, is one of the highest altitude lakes in India and is often called the \"Moon Lake.\"",
      "Though relatively easy, Hampta Pass offers one of the most dramatic crossovers in the Indian Himalayas — perfect for first-time trekkers!",
      "The trek gives you a glimpse of both Himachal’s rich greenery and the barren beauty of Spiti — all in one short, accessible adventure."
    ],

    gallery: [
      "/images/treks/hampta-pass/hampta-pass-1.jpg",
      "/images/treks/hampta-pass/hampta-pass-2.jpg",
      "/images/treks/hampta-pass/hampta-pass-3.jpg",
      "/images/treks/hampta-pass/hampta-pass-4.jpg",
      "/images/treks/hampta-pass/hampta-pass-6.jpg",
      "/images/treks/hampta-pass/hampta-pass-7.jpg",
      "/images/treks/hampta-pass/hampta-pass-8.jpg",
      "/images/treks/hampta-pass/hampta-pass-9.jpg",
      "/images/treks/hampta-pass/hampta-pass-10.jpg",
      "/images/treks/hampta-pass/hampta-pass-11.jpg",
      "/images/treks/hampta-pass/hampta-pass-12.jpg",
      "/images/treks/hampta-pass/hampta-pass-13.jpg",
      "/images/treks/hampta-pass/hampta-pass-14.jpg",
      "/images/treks/hampta-pass/hampta-pass-16.jpg",

    ],

    faqsLink: "/faqs-and-articles",
  },



  {
    id: "rupin-pass-trek",
    name: "Rupin Pass",
    difficulty: ["moderate", "difficult"],
    season: ["summer", "autumn"],
    month: ["may", "june", "september", "october"],
    duration: ["6 Nights / 7 Days"],
    region: "himachal",
    heroImage: "/images/treks/rupin-pass/rupin-pass-hero.jpg",
    subtitle: "A Wild Himalayan Adventure",

    overview: {
      facts: [
        { emoji: "⏳", label: "Trek Duration", value: "6 Nights / 7 Days" },
        { emoji: "🗺️", label: "Region", value: "Crossover from Shimla valley to Kinnaur valley, Himachal Pradesh" },
        { emoji: "🏔️", label: "Max Altitude", value: "15,250 ft (Rupin Pass)" },
        { emoji: "📍", label: "Start Point", value: "Jiskoon (Himachal)" },
        { emoji: "🏁", label: "End Point", value: "sangla (Himachal)" },
        { emoji: "🌤️", label: "Best Time", value: "May-June & September-October" },
        { emoji: "⚡", label: "Trek Grade", value: "Moderate to Difficult" },
      ],
      snippet: 
        "If you’re seeking a trek that combines thrill, natural beauty, and cultural richness, Rupin Pass should top your list. Starting in the remote villages of Shimla valley and ending in the lush meadows of Sangla, this trek follows the magnificent Rupin River right to its glacial source. Along the way, you’ll traverse deep forests of pineand rhododendron, climb right beside the ear deafening  Rupin waterfall, and conquer the steep Rupin Gully to reach the breathtaking pass at over 15,000 feet. With views of the Kinnaur Kailash range and high-altitude pastures to end, this trek is nothing short of a Himalayan masterpiece. <br><br>🌸<b>Seasonal Notes:</b> <br><br>Summer (May–June): Snowfields above Dhanderas; thrilling snow walk and glissading.<br><br>Autumn (Sept–Oct): Trail is snow-free; meadows bloom with wild alpine flowers and golden hues."
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
      { label: "20 Sep - 26 Sep", start: "2025-09-20", end: "2025-09-26" },
      { label: "11 Oct - 17 Oct", start: "2025-10-11", end: "2025-10-17" },
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
      title: "Arrive at Jiskoon (7630 ft)",
      details: "• Distance from Shimla: ~190 km<br>• Time: 10 - 12 hrs<br>• Highlights: Picturesque Chansel pass enroute<br>• Stay: Homestay."
      },
      {
      day: 2,
      title: "Jiskun to Jhaka (8750 ft)",
      details: "• Trek Distance: ~4 km<br>• Time: 4–5 hours<br>• Trail Info: Steep ascent<br>• Highlights: Remote traditional villages of Himachal<br>• Stay: Homestay"
      },
      {
      day: 3, 
      title: "Jhaka to Saruwas Thatch (10500 ft)",
      details: "• Trek Distance: ~7 km<br>• Time: 5–6 hours<br>• Trail Info: Mixed terrain – forest, boulders, meadows<br>• Highlights: Enter the wide Rupin Valley<br>• Stay: Tents"
      },
      {
      day: 4,
      title: "Saruwas thatch to Dhanderas thatch (11700 ft)",
      details: "• Trek distance: 3km<br>• Time: 2hrs<br>• Trail Info: Gradual walk through meadows<br>• Highlights: First view of rupin waterfall<br>• Stay: Tents "
      },
      {
      day: 5,
      title: "Dhanderas Thatch to Upper Waterfall Camp (13,250 ft)",
      details: "• Trek Distance: ~4 km<br>• Time: 3–4 hours<br>• Trail Info: Steep climb beside the massive Rupin Waterfall<br>• Highlights: Climb a vertical path along the waterfall wall, surrounded by snow (in summer), wildflowers (in autumn)<br>• Stay: Tents, coldest night of the trek | "
      },
      {
      day: 6,
      title: "Upper Waterfall to Rupin Pass (15,250 ft), descend to Ronti Gad (13,400 ft)",
      details: "• Trek Distance: ~11–12 km<br>• Time: 8–9 hours<br>• Trail Info:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ascent: Steep, snow-filled gully to the pass<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Descent: Rocky & glacial moraine path to Ronti Gad<br>• Highlights:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Summit View: Breathtaking 360° views including Kinnaur Kailash Range<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Snow glissading (summer)<br>• Stay: Tents – nestled in meadows with valley views"
      },
      {
      day: 7,
      title: "Ronti Gad to Sanglakanda (via Sangla Kanda), trek ends",
      details: "• Trek Distance: ~8–9 km<br>• Time: 4–5 hours<br>• Trail Info: Gradual descent through alpine pastures<br>• Highlights: High-altitude grasslands of Sangla Kanda, with shepherd huts and a clear view of lower Kinnaur<br>• Exit Point: Sanglakanda – easy access to Sangla (1 hr drive or walk further)"
      },
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
      " <b>Rupin Valley is rich in wildflowers!</b>  <br>Not just snow! -->  Though famous for snow bridges, Rupin’s meadows burst into colors in late spring and summer, making it a photographer’s paradise with blue poppies, primulas, and dwarf rhododendrons.",
      " <b>The pass summit is a natural rock ramp!</b>  <br>Unlike most high passes that require steep ascents, Rupin Pass is crossed via a steep snow ramp that literally feels like climbing to another world. It's adventurous, but not technical — a perfect thrill for fit trekkers.",
      " <b>It follows ancient shepherd and trade routes!</b>  <br>The trail has been used for centuries by shepherds and traders moving between the Baspa and Tons river valleys, long before it became a trekker’s dream route."
    ],

    gallery: [
      "/images/treks/rupin-pass/rupin-pass-view1.jpg",
      "/images/treks/rupin-pass/rupin-pass-view2.jpg",
      "/images/treks/rupin-pass/rupin-pass-view3.jpg",
      "/images/treks/rupin-pass/rupin-pass-view4.jpg",
      "/images/treks/rupin-pass/rupin-pass-view5.jpg",
      "/images/treks/rupin-pass/rupin-pass-view6.jpg",
      "/images/treks/rupin-pass/rupin-pass-view7.jpg",
      "/images/treks/rupin-pass/rupin-pass-view8.jpg",
      "/images/treks/rupin-pass/rupin-pass-view9.jpg",
      "/images/treks/rupin-pass/rupin-pass-view10.jpg",
      "/images/treks/rupin-pass/rupin-pass-view11.jpg",
      "/images/treks/rupin-pass/rupin-pass-view12.jpg",
      "/images/treks/rupin-pass/rupin-pass-view13.jpg",
      "/images/treks/rupin-pass/rupin-pass-view14.jpg",
      "/images/treks/rupin-pass/rupin-pass-view15.jpg",
      "/images/treks/rupin-pass/rupin-pass-view16.jpg",
      "/images/treks/rupin-pass/rupin-pass-view17.jpg",
      "/images/treks/rupin-pass/rupin-pass-view18.jpg",
      "/images/treks/rupin-pass/rupin-pass-view19.jpg",
      "/images/treks/rupin-pass/rupin-pass-view20.jpg",
      "/images/treks/rupin-pass/rupin-pass-view21.jpg",
      "/images/treks/rupin-pass/rupin-pass-view22.jpg",
      "/images/treks/rupin-pass/rupin-pass-view23.jpg",
      "/images/treks/rupin-pass/rupin-pass-view24.jpg",
      "/images/treks/rupin-pass/rupin-pass-view25.jpg",
      "/images/treks/rupin-pass/rupin-pass-view26.jpg",
      "/images/treks/rupin-pass/rupin-pass-hero1.jpg",
      "/images/treks/rupin-pass/rupin-pass-hero2.jpg",
      "/images/treks/rupin-pass/rupin-pass-hero3.jpg",
      "/images/treks/rupin-pass/rupin-pass-hero4.jpg",
      "/images/treks/rupin-pass/rupin-pass-hero.jpg",


    ],

    faqsLink: "/faqs-and-articles",
  },


{
    id: "buran-ghati-trek",
    name: "Buran Ghati",
    difficulty: ["moderate", "difficult"],
    season: ["summer", "autumn"],
    month: ["may", "june", "september", "october"],
    duration: ["6 Nights / 7 Days"],
    region: "himachal",
    heroImage: "/images/treks/buran-ghati/buran-ghati-hero1.jpg",
    subtitle: "A Himalayan Canvas of Thrill & Beauty",

    overview: {
      facts: [
        { emoji: "⏳", label: "Trek Duration", value: "6 Nights / 7 Days" },
        { emoji: "🗺️", label: "Region", value: "Crossover from Pabbar valley to Kinnaur valley, Himachal" },
        { emoji: "🏔️", label: "Max Altitude", value: ">15,000 ft (Buran Ghati)" },
        { emoji: "📍", label: "Start Point", value: "Janglik (Himachal)" },
        { emoji: "🏁", label: "End Point", value: "Baruva (Himachal)" },
        { emoji: "🌤️", label: "Best Time", value: "May-June & September-October" },
        { emoji: "⚡", label: "Trek Grade", value: "Moderate to Difficult" },
      ],
      snippet: 
        "The Buran Ghati Trek is one of the most scenic and adventurous trails in Himachal Pradesh, offering almost everything one can expect from a high altitude trek in the Himalayas. Starting from a remote village of Janglik in the Kullu valley, this trek takes you all the way to another isolated hamlet of Baruva in the Kinnaur valley, crossing a spectacular mountain pass at over 15,000 feet."
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
      { label: "20 Sep - 26 Sep", start: "2025-09-20", end: "2025-09-26" },
      { label: "11 Oct - 17 Oct", start: "2025-10-11", end: "2025-10-17" },
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
      details: "• Drive from Shimla to Janglik (approx. 7–8 hours)<br>• Scenic mountain roads, apple orchards, and river valleys<br>• Overnight stay in homestay or guesthouse"
      },
      {
      day: 2,
      title: "Trek from Janglik to Dayara (11,000 ft)",
      details: "• Trek distance: ~5 km | 4–5 hours<br>• Gradual ascent through pine and oak forests<br>• First views of open meadows and mountain peaks<br>• Camp at the scenic Dayara meadow"
      },
      {
      day: 3,
      title: "Dayara to Litham (11,800 ft)",
      details: "• Trek distance: ~4 km | 3–4 hours<br>• Walk through forests, streams, and wildflower meadows<br>• Stunning views of the Dhauladhar range<br>• Campsite near Pabbar River with views of the snowfields"
      },
      {
      day: 4,
      title: "Acclimatization & Visit to Chandranahan Lake (13,800 ft)",
      details: "• Trek distance: ~5 km | 4–5 hours<br>• Enter alpine zone with stunning snow-capped views<br>• Campsite in a high-altitude meadow below Buran Pass"
      },
      {
      day: 5,
      title: "Litham to Dunda (13,000 ft)",
      details: "• Trek distance: ~5 km | 4–5 hours<br>• Enter alpine zone with stunning snow-capped views<br>• Campsite in a high-altitude meadow below Buran Pass"
      },
      {
      day: 6,
      title: "Cross Buran Pass (15,000 ft) – Trek to River Camp (11,000 ft)",
      details: "• Trek distance: ~9 km | 7–8 hours<br>• Steep ascent to the top of Buran Ghati<br>• Rappelling down the snow wall (seasonal)<br>• Long descent through snow and scree to valley floor"
      },
      {
      day: 7,
      title: "Trek to Baruva Village – Drive to Shimla",
      details: "• Trek distance: ~4 km | Drive: ~8 hours<br>• Descend through forests and fruit orchards of Baruva<br>• Trek ends here. Drive back to Shimla in the evening"
      },
    ],

    howToReach: {
      air: "Nearest Airport: Shimla Airport (Jubbarhatti) – ~23 km from Shimla<br>Alternative Airport: Chandigarh Airport – well connected with major cities<br>From Chandigarh, take a taxi or bus to Shimla (~7–8 hrs drive)",
      train: "Nearest Railway Station: Shimla Railway Station (connected via Kalka)<br>From Delhi → Kalka (by train) → Kalka to Shimla (by toy train or taxi)",
      road: "From Shimla to Janglik:<br>Distance: ~150 km<br>Time: 7–8 hours by taxi or local transport<br>Route: Shimla → Rohru → Chirgaon → Tangnu → Janglik",
      travelTip: "*Roads are narrow mountain roads after Rohru; private taxi recommended"
    },

    didYouKnow: [
      " <b>Buran Ghati has everything a trekker dreams of — in one trail!</b>  <br>From dense pine forests, wildflower meadows, ancient villages, and alpine lakes to glacier crossings and an adrenaline-filled rappel down the pass — Buran Ghati is one of the most diverse treks in India.",
      " <b>The Buran Pass descent involves rappelling with a rope!</b>  <br>Yes! To descend from the 15,000 ft high Buran Pass, you often need to use a rope-assisted descent on a steep snow wall — an exciting highlight that makes the trek feel like a true alpine expedition.",
      " <b>You pass through centuries-old Himalayan villages!</b>  <br>Villages like Janglik and Barua are tucked away in the mountains and still reflect authentic Himachali architecture, wooden houses, and step farming — untouched by mass tourism.",
      " <b>The Dayara meadows rival those of Uttarakhand!</b>  <br>The high-altitude Dayara meadows (not to be confused with Dayara Bugyal) on this trail are bursting with wildflowers in June and September, offering views of snow-capped peaks in every direction.",
      " <b>The trek includes a hidden alpine lake – Chandranahan!</b>  <br>A short but steep detour leads to the Chandranahan Lakes, sacred to locals and surrounded by snow even in early summer. Many trekkers skip this — don’t!",
      "<b>Buran Ghati is a perfect “crossover” trek!</b> <br>The trail starts in one valley (Shimla side) and exits in another (Kinnaur side), giving you the unique experience of crossing a Himalayan divide, just like on legendary trails like Rupin Pass."
    ],

    gallery: [
      "/images/treks/buran-ghati/buran-ghati-view1.jpg",
      "/images/treks/buran-ghati/buran-ghati-view2.jpg",
      "/images/treks/buran-ghati/buran-ghati-view3.jpg",
      "/images/treks/buran-ghati/buran-ghati-view4.jpg",
      "/images/treks/buran-ghati/buran-ghati-view5.jpg",
      "/images/treks/buran-ghati/buran-ghati-view6.jpg",
      "/images/treks/buran-ghati/buran-ghati-view7.jpg",
      "/images/treks/buran-ghati/buran-ghati-view8.jpg",
      "/images/treks/buran-ghati/buran-ghati-view9.jpg",
      "/images/treks/buran-ghati/buran-ghati-view10.jpg",
      "/images/treks/buran-ghati/buran-ghati-view11.jpg",
      "/images/treks/buran-ghati/buran-ghati-view12.jpg",
      "/images/treks/buran-ghati/buran-ghati-view13.jpg",
      "/images/treks/buran-ghati/buran-ghati-view14.jpg",
      "/images/treks/buran-ghati/buran-ghati-view15.jpg",
      "/images/treks/buran-ghati/buran-ghati-view16.jpg",
      "/images/treks/buran-ghati/buran-ghati-view17.jpg",
      "/images/treks/buran-ghati/buran-ghati-view18.jpg",
      "/images/treks/buran-ghati/buran-ghati-view19.jpg",
      "/images/treks/buran-ghati/buran-ghati-view20.jpg",
      "/images/treks/buran-ghati/buran-ghati-view21.jpg",
      "/images/treks/buran-ghati/buran-ghati-hero.jpg",
      "/images/treks/buran-ghati/buran-ghati-hero1.jpg",
      "/images/treks/buran-ghati/buran-ghati-hero2.jpg",

    ],

    faqsLink: "/faqs-and-articles",
  },



  {
    id: "ali-bedni-bugyal-trek",
    name: "Ali Bedni Bugyal",
    difficulty: ["easy", "moderate"],
    season: ["spring", "autumn", "winter"],
    month: ["january", "february", "march", "april", "may", "september", "october", "november", "december"],
    duration: ["5 Nights / 6 Days"],
    region: "uttarakhand",
    heroImage: "/images/treks/ali-bedni-bugyal/ali-bedni-hero.jpg",
    subtitle: "A Timeless Himalayan Meadow Walk",

    overview: {
      facts: [
        { emoji: "⏳", label: "Trek Duration", value: "5 Nights / 6 Days" },
        { emoji: "🗺️", label: "Region", value: "Chamoli district, Uttarakhand" },
        { emoji: "🏔️", label: "Max Altitude", value: "11,500 ft (Bedni bugyal)" },
        { emoji: "📍", label: "Start Point", value: "Lohajung (Uttarakhand)" },
        { emoji: "🏁", label: "End Point", value: "Wan (Uttarakhand)" },
        { emoji: "🌤️", label: "Best Time", value: "September-May" },
        { emoji: "⚡", label: "Trek Grade", value: "Easy to Moderate (Suitable for all ages)" },
      ],
      snippet: 
        "Ali Bedni Bugyal is a soul-soothing walk through some of the most beautiful alpine meadows in the Indian Himalayas. Draped in wildflowers and hugged by forested ridges, this trek offers majestic views of Mt. Trishul and Nanda Ghunti. Perfect for beginners and dreamers alike, it’s a trail where every turn opens into quiet beauty and sky-touching grasslands. The trail weaves through quaint villages, rhododendron forests, and golden bugyals that glow under the Himalayan sun."
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
      { label: "28 Sep - 03 Oct", start: "2025-09-28", end: "2025-10-03" },
      { label: "05 Oct - 10 Oct", start: "2025-10-05", end: "2025-10-10" },
      { label: "12 Oct - 17 Oct", start: "2025-10-12", end: "2025-10-17" },
      { label: "26 Oct - 31 Oct", start: "2025-10-26", end: "2025-10-31" },
      { label: "09 Nov - 14 Nov", start: "2025-11-09", end: "2025-11-14" },
      { label: "23 Nov - 28 Nov", start: "2025-11-23", end: "2025-11-28" },

    ],

    highlights: [
      "Panoramic views of Trishul and Nanda Ghunti",
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
      details: "• Drive from Haridwar to Sari Village through scenic Garhwal hills<br>• Check-in at hotel / guesthouse<br>• Relax and explore the local village<br>• Overnight stay in a hotel at Sari"
      },
      {
      day: 2,
      title: "Trek from Lohajung to Didna Village (8,200 ft)",
      details: "• Trek Distance: ~6 km | Duration: 4–5 hours<br>• Trail descends to the Neel Ganga river, followed by a steady forest climb<br>• Refresh at a riverside stream — a popular local rest point<br>• Reach Didna, a remote mountain hamlet surrounded by oak and rhododendron forests<br>• Overnight stay in tents or homestay",
      },
      {
      day: 3,
      title: "Trek from Didna to Ali Bugyal (11,000 ft)",
      details: "• Trek Distance: ~6 km | Duration: 5–6 hours<br>• Long gradual ascent through enchanting rhododendron forests<br>• Forest opens suddenly to reveal the vast alpine meadows of Ali Bugyal<br>• Soak in surreal views of Mt. Trishul and Nanda Ghunti<br>• Camp on the gently undulating bugyal with views stretching miles"
      },
      {
      day: 4,
      title: "Trek to Bedni Bugyal (11,500 ft) and return to camp",
      details: "• Trek Distance: ~5 km round trip | Duration: 4–5 hours<br>• A dreamy walk across ridges connecting Ali and Bedni Bugyal<br>• Visit the sacred Bedni Kund — a revered high-altitude pond<br>• Capture stunning panoramas of snow peaks and golden meadows<br>• Return to camp at Ali Bugyal for a peaceful evening"
      },
      {
      day: 5,
      title: "Descend from Ali Bugyal to Wan Village (7,800 ft)",
      details: "• Trek Distance: ~10 km | Duration: 5–6 hours<br>• Steep descent through ancient oak forests and charming shepherd huts<br>• Pass by centuries-old Latu Devta shrine — worshipped by locals<br>• Reach Wan village, the end point of the trek<br>• Overnight in a local guesthouse"
      },
      {
      day: 6,
      title: "Drive from Wan/Lohajung to Rishikesh",
      details: "• Distance: ~250 km | Duration: 10–11 hours<br>• Return journey through mountain roads and river valleys with unforgettable meadow memories and new mountain friendships"
      },
     
    ],

    howToReach: {
      air: "Nearest airport is Jolly Grant Airport, Dehradun (approx. 250 km from Lohajung)",
      train: "Nearest railway stations: Rishikesh or Haridwar. Frequent trains from Delhi, Dehradun, and major cities",
      road: "Overnight buses available from Delhi to Rishikesh/Haridwar",
      travelTip: "Shared cabs or private taxis are available from Rishikesh to Lohajung, usually departing early in the morning. Here's how you can make the journey smoother:<br><br>**Route A (Direct or via major hubs):**<br>Rishikesh → Devprayag → Srinagar → Rudraprayag → Karnaprayag → Tharali → Debal → Lohajung. This route spans approximately **260–270 km** and takes **10 to 12 hours** depending on road conditions.<br><br>**Option B (Break journey for comfort):**<br>Split the trek: Take public transport or a taxi to Karnaprayag (~6–7 h), then switch to shared cabs via Tharali and Debal to reach Lohajung in around 3–4 more hours. :contentReference[oaicite:1]{index=1}<br><br> **Key travel hubs:** Karnaprayag is approximately 172 km from Rishikesh; from there, it's about 60 km to Debal, then another 20 km to Lohajung. :contentReference[oaicite:2]{index=2}<br><br> **Pro tips:**<br>• Book shared cabs early—seats are limited and fill up fast.<br>• Carry enough cash—ATMs are rare beyond Karnaprayag.<br>• Travel breaks at Devprayag, Srinagar, or Karnaprayag offer scenic river confluences and local food stops."

    },

    didYouKnow: [
      "Roopkund Lake, famously called the <b>Skeleton Lake</b>, lies ahead on the same trail and holds hundreds of ancient human remains — a centuries-old mystery still unsolved. It's part of the sacred Nanda Devi Raj Jat Yatra, an ancient pilgrimage held once every 12–14 years.",
      "Bedni Kund, the sacred pond in the meadows, is deeply revered by locals. It’s believed that Goddess Nanda Devi herself rests here during the great Raj Jat Yatra. Offerings and rituals are still performed here by shepherds and villagers.",
      "Ali & Bedni Bugyal together form one of the largest high-altitude meadows in Asia, but it’s not just their size that stuns — it’s how they suddenly emerge from thick forests like a hidden world, opening up panoramic views of Mt. Trishul and Nanda Ghunti that seem straight out of a dream.",
      "Wan, the trek’s end-point, is one of the highest motorable villages in the region. It’s known for its timeless wooden houses, traditional life, and proximity to the sacred Latu Devta Temple, which remains closed most of the year — its deity is believed to be so powerful that even priests enter blindfolded during rituals.",
      "The name Lohajung comes from “Lohasur Jung” — meaning “the battle with the demon Lohasur.” Legend says Goddess Parvati defeated the demon at this very spot. Today, it's the base camp for many legendary treks including Ali Bedni Bugyal and Roopkund."
    ],

    gallery: [
      "/images/treks/ali-bedni-bugyal/ali-bedni-hero.jpg",
      "/images/treks/ali-bedni-bugyal/ali-bedni-hero1.jpg",
      "/images/treks/ali-bedni-bugyal/ali-bedni-view1.jpg",
      "/images/treks/ali-bedni-bugyal/ali-bedni-view2.jpg",
      "/images/treks/ali-bedni-bugyal/ali-bedni-view3.jpg",
      "/images/treks/ali-bedni-bugyal/ali-bedni-view4.jpg",
      "/images/treks/ali-bedni-bugyal/ali-bedni-view5.jpg",
      "/images/treks/ali-bedni-bugyal/ali-bedni-view6.jpg",
      "/images/treks/ali-bedni-bugyal/ali-bedni-view7.jpg",
      "/images/treks/ali-bedni-bugyal/ali-bedni-view8.jpg",
      "/images/treks/ali-bedni-bugyal/ali-bedni-view9.jpg",
      "/images/treks/ali-bedni-bugyal/ali-bedni-view10.jpg",
      "/images/treks/ali-bedni-bugyal/ali-bedni-view11.jpg",
      "/images/treks/ali-bedni-bugyal/ali-bedni-view12.jpg",
      "/images/treks/ali-bedni-bugyal/ali-bedni-view13.jpg",
      "/images/treks/ali-bedni-bugyal/ali-bedni-view14.jpg",
      "/images/treks/ali-bedni-bugyal/ali-bedni-view15.jpg",
      "/images/treks/ali-bedni-bugyal/ali-bedni-view16.jpg"

    ],

    faqsLink: "/faqs-and-articles",
  },


  {
    id: "deoriatal-chandrashila-trek",
    name: "Deoriatal Chandrashila",
    difficulty: ["easy", "moderate"],
    season: ["spring", "autumn", "winter"],
    month: ["january", "february", "march", "april", "may", "september", "october", "november", "december"],
    duration: ["5 Nights / 6 Days"],
    region: "uttarakhand",
    heroImage: "/images/treks/deoriatal-chandrashila/chandrashila-hero1.jpg",
    subtitle: "A Perfect Himalayan Panorama",

    overview: {
      facts: [
        { emoji: "⏳", label: "Trek Duration", value: "5 Nights / 6 Days" },
        { emoji: "🗺️", label: "Region", value: "Rudrayaprayag district, Kedarnath Wildlife Sanctuary, Uttarakhand" },
        { emoji: "🏔️", label: "Max Altitude", value: "12,000 ft (Chandrashila peak)" },
        { emoji: "📍", label: "Start Point", value: "Sari (Uttarakhand)" },
        { emoji: "🏁", label: "End Point", value: "sari (Uttarakhand)" },
        { emoji: "🌤️", label: "Best Time", value: "September-May" },
        { emoji: "⚡", label: "Trek Grade", value: "Easy to Moderate (Suitable for all ages)" },
      ],
      snippet: 
        "Embark on a soul-stirring Himalayan journey as you trek to Tungnath at 11,400 feet, the world’s highest Shiva temple, and push further to the Chandrashila summit at 12,000 feet. Witness one of the finest Himalayan panoramas—featuring majestic peaks like Nanda Devi, Chaukhamba, Trishul, Kedar Dome, and more. Also experience the diverse flora and fauna of this region. The dense and lush green forest of this region is truly a paradise for the bird watchers."
    },

    price: 8500,
    priceNote: "* Sari to Sari",
    addons: {
      transport: 2800, 
      offloadingbag: 1200,
      transportNote: "* Dehradun/Rishikesh/Haridwar to Dehradun/Rishikesh/Haridwar"
    },

    inclusionsNote: "🍽️ All Meals – Nutritious meals provided from dinner on Day 1 to breakfast on Day 6",

    dates: [
      { label: "14 Sep - 19 Sep", start: "2025-09-14", end: "2025-09-19" },
      { label: "28 Sep - 03 Oct", start: "2025-09-28", end: "2025-10-03" },
      { label: "05 Oct - 10 Oct", start: "2025-10-05", end: "2025-10-10" },
      { label: "12 Oct - 17 Oct", start: "2025-10-12", end: "2025-10-17" },
      { label: "26 Oct - 31 Oct", start: "2025-10-26", end: "2025-10-31" },
      { label: "09 Nov - 14 Nov", start: "2025-11-09", end: "2025-11-14" },
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
      title: "Haridwar to Sari (Drive – 210 km - 7 to 8 hrs)",
      details: "• Drive from Haridwar to Sari Village through scenic Garhwal hills<br>• Check-in at hotel / guesthouse<br>• Relax and explore the local village<br>• Overnight stay in a hotel at Sari"
      },
      {
      day: 2,
      title: "Sari to Deoriatal (Trek – 4 km - 2 to 3 hrs)",
      details: "• Trek to Deoriatal Lake through forest trails and views of Himalayan peaks<br>• Enjoy the peaceful lake surrounded by forest and reflections of Chaukhamba<br>• Overnight stay in tents at Deoriatal"
      },
      {
      day: 3,
      title: "Deoriatal to Shyalmi (Trek – 10 km - 7 to 8 hrs)",
      details: "• Trek through beautiful alpine forests and meadows<br>• Walk along quiet trails with scenic views of the Himalayas<br>• Reach Shyalmi Bugyal and set up camp in nature<br>• Overnight camping at Shyalmi"
      },
      {
      day: 4,
      title: "Shyalmi to Baniyakund (Trek – 6 km - 3 to 4 hrs)",
      details: "• Early morning drive to Chopta (around 3:00 AM)<br>• Begin trek to Tungnath Temple and further to Chandrashila Peak for sunrise<br>• Witness breathtaking 360° Himalayan views: Nanda Devi, Trishul, Chaukhamba, Kedar Dome, and more<br>• Return trek to Chopta, then drive back to Baniyakund"
      },
      {
      day: 5,
      title: "Chopta – Tungnath – Chandrashila – Baniyakund ( Drive - 10 km, Trek - 10 km)",
      details: "• Trek distance: ~5 km | 4–5 hours<br>• Enter alpine zone with stunning snow-capped views<br>• Campsite in a high-altitude meadow below Buran Pass"
      },
      {
      day: 6,
      title: "Departure to Haridwar",
      details: "• After breakfast, drive back to Haridwar<br>• Trek ends with unforgettable Himalayan memories"
      },
     
    ],

    howToReach: {
      air: "Nearest airport: Jolly Grant airport, Dehradun ",
      train: "Nearest railway station: Haridwar/Rishikesh",
      road: "<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp📍 Distance from Haridwar/Rishikesh: ~210 km<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp🕒 Travel Time: 7–8 hours<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp🌍 Route: Haridwar/Dehradun → Rishikesh → Devprayg → Srinagar → Rudraprayag → Agastyamuni → Ukhimath → Sari Village",
      travelTip: "Transport Options:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp<b>1. Private Cab / Taxi</b> (Recommended for Groups)<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbspDuration: 7–8 hours<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbspCost: ₹5,000–₹7,000 (for a one-way cab for 4–6 people)<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbspWhere to book: Local taxi stands in Haridwar or Rishikesh<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp<b>2. Public Transport</b><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbspReach Ukhimath: Bus/shared jeep from Haridwar to Ukhimath (6–7 hrs) <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbspOR <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbspBus/shared jeep to Rudraprayag (5-6hrs) and then a shared jeep from Rudraprayag to Ukhimath (1-2hrs)<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbspReach Sari: Shared jeep or taxi from Ukhimath to Sari (~30 mins)"
    },

    didYouKnow: [
      " <b>Deoriatal is linked to the Mahabharata!</b>  <br>According to legend, this serene lake is where the Pandavas were questioned by Yaksha, a celestial being, in a test of wisdom and righteousness.",
      " <b>You can see five of the tallest Himalayan peaks from Chandrashila!</b>  <br>On a clear morning, the summit offers a panoramic view of Chaukhamba, Kedarnath Dome, Trishul, Nanda Devi, and Bandarpunch — a rare visual treat for a “moderate” trek.",
      " <b> Chandrashila means “Moon Rock.”!</b>  <br>It’s believed Lord Rama meditated here after defeating Ravana. This adds a spiritual dimension to the already breathtaking summit.",
      " <b>Tungnath is the highest Shiva temple in the world!</b>  <br>At 3,680 m, Tungnath is over 1,000 years old and part of the sacred Panch Kedar circuit. It’s older than Kedarnath.",
      " <b>The trail is a birdwatcher’s paradise!</b>  <br>Deoriatal forest is part of the Kedarnath Wildlife Sanctuary and home to exotic Himalayan birds like the Himalayan Monal, the state bird of Uttarakhand.",
      " <b>It’s a 4-season trek!</b> <br>Unlike many high-altitude treks, Deoriatal–Chandrashila is accessible even in winter, offering magical snow-covered trails without extreme risks."
    ],

    gallery: [
      "/images/treks/deoriatal-chandrashila/chandrashila-hero1.jpg",
      "/images/treks/deoriatal-chandrashila/chandrashila-hero2.jpg",
      "/images/treks/deoriatal-chandrashila/chandrashila-hero.jpg",
      "/images/treks/deoriatal-chandrashila/chandrashila-view1.jpg",
      "/images/treks/deoriatal-chandrashila/chandrashila-view2.jpg",
      "/images/treks/deoriatal-chandrashila/chandrashila-view3.jpg",
      "/images/treks/deoriatal-chandrashila/chandrashila-view4.jpg",
      "/images/treks/deoriatal-chandrashila/chandrashila-view5.jpg",
      "/images/treks/deoriatal-chandrashila/chandrashila-view6.jpg"

    ],

    faqsLink: "/faqs-and-articles",
  },



  {
    id: "gaumukh-tapovan-trek",
    name: "Gaumukh Tapovan",
    difficulty: ["moderate" , "difficult"],
    season: ["summer", "autumn"],
    month: ["may", "june", "september", "october"],
    duration: ["6 Nights / 7 Days"],
    region: "uttarakhand",
    heroImage: "/images/treks/gaumukh-tapovan/gaumukh-tapovan-hero2.jpg",
    subtitle: "The Holy Land Of The Himalayan Giants",

    overview: {
      facts: [
        { emoji: "⏳", label: "Trek Duration", value: "6 Nights / 7 Days" },
        { emoji: "🗺️", label: "Region", value: "Uttarkashi district, Gangotri National Park, Uttarakhand" },
        { emoji: "🏔️", label: "Max Altitude", value: "14,600 ft (Meru Base Camp)" },
        { emoji: "📍", label: "Start Point", value: "Gangotri (Uttarakhand)" },
        { emoji: "🏁", label: "End Point", value: "Gangotri (Uttarakhand)" },
        { emoji: "🌤️", label: "Best Time", value: "May-June & September-October" },
        { emoji: "⚡", label: "Trek Grade", value: "Moderate-Difficult" },
      ],
      snippet: 
        "Embark on a soul-stirring journey into the raw, untamed wilderness of the Gangotri National Park. This is where nature reveals itself in its most powerful form. This trek offers not just breathtaking views but a deeply immersive experience in one of the most sacred and dramatic high-altitude landscapes in the world which leaves you humbled and inspired. At the end of the trek you carry home more than just pictures – a piece of the Himalayas in your heart."
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
      { label: "14 Sep - 19 Sep", start: "2025-09-14", end: "2025-09-19" },
      { label: "28 Sep - 03 Oct", start: "2025-09-28", end: "2025-10-03" },
      { label: "05 Oct - 10 Oct", start: "2025-10-05", end: "2025-10-10" },
      { label: "12 Oct - 17 Oct", start: "2025-10-12", end: "2025-10-17" },
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
      title: "Arrive in Gangotri (3,048m)",
      details: "• Drive from Dehradun/Haridwar to Gangotri (9–10 hours)<br>• Scenic drive via Uttarkashi and Harsil Valley<br>• Overnight stay in guesthouse/hotel<br>• Evening visit to the Gangotri Temple"
      },
      {
      day: 2,
      title: "Acclimatization Day at Gangotri",
      details: "• Acclimatization walk to nearby areas (like Pandava Gufa or Surya Kund)<br>• Trek briefing, gear check, and photography session<br>• Overnight stay in Gangotri in same guesthose/hotel"
      },
      {
      day: 3,
      title: "Trek from Gangotri to Bhojwasa (3,780m) | 14 km | 6–7 hrs",
      details: "• Enter Gangotri National Park<br>• Walk alongside the Bhagirathi river with views of Sudharshan and Bhagirathi peaks<br>• Cross Chirbasa (pine forest area) en route<br>• Overnight in tents at Bhojwasa, near the last tree line"
      },
      {
      day: 4,
      title: "Trek to Gaumukh (3,900m) – Tapovan (4,450m) | 10 km | 6 hrs",
      details: "• Reach Gaumukh, the sacred glacier snout — origin of River Ganga<br>• Climb steep moraine and boulder trails to Tapovan, a pristine high-altitude meadow<br>• Camp beneath the towering Shivling peak, with views of Meru, Bhagirathi, and Thelu"
      },
      {
      day: 5,
      title: "Exploration Day at Tapovan",
      details: "• Hike towards Meru Base Camp or Shivling Advanced Base Camp<br>• Witness sunrise and sunset hues over Shivling – <b>The Indian Matterhorn</b>"
      },
      {
      day: 6,
      title: "Trek back to Gangotri | 20 km | 8–10 hrs",
      details: "• Descent from Tapovan<br>• Retrace steps along the Bhagirathi river<br>• Stay overnight in hotel/guesthouse"
      },
      {
      day: 7,
      title: "Drive back to Dehradun/Haridwar",
      details: "• End of trek and transfer"
      },
     
    ],

    howToReach: {
      air: "**Fly to Jolly Grant Airport (Dehradun – DED)**<br>* Located about 225–260 km from Gangotri<br>* Daily flights connect Dehradun with major Indian cities like Delhi, Mumbai, Bangalore, Kolkata, and Chennai",
      train: "**Rishikesh Railway Station (RKSH): ~230–264 km away**<br>* Haridwar Station: slightly farther at ~290 km**<br>* Dehradun station is also around 240 km away, but Rishikesh is preferred as most trains stop there.",
      road: "From Rishikesh/Haridwar/Dehdradun to Gangotri",
      travelTip: "Route via taxi or public bus through Rishikesh → Uttarkashi → Harsil → Gangotri. Total road journey: 8–12 hours, depending on stops and traffic."
    },

    didYouKnow: [
      " <b>Gaumukh is the source of the holy Ganga (Ganges) River!</b>  <br>Gaumukh literally means <b><em>Cow’s Mouth</b></em> — named because the glacier snout once resembled a cow’s mouth. It’s considered a sacred origin point of the Ganga, and a pilgrimage site as much as a trek destination.",
      " <b>Tapovan is one of the highest grasslands in India!</b>  <br>Located at around 4,300 meters (14,100 ft), Tapovan is a vast alpine meadow surrounded by towering Himalayan giants — including Shivling, Meru, and Bhagirathi peaks — making it a paradise for photographers and sadhus alike.",
      " <b>Mount Shivling is nicknamed the <em>Matterhorn of India</em>!</b>  <br>This stunning, pyramid-shaped peak towers over Tapovan and is revered as an abode of Lord Shiva. It's also a popular peak for advanced mountaineers from around the world.",
      " <b>You’ll walk beside the Gangotri Glacier — one of India’s largest!</b>  <br>This massive, 30 km-long glacier feeds the Ganga and offers a surreal landscape of icefalls, crevasses, and moraines — a rare and raw sight not found on most treks.",
      " <b>It’s a trek of spiritual seekers and adventure lovers alike!</b>  <br>For centuries, saints and sages have meditated at Tapovan. Even today, you might spot sadhus living in stone shelters, undisturbed in deep solitude at 14,000+ feet.",
      " <b>The name ‘Bhagirathi’ comes from a legend of devotion!</b> <br>The towering Bhagirathi peaks (I, II, III) are named after King Bhagirath, whose penance led to Ganga descending from the heavens — a story deeply linked to the origin of the river."
    ],

    gallery: [
      "/images/treks/gaumukh-tapovan/gaumukh-tapovan-hero.jpg",
      "/images/treks/gaumukh-tapovan/gaumukh-tapovan-hero1.jpg",
      "/images/treks/gaumukh-tapovan/gaumukh-tapovan-hero2.jpg",
      "/images/treks/gaumukh-tapovan/gaumukh-tapovan-view1.jpg",
      "/images/treks/gaumukh-tapovan/gaumukh-tapovan-view2.jpg",
      "/images/treks/gaumukh-tapovan/gaumukh-tapovan-view3.jpg",
      "/images/treks/gaumukh-tapovan/gaumukh-tapovan-view4.jpg",
      "/images/treks/gaumukh-tapovan/gaumukh-tapovan-view5.jpg",
      "/images/treks/gaumukh-tapovan/gaumukh-tapovan-view6.jpg",
      "/images/treks/gaumukh-tapovan/gaumukh-tapovan-view7.jpg",
      "/images/treks/gaumukh-tapovan/gaumukh-tapovan-view8.jpg",
      "/images/treks/gaumukh-tapovan/gaumukh-tapovan-view9.jpg",
      "/images/treks/gaumukh-tapovan/gaumukh-tapovan-view10.jpg",
      "/images/treks/gaumukh-tapovan/gaumukh-tapovan-view11.jpg",
      "/images/treks/gaumukh-tapovan/gaumukh-tapovan-view12.jpg"
    
    ],

    faqsLink: "/faqs-and-articles",
  },



  {
    id: "goechala-trek",
    name: "Goechala",
    difficulty: ["moderate" , "difficult"],
    season: ["spring", "summer", "autumn"],
    month: ["march", "april", "may", "june", "september", "october", "november"],
    duration: ["9 Nights / 10 Days"],
    region: "sikkim",
    heroImage: "/images/treks/goechala-trek/goechala-hero1.jpg",
    subtitle: "A Himalayan Symphony Of Nature & Majesty",

    overview: {
      facts: [
        { emoji: "⏳", label: "Trek Duration", value: "9 Nights / 10 Days" },
        { emoji: "🗺️", label: "Region", value: "Khangchendzonga National Park, Sikkim" },
        { emoji: "🏔️", label: "Max Altitude", value: "15,200 ft (Goechala Viewpoint-1)" },
        { emoji: "📍", label: "Start Point", value: "Yuksom (West Sikkim)" },
        { emoji: "🏁", label: "End Point", value: "Yuksom (West Sikkim)" },
        { emoji: "🌤️", label: "Best Time", value: "March-June & September-November" },
        { emoji: "⚡", label: "Trek Grade", value: "Moderate-Difficult" },
      ],

    snippet: 
      "Goecha La is undeniably one of the most spectacular treks in India, nestled deep within the breathtaking Khangchendzonga National Park in Sikkim. This trail is a walk through nature’s masterpiece – from dense forests draped in lush green to cascading waterfalls, swaying hanging bridges, and serene alpine meadows. And the biggest reward is the soul-stirring view of Mount Kanchendzonga, the third-highest mountain in the world, standing tall in all its glory. The trek is not just a journey through landscapes, but also through the rich biodiversity of Sikkim, home to vibrant birdlife and elusive wildlife.<br>Every step on this trail is a step closer to the heart of the Himalayas – raw, wild, and unforgettably beautiful."
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
      { label: "24 Sep - 03 Oct", start: "2025-09-24", end: "2025-10-03" },
      { label: "08 Oct - 17 Oct", start: "2025-10-08", end: "2025-10-17" },
      { label: "05 Nov - 14 Nov", start: "2025-11-05", end: "2025-11-14" },
      { label: "19 Nov - 28 Nov", start: "2025-11-19", end: "2025-11-28" }
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
      title: "Arrive at Yuksom (5,840 ft / 1,780 m)",
      details: "• Distance: 150 km from NJP / Bagdogra<br>• Time: 6–7 hours by road<br>• Stay: Guesthouse or homestay<br>• Highlights: Historic village, spiritual vibe, last point of motorable road"
      },
      {
      day: 2,
      title: "Yuksom to Sachen (7,150 ft / 2,180 m)",
      details: "• Trek Distance: 8 km | Time: 5–6 hours<br>• Trail Type: Gradual ascent through dense forest and wooden bridges<br>• Stay: Campsite in forest clearing<br>• Highlights: Walk along Rathong River, orchids, moss-laden trees, hanging bridges"
      },
      {
      day: 3,
      title: "Sachen to Tshoka (9,700 ft / 2,960 m) via Bakhim",
      details: "• Trek Distance: 7 km | Time: 4–5 hours<br>• Trail Type: Steep switchbacks after Bakhim<br>• Stay: Campsite or wooden huts<br>• Highlights: Rhododendron forest, views of Mt. Pandim begin to appear at Tshoka"
      },
      {
      day: 4,
      title: "Tshoka to Dzongri (13,000 ft / 3,960 m) via Phedang",
      details: "• Trek Distance: 10 km | Time: 6–7 hours<br>• Trail Type: Continuous ascent; steep but scenic<br>• Campsite on alpine meadow<br>• Highlights: Spectacular change in landscape; first panoramic Himalayan views"
      },
      {
      day: 5,
      title: "Sunrise at Dzongri top (13,675 ft / 4,170 m) & back, Dzongri to Thansing (12,900 ft / 3,930 m)",
      details: "• Trek Distance: 2 km (to Dzongri Top and back) + 10 km | Time: 7–8 hours<br>• Trail Type: Early morning climb to Dzongri top for sunrise. Later descend to Kokchurang and gradual climb to Thansing<br>• Stay: Campsite beside river and alpine meadows<br>• Highlights: <br>Early morning  sunrise from Dzongri top over Kanchendzonga, Pandim, Kabru, and Rathong ranges.<br>Open valley walk with glacier-fed river, thick forests"
      },
      {
      day: 6,
      title: "Thansing to Lamuney (13,700 ft / 4,180 m)",
      details: "• Trek Distance: 4 km | Time: 2–3 hours<br>• Trail Type: Easy, short walk<br>• Stay: Campsite (coldest night of the trek)<br>• Highlights: View of Pandim up-close, grasslands, and silence of high-altitude terrain<br><em>Tip: Sleep early for next day’s early summit push</em>"
      },
      {
      day: 7,
      title: "Lamuney to Goecha La Viewpoint 1 (16,200 ft / 4,940 m) and back to Thansing/Kokchurang ",
      details: "• Trek Distance: 12–13 km (round trip) | Time: 7–8 hours<br>• Trail Type: Steep, rocky path with glacier moraines<br>• Highlights: <br>Viewpoint 1: Stunning sunrise over Mt. Kanchendzonga<br>Samiti Lake en route – clear, reflective high-altitude lake"
      },
      {
      day: 8,
      title: "Thansing/Kokchurang to Tshoka",
      details: "• Trek Distance: 15–16 km | Time: 6–7 hours<br>• Trail Type: Mostly descending, but long and scenic through dense forest<br>•  Campsite or forest hut at Tshoka"
      },
      {
      day: 9,
      title: "Tshoka to Yuksom",
      details: "• Trek Distance: 14 km | Time: 5–6 hours<br>• Forest descent: same way return<br>• Stay: Guesthouse<br><em>End of Trek: Relax at Yuksom with hot food and a warm bath</em>"
      },
      {
      day: 10,
      title: "Departure",
      details: "• Drive back from Yuksom to NJP / Bagdogra"
      }
     
    ],

    howToReach: {
      air: "<br>• Bagdogra Airport (West Bengal) is the most practical air gateway (~150 km from Yuksom; ~6–7 hr by road).<br>• Pakyong Airport (Sikkim) is closer (~130 km away, ~5–6 hr) but has limited flights and is weather-dependent.<br><em>From both airports book a private cab to yuksom which may cost between ₹4000 - ₹8000</em>",
      train: "New Jalpaiguri (NJP) or Siliguri, the nearest railhead (~145–153 km from Yuksom; 6–7 hr by road)",
      road: "<br>• Route: Siliguri → Sevoke → Melli → Jorethang → Legship → Yuksom<br>• Shared jeeps from Siliguri's Tenzing Norgay Bus Terminus(near NJP railway station to Jorethang<br>• From Jorethang to Yuksom",
      travelTip: "Start early from Siliguri if opting for a shared vehicle as last jeep for Yuksom from Jorethang departs by 1PM - 2PM."
    },

    didYouKnow: [
      " <b>You can’t actually reach Goecha La Pass anymore!</b>  <br>Due to environmental restrictions and safety concerns, trekkers are now allowed only up to View Point 1, way before the actual Goecha La saddle. But don’t worry — the views of Mount Kanchenjunga from there are absolutely stunning.",
      " <b>You’ll see Mt. Kanchenjunga up close — the third-highest peak in the world!</b>  <br>GoechaLa offers one of the closest and most iconic views of Kanchenjunga (8,586 m) — often glowing golden at sunrise from Dzongri or Viewpoint 1.",
      " <b>Samiti Lake is sacred and untouched!</b>  <br>This serene, crystal-clear alpine lake near the final viewpoint is considered sacred by locals, and camping near it is not allowed — a mark of deep respect for nature and spirituality.",
      " <b>The trek passes through Kanchenjunga National Park — a UNESCO World Heritage Site!</b>  <br>GoechaLa is part of the Khangchendzonga Biosphere Reserve, known for its rare Himalayan wildlife like red pandas, Himalayan tahrs, and monals.",
      " <b>October and April give completely different experiences!</b>  <br>In October, you get clear skies and golden autumn colors, while in April–May, the forests are bursting with rhododendrons in full bloom — painting the trail in red, pink, and purple.",
      " <b>The trek has strong Tibetan and Sikkimese spiritual roots!</b> <br>Many locals believe the mountains are home to protective deities, and shrines along the trail show that GoechaLa is more than just a scenic hike — it’s a pilgrimage for some."
    ],

    gallery: [
      
      "/images/treks/goechala-trek/goechala-hero1.jpg",
      "/images/treks/goechala-trek/goechala-view1.jpg",
      "/images/treks/goechala-trek/goechala-view2.jpg",
      "/images/treks/goechala-trek/goechala-view12.jpg",
      "/images/treks/goechala-trek/goechala-view13.jpg",
      "/images/treks/goechala-trek/goechala-view14.jpg",
      "/images/treks/goechala-trek/goechala-view15.jpg",
      "/images/treks/goechala-trek/goechala-view16.jpg"
    
    ],

    faqsLink: "/faqs-and-articles",
  },


  {
    id: "phulara-ridge-trek",
    name: "Phulara Ridge",
    difficulty: ["easy", "moderate"],
    season: ["spring", "autumn"],
    month: ["april", "may", "september", "october", "november"],
    duration: ["5 Nights / 6 Days"],
    region: "uttarakhand",
    heroImage: "/images/treks/phulara-ridge/phulara-ridge-hero.jpg",
    subtitle: "A Panoramic Himalayan Ridgewalk",

    overview: {
      facts: [
        { emoji: "⏳", label: "Trek Duration", value: "5 Nights / 6 Days" },
        { emoji: "🗺️", label: "Region", value: "Uttarkashi district, Govind Pashu Vihar Wildlife Sanctuary, Uttarakhand" },
        { emoji: "🏔️", label: "Max Altitude", value: "12,150 ft (3,700 m)" },
        { emoji: "📍", label: "Start Point", value: "Sankri (Uttarakhand)" },
        { emoji: "🏁", label: "End Point", value: "Sankri (Uttarakhand)" },
        { emoji: "🌤️", label: "Best Time", value: "April-May & September-November" },
        { emoji: "⚡", label: "Trek Grade", value: "Easy-Moderate" },
      ],
      snippet: 
        "The Phulara Ridge Trek is a unique and mesmerizing journey that offers one of the finest ridge walks in the Indian Himalayas. Known for its uninterrupted 360-degree panoramic views of the Garhwal Himalayan peaks, this trek is a rare blend of adventure and scenic beauty. The trek starts from the picturesque village of Sankri, located inside the Govind pashu vihar wildlife sanctuary in the Uttarkashi district of Uttarakhand and goes through dense forests and lush green meadows, offering a wide variety of alpine flora and fauna."    
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
      { label: "28 Sep - 03 Oct", start: "2025-09-28", end: "2025-10-03" },
      { label: "05 Oct - 10 Oct", start: "2025-10-05", end: "2025-10-10" },
      { label: "12 Oct - 17 Oct", start: "2025-10-12", end: "2025-10-17" },
      { label: "26 Oct - 31 Oct", start: "2025-10-26", end: "2025-10-31" },
      { label: "09 Nov - 14 Nov", start: "2025-11-09", end: "2025-11-14" },
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
      details: "• Drive through scenic towns like Mussoorie, Purola, and Mori.<br>• Follow the Tons River upstream into the Govind Pashu Vihar sanctuary region.<br>• Overnight stay in guesthouse/hotel"
      },
      {
      day: 2,
      title: "Sankri to Juda ka Talab (Trek – 4 km | 4–5 hours), Altitude: ~9,000 ft (2,750 m)",
      details: "• Start your trek through thick pine and maple forests.<br>• Steady climb to the beautiful glacial lake Juda ka Talab, nestled among trees.<br>• Overnight Stay: Camp at Juda ka Talab"
      },
      {
      day: 3,
      title: "Juda ka Talab to Bhoj Gadi (Trek – 4.5 km | 4–5 hours), Altitude: ~11,200 ft (3,400 m)",
      details: "• Trail continues through forests and opens into meadows with distant views of snow-capped peaks.<br>• Reach the open campsite of Bhoj Gadi, a perfect spot for sunset photography.<br>• Overnight Stay: Camp at Bhoj Gadi"
      },
      {
      day: 4,
      title: " Bhoj Gadi to Pushtara via Phulara Ridge (Trek – 7 km | 6–7 hours), Altitude: Ridge top ~12,150 ft (3,700 m)",
      details: "• The highlight day: trek along the Phulara Ridge, with panoramic views all around.<br>• Feel like walking in the sky with a 360° view of the Himalayan giants: Swargarohini, Bandarpoonch, Kalanag.<br>• Descend gently to the vast open meadows of Pushtara.<br>• Overnight Stay: Camp at Pushtara meadows"
      },
      {
      day: 5,
      title: "Pushtara to Taluka – Drive to Sankri (Trek – 8 km | 4–5 hours + Drive 1 hr)",
      details: "• Descend through forests to the village of Taluka.<br>• Drive back to Sankri.<br>• Overnight Stay: Guesthouse in Sankri"
      },
      {
      day: 6,
      title: "Sankri to Dehradun (Drive – 190 km | 8–9 hours)",
      details: "• Return journey to Dehradun with memories of the ridge walk and majestic Himalayas.<br>• Trip ends by evening at Dehradun."
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
      "/images/treks/phulara-ridge/phulara-ridge-hero.jpg",
      "/images/treks/phulara-ridge/phulara-ridge-view1.jpg",
      "/images/treks/phulara-ridge/phulara-ridge-view2.jpg",
      "/images/treks/phulara-ridge/phulara-ridge-view3.jpg",
      "/images/treks/phulara-ridge/phulara-ridge-view4.jpg",
      "/images/treks/phulara-ridge/phulara-ridge-view5.jpg",
      "/images/treks/phulara-ridge/phulara-ridge-view6.jpg"
    
    ],

    faqsLink: "/faqs-and-articles",
  },


  {
    id: "harkidun-ruinsaratal-trek",
    name: "Harkidun Ruinsaratal",
    difficulty: ["moderate", "difficult"],
    season: ["summer", "autumn"],
    month: ["may", "june", "september", "october", "november"],
    duration: ["7 Nights / 8 Days"],
    region: "uttarakhand",
    heroImage: "/images/treks/harkidun-ruinsaratal/harkidun-ruinsara-hero.jpg",
    subtitle: "A Timeless Himalayan Masterpiece",

    overview: {
      facts: [
        { emoji: "⏳", label: "Trek Duration", value: "7 Nights / 8 Days" },
        { emoji: "🗺️", label: "Region", value: "Uttarkashi district, Govind Pashu Vihar Wildlife Sanctuary, Uttarakhand" },
        { emoji: "🏔️", label: "Max Altitude", value: "12,000 ft (Ruinsaratal)" },
        { emoji: "📍", label: "Start Point", value: "Sankri (Uttarakhand)" },
        { emoji: "🏁", label: "End Point", value: "Sankri (Uttarakhand)" },
        { emoji: "🌤️", label: "Best Time", value: "May-June & September-November" },
        { emoji: "⚡", label: "Trek Grade", value: "Moderate-Difficult" },
      ],
      snippet: 
        "The HarkiDun Ruinsaratal Lake trek is arguably one of the finest valley treks in the Indian Himalayas. This journey takes you deep into the cradle-shaped Har Ki Dun valley, nestled beside the gurgling Supin River, and onward to the pristine alpine beauty of Ruinsara Lake. Along the way, trekkers are welcomed by some of the oldest villages in Uttarakhand like Osla and Gangad, where timeless traditions, wooden houses, and warm hospitality offer a rare cultural experience. The scenic vistas, lush forests, snow-capped peaks of Swargarohini, Bandarpoonch, Black peak, and rich cultural heritage make this trek an unforgettable adventure that stays etched in memory for a lifetime."    
      },

    price: 17000,
    priceNote: "* Sanri to Sankri",
    addons: {
      transport: 3000, 
      offloadingbag: 4800,
      transportNote: "* Dehradun/Rishikesh/Haridwar to Dehradun/Rishikesh/Haridwar"
    },

    inclusionsNote: "🍽️ All Meals – Nutritious meals provided from dinner on Day 1 to dinner on Day 7",

    dates: [
      { label: "19 Sep - 26 Sep", start: "2025-09-19", end: "2025-09-26" },
      { label: "03 Oct - 10 Oct", start: "2025-10-03", end: "2025-10-10" },
      { label: "24 Oct - 31 Oct", start: "2025-10-24", end: "2025-10-31" },
      
    ],

    highlights: [
      "Ancient Himalayan villages: Osla & Gangad",
      "Panoramic views of Swargarohini, Bandarpoonch, Kalanag",
      "Pristine alpine lake: Ruinsaratal",
      "Diverse landscapes: forests, meadows, rivers, glaciers"
    ],

    itinerary: [
      {
      day: 1,
      title: "Drive to Sankri | Distance: ~200 km | Time: 7–8 hrs | Altitude: 1,950 m",
      details: "• Drive from your pickup point to Sankri.<br>• Overnight stay in guesthouse.<br>• Prepare gear and acclimatize."
      },
      {
      day: 2,
      title: "Drive to Gangad – Trek to Seema | Distance: 10 km | Time: 4–5 hrs | Altitude: 2,500 m",
      details: "• Start the trek through pine and oak forests, crossing small streams, and reach Seema village.<br>• Overnight in tents."
      },
      {
      day: 3,
      title: "Trek from Seema to Rainbasera | Distance: 8 km | Time: 5–6 hrs | Altitude: 3,200 m",
      details: "• Steady ascent through mixed forest and open meadows.<br>• Enjoy scenic views of the surrounding peaks.<br>• Overnight Stay: Camp"
      },
      {
      day: 4,
      title: "Trek from Rainbasera to Ruinsaratal | Distance: 10 km | Time: 6–7 hrs | Altitude: 3,650 m",
      details: "• Challenging trail with gradual ascent.<br>• Pass through alpine meadows, stream crossings, and rocky paths to reach Ruinsaratal Lake.<br>• Camp near the lake."
      },
      {
      day: 5,
      title: "Trek from Ruinsaratal to Seematra | Distance: 12 km | Time: 6–7 hrs | Altitude: 2,800 m",
      details: "• Descend through beautiful valleys, pine forests, and ridges to reach Seematra campdite.<br>• Overnight Stay: Tents"
      },
      {
      day: 6,
      title: "Trek to Har Ki Dun & back | Distance: 14 km | Time: 7–8 hrs | Altitude: 3,566 m",
      details: "• Day trek to the iconic Har Ki Dun valley.<br>• Explore the alpine meadows and panoramic Himalayan views.<br>• Return to Seematra for overnight stay."
      },
      {
      day: 7,
      title: "Trek to Gangad – Drive to Sankri | Distance: 10 km | Time: 4–5 hrs | Altitude: 1,950 m",
      details: "• Trek back to Gangad through descending trails.<br>• On the way visit and experience the century old traditional lifestyle of Osla village<br>• Drive down to Sankri for overnight stay in guesthouse."
      },
      {
      day: 8,
      title: "Departure from Sankri to Dehradun | Distance: ~200 km | Time: 7–8 hrs",
      details: "• Drive back to Dehradun with an experience and memories to cheer for a lifetime"
      },
    
    ],

    howToReach: {
      air: "<br>• Nearest Airport: Jolly Grant Airport, Dehradun (DED)<br>• Regular flights available from Delhi, Mumbai, Bangalore, and other major cities.Regular flights available from Delhi, Mumbai, Bangalore, and other major cities.<br>• From the airport, you can hire a taxi to Dehradun ISBT or directly to Sankri.",
      train: "<br>• Nearest Railway Station: Dehradun Railway Station<br>• Well connected with major cities like Delhi, Haridwar, Rishikesh, and Lucknow.",
      road: "Dehradun to Sankri (190 km | 8–9 hours)",
      travelTip: "<br>• Private Cab: Can be booked in advance. Costlier but comfortable.<br>• Local Bus: From Dehradun ISBT to Sankri via Purola (limited availability, leaves early morning)."
    },

    didYouKnow: [
      " <b>Har Ki Dun means “Valley of the Gods”!</b> - This ancient valley is believed to be the path the Pandavas took to heaven via Swargarohini peak, making the trek not just scenic but deeply spiritual.",
      " <b>Osla village worships Duryodhana, not a Pandava!</b> - Yes — the remote village of Osla has a temple dedicated to Duryodhana, the Kaurava prince from the Mahabharata. The architecture is 200+ years old and entirely made of wood.",
      " <b>You’ll see Swargarohini – the “stairway to heaven!”</b> - This striking snow-clad peak is believed to be the mythical route the Pandavas ascended to heaven — a rare myth-meets-mountain moment you witness right from your campsite.",
      " <b>The trail crosses through ancient shepherd routes!</b> - For centuries, this circuit has been used by Gujjar shepherds and traders, moving through forest trails and alpine meadows long before it became a modern trek route.",
      " <b>You walk through 3 climate zones in one trek!</b> - From pine and deodar forests to alpine grasslands and glacial basins — the circuit covers subtropical, temperate, and alpine terrain, offering one of the most varied landscapes in Uttarakhand.",
      " <b>The trail passes through Govind National Park!</b> - Har Ki Dun lies within the Govind Pashu Vihar Wildlife Sanctuary, home to snow leopards, black bears, musk deer, and dozens of rare birds and wildflowers."
    ],

    gallery: [
      "/images/treks/harkidun-ruinsaratal/harkidun-ruinsara-hero.jpg",
      "/images/treks/harkidun-ruinsaratal/harkidun-ruinsara-view1.jpg",
      "/images/treks/harkidun-ruinsaratal/harkidun-ruinsara-view2.jpg",
      "/images/treks/harkidun-ruinsaratal/harkidun-ruinsara-view3.jpg",
      "/images/treks/harkidun-ruinsaratal/harkidun-ruinsara-view4.jpg",
      "/images/treks/harkidun-ruinsaratal/harkidun-ruinsara-view5.jpg",
      "/images/treks/harkidun-ruinsaratal/harkidun-ruinsara-view6.jpg"
    ],

    faqsLink: "/faqs-and-articles",
  },


  {
    id: "harkidun-trek",
    name: "Harkidun",
    difficulty: ["easy", "moderate"],
    season: ["spring", "summer", "autumn"],
    month: ["may", "april", "june", "march", "september", "october", "november"],
    duration: ["5 Nights / 6 Days"],
    region: "uttarakhand",
    heroImage: "/images/treks/harkidun/harkidun-hero1.jpg",
    subtitle: "A Timeless Himalayan Masterpiece",

    overview: {
      facts: [
        { emoji: "⏳", label: "Trek Duration", value: "5 Nights / 7 Days" },
        { emoji: "🗺️", label: "Region", value: "Uttarkashi district, Govind Pashu Vihar Wildlife Sanctuary, Uttarakhand" },
        { emoji: "🏔️", label: "Max Altitude", value: "11,200 ft (Harkidun)" },
        { emoji: "📍", label: "Start Point", value: "Sankri (Uttarakhand)" },
        { emoji: "🏁", label: "End Point", value: "Sankri (Uttarakhand)" },
        { emoji: "🌤️", label: "Best Time", value: "March-June & September-November" },
        { emoji: "⚡", label: "Trek Grade", value: "Easy-Moderate (suitable for all ages)" },
      ],
      snippet: 
        "The Harkidun trek is arguably one of the finest valley treks in the Indian Himalayas. This journey takes you deep into the cradle-shaped Har Ki Dun valley, nestled beside the gurgling Supin River, and onward to the pristine alpine beauty of Ruinsara Lake. Along the way, trekkers are welcomed by some of the oldest villages in Uttarakhand like Osla and Gangad, where timeless traditions, wooden houses, and warm hospitality offer a rare cultural experience. The scenic vistas, lush forests, snow-capped peaks of Swargarohini, Bandarpoonch, Black peak, and rich cultural heritage make this trek an unforgettable adventure that stays etched in memory for a lifetime."    
      },

    price: 12500,
    priceNote: "* Sanri to Sankri",
    addons: {
      transport: 3000, 
      offloadingbag: 3200,
      transportNote: "* Dehradun/Rishikesh/Haridwar to Dehradun/Rishikesh/Haridwar"
    },

    inclusionsNote: "🍽️ All Meals – Nutritious meals provided from dinner on Day 1 to dinner on Day 5",

    dates: [
      { label: "28 Sep - 03 Oct", start: "2025-09-28", end: "2025-10-03" },
      { label: "05 Oct - 10 Oct", start: "2025-10-05", end: "2025-10-10" },
      { label: "12 Oct - 17 Oct", start: "2025-10-12", end: "2025-10-17" },
      { label: "26 Oct - 31 Oct", start: "2025-10-26", end: "2025-10-31" },
      { label: "09 Nov - 14 Nov", start: "2025-11-09", end: "2025-11-14" },
      { label: "23 Nov - 28 Nov", start: "2025-11-23", end: "2025-11-28" }
      
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
      details: "• Drive from your pickup point to Sankri.<br>• Overnight stay in guesthouse.<br>• Prepare gear and acclimatize."
      },
      {
      day: 2,
      title: "Drive to Gangad – Trek to Seema | Distance: 10 km | Time: 4–5 hrs | Altitude: 2,500 m",
      details: "• Start the trek through pine and oak forests, crossing small streams, and reach Seema village.<br>• Overnight in tents."
      },
      {
      day: 3,
      title: "Trek from Seema to Seematra | Distance: 8 km | Time: 5–6 hrs | Altitude: 3,200 m",
      details: "• Steady ascent through mixed forest and open meadows.<br>• Cross the famous Kalkatiyadhar.<br>• Overnight Stay: Camp"
      },
      {
      day: 4,
      title: "Trek to Har Ki Dun & back | Distance: 14 km | Time: 7–8 hrs | Altitude: 3,566 m",
      details: "• Day trek to the iconic Har Ki Dun valley.<br>• Explore the alpine meadows and panoramic Himalayan views.<br>• Return to Seematra for overnight stay."
      },
      {
      day: 5,
      title: "Trek to Gangad – Drive to Sankri | Distance: 10 km | Time: 4–5 hrs | Altitude: 1,950 m",
      details: "• Trek back to Gangad through descending trails.<br>• On the way visit and experience the century old traditional lifestyle of Osla village<br>• Drive down to Sankri for overnight stay in guesthouse."
      },
      {
      day: 6,
      title: "Departure from Sankri to Dehradun | Distance: ~200 km | Time: 7–8 hrs",
      details: "• Drive back to Dehradun with an experience and memories to cheer for a lifetime"
      },
    
    ],

    howToReach: {
      air: "<br>• Nearest Airport: Jolly Grant Airport, Dehradun (DED)<br>• Regular flights available from Delhi, Mumbai, Bangalore, and other major cities.Regular flights available from Delhi, Mumbai, Bangalore, and other major cities.<br>• From the airport, you can hire a taxi to Dehradun ISBT or directly to Sankri.",
      train: "<br>• Nearest Railway Station: Dehradun Railway Station<br>• Well connected with major cities like Delhi, Haridwar, Rishikesh, and Lucknow.",
      road: "Dehradun to Sankri (190 km | 8–9 hours)",
      travelTip: "<br>• Private Cab: Can be booked in advance. Costlier but comfortable.<br>• Local Bus: From Dehradun ISBT to Sankri via Purola (limited availability, leaves early morning)."
    },

    didYouKnow: [
      " <b>Har Ki Dun means “Valley of the Gods”!</b> - This ancient valley is believed to be the path the Pandavas took to heaven via Swargarohini peak, making the trek not just scenic but deeply spiritual.",
      " <b>Osla village worships Duryodhana, not a Pandava!</b> - Yes — the remote village of Osla has a temple dedicated to Duryodhana, the Kaurava prince from the Mahabharata. The architecture is 200+ years old and entirely made of wood.",
      " <b>You’ll see Swargarohini – the “stairway to heaven!”</b> - This striking snow-clad peak is believed to be the mythical route the Pandavas ascended to heaven — a rare myth-meets-mountain moment you witness right from your campsite.",
      " <b>The trail is part of an ancient Indo-Tibetan route!</b> - Long before modern trekkers arrived, Har Ki Dun was used by traders and shepherds moving between the Tons Valley and remote parts of Himachal and Tibet.",
      " <b>You walk through 3 climate zones in one trek!</b> - From pine and deodar forests to alpine grasslands and glacial basins — the circuit covers subtropical, temperate, and alpine terrain, offering one of the most varied landscapes in Uttarakhand.",
      " <b>The trail passes through Govind National Park!</b> - Har Ki Dun lies within the Govind Pashu Vihar Wildlife Sanctuary, home to snow leopards, black bears, musk deer, and dozens of rare birds and wildflowers."
    ],

    gallery: [
      "/images/treks/harkidun/harkidun-hero1.jpg",
      "/images/treks/harkidun/harkidun-view2.jpg",
      "/images/treks/harkidun/harkidun-view3.jpg",
      "/images/treks/harkidun/harkidun-view4.jpg",
      "/images/treks/harkidun/harkidun-view5.jpg",
      "/images/treks/harkidun/harkidun-view6.jpg"
    ],

    faqsLink: "/faqs-and-articles",
  },
  // Add other trek objects here...
];
