// src/data/treksData.js

export const treks = [

/* Ladakh & Kashmir */

{
    id: "markha-valley-trek",
    name: "Markha Valley Trek",
    tags: ["intermediate", "pro", "pass", "glacier", "markha", "hemis", "crossover", "meadows", "teahouse"],
    difficulty: ["moderate", "difficult"],
    season: ["monsoon"],
    month: ["july", "august", "september"],
    region: "ladakh",
    duration: "7 Nights / 7 Days",
    coordinates: [
      [34.1526, 77.5771],   // Leh
      [33.970001, 77.260002], // Skiu (start near Leh)
      [34.0500, 77.3760],   // Chilling area
      [33.9700, 77.2600],   // Skiu
      [33.8640, 77.5030],   // Markha
      [33.8644, 77.5826], // Hemis (end near Leh)
    ],

    heroImage: "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535590/markha-valley-hero1_wjsawn.jpg",

    heroImages: ["https://res.cloudinary.com/dr44hob9b/image/upload/v1755535590/markha-valley-hero1_wjsawn.jpg",
                "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535584/markha-valley-hero_yvm2ji.jpg",
                "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535614/markha-valley-view6_cob1jc.jpg",
    ],

    subtitle: "The Classic Trek of Himalayan Cold Desert",

    seo: {
      title: "Markha Valley Trek | Itinerary, Cost & Dates | Planethimalayas",
      description: "Markha Valley Trek (17,060 ft) is Ladakh’s most iconic trek, crossing high passes, river crossings, Buddhist monasteries, and dramatic desert landscapes over 8 days."
    },

    overview: {
      facts: [
        { emoji: "⏳", label: "Trek Duration", value: "7 Nights / 7 Days" },
        { emoji: "⚡", label: "Trek Grade", value: "Modrate / Difficult" },
        { emoji: "🏔️", label: "Max Altitude", value: "17,100 ft (Kongmaru La)" },
        { emoji: "⚡", label: "Trek Distance", value: "55–60 Km" },
        { emoji: "🌤️", label: "Best Time", value: "July to September" },
        { emoji: "🗺️", label: "Region", value: "Markha Valley, Ladakh (Hemis National Park)" },
        { emoji: "📍", label: "Start Point", value: "Skiu (near Leh)" },
        { emoji: "🏁", label: "End Point", value: "Hemis (near Leh)" },
        { emoji: "🧥", label: "Cloakroom facility", value: "Available" },
      ],
      snippet: "The Markha Valley Trek is the crown jewel of Ladakh — a rare Himalayan journey where stark cold-desert landscapes blend effortlessly with deep-rooted culture, ancient monasteries, and warm Ladakhi hospitality. Often called the ‘Tea House Trek of Ladakh’, this trail lets you walk through rugged gorges, cross icy streams, wander across wide-open high-altitude meadows, and spend nights in remote villages that feel suspended in time.<br>Your adventure begins in Leh, giving you the perfect chance to acclimatize and explore the region’s rich cultural heritage before stepping into the wilderness. As you enter the valley, the scenery shifts dramatically — willow-lined streams accompany your path, mud houses merge with ochre mountain walls, and the silence of the cold desert stretches endlessly before you. Passing through villages like Skiu, Sara, Markha, Hankar, and Nimaling, you experience the gentle rhythm of Ladakhi life, where locals greet you with hot tea, soft smiles, and stories passed down through generations. Places like Sara Village, with its animal-skull gateway, ancient monastery, and sweeping barley fields, offer an intimate encounter with Ladakh’s living traditions.<br>The trail winds through the vast expanse of Hemis National Park, home to unique wildlife such as Himalayan blue sheep, marmots, lammergeiers, golden eagles, and, with immense luck, even the elusive snow leopard. Along the way, you pass historic fort ruins, towering chortens, and hidden gems like the Tacha Monastery, nestled dramatically between cliffs and offering a peaceful pause in the middle of the desert.<br>Though Ladakh is known for its dry landscapes, the trek surprises you with river crossings like the Indus and Markha, as well as clear mountain streams that cut through barren terrain. As you climb higher, the valley opens into lush summer grazing grounds at Nimaling, one of the most picturesque campsites in the region. Surrounded by grazing yaks and endless meadows, Nimaling offers unmatched views of Kang Yatse, Dzo Jongo, and the wild, untamed Ladakh ranges. Nights here are magical, with some of the clearest skies in India — the Milky Way spreading across the horizon in an explosion of stars.<br>The high point of the trek, both literally and emotionally, is Kongmaru La (17,300 ft). The climb is steep and strenuous, but the moment you reach the pass, the entire panorama of the Karakoram, Stok, and Kang Yatse ranges unfolds like a painted canvas. Fluttering prayer flags mark the spot, celebrating your arrival at one of Ladakh’s most breathtaking viewpoints.<br>Every day on the Markha Valley Trek brings new moods — dry golden deserts, narrow rock gorges, vibrant green oases, ancient Buddhist shrines, high-altitude pastures, and remote hamlets that exist far from the bustle of the modern world. Unlike most Himalayan routes, Markha Valley is not a to-and-fro trail, giving you a constantly changing, non-repetitive perspective of the Ladakhi Himalayas. The journey is challenging, especially at high altitude, but deeply rewarding for trekkers who seek solitude, culture, wildlife, and the raw, unfiltered beauty of Ladakh.<br>The Markha Valley Trek is more than a hike — it’s an immersive cultural journey, a walk through one of the largest valleys of Ladakh, and a soul-stirring exploration of nature, history, and the high Himalayan desert. A trek that lingers long after your footsteps fade."
    },

    price: 24900,
    priceNote: "* Leh to Leh",
    addons: {
      transport: null,
      transportNote: "* Trekkers can request transport arrangements from Leh airport to hotel and drop. Transport will be organized on the spot, and costs are to be shared by trekkers directly.",
      offloadingbag: 5000,
      offloadingNote: "* Maximum weight 9kg/bag"
    },

    inclusionsNote: "🍽️ All Meals – Nutritious meals provided from packed lunch on Day 3 to packed lunch on Day 7",

    dates: [
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
  details: "Arrive in Leh by flight or train and check in to your hotel, allowing your body to settle into the high altitude of 11,500 ft. Since a direct landing at this height can trigger AMS, the first day is entirely meant for rest and gentle acclimatization. Keep your schedule light—explore Leh market, visit nearby monasteries, or stroll around the town, but avoid visiting any very high-altitude pass or viewpoint. A mandatory trek briefing takes place at 5 PM, for which you must carry a copy of your ID proof and two photographs; foreign trekkers should bring a passport and visa copy. Leh has reliable post-paid network coverage, several ATMs, and plenty of shops where you can rent or buy any trekking gear you may have forgotten. The cafés here are lively hangouts for travelers, but avoid alcohol and smoking as they interfere with acclimatization. Stay hydrated, enjoy the local culture and cuisine, and return to your hotel early to rest well. An easy, relaxed Day 1 is crucial to prepare your body for the days ahead."
  },
  {
  day: 2,
  title: "Acclimatization and Sightseeing in Leh",
  details: "This extra acclimatization day is crucial for helping your body adjust to the thinning air of Ladakh, so spend as much time outdoors as possible while keeping the day relaxed and strain-free. You can explore some of Leh’s most significant monasteries such as Shey, Thiksey, Hemis, and the Sangam viewpoint where the Indus and Zanskar rivers meet, each offering a window into Ladakh’s deep Buddhist heritage. Thiksey Gompa, perched on a hill, is the largest in central Ladakh and gives you a beautiful introduction to the region’s culture. Avoid gaining altitude or visiting high passes today, as it may interfere with your acclimatization. Instead, wander around Leh town, explore the lively bazaar, interact with locals, and sample the delicious local cuisine. If you prefer gentle activity, a downhill cycling tour around Leh can be done without putting strain on your body. As the day winds down, make sure to catch the sunset at Shanti Stupa, known for its glowing lights in the evening. Return to your hotel for the night and rest well — your actual trekking journey begins tomorrow."
  },
  {
  day: 3,
  title: "Leh → Skiu (Drive, 70 km / 2–3 hrs) → Trek to Sara (11,800 ft / 3,600 m) | Trek Distance: 11 km | 5-6 hrs.",
  details: "Today marks the true beginning of your Markha Valley adventure as you drive from Leh to Skiu through some of Ladakh’s most iconic landscapes. The journey takes you past military camps, the famous Gurudwara Pathar Sahib, and the mysterious Magnetic Hill, with constant views of the Stok range until you enter the boundaries of Hemis National Park. A major highlight en route is the spectacular Sangam viewpoint where the emerald Indus and Zanskar rivers meet in a striking confluence. As the road turns towards Chilling, the scenery shifts dramatically—open terrains gradually narrow into deep valleys painted in shades of purple, grey, and black, with juniper trees lining the route. After crossing the Zanskar River over green iron bridges, you arrive at the serene village of Skiu, divided into Upper and Lower sections, adorned with mani stones, white stupas, and an ancient monastery. From here, your trek begins on a well-marked trail that follows the Markha River. Along the way, you may spot magpies, blue sheep, and other wildlife that thrive in this rich Himalayan ecosystem. You’ll pass small cafés, winter settlements, barley and wheat fields, mani walls, and Lhatos as you make your way through the valley. Continue trekking past the quiet village of Nagding, where meditation caves dot the rocky slopes, and the riverbanks widen into sandy stretches. After several hours, you enter the culturally vibrant village of Sara, marked by a dramatic gateway decorated with skulls of wild animals—symbols of pride for the locals. With its ancient monastery, historic castle, and lush wheat fields, Sara offers the perfect blend of culture and natural beauty. Settle into your tent or homestay for a warm meal and end the day under a dazzling sky full of stars."
  },
  {
  day: 4,
  title: "Sara → Markha Village (12,200 ft / 3,700 m) | Trek Distance: 10 km | 5-6 hours.",
  details: "Begin your morning in Sara with a warm breakfast and stunning Himalayan views before easing into a day that feels beautifully familiar to the previous one. The trail gradually leads you across small water channels and stretches of cold desert terrain until you reach the charming village of Chalak, which appears after crossing a wooden bridge. Chalak is dotted with cozy tea houses, stone-walled animal shelters, and homes perched on small hillsides, surrounded by patches of green wheat fields contrasting against the barren mountains. After resting and interacting with friendly locals, continue on the gentle ascent towards Markha, passing a long stretch marked by Bharal horns and countless mani stones laid around elegant white stupas. These stones carry sacred Buddhist inscriptions—some even in Sanskrit—so treat them with great respect and avoid touching them, as villagers believe they are spiritually protected. The trail also unfolds ancient ruins with prayer flags fluttering above, adding a sense of timelessness to the valley. As you approach Markha, you must cross a flowing stream of the Markha River, which can rise up to thigh level at times; removing your shoes and wading through the icy water offers a refreshing burst of energy. A short walk afterward brings you to Markha, the largest village in the valley, known for its scattered traditional houses, monastery, and the ruins of the old Markha fort. Settle into your homestay or campsite here and soak in the cultural richness and scenic calm of this historic Himalayan settlement."
  },
  {
  day: 5,
  title: "Markha → Hankar (13,400 ft / 4,100 m) | Trek Distance: 13 km | 7 - 8 hrs.",
  details: "Today’s journey takes you deeper into the upper Markha Valley, where the scenery begins to widen and the landscapes gain a grander, more dramatic character. As you leave Markha behind, make the most of the simplicity and innocence of the last inhabited villages you’ll encounter on this route. The trail meanders through beautiful stretches where barren mountains meet refreshing streams, with the path crossing the river multiple times—sometimes over small wooden bridges, other times through shallow flowing water. The valley slowly opens up as you approach Umlung, a tiny settlement that hosts the last teahouse of the trek and offers a peaceful monastery that blends effortlessly into the rugged surroundings. Beyond Umlung comes one of the most unforgettable moments of the trek: your very first view of Mt. Kang Yatse, standing tall at 6,400 m, appearing suddenly and magnificently as if inviting you forward. Keep following the river and navigating its crossings as the trail leads you toward Hankar, the final village of the Markha Valley. Along the way, look out for the beautifully perched Tacha monastery, seemingly balancing on a rocky cliff—a magical sight against the stark mountain backdrop. By the time you reach Hankar, surrounded by high pastures and towering peaks, you’ll feel the transition from village life to true Himalayan wilderness. Settle into your tent or homestay for the night and enjoy the quiet, remote beauty of this last inhabited stop on your route."
  },
  {
  day: 6,
  title: "Hankar → Nimaling (15,800 ft / 4,800 m) | Trek Distance: 12 km | 7 - 8 hrs.",
  details: "Today’s trek feels refreshing and far gentler compared to yesterday’s demanding climb, allowing you to truly sink into the beauty of the upper Markha Valley. As you leave Hankar, the trail begins easily, and within the first kilometre you’ll reach a set of diversions—one leading toward Rupshu and Zanskar. Staying on the left trail, you walk toward a stone bridge that confirms you’re on the correct path. From here, several side trails appear frequently, so it’s important to keep close to your trek leader while enjoying the scenery. Within a couple of hours, the lush pastures of Thochuntse begin to unfold ahead of you, a welcome burst of greenery after days in Ladakh’s stark high-altitude desert. This small settlement has tea houses and seasonal campsites, making it a natural rest point. Just beyond this stretch, the trail steepens for about an hour before easing into a long, gradual ascent. As you walk, the mighty Kang Yatse peak dominates your right side, growing larger and more magnificent with every step, almost as if guiding you onward. A pair of serene twin lakes suddenly appear along the trail, offering a moment of calm reflection against the rugged landscape. From the lakes, a gentle descent leads you to the vast, windswept plateau of Nimaling, the highest campsite on the entire Markha Valley trek. This expansive grassland—dotted with grazing sheep, goats, and occasionally mountain hares—feels like a world entirely its own. With the towering Kang Yatse massif rising beside you and the open sky stretching endlessly above, Nimaling offers some of the most unforgettable views of the trek. Nights here can bring sudden snowfall, adding to the wild charm of this high-altitude sanctuary. Settle into your tent and let the quiet, elevated world of Nimaling lull you into deep rest."
  },
  {
  day: 7,
  title: "Nimaling → Chokdo via Kongmaru La (17,300 ft / 5,275 m) → Drive to Leh | Trek Distance: 13 km | 7–8 hrs",
  details: "Start early and cross the stream near the Nimaling campsite before beginning the long climb to Kongmaru La—the highest point of the Markha Valley Trek. The ascent takes around 2–3 hours and is strenuous but rewarding, opening to magnificent views of the Karakoram range, the Indus Valley, the Ladakh Range, and even the distant K2 on a clear day. Colorful prayer flags flutter in the wind at the top, and surprisingly, there is often decent mobile network here. From the pass, the trail descends steeply through narrow rocky sections before easing out towards the villages of Chikirmo and Chokdo. The descent is long and can be hard on the knees, but the scenery of the Indus Valley remains spectacular throughout. Upon reaching Chokdo, board your vehicle for the 60 km (approx 2–3 hrs) drive back to Leh. Spend the evening resting in your hotel and celebrating the completion of the Markha Valley Trek."
  },
 
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

    downloadLink: "/docs/Packing_List.pdf",

    faqs: {
  questions: [
    {
      question: "Who can participate in the Markha Valley trek?",
      answer: "This trek is suitable for intermediate trekkers with basic high-altitude experience. While the trails are moderate, some days involve long distances and high-altitude camping.",
    },
    {
      question: "How should I prepare physically for the Markha Valley Trek?",
      answer:
        "Preparation should begin at least 6–8 weeks before the trek. A strong cardiovascular base is essential — regular running, stair climbing, cycling, or hiking with a loaded backpack is recommended. Strength training focusing on legs, core, and balance will help handle steep climbs and descents. Prior experience on difficult Himalayan treks significantly improves safety and comfort."
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
  "id": "winter-markha-valley-trek",
  "name": "Winter Markha Valley Trek",
  "tags": ["intermediate","meadows"],
  "difficulty": ["moderate"],
  "season": ["winter"],
  "month": ["january", "february", "march"],
  "region": "ladakh",
  "duration": "7 Nights / 7 Days",

  "coordinates": [
    [34.1526, 77.5771],   // Leh
    [34.0500, 77.3760],   // Chilling area
    [33.9700, 77.2600],   // Skiu
    [33.8640, 77.5030],   // Markha
    ],

    heroImage: "https://res.cloudinary.com/dr44hob9b/image/upload/v1764855820/winter-markha-valley-hero1_c3d3fn.jpg",

    heroImages: [
                "https://res.cloudinary.com/dr44hob9b/image/upload/v1764855820/winter-markha-valley-hero1_c3d3fn.jpg",
                "https://res.cloudinary.com/dr44hob9b/image/upload/v1764855822/winter-markha-valley-hero_y4wizr.jpg",
    ],

    subtitle: "Ladakh & the Himalayas: A Frozen Desert Adventure",

    seo: {
      title: "Winter Markha Valley Trek | Frozen River Trek in Ladakh | Planethimalayas",
      description: "The Winter Markha Valley Trek is Ladakh’s most unique frozen-river experience, offering icy trails, snow-filled valleys, cozy homestays, and stunning views of Kang Yatse during deep winter. Explore itinerary, difficulty, cost, and dates with Planethimalayas."
    },

    overview: {
      facts: [
        { emoji: "⏳", label: "Trek Duration", value: "7 Nights / 7 Days" },
        { emoji: "⚡", label: "Trek Grade", value: "Moderate" },
        { emoji: "🏔️", label: "Max Altitude", value: "4,000 m (13,100 ft)" },
        { emoji: "⚡", label: "Trek Distance", value: "65–70 Km (approx.)" },
        { emoji: "🌤️", label: "Best Time", value: "January to March" },
        { emoji: "🗺️", label: "Region", value: "Markha Valley, Ladakh (Hemis National Park)" },
        { emoji: "📍", label: "Start Point", value: "Chilling (near Leh)" },
        { emoji: "🏁", label: "End Point", value: "Chilling / Leh" },
        { emoji: "🧥", label: "Cloakroom facility", value: "Available" }
      ],

      snippet: "Markha Valley in winter is one of the most surreal Himalayan experiences you can step into. The valley transforms into a silent, untouched world of frozen rivers, ancient stone villages, and wide white landscapes that feel almost otherworldly. For trekkers who want the thrill of walking on frozen water, the stillness of deep Zanskar winters, and the raw charm of Ladakh’s culture, Winter Markha Valley offers everything, with solitude and strong cultural immersion.<br>As temperatures drop, the Markha River — a tributary of the Zanskar — freezes into silver ribbons that wind through remote settlements like Chilling, Skiu, Sara, Markha, and Hankar. Smoke rising from mud-brick homes, frozen streams, prayer flags fluttering in icy winds, and the warmth of Ladakhi homestays create a beautiful contrast against the harsh cold outside.<br>The region falls inside Hemis National Park, home to blue sheep, red foxes, lammergeiers, and even snow leopards. Every day on the trail holds winter wonders: frozen waterfalls, frost-covered bridges, silent monasteries, and the towering presence of the Kang Yatse massif. The terrain is not steep, but the cold is extreme — daytime temperatures hover around –10°C to –15°C and nights can drop to –25°C or even –35°C in windy sections.<br>For winter lovers who want an offbeat, raw, dramatic Himalayan journey, the Winter Markha Valley Trek is a perfect match.",
    },

    price: 29400,
    priceNote: "* Leh to Leh",
    addons: {
      transport: null,
      transportNote: "* Trekkers can request transport arrangements from Leh airport to hotel and drop. Transport will be organized on the spot, and costs are to be shared by trekkers directly.",
      offloadingbag: 2800,
      offloadingNote: "* Maximum weight 9kg/bag"
    },

    inclusionsNote: "🍽️ All Meals – Nutritious meals provided from packed lunch on Day 3 to breakfast on Day 7",

    highlights: [
  "Traverse the frozen Markha River, slide and skate on ice, and witness a unique winter landscape unlike any other in Ladakh",
  "Stay in cozy homestays in Skiu, Markha, and Hankar, experiencing authentic Ladakhi winter hospitality",
  "Spot winter wildlife such as Himalayan blue sheep, snowcocks, chukar partridge, and high-altitude birds in Hemis National Park",
  "Walk past ancient monasteries, chortens, and mani walls, with snow-dusted peaks providing a serene backdrop",
  "Marvel at the mighty Kang Yatse 1 (6,400 m) and Kang Yatse 2 (6,250 m) under clear winter skies",
  "Experience the magical contrast of frozen rivers, snow-covered plains, and stark desert-like mountains",
    ],

    itinerary: [
  {
    day: 1,
    title: "Arrival in Leh (11,500 ft / 3,500 m)",
    details: "Arrive in Leh by flight and transfer to your hotel. Day 1 is dedicated to rest and acclimatization to the high-altitude cold of 11,500 ft. Winter temperatures can drop to -15°C during the day and -25°C at night, so keep outdoor activity light. Explore the Leh market gently if you feel comfortable. Stay hydrated, avoid alcohol, and enjoy local cuisine. A mandatory trek briefing takes place in the evening where you must carry ID proof and photographs; foreign trekkers should bring passport and visa copies. Overnight stay in Leh."
  },
  {
    day: 2,
    title: "Acclimatization and Sightseeing in Leh",
    details: "This day is for gradual acclimatization. Visit Leh Palace, Shey, Thiksey, and Hemis monasteries, and stroll around the town’s winter bazaar. Keep activity light to avoid altitude sickness. Winter sun is mild, but temperatures remain low, so dress in layers. This day prepares your body for the cold and high-altitude trekking ahead. Return to the hotel early for rest."
  },
  {
    day: 3,
    title: "Leh → Chilling → Skiu (3,400 m) | Trek Distance: 8–10 km | 5–6 hrs",
    details: "Drive from Leh to Chilling (approx. 70 km). Begin trekking along frozen riverbeds and icy trails of the Markha Valley. Cross frozen Markha river patches, snow bridges, and enjoy the stark winter desert landscapes. Spot blue sheep and winter birds while walking past small villages and mani walls. Reach Skiu village and stay overnight in a warm homestay. Daytime temperature may hover around -10°C and drop further at night."
  },
  {
    day: 4,
    title: "Skiu → Markha (3,700 m) | Trek Distance: 10–11 km | 5–6 hrs",
    details: "Follow gentle ascents along the frozen river valley. Pass ancient chortens, scattered hamlets, and snow-dusted pastures. The trail offers panoramic views of surrounding peaks and the frozen Markha River. Reach Markha village, one of the largest settlements, and check into a homestay. Temperatures can drop to -20°C at night. Immerse in Ladakhi culture and enjoy a warm meal."
  },
  {
    day: 5,
    title: "Markha Exploration (4,150 m) | Trek Distance: 6–8 km | 4–5 hrs",
    details: "Today is an acclimatization hike to Thachungtse, with spectacular views of Kang Yatse (6,400 m) and the winter landscape. Spot Himalayan blue sheep navigating steep cliffs, and enjoy the quiet solitude of snow-covered valleys. Return to Markha for the night, relishing the warmth of homestay accommodations. Nighttime temperatures can plunge to -25°C, with wind chill making it feel colder."
  },
  {
    day: 6,
    title: "Markha → Skiu (3,400 m) | Trek Distance: 10–11 km | 5–6 hrs",
    details: "Retrace your route along the frozen Markha river valley back to Skiu. Observe the winter flora and fauna in their dormant season. The valley appears wider and more dramatic on the return journey. Enjoy homestay comforts in Skiu. Temperatures remain below freezing, so proper winter clothing is essential."
  },
  {
    day: 7,
    title: "Skiu → Chilling → Leh (3,500 m) | Trek Distance: 5–6 km | 2.5–3.5 hrs + Drive",
    details: "A short trek from Skiu to Chilling takes about 2.5–3.5 hours over icy terrain. From Chilling, drive back to Leh. Warm rooms, hot water, and local food await. Use this day to relax, shop for souvenirs, and enjoy Leh in winter. Overnight stay in Leh."
  },
  
],

    didYouKnow: [
  "<b>The Markha River becomes a frozen highway!</b> – In winter, long stretches of the river turn into thick ice, letting trekkers walk and glide across it just like the Chadar, but in a far quieter environment.",

  "<b>Hemis National Park is the world’s largest snow leopard habitat.</b> – Winter pulls both prey and predator down to valley floors, increasing chances of spotting pugmarks, scrapes, or fresh kills near Skiu, Markha, and Hankar.",

  "<b>Blue sheep form giant winter herds.</b> – Instead of scattered groups, bharal gather in herds of 20–40 to search for scarce grazing patches, making sightings extremely common on the cliffs around Thachungtse and Hankar.",

  "<b>Ibex descend lower due to snow buildup.</b> – Heavy snowfall forces Siberian ibex to move from high alpine ridges to sun-facing slopes closer to human trails, making winter one of the best seasons to spot them.",

  "<b>Ancient Ladakhi homestays keep rooms warm even at –25°C.</b> – Traditional mud houses trap heat naturally, creating warm interiors without heaters while outside temperatures drop to –30°C and below.",

  "<b>Winter birds stay active despite extreme cold.</b> – Chukar partridges, golden eagles, ravens, lammergeiers, and Eurasian magpies survive the cold desert by feeding on exposed shrubs and scavenging along frozen streams.",

  "<b>Marmots are not visible in winter.</b> – Himalayan marmots hibernate deep underground from October to April. Many trekkers expect to see them, but winter Markha is a silent landscape where they remain asleep.",
  
  "<b>Seabuckthorn and willows dominate winter vegetation.</b> – Leafless but standing strong, these hardy Himalayan shrubs line the trail even at –20°C, giving the valley its characteristic golden-brown winter look.",

  "<b>Frozen waterfalls turn into blue-ice curtains.</b> – Between Chilling and Skiu, several side waterfalls freeze solid, forming towering ice sheets that glisten under the winter sun.",

  "<b>Snow leopards use frozen rivers as travel corridors.</b> – With the Markha River iced over, snow leopards walk the frozen surface for easier movement, leaving clear pawprints that trekkers often spot early in the morning.",

  "<b>Ravens and magpies follow trekking groups.</b> – Winter food scarcity makes these intelligent birds shadow humans for crumbs, creating delightful interactions in the middle of the frozen desert.",

  "<b>Juniper shrubs remain evergreen even at –30°C.</b> – One of the few plants that keeps its needles intact, juniper stands out as dark green patches against the white and brown winter terrain."
    ],


    howToReach: {
  air: "Nearest Airport: Kushok Bakula Rimpochee Airport, Leh. Flights are available from Delhi and other major Indian cities. During winter, this is the only practical way to reach Leh as roads are closed due to snow.",
  train: "No direct trains. Nearest major railway station is Jammu Tawi (approx. 700 km from Leh), but road connectivity is not possible in winter, so air travel is mandatory.",
  road: "Roads from Manali and Srinagar are closed during winter due to heavy snowfall. Overland travel is not recommended for winter treks.",
  travelTip: "Arrive in Leh at least 2 days before the trek for acclimatization. Winter temperatures drop sharply, so acclimatization is essential to prevent altitude sickness."
    },

    gallery: [
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1764855820/winter-markha-valley-hero1_c3d3fn.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1764855822/winter-markha-valley-hero_y4wizr.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1764855808/winter-markha-valley-leh-palace_odtgdj.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1764855803/winter-markha-valley-culture_mfksep.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1764855803/winter-markha-valley-view3_hcptad.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1764855802/winter-markha-valley-view_kexpdr.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1764855801/winter-markha-valley-view2_nxtv13.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1764855800/winter-markha-valley-tradition_izi8ru.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1764855799/winter-markha-valley-vew1_nqexzr.jpg",
    ],

    downloadLink: "/docs/Packing_List.pdf",

    faqs: {
  questions: [
    {
      question: "Who can participate in the Markha Valley Winter Trek?",
      answer: "This trek is ideal for experienced trekkers or winter enthusiasts comfortable with sub-zero temperatures. Moderate trails cover 10–15 km per day, but extreme cold (daytime -15°C, nighttime down to -35°C) requires proper preparation and resilience."
    },
    {
      question: "What is the best time to do the Markha Valley Winter Trek?",
      answer: "Winter months from January to March are perfect for this offbeat trek. During this period, the Markha River is frozen, creating a stunning winter landscape. Ensure you are well-prepared for snow and icy conditions."
    },
    {
      question: "How do I reach Markha Valley in winter?",
      answer: "During winter, roads are generally closed due to snow. The only way to reach Leh is by air via Kushok Bakula Rimpochee Airport. Plan to arrive at least 2 days early for acclimatization before the trek."
    },
    {
      question: "What gear is essential for the extreme cold?",
      answer: "Key gear includes insulated down jackets, thermal base layers, woolen socks, balaclava, insulated gloves, waterproof trekking boots, gaiters, and sleeping bags rated for -35°C. Microspikes or crampons are recommended for walking on frozen rivers."
    },
    {
      question: "Are there homestays or camps along the winter trek?",
      answer: "Yes, trekkers stay in cozy homestays in villages like Skiu, Markha, and Hunkar. These provide warm bedding, Ladakhi meals, and a unique cultural experience even in harsh winter conditions."
    },
    {
      question: "What wildlife can I expect to see during winter?",
      answer: "The trek passes through Hemis National Park. Trekkers may spot Himalayan blue sheep, ibex, Eurasian magpies, white-capped redstarts, and chukar partridges. Snow leopards are extremely elusive but occasionally sighted by lucky trekkers."
    },
    {
      question: "How difficult is walking on the frozen Markha River?",
      answer: "Walking on the frozen river is safe with proper winter boots and trekking poles. The ice is solid in most places, and trekkers can even slide or glide over certain stretches. Guides always ensure safe paths are used."
    },
    {
      question: "Is mobile network or internet available during the trek?",
      answer: "Connectivity is minimal. Leh has some network coverage, but most of the trail has no signal. Plan for limited communication and inform family/friends before starting."
    },
    {
      question: "Do I need permits for the Markha Valley Winter Trek?",
      answer: "Yes, an Inner Line Permit (ILP) for restricted areas of Ladakh is required. Trek operators usually arrange permits for participants, including winter-specific permissions if needed."
    },
    {
      question: "What makes the Markha Valley Winter Trek unique?",
      answer: "This trek is often called 'Chadar 2.0' because it offers a frozen river experience similar to the Chadar Trek without the extreme logistics. Stunning frozen rivers, snow-dusted villages, ancient monasteries, and views of Kang Yatse peaks make it a rare winter adventure."
    },
    {
      question: "How do I stay safe in extreme cold and high altitude?",
      answer: "Acclimatization is key. Stay hydrated, eat warm meals, avoid alcohol, and wear appropriate layered clothing. Follow guides’ instructions, and use insulated gear. Monitor for signs of frostbite or hypothermia. For a more detailed information on this extremely important topic please click the link below to read the full article:<br><strong><a href='https://www.planethimalayas.com/blogs/ultimate-winter-trek-preparation-guide-himalayas' target='_blank' rel='noopener noreferrer'>Ultimate Winter Trek Preparation Guide</a></strong>"
    },
    {
      question: "Are there unique flora in winter Markha Valley?",
      answer: "Most high-altitude flora are dormant during winter, but trekkers can see hardy species like Himalayan blue poppies, primulas, and alpine shrubs adapted to sub-zero conditions."
    },
    {
      question: "Can beginners attempt the Markha Valley Winter Trek?",
      answer: "Beginners are advised to gain prior trekking experience in cold or high-altitude environments before attempting this trek. The physical demand combined with extreme winter temperatures makes it unsuitable for novices."
    }
  ],
},

    faqsLink: "/faqs-and-articles",
  },

  {
    id: "rumtse-tso-moriri-trek",
    name: "Rumtse Tso Moriri Trek",
    tags: ["pro", "pass", "lake"],
    difficulty: ["difficult"],
    season: ["monsoon"],
    month: ["july", "august", "september"],
    region: "ladakh",
    duration: "10 Nights / 10 Days",
    coordinates: [
      [34.1526, 77.5771],   // Leh
      [34.0536, 77.4901],   // Rumtse
      [32.9862, 78.2605]      // Tso Moriri
    ],

    heroImage: 	"https://res.cloudinary.com/dr44hob9b/image/upload/v1766077431/tso-moriri_lake_icvc4o.jpg",


    heroImages: [
                "https://res.cloudinary.com/dr44hob9b/image/upload/v1766077431/tso-moriri_lake_icvc4o.jpg",
		            "https://res.cloudinary.com/dr44hob9b/image/upload/v1766075708/Chanpas-who-make-cashmere_au7xtr.jpg",
		            "https://res.cloudinary.com/dr44hob9b/image/upload/v1766077341/karzok-village-2_qfxx6f.jpg",
                "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535614/markha-valley-view6_cob1jc.jpg",
    ],

    subtitle: "Walking the Himalayan Cold Desert with the Changpas",

   seo: {
  title: "Rumtse to Tso Moriri Trek | Changpa Nomads, Itinerary, Cost & Dates | Planethimalayas",
  description: "Rumtse to Tso Moriri Trek (17,815 ft) is Ladakh’s most immersive high-altitude trek, traversing the Changthang plateau, crossing multiple 5,000 m passes, encountering Changpa nomads, and ending at the sacred Tso Moriri Lake over 8 days.",
  },


  overview: {
      facts: [
  { emoji: "⏳", label: "Trek Duration", value: "10 Nights / 10 Days" },
  { emoji: "⚡", label: "Trek Grade", value: "Difficult" },
  { emoji: "🏔️", label: "Max Altitude", value: "17,800 ft (Kyamar La)" },
  { emoji: "⚡", label: "Trek Distance", value: "105–110 Km" },
  { emoji: "🌤️", label: "Best Time", value: "July to September" },
  { emoji: "🗺️", label: "Region", value: "Changthang Plateau, Ladakh" },
  { emoji: "📍", label: "Start Point", value: "Rumtse (near Leh)" },
  { emoji: "🏁", label: "End Point", value: "Korzok Village (Tso Moriri)" },
  { emoji: "🧥", label: "Cloakroom facility", value: "Available" },
],

      snippet: `The Rumtse to Tso Moriri Trek is one of Ladakh’s most immersive journeys — a route that takes you deep into the heart of the Changthang plateau, where mountains stretch endlessly and nomadic life continues unchanged for centuries. Beginning near the village of Rumtse, not far from Leh, the trail quickly leaves roads and settlements behind, entering a world defined by silence, wind, and vast open spaces.

<br>The early days unfold across wide alpine pastures grazed by yaks and pashmina goats, with distant ridgelines framing the horizon. This is Changpa land — home to one of the last surviving nomadic cultures of the Himalayas. Along the way, trekkers encounter seasonal Changpa camps, recognizable by their dark yak-hair rebo tents, stone enclosures for livestock, and prayer flags fluttering against an immense sky. These interactions offer a rare glimpse into a way of life built around migration, resilience, and harmony with the land.

<br>As the trek progresses, the landscape becomes increasingly dramatic. High mountain passes such as Kyamar La, Mandalchan La, and Shibuk La rise above 5,000 meters, each offering sweeping views of Ladakh’s stark beauty — ochre valleys, snow-streaked peaks, and distant salt plains stretching toward the Tibetan plateau. Despite the altitude, the terrain remains non-technical, allowing trekkers to focus on the rhythm of walking and the raw scale of the surroundings.

<br>The journey culminates at the magnificent Tso Moriri Lake, a shimmering expanse of deep blue cradled by barren mountains. Sacred to the Changpas and local communities, the lake radiates a quiet, spiritual presence. Reflections of the surrounding peaks ripple across its surface, while migratory birds circle overhead, adding life to the high-altitude stillness.

<br>This trek is not about speed or summits — it is about immersion. Long walking days, cold nights, and vast distances are balanced by profound solitude, cultural encounters, and landscapes that feel untouched by time. For trekkers seeking Ladakh beyond the familiar valleys, Rumtse to Tso Moriri is a rare and unforgettable Himalayan experience.`,
},

    price: 54900,
    priceNote: "* Leh to Leh",
    addons: {
      transport: null,
      transportNote: "* Trekkers can request transport arrangements from Leh airport to hotel and drop. Transport will be organized on the spot, and costs are to be shared by trekkers directly.",
      offloadingbag: 8000,
      offloadingNote: "* Maximum weight 9kg/bag"
    },

    inclusionsNote: "🍽️ All Meals – Nutritious meals provided from packed lunch on Day 3 to lunch on Day 10",


   highlights: [
  "Journey deep into the Changthang Plateau, one of Ladakh’s most remote and untouched high-altitude landscapes",
  "Cross multiple high mountain passes including Kyamar La (17,800 ft), offering vast views of the Rupshu plains",
  "Experience the nomadic lifestyle of the Changpa people, encountering yak herders and traditional tented settlements",
  "Walk through wide alpine valleys, salt flats, and turquoise streams that feel worlds away from civilization",
  "End the trek at the breathtaking Tso Moriri Lake, a sacred high-altitude wetland surrounded by snow-capped peaks",
  ],


  itinerary: [
  {
    day: 1,
    title: "Arrival & Reporting in Leh (11,500 ft / 3,500 m)",
    details: "Arrive in Leh by air or road and check in to your hotel or guesthouse. Leh sits at an altitude of 11,500 ft, and sudden exposure to this height requires immediate rest. The entire day is reserved for acclimatization—avoid exertion, long walks, or climbing viewpoints. Spend time hydrating well, eating light meals, and allowing your body to adjust. In the evening, you may take a slow walk around Leh Market, observing local life and picking up any last-minute essentials. A mandatory reporting and briefing session is conducted where trek leaders explain the route, safety protocols, altitude precautions, and gear checks. An easy, restful first day is critical for preparing your body for the demanding high-altitude terrain ahead."
  },
  {
    day: 2,
    title: "Acclimatization Day in Leh – Culture, Cuisine & Preparation",
    details: "This acclimatization day plays a decisive role in how your body performs on the trek. Begin the day with a slow morning and a short walk to stimulate blood circulation without strain. You may explore nearby cultural landmarks such as Shey Palace, Thiksey Monastery, Hemis Monastery, and the Sangam viewpoint where the Indus and Zanskar rivers merge. Thiksey Gompa, perched dramatically on a hill, offers panoramic views and deep insight into Ladakhi Buddhist traditions. Avoid gaining excessive altitude or visiting high passes today. Spend time in Leh Market browsing for souvenirs like prayer flags, pashmina shawls, handcrafted silver jewelry, and Tibetan artefacts. Food to try includes thukpa, momos, skyu, butter tea, and apricot-based products. Eat light, avoid alcohol, stay well hydrated, and rest early—your body should feel comfortable and stable before heading into the remote Changthang region."
  },
  {
    day: 3,
    title: "Leh (11,500 ft) → Rumtse (13,667 ft) Drive → Trek to Kyamar (14,714 ft) | Trek: 13 km | 6 hrs",
    details: "Drive from Leh to the picturesque village of Rumtse along the Leh–Manali highway, following the Indus River through wide valleys and stark mountain terrain. Rumtse marks the entry point into the Changthang plateau. From here, the trail leaves the highway, crossing a stream before opening into vast valleys characteristic of Changthang’s raw landscapes. The trek today is relatively easy with a gentle ascent, making it ideal for easing into the journey. Walk alongside a winding river, through green patches dotted with alpine flowers contrasting against rugged brown terrain. Water is available from streams along the route. Wildlife sightings may include marmots and high-altitude birds. Kyamar campsite lies in an open valley with wave-like mountain formations surrounding you. Overnight in tents."
  },
  {
    day: 4,
    title: "Kyamar (14,714 ft) → Tisaling (16,378 ft) via Kyamar La (16,700 ft) & Mandalchan La (16,976 ft) | Trek: 15 km | 8–9 hrs",
    details: "This is a physically demanding day involving two high passes and a significant altitude gain. The trail climbs gradually toward Kyamar La through arid, desert-like terrain marked by colorful mineral-rich mountains. From the pass, you are rewarded with distant views of the Kang Yatse massif and surrounding snow-clad peaks. Descend into a broad valley before ascending again toward Mandalchan La, the second pass of the day. After crossing the pass, the landscape opens dramatically into the vast Changthang valley, revealing its unique, otherworldly topography. Cross a stream before reaching the expansive Tisaling campsite. Blue sheep and Tibetan wild asses are often spotted here. Water is available near camps but should be purified. Move slowly, watch for AMS symptoms, and layer clothing properly as winds can be strong. Overnight in tents."
  },
  {
    day: 5,
    title: "Tisaling (16,378 ft) → Ponganagu / Tso Kar Campsite (14,922 ft) via Shibuk La (17,248 ft) | Trek: 15 km | 6–7 hrs",
    details: "Climb steadily toward Shibuk La, the third pass of the trek and one of its most scenic. The ascent is gradual but sustained. From the top, the Rupshu plateau unfolds below—a vast, open expanse that defines Changthang’s scale and isolation. Descend gradually, followed by long flat sections leading toward Tso Kar, the famous saltwater lake known as the White Lake. The terrain transitions from green grasslands to wide, arid plains. Nomadic Changpa camps may be visible in the distance with grazing yaks and pashmina goats. Engage respectfully—observe daily routines, greet warmly, and avoid intrusive photography. Learn about their seasonal migration patterns and sustainable high-altitude living. Camp near Tso Kar. Overnight in tents."
  },
  {
    day: 6,
    title: "Ponganagu (14,922 ft) → Nuruchan (15,254 ft) | Trek: 16 km | 5–6 hrs",
    details: "Today’s walk is long but relatively easy, following the shores of Tso Kar and Startsapuk Tso. The trail is mostly flat with minor undulations, offering constant views of shimmering lakes and vast plains. Water sources are scarce along the trail—carry sufficient water from camp. Nomadic settlements are occasionally visible, and this region provides excellent insight into Changpa pastoral life. You may see herds of kiang (wild asses), marmots, and migratory birds. A cold river crossing near Nuruchan requires caution—cross slowly, preferably in sandals, and keep essentials dry. Reach the Nuruchan campsite by evening. Overnight in tents."
  },
  {
    day: 7,
    title: "Nuruchan (15,254 ft) → Gyamar Barma (17,074 ft) via Kyamayuri La (17,713 ft) | Trek: 18 km | 7–8 hrs",
    details: "This day takes you deeper into the Changthang heartland. The trail ascends gradually alongside a meandering river with snow-covered peaks rising on either side. Weather can change rapidly—carry rain protection and warm layers. After a steady climb and descent, reach the nomadic settlement of Rajun Karu, where Changpa families, yaks, horses, and pashmina goats are commonly seen. Engage respectfully, learn about their wool trade, and observe their harmony with the harsh environment. The trail then ascends to Kyamayuri La, the fourth and taxing pass of the trek, followed by a long descent to Gyamar Barma—arguably the most scenic campsite of the journey. Expect strong winds here. Overnight in tents."
  },
  {
    day: 8,
    title: "Gyamar Barma (17,074 ft) → Gyamar (16,787 ft) via Kartse La (17,614 ft) | Trek: 8 km | 3–4 hrs",
    details: "The shortest trekking day but involving the steepest climb. Cross the river near camp and begin the sharp ascent toward Kartse La, the fifth pass of the trek. Midway, turn back for breathtaking views of Gyamar Barma valley—grazing animals, winding rivers, and nomadic camps create a living landscape. From the pass, descend gradually into Gyamar, a valley rich in streams and water sources. Wildlife sightings are common here. Take the afternoon to rest and recover. Overnight in tents."
  },
  {
    day: 9,
    title: "Gyamar (16,787 ft) → Karzok (14,890 ft) via Yalung Nyau La (17,760 ft) | Trek: 20 km | 8–9 hrs",
    details: "This is the longest and most challenging day of the trek. Begin with a long gradual ascent following a river through jagged mountain terrain toward Yalung Nyau La, the sixth and final pass. Multiple river crossings are involved—move carefully and follow instructions. From the pass, the first view of the deep-blue Tso Moriri Lake unfolds dramatically below, offering an unforgettable moment. Descend steeply at first, then gradually flatten out as you approach Karzok village. Walk along the shores of the freshwater lake and absorb the tranquility of this sacred landscape. Overnight in a homestay at Karzok."
  },
  {
    day: 10,
    title: "Karzok → Leh (215 km Drive | 8–9 hrs)",
    details: "Depart early from Karzok for the long drive back to Leh via Mahe Bridge and Chumathang. The route transitions from high plateaus to river valleys and geothermal landscapes. Reach Leh by evening, marking the end of an extraordinary journey across Ladakh’s remote Changthang plateau and the living world of the Changpa nomads."
  },
  ],


  didYouKnow: [
    "<b>The Changpas migrate seasonally across vast distances.</b><br>Their entire lifestyle revolves around grazing cycles for pashmina goats, often covering hundreds of kilometers each year.",
    "<b>Tso Moriri is considered sacred by local communities.</b><br>Swimming or disturbing the lake is traditionally discouraged due to its spiritual significance.",
    "<b>Pashmina wool comes from a specific breed of Changthangi goats.</b><br>The extreme cold of Changthang produces the world’s finest cashmere.",
    "<b>The plateau is part of a trans-Himalayan ecosystem.</b><br>Its landscape is closer to Tibet than mainland India, both culturally and geographically."
  ],


    howToReach: {
      air: "Nearest Airport: Kushok Bakula Rimpochee Airport, Leh (well connected to Delhi and major Indian cities).",
      train: "No direct trains. Nearest station: Jammu Tawi (approx. 700 km). Continue by road or flight to Leh.",
      road: "From Manali: 470 km / 2 days via Manali–Leh Highway. From Srinagar: 420 km / 2 days via Srinagar–Leh Highway.",
      travelTip: "Arrive in Leh at least 2 days before the trek for proper acclimatization to avoid altitude sickness.",
    },

    gallery: [
	    "https://res.cloudinary.com/dr44hob9b/image/upload/v1766075708/Chanpas-who-make-cashmere_au7xtr.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535616/markha-valley-view5_cyek8v.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535614/markha-valley-view6_cob1jc.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535612/markha-valley-view4_hhjdvd.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535608/markha-valley-view7_fwjqd8.jpg",
   
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535598/markha-valley-view13_ra6l59.jpg",
           "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535586/markha-valley-view10_xovktb.jpg",
     
    ],

    downloadLink: "/docs/Packing_List.pdf",

    faqs: {
    questions: [
      {
        question: "Who should attempt the Rumtse to Tso Moriri Trek?",
        answer:
          "This trek is ideal for fit trekkers with prior high-altitude trekking experience. Beginners are not recommended due to altitude and remoteness."
      },
      {
        question: "Do foreigners need special permits?",
        answer:
          "Yes. Foreign nationals require Inner Line Permits, which are arranged by the trek operator."
      },
      {
        question: "Is porter or mule offloading available?",
        answer:
          "Yes. Pack animals are used for common gear, and personal offloading can be arranged at extra cost."
      },
      {
        question: "How cold does it get on this trek?",
        answer:
          "Day temperatures range between 10–18°C, while nights can drop to -5°C or lower at higher camps."
      },
      {
        question: "Is there mobile network or internet?",
        answer:
          "Network is extremely limited. You may get signal in Leh and occasionally near Korzok village, but most of the trek is completely off-grid."
      }
    ]
  },


    faqsLink: "/faqs-and-articles",
  },

  {
  id: "nubra-valley-trek",
  name: "Nubra Valley Trek",
  tags: ["intermediate", "pro", "pass", "meadows"],
  difficulty: ["moderate", "difficult"],
  season: ["monsoon"],
  month: ["july", "august", "september"],
  region: "ladakh",
  duration: "8 Nights / 8 Days",
  coordinates: [
    [34.1526, 77.5771],   // Leh
    [34.3214, 77.5756],   // Khardung region
    [34.5931, 77.4250]    // Nubra Valley
  ],

  heroImage:  "https://res.cloudinary.com/dr44hob9b/image/upload/v1766160952/nubra-valley2_peqb3p.jpg",


  heroImages: [
        "https://res.cloudinary.com/dr44hob9b/image/upload/v1766160952/nubra-valley2_peqb3p.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1766161559/nubra-valley_jqyhh8.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1766160829/nubra-valley1_g1gnkv.jpg",
            "https://res.cloudinary.com/dr44hob9b/image/upload/v1766162447/best_view_dw5qnf.jpg",
  ],

  subtitle: "Where Himalayan Cold Desert Meet Lush Valleys",

  seo: {
    title: "Nubra Valley Trek | Sand Dunes, Monasteries & Himalayan Landscapes | Planethimalayas",
    description: "The Nubra Valley Trek is a rare Ladakh experience combining high mountain passes, cold desert landscapes, green villages, rivers, monasteries, and sand dunes—offering a culturally rich and scenic Himalayan journey."
  },

  overview: {
    facts: [
      { emoji: "⏳", label: "Trek Duration", value: "8 Nights / 8 Days" },
      { emoji: "⚡", label: "Trek Grade", value: "Moderate - Difficult" },
      { emoji: "🏔️", label: "Max Altitude", value: "17,582 ft (Lasermo La)" },
      { emoji: "⚡", label: "Trek Distance", value: "50–55 Km" },
      { emoji: "🌤️", label: "Best Time", value: "July - September" },
      { emoji: "🗺️", label: "Region", value: "Nubra Valley, Ladakh" },
      { emoji: "📍", label: "Start Point", value: "Leh" },
      { emoji: "🏁", label: "End Point", value: "Leh" },
      { emoji: "🧥", label: "Cloakroom facility", value: "Available" }
    ],

    snippet: `The Nubra Valley Trek is a journey through one of Ladakh’s most surprising landscapes — a place where cold desert mountains suddenly give way to rivers, green fields, and living valleys shaped by centuries of trade, migration, and survival. Once a vital transit corridor of the ancient Silk Route, Nubra connected Ladakh with Central Asia and Tibet. Today, it remains a region where history feels alive, written into the land and the rhythm of daily life.

<br>The journey begins with a dramatic drive from Leh across the legendary Khardung La, climbing into a world of stark rock, wind, and altitude before descending into the wide, open basin of the Nubra Valley. This transition alone feels transformative. Barren slopes soften into river-fed plains, villages appear along the valley floor, and the air carries a sense of openness rarely found in the high Himalayas. The trek officially begins near Hundar, a quiet settlement nestled at the heart of Nubra.

<br>Walking into the valley, the trail moves through narrow gorges that slowly open into expansive meadows and grazing lands. The terrain is gentle yet constantly changing — braided rivers, soft grasslands, and open valleys framed by distant ridgelines. These landscapes serve as summer pastures for yaks, sheep, and goats, and it is common to encounter shepherds moving with their herds, continuing a way of life that has remained largely unchanged for generations.

<br>One of Nubra’s most captivating qualities is its sense of contrast. Silver sand dunes lie beneath snow-streaked peaks. Double-humped Bactrian camels roam near riverbeds, echoing the valley’s Silk Route past. Fields of barley, wheat, and potatoes thrive beside arid slopes, sustained by glacial meltwater flowing down from the high mountains. Traditional Ladakhi villages emerge unexpectedly, their flat-roofed homes and chortens blending seamlessly into the landscape.

<br>As the trek progresses deeper into the valley, the environment grows more remote and alpine. The climb toward Lasermo La — an eternally snow-bound high pass at 5,400 meters — marks a dramatic shift in scale and atmosphere. Meadows give way to glacial terrain, frozen streams, and snowfields. Crossing Lasermo La is the defining moment of the trek, connecting the Nubra and Indus valleys and offering sweeping views across the Ladakh, Zanskar, and distant Karakoram ranges. The silence here is profound, broken only by wind and the crunch of snow underfoot.

<br>Despite its high altitude, the Nubra Valley Trek remains non-technical and rhythm-driven. Days are paced thoughtfully, allowing trekkers to absorb the landscape rather than rush through it. Evenings are spent camping in wide, open valleys under vast Himalayan skies, where the absence of light pollution reveals constellations in startling clarity. Life slows down, conversations deepen, and the mountains begin to feel less like scenery and more like companions.

<br>What sets Nubra apart is not just its scenery, but its balance. It offers the very essence of Ladakh — high passes, cold desert terrain, rivers, monasteries, and pastoral culture — without the crowds of more popular routes. This is Ladakh experienced quietly, intimately, and honestly.

<br>The Nubra Valley Trek is not about chasing summits or ticking off milestones. It is about walking through space, history, and contrast — from sand dunes to snowfields, from ancient trade routes to living villages — and discovering a side of the Himalayas that reveals itself only to those willing to move slowly and listen.`
  },

  price: 32400,
  priceNote: "* Leh to Leh",

  addons: {
    transport: null,
    transportNote: "* Transport from Leh airport to hotel and return can be arranged on request. Costs are shared directly by trekkers.",
    offloadingbag: 6000,
    offloadingNote: "* Maximum weight 9kg/bag"
  },

  inclusionsNote: "🍽️ All Meals – Nutritious meals provided from lunch on Day 3 to lunch on Day 8",

  highlights: [
    "Cross high Himalayan passes offering sweeping views of the Ladakh and Karakoram ranges",
    "Walk through Nubra Valley’s green villages, riversides, and high-altitude grazing grounds",
    "Experience Ladakhi culture through monasteries, traditional homes, and local interactions",
    "Witness the unique contrast of sand dunes, cold desert terrain, and lush farmlands",
    "A balanced trek combining moderate challenge, scenic beauty, and cultural depth"
  ],

  itinerary: [
    {
    day: 1,
    title: "Arrival & Reporting in Leh (11,500 ft / 3,500 m)",
    details: "Arrive in Leh by air or road and check in to your hotel or guesthouse. Leh sits at an altitude of 11,500 ft, and sudden exposure to this height requires immediate rest. The entire day is reserved for acclimatization—avoid exertion, long walks, or climbing viewpoints. Spend time hydrating well, eating light meals, and allowing your body to adjust. In the evening, you may take a slow walk around Leh Market, observing local life and picking up any last-minute essentials. A mandatory reporting and briefing session is conducted where trek leaders explain the route, safety protocols, altitude precautions, and gear checks. An easy, restful first day is critical for preparing your body for the demanding high-altitude terrain ahead."
  },
  {
    day: 2,
    title: "Acclimatization Day in Leh – Culture, Cuisine & Preparation",
    details: "This acclimatization day plays a decisive role in how your body performs on the trek. Begin the day with a slow morning and a short walk to stimulate blood circulation without strain. You may explore nearby cultural landmarks such as Shey Palace, Thiksey Monastery, Hemis Monastery, and the Sangam viewpoint where the Indus and Zanskar rivers merge. Thiksey Gompa, perched dramatically on a hill, offers panoramic views and deep insight into Ladakhi Buddhist traditions. Avoid gaining excessive altitude or visiting high passes today. Spend time in Leh Market browsing for souvenirs like prayer flags, pashmina shawls, handcrafted silver jewelry, and Tibetan artefacts. Food to try includes thukpa, momos, skyu, butter tea, and apricot-based products. Eat light, avoid alcohol, stay well hydrated, and rest early—your body should feel comfortable and stable before heading into the remote Changthang region."
  },
    {
  day: 3,
  title: "Leh (11,500 ft) → Khardung La Drive → Skarchen → Trek to Hunder Dok (12,570 ft / 3,832 m) | Trek: 6 km | 3–4 hrs",
  details: "Begin early from Leh for a scenic drive toward the Nubra Valley, crossing the legendary Khardung La—one of the highest motorable passes in the world. The route climbs rapidly through stark, high-altitude terrain before descending into the Nubra region, where the landscape softens into wide valleys and riverbeds. After approximately six hours of driving, reach Skarchen, the road-head from where the trek begins.\n\nFrom Skarchen, start trekking along the Hunder River, walking on the quieter side of the valley, away from the active road construction. The trail follows a newly forming path beside the river, offering gentle gradients and uninterrupted views of the surrounding mountains. As you progress deeper into the valley, the narrow gorge slowly widens, revealing the unexpected openness of Hunder Dok.\n\nHunder Dok is a secluded and expansive settlement, hidden from view until the very last stretch. Suddenly, the terrain opens into a large village basin filled with neatly laid farmfields of barley, wheat, and potatoes. A central pathway runs through the heart of the village, dividing homes and farmlands on either side, offering a rare glimpse into Nubra’s agricultural life. Set up camp near the village and settle in for the night amid the calm and greenery of this remote Himalayan settlement."
},
    {
  day: 4,
  title: "Hunder Dok (12,570 ft / 3,832 m) → Sumdo Dok (13,900 ft / 4,237 m) | Trek: 8 km | 4–5 hrs",
  details: "Leave Hunder Dok after breakfast and begin trekking upstream alongside the Thanglasgo River. The trail is gentle and unhurried, allowing the body to adapt gradually as altitude is gained. Wide open valleys stretch ahead, flanked by smooth mountain slopes and scattered alpine meadows that change color with the season.\n\nAs you walk deeper into the valley, the landscape opens further into expansive grasslands, often used as grazing grounds by local livestock during summer months. The sound of flowing water remains constant, guiding the route and adding to the calm rhythm of the day’s walk.\n\nBy afternoon, reach Sumdo Dok, a beautiful confluence where the Sniu Valley meets the Thanglasgo Valley. The campsite sits in an open basin surrounded by rolling terrain and distant ridgelines, making it one of the more scenic camps of the trek. Spend the evening resting, hydrating well, and soaking in the stillness of this high-altitude wilderness. Overnight in tents."
},
    {
  day: 5,
  title: "Sumdo Dok (13,900 ft / 4,237 m) → Thanglasgo Valley (14,760 ft / 4,500 m) | Trek: 9 km | 5–6 hrs",
  details: "Begin the day by leaving Sumdo Dok and entering the upper reaches of the Thanglasgo Valley. The trail follows a narrow stream that gently guides the route uphill, making the ascent steady but manageable. With no sharp climbs, today’s walk allows trekkers to maintain a slow, rhythmic pace while gaining altitude gradually.\n\nAs the valley widens, the terrain transforms into open grazing grounds. This region serves as the primary summer pasture for livestock from Hunder Dok and Wachan, and it is common to see herds of yaks, sheep, and goats spread across the meadows. The landscape feels alive with movement, bells, and distant calls of shepherds tending their animals.\n\nTwo prominent shepherd settlements mark the heart of Thanglasgo, reflecting the long-standing pastoral traditions of Nubra Valley. Camp is set slightly beyond these settlements, offering quieter surroundings while still overlooking the expansive valley. The evening is ideal for rest and acclimatization, with open skies and wide horizons defining this high-altitude campsite. Overnight in tents."
},
    {
  day: 6,
  title: "Thanglasgo Valley (14,760 ft / 4,500 m) → Lasermo La Base Camp (15,750 ft / 4,800 m) | Trek: 10 km | 5–6 hrs",
  details: "Start the day by moving deeper into the upper Thanglasgo Valley, following a narrow stream that flows steadily down from the higher reaches of the mountains. The trail is well-defined and climbs gradually, making the ascent comfortable despite the increasing altitude. Wide alpine meadows stretch on either side, offering long, uninterrupted walking sections.\n\nAs you gain height, the landscape becomes increasingly glacial in character. Small high-altitude lakes appear along the route, formed by meltwater draining from nearby glaciers. These pools reflect the surrounding peaks and add color to the otherwise stark terrain. Yaks and dzos are often seen grazing peacefully across the meadows, highlighting the valley’s continued use as summer pasture.\n\nBy afternoon, reach the base camp of Lasermo La, set in an open basin directly facing the snow-covered pass. The towering, permanently snow-bound slopes of Lasermo La dominate the skyline, offering a dramatic preview of the crossing to come. Settle into camp early, hydrate well, and rest in preparation for the demanding day ahead. Overnight in tents."
},
    {
  day: 7,
  title: "Lasermo La Base (15,750 ft / 4,800 m) → Lasermo La (17,720 ft / 5,400 m) → Phyang Phu (15,160 ft / 4,620 m) | Trek: 11 km | 6–7 hrs",
  details: "Begin well before sunrise for the most demanding and rewarding day of the trek. An early start is essential to take advantage of the firm, frozen snow conditions before the sun softens the surface. The initial climb is gradual, moving steadily over moraines and rocky terrain as the route rises toward the snowline.\n\nOnce on the snow, the landscape changes completely. The trail continues upward across snowfields, with careful footing required as you make the final approach to Lasermo La. Reaching the pass at 5,400 meters is a powerful moment—the vast expanse of the Karakoram mountains unfolds on one side, while the Ladakh and Zanskar ranges stretch endlessly on the other, offering one of the most dramatic panoramas of the entire journey.\n\nAfter spending time at the pass, begin a controlled descent toward the southern base of Lasermo La. The terrain gradually transitions from snow to rocky slopes and then into wider alpine ground. Continue descending into the Phyang Phu area, where the valley opens up into gentler terrain suitable for camping. Set up camp near Phyang Phu and enjoy a well-earned rest after crossing one of Ladakh’s classic high passes. Overnight in tents."
},
{
  day: 8,
  title: "Phyang Phu (15,160 ft / 4,620 m) → Morobuk → Drive to Leh (11,500 ft) | Trek: 7 km | 4–5 hrs + 40 min drive",
  details: "After breakfast, begin the final descent of the trek toward Morobuk. The trail gradually loses altitude, making for a relaxed and reflective walk after the intensity of the high-pass crossing. As you descend, expansive views of the Stok Range dominate the skyline, with sharp ridgelines and changing light offering a dramatic farewell to the high mountains.\n\nThe terrain becomes progressively gentler as the valley opens up, and signs of habitation slowly reappear. Reach Morobuk by late morning, where vehicles await for the short drive back to Leh. The transition from remote high-altitude wilderness to the familiarity of town is swift, marking the end of the trekking journey.\n\nArrive in Leh by early afternoon and check into your hotel. The remainder of the day is free to rest, freshen up, or explore Leh Market at an easy pace. Overnight stay in a hotel in Leh, bringing the Nubra Valley Trek to a comfortable and well-earned conclusion."
},
  ],

  didYouKnow: [
    "<b>Nubra Valley was part of the ancient Silk Route.</b><br>Caravans once passed through this valley connecting Central Asia with India.",
    "<b>The valley sits between two major mountain ranges.</b><br>Nubra lies between the Karakoram and Ladakh ranges.",
    "<b>Bactrian camels are native to this region.</b><br>The rare double-humped camels are remnants of Silk Route trade.",
    "<b>Despite being a cold desert, Nubra is agriculturally rich.</b><br>Glacial rivers make farming possible in this high-altitude valley."
  ],

  howToReach: {
    air: "Nearest Airport: Kushok Bakula Rimpochee Airport, Leh.",
    train: "No direct train access. Nearest major station is Jammu Tawi.",
    road: "Leh is accessible via Srinagar–Leh and Manali–Leh highways (seasonal).",
    travelTip: "Plan at least 2 acclimatization days in Leh before starting the trek."
  },

  gallery: [
     "https://res.cloudinary.com/dr44hob9b/image/upload/v1766162447/best_view_dw5qnf.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1766161559/nubra-valley_jqyhh8.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1766160952/nubra-valley2_peqb3p.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1766160829/nubra-valley1_g1gnkv.jpg",
  ],

  downloadLink: "/docs/Packing_List.pdf",

  faqs: {
   questions: [
  {
    question: "Is the Nubra Valley Trek suitable for beginners?",
    answer:
      "Yes, the Nubra Valley Trek can be attempted by fit beginners who have good cardiovascular endurance and are comfortable with multi-day walking. However, due to high altitude and a major pass crossing, prior trekking experience is beneficial and proper acclimatization is essential."
  },
  {
    question: "Why are two acclimatization days in Leh important?",
    answer:
      "Leh is located at 11,500 ft, and rapid ascent to this altitude can lead to Acute Mountain Sickness (AMS). Two full acclimatization days allow your body to adapt to low oxygen levels, significantly reducing the risk of AMS during the trek, especially before crossing Lasermo La above 5,400 m."
  },
  {
    question: "How should I prepare physically for the Nubra Valley Trek?",
    answer:
      "Preparation should include regular cardio workouts such as running, cycling, or stair climbing for at least 4–6 weeks before the trek. Strength training for legs and core, along with long walks carrying a light backpack, will help build endurance for sustained high-altitude trekking days."
  },
  {
    question: "Do Indians and foreign nationals need permits for Nubra Valley?",
    answer:
      "Yes. Indian nationals require an Inner Line Permit (ILP) to visit Nubra Valley. Foreign nationals also require a Protected Area Permit (PAP). These permits are mandatory and are typically arranged by the trek operator prior to the trek."
  },
  {
    question: "Is travel and trek insurance mandatory?",
    answer:
      "Yes. Trek insurance covering high-altitude trekking, emergency evacuation, and medical expenses is mandatory. Due to the remoteness of the region, evacuation can be time-consuming and costly without insurance coverage."
  },
  {
    question: "What kind of accommodation is provided during the trek?",
    answer:
      "Accommodation is primarily in tents at designated campsites. On certain days, especially in Nubra Valley villages, homestay accommodation may be used depending on itinerary and availability."
  },
  {
    question: "How cold does it get during the trek?",
    answer:
      "Daytime temperatures usually range between 10–18°C in summer. Night temperatures at higher camps can drop to 0°C or slightly below, especially near Lasermo La. Proper layering and a good-quality sleeping bag are essential."
  },
  {
    question: "What makes the Nubra Valley Trek special compared to other Ladakh treks?",
    answer:
      "The Nubra Valley Trek stands out for its dramatic contrasts—high snowbound passes, cold desert terrain, lush green villages, rivers, sand dunes, and ancient monasteries. It also offers deep cultural insight into Ladakhi life while remaining less crowded than popular routes like Markha Valley."
  },
  {
    question: "Are there chances of spotting wildlife on this trek?",
    answer:
      "Yes. Trekkers may spot marmots, mountain hares, kiang (Tibetan wild ass), and various high-altitude birds. Yaks, dzos, sheep, and goats are commonly seen in grazing areas. Larger wildlife sightings are rare but possible in remote sections."
  },
  {
    question: "Is there mobile network or internet connectivity during the trek?",
    answer:
      "Mobile network is largely unavailable during the trek. Limited connectivity may be found in Leh and some parts of Nubra Valley. The trek is mostly off-grid, making it ideal for a digital detox."
  },
  {
    question: "What is the level of difficulty of the Lasermo La crossing?",
    answer:
      "The Lasermo La crossing is the most challenging part of the trek due to altitude, snow conditions, and early-morning start. While technically non-technical, it requires good stamina, careful pacing, and strict adherence to the trek leader’s instructions."
  },
  {
    question: "Is emergency evacuation possible during the trek?",
    answer:
      "Yes, but evacuation options are limited due to terrain and remoteness. In serious cases, evacuation may involve horses, vehicles, or helicopter support (weather permitting), which is why comprehensive insurance is strongly recommended."
  },
]
  },

  faqsLink: "/faqs-and-articles"
},
  
  {
  id: "kashmir-great-lakes-trek",
  name: "Kashmir Great Lakes Trek",
  tags: ["intermediate", "pro", "pass", "lake", "meadows"],
  difficulty: ["moderate", "difficult"],
  season: ["monsoon"],
  month: ["july", "august", "september"],
  region: "kashmir",
  duration: "5 Nights / 6 Days",

  coordinates: [
    [34.2511, 75.3315],   // Srinagar
    [34.3000, 75.2900],   // Sonamarg (start)
    [34.3320, 75.3600],   // Nichnai
    [34.3570, 75.4180],   // Vishansar Lake
    [34.3660, 75.4350],   // Krishansar Lake
    [34.3890, 75.4750],   // Gadsar Pass / Gadsar Lake
    [34.4100, 75.5100],   // Satsar Lakes
    [34.4390, 75.5480],   // Gangbal Lake
    [34.4530, 75.6000],   // Naranag (end)
  ],

   heroImage: "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535565/kgl-view3_fam2d7.jpg",

    heroImages: [
                "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535560/kgl-view7_so7ys6.jpg",
                "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535556/kgl-view11_rdri7y.jpg",
                "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535565/kgl-view3_fam2d7.jpg",
                "https://res.cloudinary.com/dr44hob9b/image/upload/v1765698680/IMG_20190723_123022_ojepmb.jpg",
    ],

  subtitle: "The Crown Jewel of Himalayan Treks",

  seo: {
    title: "Kashmir Great Lakes Trek | Alpine Lakes of Kashmir | Planethimalayas",
    description: "The Kashmir Great Lakes Trek is one of India’s most beautiful high-altitude treks, featuring pristine alpine lakes, lush meadows, dramatic mountain passes, and sweeping Himalayan views. Explore itinerary, difficulty, cost, and dates with Planethimalayas."
  },

  advisory: {
  type: "warning",
  fullWidth: true,
  title: "Important Advisory for Jammu & Kashmir Treks",
  sections: [
    {
      heading: "Trekking Permit Status",
      content:
          "Trekking permits for Jammu & Kashmir are currently not confirmed. At present, Planethimalayas has not opened any batches for booking and will do so only after all necessary permissions for trek operations are officially granted. As per current updates, an official decision regarding trekking permissions is expected by May 2026."    },
    {
      heading: "High Uncertainty in J&K",
      content:
        "Trekking in Jammu & Kashmir can be impacted by sudden administrative decisions, political developments, or security-related restrictions."
    },
  ]
},

  overview: {
  facts: [
    { emoji: "⏳", label: "Trek Duration", value: "5 Nights / 6 Days" },
    { emoji: "⚡", label: "Trek Grade", value: "Moderate - Difficult" },
    { emoji: "🏔️", label: "Max Altitude", value: "Approx. 4,200 m (13,800 ft)" },
    { emoji: "⚡", label: "Trek Distance", value: "65–75 Km (approx.)" },
    { emoji: "🌤️", label: "Best Time", value: "July to September" },
    { emoji: "🗺️", label: "Region", value: "Kashmir Himalayas, Jammu & Kashmir" },
    { emoji: "📍", label: "Start Point", value: "Sonamarg (Nichnai side)" },
    { emoji: "🏁", label: "End Point", value: "Naranag" },
    { emoji: "🧥", label: "Cloakroom facility", value: "Available" }
  ],

  snippet:
    "The Kashmir Great Lakes Trek is often called the crown jewel of Indian Himalayan trekking — a journey through a dreamscape of alpine lakes, endless green meadows, and dramatic mountain passes that define the raw beauty of Kashmir. Set in the high ranges east of Srinagar, this trek strings together a series of pristine glacial lakes, each with its own colour, character, and story, all set against towering snow-clad peaks rising beyond 6,000 meters.<br>The trail begins near Sonamarg, the ‘Meadow of Gold’, where wide grasslands roll gently beneath open skies and the first streams flow cold and clear from surrounding glaciers. As you climb higher, the landscape shifts dramatically — gentle shepherd paths give way to vast alpine basins, rocky ridgelines, and high mountain passes like Nichnai Pass (around 4,100 m) and Gadsar Pass (around 4,200 m), from where the entire Kashmir valley seems to unfold beneath your feet.<br>What makes this trek truly legendary is its lakes. Vishansar and Kishansar sit like twin jewels cradled in sweeping meadows, reflecting sharp mountain silhouettes and drifting clouds. Gadsar Lake, often still partially frozen even in mid-summer, lies beneath rugged cliffs and is considered sacred by local shepherds. Further ahead, Satsar reveals not one but a chain of interconnected high-altitude lakes, while the final descent leads you to Gangbal and Nundkol — massive alpine lakes resting at the base of Mount Harmukh (5,142 m), one of Kashmir’s most revered peaks in local mythology.<br>The trek is a paradise for nature lovers. During peak summer, the meadows explode with wildflowers — gentians, buttercups, blue poppies, and edelweiss — while herds of sheep and horses graze freely under the watch of Gujjar and Bakarwal shepherds who still follow ancient migratory routes through these mountains. Birdlife is rich and varied, and marmots are commonly spotted near rocky sections. Though elusive, the region is also known habitat for Himalayan brown bears and snow leopards at higher elevations.<br>While the Kashmir Great Lakes Trek is not technical, it demands stamina and mental resilience. Long walking days, multiple river crossings, high-altitude camping above 3,500 meters, and rapidly changing mountain weather make it a serious undertaking. Sudden rain, mist, or snowfall can transform the landscape within minutes, adding to both the challenge and the magic of the journey.<br>For trekkers seeking the pure essence of Himalayan beauty — vast open spaces, crystal-clear lakes, high passes, and a feeling of walking through untouched wilderness — the Kashmir Great Lakes Trek delivers an experience that is both humbling and unforgettable. It is not just a trek through mountains, but a passage through one of the most visually dramatic high-altitude landscapes in the Indian Himalayas."
  },

  price: 20400,
  priceNote: "* Srinagar to Srinagar",
  addons: {
    transport: null,
    transportNote: null,
    offloadingbag: 4200,
    offloadingNote: "* Maximum weight 9kg/bag"
  },

  inclusionsNote: "🍽️ All Meals – Nutritious meals provided from packed lunch on Day 1 to packed lunch on Day 6",

  highlights: [
    "Trek through a chain of iconic alpine lakes — Vishansar, Krishansar, Gadsar, Satsar, and Gangbal",
    "Vast rolling meadows that stretch endlessly across the Kashmiri highlands",
    "Cross high-altitude passes like Gadsar Pass with sweeping panoramic views",
    "Frequent river crossings and snow patches adding adventure to the trail",
    "Encounters with nomadic Gujjar and Bakarwal shepherd communities",
    "Dramatic shifts in landscape — from lush grasslands to stark glacial basins",
    "One of India’s most scenic high-altitude treks with continuous visual rewards"
  ],

  itinerary: [
  {
  day: 1,
  title: "Srinagar – Shitkadi – Nichnai | 80 km Drive + 8 km Trek | 1,585 m (Srinagar) to 3,500 m (Nichnai)",
  details:
    "The journey begins early in the morning with a pickup from Srinagar. The exact pickup location and time are shared a day before departure. From Srinagar, drive through the scenic Sindh valley toward Sonamarg, with a short breakfast stop en route before continuing to the trek start point near Shitkadi, approximately 3 km before Sonamarg on the Srinagar road.<br>The trek begins at Shitkadi, marked by a lone roadside dhaba on the right side of the road. A jeep track turns right from the road near the dhaba and drops toward the Sindh River, which flows between the track and the main road. The trail initially follows this track before turning sharply uphill. Within ten minutes, the path bends left and enters a green meadow that overlooks Sonamarg town, offering the first sweeping view of the valley below.<br>After about half an hour, the trail reaches the top of the meadow where Maple and Pine trees begin. At the tree line, the path briefly descends to a small brook before climbing again into a dense Maple forest. Walking on a thick green carpet beneath towering Maple trees is a rare experience unique to Kashmir. Over the next one and a half hours, the trail winds steadily uphill through the forest. It is important to stay on the ascending path, as descending trails lead toward nearby villages. Occasional clearings open up along the way, revealing increasingly expansive views of the Sonamarg valley, with its streams, meadows, pine forests, and the town nestled below.<br>The Maple forest ends at a ridge top, where the view opens dramatically toward Sonamarg and the neighboring valley. After a short pause at the ridge, the trail slopes gently downward into a broad alpine meadow on the other side. This meadow is lined with Silver Birch trees and a few shepherd huts, with a wide carpet of green stretching across the valley floor. Small streams cross the meadow and provide reliable water sources, while snow-dusted peaks rise quietly on the right. This beautiful meadow is known as Shekdur and makes for a perfect lunch stop.<br>Beyond Shekdur, the trail continues across the meadow for about half an hour before entering a forest of Silver Birch. The path descends gently through thick foliage, where sunlight filters through the canopy creating striking patterns of light and shadow. After around forty-five minutes, the Birch forest thins out and the trail drops into a river valley, marking the beginning of the Nichnai region.<br>The trail now follows the right bank of a fast-flowing river as it moves steadily upstream. Snow-clad peaks from the Sonamarg side remain visible behind, while the valley ahead opens gradually between two mountain ranges. The first section is rocky and slow-going, especially for pack animals, but soon gives way to wider grassy patches as the valley broadens. Far ahead, distinctive triangular twin snow-covered peaks come into view. A flat grassy section near the river is chosen to pitch tents, bringing the first day’s trek to an end at Nichnai, surrounded by high mountains, flowing water, and complete wilderness."
  },
  {
  day: 2,
  title: "Nichnai – Vishnusar Lake via Nichnai Pass | 13.5 km Trek | 3,540 m → 3,650 m via 4,030 m",
  details:
    "The day begins early from Nichnai, ideally by 8:00 am, as this is one of the longest and most scenic walking days of the trek. The campsite lies at around 3,540 m (11,607 ft), and today you cross the first major pass of the trek — Nichnai Pass, also locally known as Vishnusar Berry, perched high at 4,030 m (13,229 ft). Carry sufficient water from camp, though there are multiple streams along the way to refill later in the day.<br>The trail initially follows the river flowing through the Nichnai valley. For the first thirty minutes, you walk on flat ground before crossing the river to its left bank. From here, the valley slowly opens up into expansive alpine meadows, and the ascent begins so gradually that it almost goes unnoticed. Twin snow-clad peaks ahead act as constant reference points, with the Nichnai Pass lying slightly to their right. Over the next hour, the trail steadily climbs through lush grasslands, with the mountains slowly closing in on either side.<br>The final climb to Nichnai Pass is a clearly defined ascent that takes about an hour. Though not technically difficult, the altitude gain is quick and many trekkers feel the thin air here, as this is only the second day of trekking. The ridge you see from below is deceptive — the trail turns inward twice before the actual pass reveals itself. Standing at the pass, the view behind opens dramatically toward the Sonamarg valley and the entire route you have walked so far. This is also the last point on the trek where mobile network is occasionally available. From here on, the trail disconnects you completely from the outside world until you descend toward Gangbal days later.<br>Nichnai Pass feels like a wide, open corridor between mountain systems. Snow-covered Himalayan peaks line the left, while the terrain to the right rises in stark, barren ridges reminiscent of Ladakh’s cold desert landscapes. From the pass, the trail plunges sharply downward over loose rocks for nearly an hour. As altitude is lost, rocks slowly give way to grass, and bright red alpine flowers begin to dot the ground underfoot. A new river emerges below, fed by snowmelt from the pass, flowing gently through a vast green basin.<br>The descent eases into one of the most beautiful meadows of the trek — a wide, open valley stretching far ahead, flanked by contrasting mountain ranges. On the left rise classic snow-clad Himalayan peaks, while the right side displays grey, barren slopes shaped by wind and weather. A large waterfall crashes down a cliff on the left, feeding the river that runs through the meadow. Walking through this landscape feels unhurried and expansive, with the trail weaving gently along the grass.<br>Two main streams cut across the meadow. Stick close to the stream on the left and be prepared for a cold water crossing about half an hour later. The icy water is ankle to knee deep depending on the season. Beyond this crossing, the walk continues for another hour and a half through the meadow until you reach the end of the valley, where a stream flows perpendicular across the trail from left to right.<br>This stream originates from Vishnusar Lake, which lies slightly above and to the left of the campsite. Pitch your tents near this stream — the camping area is flat, spacious, and well-protected. The lake itself is hidden from view at the campsite, adding to the anticipation.<br>If energy permits, a short walk leads to Vishnusar Lake, located about 500 meters away and roughly 30 meters higher than the campsite. Follow the stream upstream without crossing it, and within minutes the lake reveals itself, cradled beneath four surrounding mountains. The Kishansar peak, though some distance away, reflects beautifully on the lake’s still surface. Vishnusar changes character through the day — appearing crystal clear in early morning, deep blue under a bright sun, and greenish-blue as clouds roll in during the afternoon. Watching the lake shift colours with light and weather is one of the quiet rewards of the Kashmir Great Lakes trek."
  },
  {
  day: 3,
  title: "Vishnusar – Gadsar Lake via Gadsar Pass | 16 km Trek | 3,650 m → 3,260 m via 4,180 m",
  details:
    "Day four is the most demanding and visually dramatic day of the Kashmir Great Lakes trek, taking you across Gadsar Pass — the highest point of the entire route at approximately 4,180 m (13,715 ft). Start early from Vishnusar Lake, carrying sufficient water as the first part of the climb is dry. The lake lies silent in the early morning, often reflecting the surrounding peaks in perfect symmetry, making it one of the most memorable departures of the trek.<br>The trail initially skirts the Kishansar Lake side and soon begins climbing sharply. Look closely at the mountainside ahead — a pencil-thin trail etched across the slope marks your route to the pass. Multiple faint tracks appear, but always choose the one that gains height. The climb is steady and relentless, taking about one and a half to two hours at a controlled pace. Roughly forty-five minutes into the ascent, turn around for one of the most iconic views of the trek — Vishnusar and Kishansar lakes appear together in a single frame, cradled in their high alpine bowls, their colours shifting with the angle of light.<br>As you continue upward, the twin-lake view remains in sight until you finally crest the ridge at Gadsar Pass. At 4,180 m, this wind-swept saddle marks the transition into a new valley altogether. Snow often lingers here even in mid-summer, and the air is noticeably thinner. From the pass, the landscape opens toward a long, remote valley stretching far ahead, dotted with small lakes and guarded by distant snow-covered peaks. On exceptionally clear days, trekkers can spot peaks across the Line of Control, including ranges extending toward Pakistan-occupied territory — a reminder of how close this wilderness lies to geopolitical boundaries.<br>The descent from Gadsar Pass is steep and direct. Snowfields often cover sections of the trail early in the season, making footing careful and deliberate. Within the first part of the descent, the trail passes Yamsar Lake, a small, deep-blue water body resting quietly on the left. Local folklore associates this lake with Yama, the god of death, and shepherds traditionally avoid camping here. Beyond Yamsar lies another unnamed alpine lake, equally pristine, reflecting the stark sky above.<br>As the descent continues, the terrain softens into grassy slopes and eventually levels out into a narrower meadow valley flanked by two mountain ranges. This section is famous for its wildflower bloom. The grass here is thick and bright green, punctuated by bursts of colour — red flowers give way to blue and then deep purple irises as the valley opens up. Walking through this stretch feels almost unreal, as if the valley has been painted deliberately for those willing to cross the pass.<br>Soon, the valley reveals Gadsar Lake itself, one of the most untouched and striking lakes of the entire trek. Nestled at around 3,260 m (10,706 ft), Gadsar sits beneath towering snow-clad cliffs on one side, where slabs of ice often break away and slide into the water, while the opposite bank blooms with blue alpine flowers. The lake’s water shifts between deep blue and green depending on the light, and a single stream connects Yamsar, the unnamed lake, and Gadsar in a cascading chain from high to low.<br>Camping near Gadsar Lake is sometimes permitted, though it is generally discouraged to preserve its fragile ecosystem. An abandoned army shelter stands nearby as a reminder of the valley’s strategic sensitivity. Most groups continue descending from the lake, and within thirty minutes the valley begins to widen. Another blue lake appears to the left, while the snow-covered peaks gradually give way to lower, barren mountains. Shepherd huts soon emerge, signalling a return to human presence.<br>A further descent of about an hour leads to the Gadsar Army Camp, a small post manned by a handful of soldiers. This is a mandatory reporting point. Trekkers must register here, as onward movement requires clearance from the army headquarters located several kilometres ahead near the treeline. Communication is handled via walkie-talkie, and identity documents are verified. Expect to wait for clearance, as this process can take a couple of hours. The day ends near the camp, resting after crossing the most remote and high-altitude section of the Kashmir Great Lakes trek."
  },
  {
  day: 4,
  title: "Gadsar – Satsar Lakes | 11.5 km Trek | 3,260 m → 3,650 m",
  details:
    "Day five begins from the Gadsar side with a river crossing followed by a sharp climb straight into the mountainside. The trail immediately gains height, pulling away from the river valley below. The terrain here feels unexpectedly familiar to trekkers from the Western Ghats — narrow trails etched into green slopes, rolling contours, and a sense of walking just above the treeline. Below you, the river snakes through the valley while clusters of trees thin out rapidly as you climb.<br>The first one and a half hours involve a steady ascent of roughly 1,100 feet. Though not technically difficult, the climb demands controlled pacing after the exertions of Gadsar Pass the previous day. As you cross the 11,500 ft mark, the trail stops climbing sharply and transitions into a long, almost level traverse. The route bends left, deliberately leaving the river valley behind, and opens into a broad meadow flanked by isolated mountains. The sense of exposure increases here — you are fully out in the open, surrounded by silence, wind, and vastness.<br>This section of the trail passes through an area known locally as Maengandob. Scattered across the meadow to your right are deep, unnatural-looking craters gouged into the earth — remnants of artillery shelling from the Kargil conflict. These bomb craters are stark reminders that this peaceful alpine landscape once echoed with explosions. On clear days from this stretch, trekkers may spot distant snow-clad peaks across the Line of Control, and occasionally even catch glimpses of Nanga Parbat far beyond, standing immense and solitary in Pakistan-occupied territory. The contrast between serene meadows and wartime scars is deeply humbling.<br>Ahead, the landscape becomes softer again. Isolated mountains rise like sentinels, while a low ridge forms on the right. Between them stretches a flat green basin threaded by a gentle stream. If your previous night was near Gadsar Lake, this meadow serves as a logical campsite. However, if you started the day from the Gadsar Army Camp, it is advisable to push further and reach Satsar today, keeping the next day lighter.<br>Satsar is not a single lake but a cluster of seven interconnected alpine lakes scattered across a high-altitude plateau at around 3,650 m (11,985 ft). Depending on the season, four to five of these lakes usually hold water, each differing slightly in size and colour. Beyond the ridge to the right lies the Satsar Army Check Post — the third line of defence from the Line of Control. Reporting here is mandatory, and the familiar process of identity verification and documentation repeats. Completing this formality today ensures an uninterrupted trekking day tomorrow.<br>A short walk of about ten minutes beyond the army camp brings you to the first Satsar lake. Broad, calm, and reflective, it sits quietly in a green bowl with mountains rising in front of it. This lake is typically chosen as the campsite. As evening settles in, the plateau grows silent, broken only by wind rippling across the water. The scattered lakes, open skies, and surrounding peaks create a sense of isolation that feels both peaceful and profound — a fitting pause before the final crossing toward Harmukh."
  },
  {
  day: 5,
  title: "Satsar – Gangbal & Nundkol via Zaj Pass | 9 km Trek | 3,650 m → 3,500 m (via 4,050 m)",
  details:
    "Day six is a relentless sequence of ascents and descents — a perfect mirror of the Kashmir Great Lakes trek as a whole. The trail tests endurance more than distance, constantly gaining and losing altitude across barren ridges before rewarding you with one of the most iconic lake views in the Indian Himalayas.<br>Begin the day by trekking gently upward for about half an hour from the Satsar campsite to reach the largest and final lake of the Satsar cluster. The terrain here is rocky and uneven, turning the walk into a slow boulder-hopping exercise. This lake marks the end of the Satsar plateau. From here, the trail begins to descend gradually, offering one last backward glance at the scattered lakes before the landscape changes again.<br>After about thirty minutes of descent, the forest line becomes visible far below on the left, while to the right a long ridge rises nearly 1,000 feet higher. This marks the start of the day’s most demanding climb. From an altitude of around 11,800 ft, the trail switches direction and begins a sharp zig-zag ascent along a pony track. The next forty-five minutes are steep and barren, with loose stones underfoot and little respite. Gaining the first ridge brings momentary relief, but the effort is far from over.<br>Two more ridges rise ahead, each climbed in succession. The landscape here feels stark and exposed — brown, rocky slopes devoid of vegetation. Looking back occasionally reveals a striking contrast: Gujjar huts tucked among tall pine forests far below, emphasizing how abruptly the terrain has shifted. A continuous two-hour climb eventually brings you to the highest ridge of the day at roughly 4,050 m (13,276 ft), commonly referred to as Zaj Pass.<br>What awaits on the ridge top is one of the most dramatic reveals of the trek. Almost suddenly, two large alpine lakes appear below, lying side by side in a deep mountain basin. A narrow stream links the higher lake to the lower one. These are Gangbal and Nundkol — the crown jewels of the Kashmir Great Lakes trek. If you look carefully, two smaller, unnamed blue lakes can also be spotted farther away, completing a breathtaking amphitheatre of water and stone.<br>From the pass, the trail drops steeply toward the lakes, losing nearly 1,400 feet in altitude. The descent is rocky and demanding, requiring careful footing. Midway down, a cold mountain stream cuts across the trail — the last reliable water source of the day and a welcome place to refill bottles. Beyond this point, the rocks gradually give way to grass, and the harsh terrain softens into green meadows once again.<br>The meadow stretches gently across the slope, with the tree line reappearing far below to the left. Though the lakes remain in sight, they seem deceptively distant. A short climb followed by another descent and a wooden log bridge crossing finally brings you to the shores of Nundkol Lake. This lake sees heavier footfall due to weekend trekkers from Naranag, and signs of human presence are often visible — a stark contrast to the pristine lakes earlier in the trek.<br>Nundkol sits directly beneath the towering Harmukh Peak, whose glaciers cling dramatically to its dark rock faces. Both Nundkol and Gangbal are famous for trout fishing, and their waters reflect the changing moods of the sky above. Gangbal Lake lies about twenty minutes away. A fast-flowing stream connects the two lakes — do not attempt to cross it downstream. Instead, walk upstream toward Gangbal where a sturdy man-made bridge allows safe crossing.<br>Gangbal is vast, silent, and commanding. The lake feels sacred — and rightly so. Mount Harmukh, revered in Kashmiri folklore as the abode of Lord Shiva, rises directly above it. Walking along the shores as evening settles in, with the mountain reflected in still waters and prayer-like silence all around, feels less like the end of a trek and more like a moment of quiet reverence. Camp near the lake and take in the final high-altitude night of this unforgettable journey."
  },
  {
  day: 6,
  title: "Gangbal – Naranag – Srinagar | 13 km Trek + 50 km Drive | 3,500 m → 2,380 m",
  details:
    "The final day of the trek is long, knee-intensive, and mentally demanding — a fitting conclusion to the Kashmir Great Lakes journey. While the altitude steadily drops, the relentless descent puts sustained pressure on toes and knees, making this day more challenging than it appears on paper.<br>From the Gangbal campsite at around 11,486 ft, begin descending along the outflowing stream toward the distant tree line. Avoid walking directly beside the stream; instead, stay on the ridge to the right where the trail is clearer and more stable. About thirty minutes into the walk, mobile network briefly appears — often the first signal in days — just enough to send a message home before the mountains reclaim their silence. Soon after, the ridge tapers off and the trail drops gently into a broad green meadow.<br>Looking back from the meadow offers one last commanding view of Mount Harmukh, its dark rocky face rising dramatically above the lakes you leave behind. The meadow itself is carpeted with small yellow alpine flowers, and the walk here becomes slow and careful as trekkers instinctively avoid stepping on the fragile blooms.<br>Roughly an hour into the descent, the fringes of the pine forest are reached. Tall pine trees border the meadow, and the first signs of human presence appear in the form of a solitary log hut. Rather than entering the forest immediately, the trail skirts its edge and turns right — and in a familiar twist characteristic of this trek, the descent briefly pauses. Though you drop to about 10,800 ft at the tree line, the trail climbs gently again to nearly 11,000 ft.<br>For the next six kilometres, altitude loss is minimal. The path weaves in and out of pine forests and open clearings, maintaining an elevation close to 10,800 ft. This section feels deceptively long, with constant minor ascents and descents that quietly drain energy even as the surroundings grow greener and more populated.<br>Only after covering nearly two-thirds of the day’s distance does the real descent begin. The trail suddenly steepens and plunges sharply through dense pine forest. The path is well-trodden, muddy in places, and demands careful footing. Over the final four kilometres, the trail drops more than 3,000 feet, making this one of the steepest sustained descents of the entire trek.<br>As altitude decreases, encounters with day trekkers increase — many heading uphill from Naranag toward Gangbal for short outings. The village of Naranag first becomes visible at around 8,500 ft, but despite being in sight, the descent continues relentlessly. The final stretch tests endurance and patience until the trail finally merges into a stone-paved village track.<br>Soon after, the forest opens up completely and the main road of Naranag is reached at approximately 7,800 ft. From here, a two-hour drive covering about 50 kilometres brings you back to Srinagar, typically by around 6:30 pm. The journey ends where it began, but with legs sore, hearts full, and the quiet satisfaction of having crossed one of the most scenic and demanding alpine traverses in the Indian Himalayas.<br>Important note: the security checkpost on the Naranag–Srinagar route closes at 4:00 pm. It is crucial to plan the descent and departure accordingly. If delayed beyond this time, overnight arrangements may need to be coordinated locally, sometimes with assistance from the Indian Army."
  }
],

  didYouKnow: [
    "The Kashmir Great Lakes region remains snow-covered for most of the year and is accessible only for a short window between July and September.",
    "Gadsar Pass was historically used by shepherds to move livestock between grazing grounds across valleys.",
    "Gangbal Lake lies at the base of Mount Harmukh (5,142 m), one of Kashmir’s most prominent peaks and a sacred mountain in local folklore.",
    "The Gujjar and Bakarwal nomads migrate seasonally through these meadows, living in temporary shelters with their flocks.",
    "Despite its popularity, the region has no permanent settlements beyond Naranag, preserving its wild and untouched character."
  ],

  howToReach: {
    air: "Nearest airport: Srinagar International Airport. Regular flights operate from Delhi and other major Indian cities. Srinagar is the main gateway to the Kashmir Valley and offers the easiest access to the trek starting point.",
    train: "Nearest major railway station: Jammu Tawi (approx. 270 km from Srinagar). From Jammu, you can continue by road to Srinagar via NH44. Train connectivity is reliable year-round, but onward travel depends on road conditions.",
    road: "Srinagar is well connected by road to Jammu via the Jammu–Srinagar Highway (NH44). From Srinagar, a 2–3 hour drive takes you to Sonamarg (trek start) or Naranag (trek end), depending on the itinerary direction. Roads may face temporary closures due to landslides or weather, especially during monsoon.",
    travelTip: "Plan to arrive in Srinagar at least one day before the trek begins to allow buffer time for weather or road delays. While the Kashmir Great Lakes Trek does not require long acclimatization like Ladakh treks, gradual ascent, hydration, and fitness preparation are important for a comfortable high-altitude experience."
  },

  gallery: [
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535565/kgl-view3_fam2d7.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535560/kgl-view7_so7ys6.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535556/kgl-view11_rdri7y.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535552/kgl-view14_byzmiq.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535551/kgl-view13_cm0dts.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535549/kgl-view4_zsl7ou.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535546/kgl-hero_phbnfu.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535543/kgl-view6_cszcms.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535541/kgl-view12_blnxcy.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535540/kgl-view2_mchh5u.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535531/kgl-view5_wr8e8k.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535531/kgl-view1_x2b9s2.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535530/kgl-view10_xunafq.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535529/kgl-view8_p6vtjz.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535527/kgl-view9_jei9pf.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1765698680/IMG_20190723_123022_ojepmb.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1765698698/IMG_20190731_170319_ufe38r.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1765698772/IMG_20190723_082902_j4lrnx.jpg",
    ],

  downloadLink: "/docs/Packing_List.pdf",

  faqs: {
    questions: [
      {
        question: "Who can join the Kashmir Great Lakes Trek?",
        answer:
          "This trek is best suited for fit trekkers with prior trekking experience. Long walking days, high altitude, and repeated ascents and descents require good stamina and endurance."
      },
      {
      question: "How should I prepare physically for the Kashmir Great Lakes Trek?",
      answer:
        "Preparation should begin at least 6–8 weeks before the trek. A strong cardiovascular base is essential — regular running, stair climbing, cycling, or hiking with a loaded backpack is recommended. Strength training focusing on legs, core, and balance will help handle steep climbs and descents. Prior experience on difficult Himalayan treks significantly improves safety and comfort."
    },
      {
        question: "What is the difficulty level of this trek?",
        answer:
          "The trek is graded moderate to moderate-difficult. While there are no technical sections, the altitude, long distances, river crossings, and high passes make it physically demanding."
      },
      {
        question: "What is the highest altitude reached on the trek?",
        answer:
          "The highest point is Gadsar Pass at approximately 4,200 m, where snowfields and strong winds are common even in summer."
      },
      {
        question: "When is the best time to do the Kashmir Great Lakes Trek?",
        answer:
          "The ideal season is from July to September, when the snow melts and the alpine lakes become accessible."
      },
      {
        question: "What kind of accommodation is provided?",
        answer:
          "Accommodation is in tents throughout the trek. Campsites are set near lakes and meadows, offering immersive wilderness stays."
      },
      {
        question: "Is acclimatization important on this trek?",
        answer:
          "Yes. The itinerary is designed to allow gradual altitude gain, but proper hydration, rest, and awareness of altitude sickness symptoms are essential."
      },
      {
        question: "Will there be river crossings?",
        answer:
          "Yes. Several snow-fed streams must be crossed, especially between Gadsar and Satsar. Trekking poles are highly recommended."
      },
      {
        question: "Is this trek suitable for beginners?",
        answer:
          "This trek is not recommended for absolute beginners. First-time trekkers should have strong fitness levels and prior exposure to multi-day hikes."
      },
      {
        question: "What makes this trek unique?",
        answer:
          "The continuous sequence of high-altitude lakes, vast meadows, and dramatic mountain scenery makes this one of the most visually immersive treks in India."
      }
    ]
  },

  faqsLink: "/faqs-and-articles",
  
},

{
  id: "doodhpathri-trek",
  name: "Doodhpathri Trek",
  tags: ["beginner", "lake", "meadows"],
  difficulty: ["easy"],
  season: ["summer", "monsoon"],
  month: ["june", "july", "august", "september"],
  duration: ["3 Nights / 4 Days"],
  region: "kashmir",
  coordinates: [
    [34.0837, 74.7973], // Srinagar
    [33.9735, 74.6342], // Doodhpathri
    [33.9901, 74.6568], // Palmaidan Meadows
    [34.0103, 74.6794], // Doodhpathri Top
    [34.0837, 74.7973], // Srinagar (end)
  ],

  heroImage:
"https://res.cloudinary.com/dr44hob9b/image/upload/v1765896173/doodhpathri-hero_icytal.webp",
  heroImages: [
   "https://res.cloudinary.com/dr44hob9b/image/upload/v1765896173/doodhpathri-hero_icytal.webp",
   "https://res.cloudinary.com/dr44hob9b/image/upload/v1765896176/doodhpathri-hero2_e74hmm.webp",
   "https://res.cloudinary.com/dr44hob9b/image/upload/v1765896176/doodhpathri-view1_fxzfhy.jpg"
  ],

  subtitle: "The Valley of Milk Meadows",

  seo: {
    title: "Doodhpathri Trek | Easy Kashmir Trek | Itinerary & Cost | Planethimalayas",
    description:
      "Doodhpathri Trek is an easy alpine meadow trek in Kashmir, perfect for beginners. Lush green grasslands, pine forests, milky streams, and panoramic Pir Panjal views make it an ideal short Himalayan escape near Srinagar."
  },

  advisory: {
  type: "warning",
  fullWidth: true,
  title: "Important Advisory for Jammu & Kashmir Treks",
  sections: [
    {
      heading: "Trekking Permit Status",
      content:
          "Trekking permits for Jammu & Kashmir are currently not confirmed. At present, Planethimalayas has not opened any batches for booking and will do so only after all necessary permissions for trek operations are officially granted. As per current updates, an official decision regarding trekking permissions is expected by May 2026."    },
    {
      heading: "High Uncertainty in J&K",
      content:
        "Trekking in Jammu & Kashmir can be impacted by sudden administrative decisions, political developments, or security-related restrictions."
    },
  ]
},

  overview: {
    facts: [
      { emoji: "⏳", label: "Trek Duration", value: "3 Nights / 4 Days" },
      { emoji: "⚡", label: "Trek Grade", value: "Easy" },
      { emoji: "🏔️", label: "Max Altitude", value: "4,100 m (Doodhpathri Top)" },
      { emoji: "⚡", label: "Trek Distance", value: "Approx. 18 km" },
      { emoji: "🌤️", label: "Best Time", value: "June to September" },
      { emoji: "🗺️", label: "Region", value: "Kashmir Himalayas" },
      { emoji: "📍", label: "Start Point", value: "Srinagar" },
      { emoji: "🏁", label: "End Point", value: "Srinagar" },
      { emoji: "🧥", label: "Cloakroom Facility", value: "Available" },
    ],

    snippet: `
Doodhpathri, literally meaning “Valley of Milk,” is one of Kashmir’s most serene alpine landscapes — wide emerald meadows cut through by crystal-clear streams that turn milky white as they rush over limestone beds. Tucked away southwest of Srinagar, this region remains largely untouched by mass tourism, offering a peaceful Himalayan experience unlike the busier valleys of Gulmarg or Pahalgam.
<br>
The trek unfolds through rolling grasslands, pine and fir forests, and high-altitude pastures grazed by Gujjar and Bakarwal shepherds. With gentle ascents and open walking trails, Doodhpathri is perfect for beginners, families, and trekkers seeking a slow, immersive mountain journey rather than a physically demanding climb.
<br>
A highlight of the trek is the climb to Doodhpathri Top — a natural viewpoint that opens sweeping vistas of the Pir Panjal range, layered valleys, and endless green meadows stretching far into the horizon. During monsoon months, clouds drift low across the grasslands, creating a dreamlike atmosphere rarely seen on Himalayan trails.
<br>
Short, scenic, and deeply calming, the Doodhpathri Trek is ideal for those who want to experience Kashmir’s raw beauty at an unhurried pace — where silence, space, and scenery take centre stage.
    `
  },

  price: 7900,
  priceNote: "* Srinagar to Srinagar",

  addons: {
    transport: null,
    transportNote: null,
    offloadingbag: 1500,
    offloadingNote: "* maximum weight 9 kg / bag",
  },

  inclusionsNote:
    "🍽️ All Meals – Nutritious meals provided from dinner on Day 1 to breakfast on Day 4",

  highlights: [
    "Expansive alpine meadows of Doodhpathri with uninterrupted views",
    "Milky-white streams flowing through lush green grasslands",
    "Quiet, uncrowded trail away from mainstream Kashmir tourism",
    "Panoramic views of the Pir Panjal mountain range",
    "Easy terrain ideal for beginners, families, and first-time trekkers",
    "Beautiful monsoon cloud formations and vibrant summer landscapes"
  ],

  itinerary: [
    {
      day: 1,
      title: "Arrival in Srinagar & Drive to Doodhpathri | 45 km Drive | 2–3 Hours",
      details: `
Arrive in Srinagar by afternoon and meet the Planethimalayas team. After a short briefing, drive towards Doodhpathri through forested roads and rolling countryside. Reach the meadow region by evening and settle into camps near the grasslands. Enjoy your first views of Kashmir’s untouched alpine terrain followed by dinner and overnight stay.
      `
    },
    {
      day: 2,
      title: "Doodhpathri to Palmaidan Meadows | 7 km Trek | 4–5 Hours",
      details: `
Begin trekking after breakfast through wide meadows intersected by crystal-clear streams. The trail remains gentle and open, offering continuous views of surrounding ridges and forests. Reach Palmaidan — a vast, flat meadow ideal for camping — by afternoon. Spend the evening relaxing, photographing the landscape, or simply soaking in the silence of the mountains.
      `
    },
    {
      day: 3,
      title: "Palmaidan to Doodhpathri Top & Return | 8 km Trek | 5–6 Hours",
      details: `
Start early for the gradual ascent towards Doodhpathri Top, the highest point of the trek. From the summit ridge, enjoy sweeping views of the Pir Panjal range and endless green valleys below. After spending time at the top, descend back to the campsite by late afternoon. Dinner and overnight stay at Palmaidan.
      `
    },
    {
      day: 4,
      title: "Trek Back to Doodhpathri & Drive to Srinagar | 3–4 Hours",
      details: `
After breakfast, trek back through familiar meadows to the Doodhpathri roadhead. From here, drive back to Srinagar, reaching by evening. The trek concludes with unforgettable memories of Kashmir’s hidden alpine heartland.
      `
    }
  ],

  howToReach: {
    air:
      "Nearest airport: Srinagar International Airport. Taxis to Doodhpathri are easily available.",
    train:
      "Nearest railway station: Jammu Tawi. From Jammu, drive to Srinagar and onward to Doodhpathri.",
    road:
      "From Srinagar: 2–3 hours drive via Budgam district to Doodhpathri.",
    travelTip:
      "Arrive in Srinagar a day early to acclimatize and explore the city before heading to the meadows."
  },

  didYouKnow: [
    "Doodhpathri gets its name from the milky appearance of its streams caused by limestone-rich soil.",
    "The meadows are traditional summer grazing grounds for Gujjar and Bakarwal nomadic tribes.",
    "Unlike Gulmarg or Pahalgam, Doodhpathri remains largely free from commercial tourism infrastructure.",
    "The region sits on the lesser-explored side of the Pir Panjal range, offering rare panoramic viewpoints.",
    "During monsoon, cloud layers often move below the trekking trail, creating a ‘floating meadow’ effect.",
    "Local folklore believes the meadows were blessed by saints due to their unmatched serenity and purity."
  ],

  gallery: [
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1765896173/doodhpathri-hero_icytal.webp",
   "https://res.cloudinary.com/dr44hob9b/image/upload/v1765896176/doodhpathri-hero2_e74hmm.webp",
   "https://res.cloudinary.com/dr44hob9b/image/upload/v1765896176/doodhpathri-view1_fxzfhy.jpg",
   "https://res.cloudinary.com/dr44hob9b/image/upload/v1765896183/Doodhpathri_z5ipmd.jpg",
   "https://res.cloudinary.com/dr44hob9b/image/upload/v1765896171/doodhpathri-view_iokmf7.webp"
  ],

  downloadLink: "/docs/Packing_List.pdf",

  faqs: {
    questions: [
      {
        question: "Who can join the Doodhpathri Trek?",
        answer:
          "The trek is ideal for beginners, families, and anyone with basic fitness looking for an easy Himalayan experience."
      },
      {
        question: "Is this trek suitable during monsoon?",
        answer:
          "Yes. Monsoon is one of the most beautiful times for Doodhpathri, with lush meadows and dramatic cloud formations."
      },
      {
        question: "Is altitude sickness a concern?",
        answer:
          "The altitude gain is gradual, making it relatively safe. Proper hydration and steady pace are recommended."
      },
      {
        question: "Will there be mobile network?",
        answer:
          "Mobile connectivity is available near Srinagar but unreliable once you enter the meadow region."
      },
      {
        question: "Is offloading available?",
        answer:
          "Yes, mule or porter offloading is available with prior booking."
      }
    ]
  },

  faqsLink: "/pages/faqs-and-articles",
},


/* Himachal Pradesh */

  {
    id: "pin-bhaba-pass-trek",
    name: "Pin Bhaba Pass Trek",
    tags: ["pro", "pass", "crossover", "kinnaur", "spiti", "glacier", "meadows"],
    difficulty: ["difficult"],
    season: ["monsoon", "autumn"],
    month: ["july", "august", "september", "october"],
    region: "himachal pradesh",
    duration: "6 Nights / 6 Days",
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
        { emoji: "⏳", label: "Trek Duration", value: "6 Nights / 6 Days" },
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
      transport: 3000,
      offloadingbag: 4500,
      transportNote: "* Shimla to Kafnu. Trekkers can request transport arrangement from Kaza back to Manali. Transport will be organized on the spot, and costs are to be shared by trekkers directly.",
      offloadingNote: "* Maximum weight 9kg / bag"
    },

    inclusionsNote: "🍽️ All Meals – Nutritious meals provided from dinner on Day 1 to lunch on Day 6",

    dates: [
  { label: "10 Jul - 16 Jul", start: "2026-07-10", end: "2026-07-16" },
  { label: "11 Jul - 17 Jul", start: "2026-07-11", end: "2026-07-17" },
  { label: "17 Jul - 23 Jul", start: "2026-07-17", end: "2026-07-23" },
  { label: "18 Jul - 24 Jul", start: "2026-07-18", end: "2026-07-24" },
  { label: "24 Jul - 30 Jul", start: "2026-07-24", end: "2026-07-30" },
  { label: "25 Jul - 31 Jul", start: "2026-07-25", end: "2026-07-31" },
  { label: "31 Jul - 06 Aug", start: "2026-07-31", end: "2026-08-06" },
  { label: "01 Aug - 07 Aug", start: "2026-08-01", end: "2026-08-07" },
  { label: "07 Aug - 13 Aug", start: "2026-08-07", end: "2026-08-13" },
  { label: "08 Aug - 14 Aug", start: "2026-08-08", end: "2026-08-14" },
  { label: "14 Aug - 20 Aug", start: "2026-08-14", end: "2026-08-20" },
  { label: "15 Aug - 21 Aug", start: "2026-08-15", end: "2026-08-21" },
  { label: "21 Aug - 27 Aug", start: "2026-08-21", end: "2026-08-27" },
  { label: "22 Aug - 28 Aug", start: "2026-08-22", end: "2026-08-28" },
  { label: "28 Aug - 03 Sep", start: "2026-08-28", end: "2026-09-03" },
  { label: "29 Aug - 04 Sep", start: "2026-08-29", end: "2026-09-04" },
  { label: "04 Sep - 10 Sep", start: "2026-09-04", end: "2026-09-10" },
  { label: "05 Sep - 11 Sep", start: "2026-09-05", end: "2026-09-11" },
  { label: "11 Sep - 17 Sep", start: "2026-09-11", end: "2026-09-17" },
  { label: "12 Sep - 18 Sep", start: "2026-09-12", end: "2026-09-18" },
  { label: "18 Sep - 24 Sep", start: "2026-09-18", end: "2026-09-24" },
  { label: "19 Sep - 25 Sep", start: "2026-09-19", end: "2026-09-25" },
  { label: "25 Sep - 01 Oct", start: "2026-09-25", end: "2026-10-01" },
  { label: "26 Sep - 02 Oct", start: "2026-09-26", end: "2026-10-02" },
  { label: "02 Oct - 08 Oct", start: "2026-10-02", end: "2026-10-08" },
  { label: "03 Oct - 09 Oct", start: "2026-10-03", end: "2026-10-09" }
   
    ],

    highlights: [
      "Stunning crossover from the green Kinnaur to the arid Spiti Valley",
      "Pin Bhaba Pass at 16,105 ft with panoramic mountain views",
      "Walk through dense forests, meadows, river crossings, and glacier zones",
      "Camp beside rivers and under starry skies at scenic campsites like Kara and Phustirang",
      "Experience two distinct cultures — Kinnauri and Spitian — in one trek",
    ],

    itinerary: [ 
      { day: 1, title: "Shimla to Kafnu (7,900 ft)", details: "<strong>• Drive distance: ~200 km (7–8 hours).</strong> <br>• Reaching Kafnu feels like slipping quietly into a hidden corner of Kinnaur. Even though it lies deep in the valley, the journey is surprisingly smooth — the Bhaba River guides you almost the entire way, flowing confidently through the mountains as if escorting you to the start of your adventure. The hydel power project built along its course has brought steady roads, working routes, and constant movement of locals, trucks, and buses. Because of this, Kafnu — despite its remoteness — remains well connected to Kalpa, Reckong Peo, Karcham, Rampur, and even Shimla.<br>The final stretch into the village is unforgettable. The road climbs rapidly above the river, hugging steep mountain walls, twisting through narrow bends where every turn opens up a fresh perspective of the valley. It’s the kind of drive where the landscape keeps shifting — thick forests, cliff edges, sudden views of the river far below. For first-timers, the ride can feel thrilling; for mountain lovers, it feels like home.<br>Kafnu itself is a quiet settlement surrounded by forests, apple orchards, and the calm of the lower Himalayas. Wooden houses sit clustered on gentle slopes, with prayer flags fluttering on rooftops and the sound of the river echoing softly in the background. This is the last point of comfort before the wilderness begins.<br>You’ll check into a local lodge or homestay for the night — simple, warm, and welcoming. Use this day to rest your legs, settle into the altitude, and let the long journey fade out of your system." }, 
      { day: 2, title: "Kafnu to Mulling (10,800 ft)", details: "<strong>• Trek distance: ~11 km | Duration: 6–7 hours | Altitude gain: ~2,900 ft. </strong><br>• The first day on the trail feels like slipping into a world that has been quietly waiting for you. As you leave Kafnu behind, the path rises gently through forests that seem untouched by time. Pines tower above you, silver birch trees sway in the morning light, and the Bhaba River rushes beside you with a steady, comforting presence. This is one of those rare Himalayan routes where the forest itself becomes the highlight — dense, aromatic, and filled with birdsong that follows you for hours.<br>Within the first stretch, the trail leads you past the Bhaba Hydel Project — India’s first underground dam hidden deep within the valley. It’s a reminder of how modern engineering coexists with raw nature here, though photography is strictly restricted. A little ahead, a bridge appears across the river; once you cross it, the forest begins to close in from all sides.<br>The real ascent begins when you spot a faint path rising away from the motor road — a narrow trail, almost secret, that leads you into the heart of the woods. For the next few kilometres, the canopy thickens, the air cools noticeably, and the forest floor turns soft with fallen leaves and needles. Every turn reveals a new frame — tall oaks, birches glowing white against the green, and patches of sunlight dancing between branches. It’s the kind of forest that makes you slow down simply because you don’t want it to end.<br>A short walk ahead opens unexpectedly into a clearing — a quiet patch of earth textured with grass, mud, and scattered stones. It feels like a natural rest point before the climb deepens. Soon after, you reach Champoria, a serene riverside zone wrapped in trees. Here, a sturdy log bridge helps you cross to the other side of the Bhaba River, marking the beginning of the steeper sections.<br>Beyond this point, the trail starts rising with purpose. The valley narrows, the sound of the river echoes louder between the walls, and the air grows colder with every step. A smaller tributary joins the main river here, signalling that you’re on the right track. Pace yourself — this is where the altitude begins to speak.<br>Around the 10 km mark, you emerge onto Jhandi Top, a natural ledge that offers your first wide, sweeping view of the upper valley. From here, the landscape opens dramatically, and far ahead — almost glowing in the afternoon light — you can spot the Mulling campsite tucked beneath vast green slopes. The final stretch to Mulling is short but beautiful, a gentle walk through meadows and soft earth.<br>When you finally arrive, the forest gives way to an expansive grassland framed by tall ridges. The Mulling hut stands quietly at the edge, offering two bare rooms for those trekking independently, though most prefer to pitch tents beside the river. The breeze here is cool, the meadows enormous, and the silence unforgettable.<br>This is where the Pin Bhaba trek truly begins to reveal its magic — a perfect first chapter in a journey that grows more dramatic with every passing day." }, 
      { day: 3, title: "Mulling to Kara (11,700 ft)", details: "<strong>• Trek distance: ~6 km | Duration: 4–5 hours | Altitude gain: ~900 ft.</strong> <br>• The day begins with the mountains easing you gently out of Mulling. As you leave the wide grasslands behind, the trail shifts into a rocky stretch where the Bhaba Valley narrows again. The ascent is steady and calm, giving your legs enough time to warm up while the morning sun lights up the ridges above.<br>Barely 1.5 km into the day, the landscape opens into a long, soft meadow — a sudden burst of green set against dark cliffs. A waterfall tumbles down the slope to your right, its sound echoing across the valley like a constant reminder of the river running somewhere below you. It’s a refreshing, postcard-perfect spot that sets the tone for the beauty that lies ahead.<br>The trail continues to rise gradually from here, weaving through stones, tufts of grass, and tiny patches of wildflowers. After another short stretch, you experience one of the most fascinating features of this trek — a river that you can hear loudly but cannot see, flowing deep under layers of rock and soil, carving its own secret pathways beneath the surface. The sound grows stronger as you approach, vibrating through the earth beneath your boots, yet the water remains hidden. It's rare to encounter such a phenomenon on a Himalayan trek.<br>Beyond this mystical spot, the trail stiffens. A sharp ascent begins, lifting you quickly above the valley floor. As you climb, the world opens up once again, and soon you find yourself entering one of the most enchanting meadows of the entire trek — a sweeping, green expanse sprinkled with delicate alpine flowers. The colours change with the season: soft whites and yellows early on, deeper purples and reds as summer peaks. This meadow feels alive, almost glowing under the afternoon sun.<br>A gentle walk of just over a kilometre brings you to the Karah campsite — a serene setting beside a clear mountain stream, with ridges rising sharply on all sides. The sound of running water fills the air, this is one of those places where time feels slow.<br>Karah is where the trek truly begins to feel Himalayan — vast, quiet, and framed by towering walls of rock. You reach here by early afternoon, giving you enough time to rest, explore the stream, or simply lie back in the grass and gather strength for the long, high-altitude climb that awaits." }, 
      { day: 4, title: "Kara to Phustirang (13,500 ft)", details: "<strong>• Trek distance: ~5 km | Duration: 4–5 hours | Altitude gain: ~1,800 ft.</strong> <br>• Today may be the shortest walking day of the trek, but it is far from the easiest. With only 5 km to cover, the trail wastes no time in climbing sharply into higher terrain. The Bhaba Valley now sheds most of its softness — the meadows thin out, the slopes sharpen, and the air grows noticeably cooler as you gain altitude.<br>The day begins with a crossing of a lively tributary flowing down from the upper reaches of Phutsirang. The stream approaches from the left side of the valley, pouring down over boulders with a volume that depends entirely on the season. Once you cross it, the trail rises immediately, entering a landscape shaped by water and stone.<br>The ascent from here is steep and demands patience. The terrain is a blend of loose mud, scattered rocks, and narrow humps carved by streams over time. Mountain water accompanies you almost throughout the day — trickling, splitting, merging, and cutting through the slopes in multiple channels. These crossings, combined with the incline, make the day feel more taxing than the distance suggests, so pacing becomes essential.<br>Roughly 4 km into the climb, the valley widens just enough to reveal the lower Phutsirang campsite — a rugged but scenic patch surrounded by high ridgelines. It’s a brief but welcome visual breather after the relentless ascent.<br>From here, a final push of about 700 metres takes you higher into the upper basin. The moment you step into Phutsirang, the entire personality of the trek transforms. You stand inside a massive high-altitude amphitheatre — a wild, open cirque surrounded by dark, imposing mountains. The air feels thinner, the silence deeper, and the scale of the landscape almost overwhelming.<br>Phutsirang is not just a campsite; it’s a vantage point. From here, you can see three great passes of the region lined up like distant gateways:<br>Nimish Khango (16,185 ft)<br>Tari Khango (17,318 ft)<br>Pin Bhaba Pass (Wang Khango) (16,105 ft) — your objective for tomorrow<br>Watching the evening light fall across these ridges is an experience in itself. As the sun drops behind the mountains, temperatures dip quickly, and the sky fills with stars sharper and brighter than anything you might have seen before.<br>Rest well — tomorrow is the big day, the climb to the pass." }, 
      { day: 5, title: "Phustirang to Mangrungtse (13,000 ft) via Pin Bhaba Pass (16,105 ft)", details: "<strong>• Trek distance: ~12 km | Duration: 9–10 hours | Altitude gain: ~2,600 ft ascent and ~3,100 ft descent.</strong> <br>• You wake up knowing that today is the day — the day you step from one world into another. Crossing a high mountain pass isn’t just a climb; it’s a pilgrimage of sorts, one the mountains make you earn with every breath, every step, every quiet moment where you gather your strength. The excitement begins right from camp as the first light spills over the ridges above Phutsirang.<br>The ascent is steep from the very beginning. The trail twists through stony slopes and loose mud, rising steadily toward the saddle of the Pin Bhaba Pass. Your pace naturally slows as oxygen thins and the valley floor drops away behind you. Each pause rewards you with the sight of Bhaba Valley opening in full — green, lush, and impossibly gentle compared to where you’re heading.<br>Reaching the saddle is surreal. One moment you are climbing through familiar grassy ridges, and the next you’re standing on a knife-edge gateway between two completely different worlds. This is where the crossover becomes real. Behind you lies the soft, green embrace of Bhaba Valley. Ahead of you spreads the raw, wind-carved expanse of Pin — a canvas of browns, pinks, and pale earth stretching into the cold desert of Spiti. The contrast is so sudden, so dramatic, it almost feels staged by nature.<br>Below, far in the distance, a thin silver ribbon glints — the Pin River.<br>The descent begins sharply from the pass, dropping onto a terrain made of moraine fields, loose scree, and bits of old glacier. Every step demands focus. Move slow, plant each foot carefully, and stay patient — this is the part that tests your control more than your stamina.<br>Two kilometres down, you finally reach the Pin River. It crashes past you in icy torrents, fed by the snowfields above. You’ll need to remove your footwear to cross it — the water is freezing, but the moment your feet touch the stones on the other side, you know you’ve officially entered Spiti.<br>From here, the valley widens. The descent becomes more relaxed, though the ground is still scattered with moraine and scree. The colours around you shift constantly — dusty pinks, pale yellows, oxidized reds — the signature palette of the Pin Valley.<br>About 6 km after the river crossing, the trail reveals the Mangrungtse campsite far below. It rests quietly on the valley floor, surrounded by the vast emptiness that defines this region. It’s a wide, quiet patch of land beside the river, nestled between towering desert slopes. The wind here carries the dry, crisp air of Spiti, and the sky feels closer, clearer, almost overwhelming in its scale.<br>Tonight, as you rest in Mangruntse, you’ll feel the magnitude of what you’ve accomplished. The crossover is complete — you’ve walked from dense forests and glowing meadows into one of the highest cold deserts in the world.<br>And tomorrow, the trail will carry you deeper into Spiti’s awe-inspiring emptiness." }, 
      { day: 6, title: "Mangrungtse to Mudh (12,300 ft) – Drive to Kaza (12,000 ft)", details: "<strong>• Trek distance: ~16 km | Duration: 6–8 hours | Altitude gain: ~1000 ft descent.</strong> <br>• Your final morning on the Pin Bhaba Pass trek begins in the stark quiet of Mangruntse. The valley wakes slowly — cold winds brushing across the desert slopes, early light glinting off the Pin River, and a vastness so deep it feels like the world has paused around you. This is the day you exit the wilderness and walk back into human settlements. It’s long, around 16 km, so you start early while the valley is still cool.<br>The trail climbs gently out of Mangruntse and soon merges with the main route near Bwalder. Once you’re on the higher trail, Spiti’s famous palette of soft reds and browns begins to dominate the landscape. Ahead lies a long, sweeping valley that guides you toward Mudh — the first village of Spiti and the symbolic end of your journey.<br>A steady 2 km push brings you to Bara Boulder, a well-known rest point surrounded by moraine fields. The descent here is gradual, but the terrain is rough with scattered stones and loose earth. There’s a water source nearby, but it’s not the cleanest — the last good refill is always back at Bwalder or Mangruntse.<br>Just 300 metres beyond Bara Boulder, you cross a lively tributary of the Pin River using a log bridge, the kind of rustic crossing that marks the signature of Spiti’s trekking trails. Once you’re across, the scenery shifts dramatically.<br>The trail turns into a vast, flat stretch coated with red soil and tiny crimson stones — a landscape so unique that it feels as though you’ve stepped onto another planet. Winds blow freely here, carving ripples into the dust and sending sand brushing against your boots.<br>A long, flat walk of about 1.5 km brings you to another small mountain stream. You cross it via another simple log bridge, and just after this point, the reward of the entire day arrives:<br>The first distant view of Mudh Village: Even from 5 km away, Mudh looks like a painting — white houses clustered together, barley fields glowing green and gold, and a line of colourful prayer flags fluttering in the wind. The moment you spot it, something shifts inside you — fatigue eases, your pace steadies, and the heart picks up in excitement. After days in raw wilderness, the sight of this tiny settlement feels unreal.<br>The final stretch, though long, is gentle. The Pin River accompanies you for much of this section, carving a deep channel through the barren valley. Eventually, you reach the last river crossing of the trek — a suspension bridge swaying slightly in the wind, hanging above the wide, roaring Pin.<br>Crossing that bridge is an unforgettable moment. It’s the symbolic gateway into Spiti and the confirmation that your journey — this massive crossover from Kinnaur to Spiti — is nearly complete.<br>Once across, a short climb on a dusty path leads you straight into Mudh Village, the end point of your trek. Prayer flags welcome you, children often wave from rooftops, and the warm, dry wind of Spiti greets you like an old friend.<br>After a brief rest at Mudh, we drive back to Kaza, the cultural and commercial hub of Spiti, for an overnight stay in a guest house.<br>You’ve done it — six days, two contrasting valleys, one dramatic pass, and an experience that stays with you long after you’ve left these mountains." },
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

    downloadLink: "/docs/Packing_List.pdf",

    faqs: {
      questions: [
        {
          question: "Who can participate in the Pin Bhaba Pass trek?",
          answer: "This trek is suitable for individuals with prior high-altitude trekking experience and good physical fitness. It involves steep ascents, river crossings, and high-altitude camping.",
        },
        {
          question: "How should I prepare physically for the Pin Bhaba Pass Trek?",
          answer:
        "Preparation should begin at least 6–8 weeks before the trek. A strong cardiovascular base is essential — regular running, stair climbing, cycling, or hiking with a loaded backpack is recommended. Strength training focusing on legs, core, and balance will help handle steep climbs and descents. Prior experience on difficult Himalayan treks significantly improves safety and comfort."
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
  id: "pin-parvati-pass-trek",
  name: "Pin Parvati Pass Trek",
  tags: ["pro", "pass", "crossover", "parvati", "spiti", "glacier", "lake", "meadows"],
  difficulty: ["difficult"],
  season: ["monsoon", "autumn"],
  month: ["july", "august", "september"],
  duration: ["10 Nights / 10 Days +1 Buffer Day"],
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
      { emoji: "⏳", label: "Trek Duration", value: "10 Nights / 10 Days (+1 buffer day)" },
      { emoji: "⚡", label: "Trek Grade", value: "Difficult" },
      { emoji: "🏔️", label: "Max Altitude", value: "17,450 ft (Pin Parvati Pass)" },
      { emoji: "⚡", label: "Trek Distance", value: "≈110 Km" },
      { emoji: "🌤️", label: "Best Time", value: "July to September" },
      { emoji: "🗺️", label: "Region", value: "Kullu & Spiti, Himachal Pradesh" },
      { emoji: "📍", label: "Start Point", value: "Barshaini (near Kasol)" },
      { emoji: "🏁", label: "End Point", value: "Kaza, Spiti Valley" },
      { emoji: "🧥", label: "Cloakroom facility", value: "Not available" },
    ],

    snippet:
      "The Pin Parvati Pass Trek is far more than just a Himalayan trail — it’s a bold journey across two completely distinct worlds. On one side, the Parvati Valley greets you with its lush, emerald forests, cascading waterfalls, hot springs, and vibrant meadows alive with flowers and birdsong. On the other, the Pin Valley unfolds as a high-altitude cold desert, a land of ochre cliffs, sapphire skies, and barren stretches that seem untouched by time. At an astonishing 5,289 meters, the pass itself stands as the ultimate bridge between these extremes — a place where greenery gives way to arid lands, moisture yields to thin, crisp air, and gentle streams transform into ice-laden rivers. <br>The trek begins at Barshaini, near the quaint village of Kasol, where the trail winds through the dreamy meadows of Kheerganga and Odi Thach, each step immersing you deeper into the wild heart of Himachal. You traverse rivers, cross wooden bridges, navigate dense forests, and ascend flower-strewn meadows before reaching the serene glacial lake of Mantalai, a campsite cradled by the towering peaks. The final push to the pass is a test of endurance and mountain sense, negotiating glaciers, steep ascents, and unpredictable high-altitude conditions. The moment you stand on the pass, gazing at the dramatic transition from Parvati’s green abundance to the stark, almost surreal Spiti Valley, you feel the Himalayas in their raw, unfiltered glory. <br>This is not a trek for the faint-hearted. The Pin Parvati Pass demands stamina, acclimatization, and respect for the high-altitude wilderness, where help is far away, and every stream crossing, rock scramble, or icy patch carries its own risks. Yet, it is precisely this challenge that makes it so unforgettable. Along the way, you also witness the fascinating coexistence of Himalayan cultures — from the forest-dwelling communities of Parvati Valley to the resilient villages of Spiti, shaped entirely by their environment. Every day brings new perspectives, new terrain, and new moments of awe that imprint themselves on your memory."
  },

  price: 56900,
  priceNote: "* Barshaini to Kaza (Kasol to Spiti crossover)",
  addons: {
    transport: null,
    offloadingbag: 6300,
    transportNote: "* Trekkers can request transport arrangements from Manali to Barshaini and from Kaza back to Manali. Transport will be organized on the spot, and costs are to be shared by trekkers directly.",
    offloadingNote: "* Max weight 9 kg per bag."
  },

  inclusionsNote: "🍽️ All Meals – From dinner on Day 1 to packed lunch on Day 10",


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

  downloadLink: "/docs/Packing_List.pdf",

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

{
  id: "miyar-valley-trek",
  name: "Miyar Valley Trek",
  tags: ["beginner", "intermediate", "glacier", "meadows", "lake"],
  difficulty: ["moderate"],
  season: ["monsoon"],
  month: ["july", "august", "september"],
  region: "himachal pradesh",
  duration: "7 Nights / 7 Days",
  coordinates: [
  [32.6785, 76.9143], // Udaipur (start)
  [32.7040, 76.9680], // Khanjar (last motorable village)
  [32.7330, 77.0035], // Yolling campsite
  [32.7620, 77.0350], // Zardong campsite
  [32.7905, 77.0700], // Palpu campsite
  [32.8175, 77.0930], // Gompa campsite
  [32.8350, 77.1025], // Tharang campsite
  [32.8510, 77.1130], // Miyar Glacier viewpoint / Kesar Yon Choo
  [32.9041, 77.0847], // Khanjar (return point / optional drive)
],

  heroImage:  "https://res.cloudinary.com/dr44hob9b/image/upload/v1766580505/miyar-valley-hero_sk7z3m.jpg",

  heroImages: [
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1766580505/miyar-valley-hero_sk7z3m.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1766580508/miyar-valley-hero1_th1gbs.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1766580500/miyar-valley-view2_chy4kv.webp",
  ],

  subtitle: "The Valley of a Thousand Glaciers",

  seo: {
    title: "Miyar Valley Trek | Itinerary, Cost & Dates | Planethimalayas",
    description:
      "Miyar Valley Trek is one of the most remote and pristine Himalayan trails in Himachal Pradesh. Walk through wildflower meadows, ancient villages, and massive glaciers in this true expedition-style trek."
  },

  overview: {
    facts: [
      { emoji: "⏳", label: "Trek Duration", value: "7 Nights / 7 Days" },
      { emoji: "⚡", label: "Trek Grade", value: "Moderate" },
      { emoji: "🏔️", label: "Max Altitude", value: "13,200 ft" },
      { emoji: "⚡", label: "Trek Distance", value: "~70 km" },
      { emoji: "🌤️", label: "Best Time", value: "July to September" },
      { emoji: "🗺️", label: "Region", value: "Lahaul, Himachal Pradesh" },
      { emoji: "📍", label: "Start Point", value: "Khanjer Village" },
      { emoji: "🏁", label: "End Point", value: "Khanjer Village" },
      { emoji: "🧥", label: "Cloakroom facility", value: "Not available" },
    ],
    snippet: `The Miyar Valley Trek is a rare passage into the true heart of Lahaul — a region that remained hidden from trekkers for decades, shielded behind the long closures of Rohtang Pass. With the opening of the Atal Tunnel, this remote Himalayan world finally became accessible during the monsoon months, when Lahaul transforms into a landscape of colour, water, and life. What lies beyond the tunnel is not just a trek, but an invitation into one of the least explored valleys of the Indian Himalayas.

<br>Miyar Valley rests quietly between the high walls of Zanskar and Chamba, unfolding in a graceful S-shaped stretch that runs for nearly 75 kilometres. It is a valley where distance is not measured in kilometres but in how deeply you step away from civilisation. As you walk along the Miyar Nallah, the trail alternates between forgotten mountain hamlets, vast river-fed meadows, and slopes bursting with alpine flowers — many of them rare Himalayan orchids that bloom freely here, untouched by crowds.

<br>The valley slowly reveals its true scale. Massive walls of rock rise on either side, glaciers spill down from hidden cirques, and the sound of flowing water follows you everywhere. The Miyar Glacier dominates the upper reaches — a colossal river of ice stretching deep toward Kang La, a high pass that once connected traders and shepherds to Zanskar. Near its snout lie serene, blue glacial pools, revered by locals and Buddhists alike, adding a quiet spiritual weight to the landscape.

<br>This trek is also a walk through mountaineering history. Long before trekkers arrived, climbers from across the world came here to test themselves against legendary peaks like Menthosa, the Fortress Peaks, and the Tharang massif. As you move through the valley, these giants stand fully exposed — from base to summit — their rugged faces streaked with colour, ice, and time. In places, memorials quietly remind you of those who never returned, grounding the beauty of the valley in deep respect.

<br>Life in Miyar unfolds gently. River deltas spread across the valley floor, streams braid and merge into the main river, and shepherds move slowly with their herds across open pastures. You cross icy tributaries, balance across glacial flows, and camp beside boulder-strewn basins where mountains loom close and the wind carries stories through the rocks. These are not fleeting moments — they linger.

<br>Culturally, Miyar reflects the soul of Lahaul. Buddhist stupas and Hindu shrines stand close together, prayer flags flutter beside stone temples, and locals carry names drawn from both traditions. This blending of cultures is subtle, lived-in, and deeply authentic — something you don’t observe as a tourist, but experience as a quiet witness passing through.

<br>The Miyar Valley Trek offers no single dramatic summit moment. Instead, it gives you something far rarer — prolonged solitude, untouched landscapes, and a sense of walking through a living Himalayan valley that still belongs to itself. Few trekkers ever make it here. Fewer still truly absorb it. If you find yourself walking these trails, know that you are among the fortunate ones.`
 },

  price: 14900,
  priceNote: "* Khanjer to Khanjer",

  addons: {
    transport: 6000,
    offloadingbag: 5000,
    transportNote:
      "* Manali to Manali",
    offloadingNote: "* Maximum weight 9kg / bag"
  },

  inclusionsNote:
    "🍽️ All Meals – Nutritious meals provided from dinner on Day 1 to lunch on Day 7",

  dates: [
  { label: "04 Jul - 10 Jul", start: "2026-07-04", end: "2026-07-10" },
  { label: "18 Jul - 24 Jul", start: "2026-07-18", end: "2026-07-24" },
  { label: "01 Aug - 07 Aug", start: "2026-08-01", end: "2026-08-07" },
  { label: "15 Aug - 21 Aug", start: "2026-08-15", end: "2026-08-21" },
  { label: "29 Aug - 04 Sep", start: "2026-08-29", end: "2026-09-04" },
  { label: "12 Sep - 18 Sep", start: "2026-09-12", end: "2026-09-18" },
  { label: "26 Sep - 02 Oct", start: "2026-09-26", end: "2026-10-02" },
],

  highlights: [
  "One of the most remote and least-crowded long treks in Himachal Pradesh",
  "Endless alpine meadows filled with wildflowers during peak summer",
  "Walk alongside massive glaciers and pristine glacial rivers of the Miyar Valley",
  "Experience ancient Lahauli villages and traditional high-altitude mountain life",
  "Panoramic views of iconic peaks including Mt. Menthosa (6,443 m), Tharang Peak (~6,100 m), Castle Peak (~6,300 m), and the dramatic Never Seen Tower (~6,100 m)"
],

  itinerary: [
    {
  day: 1,
  title: "Reporting Day at Khanjer Base Camp (10,200 ft)",
  details:
    "<strong>• Drive distance: ~150 km | Duration: 6–7 hours (from Manali).</strong><br>• Day 1 is the reporting day at Khanjer, the roadhead and base camp for the Miyar Valley Trek. Trekkers can either reach Manali and opt for our shared transport, or make independent arrangements to reach Khanjer directly.<br><br>The journey from Manali to Khanjer is a spectacular transition from the green valleys of Kullu to the stark, high-altitude terrain of Lahaul. Leaving Manali early, the route passes through the Atal Tunnel — a dramatic gateway that instantly changes the landscape. On the other side, the Lahaul region opens up with wide valleys, sparse vegetation, and towering brown-grey mountains shaped by wind and ice.<br><br>The road follows the Chandra River for a long stretch, cutting through deep gorges and open plains before reaching Udaipur, a culturally rich settlement known for the ancient Mrikula Devi Temple. From Udaipur, the route turns into the quieter Miyar Valley road, climbing steadily along the Miyar Nallah toward Khanjer. The scenery becomes increasingly remote as villages thin out and the sense of isolation grows.<br><br>Khanjer is the last motorable village of the valley — a small, stone-built settlement set against steep mountain walls. This is where the trek truly begins. After arrival, trekkers check into the base camp, meet the trek leader, and go through a detailed briefing covering the route, safety protocols, and expectations for the days ahead. The rest of the evening is spent resting, acclimatizing, and preparing for the long journey into the heart of Miyar Valley."
},
    {
  day: 2,
  title: "Khanjer to Yolling (12,345 ft)",
  details:
    "<strong>• Trek distance: ~9.2 km | Duration: 4–5 hours | Altitude gain: ~781 ft.</strong><br>• The trek officially begins today from Khanjer, the last motorable village of the Miyar Valley. Leaving the stone houses behind, the trail rises gently through a series of well-defined switchbacks, making for a steady and comfortable ascent. This is an easy–moderate walking day, designed to ease you into the rhythm of long Himalayan distances.<br><br>The lower sections of the trail pass directly through cultivated farmland — a rare sight on such a remote trek. From June to September, the valley comes alive with agricultural activity. You’ll walk past neatly arranged plots growing barley, seed potatoes, iceberg lettuce, cauliflowers, apples, and sea buckthorn. Locals also cultivate medicinal plants like kuth (Saussurea lappa) and mannu, plants that have supported mountain communities here for generations. These fertile fields exist thanks to a unique mix of alluvial, hill-type, and meadow soils found in this region.<br><br>As you gain height, the valley opens up dramatically. The trail skirts past small village clusters and an unexpected landmark — a flat, grassy patch locals occasionally use as a cricket ground, framed by towering mountains on all sides. It’s a reminder of how life adapts creatively even in the most remote corners of the Himalayas.<br><br>Midway through the trek, you pass near Tharang, one of the cultural heart points of the valley. From here, the views expand to reveal Menthosa Peak — Lahaul’s second-highest mountain, often called the crown of Miyar Valley. Its massive, icy walls dominate the skyline, drawing the attention of trekkers and climbers alike. The surrounding steep rock faces in this region have long attracted mountaineers, adding a quiet sense of adventure to the landscape.<br><br>The final stretch to Yolling is gentle. The switchbacks ease out, and the trail levels into a wide, open meadow. A clear mountain stream flows nearby, providing a soothing soundtrack as you arrive at camp. Yolling is an expansive, flat grassland — calm, scenic, and perfectly positioned to let your body adapt while offering your first true immersion into the vastness of Miyar Valley."
},
    {
  day: 3,
  title: "Yolling to Zardong (12,667 ft)",
  details:
    "<strong>• Trek distance: ~12 km | Duration: 5–6 hours.</strong><br>• One of the more engaging days on the trek, the walk begins gently before a short descent to a bridge, followed by a steep climb towards Gompa. You pass Gompa Nala, a shepherd’s hut, and the serene Gompa Lake before traversing boulder-strewn sections with mild ups and downs. The trail eventually opens into flat riverbanks offering beach-like walks beside gushing waters. As you move deeper into the valley, dramatic rocky massifs rise around you, the valley widens after every nala, and flower-filled meadows lead you to the beautiful campsite of Zardong."
},
   {
  day: 4,
  title: "Zardong to Palpu via Kesar Yon Choo (12,782 ft) | Optional trek to Miyar Glacier",
  details:
    "<strong>• Trek distance: ~12.5 km | Duration: 5–6 hours.</strong><br>• The trail largely follows the river, offering long, flat and soothing walks through the heart of the valley. You pass through Chhudong — a vast riverside meadow where the Miyar River flows broad and calm, guiding the route clearly towards Palpu. The campsite at Palpu lies near Castle Peak, with expansive views of the valley, Tharang massif, and on clear days, the crown jewel of Miyar — Mt. Menthosa. An optional extension takes you to Kesar Yon Choo, a stunning meadow dotted with seven icy ponds, beyond which a short boulder walk and stream crossing lead to the snout of the Miyar Glacier. After spending time at the glacier, you retrace your steps back to camp, crossing a couple of streams along the way."
},
    {
  day: 5,
  title: "Palpu to Gompa (12,828 ft)",
  details:
    "<strong>• Trek distance: ~12.5 km | Duration: 5–6 hours.</strong><br>• The day begins from the scenic campsite of Palpu, set beneath Castle Peak with sweeping views of the valley and the imposing Tharang massif. If the skies are clear, Mt. Menthosa often reveals itself in all its grandeur. The trail is largely gentle with minimal altitude gain and loss, making for a relaxed yet immersive walk deeper into the upper Miyar Valley. Wide valley floors, river-side stretches, and the growing sense of remoteness define today’s journey as you gradually make your way to the peaceful campsite at Gompa."
},
    {
  day: 6,
  title: "Gompa to Tharang (12,270 ft)",
  details:
    "<strong>• Trek distance: ~7.5 km | Duration: 4–5 hours.</strong><br>• The trail retraces its way down the valley, staying close to the Miyar River for most of the day. Long, flat walks through the expansive meadows of Chhudong make this a relaxed descent, with the river flowing wide and calm beside you, its waters stretching all the way toward the glacier snout. Beyond Chhudong, the valley narrows and the terrain shifts into boulder sections interspersed with cold stream crossings, including a stream descending from the valley below Never Seen Tower and Castle Peak. The route alternates between gentle riverside stretches and rocky patches before opening out again as you approach the familiar campsite at Tharang."
},
    {
  day: 7,
  title: "Tharang to Khanjer – Drive to Manali (6,730 ft)",
  details:
    "<strong>• Trek distance: ~7.5 km | Duration: 6–7 hours.</strong><br>• The final walk of the trek unfolds through long, dramatic flat stretches as you move towards the Thanpattan region — a landscape so vast and cinematic it often feels straight out of a classic western film. The easy, almost level trail allows time to absorb the grandeur of the Miyar Valley one last time, with wide-open views and a deep sense of completion. Upon reaching Khanjer, the trek concludes. If opted, a vehicle awaits for the return drive to Manali via Udaipur and the Atal Tunnel, a scenic 6-7 hour journey that brings you back from the raw isolation of the valley to the bustle of civilization."
}
  ],

  didYouKnow: [
    "Miyar Valley has over 100 mapped glaciers, earning it the title ‘Valley of a Thousand Glaciers’.",
    "The valley remains inaccessible for nearly half the year due to heavy snowfall and isolation.",
    "Many sections of the trail were historically used by shepherds moving between high summer pastures.",
    "Miyar’s wildflower diversity rivals the more famous Valley of Flowers, but sees a fraction of the visitors.",
    "The region lies close to the Indo-Tibetan border and remains strategically sensitive.",
    "The Miyar Glacier stretches nearly 36 km and climbs all the way to Kang La (17,600 ft), a high-altitude pass that historically connected the Miyar Valley of Lahaul with the Zanskar region."
  ],

  howToReach: {
    air: "Nearest Airport: Bhuntar (Kullu). From there, drive to Manali and onward to Udaipur.",
    train: "Nearest Railway Station: Joginder Nagar or Chandigarh. Continue by road to Manali → Udaipur.",
    road:
      "From Manali: ~150 km via Atal Tunnel or Rohtang Pass (seasonal). Roads depend heavily on weather conditions.",
    travelTip:
      "Plan buffer days for travel, as landslides and weather delays are common in Lahaul."
  },

  gallery: [
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1766580500/miyar-valley-view2_chy4kv.webp",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1766580505/miyar-valley-hero_sk7z3m.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1766580502/miyar-valley-view1_cdxh8x.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1766580510/miyar-valley-view_poouaw.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1766580508/miyar-valley-hero1_th1gbs.jpg",
  ],

  downloadLink: "/docs/Packing_List.pdf",

  faqs: {
  questions: [
    {
      question: "Who can participate in the Miyar Valley Trek?",
      answer:
        "The Miyar Valley Trek can be attempted by fit beginners as well as experienced trekkers. While the trail itself is not technically difficult, the long walking days, remote terrain, and river crossings can be physically and mentally demanding. Prior trekking experience is beneficial but not mandatory."
    },
    {
      question: "How should I prepare for the Miyar Valley Trek?",
      answer:
        "A minimum of 6–8 weeks of physical preparation is recommended. Focus on cardiovascular endurance through running, cycling, or stair climbing, along with leg and core strength training. Practicing long-distance walks on consecutive days will help prepare for the sustained effort required on the trek."
    },
    {
      question: "What permits are required for Indians and foreign nationals?",
      answer:
        "Indian trekkers require local forest permissions, which are arranged by the trek operator. Foreign nationals need an Inner Line Permit due to the valley’s proximity to the Indo-Tibetan border. These permits must be arranged in advance and require valid identification documents."
    },
    {
      question: "How serious are altitude-related issues on this trek?",
      answer:
        "The trek involves gradual altitude gain, making acclimatization relatively manageable. However, due to the length of the trek and continuous exposure above 12,000 ft, Acute Mountain Sickness (AMS) remains a possibility. Proper hydration, slow pacing, and adherence to acclimatization protocols are essential."
    },
    {
      question: "What is the weather like in the Miyar Valley?",
      answer:
        "Weather in the Miyar Valley is generally stable during the trekking season but can change quickly. Days are pleasant with clear skies, while nights can be cold, especially at higher camps. Occasional rain or snowfall at upper elevations is possible depending on the month."
    },
    {
      question: "Are there river crossings on the trek?",
      answer:
        "Yes, the trek involves multiple river and stream crossings, especially near glacier-fed sections. Water levels are usually manageable but can rise during afternoons due to snowmelt. Early starts and proper guidance make these crossings safe."
    },
    {
      question: "Is mobile network available during the trek?",
      answer:
        "Mobile network connectivity is available only till Udaipur. Beyond Khanjer, there is no mobile signal throughout the duration of the trek, adding to its remoteness."
    },
    {
      question: "What is the best time to do the Miyar Valley Trek?",
      answer:
        "The best time to trek in the Miyar Valley is from mid-June to late September. This period offers accessible trails, blooming alpine meadows, and relatively stable weather conditions."
    },
    {
      question: "Is the Miyar Valley Trek safe?",
      answer:
        "Yes, when undertaken with proper planning and experienced support, the trek is safe. The route is well-defined, and risks are primarily related to weather, river crossings, and altitude, all of which are managed through careful scheduling and acclimatization."
    }
  ]
},

  faqsLink: "/pages/faqs-and-articles",
},

  
  {
    id: "hampta-pass-trek",
    name: "Hampta Pass Trek",
    tags: ["intermediate", "pass", "crossover", "kullu", "lahaul", "lake", "glacier", "meadows"],
    difficulty: ["moderate"],
    season: ["monsoon", "autumn"],
    month: ["july", "august", "september", "october"],
    duration: ["4 Nights / 5 Days"],
    region: "himachal pradesh",
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
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1755535059/hampta-pass-2_n6ngdu.jpg",
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
        { emoji: "🧥", label: "Cloakroom facility", value: "Not available" },
      ],
      snippet: 'Imagine stepping onto a trail where every single day introduces you to a brand-new Himalayan world.<br>The Hampta Pass trek in Himachal Pradesh begins deep inside the lush Kullu Valley, where pine forests, maple groves, and apple orchards wrap the trail in shades of green. The early sections feel warm and welcoming — gentle gradients, forest canopies, and the soft roar of the Rani Nala accompanying you through the first stretch.<br>As you climb higher, the landscape unfolds into wide alpine meadows, carpeted with monsoon wildflowers and crisscrossed with snow-fed streams. These meadows — especially around Jwara — are among the prettiest on any Himalayan trek, and they offer crystal-clear views of the surrounding Pir Panjal range.<br>The climb towards the pass brings a dramatic shift. The valley narrows, the terrain becomes glacial, and the mountain walls rise sharply on either side. This is where the Hampta Pass trail begins to feel truly alpine. As you gain height, two iconic Himalayan giants — Mt. Deo Tibba (19,688 ft) and Mt. Indrasan (20,413 ft) — stand proudly over the horizon. Their hanging glaciers and sharp ridgelines dominate the skyline, adding a thrilling high-altitude backdrop to the final approach.<br>At Hampta Pass (14,000 ft), everything changes. Standing on the saddle feels like stepping across a natural border between worlds. Behind you lies the lush greenery of Manali and Kullu; ahead lies the stark, moon-like desert of Lahaul–Spiti. The contrast is so sudden and so intense that it feels almost unreal — barren ridges, rugged cliffs, brown mountains, and vast open valleys stretching endlessly into Spiti.<br>The descent towards Shea Goru and Chhatru takes you through dramatic glacial terrain, moraine fields, and icy river crossings — the kind of variety few short Himalayan treks offer.<br>And then comes the perfect finale: A scenic drive to the legendary Chandratal Lake — the high-altitude, crescent-shaped blue lake tucked deep within Spiti. Visiting Chandratal after the Hampta Pass trek is like walking into a different dimension — turquoise water, snow peaks reflecting in the lake, and the crystal-clear Spiti sky arching overhead. Many trekkers consider this the highlight of the entire Hampta experience.<br>In just 5 days, the Hampta Pass trek packs in forests, meadows, waterfalls, river-crossings, glacial valleys, high-altitude pass, and the crossover into Spiti — making it one of the most cinematic, diverse, and rewarding treks in the Indian Himalayas. Add the views of Deo Tibba & Indrasan, and the optional visit to Chandratal Lake, and this becomes a must-do trek for anyone seeking adventure, variety, and unforgettable Himalayan landscapes.'
    },

    price: 11900,
    priceNote: "* Manali to Manali (including Chandratal)",
    addons: {
      offloadingbag: 2800,
      offloadingNote: "* Maximum weight 9kg  /bag"
    },

    inclusionsNote: "🍽️ All Meals – Nutritious meals provided from lunch on Day 1 to breakfast on Day 5",

    dates: [
  { label: "11 Jul - 15 Jul", start: "2026-07-11", end: "2026-07-15" },
  { label: "12 Jul - 16 Jul", start: "2026-07-12", end: "2026-07-16" },

  { label: "18 Jul - 22 Jul", start: "2026-07-18", end: "2026-07-22" },
  { label: "19 Jul - 23 Jul", start: "2026-07-19", end: "2026-07-23" },

  { label: "25 Jul - 29 Jul", start: "2026-07-25", end: "2026-07-29" },
  { label: "26 Jul - 30 Jul", start: "2026-07-26", end: "2026-07-30" },

  { label: "01 Aug - 05 Aug", start: "2026-08-01", end: "2026-08-05" },
  { label: "02 Aug - 06 Aug", start: "2026-08-02", end: "2026-08-06" },

  { label: "08 Aug - 12 Aug", start: "2026-08-08", end: "2026-08-12" },
  { label: "09 Aug - 13 Aug", start: "2026-08-09", end: "2026-08-13" },

  { label: "15 Aug - 19 Aug", start: "2026-08-15", end: "2026-08-19" },
  { label: "16 Aug - 20 Aug", start: "2026-08-16", end: "2026-08-20" },

  { label: "22 Aug - 26 Aug", start: "2026-08-22", end: "2026-08-26" },
  { label: "23 Aug - 27 Aug", start: "2026-08-23", end: "2026-08-27" },

  { label: "29 Aug - 02 Sep", start: "2026-08-29", end: "2026-09-02" },
  { label: "30 Aug - 03 Sep", start: "2026-08-30", end: "2026-09-03" },

  { label: "05 Sep - 09 Sep", start: "2026-09-05", end: "2026-09-09" },
  { label: "06 Sep - 10 Sep", start: "2026-09-06", end: "2026-09-10" },

  { label: "12 Sep - 16 Sep", start: "2026-09-12", end: "2026-09-16" },
  { label: "13 Sep - 17 Sep", start: "2026-09-13", end: "2026-09-17" },

  { label: "19 Sep - 23 Sep", start: "2026-09-19", end: "2026-09-23" },
  { label: "20 Sep - 24 Sep", start: "2026-09-20", end: "2026-09-24" },

  { label: "26 Sep - 30 Sep", start: "2026-09-26", end: "2026-09-30" },
  { label: "27 Sep - 01 Oct", start: "2026-09-27", end: "2026-10-01" },

  { label: "03 Oct - 07 Oct", start: "2026-10-03", end: "2026-10-07" },
  { label: "04 Oct - 08 Oct", start: "2026-10-04", end: "2026-10-08" },
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

    downloadLink: "/docs/Packing_List.pdf",

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
  id: "deo‑tibba‑basecamp‑trek",
  name: "Deo Tibba Base Camp Trek",
  tags: ["intermediate", "pro", "basecamp", "lake", "kullu", "glacier", "meadows"],
  difficulty: ["moderate", "difficult"],
  season: ["monsoon"],
  month: ["july", "august", "september", "october"],
  region: "himachal pradesh",
  duration: "5 Nights / 6 Days",
  coordinates: [
    // approximate route waypoints (Manali → Chikka → Seri → Tainta/Chandratal → basecamp)
    [32.2430, 77.1892], // Manali (start) – approx
    [32.3360, 77.1910], // Chikka
    [32.4020, 77.2300], // Seri meadow
    [32.4300, 77.2600], // Tainta / near Chandratal approach
    [32.4450, 77.2750]  // Deo Tibba Base Camp area
  ],

  heroImage: "https://res.cloudinary.com/dr44hob9b/image/upload/v1764939634/deo-tibba-base-camp-hero_uypfkf.jpg",  // replace with actual image URL
  heroImages: ["https://res.cloudinary.com/dr44hob9b/image/upload/v1764939634/deo-tibba-base-camp-hero_uypfkf.jpg",
                "https://res.cloudinary.com/dr44hob9b/image/upload/v1764939896/deo-tibba-base-camp-hero1_k2zkxa.jpg",
                "https://res.cloudinary.com/dr44hob9b/image/upload/v1764939931/deo-tibba-base-camp-hero2_a3b3j0.jpg",
                "https://res.cloudinary.com/dr44hob9b/image/upload/v1764940015/deo-tibba-base-camp-hero3_fgxjxd.jpg",
              ],  // replace with actual gallery image URLs

  subtitle: "Wildflower Trails & Glacial Meadows of the Himalayas",

  seo: {
    title: "Deo Tibba Base Camp Trek | Itinerary, Cost & Dates | Planethimalayas",
    description: "Deo Tibba Base Camp Trek (≈ 14,700 ft) near Manali passing through forests, lush meadows, glacial streams and reaching high‑altitude base camp — perfect 6‑day alpine adventure."
  },

  overview: {
    facts: [
      { emoji: "⏳", label: "Trek Duration", value: "5 Nights / 6 Days" },
      { emoji: "⚡", label: "Trek Grade", value: "Moderate / Difficult" },
      { emoji: "🏔️", label: "Max Altitude", value: "≈ 14,698 ft" },
      { emoji: "⚡", label: "Trek Distance", value: "≈ 40 km" },
      { emoji: "🌤️", label: "Best Time", value: "July–October" },
      { emoji: "🗺️", label: "Region", value: "Kullu Valley, Himachal Pradesh" },
      { emoji: "📍", label: "Start Point", value: "Manali" },
      { emoji: "🏁", label: "End Point", value: "Manali" },
      { emoji: "🧥", label: "Cloakroom facility", value: "Not available" }
    ],
    snippet: `Nestled in the heart of the Pir Panjal range, the Deo Tibba Base Camp Trek is a thrilling alpine adventure for trekkers seeking both serenity and spectacle. Starting near Manali, the trail winds through dense forests of pine, spruce, fir, oak, and silver birch, opening up to lush meadows that seem kissed by the Himalayas themselves. Snow-capped peaks — Deo Tibba (6,001 m), Norbu Peak (5,226 m), and Jagatsukh Peak (5,050 m) — dominate the skyline, while the emerald waters of Chota Chandratal mirror the sky in a magical display of alpine beauty.<br>Every step tells a story: cross glacial streams, climb gentle ridges, and soak in panoramic views that unfold like chapters of a Himalayan epic. Ideal for trekkers with moderate experience, this trail blends accessible challenge with breathtaking scenery, making it one of the most captivating high-altitude treks in Himachal Pradesh.`
  },

  price: 13400,   // placeholder — set as per your cost structure
  priceNote: "* Manali to Manali",

  addons: {
    transport: null,  // placeholder for any airport/road transfers
    offloadingbag: 1500,
    transportNote: null,
    offloadingNote: "* Maximum weight 9kg/bag"
  },

  inclusionsNote: "🍽️ All Meals – from lunch on Day 1 to breakfast on Day 6",

  dates: [
  { label: "11 Jul - 16 Jul", start: "2026-07-11", end: "2026-07-16" },
  { label: "12 Jul - 17 Jul", start: "2026-07-12", end: "2026-07-17" },

  { label: "18 Jul - 23 Jul", start: "2026-07-18", end: "2026-07-23" },
  { label: "19 Jul - 24 Jul", start: "2026-07-19", end: "2026-07-24" },

  { label: "25 Jul - 30 Jul", start: "2026-07-25", end: "2026-07-30" },
  { label: "26 Jul - 31 Jul", start: "2026-07-26", end: "2026-07-31" },

  { label: "01 Aug - 06 Aug", start: "2026-08-01", end: "2026-08-06" },
  { label: "02 Aug - 07 Aug", start: "2026-08-02", end: "2026-08-07" },

  { label: "08 Aug - 13 Aug", start: "2026-08-08", end: "2026-08-13" },
  { label: "09 Aug - 14 Aug", start: "2026-08-09", end: "2026-08-14" },

  { label: "15 Aug - 20 Aug", start: "2026-08-15", end: "2026-08-20" },
  { label: "16 Aug - 21 Aug", start: "2026-08-16", end: "2026-08-21" },

  { label: "22 Aug - 27 Aug", start: "2026-08-22", end: "2026-08-27" },
  { label: "23 Aug - 28 Aug", start: "2026-08-23", end: "2026-08-28" },

  { label: "29 Aug - 03 Sep", start: "2026-08-29", end: "2026-09-03" },
  { label: "30 Aug - 04 Sep", start: "2026-08-30", end: "2026-09-04" },

  { label: "05 Sep - 10 Sep", start: "2026-09-05", end: "2026-09-10" },
  { label: "06 Sep - 11 Sep", start: "2026-09-06", end: "2026-09-11" },

  { label: "12 Sep - 17 Sep", start: "2026-09-12", end: "2026-09-17" },
  { label: "13 Sep - 18 Sep", start: "2026-09-13", end: "2026-09-18" },

  { label: "19 Sep - 24 Sep", start: "2026-09-19", end: "2026-09-24" },
  { label: "20 Sep - 25 Sep", start: "2026-09-20", end: "2026-09-25" },

  { label: "26 Sep - 01 Oct", start: "2026-09-26", end: "2026-10-01" },
  { label: "27 Sep - 02 Oct", start: "2026-09-27", end: "2026-10-02" },

  { label: "03 Oct - 08 Oct", start: "2026-10-03", end: "2026-10-08" },
  { label: "04 Oct - 09 Oct", start: "2026-10-04", end: "2026-10-09" },
],

  highlights: [
    "The Deo Tibba Base Camp Trek lies in the Pir Panjal range and offers close‑up views of peaks like Deo Tibba (6,001 m), Indrasan (6,221 m), Norbu (5,226 m) and Jagatsukh (5,050 m) — a stunning show of the western Himalayas’ grandeur.",
    "The meadows on this trail burst into wildflower bloom in monsoon — rhododendrons, Himalayan herbs, blue poppies and alpine anemones carpet the ground.",
    "The glacial stream Jagatsukh Nala along the trail forms a refreshing river‑meadow ecosystem — dense forest, waterfalls, logs and glacial water — giving a mix of forest and alpine terrain within a few hours.",
    "Chota Chandratal near the base camp offers a surreal glacial‑lake experience at high altitude (~14,700 ft) — ideal for trekking enthusiasts who love alpine lakes and mountain reflections.",
    "Due to gradual ascents, mixed terrain of meadows, moraines and streams, this trek is considered Moderate — a fine choice for trekkers with good fitness and some trekking experience."
  ],

  "itinerary": [
  {
    "day": 1,
    "title": "Manali → Khanol → Chika (3,200 m) | Drive: 20 km + Trek: 2 km | Duration: ~4–5 hrs",
    "details": "Your adventure begins early from Manali, ideally after a day of acclimatization. We drive past Jagatsukh village on a winding dirt road, climbing past the Jagatsukh Nala to reach the Khanol dam site. From here, the trek starts with a gentle ascent into lush pine and oak forests, crossing the Jagatsukh river via a rustic bridge. After 2–3 hours of trekking, the trail opens up to the Chika meadow, dotted with huts and the Nag mandir. The gurgling river, forested backdrop, and panoramic peaks provide a magical first Himalayan sunset."
  },
  {
    "day": 2,
    "title": "Chika → Seri (3,900 m) | Trek Distance: 6 km | Duration: ~6–7 hrs",
    "details": "Wake up to crisp mountain air and follow the trail along the Jagatsukh river. Forests slowly give way to shrubs, wildflowers, and rocky paths. You cross streams and boulder fields while enjoying occasional glimpses of surrounding peaks. The valley opens up to the expansive Seri meadow — a stunning glacial field with streams weaving through it, flanked by towering peaks. Tainta waterfall cascades in the distance, hinting at the wonders of tomorrow. Spend the evening soaking in the golden light over Norbu, Jagatsukh, and Malana Pass."
  },
  {
    "day": 3,
    "title": "Seri → Tainta (3,900 m) | Trek Distance: 3 km | Duration: ~3–4 hrs",
    "details": "Today begins with an easy stroll across Seri’s grassy meadows, followed by multiple stream crossings and a steep ascent along the Tainta waterfall. Navigate rocks and boulders leading to a moraine field. Emerging into the Tainta meadow, you are surrounded by soaring snow-capped peaks and glaciers. The vast blue sky above and the serene alpine environment make this campsite perfect for acclimatization and absorbing the majesty of Deo Tibba, Norbu, and Jagatsukh peaks."
  },
  {
    "day": 4,
    "title": "Tainta → Deo Tibba Base Camp → Mini Chandratal → Tainta (4,500 m) | Trek Distance: 10 km | Duration: ~6–8 hrs",
    "details": "Start early carrying only essentials and lunch. The trail gently climbs across the moraine field to reach Deo Tibba Base Camp. From here, a steeper ascent leads to the turquoise Mini Chandratal lake, with the majestic Deo Tibba peak towering above. The rocky, unmarked trail, switchbacks, and alpine meadows make this a thrilling high-altitude adventure. After spending time at this pristine lake, retrace your path back to Tainta for the night, reflecting on the day’s spectacular journey."
  },
  {
    "day": 5,
    "title": "Tainta → Chika (3,200 m) | Trek Distance: 9 km | Duration: ~6 hrs",
    "details": "Today, you retrace your steps through rocky trails, meadows, and river crossings back to Chika. The descent is steep in places, demanding careful footing, but each turn is a chance to relive the magical moments of the trek. The Jagatsukh river continues to accompany you, its melodic gurgle a soothing soundtrack to the day's journey. Evening at the campsite offers a moment to reflect on the highs of the Deo Tibba experience."
  },
  {
    "day": 6,
    "title": "Chika → Khanol → Manali (≈ 2,050 m) | Drive: 20 km + Trek: 2 km | Duration: ~4–5 hrs",
    "details": "After breakfast, trek down gently to Khanol where vehicles await. The scenic drive through mountain valleys brings you back to Manali. Though the trail retraces your steps, every view now carries memories of alpine meadows, sparkling streams, cascading waterfalls, and towering peaks. As the trek concludes, you carry a sense of awe, adventure, and accomplishment that only the Himalayas can instill."
  }
],

  didYouKnow: [
  "The name “Deo Tibba” literally means ‘Hill of the Gods’ — local Himachali folklore says that the dome‑shaped peak was considered the seat of deities, and the neighbouring Indrasan Peak was believed to be the throne from where gods would convene, adding a spiritual aura to the trek.",
  "As you trek through the lower forests, you may encounter grazing herds of native shepherd‑communities like the Gaddi shepherds — shepherds and local herders who still practice traditional trans‑humance. Their flocks often move along the lower valleys in summers, giving trekkers a glimpse of authentic mountain life.",
  "The forest stretch from Khanol/Chika onwards is rich in alpine‑forest flora: conifer trees (pine, fir, cedar/deodar, oak), wild berries, herbs and a variety of mountain flowers — this ecosystem supports wildlife like marmots, blue‑sheep and high‑altitude birds, so it’s not uncommon to spot these during early morning or dusk.",
  "The meadow called Seri Meadow was once a glacial lake — over centuries, glaciers receded, leaving behind a broad alpine pasture dotted with streams and seasonal wild‑flowers, offering a surreal transition from icy past to lush greenery.",
  "The so‑called “mini‑lake” Chota Chandratal (near the base camp) — though often confused in name with the more famous Chandra‑tal of Spiti — is a pristine glacial‑fed waterbody at high altitude (~4,400–4,500 m), offering serene mirror‑like reflections of towering peaks, making it a hidden gem for photography and solitude seekers.",
  "Because the trail shifts rapidly — from thick evergreen forests, to flower‑strewn meadows, to rocky moraines and glacial terrain — you experience almost all major Himalayan ecosystems on one trek: forest, meadow, alpine pasture, and glacial valley, making Deo Tibba Base Camp Trek unusually diverse.",
  "Even though the region lies close to more frequented areas around Manali, the harsh terrain and spiritual beliefs kept it sparsely visited historically — which has helped preserve the ecology and local culture intact, making this trek a rare blend of natural beauty and cultural legacy."
],

  howToReach: {
    air: "Nearest Airport: Bhuntar Airport (Kullu). From Bhuntar → drive to Manali, then Jagatsukh/Khanol to begin trek.",
    train: "Nearest major rail link: Joginder Nagar Railway. From there travel by road to Manali and Jagatsukh/Khanol.",
    road: "Regular bus/jeep or taxi from Manali to Jagatsukh/Khanol (start point). Manali is well connected by bus from Delhi/Chandigarh.",
    travelTip: "Reach Manali a day early to stock up essentials; carry warm clothes — nights at Tainta & Chota Chandratal get cold even in summers. Also, water from glacial streams may be unreliable — carry purification tablets."
  },

  gallery: [
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1764939634/deo-tibba-base-camp-hero_uypfkf.jpg",
                "https://res.cloudinary.com/dr44hob9b/image/upload/v1764939896/deo-tibba-base-camp-hero1_k2zkxa.jpg",
                "https://res.cloudinary.com/dr44hob9b/image/upload/v1764939931/deo-tibba-base-camp-hero2_a3b3j0.jpg",
                "https://res.cloudinary.com/dr44hob9b/image/upload/v1764940015/deo-tibba-base-camp-hero3_fgxjxd.jpg",
                "https://res.cloudinary.com/dr44hob9b/image/upload/v1764939326/deo-tibba-base-camp-view1_rkrcmz.jpg",
                "https://res.cloudinary.com/dr44hob9b/image/upload/v1764939361/deo-tibba-base-camp-view3_vcnuwr.jpg",
                "https://res.cloudinary.com/dr44hob9b/image/upload/v1764939379/deo-tibba-base-camp-view2_jmwf4a.jpg",
                "https://res.cloudinary.com/dr44hob9b/image/upload/v1764940257/deo-tibba-base-camp-view5_fcpnal.jpg",
                "https://res.cloudinary.com/dr44hob9b/image/upload/v1764940148/deo-tibba-base-camp-view4_rlgpib.jpg",
                "https://res.cloudinary.com/dr44hob9b/image/upload/v1764940015/deo-tibba-base-camp-hero3_fgxjxd.jpg",
                "https://res.cloudinary.com/dr44hob9b/image/upload/v1764939534/deo-tibba-base-camp-view11_ykuida.jpg",
                "https://res.cloudinary.com/dr44hob9b/image/upload/v1764939527/deo-tibba-base-camp-view7_q8zidx.jpg",
                "https://res.cloudinary.com/dr44hob9b/image/upload/v1764939413/deo-tibba-base-camp-view6_ktqf0o.jpg",
                // add actual URLs of images for Chikka, Seri, Tainta meadows, Deo Tibba peaks, Chandratal, campsite tents etc.
  ],

  downloadLink: "/docs/Deo_Tibba_Packing_List.pdf",

  faqs: {
    questions: [
      {
        question: "Who can participate in the Deo Tibba Base Camp trek?",
        answer: "This trek is suitable for individuals with good physical fitness and some basic trekking experience. While the gradients are moderate, there are rocky stretches, stream crossings and high‑altitude camps."
      },
      {
        question: "What should I pack for the Deo Tibba trek?",
        answer: "Essential items include waterproof trekking shoes, layered clothing, 40–50 L rucksack with rain cover, thermal wear, sleeping bag for cold nights (high altitude), headlamp, trekking poles, water purification tablets. For a comprehensive packing list navigate to Packing List in this section to download the pdf."
      },
      {
        question: "Is camping the only accommodation available?",
        answer: "Yes — accommodation is in tents/campsites throughout the trek, from Chikka up to Base Camp and return."
      },
      {
        question: "When is the best time to do Deo Tibba Base Camp trek?",
        answer: "The ideal window is monsoon when meadows bloom and trails open, and September–October (post‑monsoon) when skies are clear and mountain views are stunning."
      },
      {
        question: "What kind of terrain and challenges to expect?",
        answer: "Terrain is a mix of forest trails, meadows, rocky and moraine paths, some stream crossings. There are moderate ascents. While altitude isn’t extreme technical, nights are cold and weather can be unpredictable — good acclimatisation and proper gear are essential."
      },
      {
        question: "Do we visit any glacial lake on this trek?",
        answer: "Yes — the trek includes a visit to the glacial lake Chota Chandratal near the base‑camp area, offering ethereal alpine‑lake scenery."
      }
    ]
  },

  faqsLink: "/pages/faqs-and-articles"
},

 {
    id: "hampta-circuit-trek",
    name: "Hampta Circuit Trek",
    tags: ["beginner", "family", "kullu", "meadows"],
    difficulty: ["easy"],
    season: ["summer", "monsoon", "autumn",],
    month: ["may", "june", "july", "august", "september", "october", "november", "december"],
    duration: ["4 Nights / 5 Days"],
    region: "himachal pradesh",
    coordinates: [
        [32.2330, 77.1830], // Jagatsukh (start)
        [32.2365, 77.1895], // Bogi
        [32.2408, 77.2000], // Sarotu
        [32.2450, 77.2100], // Kharmandari
        [32.2485, 77.2150], // Sethan Dome
        [32.2408, 77.2000], // Sarotu (return)
        [32.2330, 77.1830], // Jobri (end)
    ],
    heroImage: "https://res.cloudinary.com/dr44hob9b/image/upload/v1766587994/hampta-circuit-pic3_ayniis.webp",
    
    heroImages: [
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1766587994/hampta-circuit-pic3_ayniis.webp",
        "https://res.cloudinary.com/dr44hob9b/image/upload/v1766587995/hampta-circuit-pic4_py4iwc.jpg",
        "https://res.cloudinary.com/dr44hob9b/image/upload/v1766587997/hampta-circuit-pic1_hlge2l.jpg",
        "https://res.cloudinary.com/dr44hob9b/image/upload/v1766587998/hampta-circuit-pic2_i5jros.jpg",
    ],

    subtitle: "A Scenic Offbeat Himalayan Circuit",

    seo: {
        title: "Hampta Circuit Trek | Itinerary, Cost & Dates | Planethimalayas",
        description: "Hampta Circuit Trek (11,090 ft) is a less-traveled Himalayan trail from Jagatsukh to Sethan Dome, winding through forests, meadows, and panoramic peaks. Ideal for beginners and first-time trekkers seeking an offbeat adventure."
    },

    overview: {
        facts: [
            { emoji: "⏳", label: "Trek Duration", value: "4 Nights / 5 Days" },
            { emoji: "⚡", label: "Trek Grade", value: "Easy" },
            { emoji: "🏔️", label: "Max Altitude", value: "4,200 m (Sethan Dome)" },
            { emoji: "⚡", label: "Trek Distance", value: "Approx. 35 Km" },
            { emoji: "🌤️", label: "Best Time", value: "May–January" },
            { emoji: "🗺️", label: "Region", value: "Northern Himachal Pradesh, Pir Panjal Range" },
            { emoji: "📍", label: "Start Point", value: "Jagatsukh Village (Near Manali)" },
            { emoji: "🏁", label: "End Point", value: "Jobri / Manali" },
            { emoji: "🧥", label: "Cloakroom facility", value: "Not available" },
        ],

    snippet: "Hampta Circuit Trek is an enchanting offbeat Himalayan adventure that weaves together lush forests, alpine meadows, glacial streams, and panoramic mountain vistas, offering a perfect blend of nature, culture, and adventure.<br> The trek begins from the quaint village of Jagatsukh, near Manali, and gradually ascends through dense oak and pine forests, where the crisp mountain air and the scent of pine invigorate every step. As the trail opens into expansive alpine meadows, trekkers are greeted by a riot of wildflowers, gentle streams, and grazing livestock, creating a picture-perfect Himalayan setting. Day by day, the route takes adventurers across charming hamlets, verdant pastures, and rocky ridges, culminating at the summit of Sethan Dome (4,200 m), where breathtaking 360° views of the Pir Panjal and Dhauladhar ranges unfold. Unlike the popular Hampta Pass trek, this circuit offers solitude, offbeat paths, and intimate encounters with the high-altitude wilderness, making each campsite a serene escape.<br> The trek is ideal for beginners, first-time trekkers, and families, combining moderate trekking, stunning scenery, and immersive experiences in the Himalayas’ natural and cultural landscapes, making Hampta Circuit a hidden gem in Himachal Pradesh."
    },

    price: 10400,
    priceNote: "* Manali to Manali",
    addons: {
        offloadingbag: 1250,
        offloadingNote: "* Maximum weight 9kg / bag"
    },

    inclusionsNote: "🍽️ All Meals – Nutritious meals provided from packed lunch on Day 1 to breakfast on Day 5",

    highlights: [
        "Begin trek from Jagatsukh village, near Manali",
        "Pass through lush oak and pine forests with gentle streams",
        "Camp at scenic locations: Bogi, Sarotu, Kharmandari",
        "Summit Sethan Dome (4,200 m) with panoramic views of Pir Panjal & Dhauladhar ranges",
        "Experience an offbeat Himalayan adventure away from crowded trails",
        "Suitable for first-time trekkers and families",
        "Enjoy a mix of culture, nature, and high-altitude scenic landscapes",
    ],

    itinerary: [
  {
    day: 1,
    title: "Manali – Jagatsukh – Bogi (2,015 m) | 3 Hours Trek",
    details: "<strong>• Drive: ~20 mins | Trek: ~3 km / 3 hrs</strong><br>• Your journey begins with a short scenic drive from Manali to the quiet village of Jagatsukh—an old Himalayan settlement surrounded by apple orchards and traditional stone-and-wood houses. From here, the trail climbs gently into a world of oak, cedar, and pine forests. The sounds of birds, the scent of moist earth, and filtered sunlight accompany you as you walk above the Manalsu valley. Small clearings open up to views of the Pir Panjal range before the forest gradually gives way to Bogi, a peaceful meadow campsite tucked between tall pines. Settle into camp, enjoy hot tea, and soak in your first night in the mountains under a star-filled sky."
  },
  {
    day: 2,
    title: "Bogi to Sarotu | 5–6 Hours Trek",
    details: "<strong>• Trek: ~8 km | Duration: 5–6 hrs</strong><br>• The day begins with a long, steady ascent through dense forests alive with the calls of Himalayan magpies and thrushes. As you gain altitude, the trees start thinning out, opening into wide alpine pastures where shepherds graze their flocks in summer. The trail crosses gentle streams and flower-dotted grasslands before emerging onto the vast open plateau of Sarotu. This campsite sits like a balcony above the valley, offering sweeping views of snow-lined ridges and distant glacier basins. Feel the temperature drop as evening settles across the meadows. Overnight stay at Sarotu, surrounded by wide skies and complete Himalayan silence."
  },
  {
    day: 3,
    title: "Sarotu to Kharmandari | 4–5 Hours Trek",
    details: "<strong>• Trek: ~7 km | Duration: 4–5 hrs</strong><br>• Today’s trail takes you deeper into the wilderness. Leaving Sarotu, you walk across rolling meadows before the terrain shifts into a mix of boulder sections, forest patches, and high-altitude shrubs. This stretch often feels untouched—wild, raw, and wonderfully quiet. The final approach to Kharmandari moves along a ridge with open views of steep valleys below. The campsite at Kharmandari is remote and serene, offering uninterrupted views of forested slopes and jagged ridgelines. This is your chance to truly disconnect and enjoy the solitude that makes the Hampta Circuit so special."
  },
  {
    day: 4,
    title: "Kharmandari – Sethan Dome (4,200 m) – Return to Sarotu | 6–7 Hours Trek",
    details: "<strong>• Trek: ~10 km | Duration: 6–7 hrs</strong><br>• This is the summit day and the most rewarding part of the trek. The trail climbs steadily over rocky slopes and open highland meadows until the landscape becomes stark and alpine. A final push brings you to the summit of Sethan Dome (4,200 m), a spectacular high point with a 360° Himalayan panorama. From here, the Pir Panjal range, Dhauladhar peaks, Hampta Valley, and the snow-carved slopes of the Chandra Valley unfold in every direction. After spending time soaking in the views and clicking photos, begin your descent along the same ridge, retracing your steps to Sarotu. Celebrate your summit evening around the campsite with warm meals and the satisfaction of an unforgettable day."
  },
  {
    day: 5,
    title: "Sarotu – Jobri – Drive to Manali | 2 Hours Trek + 2 Hours Drive",
    details: "<strong>• Trek: ~3 km | Duration: 2 hrs | Drive: ~2 hrs</strong><br>• Your last day begins with a gentle descent through meadows and forest patches toward Jobri. The trail becomes wider and more defined as you re-enter lower altitudes. At Jobri, a vehicle awaits to drive you back to Manali through forests, waterfalls, and winding mountain roads. The Hampta Circuit concludes as you reach Manali—carrying home the memories of an offbeat, soulful Himalayan journey away from the crowds."
  }
],

    howToReach: {
        air: "Nearest airport: Bhuntar Airport (Kullu) – 50 km from Manali. Take a cab or bus to reach Manali.",
        train: "Nearest major railway station: Chandigarh Railway Station. From Chandigarh, take a Volvo bus or private cab to Manali (~8–10 hrs).",
        road: "From Delhi: Overnight Volvo buses (12–14 hrs) regularly ply to Manali. From Chandigarh: 8–10 hrs by cab or bus. Manali is well-connected and has frequent bus services.",
        travelTip: "Arrive in Manali a day before the trek for acclimatization and avoid delays."
    },

    didYouKnow: [
        "Hampta Circuit Trek is often mistaken for Hampta Pass but offers a completely different, offbeat route.",
        "Sethan Dome, the highest point of the trek, offers 360° panoramic views of both the Pir Panjal and Dhauladhar ranges.",
        "The trek passes through untouched alpine meadows rarely frequented by tourists, offering solitude and natural beauty.",
        "The route allows first-time trekkers and families to experience high-altitude trekking in a safe, moderate environment.",
        "The trail combines nature and local culture, making each campsite a unique experience of Himalayan tradition.",
        "Children aged 9–17 can trek with parental supervision, making it a great family-friendly Himalayan adventure.",
        "The trek showcases a contrast between lush green forests and rugged high-altitude vistas within a compact 5-day itinerary."
    ],

    gallery: [
        "https://res.cloudinary.com/dr44hob9b/image/upload/v1766587994/hampta-circuit-pic3_ayniis.webp",
        "https://res.cloudinary.com/dr44hob9b/image/upload/v1766587995/hampta-circuit-pic4_py4iwc.jpg",
        "https://res.cloudinary.com/dr44hob9b/image/upload/v1766587997/hampta-circuit-pic1_hlge2l.jpg",
        "https://res.cloudinary.com/dr44hob9b/image/upload/v1766587998/hampta-circuit-pic2_i5jros.jpg",
    ],

    downloadLink: "/docs/Packing_List.pdf",

    faqs: {
        questions: [
            {
                question: "Who can participate in the Hampta Circuit trek?",
                answer: "This trek is suitable for beginners, first-time trekkers, families, and children aged 9–17 with parental supervision. Basic fitness and stamina are recommended."
            },
            {
                question: "What should I pack for the Hampta Circuit trek?",
                answer: "Layered clothing (thermals, fleece, padded jacket, rain gear), waterproof trekking shoes, trekking poles, and a 50–60L rucksack with rain cover. Nights can get cold at higher camps."
            },
            {
                question: "Is offloading available during the trek?",
                answer: "Yes, offloading (mule/porter service) is available at an additional cost. Inform the trek organizer in advance."
            },
            {
                question: "Will there be mobile network coverage during the trek?",
                answer: "Coverage is limited. Mobile signal is weak or non-existent at camps like Kharmandari and Sethan Dome. Inform family and friends about the blackout period."
            },
            {
                question: "Is acclimatization required before starting?",
                answer: "Yes, arrive in Manali a day before the trek to adjust to the altitude and reduce the risk of AMS (Acute Mountain Sickness)."
            }
        ]
    },

    faqsLink: "/faqs-and-articles",
},

{
    id: "rani-sui-lake-trek",
    name: "Rani Sui Lake Trek",
    tags: ["beginner", "family", "kullu", "meadows", "lake"],
    difficulty: ["easy"],
    season: ["summer", "autumn", "monsoon", "winter","spring"],
    month: ["april", "may", "june", "july", "august", "september", "october", "november", "december", "january", "february", "march"],
    duration: ["3 Nights / 4 Days"],
    region: "himachal pradesh",
    coordinates: [
        [32.2390, 77.1840], // Manali (start)
        [32.2500, 77.1950], // Lamadugh
        [32.2600, 77.2000], // Khanpari Tibba
        [32.2580, 77.2100], // Rani Sui Lake
        [32.2450, 77.1980], // Saurkundi Pass
        [32.2380, 77.1850], // Mahili Thach
        [32.2390, 77.1840], // Shangchar / Manali (end)
    ],
    heroImage: "https://res.cloudinary.com/dr44hob9b/image/upload/v1766588815/Rani-Sui-Lake-hero1_gsloff.jpg",
    
    heroImages: [
        "https://res.cloudinary.com/dr44hob9b/image/upload/v1766588815/Rani-Sui-Lake-hero1_gsloff.jpg",
        "https://res.cloudinary.com/dr44hob9b/image/upload/v1766588811/Rani-Sui-Lake-hero_bjyaxe.jpg",
        "https://res.cloudinary.com/dr44hob9b/image/upload/v1764605803/IMG-20190909-WA0000_afe8gq.jpg",
    ],

    subtitle: "A Short Himalayan Trek with Big Views",

    seo: {
        title: "Rani Sui Lake Trek | Itinerary, Cost & Dates | Planethimalayas",
        description: "Rani Sui Lake Trek (11,155 ft) is a short and easy Himalayan trail from Manali to Rani Sui Lake, passing through Lamadugh, Khanpari Tibba, and Saurkundi Pass. Ideal for beginners and families seeking a scenic adventure."
    },

    overview: {
        facts: [
            { emoji: "⏳", label: "Trek Duration", value: "3 Nights / 4 Days" },
            { emoji: "⚡", label: "Trek Grade", value: "Easy" },
            { emoji: "🏔️", label: "Max Altitude", value: "4,025 m (Khanpari Tibba)" },
            { emoji: "⚡", label: "Trek Distance", value: "Approx. 25 Km" },
            { emoji: "🌤️", label: "Best Time", value: "May–October" },
            { emoji: "🗺️", label: "Region", value: "Northern Himachal Pradesh, Manali" },
            { emoji: "📍", label: "Start Point", value: "Manali (2040 m)" },
            { emoji: "🏁", label: "End Point", value: "Shangchar / Manali" },
            { emoji: "🧥", label: "Cloakroom facility", value: "Not available" },
        ],
    snippet: 
"Rani Sui Lake Trek is a short yet mesmerizing Himalayan adventure in the western reaches of Manali, perfect for beginners, families, and those seeking a serene high-altitude experience. The trek begins near Hadimba in Manali, winding gently through dense cedar and oak forests before opening into the lush, flower-filled meadows of Lamadugh. From here, the trail ascends through the Manalsu River valley toward the ridge of Khanpari Tibba (≈ 4,025 m), offering breathtaking panoramic views of towering peaks like Indrasan (6,220 m) and Deo Tibba (6,001 m), while the Beas River valley stretches below in all its splendor. <br>Along the way, trekkers encounter vibrant alpine flora, rhododendron shrubs, and the occasional Himalayan Monal, fox, or bear. The crown jewel of the trek is the pristine Rani Sui Lake, surrounded by snow-dusted slopes and rolling meadows, offering a tranquil spot to soak in the Himalayan beauty. The route also takes adventurers over Saurkundi Pass and down to Mahili Thach, providing uninterrupted vistas of the Pir Panjal and Dhauladhar ranges, along with the glimmering Manalsu Glacier. <br>In just 4 days, this trek combines easy-to-moderate trails, spectacular high-altitude landscapes, wildlife encounters, and alpine serenity, making it an ideal escape for anyone looking to immerse themselves in the magic of the Himachal Himalayas.<br><br><strong>Please note:</stromg> The itinerary is subject to change during winter and spring depending on snow accumulation, trail accessibility, and prevailing weather conditions."    
    },

    price: 8400,
    priceNote: "* Manali to Manali",
    addons: {
        offloadingbag: 2000,
        offloadingNote: "* Maximum weight 9kg / bag"
    },

    inclusionsNote: "🍽️ All Meals – Nutritious meals provided from packed lunch on Day 1 to breakfast on Day 4",

    highlights: [
        "Trek from Manali through Lamadugh and Manalsu River valley",
        "Camp at scenic locations: Lamadugh, below Khanpari Tibba, Mahili Thach",
        "Panoramic views of Indrasan (6220 m), Deo Tibba (6001 m), and surrounding peaks",
        "Explore Rani Sui Lake, surrounded by flowers and snow",
        "Visit Saurkundi Pass and Mahili Thach on open alpine meadows",
        "Suitable for beginners and families seeking a short Himalayan adventure",
        "Wildlife sightings: Monal, Fox, and occasional Bear",
    ],

    itinerary: [
    {
        "day": 1,
        "title": "Manali (2,040 m) – Lamadugh (3,050 m) | 5 Hours Trek",
        "details": "<strong>• Trek: ~8 km | Duration: 5 hrs</strong><br>• The trek begins from Manali, near Hadimba Temple, where you leave the bustling town behind and enter dense cedar and oak forests. Gentle trails wind along the Manalsu River valley, with sparkling streams and occasional sightings of Himalayan Monal, Himalayan Fox, and other wildlife. The path opens into the lush green meadows of Lamadugh, surrounded by rolling hills and distant snow-capped peaks. Trekkers can enjoy the aroma of alpine wildflowers and the peaceful ambiance of the valley. Camp is set up in Lamadugh, offering panoramic views and a tranquil evening amidst nature."
    },
    {
        "day": 2,
        "title": "Lamadugh – Khanpari Tibba (4,025 m) – Rani Sui Lake (3,780 m) | 6–7 Hours Trek",
        "details": "<strong>• Trek: ~10 km | Duration: 6–7 hrs</strong><br>• Starting early, trek gently through the lush meadows and shrubs toward the base of Khanpari Tibba. The trail passes through vibrant rhododendron and birch shrubs, and occasional wildflower patches. As you ascend, the views of Indrasan (6,220 m) and Deo Tibba (6,001 m) become increasingly dramatic, framed against the Kullu Valley below. Reach the dome of Khanpari Tibba, a perfect vantage point for a 360° panorama of the Great Himalayan Range, Dhauladhar to the west, Pir Panjal to the north, and the surrounding valleys. After soaking in the vistas, descend along the ridge to the campsite near Rani Sui Lake, a serene alpine lake surrounded by snowfields and colorful meadows. Enjoy the peaceful surroundings and reflect on the day's trek."
    },
    {
        "day": 3,
        "title": "Rani Sui Lake – Saurkundi Pass (3,840 m) – Mahili Thach (3,350 m) | 6–7 Hours Trek",
        "details": "<strong>• Trek: ~10 km | Duration: 6–7 hrs</strong><br>• From the campsite, begin trekking across expansive alpine meadows filled with wildflowers. Arrive at Saurkundi Lake, a small but charming high-altitude lake. Ascend gently to Saurkundi Pass, where clear skies reveal sweeping views of the Indrasan and Deo Tibba peaks. Descend along open ridges dotted with alpine flora, enjoying the crisp mountain air and occasional wildlife sightings. The trail gradually leads to Mahili Thach, a picturesque meadow surrounded by rolling hills and distant peaks, where the camp is set for the night. The location offers unmatched views of the sunset over the Pir Panjal ranges."
    },
    {
        "day": 4,
        "title": "Mahili Thach (3,350 m) – Shangchar (2,350 m) | 5 Hours Trek + Drive to Manali 2 Hrs",
        "details": "<strong>• Trek: ~8 km | Duration: 5 hrs | Drive: ~2 hrs to Manali</strong><br>• Begin the final descent through dense forests of Deodar, Spruce, and Cedar trees. Enjoy occasional breaks to admire the Beas River valley and the cascading streams along the trail. Reach Shangchar village, a quaint hamlet where local life unfolds amidst the mountains. Here, the trek concludes and a jeep transfer awaits to drive through narrow link roads to Patlikuhl, continuing on the highway to Manali. Return to Manali by afternoon or evening, completing the 4-day Himalayan adventure with memories of serene alpine lakes, meadows, snow-capped peaks, and wildlife encounters."
    }
],

    howToReach: {
        air: "Nearest airport: Bhuntar Airport (Kullu) – 50 km from Manali. Take a cab or bus to reach Manali.",
        train: "Nearest major railway station: Chandigarh Railway Station. From Chandigarh, take a Volvo bus or private cab to Manali (~8–10 hrs).",
        road: "From Delhi: Overnight Volvo buses (12–14 hrs) regularly ply to Manali. From Chandigarh: 8–10 hrs by cab or bus. Manali is well-connected and has frequent bus services.",
        travelTip: "Arrive in Manali a day before the trek for acclimatization and avoid delays."
    },

    didYouKnow: [
        "Rani Sui Lake is named after a queen who gave birth under a rock near the lake; 'Sui' means giving birth in the local dialect.",
        "The trek passes through high-altitude meadows rarely frequented by tourists, providing solitude and pristine landscapes.",
        "The area offers 360° views of Indrasan, Deo Tibba, Maker Beh, and Shikar Beh peaks.",
        "Wildlife sightings include Monal, Fox, and Bear along the route.",
        "Rani Sui Lake remains surrounded by snow and flowers throughout the trekking season, creating a mystical ambiance.",
        "Saurkundi Pass offers panoramic vistas of the eastern Himalayan ranges and Manali valley below."
    ],

    gallery: [
        "https://res.cloudinary.com/dr44hob9b/image/upload/v1764605813/IMG_20190911_130716_w3czt8.jpg",
        "https://res.cloudinary.com/dr44hob9b/image/upload/v1766588815/Rani-Sui-Lake-hero1_gsloff.jpg",
        "https://res.cloudinary.com/dr44hob9b/image/upload/v1766588811/Rani-Sui-Lake-hero_bjyaxe.jpg",
        "https://res.cloudinary.com/dr44hob9b/image/upload/v1764605810/IMG-20190912-WA0019_xtwpqk.jpg",
        "https://res.cloudinary.com/dr44hob9b/image/upload/v1764605803/IMG-20190909-WA0000_afe8gq.jpg",
        "https://res.cloudinary.com/dr44hob9b/image/upload/v1764605801/IMG_20190912_100939-EFFECTS_pb1adf.jpg"
    ],

    downloadLink: "/docs/Packing_List.pdf",

    faqs: {
        questions: [
            {
                question: "Who can participate in the Rani Sui Lake trek?",
                answer: "This trek is suitable for beginners, first-time trekkers, and families. Basic fitness and stamina are recommended. Children under 15 can join with parental supervision."
            },
            {
                question: "What should I pack for the Rani Sui Lake trek?",
                answer: "Layered clothing (thermals, fleece, padded jacket, rain gear), waterproof trekking shoes, trekking poles, and a 50–60L rucksack with rain cover. Nights can get cold at higher camps."
            },
            {
                question: "Is offloading available during the trek?",
                answer: "Yes, offloading (mule/porter service) is available at an additional cost. Inform the trek organizer in advance."
            },
            {
                question: "Will there be mobile network coverage during the trek?",
                answer: "Coverage is limited. Mobile signal is weak or non-existent at camps like Lamadugh, Rani Sui Lake, and Mahili Thach. Inform family and friends about the blackout period."
            },
            {
                question: "Is acclimatization required before starting?",
                answer: "Yes, arrive in Manali a day before the trek to adjust to the altitude and reduce the risk of AMS (Acute Mountain Sickness)."
            }
        ]
    },

    faqsLink: "/faqs-and-articles",
},


  {
    id: "rupin-pass-trek",
    name: "Rupin Pass Trek",
    tags: ["pro", "pass", "crossover", "shimla", "kinnaur", "glacier", "meadows"],
    difficulty: ["difficult"],
    season: ["summer", "autumn"],
    month: ["may", "june", "september", "october"],
    duration: ["6 Nights / 7 Days"],
    region: "himachal pradesh",
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

    price: 15900,
    priceNote: "* Jiskoon to Sangla",
    addons: {
      transport: 6000, 
      offloadingbag: 3200,
      transportNote: "* Shimla to Shimla",
      offloadingNote: "* Maximum weight 9kg / bag"
    },

    inclusionsNote: "🍽️ All Meals – Nutritious meals provided from dinner on Day 1 to packed lunch on Day 7",

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

    downloadLink: "/docs/Packing_List.pdf",

    faqs: {
  questions: [
    {
      question: "Who can participate in the Rupin Pass trek?",
      answer: "The Rupin Pass trek is best suited for trekkers with prior high-altitude trekking experience and good physical fitness. It involves steep ascents, long trekking days (up to 8–9 hrs), snow crossings, and high-altitude camping above 13,000 ft. Beginners are advised to start with easier treks before attempting Rupin.",
    },
    {
      question: "How should I prepare physically for the Rupin Pass Trek?",
      answer:
        "Preparation should begin at least 6–8 weeks before the trek. A strong cardiovascular base is essential — regular running, stair climbing, cycling, or hiking with a loaded backpack is recommended. Strength training focusing on legs, core, and balance will help handle steep climbs and descents. Prior experience on difficult Himalayan treks significantly improves safety and comfort."
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
    tags: ["intermediate", "pro", "pass", "crossover", "shimla", "kinnaur", "lake", "glacier", "meadows"], 
    difficulty: ["moderate", "difficult"],
    season: ["summer", "autumn"],
    month: ["may", "june", "september", "october"],
    duration: ["6 Nights / 7 Days"],
    region: "himachal pradesh",
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
        { emoji: "⚡", label: "Trek Grade", value: "Moderate / Difficult" },
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

    price: 15900,
    priceNote: "* Janglik to Baruva",
    addons: {
      transport: 6000, 
      offloadingbag: 3200,
      transportNote: "* Shimla to Shimla",
      offloadingNote: "* Maximum weight 9kg / bag"
    },

    inclusionsNote: "🍽️ All Meals – Nutritious meals provided from dinner on Day 1 to packed lunch on Day 7",

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
  "title": "Shimla to Janglik (9,200 ft)",
  "details": "<strong>• Drive distance: ~200 km | Duration: 7–8 hours.</strong><br>• The journey to Janglik begins from Shimla, winding through the lush valleys and pine-clad hills of Kinnaur. The Pabbar River flows alongside most of the route, its clear blue waters reflecting the surrounding mountains. The road meanders past small villages, traditional Himachali wooden houses, and terraced wheat fields, offering a glimpse of rural life untouched by time.<br> After crossing Tikri, the smooth motorable road turns into a rugged dirt track, climbing through switchbacks and forested slopes. You pass through Tangnu, descend to the river, and gradually ascend to Diude. From here, Janglik is a short stroll, nestled quietly among pine forests and gentle hills.<br> Janglik is a serene base camp — a peaceful village where wooden houses cluster along sloping terrain, prayer flags flutter, and the murmur of the Pabbar River fills the air. Check into a homestay or guesthouse for the night, savor local Himachali food, and let the calm Himalayan atmosphere set the tone for the trek ahead."
  },
  {
  "day": 2,
  "title": "Janglik to Dayara (11,000 ft)",
  "details": "<strong>• Trek distance: ~10 km | Duration: 6–7 hours | Altitude gain: ~1,800 ft.</strong><br>• Today’s trek begins with a gradual climb out of Janglik, passing beautifully crafted wheat fields lined with traditional Himachali wooden farmhouses, some adorned with red and green roofs. The early ascent is steep but scenic, offering constant views of the surrounding hills and river below.<br> A ledge beneath a solitary pine tree makes for a perfect first rest stop. Soon after, the trail rises into an oak and pine forest. As you move deeper into the woods, the climb eases into a gentle gradient. Streams crisscross the path here, adding a refreshing rhythm to each step. The forest trail, shaded and serene, provides a peaceful contrast to the morning’s sunlit fields.<br> Emerging from the tree line, you are greeted by vast alpine meadows stretching up the hillside to your left. The sudden expanse is breathtaking — the green of the grass, the dark shadow of the pine forest to your right, and the lingering white snow patches on the cliffs across the Pabbar Valley create a panorama that feels almost surreal.<br> The trail skirts the edge of the meadows, descending slightly while remaining well-defined and broad. After nearly an hour, you enter another dense pine and oak forest, where the soft, brown carpet of leaves and the moist earth beneath your feet make the walk almost meditative. The forest climb is gentle but persistent, preparing your legs for the final stretch.<br> Eventually, the trees give way once more, revealing Dayara — a stunning campsite set amidst expansive grasslands. The site is wide and peaceful, with soft ground, gentle winds, and panoramic views of ridges and distant peaks. Dayara is where the trek’s high-altitude beauty truly begins to unfold, offering tranquility and a sense of grandeur for the days ahead."
  },
  {
  "day": 3,
  "title": "Dayara to Litham (11,800 ft)",
  "details": "<strong>• Trek distance: ~8 km | Duration: 5–6 hours | Altitude gain: ~737 ft.</strong><br>• The day begins early with a walk through the golden glow of Dayara’s meadows. As the morning sun kisses the grass, every step across the soft, rolling meadows feels magical. This is a moment to savour — the calm, the light, and the vastness of high-altitude beauty setting the tone for the day ahead.<br> Leaving the meadow behind, the trail gently ascends into a patch of pine forest about fifteen minutes out of camp. Here, the scent of pine mingles with the crisp mountain air, and the rhythmic gurgle of streams crossing your path adds a natural melody to your walk. A small stream requires a leap to continue on the trail, a playful challenge that refreshes both body and spirit.<br> Exiting the forest, the trail curves wide, revealing expansive views of the snow-capped Dhauladhar range and the distant Gunas Pass. Below, green grasslands slope into dark pine forests about 300 feet down, while towering snow-lined cliffs rise behind — a scene of perfect harmony and a visual feast that rewards the morning’s climb.<br> A half hour later, the trail enters another forest — this one dominated by gnarled Silver Birch (Bhoj). The old trees, their twisted trunks and silvery bark, create a quiet, almost sacred atmosphere. Descending gently through this forest brings you to a perennial stream tucked in the fold of the mountain. Take a moment to refresh, then climb out of the fold to catch your first clear sight of Litham.<br> Crossing the final Chandranahan stream, you reach the Litham campsite. The site is surrounded by brooks and small streams, with plenty of flat ground to pitch your tent. Litham offers breathtaking views in all directions: to the left, the snout of Chandranahan waterfall and the lake beyond; ahead, towering snow-clad peaks guarding Buran Ghati; to the right, snow-patched cliffs hiding the Rupin Valley. This dramatic meadow — the last of the great high-altitude grasslands on the trek — is a perfect place to rest, reflect, and prepare for the challenging days ahead."
  },
  {
  "day": 4,
  "title": "Acclimatization Excursion to Chandranahan Lakes (13,800 ft)",
  "details": "<strong>• Trek distance: ~10 km | Duration: 6–7 hours | Altitude gain: ~2,000 ft.</strong><br>• The day begins early as trekkers leave Litham, crossing the stream just before the campsite to begin the acclimatization excursion. The path follows a shepherd’s trail upstream, gradually climbing toward a ridge top. Along the way, the forest thins and alpine meadows emerge, offering glimpses of snow patches that linger on shaded slopes depending on the season. The air grows thinner with each step, reminding trekkers of the high altitude they are approaching.<br> After roughly an hour and a half, you arrive at the snout of the Chandranahan waterfall, marked by carefully placed stone cairns. Many assume the lake is nearby, but the trail continues for another hour into the closed glacial valley. Here, snowfields, grassy patches, and small brooks create a dynamic landscape. The valley is encircled by towering mountains whose snow-fed flanks pour meltwater into streams that eventually feed the lake.<br> The Chandranahan Lake itself is modest in size, but its setting is extraordinary. Nestled in a bowl-like amphitheatre, the lake reflects surrounding snowfields and rugged peaks. Tiny waterfalls and trickling brooks add a delicate soundtrack to the scene, while stone cairns dot the edges, guiding trekkers and marking paths. The combination of pristine water, high-altitude flora, and dramatic mountain scenery makes this a truly rewarding destination.<br> After soaking in the serene beauty, trekkers retrace their steps along the same trail. The descent from the lake is steep and requires careful footing. Early morning departure ensures a return to Litham by lunch, allowing time to rest and prepare for the challenging days ahead. This excursion not only rewards the senses but also helps the body acclimatize to higher altitudes, building strength and confidence for the crossing of Buran Ghati."
  },
  {
  "day": 5,
  "title": "Litham to Dunda (13,300 ft)",
  "details": "<strong>• Trek distance: ~9 km | Duration: 6–7 hours | Altitude gain: ~1,500 ft.</strong><br>• Leaving Litham, the trail begins a sharper ascent, gradually leaving behind the wide meadows and moving into rocky ridges. The Pabbar River, once a gentle stream, now rushes vigorously below, carving its way through the narrowing valley. To the left lie the green grasslands of Litham, while to the right, the cliffs of the Rupin Valley rise steeply, framing the trail. Ahead, the Buran Ghati Pass is visible, its snowy saddle inspiring anticipation for the day ahead.<br> The path follows a well-marked shepherd’s trail along the left bank, climbing steadily through scattered boulders, alpine vegetation, and intermittent snow patches. After roughly an hour, the trail reaches a ridge top, where the valley below stretches dramatically and the first full view of the U-shaped gorge leading to Buran Ghati unfolds. The grey and white tones of the Dhauladhar range dominate the horizon, contrasting beautifully with the greenery of the lower slopes.<br> Continuing toward Dhunda, the trail enters an alpine zone where snow patches are common even in late June. The ascent rewards trekkers with panoramic views of the pass and the surrounding peaks. Dunda itself is a high plateau, framed by towering snow-capped mountains, and offers an extraordinary setting for the final camp before the pass. Here, the air is crisp, the silence profound, and the sense of scale overwhelming — a perfect place to rest, acclimatize, and prepare mentally for the challenge of Buran Ghati the next day."
  },
  {
  "day": 6,
  "title": "Dunda to Munirang via Buran Ghati Pass (15,000+ ft) | Descent ~2,700 ft",
  "details": "<strong>• Trek distance: ~12 km | Duration: 9–10 hours | Altitude gain: ~1,700 ft ascent, ~2,700 ft descent.</strong><br>• The day begins early at Dhunda, as trekkers set out along the ridge toward the base of Buran Ghati Pass. The initial stretch is a mix of hopping over boulders and navigating rocky ridges, with the pass steadily drawing closer in the distance. From the base, the ascent to the pass takes about an hour, mostly over snowfields, demanding careful footwork and concentration. The final stretch to the narrow ledge at the top — perched at exactly 15,000 ft — is thrilling and dramatic, with a steep drop on the Kinnaur side that commands respect and focus.<br> From the pass, the descent begins rapelling down on fixed ropes onto the first snowfield about 100 metres below. Later carefully slide down or pick their steps across a series of smaller ledges, gradually losing the altitude gained in the morning climb. This technical section continues for roughly two hours, shedding nearly 3,000 ft and transitioning from snowfields to rocky ridges dotted with junipers and flower-strewn shrubs.<br> As the terrain softens, the valley below opens up in lush green expanses, a stark contrast to the barren high pass. Streams crisscross the trail, requiring nimble hops and pauses to soak in the surroundings. Soon, the first farmer huts of Munirang appear, signalling the end of the wilderness crossing. The campsite sits beside a gentle river, framed by alpine meadows and the towering mountains of the backdrop, providing a serene and rewarding conclusion to a day defined by exhilaration, challenge, and the grandeur of the Himalayas."
  },
  {
  "day": 7,
  "title": "Munirang to Barua Village → Drive to Shimla",
  "details": "<strong>• Trek distance: ~16 km | Duration: 6–7 hours | Altitude loss: ~2,300 ft.</strong><br>• The final day begins with a remarkable descent from Munirang, offering an extraordinary variety of vegetation and landscapes. The trail follows the Barua Khud, initially winding through high-altitude pine forests before giving way to mixed forests of oak, apricot, and peach trees. Streams cross the path, including a large gushing one that meets the Barua Khud, where a makeshift bridge lined with junipers allows passage. Along the trail, late June brings splashes of purple shrubs, while fruit-laden trees and apple orchards hint at civilization approaching.<br> About halfway down, an overhanging rock provides a breathtaking view of Barua village perched on the ridge below. Entering the village through a traditional arch, trekkers meander along lanes where locals greet them warmly, sometimes inviting them for tea. Look out for the grand temple on the right and the orchards that line the trail, adding colour and life to the descent. The trail eventually emerges onto the road bridge over Barua Khud, where vehicles await. From here, the drive to Shimla retraces the diverse landscapes of the trek — from lush forests to fertile valleys, past apple orchards and river gorges — concluding the expedition. The journey offers quiet reflection on the trek’s challenges, triumphs, and the beauty of the Himalayas."
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

    downloadLink: "/docs/Packing_List.pdf",

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
      question: "How should I prepare physically for the Buran Ghati Trek?",
      answer:
        "Preparation should begin at least 6–8 weeks before the trek. A strong cardiovascular base is essential — regular running, stair climbing, cycling, or hiking with a loaded backpack is recommended. Strength training focusing on legs, core, and balance will help handle steep climbs and descents. Prior experience on difficult Himalayan treks significantly improves safety and comfort."
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

/* Uttarakhand Garhwal*/

  {
    id: "ali-bedni-bugyal-trek",
    name: "Ali Bedni Bugyal Trek",
    tags: ["beginner", "family", "meadows", "ridgewalk"],
    difficulty: ["easy", "moderate"],
    season: ["spring", "autumn", "winter"],
    month: ["january", "february", "march", "april", "may", "june", "september", "october", "november", "december"],
    duration: ["5 Nights / 5 Days"],
    region: "uttarakhand-garhwal",
    heroImage:  "https://res.cloudinary.com/dr44hob9b/image/upload/v1755517462/ali-bedni-hero1_irkwxk.jpg",

    heroImages: [
                "https://res.cloudinary.com/dr44hob9b/image/upload/v1755517462/ali-bedni-hero1_irkwxk.jpg",
                "https://res.cloudinary.com/dr44hob9b/image/upload/v1755517485/ali-bedni-view6_ofmkxs.jpg",
                "https://res.cloudinary.com/dr44hob9b/image/upload/v1766319538/ali-bedni-bugyal-view4_nif4kk.jpg",
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
        { emoji: "⏳", label: "Trek Duration", value: "5 Nights / 5 Days" },
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

    price: 10900,
    priceNote: "* Lohajung to Lohajung",
    addons: {
      transport: 6000, 
      offloadingbag: 1500,
      transportNote: "* Rishikesh to Rishikesh",
      offloadingNote: "* Maximum weight 9kg / bag"
    },

    inclusionsNote: "🍽️ All Meals – Nutritious meals provided from dinner on Day 1 to dinner on Day 5",

    dates: [   
{ label: "05 Jan - 09 Jan", start: "2026-01-05", end: "2026-01-09" },
{ label: "12 Jan - 16 Jan", start: "2026-01-12", end: "2026-01-16" },
{ label: "19 Jan - 23 Jan", start: "2026-01-19", end: "2026-01-23" },
{ label: "26 Jan - 30 Jan", start: "2026-01-26", end: "2026-01-30" },

{ label: "02 Feb - 06 Feb", start: "2026-02-02", end: "2026-02-06" },
{ label: "09 Feb - 13 Feb", start: "2026-02-09", end: "2026-02-13" },
{ label: "16 Feb - 20 Feb", start: "2026-02-16", end: "2026-02-20" },
{ label: "23 Feb - 27 Feb", start: "2026-02-23", end: "2026-02-27" },

{ label: "02 Mar - 06 Mar", start: "2026-03-02", end: "2026-03-06" },
{ label: "09 Mar - 13 Mar", start: "2026-03-09", end: "2026-03-13" },
{ label: "16 Mar - 20 Mar", start: "2026-03-16", end: "2026-03-20" },
{ label: "23 Mar - 27 Mar", start: "2026-03-23", end: "2026-03-27" },
{ label: "30 Mar - 03 Apr", start: "2026-03-30", end: "2026-04-03" },

{ label: "06 Apr - 10 Apr", start: "2026-04-06", end: "2026-04-10" },
{ label: "13 Apr - 17 Apr", start: "2026-04-13", end: "2026-04-17" },
{ label: "20 Apr - 24 Apr", start: "2026-04-20", end: "2026-04-24" },
{ label: "27 Apr - 01 May", start: "2026-04-27", end: "2026-05-01" },

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
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755517462/ali-bedni-hero1_irkwxk.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1766319547/ali-bedni-bugyal-view_mqzwpu.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1766319538/ali-bedni-bugyal-view4_nif4kk.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1766319537/ali-bedni-bugyal-view2_ifuite.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1766319538/ali-bedni-bugyal-view3_vxag5s.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1766319537/ali-bedni-bugyal-view1_qo0bjn.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1766319537/ali-bedni-bugyal-view5_cj5kcn.jpg"

    ],

    downloadLink: "/docs/Packing_List.pdf",

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
    tags: ["beginner", "family", "lake", "meadows", "peak"],
    difficulty: ["easy"],
    season: ["spring", "autumn", "winter"],
    month: ["january", "february", "march", "april", "may", "june", "september", "october", "november", "december"],
    duration: ["5 Nights / 5 Days"],
    region: "uttarakhand-garhwal",
    coordinates: [
    [30.5416, 79.1801], // Sari Village (start)
    [30.5519, 79.1886], // Deoriatal
    [30.5489, 79.2100], // Chopta
    [30.5278, 79.2236], // Tungnath
    [30.5411, 79.2253], // Chandrashila Summit (end)
  ],
    heroImage:       "https://res.cloudinary.com/dr44hob9b/image/upload/v1755517847/chandrashila-hero2_zmhy2k.jpg",

    heroImages: ["https://res.cloudinary.com/dr44hob9b/image/upload/v1762329745/chandrashila-summit-view2_gr4dyd.jpg",
                "https://res.cloudinary.com/dr44hob9b/image/upload/v1755517852/chandrashila-hero_r8w4xm.jpg",
                "https://res.cloudinary.com/dr44hob9b/image/upload/v1755517841/chandrashila-view5_e0xdz7.jpg",
                "https://res.cloudinary.com/dr44hob9b/image/upload/v1755517847/chandrashila-hero2_zmhy2k.jpg",
                
    ],
    subtitle: "A Perfect Himalayan Panorama",

    seo: {
    title: "Deoriatal Chandrashila Trek | Itinerary, Cost & Dates | Planethimalayas",
    description: "Deoriatal Chandrashila Trek (12,083 ft) is Uttarakhand’s best short trek, offering panoramic views of Nanda Devi, Chaukhamba, and Kedarnath peaks. A 6-day easy Himalayan escape."
  },

    overview: {
      facts: [
        { emoji: "⏳", label: "Trek Duration", value: "5 Nights / 5 Days" },
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

    price: 10900,
    priceNote: "* Sari to Sari",
    addons: {
      transport: 4000, 
      offloadingbag: 1500,
      transportNote: "* Haridwar to Haridwar",
      offloadingNote: "* Maximum weight 9kg / bag"
    },

    inclusionsNote: "🍽️ All Meals – Nutritious meals provided from dinner on Day 1 to dinner on Day 5",

    dates: [   
{ label: "05 Jan - 09 Jan", start: "2026-01-05", end: "2026-01-09" },
{ label: "12 Jan - 16 Jan", start: "2026-01-12", end: "2026-01-16" },
{ label: "19 Jan - 23 Jan", start: "2026-01-19", end: "2026-01-23" },
{ label: "26 Jan - 30 Jan", start: "2026-01-26", end: "2026-01-30" },

{ label: "02 Feb - 06 Feb", start: "2026-02-02", end: "2026-02-06" },
{ label: "09 Feb - 13 Feb", start: "2026-02-09", end: "2026-02-13" },
{ label: "16 Feb - 20 Feb", start: "2026-02-16", end: "2026-02-20" },
{ label: "23 Feb - 27 Feb", start: "2026-02-23", end: "2026-02-27" },

{ label: "02 Mar - 06 Mar", start: "2026-03-02", end: "2026-03-06" },
{ label: "09 Mar - 13 Mar", start: "2026-03-09", end: "2026-03-13" },
{ label: "16 Mar - 20 Mar", start: "2026-03-16", end: "2026-03-20" },
{ label: "23 Mar - 27 Mar", start: "2026-03-23", end: "2026-03-27" },
{ label: "30 Mar - 03 Apr", start: "2026-03-30", end: "2026-04-03" },

{ label: "06 Apr - 10 Apr", start: "2026-04-06", end: "2026-04-10" },
{ label: "13 Apr - 17 Apr", start: "2026-04-13", end: "2026-04-17" },
{ label: "20 Apr - 24 Apr", start: "2026-04-20", end: "2026-04-24" },
{ label: "27 Apr - 01 May", start: "2026-04-27", end: "2026-05-01" },

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

    downloadLink: "/docs/Packing_List.pdf",

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
    tags: ["intermediate", "pro", "glacier", "basecamp", "meadows"],
    difficulty: ["moderate" , "difficult"],
    season: ["summer", "autumn"],
    month: ["may", "june", "september", "october"],
    duration: ["6 Nights / 6 Days"],
    region: "uttarakhand-garhwal",
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
    subtitle: "Into the Holy Frontier of the Himalayan Giants",

    seo: {
      title: "Gaumukh Tapovan Trek | Itinerary, Cost & Dates | Planethimalayas",
      description: "Gaumukh Tapovan Trek (14,600 ft) takes you to the sacred source of the Ganga and the high-altitude meadows of Tapovan with grand views of Mt. Shivling, Bhagirathi peaks, and the Gangotri glacier."
    },

    overview: {
      facts: [
        { emoji: "⏳", label: "Trek Duration", value: "6 Nights / 6 Days" },
        { emoji: "⚡", label: "Trek Grade", value: "Moderate / Difficult" },
        { emoji: "🏔️", label: "Max Altitude", value: "14,600 ft (Meru Base Camp)" },
        { emoji: "⚡", label: "Trek Distance", value: "42 Km" },
        { emoji: "🌤️", label: "Best Time", value: "May-June & September-October" },
        { emoji: "🗺️", label: "Region", value: "Gangotri National Park, Uttarakhand" },
        { emoji: "📍", label: "Start Point", value: "Gangotri (Uttarakhand)" },
        { emoji: "🏁", label: "End Point", value: "Gangotri (Uttarakhand)" },
        { emoji: "🧥", label: "Cloakroom facility", value: "Available" },
      ],
      snippet: 
`The Gaumukh–Tapovan trek is a rare journey where the spiritual heart of the Himalayas merges seamlessly with its raw, untamed wilderness. Beginning in the sacred town of Gangotri, the trail follows the ever-present Bhagirathi River, drawing you deeper into Gangotri National Park through forests of blue pines and ancient Bhojpatra trees. As you walk under the quiet canopy of Chirbasa or along the stark, rugged mountainsides that line the valley, the landscape shifts dramatically — one side lush and green, the other harsh and barren, both held together by the shimmering river that guides your way.

<br>The path opens into Bhojwasa, a tranquil stretch with wide skies and flowing riverbeds, a natural pause before the mountains reveal their true scale. From here, the trail leads you to Gaumukh, the awe-striking snout of the glacier where the Bhagirathi emerges from an ice cave — the very birthplace of the Ganga. Standing before this towering wall of ice and rock, the journey’s spiritual weight becomes undeniable, echoing legends of King Bhagirath and the divine descent of Ganga through the matted locks of Lord Shiva.

<br>Beyond Gaumukh, the terrain turns rocky and dramatic before gently giving way to the sweeping Tapovan meadows, one of the most enchanting high-altitude grasslands in the Himalayas. Here, surrounded by grazing mountain goats, open grasslands, and crisp alpine winds, the skyline explodes with the presence of Mt. Shivling, Bhagirathi I–II–III, and Mt. Meru — a panoramic amphitheatre of giants. Tapovan is not just a campsite; it is a place where silence speaks, where sages once meditated, and where trekkers today find a rare stillness that modern life can’t offer.

<br>More than a trek, Gaumukh–Tapovan is a pilgrimage through geology, mythology, and Himalayan grandeur — a route where every bend tells a story, every wind carries an echo of ancient devotion, and every mountain stands as a reminder of nature’s timeless, towering presence.`    },

    price: 16900,
    priceNote: "* Gangotri to Gangotri",
    addons: {
      transport: 6000, 
      offloadingbag: 4000,
      transportNote: "* Rishikesh to Rishikesh",
      offloadingNote: "* Maximum weight 9kg / bag"
    },

    inclusionsNote: "🍽️ All Meals – Nutritious meals provided from dinner on Day 1 to dinner on Day 6",

    dates: [
      { label: "16 May - 21 May", start: "2026-05-16", end: "2026-05-21" },
      { label: "17 May - 22 May", start: "2026-05-17", end: "2026-05-22" },
      { label: "23 May - 28 May", start: "2026-05-23", end: "2026-05-28" },
      { label: "24 May - 29 May", start: "2026-05-24", end: "2026-05-29" },
      { label: "30 May - 04 Jun", start: "2026-05-30", end: "2026-06-04" },
      { label: "31 May - 05 Jun", start: "2026-05-31", end: "2026-06-05" },
      { label: "06 Jun - 11 Jun", start: "2026-06-06", end: "2026-06-11" },
      { label: "07 Jun - 12 Jun", start: "2026-06-07", end: "2026-06-12" },
      { label: "13 Jun - 18 Jun", start: "2026-06-13", end: "2026-06-18" },
      { label: "14 Jun - 19 Jun", start: "2026-06-14", end: "2026-06-19" },
      { label: "19 Sep - 24 Sep", start: "2026-09-19", end: "2026-09-24" },
      { label: "20 Sep - 25 Sep", start: "2026-09-20", end: "2026-09-25" },
      { label: "26 Sep - 01 Oct", start: "2026-09-26", end: "2026-10-01" },
      { label: "27 Sep - 02 Oct", start: "2026-09-27", end: "2026-10-02" },
      { label: "03 Oct - 08 Oct", start: "2026-10-03", end: "2026-10-08" },
      { label: "04 Oct - 09 Oct", start: "2026-10-04", end: "2026-10-09" },
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
    details: "The journey begins with a long but beautiful 9–10 hour drive from Rishikesh, gradually gaining altitude as the road winds past Uttarkashi, the apple orchards of Harsil Valley, and the ever-changing moods of the Bhagirathi River. The final approach to Gangotri feels almost sacred — steep cliffs, deodar forests, and the roar of the river echoing through the valley. By evening, you reach the ancient Gangotri Temple, one of the revered Char Dhams of Uttarakhand. Offering prayers here as the sun sets behind the mountains sets the tone for the days ahead. Nightfall brings crisp mountain air and a peaceful stay at a local guesthouse or hotel."
  },
  {
    day: 2,
    title: "Acclimatization in Gangotri",
    details: "Since Gangotri is at an altitude of 10,000 ft, a full day in Gangotri helps your body adjust to the altitude. The day feels relaxed yet enriching — you can walk to Pandava Gufa, a quiet cave surrounded by pine forests, or visit Surya Kund, where the Bhagirathi crashes through a dramatic gorge. Trek leaders conduct a detailed briefing and gear inspection while the slow pace allows you to observe the wildlife of this region. Himalayan griffon vultures circle the cliffs above, yellow-billed choughs hop fearlessly around temple steps, and mountain breezes drift through the valley. The night is spent once again in Gangotri, giving your body the ideal acclimatization window."
  },
  {
    day: 3,
    title: "Gangotri to Bhojwasa (3,780 m) | 14 km | 6–7 hrs",
    details: "The trek truly begins as you step into the protected limits of Gangotri National Park. The initial trail moves through mixed forests of oak, pine, and birch before transitioning into a more alpine landscape. For much of the day, the Bhagirathi River accompanies you — sometimes as a distant roar, sometimes rushing right beside the trail. The route passes through Chirbasa, a place literally named “the home of pines,” where the forest thickens and the air carries the resinous scent of blue pine. Beyond Chirbasa, vegetation thins out and the valley opens wide. Eventually, you reach the windswept plain of Bhojwasa, named after the bhojpatra (birch) forests that once flourished here. With views of the Bhagirathi peaks dominating the horizon and the last line of trees behind you, you settle into camps pitched beside the river — a dramatic setting for the night."
  },
  {
    day: 4,
    title: "Bhojwasa to Gaumukh (3,900 m) – Tapovan (4,450 m) | 10 km | 6 hrs",
    details: "The morning begins with crossing the river Bhagirathi using a trolley, which may involves some waiting in queue. After the crossing a gradual walk toward Gaumukh, the iconic snout of the Gangotri Glacier, through the expanded river bed of Bhagirathi river. As the massive wall of ice and rock comes into view, the atmosphere shifts — the birthplace of the Ganga stands immense and awe-inspiring, with icy water emerging from the cave-like opening beneath the glacier. From Gaumukh, the route becomes more challenging as you navigate across glacial moraines, scattered boulders, and steep slopes carved by centuries of movement. The ascent to Tapovan is steep but rewarding; each step brings you closer to one of the grandest alpine meadows in India. Upon reaching Tapovan, the world suddenly opens into a high-altitude grassland surrounded by towering Himalayan walls. Camps are set directly under the magnificent Shivling peak, with Meru and the Bhagirathi group rising sharply around you. The sheer scale of the landscape leaves you humbled."
  },
  {
    day: 5,
    title: "Tapovan to Meru Base Camp  (4,460 m) and back to Tapovan",
    details: "A day in Tapovan feels almost surreal. At dawn, the first rays of sun strike Mt. Shivling, bathing its pyramid-like face in golden light — a moment often compared to watching a divine flame ignite. You may choose to hike further towards Meru Base Camp or the Kirti Bamak glacier, both offering dramatic terrain and closer views of the peaks. All around, herds of bharal (blue sheep) graze calmly on the slopes, blending into the rocks with effortless camouflage. In rare instances, trekkers notice faint tracks of snow leopards imprinted along secluded patches of the meadow. The silence of Tapovan, broken only by the wind, makes it a perfect place for meditation, photography, or simple reflection. The day ends in the quiet embrace of this Himalayan amphitheatre."
  },
  {
    day: 6,
    title: "Tapovan to Gangotri | 20 km | 8–10 hrs",
    details: "Leaving Tapovan behind, you descend carefully along the boulder and moraine sections back to Gaumukh. The glacier looks different from every angle — sometimes massive and intimidating, sometimes strangely gentle. From Gaumukh, you retrace the familiar trail through Bhojwasa and Chirbasa, gradually re-entering the green patches of pine and birch. The long descent brings you back to Gangotri by evening, where the comfort of a warm guesthouse and the hum of the temple bells feel especially welcoming after days spent in the high mountains."
  },
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

    downloadLink: "/docs/Packing_List.pdf",

    faqs: {
  questions: [
    {
      question: "Who can participate in the Gaumukh-Tapovan trek?",
      answer: "This trek is recommended for intermediate to experienced trekkers with good fitness. The trail includes steep ascents, high-altitude camping, and glacier-side trekking, making it suitable for those prepared for physically demanding Himalayan trails."
    },
    {
      question: "How should I prepare physically for the Gaumukh-Tapovan Trek?",
      answer:
        "Preparation should begin at least 6–8 weeks before the trek. A strong cardiovascular base is essential — regular running, stair climbing, cycling, or hiking with a loaded backpack is recommended. Strength training focusing on legs, core, and balance will help handle steep climbs and descents. Prior experience on difficult Himalayan treks significantly improves safety and comfort."
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
    id: "nandanvan-vasukital-trek",
    name: "Nandanvan Vasukital Trek",
    tags: ["pro", "glacier", "meadows", "lake"],
    difficulty: ["difficult"],
    season: ["summer", "autumn"],
    month: ["june", "july", "october", "september"],
    region: "uttarakhand-garhwal",
    duration: "7 Nights / 7 Days",
    coordinates: [
      [30.9947, 78.9398],   // Gangotri
      [30.9632, 79.0629],   // Bhojbasa
      [30.9338, 79.1046],   // Nandanvan
      [30.9076, 79.1314]    // Vasukital
    ],

    heroImage: "https://res.cloudinary.com/dr44hob9b/image/upload/v1766321981/vasukital-trek-hero_xealyu.jpg",

    heroImages: [
              "https://res.cloudinary.com/dr44hob9b/image/upload/v1766321981/vasukital-trek-hero_xealyu.jpg",
              "https://res.cloudinary.com/dr44hob9b/image/upload/v1766321977/vasukital-trek-hero1_zoibct.jpg",
              "https://res.cloudinary.com/dr44hob9b/image/upload/v1766322003/vasukital-trek-hero2_g5ponr.jpg",
              "https://res.cloudinary.com/dr44hob9b/image/upload/v1766322018/vasukital-trek-hero3_b4l1dj.jpg"
    ],

    subtitle: "A Sacred High-Altitude Journey Beneath the Great Himalayan Giants",

    seo: {
      title: "Nandanvan Vasukital Trek | Mt Shivling, Bhagirathi Peaks, Itinerary & Cost | Planethimalayas",
      description: "The Nandanvan Vasukital Trek is a demanding high-altitude Himalayan trek taking trekkers deep into the Gangotri Glacier basin, offering close-up views of Mt. Shivling, Bhagirathi I–III, Kedardome, Meru, and the pristine Vasukital Lake underneath Vasuki Parvat."
    },

    overview: {
      facts: [
        { emoji: "⏳", label: "Trek Duration", value: "7 Nights / 7 Days" },
        { emoji: "⚡", label: "Trek Grade", value: "Difficult" },
        { emoji: "🏔️", label: "Max Altitude", value: "16,200 ft (Vasukital)" },
        { emoji: "📏", label: "Trek Distance", value: "46–48 Km" },
        { emoji: "🌤️", label: "Best Time", value: "June - July / September - october" },
        { emoji: "🗺️", label: "Region", value: "Gangotri National Park, Uttarakhand" },
        { emoji: "📍", label: "Start Point", value: "Gangotri" },
        { emoji: "🏁", label: "End Point", value: "Gangotri" },
        { emoji: "🧥", label: "Cloakroom facility", value: "Available" }
      ],

      snippet: `The Nandanvan–Vasukital Trek is not merely a high-altitude journey — it is a slow, deliberate walk into the geological and spiritual core of the Indian Himalayas. This is a land where mountains are still being shaped, where glaciers grind valleys into existence, and where silence carries a weight that words often fail to describe.

<br>The journey begins at Gangotri (10,200 ft), one of the most sacred towns in the Himalayas and the revered source of the River Ganga. Here, the Bhagirathi flows young and fierce, cutting through rock and forest before beginning its long journey across the plains. As we step onto the trail, the sound of the river becomes our constant companion — sometimes distant, sometimes thunderous — reminding us that water, ice, and time are the true architects of this landscape.

<br>The initial walk toward Chirbasa and Bhojbasa traces the edge of the massive Gangotri Glacier, one of the longest glaciers in the Himalayas. Ancient chir pine forests thin out as altitude increases, giving way to stark moraine fields, glacial debris, and wide riverbeds carved by seasonal meltwater. Blue sheep are often spotted traversing steep slopes above, while Himalayan griffons and lammergeiers circle effortlessly overhead. Vegetation becomes sparse — hardy alpine shrubs, mosses, and lichens clinging to life in a climate defined by cold winds and intense sunlight.

<br>As Bhojbasa (12,450 ft) comes into view, the scale of the terrain begins to overwhelm the senses. The glacier stretches endlessly, its cracked surface groaning softly beneath the sun. And then, almost suddenly, Mt. Shivling (6,543 m / 21,467 ft) rises into view — sharp, symmetrical, and commanding. Few mountains in the Himalayas evoke such awe. From here onward, the trek shifts from a pilgrimage path into a serious high-mountain expedition.

<br>Ahead lies Gaumukh (13,200 ft), the iconic snout of the Gangotri Glacier — the physical birthplace of the Ganga. Standing before this massive wall of ice, watching icy blue water emerge from its depths, one understands the true scale of glacial power. This is a living, moving river of ice, sculpting the land inch by inch. From Gaumukh, the trail turns technical, crossing the width of the Gangotri Glacier’s terminal moraine — a chaotic world of boulders, shifting rocks, and hidden crevasses that demands absolute focus and respect.

<br>The climb to Nandanvan (14,200 ft) is steep and unrelenting, ascending through loose moraines and unstable rock. Each step must be placed carefully. And then, quite suddenly, the terrain opens into one of the most dramatic alpine meadows in the Himalayas. Nandanvan sits directly opposite the Bhagirathi massif — Bhagirathi I (6,856 m), II (6,512 m), and III (6,454 m) — with Mt. Shivling dominating the skyline and Meru (6,660 m) and Sudarshan (6,507 m) completing a near-perfect amphitheater of peaks. Camps are pitched beside glacial streams, surrounded by walls of rock and ice that glow gold at sunrise and burn crimson at sunset.

<br>This region is the cradle of Indian mountaineering. Countless expeditions have staged their climbs from these very meadows — attempts on Bhagirathi, Shivling, Meru, Kalindi Pass, and beyond. Even today, climbers use Nandanvan and Vasukital as acclimatization grounds, their tents dotting the landscape like small, temporary scars in an otherwise untouched wilderness.

<br>The day hike to Vasukital (16,200 ft) pushes deeper into this raw world. The route follows the Kalindi trail along the lateral moraine of the Chaturangi Glacier, gradually ascending before turning sharply upward across steep, unstable slopes. Fixed ropes are often required here, a reminder that the mountains do not yield easily. And then, at the end of this demanding climb, Vasukital reveals itself — a high-altitude glacial lake resting beneath Vasuki Parvat (6,756 m / 22,165 ft). Often frozen, eerily silent, and framed by barren rock walls, the lake feels untouched by time, a place few ever reach.

<br>Weather in this region is unpredictable and extreme. Days can swing from brilliant sunshine to biting winds within minutes. Nights plunge well below freezing even in summer. The air is thin, the terrain unforgiving, and the isolation complete. Yet within this harshness lies an unmatched beauty — the play of clouds across ice walls, the slow movement of glaciers, and the overwhelming sense of Earth still shaping itself before your eyes.

<br>This trek is not about ticking destinations off a list. It is about understanding scale, patience, and humility. Walking these trails, you witness firsthand the forces that carve mountains, feed rivers, and sustain life far beyond the Himalayas. For seasoned trekkers seeking a profound connection with high-altitude wilderness, Nandanvan–Vasukital is not just a trek — it is a masterclass in nature’s raw power and quiet grace.`
 },

    price: 26900,
    priceNote: "* Gangotri to Gangotri",
    addons: {
      transport: 6000,
      transportNote: "* Rishikesh to Rishikesh.",
      offloadingbag: 5000,
      offloadingNote: "* Maximum weight 9kg/bag"
    },

    inclusionsNote: "🍽️ All Meals – Nutritious vegetarian meals provided from dinner on Day 1 to dinner on Day 7",

    dates: [
      
      { label: "24 May - 30 May", start: "2026-05-24", end: "2026-05-30" },

      { label: "06 Jun - 12 Jun", start: "2026-06-06", end: "2026-06-12" },

      { label: "27 Sep - 03 Oct", start: "2026-09-27", end: "2026-10-03" },

      { label: "11 Oct - 17 Oct", start: "2026-10-11", end: "2026-10-17" },
    ],

    highlights: [
      "Trek alongside the massive Gangotri Glacier, one of the largest glaciers in the Himalayas",
      "Get close-up views of Mt. Shivling, often called the most beautiful mountain in India",
      "Camp at Nandanvan meadow surrounded by Bhagirathi I, II & III, Meru, and Sudarshan peaks",
      "Visit the remote and pristine Vasukital Lake, hidden high above the Gangotri basin",
      "Experience the spiritual atmosphere of Gangotri, one of the Char Dham pilgrimage sites"
    ],

    itinerary: [
      {
    day: 1,
    title: "Arrive in Gangotri (3,048 m / 10,000 ft) | Reporting Day",
    details: "The journey begins with a long but beautiful 9–10 hour drive from Rishikesh, gradually gaining altitude as the road winds past Uttarkashi, the apple orchards of Harsil Valley, and the ever-changing moods of the Bhagirathi River. The final approach to Gangotri feels almost sacred — steep cliffs, deodar forests, and the roar of the river echoing through the valley. By evening, you reach the ancient Gangotri Temple, one of the revered Char Dhams of Uttarakhand. Offering prayers here as the sun sets behind the mountains sets the tone for the days ahead. Nightfall brings crisp mountain air and a peaceful stay at a local guesthouse or hotel."
  },
  {
    day: 2,
    title: "Acclimatization in Gangotri",
    details: "Since Gangotri is at an altitude of 10,000 ft, a full day in Gangotri helps your body adjust to the altitude. The day feels relaxed yet enriching — you can walk to Pandava Gufa, a quiet cave surrounded by pine forests, or visit Surya Kund, where the Bhagirathi crashes through a dramatic gorge. Trek leaders conduct a detailed briefing and gear inspection while the slow pace allows you to observe the wildlife of this region. Himalayan griffon vultures circle the cliffs above, yellow-billed choughs hop fearlessly around temple steps, and mountain breezes drift through the valley. The night is spent once again in Gangotri, giving your body the ideal acclimatization window."
  },
  {
    day: 3,
    title: "Gangotri to Bhojwasa (3,780 m) | 14 km | 6–7 hrs",
    details: "The trek truly begins as you step into the protected limits of Gangotri National Park. The initial trail moves through mixed forests of oak, pine, and birch before transitioning into a more alpine landscape. For much of the day, the Bhagirathi River accompanies you — sometimes as a distant roar, sometimes rushing right beside the trail. The route passes through Chirbasa, a place literally named “the home of pines,” where the forest thickens and the air carries the resinous scent of blue pine. Beyond Chirbasa, vegetation thins out and the valley opens wide. Eventually, you reach the windswept plain of Bhojwasa, named after the bhojpatra (birch) forests that once flourished here. With views of the Bhagirathi peaks dominating the horizon and the last line of trees behind you, you settle into camps pitched beside the river — a dramatic setting for the night."
  },
      {
  day: 4,
  title: "Bhojbasa (12,450 ft) → Nandanvan (14,200 ft) | Trek: 6 km | 4–5 hrs",
  details: "Begin early from Bhojbasa and cross the Bhagirathi River using the fixed trolley system, which may involve some waiting depending on conditions. After the crossing, follow the familiar trail toward Gaumukh, walking along the wide, gravelly riverbed carved by the Bhagirathi. The dramatic ice snout of the Gangotri Glacier soon comes into view — an immense wall of ice and debris from where the sacred Ganga emerges, marking one of the most powerful landscapes in the Indian Himalayas.\n\nFrom Gaumukh, the route diverges from the Tapovan trail. Instead of climbing upward, the path traverses the entire width of the Gangotri Glacier’s terminal moraine. This section is technically demanding and requires extreme caution. You will walk across loose moraines, unstable boulders, and ice-polished rock slabs, with several open crevasses hidden beneath debris. The terrain here is fragile and constantly shifting — it is absolutely essential to stay close to the guide, follow instructions carefully, and avoid unnecessary movements or shortcuts.\n\nAfter safely crossing the glacier, the trail begins a steep ascent on the opposite side, climbing through loose scree, moraines, and large boulders for nearly an hour. This final push demands patience and controlled movement, as the ground remains unstable.\n\nThe effort is richly rewarded upon reaching Nandanvan — a high-altitude alpine meadow dramatically perched above the Gangotri Glacier. The campsite lies beside a clear glacial stream, surrounded by some of the most iconic Himalayan giants. Mt. Shivling (21,467 ft) rises sharply to the south, while Bhagirathi I (22,489 ft), Bhagirathi II (21,290 ft), and Bhagirathi III (21,151 ft) dominate the skyline. Meru (21,850 ft) and Sudarshan Parbat (21,345 ft) complete the amphitheater of peaks, creating a setting that feels both overwhelming and deeply humbling. Overnight camping at Nandanvan."
},
      {
  day: 5,
  title: "Nandanvan (14,200 ft) → Vasukital (16,200 ft) → Nandanvan | Trek: 12 km | 7–8 hrs",
  details: "Depart early from Nandanvan and move eastward toward Vasuki Parvat, following the Kalindi Pass trail. The route initially traces the lateral moraine ridge of the Chaturangi Glacier, offering a steady and largely gradual ascent. This section is deceptively comfortable, with wide views opening toward the Bhagirathi massif while the glacier flows silently below, etched deep into the valley.\n\nAs the meadow ends, the trail descends briefly toward a connecting glacier that drains down from the slopes of Bhagirathi peaks and Vasuki Parvat. After carefully crossing this icy stretch, the route turns sharply upward. What follows is the most demanding section of the day — a near-vertical climb up the opposite lateral moraine leading directly toward Vasukital. The ascent is extremely steep, close to a 90-degree incline in places, composed of loose scree, unstable moraines, and large boulders. Due to the high risk of slipping and rock movement, fixed ropes are commonly used here, usually set up by seasonal climbers. Trekkers must use the rope for both balance and safety while ascending this exposed slope.\n\nOnce this technical section is negotiated, Vasukital suddenly comes into view — a pristine high-altitude lake resting on a flat alpine shelf directly beneath Vasuki Parvat (21,075 ft). The lake sits in stark isolation, often holding ice even during peak summer months. This area serves as a seasonal base camp for climbers attempting Bhagirathi peaks, as well as an important acclimatization ground for expeditions heading toward Kalindi Pass, Satopanth, and other major summits of the region.\n\nSpend time at the lake absorbing the silence and raw grandeur of the surroundings before beginning the descent. The return follows the same route — carefully down-climbing the steep moraine using the fixed rope, followed by an easy and relaxed walk back along the Chaturangi Glacier’s lateral ridge toward Nandanvan.\n\nAs the day winds down, the return journey is illuminated by warm evening light, with the skyline dominated by the striking forms of Mt. Shivling, Meru, and Bhagirathi Parvat. The changing colors across ice, rock, and snow make for a memorable sunset walk back to camp. Overnight stay at Nandanvan."
},
      {
        day: 6,
        title: "Nandanvan (14,200 ft) → Bhojbasa (12,450 ft) | Trek: 6 km | 4–5 hrs",
        details: "Descend carefully back across the glacier to Bhojbasa. Though downhill, the moraine terrain requires focus and balance. The descent offers renewed perspectives of the glacier and surrounding peaks. Rest and recover at Bhojbasa."
      },
      {
        day: 7,
        title: "Bhojbasa (12,450 ft) → Gangotri (10,050 ft) | Trek: 14 km | 4–5 hrs",
        details: "Retrace your steps along the Bhagirathi River back to Gangotri. The return walk feels easier as altitude decreases. Reach Gangotri by afternoon, marking the end of a powerful high-altitude Himalayan journey."
      }
    ],

    didYouKnow: [
      "<b>Mt. Shivling is considered the symbolic representation of Lord Shiva.</b><br>Its near-perfect pyramid shape makes it one of the most photographed peaks in the Himalayas.",
      "<b>Nandanvan has been a base for legendary Indian mountaineering expeditions.</b><br>Many historic climbs of Bhagirathi peaks started from this meadow.",
      "<b>Vasukital remains frozen for most of the year.</b><br>Even in peak summer, floating ice sheets are common on the lake’s surface.",
      "<b>The Gangotri Glacier is one of the primary sources of the Ganga.</b><br>The Bhagirathi River emerges from Gaumukh, just above Bhojbasa."
    ],

    howToReach: {
      air: "Nearest Airport: Jolly Grant Airport, Dehradun (approx. 250 km).",
      train: "Nearest Railway Station: Rishikesh (approx. 235 km).",
      road: "Gangotri is accessible by road from Rishikesh and Dehradun via Uttarkashi.",
      travelTip: "Plan buffer days as road access can be affected by weather or landslides during monsoon."
    },

    gallery: [
              "https://res.cloudinary.com/dr44hob9b/image/upload/v1766321981/vasukital-trek-hero_xealyu.jpg",
              "https://res.cloudinary.com/dr44hob9b/image/upload/v1766321977/vasukital-trek-hero1_zoibct.jpg",
              "https://res.cloudinary.com/dr44hob9b/image/upload/v1766322003/vasukital-trek-hero2_g5ponr.jpg",
              "https://res.cloudinary.com/dr44hob9b/image/upload/v1766322018/vasukital-trek-hero3_b4l1dj.jpg",
              "https://res.cloudinary.com/dr44hob9b/image/upload/v1766322038/vasukital-trek-view3_lwcf5m.jpg",
              "https://res.cloudinary.com/dr44hob9b/image/upload/v1766322032/vasukital-trek-view_jhc2ac.jpg",
              "https://res.cloudinary.com/dr44hob9b/image/upload/v1766322028/vasukital-trek-view6_htdpjt.jpg",
              "https://res.cloudinary.com/dr44hob9b/image/upload/v1766322028/vasukital-trek-view8_azv5ci.jpg",
              "https://res.cloudinary.com/dr44hob9b/image/upload/v1766322016/vasukital-trek-view5_vpleqq.jpg",
              "https://res.cloudinary.com/dr44hob9b/image/upload/v1766322010/vasukital-trek-view4_cxrgvp.jpg",
              "https://res.cloudinary.com/dr44hob9b/image/upload/v1766321997/vasukital-trek-view1_kzttxh.jpg",
              "https://res.cloudinary.com/dr44hob9b/image/upload/v1766321990/gangotri-dham_jlevpb.jpg",
              "https://res.cloudinary.com/dr44hob9b/image/upload/v1766321978/vasukital-trek-view9_yrbpih.jpg",
              "https://res.cloudinary.com/dr44hob9b/image/upload/v1766321978/vasukital-trek-view17_vps6nq.jpg",
              "https://res.cloudinary.com/dr44hob9b/image/upload/v1766321977/vasukital-trek-view12_fn7inx.jpg",
              "https://res.cloudinary.com/dr44hob9b/image/upload/v1766321957/vasukital-trek-view15_fqigas.jpg",
              "https://res.cloudinary.com/dr44hob9b/image/upload/v1766321947/vasukital-trek-view14_jqevkr.jpg",
    ],

    downloadLink: "/docs/Packing_List.pdf",

    faqs: {
     questions: [
  {
    question: "Who should attempt the Nandanvan Vasukital Trek?",
    answer: "The Nandanvan Vasukital Trek is strictly meant for experienced trekkers only. Participants must have prior high-altitude trekking experience above 4,500 m and should be comfortable walking on glaciers, loose moraines, steep ascents, and exposed terrain. This trek is not suitable for beginners or first-time Himalayan trekkers due to its remoteness, technical sections, and physical demands."
  },
  {
    question: "How difficult is the Nandanvan Vasukital Trek?",
    answer: "This trek is classified as Difficult to Very Difficult. The challenges include rapid altitude gain, long trekking hours, glacial crossings, unstable moraine slopes, steep ascents near Vasukital, and extreme weather conditions. The terrain is remote and unforgiving, requiring strong physical endurance and mental resilience."
  },
  {
    question: "Is prior acclimatization mandatory?",
    answer: "Yes, proper acclimatization is mandatory. A minimum acclimatization stay at Gangotri is essential due to the rapid gain in altitude. The itinerary is designed to allow gradual acclimatization, but trekkers must monitor their health closely to avoid Acute Mountain Sickness (AMS), which can be dangerous in this remote region."
  },
  {
    question: "How should I prepare for the trek?",
    answer: "Preparation should begin at least 6–8 weeks before the trek. Trekkers should focus on cardiovascular endurance through running, cycling, or stair climbing, along with strength training for legs and core. Prior experience on high-altitude treks, glacier terrain, and carrying a loaded backpack is strongly recommended."
  },
  {
  question: "What is the best time to do the Nandanvan Vasukital Trek?",
  answer: "The best time to attempt the Nandanvan Vasukital Trek is from mid-May to the end of June, and again from mid-September to the end of October. During these windows, weather conditions are relatively stable and glacier crossings are manageable. Early season offers dramatic snow and ice formations, while the post-monsoon period brings clearer skies and sharper mountain views with colder temperatures. Outside these periods, the region becomes unsafe due to monsoon instability, heavy snowfall, and extreme weather."
  },
  {
    question: "Are permits required for this trek?",
    answer: "Yes, permits for Gangotri National Park are mandatory. Permit charges differ for Indian and foreign nationals and are issued by the forest department. These permits are usually arranged by the trek operator and must be carried throughout the trek."
  },
  {
    question: "How cold does it get on the trek?",
    answer: "Day temperatures range between 5°C to 15°C, while night temperatures can drop to -5°C or lower at higher camps such as Nandanvan. Weather conditions can change rapidly, and strong winds are common at higher altitudes."
  },
  {
    question: "Is water available throughout the trek?",
    answer: "Water is available from glacial streams and snowmelt, but it is not always safe to drink directly. Using a filtered water bottle, chlorine tablets, or purification drops is highly recommended throughout the trek."
  },
  {
    question: "What kind of accommodation is available?",
    answer: "Accommodation beyond Gangotri is in tents only. At Bhojwasa, basic facilities such as GMVN rest house and ashrams are available, but all higher camps including Nandanvan are fully tented camps in remote alpine terrain."
  },
  {
    question: "Is insurance mandatory for this trek?",
    answer: "Yes, high-altitude trekking insurance is mandatory. The insurance must cover emergency evacuation, medical expenses, and high-altitude trekking activities due to the remoteness and technical nature of the route."
  },
  {
    question: "What are the rescue and emergency arrangements?",
    answer: "Rescue operations in this region are challenging due to terrain and weather. Trek operators follow strict safety protocols, carry medical kits, and have evacuation plans in place. In emergencies, assistance may involve long evacuation times and coordination with local authorities."
  },
  {
    question: "Is mobile network available on the trek?",
    answer: "Mobile network is available only at Gangotri. Beyond Gangotri, the trek is completely off-grid with no mobile connectivity."
  }
]
    },

    faqsLink: "/faqs-and-articles"
},


  {
  id: "kedartal-trek",
  name: "Kedartal Trek",
  tags: ["intermediate", "pro", "lake", "glacier", "meadows"],
  difficulty: ["moderate", "difficult"],
  season: ["summer", "autumn"],
  month: ["may", "june", "september", "october"],
  duration: ["6 Nights / 6 Days"],
  region: "uttarakhand-garhwal",
  coordinates: [
    [30.7406, 78.4478], // Dehradun
    [30.9200, 78.4610], // Gangotri
    [30.9405, 78.4689], // Bhoj Kharak
    [30.9637, 78.4804], // Kedar Kharak
    [30.9726, 78.4927], // Kedartal
    [30.9200, 78.4610], // Gangotri (end)
  ],

  heroImage:
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1765889788/kedartal-hero_mexhsu.jpg",

  heroImages: [
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1765889788/kedartal-hero_mexhsu.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1765889846/kedartal-hero1_exnim0.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1765890046/kedartal-hero2_uowfhb.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1765890058/kedartal-hero3_czhrpg.jpg"
  ],

  subtitle: "A Raw Himalayan Adventure",

  seo: {
    title:
      "Kedartal Trek | Difficult High Altitude Trek in Uttarakhand | Itinerary, Cost & Dates | Planethimalayas",
    description:
      "Kedartal Trek (4,750 m) is a challenging high-altitude Himalayan trek in Uttarakhand-Garhwal. Starting from Gangotri, the trail climbs through boulder zones, glacial valleys, and dramatic ridgelines to reach the pristine Kedartal glacial lake beneath Thalay Sagar, Bhrigupanth, and Meru. Ideal for experienced trekkers seeking a raw, expedition-like Himalayan experience."
  },

  overview: {
    facts: [
      { emoji: "⏳", label: "Trek Duration", value: "6 Nights / 6 Days" },
      { emoji: "⚡", label: "Trek Grade", value: "Difficult" },
      { emoji: "🏔️", label: "Max Altitude", value: "4,750 m (Kedartal)" },
      { emoji: "⚡", label: "Trek Distance", value: "Approx. 24 km" },
      { emoji: "🌤️", label: "Best Time", value: "May to September" },
      { emoji: "🗺️", label: "Region", value: "Garhwal Himalayas, Uttarakhand" },
      { emoji: "📍", label: "Start Point", value: "Gangotri (3,100 m)" },
      { emoji: "🏁", label: "End Point", value: "Gangotri" },
      { emoji: "🧥", label: "Cloakroom Facility", value: "Available" },
    ],

    snippet: `
Kedartal is not just a destination — it is an uncompromising encounter with the raw high Himalayas. Perched at an altitude of approximately 4,750 metres, this remote glacial lake lies hidden deep inside the Garhwal Himalayas, surrounded by some of the most formidable granite peaks in India. Towering above the valley are Thalay Sagar (6,904 m), Bhrigupanth (6,772 m), and Meru (6,660 m) — massive walls of rock and ice that dominate the skyline throughout the trek and lend Kedartal its dramatic, intimidating character.
<br>
The trek begins from Gangotri, one of the highest road-head pilgrimage towns in Uttarakhand and the point where the Bhagirathi River flows openly after emerging from the Gaumukh glacier further upstream. From the very first day, the trail offers no warm-up. The route climbs steeply along exposed ridges and rocky shelves, quickly leaving tree line behind and entering a landscape shaped by glaciers, landslides, and constant freeze-thaw cycles.
<br>
As the trail ascends, forests give way to vast boulder sections, moraine fields, and narrow mountain traverses carved into steep valley walls. The Kedartal valley is stark and unforgiving — snow bridges span icy streams, loose rocks demand careful footwork, and the air grows thinner with every kilometre. Camps such as Bhoj Kharak and Kedar Kharak sit high above the valley floor, surrounded by sheer mountain faces and complete isolation.
<br>
The Kedartal valley is also the birthplace of the Kedarganga stream, a glacial tributary that flows down from the lake and eventually meets the Bhagirathi River at Gangotri. This constant presence of glacial water underscores the raw, alpine nature of the terrain — cold, powerful, and ever-shifting.
<br>
The final climb to Kedartal is relentless. A steep ascent over unstable scree and glacier debris eventually reveals the lake — a deep, steel-blue expanse resting beneath vertical granite walls. With towering peaks reflected sharply on its surface and no signs of human settlement anywhere around, Kedartal feels wild, remote, and profoundly humbling.
<br>
Kedartal is a trek meant for seasoned trekkers who seek challenge, exposure, and true high-altitude wilderness. True to the Planethimalayas ethos, this journey strips trekking down to its essentials and rewards effort with rare solitude, dramatic mountain architecture, and one of the most intense alpine landscapes in the Indian Himalayas.
  `
  },

  price: 15900,
  priceNote: "* Gangotri to Gangotri",

  addons: {
    transport: 6000,
    transportNote: "* Dehradun to Dehradun (shared vehicle basis)",
    offloadingbag: 4000,
    offloadingNote: "* Maximum weight 9kg / bag"
  },

  inclusionsNote:
    "🍽️ All Meals – Nutritious high-altitude meals provided from dinner on Day 1 to dinner on Day 6",

  highlights: [
    "Sacred high-altitude Kedartal glacial lake at 4,750 m",
    "Close-up views of Thalay Sagar, Bhrigupanth, and Meru peaks",
    "Challenging terrain with boulder zones and glacial crossings",
    "True expedition-style trekking experience",
    "Remote campsites far from civilisation",
    "One of the toughest and most rewarding treks in Garhwal"
  ],

  itinerary: [
    {
  day: 1,
  title: "Reaching Gangotri (3,100 m) | Drive from Dehradun",
  details: `
The journey to Gangotri begins from Dehradun, following the classic approach route used by trekkers and pilgrims alike. The drive follows the Bhagirathi River for most of the day, passing through Mussoorie, Chamba, and Uttarkashi — the last major town before entering the upper Bhagirathi valley.
<br>
<br>Beyond Uttarkashi, the road narrows and climbs steadily through deep gorges, conifer forests, and scattered mountain settlements. The terrain becomes noticeably more alpine as you approach Gangotri, with colder air, reduced vegetation, and increasing views of high Himalayan slopes. By late afternoon or evening, arrive at Gangotri (3,100 m), check into a guesthouse, and spend time acclimatising to the altitude. Dinner and overnight stay at Gangotri.
  `
},
    {
  day: 2,
  title: "Acclimatisation Day at Gangotri (3,100 m)",
  details: `
This day is reserved for acclimatisation and exploration around Gangotri to help the body adapt to the altitude before moving higher. Short walks are undertaken around the town, allowing trekkers to stay active without gaining additional height.
<br>
<br>Visit key landmarks in the Gangotri region including Surya Kund and Gauri Kund — natural rock formations and water pools near the temple complex — as well as Pandav Gufa, located a short walk away along the forested trail. Time is also spent at the Gangotri Temple area, observing the upper Bhagirathi valley and the surrounding mountain terrain.
<br>
<br>The remainder of the day is focused on rest, hydration, and preparation. Trekkers are advised to drink plenty of water, avoid exertion, and carefully attend the trek briefing conducted by the trek leader. Route details, safety protocols, gear checks, and expectations for the days ahead are discussed. Dinner and overnight stay at Gangotri, getting ready to begin the trek towards Bhoj Kharak the following day.
  `
},
    {
  day: 3,
  title:
    "Gangotri (3,100 m) to Bhoj Kharak (4,030 m) | 6 km Trek | 5–6 Hours",
  details: `
The trek begins from Gangotri with an immediate and sustained ascent, setting the tone for what lies ahead on the Kedartal route. The trail quickly leaves the settlement behind and starts climbing along the steep valley walls, crossing the Bhagirathi River before entering forested terrain.
<br>
<br>The climb is continuous and demanding. The path winds through fir forests, with rocky underfoot conditions dominating much of the trail. As you gain height, the Kedarganga can be heard flowing far below, reinforcing the steepness of the valley. Short, flatter sections appear occasionally, offering brief moments to recover before the ascent resumes.
<br>
<br>Higher up, the forest transitions into birch trees — locally known as bhoj — marking a clear change in altitude and vegetation. The trail remains narrow and rocky in parts, requiring careful foot placement and steady pacing. Hydration is important today, with a few natural water points available along the route to refill bottles.
<br>
<br>As the forest thins out, the trail becomes more exposed, passing across narrow rocky sections carved into the mountain side. These stretches demand focus but are manageable with calm movement and guidance from the trek leader.
<br>
<br>Bhoj Kharak is a small, high-altitude campsite located on limited grassy patches along the trail, enclosed by steep valley walls. The setting feels remote and rugged, offering the first true sense of the isolation that defines the Kedartal trek. Dinner and overnight stay at Bhoj Kharak.
  `
},
    {
  day: 4,
  title:
    "Bhoj Kharak (4,030 m) to Kedar Kharak (4,300 m) | 2.5 km Trek | 3–4 Hours",
  details: `
<br>Today’s trek is shorter in distance but continues the gradual climb deeper into the Kedartal valley. The trail begins with a steep ascent straight out of Bhoj Kharak, cutting through the last stretches of bhoj (birch) forest before crossing the tree line.
<br>
<br>After the initial climb, the terrain opens up into high-altitude meadows and wide alpine slopes. The gradient eases out, allowing a steadier pace as the trail undulates gently with moderate ascents and descents. With vegetation thinning, views expand dramatically, and the snow-covered mass of Bhrigupanth begins to dominate the skyline.
<br>
<br>This section of the valley feels quieter and more expansive. The open terrain increases the chances of spotting high-altitude wildlife such as bharal (blue sheep), goral, and Himalayan bird species. As altitude increases, the air grows noticeably colder, and small streams along the route often carry icy water, sometimes edged with frost.
<br>
<br>Kedar Kharak is located on a broad, dry alpine meadow beside a wide glacial stream, surrounded by massive rock faces and snowbound peaks. The campsite feels exposed and remote, offering uninterrupted views of the surrounding mountains. As evening approaches, the setting sun casts warm tones across the meadow and the face of Bhrigupanth, creating one of the most striking campsites of the trek. Dinner and overnight stay at Kedar Kharak.
  `
},
    {
  day: 5,
  title:
    "Kedar Kharak (4,300 m) to Kedartal (4,875 m) & Return | 5.4 km | 6–7 Hours",
  details: `
This is the most demanding and anticipated day of the Kedartal trek. An early start is essential as the route to the lake is long, exposed, and completely alpine in nature. The trail climbs steadily out of Kedar Kharak, immediately entering a stark, rocky landscape with no vegetation and no water sources along the way.
<br>
<br>The ascent is continuous, navigating through a maze of loose rocks, moraine, and uneven boulder sections. The terrain is physically taxing and requires constant attention to foot placement. With minimal descents, the effort remains sustained throughout the climb, making this the toughest day of the trek. Due to the open terrain and high altitude, weather conditions can change quickly, and trekkers must maintain a steady pace to reach the lake safely.
<br>
<br>As you approach the upper reaches of the valley, the massive granite walls of the Kedartal basin come into view. About half a kilometre before the lake, the imposing face of Thalay Sagar rises dramatically across a rocky ridge, marking the final approach. Crossing this ridge, the trail descends slightly and Kedartal suddenly reveals itself — a striking emerald-blue glacial lake resting beneath towering peaks at nearly 4,900 metres.
<br>
<br>Temperatures drop sharply at the lake, and the environment feels harsh and isolated. The still waters of Kedartal reflect the surrounding mountains with remarkable clarity, creating a moment that makes the long ascent worthwhile. Time at the lake is limited due to altitude and weather considerations.
<br>
<br>After soaking in the views, retrace the same route back to Kedar Kharak. The descent demands caution on loose rocks and tired legs. Arrive back at camp by late afternoon or early evening for dinner and overnight stay at Kedar Kharak.
  `
},
    {
  day: 6,
  title:
    "Kedar Kharak to Gangotri (3,100 m) | Return Trek | 6–7 Hours",
  details: `
The final day of the trek is a long descent back to Gangotri, retracing the same trail taken on the ascent. Starting early from Kedar Kharak, the route drops steadily through the Kedartal valley, crossing familiar sections of rocky terrain, exposed ledges, and narrow mountain paths that now demand equal care while descending.
<br>
<br>As the trail winds back through the upper valley and into forested stretches, the day offers a chance to reflect on the physical and mental challenges faced over the past days — the steep climbs, high altitude, and relentless terrain that defined the journey. Though the direction is downhill, caution remains essential, especially along narrow traverses and loose rock sections where focus is required till the very end.
<br>
<br>Gradually, signs of civilisation begin to return. Mobile network reappears as you approach Gangotri, along with the unmistakable sounds of the bustling temple area and the constant roar of the Bhagirathi River below. The transition from remote alpine silence to the energy of Gangotri feels abrupt yet grounding.
<br>
<br>The trek concludes upon reaching Gangotri, marking the end of a demanding yet deeply rewarding Himalayan journey. Overnight stay or onward travel arrangements can be made from Gangotri.
  `
}
  ],

  howToReach: {
    air:
      "Nearest airport: Jolly Grant Airport, Dehradun. From there, drive to Gangotri.",
    train:
      "Nearest railway station: Dehradun / Haridwar. Continue by road to Gangotri.",
    road:
      "Dehradun → Uttarkashi → Gangotri via NH134.",
    travelTip:
      "Arrive in Dehradun a day early for permit formalities and briefing."
  },

  didYouKnow: [
    "Kedartal is also known as Shiva’s Lake and is considered sacred by locals.",
    "The surrounding peaks — Thalay Sagar and Meru — are legendary in global mountaineering history.",
    "The lake remains frozen for most of the year, even during early summer.",
    "Unlike many Himalayan treks, Kedartal involves minimal forest walking and maximum alpine terrain.",
    "The trail was historically used by shepherds but later adopted by mountaineers.",
    "Weather can change rapidly due to the valley’s glacial geography."
  ],

  gallery: [
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1765893072/kedartal-view12_kv5nns.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1765892743/kedartal-view11_exmfb2.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1765892421/kedartal-view10_ygpp5a.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1765892083/kedartal-view9_goxt2v.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1765891768/kedartal-view8_ncninu.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1765891442/kedartal-view7_klhhhq.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1765891113/kedartal-view6_gvby3j.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1765890774/kedartal-view5_nj9dhd.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1765890469/kedartal-view4_s7sphf.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1765890134/kedartal-view3_a3jxx4.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1765890114/kedartal-view2_twolal.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1765890094/kedartal-view1_t6djnj.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1765890059/kedartal-view_riztmg.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1765890058/kedartal-hero3_czhrpg.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1765890046/kedartal-hero2_uowfhb.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1765889846/kedartal-hero1_exnim0.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1765889788/kedartal-hero_mexhsu.jpg"
  ],

  downloadLink: "/docs/Packing_List.pdf",

 faqs: {
  questions: [
    {
      question: "Who should attempt the Kedartal Trek?",
      answer:
        "Kedartal is strictly meant for experienced trekkers who have prior high-altitude trekking experience (4,000 m and above). Trekkers should be comfortable with long days, continuous steep ascents, rocky terrain, and exposed mountain sections. This trek demands strong physical fitness, mental resilience, and the ability to move confidently in rugged alpine terrain."
    },
    {
      question: "How should I prepare physically for the Kedartal Trek?",
      answer:
        "Preparation should begin at least 6–8 weeks before the trek. A strong cardiovascular base is essential — regular running, stair climbing, cycling, or hiking with a loaded backpack is recommended. Strength training focusing on legs, core, and balance will help handle steep climbs and descents. Prior experience on difficult Himalayan treks significantly improves safety and comfort."
    },
    {
      question: "Why are two acclimatisation nights at Gangotri important?",
      answer:
        "Gangotri sits at approximately 3,100 m, and the trek involves rapid altitude gain beyond 4,000 m. Spending two nights here allows the body to adapt gradually, reducing the risk of Acute Mountain Sickness (AMS). Skipping or rushing acclimatisation significantly increases the chances of altitude-related complications later in the trek."
    },
    {
      question: "Is altitude sickness a major concern on this trek?",
      answer:
        "Yes. Kedartal involves sustained exposure to high altitude with limited evacuation options once on the trail. Symptoms of AMS can escalate quickly if acclimatisation is inadequate. Trekkers must report symptoms early and strictly follow the trek leader’s instructions."
    },
    {
      question: "Are any permits or permissions required for Kedartal?",
      answer:
        "Yes. Entry permits are required as the trek falls within a regulated high-altitude zone in Uttarakhand. Planethimalayas arranges all mandatory permissions for Indian nationals. Foreign nationals require additional clearances, which involve higher permit fees and longer processing time."
    },
    {
      question: "Do foreign nationals need to pay more for this trek?",
      answer:
        "Yes. Forest permits and regulatory fees for foreign nationals are higher for Kedartal. These additional costs are charged separately and must be paid in advance during the booking process."
    },
    {
      question: "Is travel or trekking insurance mandatory?",
      answer:
        "Yes. Trekking insurance covering high-altitude trekking and emergency evacuation is mandatory for all participants. This is a non-negotiable safety requirement due to the remote and demanding nature of the trek."
    },
    {
      question: "Is offloading (porter for backpack) available on Kedartal?",
      answer:
        "Yes, offloading is available at an additional cost. However, trekkers should still be capable of carrying a light daypack and moving confidently on exposed sections. Offloading does not reduce the physical challenge of the terrain."
    },
    {
      question: "Is there a cloakroom or luggage storage facility at Gangotri?",
      answer:
        "Yes. Cloakroom or safe luggage storage is available at Gangotri, allowing trekkers to leave behind unnecessary items before starting the trek."
    },
    {
      question: "Is mobile network available during the trek?",
      answer:
        "Mobile network is available intermittently at Gangotri. Beyond Gangotri, there is no reliable network on the trail. Connectivity returns only upon descending back close to Gangotri at the end of the trek."
    },
    {
      question: "What is the best time to do the Kedartal Trek?",
      answer:
        "The best time to attempt Kedartal is from mid-May to June and again from September to early October. These windows offer relatively stable weather, safer trail conditions, and clearer mountain views."
    },
    {
      question: "Is Kedartal safe during the monsoon season?",
      answer:
        "No. The Kedartal trek is not recommended during the monsoon months. Heavy rainfall increases the risk of landslides, loose rock movement, slippery trails, and unpredictable river crossings, making the route unsafe."
    },
    {
      question: "Are technical climbing skills required for Kedartal?",
      answer:
        "No technical climbing or rope work is involved. However, trekkers must be comfortable walking on loose rocks, narrow ledges, and steep gradients at high altitude."
    },
    {
      question: "Can beginners attempt the Kedartal Trek?",
      answer:
        "No. Kedartal is not suitable for beginners. It is an expedition-style trek meant only for trekkers with solid prior experience in high-altitude Himalayan terrain."
    }
  ]
},

  faqsLink: "/pages/faqs-and-articles",
},

  {
    id: "phulara-ridge-trek",
    name: "Phulara Ridge Trek",
    tags: ["beginner", "meadows", "ridgewalk"],
    difficulty: ["easy", "moderate"],
    season: ["spring", "autumn"],
    month: ["april", "may", "june", "september", "october", "november"],
    duration: ["5 Nights / 5 Days"],
    region: "uttarakhand-garhwal",
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
        { emoji: "⏳", label: "Trek Duration", value: "5 Nights / 5 Days" },
        { emoji: "⚡", label: "Trek Grade", value: "Easy / Moderate" },
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

    price: 10900,
    priceNote: "* Sankri to Sankri",
    addons: {
      transport: 4000, 
      offloadingbag: 1500,
      transportNote: "* Dehradun to Dehradun",
      offloadingNote: "* Maximum weight 9kg/bag"
    },

    inclusionsNote: "🍽️ All Meals – Nutritious meals provided from dinner on Day 1 to dinner on Day 5",

    dates: [
           
      { label: "11 Apr - 15 Apr", start: "2026-04-11", end: "2026-04-15" },
      { label: "12 Apr - 16 Apr", start: "2026-04-12", end: "2026-04-16" },
      { label: "18 Apr - 22 Apr", start: "2026-04-18", end: "2026-04-22" },
      { label: "19 Apr - 23 Apr", start: "2026-04-19", end: "2026-04-23" },
      { label: "25 Apr - 29 Apr", start: "2026-04-25", end: "2026-04-29" },
      { label: "26 Apr - 30 Apr", start: "2026-04-26", end: "2026-04-30" },
      { label: "02 May - 06 May", start: "2026-05-02", end: "2026-05-06" },
      { label: "03 May - 07 May", start: "2026-05-03", end: "2026-05-07" },
      { label: "09 May - 13 May", start: "2026-05-09", end: "2026-05-13" },
      { label: "10 May - 14 May", start: "2026-05-10", end: "2026-05-14" },
      { label: "16 May - 20 May", start: "2026-05-16", end: "2026-05-20" },
      { label: "17 May - 21 May", start: "2026-05-17", end: "2026-05-21" },
      { label: "23 May - 27 May", start: "2026-05-23", end: "2026-05-27" },
      { label: "24 May - 28 May", start: "2026-05-24", end: "2026-05-28" },
      { label: "30 May - 03 Jun", start: "2026-05-30", end: "2026-06-03" },
      { label: "31 May - 04 Jun", start: "2026-05-31", end: "2026-06-04" },
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
    details: "Early in the morning, trekkers are picked up from Dehradun, whether from the ISBT, railway station, or airport, and begin the scenic drive toward Sankri. The route winds through charming towns and villages like Mussoorie, Purola, Mori, and Netwar, offering glimpses of pine forests, apple orchards, and the serene Tons River valley. Along the way, the drive passes the entry gate of Govind Pashu Vihar National Park near Netwar, hinting at the wilderness ahead. Finally, the group arrives in Sankri, a small yet vibrant village that serves as the gateway for popular treks such as Kedarkantha, Har Ki Dun, and Phulara Ridge. Nestled amidst stunning views of the Swargarohini massif, Sankri provides a cozy overnight stay in a guesthouse or hotel, giving trekkers a gentle introduction to the Himalayan adventure that awaits."
  },
  {
    day: 2,
  title: "Sankri to Juda ka Talab (Trek – 4 km | 4–5 hours), Altitude: ~9,000 ft (2,750 m)",
  details: "The trek begins with a gentle ascent from Sankri, winding past quaint wooden houses and neatly terraced fields that dot the hillside. As the trail climbs, trekkers pass under a dense canopy of pine, maple, and oak forests, where the air is fresh and filled with the sounds of chirping Himalayan birds, including grey-headed woodpeckers and colourful barbets. Emerging from the trees, the serene Juda ka Talab comes into view — a high-altitude glacial lake surrounded by towering pines. In early season, the lake is often partially frozen, while in summer its waters mirror the surrounding forest and sky. The campsite offers flat clearings beside the lake, providing a peaceful setting to relax and soak in the scenery. Overnight stay is in tents, and trekkers should be prepared for sharply dropping night temperatures at this high-altitude location."
  },
  {
  day: 3,
  title: "Juda ka Talab to Bhoj Gadi (Trek – 4.5 km | 4–5 hours), Altitude: ~11,200 ft (3,400 m)",
  details: "The day begins with a steady climb through mixed forests of pine and silver birch, where sunlight filters through the canopy, casting playful patterns on the forest floor. Early in the ascent, trekkers encounter small streams and rustic wooden bridges — perfect spots to refill water and pause for a breath. The trail gradually opens into patches of meadows dotted with yellow marsh marigolds and delicate purple lilies, leading to notable landmarks like the Gecko Rock, which resembles a lizard perched proudly atop the hill. Passing the clearing of Sikolta with its scattered Gujjar huts, the ascent continues through denser forest patches, navigating occasional fallen trees and short landslide sections. Soon, larger meadows like Karsu Thatch appear, vibrant with seasonal blooms and offering glimpses of Kedarkantha and Swargarohini peaks. The trail slowly climbs to Dhunda Top, the highest point of the ridge, before gently descending into a flat, lush green meadow where Bhoj Gadi campsite awaits. A clear stream runs nearby, providing fresh water. Trekkers can enjoy a short acclimatization walk along the ridge, with sweeping views of Purola, Kedarkantha, Swargarohini, Devkyara, and surrounding peaks. The sunset, moonrise, and sunrise here create unforgettable spectacles, making Bhoj Gadi a magical stop in the Himalayas."
  },
  {
  day: 4,
  title: "Bhoj Gadi to Pushtara via Phulara Ridge (Trek – 7 km | 6–7 hours), Altitude: Ridge top ~12,150 ft (3,700 m)",
  details: "The day starts with a steady ascent from Bhoj Gadi toward the top of the Phulara Ridge, a journey that takes about 45 minutes. Along the way, Himalayan Monals often appear, their vibrant feathers adding flashes of color to the trail. Reaching the ridge, trekkers are greeted by a staggering panorama of snow-peaked mountains that seem to move alongside you as you walk. The ridge trail is a spine of the hill, with slight ascents and descents, offering a feeling of 'walking in the sky' reminiscent of European alpine treks. Stone markers along the trail hint at grand vistas ahead, revealing peaks such as Hanuman Top, Sarutal Top, DKD, Bandarpoonch, Kalanag, Swargarohini, Hata Peak, Ranglana, Devkyara Valley, Lekha Top, Vijay Top, and Kedarkantha. After navigating a tricky snow patch near Sarutal and carefully negotiating short descents and ascents, the trail opens into the expansive meadows of Pushtara. This high-altitude paradise is framed by rugged peaks, dotted with wildflowers, and fed by streams and the Taloti lake formed from glacier melt. Trekkers set up camp in these vast meadows, under skies so wide that stargazing becomes an unforgettable nightly ritual. The Gujjar graveyard nearby adds a touch of mystery, perfect for sharing stories around the campfire."
  },
  {
  day: 5,
  title: "Pushtara to Taluka – Drive to Sankri (Trek – 8 km | 4–5 hours + Drive 1 hr)",
  details: "The day begins with a gentle descent from the Pushtara meadows, winding through alpine slopes dotted with wildflowers and the occasional Gujjar graveyard adding a touch of mystery to the trail. As the path drops, pine and rhododendron forests envelope the trekker, offering shade and the occasional sighting of Himalayan Monals. The descent is gradual, with intermittent ups and downs, revealing panoramic views of the snow-capped peaks behind and the lush valleys ahead. After crossing small streams and rocky patches, the trail meets the motorable road near Taluka village, a quaint settlement of traditional wooden houses and orchards. From here, a scenic one-hour drive returns you to Sankri, bringing the trek to a close. The evening is perfect for relaxation, reflecting on the journey, and soaking in the final views of the majestic mountains before overnight stay at a guesthouse or hotel in Sankri."
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

    downloadLink: "/docs/Packing_List.pdf",

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
    tags: ["intermediate", "pro", "lake", "meadows"],
    difficulty: ["moderate", "difficult"],
    season: ["spring", "summer", "autumn"],
    month: ["april", "may", "june", "september", "october"],
    duration: ["7 Nights / 7 Days"],
    region: "uttarakhand-garhwal",
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
        { emoji: "⏳", label: "Trek Duration", value: "7 Nights / 7 Days" },
        { emoji: "⚡", label: "Trek Grade", value: "Moderate / Difficult" },     
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

    price: 17400,
    priceNote: "* Sankri to Sankri",
    addons: {
      transport: 4000, 
      offloadingbag: 2000,
      transportNote: "* Dehradun to Dehradun",
      offloadingNote: "* Maximum weight 9kg/bag"
    },

    inclusionsNote: "🍽️ All Meals – Nutritious meals provided from dinner on Day 1 to dinner on Day 7",

    dates: [
       
    { label: "28 Mar - 03 Apr", start: "2026-03-28", end: "2026-04-03" },
    { label: "11 Apr - 17 Apr", start: "2026-04-11", end: "2026-04-17" },
    { label: "18 Apr - 24 Apr", start: "2026-04-18", end: "2026-04-24" },
    { label: "02 May - 08 May", start: "2026-05-02", end: "2026-05-08" },
    { label: "16 May - 22 May", start: "2026-05-16", end: "2026-05-22" },
    { label: "30 May - 05 Jun", start: "2026-05-30", end: "2026-06-05" },
      
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
  details:
    "The day begins with the descent from Seematra, retracing the familiar trail as it winds gently down the valley. Walking in the soft morning light, the landscape feels calmer and more reflective than the days before. Instead of descending directly to the Seema bridge, the trail passes through Osla village, offering a glimpse into its century-old wooden homes and the revered Someshwar Temple, where local traditions and daily life continue much as they have for generations.<br><br>From Osla, the trail continues downhill past Pawani Garat and along forested paths to reach Gangad, a quiet riverside hamlet tucked beside the Supin River. After a short rest, vehicles are arranged for the drive back to Sankri, following the familiar mountain road through deep valleys and pine forests.<br><br>Arrival at Sankri by evening marks the official end of the trek. With the mountains now behind you, it’s time to unwind, reflect on the journey, and carry back memories of remote trails, village life, and days spent deep in the Himalayas."
},

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

    downloadLink: "/docs/Packing_List.pdf",

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
    tags: ["beginner", "meadows"],
    difficulty: ["easy"],
    season: ["spring", "summer", "autumn"],
    month: ["may", "april", "june", "march", "september", "october", "november"],
    duration: ["6 Nights / 6 Days"],
    region: "uttarakhand-garhwal",
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
        { emoji: "⏳", label: "Trek Duration", value: "6 Nights / 6 Days" },
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

    price: 12900,
    priceNote: "* Sanri to Sankri",
    addons: {
      transport: 4000, 
      offloadingbag: 1800,
      transportNote: "* Dehradun to Dehradun",
      offloadingNote: "* Maximum weight 9kg/bag"
    },

    inclusionsNote: "🍽️ All Meals – Nutritious meals provided from dinner on Day 1 to dinner on Day 6",

    dates: [
      
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
  title: "Trek to Pawani Garat | Distance: 8–9 km | Time: 4–5 hrs | Altitude: ~1,900 m",
  details:
    "The day begins with the descent from Seematra, retracing parts of the familiar trail as the valley slowly opens up below. The walk feels gentler in the morning light, with forests thinning out and village paths appearing more frequently.<br><br>Instead of heading directly toward the Seema bridge, the trail passes through Osla village — a cultural highlight of the trek. Here, you walk past centuries-old wooden houses and the revered Someshwar Temple, offering a close look at the traditional lifestyle and deep-rooted customs of the region.<br><br>Continuing downhill, the trail winds through forest sections and terraced slopes before reaching Pawani Garat, a quiet riverside clearing. Surrounded by greenery and flowing water, this spot makes for a peaceful halt after a fulfilling day of walking. The evening is spent resting and soaking in the calm of the lower valley."
  },
  {
  day: 6,
  title: "Trek to Dhatmeer Roadhead – Drive to Sankri | Distance: 6–7 km Trek + Drive",
  details:
    "The final day starts with a relaxed descent from Pawani Garat, following village trails and forest paths toward the Dhatmeer roadhead. As altitude drops further, the surroundings gradually shift from dense forest to open valleys and scattered settlements, signalling the end of the trekking journey.<br><br>Upon reaching the roadhead at Dhatmeer, vehicles are arranged for the drive back to Sankri. The drive retraces scenic mountain roads along rivers and pine-covered slopes, bringing you back to the familiar base town by afternoon or early evening.<br><br>With the trek officially complete, the journey concludes in Sankri — carrying back memories of remote trails, cultural encounters, and days spent deep in the Garhwal Himalayas."
  },
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
    
    downloadLink: "/docs/Packing_List.pdf",

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
  id: "satopanth-lake-trek",
  name: "Satopanth Lake Trek",
  tags: ["intermediate", "lake", "glacier", "meadows"],
  difficulty: ["moderate"],
  season: ["summer", "monsoon"],
  month: ["june", "july", "august", "september"],
  region: "uttarakhand-garhwal",
  duration: "5 Nights / 5 Days",
  coordinates: [
    [30.5550, 79.5670],   // Joshimath
    [30.7366, 79.4930],   // Mana
    [30.7429, 79.4553]    // Satopanth Lake
  ],

  heroImage: "https://res.cloudinary.com/dr44hob9b/image/upload/v1766239294/satopanth_lake_qicjen.jpg",

  heroImages: [
   "https://res.cloudinary.com/dr44hob9b/image/upload/v1766239294/satopanth_lake_qicjen.jpg",
   "https://res.cloudinary.com/dr44hob9b/image/upload/v1766239410/satopanth_lake-trek-view17_jvauzq.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1766238387/satopanth_lake-trek-view7_upnjoo.jpg",
  ],

  subtitle: "A Sacred Himalayan Journey to the Abode of the Gods",

  seo: {
    title: "Satopanth Lake Trek | Mythology, Itinerary, Best Time & Cost | Planethimalayas",
    description: "Satopanth Lake Trek (15,100 ft) is a spiritually rich Himalayan journey in Uttarakhand, tracing mythological trails from Mana village through glaciers, alpine meadows, and ancient legends associated with the Pandavas and the Trimurti."
  },

  overview: {
    facts: [
      { emoji: "⏳", label: "Trek Duration", value: "5 Nights / 5 Days" },
      { emoji: "⚡", label: "Trek Grade", value: "Moderate" },
      { emoji: "🏔️", label: "Max Altitude", value: "15,100 ft (Satopanth Lake)" },
      { emoji: "📏", label: "Trek Distance", value: "22–24 Km" },
      { emoji: "🌤️", label: "Best Time", value: "June to September" },
      { emoji: "🗺️", label: "Region", value: "Garhwal Himalayas, Uttarakhand" },
      { emoji: "📍", label: "Start Point", value: "Mana Village" },
      { emoji: "🏁", label: "End Point", value: "Badrinath" },
      { emoji: "🧥", label: "Cloakroom facility", value: "Not Available" }
    ],

    snippet: `The Satopanth Lake Trek is not just a walk to a high-altitude lake — it is a journey into one of the most spiritually charged and visually dramatic corners of the Garhwal Himalayas. Hidden deep above the Alaknanda Valley, Satopanth Lake rests at around 15,100 ft, cradled by towering peaks, ancient glaciers, and silence so profound it feels timeless. This is a trail where mythology, wilderness, and raw Himalayan beauty coexist seamlessly.

<br>The trek begins near the sacred town of Badrinath, one of the revered Char Dham pilgrimage sites, and moves through Mana village, known as India’s last village near the Indo-Tibetan border. Mana itself is steeped in legend — home to Bhim Pul, the roaring Saraswati River, and stories from the Mahabharata that still live in local memory. From here, the trail gradually leaves the pilgrim paths behind and enters a world shaped by glaciers, rock, and altitude.

<br>Walking alongside the glacial waters of the Alaknanda River, the landscape shifts dramatically with every passing kilometer. Lush river valleys slowly give way to wide alpine meadows like Laxmi Van, believed to be a resting place of Goddess Lakshmi. Further ahead, the terrain turns rugged and austere, crossing moraines, boulder sections, and glacial debris that remind trekkers of the raw forces that shape these mountains.

<br>The route is dotted with breathtaking natural landmarks. Vasudhara Falls, plunging dramatically into the valley below, is one of the most iconic sights on the trail — its thundering waters fed directly by glaciers above. Sahastradhara, meaning “a thousand streams,” presents a surreal sight where countless freshwater rivulets cascade down the mountain face, creating a living tapestry of flowing water. These waterfalls are not just visual spectacles; they are vital water sources and living symbols of the glaciers that sustain the valley.

<br>As altitude increases, vegetation thins, and the landscape becomes vast and stark. Hardy alpine grasses, juniper shrubs, and rare high-altitude flowers cling to life in the short Himalayan summer. Wildlife sightings may include blue sheep (bharal) navigating steep slopes, Himalayan marmots whistling from rocky outcrops, and high-altitude birds such as lammergeiers circling effortlessly above the cliffs.

<br>Dominating the skyline throughout the trek are some of Garhwal’s most legendary peaks. Chaukhamba I (7,138 m) rises like a massive fortress guarding the valley, while Neelkanth (6,596 m) — often called the Queen of Garhwal — stands in commanding elegance. Peaks like Balakun and neighboring ice-clad ridges add to the overwhelming sense of scale, making every campsite feel small beneath the mountains.

<br>The final approach to Satopanth Lake is both physically demanding and emotionally powerful. The trail crosses glacial terrain and rocky ridgelines before the lake suddenly reveals itself — a pristine, emerald-green body of water with a distinct triangular shape. According to Hindu belief, each corner of the lake is occupied by Brahma, Vishnu, and Mahesh, and the lake is said to be their meditation ground. Swimming or disturbing the waters is strictly forbidden, and the stillness of the place commands quiet respect rather than celebration.

<br>Standing at Satopanth, surrounded by towering rock walls, snowfields, and absolute silence, the atmosphere feels otherworldly. There are no crowds, no distractions, and no sense of urgency — only the sound of wind, distant ice movement, and the weight of the mountains around you. It is this rare combination of mythological depth, high-altitude wilderness, and raw solitude that has earned Satopanth its reputation as the “doorway to heaven.”

<br>The Satopanth Lake Trek is ideal for trekkers who seek more than just scenery. It demands respect for altitude, patience with rugged terrain, and an appreciation for slow, meaningful journeys. In return, it offers an experience that feels deeply personal — a trek where every step is layered with legend, every valley tells a story, and the destination leaves a lasting imprint long after the trail ends.
` },

  price: 16900,
  priceNote: "* Joshimath to Badrinath",

  addons: {
    transport: 7000,
    transportNote: "* Rishikesh to Rishikesh",
    offloadingbag: 4000,
    offloadingNote: "* Maximum weight 9kg/bag"
  },

  inclusionsNote: "🍽️ All Meals – Nutritious vegetarian meals provided from packed lunch on Day 1 to dinner on Day 5",

  dates: [
      
      { label: "31 May - 04 Jun", start: "2026-05-31", end: "2026-06-04" },

      { label: "14 Jun - 18 Jun", start: "2026-06-14", end: "2026-06-18" },
      { label: "28 Jun - 02 Jul", start: "2026-06-28", end: "2026-07-02" },

      { label: "20 Sep - 24 Sep", start: "2026-09-20", end: "2026-09-24" },

      { label: "04 Oct - 08 Oct", start: "2026-10-04", end: "2026-10-08" },
      { label: "18 Oct - 22 Oct", start: "2026-10-18", end: "2026-10-22" },
  ],

  highlights: [
    "Trek to the sacred Satopanth Lake, revered as the meditation site of the Hindu Trinity",
    "Walk along the Alaknanda River through glacial valleys and dramatic moraines",
    "Close-up views of major Garhwal peaks including Chaukhamba I (7,138 m) and Neelkanth (6,596 m)",
    "Explore Mana Village — India’s last village near the Indo-Tibetan border",
    "Experience a rare blend of mythology, high-altitude wilderness, and spiritual solitude"
  ],

  itinerary: [
    {
      day: 1,
      title: "Reporting at Joshimath (6,150 ft)",
      details: "Arrive at Joshimath by afternoon and check into your guesthouse. Joshimath serves as a vital acclimatization base for treks in the Garhwal Himalayas. Spend the day resting, hydrating well, and taking short walks around the town. In the evening, a briefing session covers route details, altitude precautions, gear checks, and local regulations. Early dinner and overnight stay at Joshimath."
    },
    {
  day: 2,
  title: "Drive Joshimath → Mana (10,500 ft) & Trek to Laxmi Van (11,800 ft) | Trek: 7–8 km | 4–5 hrs",
  details: "Start early with a scenic drive to Mana, India’s last village near the Indo–China border, where permits are verified before the trek begins. From Mana, the trail branches left along the Alaknanda River, initially following a well-paved pilgrim path. Around 3 km into the trek, reach the majestic Vasudhara Falls—a 400 ft cascade revered for its sacred waters, where trekkers can refill bottles. Beyond the falls, the trail transitions into glacial moraines and rocky terrain, gradually gaining altitude. After a steady ascent, arrive at Laxmi Van, a serene meadow shaded by Bhoj Patra trees and believed to be the resting place of Goddess Lakshmi. The campsite offers views of the Alkapuri Glacier, the source of the Alaknanda River, flowing from the base of Balakun Peak. Overnight stay in tents near the river. Natural water sources available."
},
    {
  day: 3,
  title: "Trek Laxmi Van (11,800 ft) → Chakrateertha (13,800 ft) | Trek: 5 km | 4–5 hrs",
  details: "Today’s trek is more demanding than the previous day, with an altitude gain of over 2,000 ft as you enter the dramatic Satopanth Valley. The trail continues along the left bank of the Alaknanda River, gradually transitioning into open grasslands that run through the terminal moraine of the Dhano Glacier. As you progress, the landscape becomes increasingly alpine and, on clear days, the majestic Bhagirathi peaks begin to reveal themselves ahead. After trekking for around 5 km, reach the spectacular Sahastradhara—an impressive cascade formed by over a hundred small waterfalls flowing down a massive rock face. From here, Mt. Neelkanth dominates the skyline to your left. Since weather conditions tend to change rapidly post noon, an early start is crucial. Chakrateertha campsite lies about 30 minutes beyond Sahastradhara, set on a flat clearing surrounded by towering Himalayan peaks. Temperatures range between 5°C to 10°C during the day and can drop to 0°C to -5°C at night. Proper layering is essential. This altitude also demands close monitoring for AMS symptoms such as headache, nausea, fatigue, dizziness, or loss of appetite—report immediately to the Trek Leader if any signs appear. Overnight stay in tents amidst pristine wilderness."
},
    {
  day: 4,
  title: "Trek Chakrateertha (13,800 ft) → Satopanth Tal (14,100 ft) → Chakrateertha | Trek: 6–7 km | 5–6 hrs",
  details: "Today is the most anticipated and visually striking day of the trek as you journey to the sacred Satopanth Tal. Wake up to a breathtaking amphitheatre of peaks—Mt. Chaukhamba standing tall at the center, Mt. Neelkanth to the left, and Mt. Balakun guarding the right—an unforgettable Himalayan panorama. The trek begins on gentle, flat grasslands for the first couple of kilometers, offering a relaxed start before the terrain gradually becomes rugged. The trail then weaves through boulder zones and glacial moraines, a technically tricky section that demands careful footing; trekking poles are highly recommended here. As you continue along the ridge, the lake remains hidden until the final ascent, adding to the sense of anticipation. Suddenly, Satopanth Tal reveals itself—an expansive, triangular glacial lake with a perimeter of over one kilometer, shimmering in deep shades of blue. Steeped in mythology, it is believed that the holy trinity—Brahma, Vishnu, and Mahesh—meditated at the three corners of the lake. Nearby stands a small stone shelter, said to be the abode of the revered sage Mauni Baba. Remarkably, the lake’s crystal-clear waters remain pristine throughout the year. On exceptionally clear days, trekkers can spot three of the legendary seven steps of the Swargarohini Glacier, believed to be the path taken by the Pandavas on their ascent to heaven. Spend time absorbing the silence, scale, and spiritual energy of this sacred place before beginning the descent back to Chakrateertha. The return trek takes approximately 2–3 hours. Overnight stay in tents."
},
    {
  day: 5,
  title: "Trek Chakrateertha → Badrinath (10,300 ft) via Laxmivan & Mana | Trek: 15 km | 5–6 hrs",
  details: "Today marks the final day of trekking as you descend from the high alpine terrain back to the sacred town of Badrinath. An early start is essential due to the long distance involved. After breakfast, begin retracing the same trail used during the ascent. The descent is gradual yet steady, first leading down to the serene meadows of Laxmivan, followed by a continued descent towards Mana—the last village of India near the Indo-Tibetan border. From Mana, the trail transitions into a gentle walk towards Badrinath, offering a comfortable finish to the journey. Upon reaching Badrinath, check into a hotel and take time to rest and freshen up. In the evening, explore the local market, visit the revered Badrinath Temple, or unwind at the natural hot water spring, a perfect way to relax tired muscles after days in the mountains."
}
  ],

  didYouKnow: [
    "<b>Satopanth Lake is triangular in shape.</b><br>Each corner is associated with Brahma, Vishnu, and Mahesh.",
    "<b>The trail overlaps with the legendary Swargarohini path.</b><br>Believed to be the route taken by the Pandavas toward heaven.",
    "<b>Swimming in Satopanth Lake is strictly forbidden.</b><br>It is considered deeply sacred by locals and pilgrims.",
    "<b>Neelkanth Peak is called the 'Queen of Garhwal'.</b><br>Its reflection is often visible during clear mornings."
  ],

  howToReach: {
    air: "Nearest Airport: Jolly Grant Airport, Dehradun (approx. 290 km from Joshimath).",
    train: "Nearest Railway Station: Haridwar / Rishikesh. Continue by road to Joshimath.",
    road: "Joshimath is well connected via Haridwar–Rishikesh–Chamoli route.",
    travelTip: "Plan an extra buffer day in case of weather-related delays in the mountains."
  },

  gallery: [
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1766238287/satopanth_lake-trek-view6_j09ngy.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1766238387/satopanth_lake-trek-view7_upnjoo.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1766238900/satopanth_lake-trek-view8_ktrdui.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1766238153/satopanth_lake-trek-view5_o23vab.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1766239179/satopanth_lake-trek-view14_vo9cf9.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1766239200/satopanth_lake-trek-view10_qwonei.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1766239203/satopanth_lake-trek-view11_a6rxos.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1766239204/satopanth_lake-trek-view12_o0n8o6.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1766239211/satopanth_lake-trek-view15_chvrnd.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1766239218/satopanth_lake-trek-view20_wggqr2.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1766239223/satopanth_lake-trek-view21_r65prx.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1766239234/satopanth_lake-trek-view23_veuyo7.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1766239240/satopanth_lake-trek-view24_b7bjmw.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1766239243/satopanth_lake-trek-view13_ueedzs.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1766239252/satopanth_lake-trek-view16_pa7u4h.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1766239279/satopanth_lake-trek-view26_ts2rv1.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1766239286/satopanth_lake-trek-view22_v0wgng.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1766239297/satopanth_lake-trek-view28_wyraoe.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1766239304/satopanth_lake-trek-view27_ynlfot.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1766239355/satopanth_lake-trek-view29_mjlvbd.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1766239358/satopanth_lake-trek-view2_lzuv7k.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1766239368/satopanth_lake-trek-view_dloz1q.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1766239394/satopanth_lake-trek-view3_m3dser.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1766239412/satopanth_lake-trek-view9_qjfdwc.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1766239423/satopanth_lake-trek-view19_tcmi1q.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1766239428/satopanth_lake-trek-view18_cwo6gs.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1766239294/satopanth_lake_qicjen.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1766239410/satopanth_lake-trek-view17_jvauzq.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1766239315/satopanth_lake-trek-view25_kaqujl.jpg",

  ],

  downloadLink: "/docs/Packing_List.pdf",

  faqs: {
    questions: [
      {
        question: "Who should attempt the Satopanth Lake Trek?",
        answer: "This trek is suitable for fit beginners with prior trekking experience and intermediate trekkers comfortable with long walking days and high altitude."
      },
      {
        question: "How difficult is the Satopanth Lake Trek?",
        answer: "It is a moderate trek with rocky terrain and glacier sections. Altitude is the primary challenge rather than technical difficulty."
      },
      {
        question: "Is acclimatization important for this trek?",
        answer: "Yes. Spending a night at Joshimath is essential to reduce the risk of altitude sickness."
      },
      {
        question: "Are permits required?",
        answer: "Yes. Forest permits are required and are arranged at Mana village. Foreign nationals may require additional documentation."
      },
      {
        question: "What is the best time to do this trek?",
        answer: "June to September offers the safest conditions. Early season has snow, while late monsoon offers greener landscapes but occasional rain."
      },
      {
        question: "What kind of weather should I expect?",
        answer: "Day temperatures range between 10–15°C, while nights can drop to 0°C or below near Satopanth."
      },
      {
        question: "Is travel insurance mandatory?",
        answer: "Strongly recommended, especially covering high-altitude trekking and evacuation."
      },
      {
        question: "What nearby places can be visited with extra time?",
        answer: "Badrinath Temple, Vasudhara Falls, Mana village attractions, and Valley of Flowers (seasonal)."
      }
    ]
  },

  faqsLink: "/faqs-and-articles"
},

  {
  id: "kuari-pass-trek",
  name: "Kuari Pass Trek",
  tags: ["beginner", "meadows"],
  difficulty: ["easy", "moderate"],
  season: ["winter", "spring", "autumn"],
  month: ["september", "october", "november", "december", "january", "february", "march", "april"],
  region: "uttarakhand-garhwal",
  duration: "5 Nights / 5 Days",
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
      { emoji: "⏳", label: "Trek Duration", value: "5 Nights / 5 Days" },
      { emoji: "⚡", label: "Trek Grade", value: "Easy / Moderate" },
      { emoji: "🏔️", label: "Max Altitude", value: "12,516 ft (Kuari Pass)" },
      { emoji: "⚡", label: "Trek Distance", value: "30–35 Km" },
      { emoji: "🌤️", label: "Best Time", value: "November to April" },
      { emoji: "🗺️", label: "Region", value: "Garhwal Himalayas, Uttarakhand" },
      { emoji: "📍", label: "Start Point", value: "Joshimath" },
      { emoji: "🏁", label: "End Point", value: "Joshimath" },
      { emoji: "🧥", label: "Cloakroom Facility", value: "Not available" },
    ],
    snippet: `The Kuari Pass Trek — often called the legendary Lord Curzon Trail — is a journey straight into the grand amphitheater of the Garhwal Himalayas. It begins quietly above Joshimath, where ancient oak, deodar, and fiery-red rhododendron forests form a living cathedral of light and shadow. As you climb gently through these old woods, the trail suddenly opens into the rolling grasslands of Chitrakantha and Gorson Bugyal, vast alpine meadows that glow gold in autumn, burst with wildflowers in spring, and transform into pristine snowfields through winter.

<br>It’s here that Kuari Pass shows its real magic — a skyline so dramatic and so close that it feels like the mountains are leaning in to greet you. Nanda Devi, India’s highest accessible peak, rises in unmatched elegance alongside Chaukhamba, Dronagiri, Kamet, Neelkanth, and the twin massifs of Hathi–Ghodi Parvat. Nowhere else in Uttarakhand does such a majestic parade of 6,000–7,000 m summits reveal itself so openly and so continuously.

<br>The trail winds through quiet shepherd settlements and age-old grazing routes, where the scent of juniper hangs in the air and the bells of distant mules echo softly across the valleys. You walk through the buffer zone of the Nanda Devi Biosphere Reserve, a UNESCO World Heritage region alive with Himalayan monals, lammergeiers, and rare high-altitude flora that thrive in this protected wilderness.

<br>In winter, Kuari Pass becomes one of India’s most beautiful snow treks — a sparkling world of powder-white slopes, frozen streams, and crisp blue skies framed by some of the most iconic peaks of the Indian Himalayas. In spring and autumn, it turns gentle and colorful, offering long, peaceful walks across open ridgelines and sunlit meadows.

<br>Accessible, rewarding, and rich in both natural grandeur and mountain culture, the Kuari Pass Trek is not just a high-altitude adventure — it’s a graceful introduction to the soul of the Himalayas, a journey where every step reminds you why these mountains have inspired explorers for over a century.`  },

  price: 10400,
  priceNote: "* Joshimath to Joshimath",
  addons: {
    transport: 6000,
    offloadingbag: 1500,
    transportNote: "* Rishikesh to Rishikesh",
    offloadingNote: "* Maximum weight 9kg/bag"
  },

  inclusionsNote: "🍽️ All Meals – From packed lunch on Day 2 to packed lunch on Day 5",

  dates: [   
{ label: "05 Jan - 09 Jan", start: "2026-01-05", end: "2026-01-09" },
{ label: "12 Jan - 16 Jan", start: "2026-01-12", end: "2026-01-16" },
{ label: "19 Jan - 23 Jan", start: "2026-01-19", end: "2026-01-23" },
{ label: "26 Jan - 30 Jan", start: "2026-01-26", end: "2026-01-30" },

{ label: "02 Feb - 06 Feb", start: "2026-02-02", end: "2026-02-06" },
{ label: "09 Feb - 13 Feb", start: "2026-02-09", end: "2026-02-13" },
{ label: "16 Feb - 20 Feb", start: "2026-02-16", end: "2026-02-20" },
{ label: "23 Feb - 27 Feb", start: "2026-02-23", end: "2026-02-27" },

{ label: "02 Mar - 06 Mar", start: "2026-03-02", end: "2026-03-06" },
{ label: "09 Mar - 13 Mar", start: "2026-03-09", end: "2026-03-13" },
{ label: "16 Mar - 20 Mar", start: "2026-03-16", end: "2026-03-20" },
{ label: "23 Mar - 27 Mar", start: "2026-03-23", end: "2026-03-27" },
{ label: "30 Mar - 03 Apr", start: "2026-03-30", end: "2026-04-03" },

{ label: "06 Apr - 10 Apr", start: "2026-04-06", end: "2026-04-10" },
{ label: "13 Apr - 17 Apr", start: "2026-04-13", end: "2026-04-17" },
{ label: "20 Apr - 24 Apr", start: "2026-04-20", end: "2026-04-24" },
{ label: "27 Apr - 01 May", start: "2026-04-27", end: "2026-05-01" },

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

  downloadLink: "/docs/Packing_List.pdf",

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
  id: "gulabi-kantha-trek",
  name: "Gulabi Kantha Trek",
  tags: ["meadows", "beginner"],
  difficulty: ["easy"],
  season: ["summer", "monsoon", "winter", "spring"],
  month: ["march", "april", "may", "june", "july", "august", "september", "october", "december", "january"],
  region: "uttarakhand",
  duration: "4 Nights / 5 Days",
  coordinates: [
    [31.0146, 78.4534], // Hanuman Chatti (start)
    [31.0146, 78.4534], // Hanuman Chatti (end)
  ],

  heroImage: "https://res.cloudinary.com/dr44hob9b/image/upload/v1766670797/gulabi-kantha-trek-hero_xz4rxq.webp",

  heroImages: [
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1766670797/gulabi-kantha-trek-hero_xz4rxq.webp",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1766670797/Mount-Bandarpoonch-from-Gulabi-kantha_rzofn8.webp",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1766670798/gulabi-kantha-trek-view_a2jod3.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1766670800/gulabi-kantha-trek-view1_yrlzqp.webp"
  ],

  subtitle: "The Pink Mountain Above Yamuna Valley",

  seo: {
    title: "Gulabi Kantha Trek | Itinerary, Cost & Dates | Planethimalayas",
    description:
      "Gulabi Kantha Trek (12,000 ft) is a lesser-known all-season trek near Yamunotri offering meadows, forests, snowfields, and 360° views of Bandarpunch, Swargarohini, and Chaukhambha."
  },

  overview: {
    facts: [
      { emoji: "⏳", label: "Trek Duration", value: "4 Nights / 5 Days" },
      { emoji: "⚡", label: "Trek Grade", value: "Easy" },
      { emoji: "🏔️", label: "Max Altitude", value: "13,200 ft (Gulabi Kantha Summit)" },
      { emoji: "⚡", label: "Trek Distance", value: "26 Km" },
      { emoji: "🌤️", label: "Best Time", value: "September to May" },
      { emoji: "🗺️", label: "Region", value: "Uttarkashi District, Uttarakhand" },
      { emoji: "📍", label: "Start Point", value: "Hanuman Chatti" },
      { emoji: "🏁", label: "End Point", value: "Hanuman Chatti" },
      { emoji: "🧥", label: "Cloakroom facility", value: "Not available" },
    ],
    snippet: `The Gulabi Kantha Trek is a quiet Himalayan journey tucked deep inside the Yamuna Valley of Uttarakhand — a trail that balances accessibility with rare solitude and unfolds differently with every season. Despite lying close to major pilgrimage and trekking routes such as Yamunotri Temple and the Dodital Lake trail, Gulabi Kantha has somehow remained off the radar, preserving an old-world calm where forests feel undisturbed and mountain views arrive without crowds.

<br>The journey begins from Hanuman Chatti, at the sacred confluence of the Yamuna River and the Hanuman Ganga. As you leave the road behind, the trail gently climbs through traditional villages where wooden houses cling to slopes and daily life still follows the rhythm of seasons rather than schedules. Soon, the path slips into dense forests of oak, pine, and towering deodar. Sunlight filters through the canopy in soft beams, the forest floor smells of pine needles and damp earth, and birdsong becomes your most constant companion. The ascent is gradual, allowing the body to adapt naturally as the trail slowly gains height.

<br>As you move higher, the forests begin to thin and wide grassy clearings emerge — an unmistakable sign that you are approaching the high Himalayan meadows. These open stretches feel expansive and quiet, broken only by the sound of wind and distant water streams. Walking here feels unhurried; the trail invites you to slow down, look around, and notice how the landscape opens up with every step.

<br>One of Gulabi Kantha’s defining qualities is its remarkable seasonal versatility. In summer, the meadows turn lush green and alive with wild Himalayan flowers, while clear mountain streams crisscross the trail, offering constant sources of fresh water. During the monsoon, low-hanging clouds roll through the valley, wrapping the forests and grasslands in mist and giving the trek a dramatic, almost dreamlike atmosphere. In winter, these same meadows disappear under deep snow, transforming the region into a quiet white expanse — a landscape so open and gentle that parts of it, especially around Seema Thatch, hold strong potential for winter skiing.

<br>Spring brings the trek’s most distinctive character. Rhododendron forests burst into bloom, painting entire slopes in shades of red and pink. It is during this season that the mountain truly earns its name — Gulabi Kantha, meaning “Pink Mountain”. Walking through these flowering forests, with petals scattered along the trail and snow-capped peaks rising beyond the trees, feels both intimate and surreal.

<br>The summit of Gulabi Kantha, rising to around 13,200 ft, offers a sweeping 360-degree panorama that feels far grander than the effort required to reach it. Directly ahead stand the towering peaks of the Garhwal Himalaya — Bandarpunch (20,729 ft / 6,316 m) dominating the skyline, alongside Kala Nag / Black Peak (20,955 ft / 6,387 m). The massive Chaukhambha massif (23,406 ft / 7,138 m) rises further east, while the Gangotri group of peaks, including summits over 21,000 ft, stretch across the horizon. To the north and west, Jaonli Peak (21,758 ft / 6,632 m), Srikantha (22,493 ft / 6,856 m), and Swargarohini I (20,512 ft / 6,252 m) stand tall, creating a continuous wall of high Himalayan giants.

<br>On the opposite side of the summit lies the route toward Dodital Lake (10,860 ft / 3,310 m), reached via Darwa Pass (approximately 13,615 ft / 4,150 m) — a classic alpine crossing known for its pristine forests and mythological importance as the birthplace of Lord Ganesha. From the top of Gulabi Kantha, the landscape drops gently toward this quieter world of lakes, forests, and ancient legends.

<br>Gulabi Kantha is a trek for those who want the Himalayas to feel personal rather than overwhelming — a place where trails remain peaceful, views arrive without competition, and every season tells a different story. Whether walked through flowers, mist, or snow, it offers an experience that feels less like a checklist and more like a conversation with the mountains themselves.`
},

  price: 10900,
  priceNote: "* Hanuman Chatti to Hanuman Chatti",
  addons: {
    transport: 4000,
    offloadingbag: 1500,
    transportNote:
      "* Dehradun to Dehradun.",
    offloadingNote: "* Maximum weight 9kg / bag"
  },

  inclusionsNote:
    "🍽️ All Meals – Nutritious meals provided from dinner on Day 1 to breakfast on Day 5",

  dates: [   
{ label: "05 Jan - 09 Jan", start: "2026-01-05", end: "2026-01-09" },
{ label: "12 Jan - 16 Jan", start: "2026-01-12", end: "2026-01-16" },
{ label: "19 Jan - 23 Jan", start: "2026-01-19", end: "2026-01-23" },
{ label: "26 Jan - 30 Jan", start: "2026-01-26", end: "2026-01-30" },

{ label: "02 Feb - 06 Feb", start: "2026-02-02", end: "2026-02-06" },
{ label: "09 Feb - 13 Feb", start: "2026-02-09", end: "2026-02-13" },
{ label: "16 Feb - 20 Feb", start: "2026-02-16", end: "2026-02-20" },
{ label: "23 Feb - 27 Feb", start: "2026-02-23", end: "2026-02-27" },

{ label: "02 Mar - 06 Mar", start: "2026-03-02", end: "2026-03-06" },
{ label: "09 Mar - 13 Mar", start: "2026-03-09", end: "2026-03-13" },
{ label: "16 Mar - 20 Mar", start: "2026-03-16", end: "2026-03-20" },
{ label: "23 Mar - 27 Mar", start: "2026-03-23", end: "2026-03-27" },
{ label: "30 Mar - 03 Apr", start: "2026-03-30", end: "2026-04-03" },

{ label: "06 Apr - 10 Apr", start: "2026-04-06", end: "2026-04-10" },
{ label: "13 Apr - 17 Apr", start: "2026-04-13", end: "2026-04-17" },
{ label: "20 Apr - 24 Apr", start: "2026-04-20", end: "2026-04-24" },
{ label: "27 Apr - 01 May", start: "2026-04-27", end: "2026-05-01" },

  ],

  highlights: [
    "All-season trek offering completely different landscapes throughout the year",
    "Panoramic 360-degree summit views of major Garhwal peaks",
    "Spring rhododendron blooms that give Gulabi Kantha its name",
    "Vast alpine meadows like Seema Thatch, ideal for winter skiing",
    "Less crowded trail despite proximity to Yamunotri and Dodital",
  ],

  itinerary: [
    {
  day: 1,
  title: "Reporting Day at Hanuman Chatti (7,600 ft)",
  details:
    "<strong>• Reporting Location: Hanuman Chatti | Optional transport from Dehradun available.</strong><br>• Day 1 is the reporting day at Hanuman Chatti. Trekkers can choose to reach the base on their own and get in touch with our team upon arrival, or opt for the optional transport service arranged from Dehradun. The cost of this shared transport is borne directly by participants and will be communicated in advance.<br><br>The drive from Dehradun to Hanuman Chatti takes approximately 6–8 hours, covering around 180 km. Depending on road conditions and traffic, the route is taken either via Mussoorie and Kempty Falls or via Vikasnagar and the Yamuna Valley road. The Mussoorie route offers scenic mountain views and forested stretches, while the Vikasnagar route is often preferred during peak traffic hours for a smoother drive.<br><br>As the road follows the Yamuna River upstream, the surroundings gradually shift from busy hill towns to quieter valleys and dense forested slopes. On clear days, distant views of Bandarpunch Peak begin to appear as you approach the upper valley. Hanuman Chatti lies at the confluence of the Yamuna and Hanuman Ganga rivers and serves as an important base for treks and pilgrimages in the region.<br><br>After arrival, trekkers check into a guest house or homestay. The rest of the day is kept relaxed for rest, acclimatization, gear check, and a briefing by the trek leader in preparation for the days ahead."
},
    {
  day: 2,
  title: "Hanuman Chatti to Kandola Chhani (8,900 ft)",
  details:
    "<strong>• Trek distance: ~5 km | Duration: 4–5 hours | Altitude gain: ~1,300 ft.</strong><br>• Day 2 marks the beginning of the Gulabi Kantha trek as you leave Hanuman Chatti after an early breakfast and step onto the trail. The ascent is gentle and steady, making it an ideal first day of walking. The path winds through village trails, forest sections, and open clearings, with small mountain streams flowing alongside at intervals.<br><br>As you climb higher, the trail leads you through Nishni Village — a scenic settlement known for its traditional wooden houses built in the classic Yamuna Valley architectural style. The village reflects a deep-rooted mountain culture, with terraced fields, narrow paths, and warm local life. One of the highlights here is a beautifully crafted multi-storey Shiva temple, which holds strong spiritual significance for the villagers and stands as a symbol of the region’s heritage.<br><br>Beyond Nishni, the landscape begins to open up. The trail passes through rhododendron forests and terraced farmlands before emerging into Kandola Chhani — a peaceful high-altitude clearing surrounded by oak and pine forests. The word “Chhani” refers to seasonal settlements used by villagers for farming and cattle grazing, and the area consists of a few wooden huts and small cultivated fields growing crops such as potatoes, kidney beans, and millets.<br><br>The campsite at Kandola Chhani is set on soft grassy ground with distant views of snow-clad peaks. As evening approaches, the sky often turns shades of orange and pink, creating a calm, almost meditative atmosphere. The day ends here with time to relax, soak in the surroundings, and rest well, as the trek gradually moves deeper into the mountains over the coming days."
},
    {
  day: 3,
  title: "Kandola Chhani to Seema Thatch (11,400 ft)",
  details:
    "<strong>• Trek distance: ~6 km | Duration: 6–7 hours | Altitude gain: ~2,500 ft.</strong><br>• Day 3 takes you from Kandola Chhani deeper into the alpine zone as the trail steadily climbs toward the vast meadows of Seema Thatch. The day involves a mix of gradual ascents and steeper sections, making it one of the more physically demanding but visually rewarding days of the trek.<br><br>The walk begins gently, winding through dense oak and maple forests where sunlight filters softly through the canopy. The forest feels alive — leaves rustle overhead, birds call from hidden branches, and the air carries a cool, earthy freshness. As you gain altitude, rhododendron trees begin to appear in abundance, their red and pink blooms lining the trail and spreading across the slopes like a natural carpet, especially vibrant during spring and early summer.<br><br>As the forest gradually thins, the landscape opens into rolling alpine meadows. Wildflowers scatter the grasslands, and the views begin to widen with every step. Along the way, it is common to spot shepherds grazing their flocks in these high-altitude pastures — a glimpse into a traditional way of life that has existed here for generations and blends seamlessly with the landscape.<br><br>The final approach to Seema Thatch is marked by an increasing sense of openness. The trees fall away completely, revealing a vast, high-altitude meadow flanked by rugged mountain slopes. Seema Thatch stretches across gentle ridges and open plains, offering an immediate feeling of space and quiet after the forested climb.<br><br>As evening sets in, Seema Thatch becomes truly magical. The setting sun paints the sky in shades of orange, pink, and deep purple, casting a warm golden glow across the grasslands and distant peaks. This is the perfect place to slow down, sit quietly, and absorb the scale and beauty of the Himalayas. The night is spent camping under a clear, star-filled sky, with the openness of the meadow amplifying the sense of calm and isolation."
},
    {
  day: 4,
  title: "Seema Thatch to Gulabi Kantha Summit (13,200 ft) and descend to Kandola Chhani",
  details:
    "<strong>• Trek distance: ~12 km | Duration: 9–10 hours.</strong><br>• Day 4 is the summit day and the most rewarding day of the Gulabi Kantha trek. The day begins early from Seema Thatch, with a steady ascent toward Gulabi Kantha — the highest point of the trek. The climb from Seema Thatch to the summit is relatively short but slightly steep, requiring slow and consistent pacing. Depending on the season, the trail alternates between alpine grasslands covered in wildflowers during summer and spring, and snow patches during winter months.<br><br>As you gain height, the surroundings grow more expansive. The trail passes Jhandi Top, a natural viewpoint offering early glimpses of the surrounding Himalayan ranges. With every step upward, the landscape opens further, and the sense of scale becomes more dramatic. Soon, you reach the summit of Gulabi Kantha at approximately 13,200 ft — a broad, open top that rewards you with an uninterrupted 360-degree panorama.<br><br>From the summit, some of the most prominent peaks of the Garhwal Himalayas dominate the horizon. You can clearly spot Bandar Punch I and II, the Swargarohini massif, the Gangotri massif, Srikanth Peak, and Mt. Jaonli rising high above the surrounding valleys. The vastness of the view, combined with the quiet of the high mountains, makes the effort of the climb deeply worthwhile.<br><br>After spending ample time at the summit, soaking in the views and capturing photographs, you descend back to Seema Thatch, where a hot lunch awaits at the campsite. Post-lunch, the trek continues downhill toward Kandola Chhani. The descent is long but comparatively easier, retracing your route through the wide alpine meadows and forest sections encountered earlier. This return walk offers a fresh perspective on the landscape, allowing you to appreciate the untouched beauty of the region once more.<br><br>By the time you arrive at Kandola Chhani in the late afternoon, the memories of standing atop Gulabi Kantha — surrounded by snow-clad peaks and vast open spaces — remain etched in your mind. The night is spent camping at Kandola Chhani, marking the end of one of the most memorable days of the trek."
},
  {
  day: 5,
  title: "Kandola Chhani to Hanuman Chatti – Departure",
  details:
    "<strong>• Trek distance: 5 km | Duration: 3–4 hours.</strong><br><strong>• Drive distance (optional): ~180 km | Duration: 6–7 hours.</strong><br>• The final day of the trek begins with a relaxed breakfast at Kandola Chhani, followed by a gradual descent to Hanuman Chatti. The trail winds down through dense forests, open clearings, and familiar mountain landscapes, offering a quiet and reflective walk as the journey comes to an end.<br><br>Upon reaching Hanuman Chatti, the trek officially concludes. Trekkers can take a short break here to unwind and relive the experiences of the past few days. Participants may choose to plan their onward journey independently. For those who have opted for Planethimalayas’ optional transport service, the vehicle will be ready at Hanuman Chatti for the drive back to Dehradun.<br><br>As you leave the mountains behind and head back toward the city, the memories of Gulabi Kantha—its alpine meadows, panoramic Himalayan views, and serene trails—remain etched in your mind, marking a fulfilling end to a quiet and colorful Himalayan journey."
}
  ],

  didYouKnow: [
    "Gulabi Kantha gets its name from the pink rhododendron blooms seen during spring.",
    "The trek lies close to Dodital, believed to be the birthplace of Lord Ganesha.",
    "Seema Thatch is considered suitable for developing winter skiing activities.",
    "Despite its proximity to Yamunotri, the trail remains largely unexplored.",
    "The region is part of the upper Yamuna Valley, rich in both ecology and mythology."
  ],

  howToReach: {
    air: "Nearest Airport: Jolly Grant Airport, Dehradun (210 km). From there, travel by road to Hanuman Chatti.",
    train: "Nearest Railway Station: Dehradun. Taxis and buses are available to Barkot and Hanuman Chatti.",
    road: "From Dehradun: 210 km / 8–9 hrs via Mussoorie, Kempty Falls, and Barkot.",
    travelTip: "Reach Dehradun a day early to ensure a relaxed start due to long mountain travel."
  },

  gallery: [
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1766670797/gulabi-kantha-trek-hero_xz4rxq.webp",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1766670797/Mount-Bandarpoonch-from-Gulabi-kantha_rzofn8.webp",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1766670800/gulabi-kantha-trek-view1_yrlzqp.webp"
  ],

  downloadLink: "/docs/Packing_List.pdf",

  faqs: {
    questions: [
      {
        question: "Who can participate in the Gulabi Kantha trek?",
        answer:
          "The trek is suitable for beginners with basic fitness as well as experienced trekkers looking for a quieter trail."
      },
      {
        question: "Is Gulabi Kantha suitable for winter trekking?",
        answer:
          "Yes, the trek can be done in winter and offers beautiful snow-covered landscapes."
      },
      {
        question: "What kind of fitness is required?",
        answer:
          "Regular walking, light jogging, or stair climbing for a few weeks prior to the trek is sufficient."
      },
      {
        question: "Will there be mobile network coverage?",
        answer:
          "Mobile connectivity is available at Hanuman Chatti but becomes unreliable once the trek begins."
      },
      {
        question: "What permits are required?",
        answer:
          "Forest and local permits are required and are arranged by the trek organizer."
      },
    ],
  },

  faqsLink: "/pages/faqs-and-articles",
},

{
  id: "kedarkantha-trek",
  name: "Kedarkantha Trek",
  tags: ["beginner", "meadows", "peak"],
  difficulty: ["easy", "moderate"],
  season: ["winter", "spring", "autumn"],
  month: ["september", "october", "november", "december", "january", "february", "march", "april"],
  region: "uttarakhand-garhwal",
  duration: "5 Nights / 5 Days",
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
      { emoji: "⏳", label: "Trek Duration", value: "5 Nights / 5 Days" },
      { emoji: "⚡", label: "Trek Grade", value: "Easy / Moderate" },
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

  price: 10400,
  priceNote: "* Sankri to Sankri",
  addons: {
    transport: 4000,
    offloadingbag: 1500,
    transportNote: "* Dehradun to Dehradun",
    offloadingNote: "* Maximum weight 9kg/bag",
  },

  inclusionsNote: "🍽️ All Meals – From dinner on Day 1 to dinner on Day 5",

  dates: [   
{ label: "05 Jan - 09 Jan", start: "2026-01-05", end: "2026-01-09" },
{ label: "12 Jan - 16 Jan", start: "2026-01-12", end: "2026-01-16" },
{ label: "19 Jan - 23 Jan", start: "2026-01-19", end: "2026-01-23" },
{ label: "26 Jan - 30 Jan", start: "2026-01-26", end: "2026-01-30" },

{ label: "02 Feb - 06 Feb", start: "2026-02-02", end: "2026-02-06" },
{ label: "09 Feb - 13 Feb", start: "2026-02-09", end: "2026-02-13" },
{ label: "16 Feb - 20 Feb", start: "2026-02-16", end: "2026-02-20" },
{ label: "23 Feb - 27 Feb", start: "2026-02-23", end: "2026-02-27" },

{ label: "02 Mar - 06 Mar", start: "2026-03-02", end: "2026-03-06" },
{ label: "09 Mar - 13 Mar", start: "2026-03-09", end: "2026-03-13" },
{ label: "16 Mar - 20 Mar", start: "2026-03-16", end: "2026-03-20" },
{ label: "23 Mar - 27 Mar", start: "2026-03-23", end: "2026-03-27" },
{ label: "30 Mar - 03 Apr", start: "2026-03-30", end: "2026-04-03" },

{ label: "06 Apr - 10 Apr", start: "2026-04-06", end: "2026-04-10" },
{ label: "13 Apr - 17 Apr", start: "2026-04-13", end: "2026-04-17" },
{ label: "20 Apr - 24 Apr", start: "2026-04-20", end: "2026-04-24" },
{ label: "27 Apr - 01 May", start: "2026-04-27", end: "2026-05-01" },

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

  downloadLink: "/docs/Packing_List.pdf",

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
  tags: ["family", "beginner", "meadows"],
  difficulty: ["easy"],
  season: ["autumn", "winter", "spring"],
  month: ["september", "october", "november", "december", "january", "february", "march", "april"],
  region: "uttarakhand-garhwal",
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
      { emoji: "⏳", label: "Trek Duration", value: "4 Nights / 5 Days" },
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

  price: 8900,
  priceNote: "* Barsu to Barsu",
  addons: {
    transport: 4000,
    offloadingbag: 1200,
    transportNote: "* Rishikesh to Rishikesh",
    offloadingNote: "* Maximum weight 9kg/bag"
  },

  inclusionsNote: "🍽️ All Meals – From dinner on Day 1 to breakfast on Day 5",

 dates: [   
{ label: "05 Jan - 09 Jan", start: "2026-01-05", end: "2026-01-09" },
{ label: "12 Jan - 16 Jan", start: "2026-01-12", end: "2026-01-16" },
{ label: "19 Jan - 23 Jan", start: "2026-01-19", end: "2026-01-23" },
{ label: "26 Jan - 30 Jan", start: "2026-01-26", end: "2026-01-30" },

{ label: "02 Feb - 06 Feb", start: "2026-02-02", end: "2026-02-06" },
{ label: "09 Feb - 13 Feb", start: "2026-02-09", end: "2026-02-13" },
{ label: "16 Feb - 20 Feb", start: "2026-02-16", end: "2026-02-20" },
{ label: "23 Feb - 27 Feb", start: "2026-02-23", end: "2026-02-27" },

{ label: "02 Mar - 06 Mar", start: "2026-03-02", end: "2026-03-06" },
{ label: "09 Mar - 13 Mar", start: "2026-03-09", end: "2026-03-13" },
{ label: "16 Mar - 20 Mar", start: "2026-03-16", end: "2026-03-20" },
{ label: "23 Mar - 27 Mar", start: "2026-03-23", end: "2026-03-27" },
{ label: "30 Mar - 03 Apr", start: "2026-03-30", end: "2026-04-03" },

{ label: "06 Apr - 10 Apr", start: "2026-04-06", end: "2026-04-10" },
{ label: "13 Apr - 17 Apr", start: "2026-04-13", end: "2026-04-17" },
{ label: "20 Apr - 24 Apr", start: "2026-04-20", end: "2026-04-24" },
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
    title: "Barnala Tal to Barsu and drive back to Rishikesh or may continue with any other plan.",
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

  downloadLink: "/docs/Packing_List.pdf",

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
  tags: ["pro", "lake", "glacier", "pass", "crossover", "tons", "yamunotri", "meadows", "ridgewalk"],
  difficulty: ["difficult"],
  season: ["summer", "autumn"],
  month: ["may", "june", "september", "october"],
  region: "uttarakhand-garhwal",
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
    snippet: `The Bali Pass Trek is one of those rare Himalayan journeys where the landscape keeps transforming faster than your eyes can register. It begins gently, almost deceptively, in the quiet valley of Sankri — a world of wooden houses, terraced fields, and forests that glow golden in the morning sun. From here, the trail slips into the timeless Har Ki Dun region, weaving through the ancient villages of Osla, Gangad, and Dhatmeer, where traditional wooden homes, carved balconies, and stories of the Pandavas feel as much a part of the valley as the river that runs through it. Life here moves slowly, and for many trekkers, this early cultural immersion sets the emotional tone for the days ahead.

<br>As you move deeper into the valley, the trail widens into the enormous grassland of Devsu Thach — a meadow so perfectly placed between forests and ridgelines that it feels like the mountains created it intentionally for trekkers to pause. Through summer, the grass turns a vivid green, dotted with wildflowers; in autumn, its golden rust tones ripple in the wind like an open sea. Standing here with views of Swargarohini rising through the clouds, you begin to understand why this region has been revered for centuries.

<br>Beyond Devsu, the trail tightens into a narrow valley, always accompanied by the clear glacial stream of the Ruinsara Gad. The climb is steady, and with each turn, the landscape grows starker — forests thinning, riverbeds widening, boulders appearing, and the air beginning to thin. As you approach Ruinsara Tal, the entire valley suddenly opens up. Nestled at the base of steep cliffs, Ruinsara is a serene alpine lake reflecting snow-patched ridges and vast meadows that stretch out like a natural amphitheatre. The silence, the wind, the still water — everything here feels untouched and sacred. Many trekkers say this is where the trek “changes character.”

<br>From Ruinsara, the terrain shifts dramatically. The soft meadows give way to broken moraine fields and steep ascents as you make your way toward Odari, the campsite at the foot of the Swargarohini massif. Here, the mountain stands like an enormous ice-plated wall — sharp, intimidating, impossibly close. At dawn, when the first rays hit the summit and light ripples down its ridges, the entire mountain seems to ignite. This is the kind of moment that stays with you long after the trek ends.

<br>The approach to the pass is where Bali Pass truly becomes an expedition. The trail narrows into the steep, exposed Narma Kandi ridge, often called a “knife-edge” for good reason. One side drops into the Ruinsara valley; the other side falls away toward Yamunotri. You place your steps carefully, every minute aware of the altitude, the cold, and the weight of the mountains around you. The higher you go, the more the peaks rearrange themselves, and suddenly, almost abruptly, the ridge meets a final steep push of snow or loose rock.

<br>Standing on Bali Pass (≈ 4,950 m / 16,200 ft) is an emotional moment — the culmination of days spent crossing villages, forests, meadows, moraines, and ridgelines. From the top, you see a world of summits in every direction: Bandarpoonch, Kala Nag (Black Peak), and the entire Swargarohini range dominate the skyline. The wind is sharp, the terrain raw, and yet the sense of accomplishment is overwhelming. Few high-altitude treks in India offer such an exposed, panoramic, unfiltered vantage point.

<br>But Bali Pass is not done with you yet.

<br>The descent toward Lower Damini and Yamunotri is steep, long, and demanding. You navigate boulder fields, scree slopes, narrow gullies, and sections that require complete concentration. The shift is dramatic — in just a few hours, you move from stark alpine emptiness into forests, waterfalls, and the unmistakable warmth of Yamunotri’s sacred valley. The contrast feels surreal. One moment you are crossing snow under a biting wind; the next, you are hearing temple bells echoing through the gorge.

<br>This contrast — culture and wilderness, serenity and intensity, beauty and challenge — is what makes Bali Pass so unique. It is not just a trek; it is a full Himalayan journey where the terrain keeps pushing you, rewarding you, and revealing deeper layers of Garhwal’s landscape.

<br>Bali Pass is demanding, unforgiving, and profoundly rewarding. For trekkers who come prepared and committed, it offers one of the most immersive, memorable, and culturally rich high-altitude crossovers in all of Uttarakhand — a journey that feels like both a pilgrimage and an adventure.`},

  price: 18900,
  priceNote: "* Sankri to Janki Chatti",
  addons: {
    transport: 5000,
    offloadingbag: 4000,
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
    "day": 1,
    "title": "Arrive in Sankri (6,400 ft) | Drive distance: ~195 km | Duration: 6–8 hours.",
    "details": "Your journey begins with a long yet stunning drive from Dehradun to Sankri, passing through Mussoorie, Purola, and Mori. The road winds through thick pine and deodar forests, opening occasionally into deep valleys where the Tons River glimmers below. As the altitude rises, the air becomes cooler and the landscape noticeably quieter. When you finally arrive in Sankri—an isolated Himalayan village inside Govind Pashu Vihar National Park—you’ll immediately feel the shift into mountain life. The village serves as the base for many legendary Garhwal treks. You settle into a cozy guesthouse or homestay, resting as the sun sets behind the ridges."
  },
  {
    "day": 2,
    "title": "Sankri to Dhatmeer (7,875 ft) – Trek to Seema (8,400 ft) | Drive distance: 18 km | Trek distance: ~8 km | Duration: 1.5 hrs drive + 5–6 hrs trek.",
    "details": "The day begins with a short but beautiful drive to Dhatmeer, the starting point of the trek. Soon after stepping onto the trail, you find yourself walking beside the Supin River, its constant flow echoing through forests of walnut, chestnut, and deodar. The path takes you across wooden bridges and through small mountain villages like Gangaar, where life moves slowly and peacefully. With every turn, the valley opens wider, offering clearer glimpses of the snow-covered Swargarohini peaks. By late afternoon, you reach Seema—a serene riverside campsite surrounded by forests and meadows. The sound of the river becomes your lullaby for the night."
  },
  {
    "day": 3,
    "title": "Seema (8,400 ft) to Devsu Thatch (10,200 ft) | Trek distance: ~6 km | Duration: 4–5 hours.",
    "details": "Leaving Seema behind, the trail follows the Supin River for a while before beginning its gradual climb. You pass through oak, pine, and birch forests where the sunlight filters softly through the canopy. The forest eventually opens up, revealing the vast alpine meadows of Devsu Thatch. Spread out like a green carpet at the heart of the valley, these meadows are considered one of the most beautiful campsites in the Garhwal region. From the ridge, the towering silhouettes of Kala Nag and the Bandarpunch range dominate the skyline. In spring and summer, birds chirp in the distance while rhododendrons bloom in vibrant colours. You spend the evening wandering across the meadow before settling down in your tent."
  },
  {
    "day": 4,
    "title": "Devsu Thatch (10,200 ft) to Ruinsara Tal (11,700 ft) | Trek distance: ~8.5 km | Duration: 5–6 hours.",
    "details": "Today the trail takes you deeper into the mountains as you leave the meadows and re-enter a mix of birch and rhododendron forests. Gradually the tree line thins, giving way to a rugged alpine landscape dotted with boulders and small streams. As you approach Ruinsara, the scenery suddenly opens up—revealing a pristine glacial lake surrounded by wide meadows and encircled by massive peaks like Swargarohini and Dhumdhar Kandi. The region is known for Himalayan blue poppies and primulas during bloom season, adding a burst of colour to the otherwise stark mountain setting. You spend the night in tents by the lake, feeling the calm isolation of the high Himalayas."
  },
  {
    "day": 5,
    "title": "Ruinsara Tal (11,700 ft) to Odari (13,150 ft) | Trek distance: ~4 km | Duration: 3 hours.",
    "details": "Today’s journey is shorter but equally rewarding. The path winds through boulder fields, gentle streams, and glacial debris as you gain altitude steadily. Odari, meaning 'rock cave,' holds mythological importance—believed to be the place where Bali, the brother of Lord Hanuman, once took shelter. The valley narrows here, surrounded by high ridges and sharp rocky slopes. As you approach the campsite, sweeping views of Swargarohini I and II dominate the skyline. You spend the rest of the day exploring the area and taking an acclimatization walk, preparing your body for the higher altitude ahead."
  },
  {
    "day": 6,
    "title": "Odari (13,150 ft) to Bali Base Camp (15,350 ft) | Trek distance: ~3.5 km | Duration: 3–4 hours.",
    "details": "The ascent today is short but steep as the trail moves over loose scree and moraine. The higher you climb, the more dramatic the landscape becomes—Ruinsara Valley slowly falls away behind you while snow-draped peaks rise in every direction. Upon reaching Bali Base Camp, you find yourself standing in a striking amphitheatre of glaciers and jagged summits. The evening light paints the peaks golden, turning the entire valley surreal. Temperatures dip sharply at night, so the team focuses on hydration and warmth in preparation for the demanding pass crossing the next day."
  },
  {
    "day": 7,
    "title": "Bali Base Camp (15,350 ft) to Lower Dhamni (11,200 ft) via Bali Pass (16,207 ft) | Trek distance: ~10 km | Duration: 8–10 hours.",
    "details": "This is the most challenging and exhilarating day of the trek. You begin before sunrise, the world still cold and silent as you move across snow slopes toward the pass. The final climb to Bali Pass is steep and breathless, but when you reach the top, the reward is immense—an unobstructed 360-degree panorama of the Swargarohini peaks, Bandarpunch, and the vast Garhwal ranges, with the Yamunotri valley opening below. The descent is equally demanding, with loose scree and narrow ledges requiring careful feet. One particular stretch, often called the ‘goat trail,’ demands patience and balance. After crossing this section, the trail gradually widens, leading you to Upper Dhamni for a short rest and then through forested paths to the Lower Dhamni campsite. You end the day exhausted but deeply fulfilled."
  },
  {
    "day": 8,
    "title": "Lower Dhamni (11,200 ft) to Yamunotri (10,800 ft) – Drive to Dehradun | Trek distance: ~9.5 km | Duration: 5–6 hours.",
    "details": "The final stretch of the trek descends through oak and rhododendron forests until the wild mountain path merges with the stone-paved pilgrim route to Yamunotri. As you enter the holy site, the energy of the place immediately shifts. Many trekkers take a dip in the natural hot springs here—a soothing reward for the body after a long expedition. The Yamunotri temple, a revered shrine of the Char Dham yatra, stands surrounded by dramatic cliffs and waterfalls. From here, you continue down to Janki Chatti, where vehicles will be waiting to drive you back to Dehradun. With the journey complete, you carry with you the vivid memories of one of Garhwal’s finest high-altitude crossings, its forests, meadows, glaciers, and the mighty Bali Pass etched into your mind."
  }
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

  downloadLink: "/docs/Packing_List.pdf",

  faqs: {
    questions: [
      {
        question: "Who can join the Bali Pass Trek?",
        answer:
          "Bali Pass is ideal for experienced trekkers with prior exposure to high-altitude conditions. It involves steep ascents, scree slopes, and snow crossings.",
      },
      {
      question: "How should I prepare physically for the Bali Pass Trek?",
      answer:
        "Preparation should begin at least 6–8 weeks before the trek. A strong cardiovascular base is essential — regular running, stair climbing, cycling, or hiking with a loaded backpack is recommended. Strength training focusing on legs, core, and balance will help handle steep climbs and descents. Prior experience on difficult Himalayan treks significantly improves safety and comfort."
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
    tags: ["pro", "lake", "glacier", "meadows", "ridgewalk"],
    difficulty: ["difficult"],
    season: ["summer", "autumn"],
    month: ["may", "june", "september", "october"],
    region: "uttarakhand-garhwal",
    duration: "7 Nights / 7 Days",
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
        { emoji: "⏳", label: "Trek Duration", value: "7 Nights / 7 Days" },
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

    price: 17400,     // you can fill in actual price
    priceNote: "* Lohajung to Wan",
    addons: {
      transport: 5000,    // fill in as applicable
      offloadingbag: 2400, // if any
      transportNote: "* Rishikesh to Rishikesh",
      offloadingNote: "* Maximum weight 9kg/bag"
    },

    inclusionsNote: "🍽️ All Meals – from dinner on Day 1 to dinner on Day 7",

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
    "day": 1,
    "title": "Rishikesh to Lohajung (7,600 ft) | Drive Distance: ~250 km (9–11 hrs).",
    "details": "Your journey begins early from Rishikesh as the road climbs steadily into the mountains of Garhwal and later enters the lush green landscapes of Kumaon. The drive moves through forests of chir pine, terraced valleys, lively markets, and small hill towns like Gwaldam and Dewal. As the altitude rises, the forests grow denser and the roads turn narrower, revealing deep river gorges and hanging cloud layers. By evening, you finally reach the quiet Himalayan base village of Lohajung, perched at the meeting point of the Pindar and Kail rivers. The air is cool and crisp, and as sunset hits, golden light washes over the distant Nanda Ghunti peak. After settling into a warm homestay or guesthouse, many trekkers enjoy a short acclimatisation walk to the nearby ridge to get their first taste of the mountains."
  },
  {
    "day": 2,
    "title": "Lohajung to Didna Village (8,530 ft) | Trek Distance: ~8 km | Duration: ~6-7 hrs.",
    "details": "The trek begins with a pleasant descent through oak and rhododendron forests that echo with the sound of mountain birds. Soon you reach the sparkling Neel Ganga river, flowing over smooth stones and forming small natural pools. After a break here, the trail crosses a wooden bridge and begins a long, steady climb toward Didna. The forest becomes thicker, alive with wildflowers and the occasional rustling of langurs leaping through the canopy. As you emerge from the woods, terraced fields and slate-roofed houses appear—the quiet village of Didna spread across a gentle slope. With views of distant snow-covered ridges and the slow rhythm of mountain life around you, the evening feels peaceful. You stay in a rustic homestay or guesthouse overlooking the valley, where cool winds and starlit skies set the tone for the journey ahead."
  },
  {
    "day": 3,
    "title": "Didna to Ali Bugyal (11,320 ft) | Trek Distance: ~10 km | Duration: ~7–8 hrs.",
    "details": "The day starts with a steady uphill climb through thick forests of rhododendron, oak, maple, and occasional walnut trees. This stretch is known for sightings of the Himalayan monal, the brilliantly coloured state bird of Uttarakhand, and troops of langurs moving through the branches. As you gain altitude, the forest begins to thin and pockets of open grass appear. Soon, the trail pushes above the tree line and unveils one of India’s most spectacular alpine meadows—Ali Bugyal. The meadow rolls endlessly like a green ocean draped over the mountainside, often covered in soft drifting mist. Snow peaks such as Trishul and Nanda Ghunti rise suddenly on the horizon, creating a postcard-like backdrop. Wild horses grazing on the slopes add to the charm of this landscape. You settle in Ali Bugyal for the night—either in tents or a homestay—where the wind feels colder, the air thinner, and the night sky brilliantly clear."
  },
  {
    "day": 4,
    "title": "Ali Bugyal to Patar Nachauni (12,818 ft) | Trek Distance: ~8 km | Duration: ~5–6 hrs.",
    "details": "The morning begins with a gentle traverse across the vast meadows linking Ali Bugyal to Bedni Bugyal, one of the largest and most breathtaking alpine pastures in the Himalayas. The landscape is open and windswept, offering sweeping 360-degree views of towering peaks. A short detour takes you to the tranquil Bedni Kund, a sacred mountain lake where the Trishul massif often reflects perfectly on calm days. Locals believe this lake is blessed by Goddess Nanda Devi, adding a spiritual atmosphere to the setting. As you move ahead, the lush meadows slowly give way to rougher, more rugged terrain. The trail begins to climb toward Patar Nachauni, where the wind picks up and temperatures drop noticeably. The campsite sits above the rolling meadows, surrounded by open ridgelines and wide alpine bowls. Nights here can be extremely cold even in summer, with clear skies revealing thousands of stars."
  },
  {
    "day": 5,
    "title": "Patar Nachauni to Bhagwabasa (14,100–14,500 ft) | Trek Distance: ~5 km | Duration: ~4–5 hrs.",
    "details": "Today the trail steepens dramatically as you climb toward Kalu Vinayak, a stone shrine to Lord Ganesha perched on a high ridge at around 14,200 ft. The ascent is steady but demanding, weaving through rocky switchbacks that offer increasingly dramatic mountain views with each step. Once you reach the shrine, the panorama opens wide—Trishul seems almost within reach, and the silhouettes of Nanda Ghunti and the Chaukhamba range rise in the distance. From this ridge, you descend slightly over loose moraine to reach Bhagwabasa, the final campsite before Roopkund. The land here is barren and stark, with patches of old snow lingering even in early summer. Vegetation has disappeared entirely, replaced by grey boulders and icy winds that sweep through the valley. Nights at Bhagwabasa are bitterly cold, often dropping well below freezing, making it important to stay warm, hydrated, and well-rested for the summit attempt."
  },
  {
    "day": 6,
    "title": "Bhagwabasa to Roopkund Lake (15,750 ft) and back to Patar Nachauni | Trek Distance: ~10 km | Duration: ~8–9 hrs (round trip).",
    "details": "The summit day begins long before dawn, usually between 3 and 4 AM, when the snow is firm and the weather most predictable. The trail climbs sharply through zigzagging slopes of snow, scree, and rock, illuminated only by headlamps and the faint glow of approaching sunrise. As you gain altitude, the valley falls away behind you and the air becomes thin and crisp. The final approach brings you into the high cirque that cradles Roopkund—a glacial lake resting inside a natural crater surrounded by steep snow walls. In early summer, when the snow begins to melt, human skeletons dating back centuries emerge at the edges of the lake, giving Roopkund its legendary and somewhat eerie identity. The environment here demands caution; snow conditions can quickly shift between hard ice and soft slush, especially after sunrise. Sunglasses are essential to protect against intense glare, and trekkers must follow the guide closely at all times. The climb to Junargali Top is only possible post-monsoon when the trail is free of heavy snow; during May–June it remains dangerously icy and is often closed. After spending a short, reflective time at the lake, you begin the careful descent back to Bhagwabasa, then continue further down to the warmer, safer meadows of Patar Nachauni. The long day ends with hot food, relief, and a deep sense of achievement."
  },
  {
    "day": 7,
    "title": "Patar Nachauni to Wan Village (7,900–8,200 ft) + Drive to Lohajung | Trek Distance: ~15 km | Duration: ~7–8 hrs.",
    "details": "The descent begins through the open meadows, retracing the trail past Bedni Bugyal where the morning sun casts long shadows across the grasslands. The landscape slowly softens as you leave behind the rocky high-altitude ridges of Bhagwabasa. Wild mountain goats are often seen grazing here, and Himalayan eagles glide effortlessly above the valley. As the trail drops below the tree line, you re-enter cool forests of oak, rhododendron, and pine, where the scents of damp earth and forest foliage feel refreshing after days spent in the alpine zone. You cross Neel Ganga once again, this time appreciating the familiar bridge and the comforting sound of flowing water before making the final ascent to Wan village. A short, scenic drive takes you back to Lohajung, where warm food, a soft bed, and the quiet satisfaction of completing a historic trek await you."
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

    downloadLink: "/docs/Packing_List.pdf",

    faqs: {
  questions: [
    {
      question: "Who can participate in the Roopkund trek?",
      answer: "This trek is suitable for individuals with good physical fitness and some high-altitude trekking experience. It involves steep ascents, high camps and variable terrain."
    },
    {
      question: "How should I prepare physically for the Roopkund Trek?",
      answer:
        "Preparation should begin at least 6–8 weeks before the trek. A strong cardiovascular base is essential — regular running, stair climbing, cycling, or hiking with a loaded backpack is recommended. Strength training focusing on legs, core, and balance will help handle steep climbs and descents. Prior experience on difficult Himalayan treks significantly improves safety and comfort."
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

  /* Uttarakhand Kumaon*/

{
    id: "nanda-devi-east-base-camp-trek",
    name: "Nanda Devi East Base Camp Trek",
    tags: ["intermediate", "pro", "basecamp", "glacier", "meadows"],
    difficulty: ["moderate", "difficult"],
    season: ["summer", "autumn"],
    month: ["may", "june", "september", "october"],
    duration: ["10 Nights / 10 Days"],
    region: "uttarakhand-kumaon",
    coordinates: [
        [30.0690, 80.2430], // Munsiyari
        [30.1030, 80.3870], // Rilkot
        [30.1620, 80.4650], // Panchhu / Ganghar
        [30.1850, 80.5130], // Nanda Devi East Base Camp
        [30.1620, 80.4650], // Back to Panchhu / Ganghar
        [30.1030, 80.3870], // Rilkot
        [30.0690, 80.2430], // Munsiyari (end)
    ],

    heroImage: "https://res.cloudinary.com/dr44hob9b/image/upload/v1765437115/nanda_devi_k8ygsm.jpg",

    heroImages: [
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1765437115/nanda_devi_k8ygsm.jpg",
        "https://res.cloudinary.com/dr44hob9b/image/upload/v1765545955/nanda-devi-east-base-camp-trek-hero1_b5xt81.jpg",
        "https://res.cloudinary.com/dr44hob9b/image/upload/v1765545953/nanda-devi-east-base-camp-trek-view1_bslpi8.webp",
    ],

    subtitle: "An Adventure to the Foot of Nanda Devi, the Himalayan Queen",

    seo: {
        title: "Nanda Devi East Base Camp Trek | Itinerary, Cost & Dates | Planethimalayas",
        description:
            "Nanda Devi East Base Camp Trek (3,900 m) is a moderate, high-altitude Himalayan expedition from Munsiyari to the base of Nanda Devi East. Explore remote villages, rugged terrain, alpine meadows, glaciers, and breathtaking views of the Panchachuli & Nanda Devi ranges."
    },

    overview: {
        facts: [
            { emoji: "⏳", label: "Trek Duration", value: "10 Nights / 10 Days" },
            { emoji: "⚡", label: "Trek Grade", value: "Moderate / Difficult" },
            { emoji: "🏔️", label: "Max Altitude", value: "Approx. 4,700 m" },
            { emoji: "⚡", label: "Trek Distance", value: "Approx. 100 Km" },
            { emoji: "🌤️", label: "Best Time", value: "May–June & Sep–Oct" },
            { emoji: "🗺️", label: "Region", value: "Kumaon Himalayas, Uttarakhand" },
            { emoji: "📍", label: "Start Point", value: "Munsiyari (2,200 m)" },
            { emoji: "🏁", label: "End Point", value: "Munsiyari" },
            { emoji: "🧥", label: "Cloakroom facility", value: "Available" },
        ],
        snippet:
    "The Nanda Devi East Base Camp Trek is a mesmerizing journey deep into the untouched heart of Kumaon’s Johar Valley, where every step unfolds a new story of mountains, rivers, and culture. The trek begins from the quaint village of Rilkot, where terraced fields, wooden homes, and the warmth of local Kumaoni life set the stage for your adventure. As you walk past historic villages like Martoli and Panchhu/Ganghar, you are greeted by friendly villagers, stone temples, and the scent of pine and wildflowers carried by the mountain breeze.<br>The trail meanders alongside the roaring Gori Ganga River, crossing sparkling streams, wooden bridges, and rocky riverbeds shaped over centuries by monsoon torrents. The scenery transforms with every ascent—dense oak and pine forests give way to wide alpine meadows dotted with vibrant wildflowers, grazing bharal (blue sheep), Himalayan monals, and the occasional glimpse of elusive snow foxes or leopards. Waterfalls cascade down cliffs, while glaciers and moraines hint at the immense power of these mountains. The sheer variety of terrain—from lush forests to rocky ridges, open meadows, and gentle snowfields—keeps every day thrilling and visually breathtaking.<br>As the trail climbs higher, the twin peaks of Nanda Devi East and the mighty Nanda Devi (7,816 m) dominate the horizon, their snow-clad ridges glowing in the soft light of sunrise and sunset. Nights are spent in tents or cozy lodges under a canopy of stars, where the silence of the Himalayas and the crisp alpine air rejuvenate the body and spirit. By the time you reach Nanda Devi East Base Camp at 4,750 m, the experience reaches its peak—standing at the foot of these iconic mountains, witnessing the glaciers, cliffs, and sweeping valleys that surround you, you are immersed in the raw majesty of the Himalayas.<br>This trek is not just a passage through stunning landscapes; it is an exploration of Kumaon’s rich culture, its unique wildlife, and the serene power of high-altitude wilderness. Each day offers a new discovery—whether a playful herd of bharal, a quiet village tucked between ridges, or the dramatic shift of the valley as the sun lights up towering peaks.<br><br><strong>Please note:</strong> Trail conditions can change during late spring and post-monsoon due to landslides, river crossings, and snow patches. Proper acclimatization, fitness, and trekking gear are essential for a safe and rewarding journey."
},

    price: 34900,
    priceNote: "* Munsiyari to Munsiyari",
    addons: {
        transport: 5000,
        transportNote: "* Haldwani to Haldwani",
        offloadingbag: 4500,
        offloadingNote: "* Maximum weight 9kg / bag"
    },

    inclusionsNote:
        "🍽️ All Meals – Nutritious meals provided from dinner on Day 1 to dinner on Day 10",

    highlights: [
        "Trek into the remote Johar Valley, once part of an ancient Indo-Tibetan trade route",
        "Spectacular views of Nanda Devi (7,816 m), Nanda Kot, and Panchachuli",
        "Visit historic villages like Martoli and Ganghar",
        "Camp at Nanda Devi East Base Camp surrounded by towering Himalayan walls",
        "Explore glacier zones, moraines, alpine meadows, and high-altitude streams",
        "Challenging yet rewarding terrain ideal for moderate to experienced trekkers",
        "A culturally rich route showcasing Kumaoni heritage"
    ],

    itinerary: [
{
    day: 1,
    title: "Kathgodam – Munsiyari (2,200 m) | 280 km Drive | 10–12 Hours",
    details:
        "<strong>• Drive: 280 km | Duration: 10–12 hrs</strong><br>• Begin your adventure with a long but scenic drive through the Kumaon hills. Pass through quaint towns like Almora and Thal, winding along deep valleys and forests, with glimpses of the distant Himalayan ranges. By evening, arrive at Munsiyari, the serene gateway to high-altitude treks, where the Panchachuli peaks greet you on the horizon."
},
{
    day: 2,
    title: "Munsiyari – Lilam (2,000 m) | 7 km Trek | 2–3 Hours",
    details:
        "<strong>• Trek: ~7 km | Duration: 2–3 hrs</strong><br>• Today is an easy trek designed for acclimatization. After breakfast, take a short drive to Selapani, the last motorable point, and begin the descent to the Gori Ganga River, crossing the bridge at Jimighat. The trail gradually ascends along the river, passing through scenic hamlets, until you reach Lilam Village. Settle into your campsite and soak in the peaceful Himalayan evenings while preparing for the trek ahead."
},
{
    day: 3,
    title: "Lilam – Bugdiyar (2,700 m) | 13 km Trek | 6–7 Hours",
    details:
        "<strong>• Trek: ~13 km | Duration: 6–7 hrs</strong><br>• Today’s trail follows the gorge alongside the Gori Ganga River, weaving through bamboo thickets and conifer forests. About 5 km in, pause at the confluence where the Ralam stream meets the river. Continue ascending toward Radgari, where a quaint tea shop provides a warm respite. Trek further to Bugdiyar, a picturesque campsite with a small rest house and a memorial honoring villagers and army personnel who lost their lives in the 1989 avalanche. Enjoy the serene mountains surrounding your camp."
},
{
    day: 4,
    title: "Bugdiyar – Rilkot (3,200 m) | 15 km Trek | 7–8 Hours",
    details:
        "<strong>• Trek: ~15 km | Duration: 7–8 hrs</strong><br>• Begin the day by crossing a charming river bridge and ascending toward an overhanging cliff with a small deity shrine. Continue along the river through lush alpine flora to encounter two magnificent waterfalls, each cascading over 80 meters. The trail gradually climbs amid towering cliffs and panoramic views, finally reaching Rilkot by late afternoon. Settle into your campsite and revel in the tranquility of the high Himalayas."
},
{
    day: 5,
    title: "Rilkot – Ghangar (3,300 m) | 12 km Trek | 6–7 Hours",
    details:
        "<strong>• Trek: ~12 km | Duration: 6–7 hrs</strong><br>• Trek above the tree line into arid landscapes, passing mostly deserted villages until reaching Burphu. Burphu Peak rises majestically in the background. Enter the scenic Pachu Valley, gradually climbing to Ghangar—a quaint Johari village with intricately carved wooden houses. In October, goat skins may be seen drying on rooftops. An ancient temple adds cultural charm, while the eastern face of Nanda Devi East hints at the adventure to come."
},
{
    day: 6,
    title: "Ghangar – Nanda Devi East Base Camp (3,900 m) | 7 km Trek | 3–4 Hours",
    details:
        "<strong>• Trek: ~7 km | Duration: 3–4 hrs</strong><br>• Ascend gently through Pachhu Valley, past clusters of rhododendron and birch trees. The towering north face of Nanda Devi East guides your way. As the valley widens, meadows carpeted with wildflowers open up, leading to a serene campsite at the base of Nanda Devi East. Spend the evening absorbing the panoramic glacier views, and sleep under the starry Himalayan sky."
},
{
    day: 7,
    title: "Nanda Devi East Base Camp – Glacier Excursion & Return to Base Camp (3,900 m) | 7 km Trek | 4–5 Hours",
    details:
        "<strong>• Trek: ~7 km | Duration: 4–5 hrs</strong><br>• Embark on a 4 km ascent to explore the Nanda Devi East Glacier. Marvel at the icy expanse, glacial streams, and towering peaks surrounding you. Take your time soaking in the surreal high-altitude landscape. After this exhilarating experience, retrace your steps to the base camp, enjoying the tranquility of Pachhu Valley and the serenity of high Himalayan meadows."
},
{
    day: 8,
    title: "Nanda Devi Base Camp – Martoli (3,350 m) | 12 km Trek | 5 Hours",
    details:
        "<strong>• Trek: ~12 km | Duration: 5 hrs | Altitude: 3,900 m → 3,350 m</strong><br>• Begin your descent from Nanda Devi East Base Camp to Martoli, walking through alpine meadows and rocky trails. Along the way, enjoy sweeping views of Nanda Devi, Nanda Devi East, Nanda Kot, and Trishul. Arrive at Martoli, a charming village with traditional Johari houses, camp near the open grasslands, and soak in the serene ambiance and rich cultural charm."
},
{
    day: 9,
    title: "Martoli – Bugdiyar (2,450 m) | 18 km Trek | 10 Hours",
    details:
        "<strong>• Trek: ~18 km | Duration: 10 hrs | Altitude: 3,350 m → 2,450 m</strong><br>• Trek downhill along the Gori Ganga River through lush forests, meadows, and hamlets including Rilkot. Witness Himalayan peaks framing your journey and the serene sound of flowing rivers. Reach Bugdiyar in the late afternoon, unwind at camp, enjoy a hearty meal, and rest under a star-lit sky."
},
{
    day: 10,
    title: "Bugdiyar – Babaldhar (2,500 m) | 8 km Trek + Drive to Munsiyari | 2–3 hrs Trek + 2 hrs Drive",
    details:
        "<strong>• Trek: ~8 km | Drive: ~16–20 km | Duration: 2–3 hrs trek + 2 hrs drive</strong><br>• Complete the final trek from Bugdiyar to Babaldhar through serene valleys and forests. Enjoy one last immersive view of the Himalayas before boarding a vehicle for a scenic drive back to Munsiyari. Arrive by afternoon, unwind, and reflect on the remarkable journey."
},

],

    howToReach: {
        air: "Nearest airport: Pantnagar Airport – 330 km from Munsiyari. Taxis available.",
        train:
            "Nearest major railway station: Kathgodam. From there, take a shared cab or private taxi to Munsiyari (10–12 hrs).",
        road:
            "From Delhi: Overnight bus to Haldwani/Kathgodam, then taxi to Munsiyari. From Almora: 8–9 hrs via Thal.",
        travelTip:
            "Arrive in Munsiyari one day early to rest and prepare for the long trek ahead."
    },

    didYouKnow: [
        "The Johar Valley was once a major Indo-Tibetan trade route used by the Bhotia community.",
        "Martoli village still has centuries-old stone houses and shrines dedicated to Nanda Devi.",
        "Nanda Devi East is the twin peak of India’s iconic Nanda Devi massif (7,816 m).",
        "The Gori Ganga valley is shaped heavily by glacial erosion and monsoon landslides.",
        "Ganghar meadows offer one of the best close-up views of Nanda Kot (6,861 m)."
    ],

    gallery: [
        "https://res.cloudinary.com/dr44hob9b/image/upload/v1765437115/nanda_devi_k8ygsm.jpg",
        
        "https://res.cloudinary.com/dr44hob9b/image/upload/v1765381747/nanda-devi-base-camp-6315064_ueukor.webp",
        
        "https://res.cloudinary.com/dr44hob9b/image/upload/v1765545955/nanda-devi-east-base-camp-trek-hero1_b5xt81.jpg",
        "https://res.cloudinary.com/dr44hob9b/image/upload/v1765545961/nanda-devi-east-base-camp-trek-hero_yg4zcf.webp",
        "https://res.cloudinary.com/dr44hob9b/image/upload/v1765545969/nanda-devi-east-base-camp-trek-hero1_aokgi8.png",
        "https://res.cloudinary.com/dr44hob9b/image/upload/v1765545957/nanda-devi-east-base-camp-trek-hero2_xrha53.webp",
        "https://res.cloudinary.com/dr44hob9b/image/upload/v1765545953/nanda-devi-east-base-camp-trek-view1_bslpi8.webp",
        "https://res.cloudinary.com/dr44hob9b/image/upload/v1765545953/nanda-devi-east-base-camp-trek-view_cenuoj.jpg",
    ],

    downloadLink: "/docs/Packing_List.pdf",

    faqs: {
        questions: [
    {
        question: "Who can join the Nanda Devi East Base Camp Trek?",
        answer:
            "This trek is suited for trekkers with good fitness and prior experience in high-altitude Himalayan treks. The route covers rocky trails, riverbeds, moraines, and long days of trekking, so a sense of adventure and endurance is essential."
    },
    {
        question: "How long is the trek, and what is the daily hiking distance?",
        answer:
            "The trek spans 11–12 days, with daily distances ranging from 7 km to 18 km depending on the terrain. Some days involve steep climbs, boulder-hopping, and moraine navigation, so trekking poles and proper pacing are recommended."
    },
    {
        question: "What is the difficulty level, and do I need prior experience?",
        answer:
            "Rated as a challenging trek, Nanda Devi East Base Camp demands stamina, balance, and basic high-altitude trekking experience. Prior Himalayan treks or exposure to multi-day treks at altitudes above 3,000 m will help in managing the route comfortably."
    },
    {
        question: "When is the best time to embark on this trek?",
        answer:
            "The ideal windows are late spring (May–June) and post-monsoon (September–October). During these months, the weather is relatively stable, and the trails are accessible, though occasional snow or landslides may affect certain sections."
    },
    {
        question: "What is the highest altitude reached during the trek, and how does it affect me?",
        answer:
            "The trek reaches up to 4,800 m at the Nanda Devi East Advanced Base Camp. At this altitude, symptoms like mild headache, shortness of breath, or fatigue can occur. Proper acclimatization in Munsiyari and Martoli, along with hydration, is crucial to minimize altitude sickness."
    },
    {
        question: "What kind of accommodation and meals are provided?",
        answer:
            "Accommodation is a mix of basic tea-houses, tents, and guesthouses in villages like Lilam, Bugdiyar, Rilkot, and Martoli. Meals include wholesome local dishes like chapatti, lentils, vegetables, Maggi noodles, eggs, and tea. At remote camps, you’ll prepare meals with guidance from the trekking team."
    },
    {
        question: "Do I need special gear or equipment, and what should I pack?",
        answer:
            "Yes, essentials include layered clothing, waterproof jackets, trekking boots, trekking poles, sleeping bags, gloves, and sunglasses. Carry high-energy snacks, personal medicines, and minimal luggage for the porters. Detailed gear lists are provided prior to departure."
    },
    {
        question: "Is travel insurance included, and what does it cover?",
        answer:
            "Travel insurance is not included by default. It should cover emergency evacuation, medical expenses, and high-altitude trekking risks. We strongly recommend securing comprehensive insurance before the trek."
    },
    {
        question: "How is safety ensured, and what emergency measures are in place?",
        answer:
            "Experienced guides accompany all groups, with knowledge of local terrain, weather patterns, and emergency protocols. The team carries first-aid kits, and communication with Munsiyari and ITBP posts is maintained in case of emergencies. Porters and mule support are available along the route."
    },
    {
        question: "What local customs and cultural sensitivities should I be aware of?",
        answer:
            "Respect village traditions and religious sites, dress modestly in villages, and seek permission before taking photographs. The Nanda Devi region is home to Johari communities, who maintain ancient customs and live in harmony with nature."
    },
    {
        question: "What happens if I encounter medical issues or injuries?",
        answer:
            "Minor issues like blisters, fatigue, or mild altitude sickness are managed by guides and first-aid kits. For serious issues, evacuation is coordinated via ITBP posts or nearest roadheads. Always inform your guide about pre-existing medical conditions."
    },
    {
        question: "Can I expect wildlife encounters or natural phenomena?",
        answer:
            "Yes. Trekkers may spot bharal (blue sheep), long-haired goats, and occasionally leopards from a distance. Seasonal flora like alpine meadows, rhododendrons, and snow bridges add to the breathtaking natural experience."
    },
    {
        question: "Will I get mobile network during the trek?",
        answer:
            "Mobile network is available only until Munsiyari. Beyond that, the trail is off-grid. Inform family in advance and carry necessary emergency contacts."
    },
    {
        question: "Do I need acclimatization?",
        answer:
            "Yes. Staying at Munsiyari and Martoli for a day each helps your body adjust to altitude, reducing risks of sickness and improving your trekking experience."
    },
    {
        question: "Is offloading available?",
        answer:
            "Yes, mule or porter support is available on certain sections, particularly between villages and base camps, with prior arrangement and booking."
    }
]
    },

    faqsLink: "/faqs-and-articles",
},

{
  id: "ranthan-kharak-trek",
  name: "Ranthan Kharak Trek",
  tags: ["intermediate", "meadows"],
  difficulty: ["moderate"],
  season: ["summer", "autumn"],
  month: ["may", "june", "september", "october"],
  region: "uttarakhand-kumaon",
  duration: "6 Nights / 6 Days",

  coordinates: [
  [29.4727, 79.6497],   // Kathgodam
  [29.9355, 79.9858],   // Gogina Village
  [29.9598, 80.0156],   // Namik Village / Namik Campsite
  [29.9925, 80.0418],   // Bajimanian Kharak
  [30.0258, 80.0669],   // Thal Tok (Mountain Col)
  [30.0476, 80.0832],   // Ranthan Top
  [29.9598, 80.0156],   // Return to Namik
  [29.9355, 79.9858],   // End at Gogina
  ],


  heroImage: "https://res.cloudinary.com/dr44hob9b/image/upload/v1765545961/nanda-devi-east-base-camp-trek-hero_yg4zcf.webp",

  heroImages: [
        "https://res.cloudinary.com/dr44hob9b/image/upload/v1765381747/nanda-devi-base-camp-4729040_axtme9.webp",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1765805061/IMG-20160313-WA0018_hseesn.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1762329743/chandrasila-trek-spring-view1_w4djrk.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1765545961/nanda-devi-east-base-camp-trek-hero_yg4zcf.webp",
  ],

  subtitle: "Hidden Meadow of Kumaon Himalayas",

  seo: {
    title: "Ranthan Kharak Trek | Alpine Meadows of Kumaon | Planethimalayas",
    description: "Ranthan Kharak Trek is a lesser-known Himalayan trail in Kumaon, offering vast alpine meadows, forest walks, and stunning views of Nanda Devi and surrounding peaks. Explore itinerary, difficulty, and details with Planethimalayas."
  },

  overview: {
    facts: [
      { emoji: "⏳", label: "Trek Duration", value: "6 Nights / 6 Days" },
      { emoji: "⚡", label: "Trek Grade", value: "Moderate" },
      { emoji: "🏔️", label: "Max Altitude", value: "Approx. 3,700 m (12,140 ft)" },
      { emoji: "⚡", label: "Trek Distance", value: "40–45 Km (approx.)" },
      { emoji: "🌤️", label: "Best Time", value: "May–June, September–October" },
      { emoji: "🗺️", label: "Region", value: "Kumaon Himalayas, Uttarakhand" },
      { emoji: "📍", label: "Start Point", value: "Gogina Village" },
      { emoji: "🏁", label: "End Point", value: "Gogina Village" },
      { emoji: "🧥", label: "Cloakroom facility", value: "Available" }
    ],

    snippet:
      "The Ranthan Kharak Trek is a quiet, deeply immersive journey into the lesser-explored alpine landscapes of the Kumaon Himalayas. Unlike popular high-traffic trails, this trek unfolds slowly and subtly — rewarding trekkers with vast meadows, dense Himalayan forests, and uninterrupted mountain silence rather than dramatic crowds or busy campsites.<br>Hidden above the Pindar valley, Ranthan Kharak is a high-altitude meadow that feels almost untouched by time. The approach route passes through traditional Kumaoni villages, ancient stone paths, and thick forests of oak, rhododendron, and pine. As you climb higher, the forest gradually thins out, giving way to expansive grasslands that roll gently beneath open skies.<br>The meadows of Ranthan Kharak stretch wide and open, bordered by ridgelines and distant snow-covered peaks. On clear days, the panorama includes imposing Himalayan giants such as Nanda Devi, Nanda Kot, Maiktoli, and Panwali Dwar — standing tall and silent on the horizon. The sense of space here is profound; there are no sharp climbs or technical sections, only long, steady walks through some of Kumaon’s most serene high-altitude terrain.<br>This trek is ideal for trekkers who appreciate solitude and slow exploration. Campsites are set in open meadows or forest clearings, where evenings are marked by changing mountain light, grazing horses, and complete stillness. Wildlife sightings are possible, and birdlife is abundant throughout the forest sections.<br>While technically moderate, the Ranthan Kharak Trek demands good endurance due to consecutive walking days and altitude gain. Weather can change quickly, and fog or rain can roll in without warning, especially during monsoon months. Yet it is precisely this raw, unpolished nature that gives the trek its character.<br>For those seeking an offbeat Himalayan experience — far from crowds, rich in landscape variety, and rooted in the quiet beauty of the Kumaon region — Ranthan Kharak offers a rare and deeply satisfying journey."
  },

  price: 10400,
  priceNote: "* Gogina to Gogina",
  addons: {
    transport: 6000,
    transportNote: "* kathgodam to Kathgodam",
    offloadingbag: 2500,
    offloadingNote: "* Maximum weight 9kg/bag"
  },

  inclusionsNote: "🍽️ All Meals – Nutritious meals provided from dinner on Day 1 to dinner on Day 6",

  highlights: [
    "Explore the vast and rarely visited alpine meadows of Ranthan Kharak",
    "Walk through dense oak, pine, and rhododendron forests of Kumaon",
    "Panoramic views of Nanda Devi, Nanda Kot, and Maiktoli on clear days",
    "Experience true Himalayan solitude away from crowded trails",
    "Traditional villages and ancient stone-paved mountain paths",
    "Wildflowers and grazing horses across open high-altitude grasslands",
    "Ideal trek for those seeking slow, immersive mountain travel"
  ],

  itinerary: [
   {
  day: 1,
  title: "Arrival at Gogina",
  details:
    "Day 1 is scheduled as the arrival day at Gogina. Most trekkers usually reach Gogina from Kathgodam, a long but scenic drive into the interior regions of Kumaon. Transport for this route may be opted as an add-on, while some trekkers may choose to arrive independently from Kathgodam or other nearby towns.<br><br>The drive, for those travelling from Kathgodam, passes through winding mountain roads, forested ridges, and river valleys. After crossing Almora and reaching Bageshwar — the last major town on the route — the road follows the river upstream and climbs through small mountain villages before reaching Gogina. By evening, all participants assemble at the village. Settle into a local homestay, enjoy a warm meal, and rest well, as the trek begins the following morning."
},
    {
  day: 2,
  title: "Gogina – Namik Campsite | 6.5 km Trek | 1,955 m → 2,253 m",
  details:
    "The trek begins by walking through the quiet lanes of Gogina village, passing stone houses and farmlands before crossing a small bridge. Soon after, the trail takes a sharp descent into a deep gorge, dropping steadily towards the Ramganga River. This section is narrow and rocky in parts, offering dramatic views of cliffs and the river far below.<br><br>At the bottom of the gorge, you cross a long suspension bridge over the Ramganga — a thrilling crossing with the river flowing beneath. From here, the character of the trek changes completely as the trail climbs steeply through dense forests. A well-laid zig-zag path leads upward through oak, chestnut, bamboo, and deodar trees, testing endurance but rewarding with sweeping valley views.<br><br>As the ascent eases, signs of habitation appear — small farmlands, a village school, and scattered homes signal the approach to Namik. Walking through the terraced village offers a glimpse into the local mountain lifestyle. The campsite is located above the village in an open clearing near a temple, with views of the valley, surrounding villages, and distant glacier-fed mountains. The rest of the evening is spent resting and soaking in the peaceful setting."
},
    {
  day: 3,
  title: "Namik Campsite – Bajimanian Kharak | 5.4 km Trek | 2,253 m → 2,954 m",
  details:
    "The day begins with a gentle ascent from Namik through stone-laid trails that alternate between dense forests and wide alpine clearings known locally as kharaks. Early sections open into grassy meadows dotted with shepherd huts, offering beautiful morning views and a sense of life in these high pastures.<br><br>The trail then weaves through mixed forests of oak, maple, and rhododendron, forming a natural canopy overhead. The sound of leaves underfoot and nearby streams adds to the calm rhythm of the climb. A small stream crossing provides a good spot to refill water before reaching the first major clearing — a vast meadow enclosed by towering trees, perfect for a barefoot walk on the grass.<br><br>Continuing ahead, the route passes more forest pockets and open meadows, each with a distinct character. As you approach Bajimanian Kharak, the landscape opens up again into layered clearings used by shepherds during grazing season. The campsite is set in the upper meadow near Balchan Kund, a serene forest pond revered by locals. Spend the evening exploring the surroundings, listening to forest sounds, and soaking in the peaceful atmosphere of this beautiful high-altitude pasture."
},
    {
  day: 4,
  title: "Bajimanian Kharak – Thal Tok | 5 km Trek | 2,954 m → 3,393 m",
  details:
    "The day begins with a steady ascent from Bajimanian Kharak along stone-laid trails, weaving through open clearings and patches of dwarf rhododendron. As you climb higher, the forest thins out and the views begin to open, revealing expansive alpine landscapes ahead.<br><br>About a kilometre into the trek, the trail splits — one route leading towards high passes and distant valleys, while the left-hand trail continues towards Thal Tok. Taking the left, the path gently descends onto a narrow ledge walk that contours the mountainside, offering sweeping views of vast grasslands below.<br><br>Soon, the trail opens into wide alpine meadows where shepherds often graze their flocks. Crossing the meadow, the terrain changes once again as the route steepens towards the ridge. A zig-zag climb over rocky slopes and juniper shrubs leads you higher, testing endurance and balance at altitude.<br><br>Reaching Thal Tok, a wind-swept mountain col, the surroundings feel stark and dramatic. This high saddle connects multiple ridgelines and offers striking views of snow-clad Himalayan peaks. The campsite lies near the ridge, set in a raw, high-altitude environment that signals your transition into the true alpine zone."
},
    {
  day: 5,
  title: "Thal Tok – Ranthan Top – Namik | 14.2 km Trek | 3,393 m → 3,930 m → 2,253 m",
  details:
    "This is the longest and most demanding day of the trek, beginning before sunrise. From Thal Tok, the trail climbs steeply through rocky switchbacks toward the Chophu shoulder, opening up to vast mountain views as altitude is gained. The ascent continues over boulders and ridgelines, gradually transitioning into an exposed ridge walk that leads toward Ranthan Top.<br><br>The final climb to Ranthan Top is steep and strenuous, but the reward is immense. From the summit, sweeping views stretch across both Garhwal and Kumaon ranges, with massive Himalayan peaks rising on either side of the valley. The sense of scale and remoteness here defines the soul of the trek.<br><br>After spending time at the top, the descent begins — long, continuous, and testing on tired legs. The trail retraces ridges and ledges before dropping into alpine meadows and eventually re-entering forested sections. Gradually, the landscape softens as you descend toward Parava Thor and further down to Namik.<br><br>By late afternoon or evening, you reach Namik village, marking the end of an intense yet unforgettable day that brings together high-altitude ridges, dramatic mountain views, and a deep sense of accomplishment."
},
    {
  day: 6,
  title: "Namik – Gogina | 6.5 km Trek | 2,808 m → 1,956 m",
  details:
    "The final day of the trek begins with a steady descent from Namik, following the same trail taken on the first day. The path drops sharply at first, cutting down through forested slopes toward a suspension bridge that spans the gorge below. After crossing the bridge, a short but noticeable ascent brings you back onto the village trail — a reminder to stay attentive even on familiar ground.<br><br>As the trail evens out, the surroundings gradually shift from remote wilderness to cultivated fields and scattered huts. The mountains begin to recede into the background, replaced by village life and open valleys. This section is straightforward, but care is needed at trail junctions where the main path climbs quickly back onto the mud trail leading to Gogina.<br><br>The final stretch is an easy walk, allowing time to reflect on the journey of the past days — from high ridges and alpine meadows to long descents and quiet forest paths. Reaching Gogina by late morning or early afternoon marks the end of the trek, carrying back memories of a demanding yet deeply rewarding Himalayan experience."
},
  ],

  didYouKnow: [
  "Ranthan Kharak takes its name from two features: ‘Ranthan’ (the summit/top) and ‘Kharak’ (the many high-altitude clearings) that shepherds use for summer grazing.",
  "The trek is famous for its spring rhododendron bloom — carpets of red and pink rhododendron flowers appear across the forests and kharaks, typically in April–May.",
  "Balchan Kund, near the Bajimanian Kharak campsite, is a small, locally revered pond: the area around the kund attracts diverse birdlife (including Monal and other high-altitude species) and is used by villagers for ritual observances.",
  "Nanda Kund / Nanda Kunda (approachable from higher ridges) is considered sacred in local tradition and offers panoramic views of both Garhwal and Kumaon Himalayan ranges on clear days.",
  "The kharaks (meadows) are traditional seasonal grazing grounds used by local shepherds and village communities; many of the stone trails predate modern trekking routes and were once cattle/pony migration paths.",
  "Local villages along the route practise terrace farming (potatoes, rajma, millets) and observe seasonal harvest customs – trekkers often witness local hospitality and simple village rituals when timings coincide with festivals.",
  "Several shepherd-built stone huts and fenced enclosures visible on the trail are examples of sustainable, vernacular mountain architecture adapted to seasonal grazing life.",
  "The upper ridges and ledges around Ranthan Top show clear signs of seasonal snow and verglass in early summer — these north-facing sections hold snow longer and demand caution during thaw/early season treks.",
  "The route passes small, sacred tree-shrines (locally tied with ribbons) where villagers honour forest spirits and deities (examples: local worship of wood/forest spirits like ‘Golu Devta’), reflecting the deep local relationship with the landscape.",
  "Because Ranthan Kharak lies in the transition zone between Garhwal and Kumaon ranges, trekkers can observe an especially rich mix of flora and birdlife — from oak/deodar forests to alpine meadow species — in a relatively short distance."
  ],


  howToReach: {
    air: "Nearest airport: Pantnagar Airport. From Pantnagar, continue by road to Kathgodam and onward to Gogina Village.",
    train: "Nearest railway station: Kathgodam. Well connected to Delhi and other major cities of North India.",
    road: "Kathgodam is well connected by road to Delhi and other cities of Uttarakhand. From Kathgodam, a long mountain drive leads to Gogina Village via Almora and Bageshwar.",
    travelTip: "Arrive at Kathgodam a day in advance to account for travel delays. Early morning departures are recommended for the drive to Gogina Village."
  },

  gallery: [
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1765381747/nanda-devi-base-camp-4729040_axtme9.webp",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1762329886/chandrasila-trek-spring-view2_bg7mi8.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1765805061/IMG-20160313-WA0018_hseesn.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1762329743/chandrasila-trek-spring-view1_w4djrk.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1765545961/nanda-devi-east-base-camp-trek-hero_yg4zcf.webp",
  ],

  downloadLink: "/docs/Packing_List.pdf",

  faqs: {
    questions: [
      {
        question: "Who is this trek suitable for?",
        answer:
          "The Ranthan Kharak Trek is suitable for trekkers with prior experience and good fitness levels. Beginners with strong endurance may attempt it under guidance."
      },
      {
        question: "What is the difficulty level of this trek?",
        answer:
          "The trek is graded moderate. There are no technical sections, but consecutive walking days and altitude gain require stamina."
      },
      {
        question: "What kind of terrain can I expect?",
        answer:
          "The trek includes village trails, forest paths, river crossings, and wide alpine meadows."
      },
      {
        question: "When is the best time to do the Ranthan Kharak Trek?",
        answer:
          "The best months are May–June and September–October, when the meadows are accessible and weather is relatively stable."
      },
      {
        question: "Is this trek crowded?",
        answer:
          "No. Ranthan Kharak remains one of the quieter and lesser-known treks in the Kumaon region."
      },
      {
        question: "What makes this trek unique?",
        answer:
          "Its vast, untouched meadows, quiet trails, and immersive wilderness experience set it apart from more popular Himalayan treks."
      }
    ]
  },

  faqsLink: "/faqs-and-articles",
},

{
    id: "dhakuri-pass-trek",
    name: "Dhakuri Pass Trek",
    tags: ["beginner", "meadows"],
    difficulty: ["easy"],
    season: ["spring", "summer", "autumn", "winter"],
    month: ["january", "february", "march", "april", "may", "june", "september", "october", "november", "december"],
    duration: ["4 Nights / 4 Days"],
    region: "uttarakhand-kumaon",
    coordinates: [
        [29.5300, 79.6100], // Kathgodam (start)
        [29.8450, 79.8770], // Dhoor Village
        [29.8680, 79.9080], // Dhakuri Pass
        [29.8760, 79.9150], // Chiltha Mata Temple Top
        [29.8290, 79.8600], // Loharkhet
        [29.5300, 79.6100], // Kathgodam (end)
    ],

    heroImage: "https://res.cloudinary.com/dr44hob9b/image/upload/v1765524797/dhakuri-trek-hero1_c97vl5.jpg",

    heroImages: [
        "https://res.cloudinary.com/dr44hob9b/image/upload/v1765524797/dhakuri-trek-hero1_c97vl5.jpg",
        "https://res.cloudinary.com/dr44hob9b/image/upload/v1765524790/dhakuri-trek-hero_lx7cgt.jpg",
        "https://res.cloudinary.com/dr44hob9b/image/upload/v1765524803/dhakuri-trek-view_j6e7rl.png",
    ],
    
    subtitle: "Where Kumaon Opens the Door to the Himalayas",

    seo: {
    title: "Dhakuri Pass Trek | Itinerary, Cost & Dates | Planethimalayas",
    description:
        "Dhakuri Pass Trek (2,800–3,300 m) is an easy Himalayan trek in Kumaon, Uttarakhand. Starting from Dhoor Village, it offers forest trails, rolling meadows, Chiltha Mata Temple Top, and sweeping 180° views of the Nepal & Kumaon Himalayas. A perfect offbeat alternative to Kedarkantha, Brahmatal & Triund."
    },

    overview: {
        facts: [
        { emoji: "⏳", label: "Trek Duration", value: "4 Nights / 4 Days" },
        { emoji: "⚡", label: "Trek Grade", value: "Easy" },
        { emoji: "🏔️", label: "Max Altitude", value: "3,300 m (Chiltha Mata Top)" },
        { emoji: "⚡", label: "Trek Distance", value: "Approx. 22 km" },
        { emoji: "🌤️", label: "Best Time", value: "Year-round (All seasons)" },
        { emoji: "🗺️", label: "Region", value: "Kumaon Himalayas, Uttarakhand" },
        { emoji: "📍", label: "Start Point", value: "Kathgodam (554 m)" },
        { emoji: "🏁", label: "End Point", value: "Kathgodam" },
        { emoji: "🧥", label: "Cloakroom Facility", value: "Available" },
    ],

    snippet: `
Dhakuri Pass (2,800 m) is one of Kumaon’s most timeless Himalayan trails — a route that blends forest charm, ancient village culture, and grand mountain vistas in a way few short treks can. Historically known as a key stopover for trekkers and mountaineers heading into the deep Johar Valley, Dhakuri has remained beautifully untouched even as other trails became commercialised. 
<br>
The journey begins in the remote villages above Bageshwar, where traditional Kumaoni settlements sit amidst terraced fields and pine forests. As you trek upward, the landscape shifts from oak–rhododendron woods to wide open meadows framed by the snow-covered giants of Kumaon and Nepal. The highlight of the trek is an ascent to the Chiltha Mata Temple Top (3,300 m), a high ridge offering a sweeping 360° panorama — layers of mountain ranges, distant Himalayan peaks, and the entire Dhakuri meadow unfolding below like a natural amphitheatre.
<br>
Every season creates a different personality for this trail: bright rhododendrons in spring, monsoon cloud seas spilling into the valley, crisp golden forests in autumn, and a silent white world in winter. Unlike popular treks such as Kedarkantha or Brahmatal, Dhakuri remains quiet, serene, and far from crowds — a true offbeat gem.
<br>
With a cosy guesthouse at Dhakuri, easy-to-moderate trail difficulty, and only 20–22 km of total trekking, this journey is perfect for fit beginners, families, and anyone wanting a peaceful Himalayan escape that still delivers unforgettable views.
    `
    },

    price: 8400,
    priceNote: "* Dhoor/Loharkhet to Loharkhet/Dhoor",

    addons: {
      transport: 5000,
      transportNote: "* Kathgodam to Kathgodam (shared vehicle basis)",
      offloadingbag: 1500,
      offloadingNote: "* Maximum weight 9kg / bag"
    },

    inclusionsNote:
      "🍽️ All Meals – Nutritious meals provided from dinner on Day 1 to dinner on Day 4",

    dates: [
  { label: "05 Jan - 08 Jan", start: "2026-01-05", end: "2026-01-08" },
  { label: "12 Jan - 15 Jan", start: "2026-01-12", end: "2026-01-15" },
  { label: "19 Jan - 22 Jan", start: "2026-01-19", end: "2026-01-22" },
  { label: "26 Jan - 29 Jan", start: "2026-01-26", end: "2026-01-29" },

  { label: "02 Feb - 05 Feb", start: "2026-02-02", end: "2026-02-05" },
  { label: "09 Feb - 12 Feb", start: "2026-02-09", end: "2026-02-12" },
  { label: "16 Feb - 19 Feb", start: "2026-02-16", end: "2026-02-19" },
  { label: "23 Feb - 26 Feb", start: "2026-02-23", end: "2026-02-26" },

  { label: "02 Mar - 05 Mar", start: "2026-03-02", end: "2026-03-05" },
  { label: "09 Mar - 12 Mar", start: "2026-03-09", end: "2026-03-12" },
  { label: "16 Mar - 19 Mar", start: "2026-03-16", end: "2026-03-19" },
  { label: "23 Mar - 26 Mar", start: "2026-03-23", end: "2026-03-26" },
  { label: "30 Mar - 02 Apr", start: "2026-03-30", end: "2026-04-02" },

  { label: "06 Apr - 09 Apr", start: "2026-04-06", end: "2026-04-09" },
  { label: "13 Apr - 16 Apr", start: "2026-04-13", end: "2026-04-16" },
  { label: "20 Apr - 23 Apr", start: "2026-04-20", end: "2026-04-23" },
  { label: "27 Apr - 30 Apr", start: "2026-04-27", end: "2026-04-30" }
],

    highlights: [
        "Scenic trek through oak, pine, and rhododendron forests",
        "360° Himalayan panorama from Chiltha Mata Temple Top (3,300 m)",
        "Quiet, offbeat trail — far from the crowds",
        "Comfortable Dhakuri Guesthouse stay with incredible mountain views",
        "Spring flowers, monsoon cloud waves, autumn clarity, and winter snow — a year-round trekking gem",
        "Perfect for beginners, families, and photographers"
    ],

    itinerary: [
        {
            day: 1,
            title: "Kathgodam (554 m) to Dhoor Village (2,200 m) | 190 km Drive | 8–9 Hours",
            details: `
Begin early from Kathgodam and drive through Bhimtal, Almora, Bageshwar, and Bharadi — a route that gradually unfolds the beauty of Kumaon. At Bharadi, shift to a second shared vehicle for the climb to Dhoor Village. Arrive by evening and settle into a warm homestay or campsite. Enjoy stunning Himalayan views as your guide briefs you about the trek ahead.
            `
        },
        {
            day: 2,
            title: "Dhoor Village to Dhakuri (2,800 m) | 4 km Trek | 3–4 Hours",
            details: `
Start after breakfast and follow a scenic forest trail towards Dhakuri Pass. Oak and rhododendron trees surround the path, and small mountain streams cross your route. After reaching Dhakuri, enjoy hot lunch (or packed lunch depending on time) and take in the breathtaking Himalayan views before settling into your guesthouse or campsite.
            `
        },
        {
            day: 3,
            title: "Dhakuri to Chiltha Mata Temple Top (3,300 m) & Return | 10 km Trek | 6–8 Hours",
            details: `
Start before sunrise with tea and begin the 5 km ascent to Chiltha Mata Temple Top. The summit offers one of the finest 360° views in Kumaon — Nepal peaks, layered ridges, and the entire Dhakuri meadows below. Spend the day capturing sunrise, landscapes, or time-lapse sequences before descending back to Dhakuri for dinner.
            `
        },
        {
            day: 4,
            title: "Dhakuri to Loharkhet (1,760 m) | 8 km Trek | 4–5 Hours",
            details: `
After breakfast, descend gradually through forests and old trade routes towards Loharkhet — once the traditional gateway for deeper Johar Valley expeditions. Reach by late afternoon, check into a homestay or campsite, and enjoy your final evening in the mountains.
            `
        },
        
    ],

    howToReach: {
      air: "Nearest airport: Pantnagar Airport – approx. 230 km from Bageshwar. Taxis to Bageshwar/Loharkhet available.",
      train:
        "Nearest major railway station: Kathgodam (95 km from Bageshwar). From there, take a shared cab or private taxi to Loharkhet via Bageshwar.",
      road:
        "From Delhi: Overnight bus to Haldwani/Kathgodam, then taxi to Bageshwar and onward to Dhoor/Loharkhet. From Almora: 4–5 hrs via Bageshwar.",
      travelTip:
        "Reach Dhoor or Loharkhet one day early to acclimatize and enjoy the peaceful Kumaon villages before the trek."
    },

    didYouKnow: [
    "Dhakuri once served as an important halting point on the ancient trade route connecting Bageshwar to the Johar Valley and further into Tibet.",
    "The Dhakuri meadows offer one of the best ‘mirror-view’ panoramas of the Kumaon giants — Maiktoli, Mrigthuni, Panwali Dwar, and Nanda Khat — all aligned in a single sweeping arc.",
    "Chiltha Mata Temple Top (3,300 m) is believed by locals to be a sacred vantage point where shepherds once prayed for safe passage before entering high Himalayan valleys.",
    "The forests around Dhakuri are home to rare fauna including Himalayan black bear, serow, and the elusive koklass pheasant often spotted near dawn.",
    "During monsoon, the trail to Dhakuri blooms with over a dozen species of rhododendron and alpine flowers, making it one of the most biodiverse short treks in Kumaon.",
    "Winter trekkers sometimes witness a rare ‘sea of clouds’ phenomenon from Dhakuri, where the entire valley below gets blanketed while the pass remains clear and sunny.",
    "Old British-era records mention Dhakuri as a favourite campsite of explorers heading toward Sunderdunga, Pindari and Kafni glaciers — long before modern trekking existed."
    ],


    gallery: [
      
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1765524797/dhakuri-trek-hero1_c97vl5.jpg",
        "https://res.cloudinary.com/dr44hob9b/image/upload/v1765524790/dhakuri-trek-hero_lx7cgt.jpg",
        "https://res.cloudinary.com/dr44hob9b/image/upload/v1765524803/dhakuri-trek-view_j6e7rl.png",
        "https://res.cloudinary.com/dr44hob9b/image/upload/v1765524786/images_gao1oe.jpg",
        "https://res.cloudinary.com/dr44hob9b/image/upload/v1765524784/dhakuri-trek-view3_k6qbua.webp",
        "https://res.cloudinary.com/dr44hob9b/image/upload/v1765524783/dhakuri-trek-view1_kxgpeg.webp",
        "https://res.cloudinary.com/dr44hob9b/image/upload/v1765524783/dhakuri-trek-view2_tfdusc.webp"
    
    ],

    downloadLink: "/docs/Packing_List.pdf",

    faqs: {
  questions: [
    {
            question: "Who can join the Dhakuri Pass Trek?",
            answer: "Anyone with basic fitness — beginners, families, and first-timers. The trail is easy-to-moderate with a few short climbs."
        },
        {
            question: "Is this trek safe?",
            answer: "Yes. The trail is well-marked, forested, and not exposed. Guides accompany you throughout."
        },
        {
            question: "Will I get mobile network?",
            answer: "Network is available in Kathgodam and some stretches near villages, but not at Dhakuri."
        },
        {
            question: "What is the best season for this trek?",
            answer: "Year-round. Spring blooms, monsoon clouds, autumn clarity, and winter snow each offer a unique experience."
        },
        {
            question: "Is offloading available?",
            answer: "Yes, mule/porter offloading is available with prior booking."
        }
  ]

    },
    faqsLink: "/pages/faqs-and-articles",
  },

  {
    id: "pindari-glacier-trek",
    name: "Pindari Glacier Trek",
    tags: ["beginner", "meadows"],
    difficulty: ["easy", "moderate"],
    season: ["summer", "autumn"],
    month: ["may", "june", "september", "october"],
    duration: ["5 Nights / 5 Days"],
    region: "uttarakhand-kumaon",

    coordinates: [
        [29.8380, 79.9150], // Khati
        [29.8500, 79.9710], // Dwali
        [29.8830, 79.9980], // Phurkia
        [29.9130, 80.0260], // Zero Point / Pindari Glacier
        [29.8830, 79.9980], // Back to Phurkia
        [29.8500, 79.9710], // Dwali
        [29.8380, 79.9150], // Khati
    ],

    heroImage: "https://res.cloudinary.com/dr44hob9b/image/upload/v1765550196/pindari-glacier-hero_c9eres.jpg",

    heroImages: [
        "https://res.cloudinary.com/dr44hob9b/image/upload/v1765550196/pindari-glacier-hero_c9eres.jpg",
        "https://res.cloudinary.com/dr44hob9b/image/upload/v1765550200/pindari-glacier-hero2_yemxih.webp",
        "https://res.cloudinary.com/dr44hob9b/image/upload/v1765550197/pindari-glacier-hero1_fbovjg.jpg",
    ],
    
    subtitle: "A Classic Kumaon Himalayan Adventure",

    seo: {
        title: "Pindari Glacier Trek | Itinerary, Cost & Dates | Planethimalayas",
        description:
            "Pindari Glacier Trek (3,700 m) is a classic Kumaon Himalayan adventure from Khati to the snout of the Pindari Glacier. Explore forests, meadows, river valleys, snow bridges, and breathtaking views of Nanda Devi, Nanda Kot & Maiktoli."
    },

    overview: {
        facts: [
        { emoji: "⏳", label: "Trek Duration", value: "5 Nights / 5 Days" },
        { emoji: "⚡", label: "Trek Grade", value: "Easy / Moderate" },
        { emoji: "🏔️", label: "Max Altitude", value: "Approx. 3,700 m" },
        { emoji: "⚡", label: "Trek Distance", value: "Approx. 48 Km" },
        { emoji: "🌤️", label: "Best Time", value: "May–June & Sep–Oct" },
        { emoji: "🗺️", label: "Region", value: "Kumaon Himalayas, Uttarakhand" },
        { emoji: "📍", label: "Start Point", value: "Khati Village (2,210 m)" },
        { emoji: "🏁", label: "End Point", value: "Khati Village" },
        { emoji: "🧥", label: "Cloakroom facility", value: "Available" },
    ],

    snippet: 
    "The Pindari Glacier Trek is a classic Himalayan journey into the wild heart of Kumaon, where every bend in the trail reveals a new surprise—whispering forests, roaring rivers, ancient trade routes, and the towering guardians of the Nanda Devi Sanctuary. Your adventure begins in the peaceful village of Khati, a little world of wooden homes, terraced fields, and warm mountain hospitality. The moment you step onto the trail, the scent of rhododendrons, the echo of distant waterfalls, and the calls of rare Himalayan birds pull you deeper into the valley.<br>As you move toward Dwali, the forest opens and closes like a living storybook—bridges swing above the turquoise Pindar River, moss-covered boulders glow in filtered sunlight, and high cliffs loom overhead like silent protectors. The trail climbs gradually, crossing spider-walls, old stone pathways, and landslide slopes carved over centuries by storms, glaciers, and monsoon winds. Every day feels different: one moment you're wrapped in dense greenery, and the next you’re standing before vast open meadows, icy streams, and ridgelines that lead your eyes straight to distant peaks.<br>Beyond Phurkia, the valley changes character entirely—alpine winds pick up, the landscape turns stark and glacial, and the mighty face of Nanda Khat glows golden in the morning sun. The approach to Zero Point is pure Himalayan theatre: snow bridges, frozen water channels, tumbling ice blocks, and the thunderous silence of high mountains. And then, without warning, the glacier appears—enormous, serene, shimmering beneath the sky. Standing at 12,300 ft in front of the snout of Pindari Glacier is not just a photo moment; it feels like touching the ancient heartbeat of the Himalayas.<br>Nights are spent in cozy camps surrounded by towering cliffs and a sky thick with stars. The quiet villages, the smiling locals, and the age-old stories of explorers who once passed through this valley add depth to the journey. As you descend back toward Khati, the trail seems to tell a different story—one of gratitude, calm, and connection to nature.<br>The Pindari Glacier Trek is perfect for both beginners and seasoned trekkers, thanks to its balanced terrain, rich biodiversity, and a trail that remains accessible for most of the year. From forests splashed with colour to glacial amphitheatres that take your breath away, this trek is a complete Himalayan experience—safe, scenic, and unforgettable.<br><br><strong>Please note:</strong> Trail sections between Khati, Dwali, and Phurkia can be affected by early-season snow, monsoon landslides, and stream crossings. Proper layers, sturdy footwear, and basic fitness ensure a smooth and rewarding journey."
    },

    price: 10400,
    priceNote: "* Khati to Khati",

    addons: {
      transport: 5000,
      transportNote: "* Kathgodam to Kathgodam (shared vehicle basis)",
      offloadingbag: 2000,
      offloadingNote: "* Maximum weight 9kg / bag"
    },

    inclusionsNote:
      "🍽️ All Meals – Nutritious meals provided from dinner on Day 1 to dinner on Day 5",

    highlights: [
    "One of Kumaon’s most iconic treks leading to the mighty Pindari Glacier",
    "Verdant trail through oak, pine, deodar, and birch forests with changing landscapes every day",
    "Majestic views of Mt. Nanda Devi East, Mt. Panwali Dwar, Mt. Maiktoli, and the surrounding Kumaon giants",
    "Beautiful village trails through Khati — the last inhabited village on the route",
    "Easy-to-moderate terrain suitable for fit beginners and families",
    "Peaceful forest sections, riverside walks, wooden bridges, and glacier-side camps",
    "Spring rhododendrons, monsoon greenery, crisp autumn skies, and winter snow patches — rewarding in all seasons",
    "A perfect introductory Himalayan glacier trek with rich culture, scenery, and adventure"
],

    itinerary: [
        {
    day: 1,
    title: "Kathgodam – Khati Village (2,210 m) | 185 km Drive | 10–11 Hours",
    details:
        "<strong>• Drive: 185 km | Duration: 10–11 hrs</strong><br>• Your journey begins early morning at 6:00 AM from Kathgodam Railway Station, where our team meets you for the drive to Khati, the base camp of the Pindari Glacier Trek. The route is beautifully scenic as you travel through Bheemtal, Almora, Bageshwar, and Kapkot—classic Kumaon landscapes filled with forests, winding valleys, and charming hillside towns.<br>• After Kapkot (the last ATM point), the road gradually narrows and winds deeper into the mountains. From Loharkhet, an off-road motorable stretch leads you to the traditional village of Khati—the last inhabited village on the Pindari trail. Khati is known for its warm locals, wooden homes, rich folklore, and legends suggesting the Pandavas once stayed here during their exile.<br>• Enjoy views of Nanda Kot, Nandabaner, and Laspadhura from the village. Mobile connectivity is minimal (only patchy BSNL), and electricity is largely solar-powered. After reaching the Khati campsite, settle into your tents, have dinner, and prepare for the trek ahead."
},
        {
    day: 2,
    title: "Khati – Dwali (2,575 m) | 13 km Trek | 6–7 Hours",
    details:
        "<strong>• Trek: 13 km | Duration: 6–7 hrs</strong><br>• After a hearty breakfast, begin your long walk toward Dwali. The Pindar River accompanies you throughout the day, filling the trail with the sound of rushing water. The route includes wooden bridges, cascading waterfalls, and several landslide-prone sections created by the 2013 disaster—so caution and following the trek leader’s instructions are essential.<br>• The first 20 minutes involve a steep ascent offering a bird’s-eye view of Khati. The gradient eases soon after, leading you to a stream—your first water point. Passing KMVN lodges, you reach a wooden bridge that crosses the first landslide zone before the trail narrows and descends into dense forest with the Pindar River gushing on your left.<br>• Multiple landslide zones follow, requiring detours down to the riverbank. You will navigate boulders, moraines, temporary trails, and steep reconnecting climbs back to the original ridge. Each section demands careful footwork, especially the longer detour where you cross huge boulders and four scissor bends before climbing back up through dense vegetation.<br>• After reconnecting with the main trail, an uphill stretch leads you to the sixth and final landslide zone. The descent to the river is loose and unstable, followed by a moraine walk to the final river crossing. Once across, you reach Dwali—an area still showing scars of the 2013 calamity.<br>• By evening, settle into the Dwali campsite with panoramic valley views. Drinking water is available nearby, and after dinner, rest in your tents for the night."
},
        {
    day: 3,
    title: "Dwali – Phurkia (3,250 m) | 5 km Trek | 3 Hours",
    details:
        "<strong>• Trek: 5 km | Duration: 3 hrs</strong><br>• Today’s trek is comparatively easier and shorter. After a warm breakfast, begin your ascent through beautiful Oak and Rhododendron forests. Clear weather offers spectacular views of Mt. Nanda Devi and Nanda Khat, while the trail gradually winds deeper into the Pindar Valley with forested switchbacks and scenic meadows perfect for photography.<br>• Look out for Himalayan Ibex grazing in the pastures across the river. As you continue along the verdant grasslands, you will cross two glacial streams—often frozen into hard layers of snow. The trail also includes a few landslide-prone patches and narrow spiderwall sections, where your trek leader will guide you through safely.<br>• After navigating these tricky segments, you’ll cross the final snow bridges and follow the left bank of the river toward Phurkia. Landmarks like the KMVN and PWD huts mark your arrival. The Phurkia campsite welcomes you with stunning views of the towering Nanda Khat peak. After pitching your tents, enjoy a hot meal and rest for the night."
},
        {
    day: 4,
    title: "Phurkia – Zero Point (3,700 m) – Phurkia | 12 km Trek | 7–8 Hours",
    details:
        "<strong>• Trek: 12 km round trip | Duration: 7–8 hrs</strong><br>• Today is your summit day — the most thrilling part of the Pindari Glacier trek. Start early from Phurkia, taking the trail on the left of the KMVN hut. Within 15 minutes, you’ll cross the first snow bridge and enter a beautiful meadow dominated by the towering face of Mt. Nanda Khat. The Pindar River thunders far below in a deep gorge as you continue along the ridge.<br>• After around 20 minutes, navigate a sensitive rockfall section before moving deeper into the valley where patches of hard snow appear. Crampons are extremely useful here. Continue past Bhujani as the terrain becomes increasingly glaciated, leading you toward the upper Pindar Valley.<br>• The trail now demands caution: narrow spiderwall traverses, broken ridges, and exposed sections test your focus. Ahead, the snow-covered slopes reveal grand views of Mt. Bauljuri and the Changuch massif. As greenery fades, you climb steadily toward the snowy Pindar ridge, reaching it in about 40 minutes. From the ridge-top, the mighty Pindari Glacier spreads out to your left while Changuch (6,322 m) towers on your right.<br>• Cross three expansive ice fields — heavily snow-laden in April and May — and continue toward the small hut and shrine of Pindari Baba (Dharmanand Ji). From here, a final 40-minute push over moraines brings you to the iconic board marking Pindari Glacier Zero Point. Enjoy breathtaking views of Changuch Peak and Nanda Kot (6,861 m), and soak in the high-altitude silence of this majestic glacier basin.<br>• After spending time at the summit viewpoint, retrace your route back to Phurkia. Descending is quicker, but caution is essential across snow fields and broken trail patches. By evening, settle into camp, enjoy a hot meal, and rest after an unforgettable summit day."
},
        {
    day: 5,
    title: "Phurkia – Dwali – Khati | 18 km Trek | 7–8 Hours",
    details:
        "<strong>• Trek: 18 km | Duration: 7–8 hrs</strong><br>• Today begins your long descent back toward the lower valley. Start early from Phurkia and retrace the same scenic trail you climbed earlier. Within 2 hours, you’ll reach Dwali after crossing the familiar snow bridges, meadows, and the forested ridge sections.<br>• From Dwali, continue your steady descent toward Khati. The route takes you through all the earlier landslide zones, narrow forest paths, and stretches along the thundering Pindar River. The downhill walk is faster but requires caution, especially on loose gravel and broken trail patches.<br>• As you lose altitude, the landscape transitions back into dense Rhododendron and Oak forests, followed by wide valley bends and wooden bridges that mark your return journey. After 4–5 hours from Dwali, you finally reach Khati — the warm, familiar village surrounded by Himalayan peaks.<br>• Settle into your campsite for the night. After a long day of trekking, enjoy a hearty dinner and rest well in the peaceful Khati valley."
},
        
    ],

    howToReach: {
    air: "Nearest airport: Pantnagar Airport – 240 km from Bageshwar. Taxis available to Kharkiya/Khati.",
    train:
        "Nearest major railway station: Kathgodam. From there, take a shared cab or private taxi to Bageshwar, then onwards to Kharkiya/Khati.",
    road:
        "From Delhi: Overnight bus to Haldwani/Kathgodam, then taxi to Bageshwar → Kharkiya → Khati. Roads remain open most of the year.",
    travelTip:
        "Arrive in Khati one day early to acclimatise and enjoy the village before starting the trek."
},

    didYouKnow: [
    "The Pindari Glacier was one of the first glaciers in the Kumaon Himalayas to be documented by British explorers in the 1800s.",
    "Eric Shipton, the legendary mountaineer, explored the Pindari Valley extensively and used it as a gateway for many Himalayan surveys.",
    "The Pindari River flows directly from the glacier snout and eventually merges with the Alaknanda, forming part of the Ganga system.",
    "Phurkia is known for rapid weather changes where a clear sky can turn into a whiteout within minutes.",
    "Explorers in the early 1900s considered the Pindari Valley one of the best ‘training grounds’ before attempting big Himalayan peaks like Nanda Devi and Trisul.",
    "Frank Smythe, famous for discovering the Valley of Flowers, also wrote about the Pindari region, calling it one of the most accessible glacier routes in India at the time.",
    "Before modern trekking became popular, local shepherds and traders used this trail to cross seasonal routes connecting remote Himalayan villages.",
    "Old expedition logs mention that the Pindari Glacier snout has receded dramatically over the last century — more than 200 meters according to early surveys.",
    "Many early survey teams in the British era used Pindari as a base to map the lesser-known peaks of the Kumaon Himalaya, making it a historically significant exploration route."
],

    gallery: [
      
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1765550196/pindari-glacier-hero_c9eres.jpg",
        "https://res.cloudinary.com/dr44hob9b/image/upload/v1765550200/pindari-glacier-hero2_yemxih.webp",
        "https://res.cloudinary.com/dr44hob9b/image/upload/v1765550197/pindari-glacier-hero1_fbovjg.jpg",
        "https://res.cloudinary.com/dr44hob9b/image/upload/v1765550189/pindari-glacier-view4_epqlly.webp",
        "https://res.cloudinary.com/dr44hob9b/image/upload/v1765550186/pindari-glacier-view3_slojrf.webp",
        "https://res.cloudinary.com/dr44hob9b/image/upload/v1765550184/pindari-glacier-view2_gf0uqz.jpg",
        "https://res.cloudinary.com/dr44hob9b/image/upload/v1765550182/pindari-glacier-view1_smtg7t.webp",
        "https://res.cloudinary.com/dr44hob9b/image/upload/v1765550179/pindari-glacier-view_urthaq.webp",
        "https://res.cloudinary.com/dr44hob9b/image/upload/v1765550179/pindari-glacier-hero3_yswukk.jpg"
    ],

    downloadLink: "/docs/Packing_List.pdf",

    faqs: {
    questions: [
        {
            question: "Who can join the Pindari Glacier Trek?",
            answer:
                "This trek is suitable for beginners with good fitness as well as experienced trekkers. The trail includes long walking days, multiple stream crossings, and several landslide-detour sections, so basic endurance and balance are essential."
        },
        {
            question: "How long is the trek, and what is the daily hiking distance?",
            answer:
                "The Pindari Glacier Trek spans 6 days, with daily trekking distances ranging from 4 km to 18 km depending on the terrain. Summit day involves walking on snow patches, moraine, and glacier sections, so pacing and hydration are important."
        },
        {
            question: "What is the difficulty level, and do I need prior experience?",
            answer:
                "The trek is rated as moderate. No prior high-altitude experience is required, but you should be comfortable walking 6–7 hours a day. The landslide zones between Khati, Dwali, and Phurkia require caution and attention to your trek leader’s instructions."
        },
        {
            question: "When is the best time to do the Pindari Glacier Trek?",
            answer:
                "The best season is spring to early summer (April–June) and post-monsoon (September–November). Snow on the trail is highest in April–May, while October offers the clearest mountain views, including Nanda Khat and Nanda Devi East."
        },
        {
            question: "What is the highest altitude reached during this trek?",
            answer:
                "The highest point is the Pindari Glacier Zero Point at around 3,700 m. Mild symptoms like breathlessness or headaches can occur, so hydration and steady pacing are key to avoiding altitude-related discomfort."
        },
        {
            question: "What kind of accommodation and meals are provided?",
            answer:
                "Accommodation is in tents throughout the trek, with campsites at Khati, Dwali, and Phurkia. Meals include hot vegetarian dishes, dal, rice, vegetables, roti, Maggi, soup, tea, and snacks. Campsites have drinking water sources nearby."
        },
        {
            question: "Do I need special gear or equipment?",
            answer:
                "Carry warm layered clothing, waterproof jackets, trekking shoes, gloves, caps, sunglasses, and a sturdy backpack. On summit day, microspikes and gaiters may be used depending on snow conditions. Trekking poles are very helpful."
        },
        {
            question: "Is travel insurance required?",
            answer:
                "Travel insurance is strongly recommended, covering high-altitude trekking, medical emergencies, evacuation, and weather-related delays. It is not included by default."
        },
        {
            question: "How is safety ensured on the Pindari Glacier Trek?",
            answer:
                "Certified trek leaders guide the group, especially through landslide-prone detours, spider-wall sections, and snow patches. The team carries first-aid kits, and communication is maintained with Khati and Dwali. Campsites are checked for safety, and water sources are verified."
        },
        {
            question: "What emergencies should I be prepared for?",
            answer:
                "Minor issues like fatigue, dehydration, and slips on loose gravel can happen. In case of serious medical issues, evacuation is arranged back towards Khati or Loharkhet, the nearest road-head. Always report discomfort early."
        },
        {
            question: "Will I get mobile network during the trek?",
            answer:
                "Only BSNL works intermittently in Khati. Beyond Khati (Dwali, Phurkia, and Zero Point), the trail is completely off-grid with no mobile connectivity."
        },
        {
            question: "Are wildlife sightings possible?",
            answer:
                "Yes, trekkers often spot Himalayan Ibex near streams and meadows, along with birds like Monal and Himalayan Griffon. The forests around Khati and Dwali are also rich in flora like rhododendron and oak."
        },
        {
            question: "Are there water sources along the trail?",
            answer:
                "Yes, there are multiple water points, including streams near Khati, Dwali, and on the way to Phurkia. Many sections involve stream crossings or snow bridges, making it easy to refill bottles after purification."
        },
        {
            question: "What local customs or cultural aspects should I keep in mind?",
            answer:
                "Khati village is known for its warm hospitality and mythology linked to the Pandavas. Dress modestly, respect local traditions, and seek permission before photographing villagers or homes."
        },
        {
            question: "Is offloading available?",
            answer:
                "Yes, you can offload your backpack by hiring a porter or mule from Khati. Prior booking is recommended, especially during the peak season."
        }
    ]
},

    faqsLink: "/pages/faqs-and-articles",
  },


  {
  id: "panchachuli-base-camp-trek",
  name: "Panchachuli Base Camp Trek",
  tags: ["intermediate", "meadows"],
  difficulty: ["moderate"],
  season: ["summer", "autumn"],
  month: ["may", "june", "september", "october"],
  duration: ["6 Nights / 6 Days"],
  region: "uttarakhand-kumaon",

  coordinates: [
    [30.0010, 80.2080], // Darma Valley road head (Sobla)
    [30.0300, 80.2600], // Dantu
    [30.0700, 80.3050], // Sela
    [30.1150, 80.3550], // Panchachuli Base Camp
    [30.0700, 80.3050], // Sela
    [30.0300, 80.2600], // Dantu
    [30.0010, 80.2080], // Sobla
  ],

  heroImage:
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1765625888/panchachuli-hero1_csghjn.jpg",

  heroImages: [
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1765625888/panchachuli-hero1_csghjn.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1765625884/panchachuli-hero_l34sfx.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1765625891/panchachuli-hero2_vqdkix.webp",
  ],

  subtitle: "Walking to the Foot of the Legendary Five Peaks",

  seo: {
    title:
      "Panchachuli Base Camp Trek | Itinerary, Cost & Dates | Planethimalayas",
    description:
      "Panchachuli Base Camp Trek (3,900 m) takes you deep into the remote Darma Valley of Kumaon, offering breathtaking close-up views of the five Panchachuli peaks, alpine meadows, glacier-fed rivers, and ancient trade routes near the Indo-Tibet border."
  },

  overview: {
    facts: [
      { emoji: "⏳", label: "Trek Duration", value: "6 Nights / 6 Days" },
      { emoji: "⚡", label: "Trek Grade", value: "moderate" },
      { emoji: "🏔️", label: "Max Altitude", value: "Approx. 3,900 m" },
      { emoji: "⚡", label: "Trek Distance", value: "Approx. 52 Km" },
      { emoji: "🌤️", label: "Best Time", value: "May–June & Sep–Oct" },
      { emoji: "🗺️", label: "Region", value: "Darma Valley, Kumaon Himalayas" },
      { emoji: "📍", label: "Start Point", value: "Sobla (near Dharchula)" },
      { emoji: "🏁", label: "End Point", value: "Dharchula" },
      { emoji: "🧥", label: "Cloakroom facility", value: "Available" },
    ],
  

  snippet:
"The Panchachuli Base Camp Trek leads deep into one of Kumaon’s most dramatic and culturally rich regions — the legendary Darma Valley, a high-altitude corridor carved by glaciers, trade routes, and mountaineering history. Dominating the skyline throughout the journey are the five Panchachuli peaks, a striking chain rising sharply above the valley. Panchachuli I (6,355 m), II (6,904 m), III (6,312 m), IV (6,334 m), and V (6,437 m) stand like sentinels at the head of the valley, their massive ice walls and hanging glaciers visible from multiple points along the trail.<br>The trek follows the roaring Dhauliganga River, born from these glaciers, as it cuts through deep gorges and alpine landscapes. Ancient villages such as Dantu and Sela lie along this route — seasonal settlements of the Bhotiya community who once used this valley as a major Indo–Tibetan trade passage. Stone houses, prayer flags, and grazing grounds still echo stories of caravans that moved salt, wool, and grain across these mountains centuries ago.<br>As altitude increases, the landscape transforms dramatically. Lower forests of oak, pine, and rhododendron give way to vast alpine meadows bursting with seasonal wildflowers — blue poppies, primulas, and dwarf rhododendrons in summer. Higher up, the terrain becomes stark and elemental, with moraine fields, glacial streams, and snow patches even in late season. Himalayan bharal (blue sheep), marmots, and high-altitude birds like lammergeiers and snow pigeons are frequently spotted in the upper valley.<br>Beyond the last villages, the trail enters a raw, high-altitude amphitheatre where the Panchachuli massif reveals its full scale. Glaciers spill down from the peaks in enormous frozen cascades, and distant icefalls rumble across the valley like thunder. The base camp sits amidst snowfields and moraines, directly beneath the towering faces of the peaks — a place long used by climbers as a staging ground for expeditions. Legendary mountaineers, including teams led by explorers such as Eric Shipton, surveyed this region while mapping the eastern Kumaon Himalayas, cementing Panchachuli’s place in Himalayan mountaineering history.<br>Sunsets at base camp are unforgettable — the five peaks glow in shades of gold, copper, and crimson, while the valley below sinks into silence broken only by glacial winds and flowing water. Walking here feels less like a trek and more like entering a living mountain cathedral — vast, humbling, and powerful.<br>The Panchachuli Base Camp Trek is ideal for trekkers seeking more than scenic beauty. It offers close-up Himalayan drama, deep cultural context, and true wilderness solitude. Moderately demanding due to river crossings, long walking days, and high camps, it is best suited for fit trekkers ready to step beyond beginner routes and experience the Himalayas in their raw, uncompromising form.<br><br><strong>Please note:</strong> The Darma Valley is remote and weather-sensitive. Rapid changes in weather, glacial river swell, and high-altitude conditions demand good fitness, layered clothing, and respect for local traditions for a safe and rewarding journey."

  },

  price: 13400,
  priceNote: "* Sobla to Dharchula",

  addons: {
    transport: 6000,
    transportNote: "* Kathgodam to Kathgodam (shared vehicle basis)",
    offloadingbag: 2500,
    offloadingNote: "* Maximum weight 9kg / bag"
  },

  inclusionsNote:
    "🍽️ All Meals – Nutritious meals provided from dinner on Day 1 to dinner on Day 6",

  highlights: [
    "Up-close views of the iconic Panchachuli I–V peaks rising straight from the valley floor",
    "Remote Darma Valley — one of Kumaon’s least-trekked and most pristine regions",
    "Ancient Indo-Tibetan trade route with deep cultural significance",
    "Alpine meadows, glacier-fed rivers, and massive hanging glaciers",
    "Perfect balance of wilderness, altitude, and cultural immersion",
    "Ideal for trekkers looking to move beyond beginner Himalayan trails",
    "Spectacular sunrise and sunset views over towering snow walls",
    "A true base camp experience without extreme technical climbing"
  ],

  itinerary: [
  {
    day: 1,
    title: "Kathgodam – Dharchula – Sobla | 290 km Drive | 12–14 Hours",
    details:
      "<strong>• Drive: 290 km | Duration: 12–14 hrs<br>• Altitude: Kathgodam (554 m) → Sobla (2,040 m)</strong><br>• Start early from Kathgodam for a long yet breathtaking drive through the Kumaon Himalayas. The route passes Almora and Pithoragarh before following the Kali River — which also marks the Indo–Nepal border for much of the journey.<br>• Dharchula is a historic trade town once used by Tibetan and Nepali traders. After permits and local formalities, continue to Sobla, the road-head of the Darma Valley. Overnight stay near Sobla."
  },
  {
    day: 2,
    title: "Sobla – Dantu | 9 km Trek | 5–6 Hours",
    details:
      "<strong>• Trek: 9 km | Duration: 5–6 hrs<br>• Altitude: Sobla (2,040 m) → Dantu (2,400 m)</strong><br>• Enter the remote Darma Valley, walking alongside the powerful Dhauliganga River. The trail gradually ascends through forests, rocky sections, and riverside paths. Expect your first taste of river crossings and narrow trails carved into the mountainside.<br>• Villages here are seasonal, inhabited only during summer months by shepherd communities. Camp overnight at Dantu."
  },
  {
    day: 3,
    title: "Dantu – Sela | 8 km Trek | 4–5 Hours",
    details:
      "<strong>• Trek: 8 km | Duration: 4–5 hrs<br>• Altitude: Dantu (2,400 m) → Sela (3,100 m)</strong><br>• The valley opens into expansive alpine meadows with grazing grounds used by local Bhotiya shepherds. Wooden bridges, glacial streams, and wide landscapes dominate the day.<br>• Panchachuli peaks begin to appear more clearly, often hidden and revealed by moving clouds — a signature feature of this valley. Camp overnight at Sela, a high-altitude meadow campsite."
  },
  {
    day: 4,
    title: "Sela – Panchachuli Base Camp | 7 km Trek | 4–5 Hours",
    details:
      "<strong>• Trek: 7 km | Duration: 4–5 hrs<br>• Altitude: Sela (3,100 m) → Panchachuli Base Camp (3,850 m)</strong><br>• A visually dramatic day with steady ascent over moraines, glacial streams, and rocky terrain. The landscape becomes stark and powerful as vegetation thins out.<br>• The five Panchachuli peaks rise directly ahead, forming one of the most striking base camp settings in the Kumaon Himalayas. Acclimatisation is crucial due to the altitude. Overnight stay at base camp."
  },
  {
    day: 5,
    title: "Panchachuli Base Camp – Dantu | 15 km Trek | 6–7 Hours",
    details:
      "<strong>• Trek: 15 km | Duration: 6–7 hrs<br>• Altitude: Panchachuli Base Camp (3,850 m) → Dantu (2,400 m)</strong><br>• Begin the long descent back through Sela towards Dantu. Though downhill, the distance makes it a physically demanding day.<br>• River crossings feel more manageable now as trekkers gain confidence. The changing perspective of the valley reveals fresh views on the return journey. Overnight stay at Dantu."
  },
  {
    day: 6,
    title: "Dantu – Sobla – Dharchula | Trek + Drive",
    details:
      "<strong>• Trek: 9 km | Duration: 3–4 hrs<br>• Drive: Sobla to Dharchula<br>• Altitude: Dantu (2,400 m) → Sobla (2,040 m) → Dharchula (940 m)</strong><br>• Trek back down to Sobla, officially exiting the Darma Valley. From here, drive to Dharchula and check into a hotel.<br>• Evening at leisure — explore the riverside town, local markets, or simply relax after days spent in high alpine terrain."
  },
],

  howToReach: {
    air:
      "Nearest airport: Pantnagar Airport – approx. 320 km from Dharchula.",
    train:
      "Nearest railway station: Kathgodam. Shared or private taxis available to Dharchula.",
    road:
      "From Delhi: Bus or train to Kathgodam, then drive to Dharchula → Sobla.",
    travelTip:
      "Carry extra buffer days due to permit and weather dependencies in the Darma Valley."
  },

  didYouKnow: [
    "The Panchachuli peaks are named after the five cooking hearths of the Pandavas from the Mahabharata.",
    "The Darma Valley was historically an important Indo-Tibetan trade corridor.",
    "British surveyors used Panchachuli as a reference landmark while mapping eastern Kumaon.",
    "Early mountaineers considered Panchachuli one of the most aesthetically perfect Himalayan groups.",
    "The valley remains lightly populated and is still grazed seasonally by local shepherds."
  ],

  gallery: [
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1765625888/panchachuli-hero1_csghjn.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1765625884/panchachuli-hero_l34sfx.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1765625891/panchachuli-hero2_vqdkix.webp",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1765625871/panchachuli-view_gbxbs6.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1765625872/panchachuli-view1_bmjkc5.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1765625875/panchachuli-view2_ggjb0z.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1765625878/panchachuli-view4_hly8bs.webp",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1765625881/panchachuli-view5_p834ac.webp",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1765625895/panchachuli-vew3_wjnnub.jpg"
  ],

  downloadLink: "/docs/Packing_List.pdf",

  faqs: {
    questions: [
      {
        question: "Who can join the Panchachuli Base Camp Trek?",
        answer:
          "This trek is best suited for fit trekkers with prior trekking experience. The terrain includes long walking days, river crossings, and high-altitude camps."
      },
      {
        question: "What is the difficulty level of this trek?",
        answer:
          "The trek is graded as moderate. While it does not involve technical climbing, altitude gain and remoteness require good endurance."
      },
      {
        question: "What is the highest altitude reached?",
        answer:
          "The highest point is Panchachuli Base Camp at approximately 3,900 m."
      },
      {
        question: "Is this trek suitable for beginners?",
        answer:
          "Network is available only till Dharchula. Beyond Sobla, the trail is completely off-grid."
      },
      {
        question: "Is offloading available?",
        answer:
          "Yes, porter and mule support is available with prior arrangement."
      }
    ]
  },

  faqsLink: "/pages/faqs-and-articles",
},


  /* Sikkim, West Bengal & Nepal*/

  {
    id: "goechala-trek",
    name: "Goechala Trek",
    tags: ["pro", "lake", "glacier", "meadows"],
    difficulty: ["difficult"],
    season: ["spring", "summer", "autumn"],
    month: ["march", "april", "may", "september", "october", "november", "december"],
    duration: ["9 Nights / 9 Days"],
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

  heroImage:  "https://res.cloudinary.com/dr44hob9b/image/upload/v1766063288/khangchendzonga-peak_2_tmtjjo.jpg",

  heroImages: [ "https://res.cloudinary.com/dr44hob9b/image/upload/v1766063288/khangchendzonga-peak_2_tmtjjo.jpg",
                "https://res.cloudinary.com/dr44hob9b/image/upload/v1755534979/goechala-view16_whcd24.jpg",
                "https://res.cloudinary.com/dr44hob9b/image/upload/v1755534971/goechala-view13_dni0oj.jpg",
                "https://res.cloudinary.com/dr44hob9b/image/upload/v1755534967/goechala-view11_cwp15u.jpg",
  ],

  subtitle: "A Himalayan Symphony Of Nature & Majesty",

  seo: {
    title: "Goechala Trek | Itinerary, Cost & Dates | Planethimalayas",
    description: "Goechala Trek (15,100 ft) in Sikkim is the closest you can get to Mt. Kanchenjunga, the world’s third-highest peak. A 10-day trek through rhododendron forests, alpine lakes, and dramatic high-altitude landscapes."
},

    overview: {
      facts: [
        { emoji: "⏳", label: "Trek Duration", value: "9 Nights / 9 Days" },
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
      transport: 5000, 
      offloadingbag: 4200,
      transportNote: "* Siliguri / Bagdogra to Siliguri / Bagdogra",
      offloadingNote: "* Maximum weight 9kg / bag"
    },

    inclusionsNote: "🍽️ All Meals – Nutritious meals provided from dinner on Day 1 to dinner on Day 9",

    dates: [
      
      
     { label: "06 Dec - 14 Dec", start: "2025-12-06", end: "2025-12-14" },
{ label: "13 Dec - 21 Dec", start: "2025-12-13", end: "2025-12-21" },

{ label: "14 Mar - 22 Mar", start: "2026-03-14", end: "2026-03-22" },
{ label: "21 Mar - 29 Mar", start: "2026-03-21", end: "2026-03-29" },

{ label: "28 Mar - 05 Apr", start: "2026-03-28", end: "2026-04-05" },
{ label: "04 Apr - 12 Apr", start: "2026-04-04", end: "2026-04-12" },

{ label: "11 Apr - 19 Apr", start: "2026-04-04", end: "2026-04-19" },

{ label: "18 Apr - 26 Apr", start: "2026-04-18", end: "2026-04-26" },
{ label: "25 Apr - 03 May", start: "2026-04-25", end: "2026-05-03" },

{ label: "02 May - 10 May", start: "2026-05-02", end: "2026-05-10" },
{ label: "09 May - 17 May", start: "2026-05-09", end: "2026-05-17" },

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

  " <b>The trek is steeped in Tibetan and Sikkimese spirituality.</b> <br>Prayer flags, monasteries, and sacred lakes reflect the belief that the entire Kanchenjunga range is the abode of protective mountain deities.",

  " <b>Traditional Sikkimese food becomes essential at altitude.</b><br>Local dishes like thukpa, phagshapa, and butter tea are not just comfort food — they are high-calorie, warming meals designed for cold, high-altitude conditions and are deeply tied to mountain survival."
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
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1766063288/khangchendzonga-peak_2_tmtjjo.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1766063292/khangchendzonga-peak_3_kh3a07.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1766063281/khangchendzonga-peak_1_imnm5j.jpg"
    
    ],

    downloadLink: "/docs/Packing_List.pdf",

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
  id: "dzongri-winter-trek",
  name: "Dzongri Winter Trek",

  tags: ["intermediate", "meadows"],
  difficulty: ["moderate"],
  season: ["winter", "spring", "autumn"],
  month: ["december", "january", "february"],
  duration: ["7 Nights / 7 Days"],
  region: "sikkim",
  coordinates: [
  [27.3745, 88.2350], // Yuksom (start)
  [27.5679, 88.2817], // Tshoka
  [27.5997, 88.2942], // Dzongri
  ],

  heroImage:
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1766063281/khangchendzonga-peak_1_imnm5j.jpg",

  heroImages: [
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1766063281/khangchendzonga-peak_1_imnm5j.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1755534979/goechala-view16_whcd24.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1755534986/goechala-view5_tcefc4.jpg",
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1755534978/goechala-view3_et6beb.jpg",
  ],

  subtitle: "Winter Silence, Golden Sunrise & The Face of Kangchendzonga",

  seo: {
    title:
      "Dzongri Winter Trek | Snow Trek in Sikkim with Kanchenjunga Views | Planethimalayas",
    description:
      "Dzongri Winter Trek in Sikkim is a rare Himalayan snow trek offering sunrise views of Mt. Kanchenjunga, vast alpine meadows, frozen forests, and silent winter landscapes. A perfect high-altitude winter adventure."
  },

  overview: {
    facts: [
      { emoji: "⏳", label: "Trek Duration", value: "7 Nights / 7 Days" },
      { emoji: "⚡", label: "Trek Grade", value: "Moderate" },
      { emoji: "🏔️", label: "Max Altitude", value: "13,675 ft (Dzongri Top)" },
      { emoji: "⚡", label: "Trek Distance", value: "≈50 Km" },
      { emoji: "🌤️", label: "Best Time", value: "December-March" },
      { emoji: "🗺️", label: "Region", value: "Khangchendzonga National Park, Sikkim" },
      { emoji: "📍", label: "Start / End", value: "Yuksom (West Sikkim)" },
      { emoji: "🏁", label: "End Point", value: "Yuksom (West Sikkim)" },
      { emoji: "🧥", label: "Cloakroom facility", value: "Available" },
    ],

    snippet: `
The Dzongri Winter Trek is an immersion into a quieter, more elemental Himalaya — a journey where snow softens the world, silence deepens, and the mountains feel closer, heavier, and infinitely more alive. Traversing the sacred landscapes of West Sikkim inside the Khangchendzonga National Park, this trek strips the trail down to its purest form. In winter, Dzongri is not about crowds or color — it is about stillness, shadow, light, and the overwhelming presence of Kanchenjunga watching from afar.

<br>The trail begins in Yuksom, Sikkim’s ancient capital and the spiritual gateway to Kanchenjunga. As you climb, stone-paved paths wind through dense oak and magnolia forests, now hushed under frost and fallen leaves. Rhododendron branches stand bare and skeletal, prayer flags flutter stiffly in the cold air, and wooden bridges creak over partially frozen mountain streams. With each step upward, winter asserts itself — breath turns visible, footsteps crunch softly, and the forest gradually opens into snow-dusted clearings where the mountains begin to reveal themselves.

<br>By the time you reach Dzongri meadows, the landscape transforms into something surreal. Vast alpine bowls lie blanketed in snow, stretching endlessly beneath an impossibly blue winter sky. The air here is razor-sharp and startlingly clear, carrying sound across distances and sharpening every contour of the surrounding peaks. Dzongri feels less like a campsite and more like a natural amphitheater built for the mountains — a place where silence is not empty, but charged with presence.

<br>The defining moment of the trek arrives at dawn atop Dzongri Top. As first light spills over the horizon, the entire Kanchenjunga massif ignites in shades of gold and copper. The world’s third-highest mountain rises in solemn grandeur, flanked by Pandim, Kabru North and South, Rathong, Simvo, and a scattering of lesser-known yet striking summits. In winter, the clarity is unmatched — peaks appear closer, sharper, and more imposing, as if the mountains have stepped forward to be seen. The view is not fleeting; it lingers, holding you still in awe as sunlight slowly floods the Eastern Himalaya.

<br>Unlike the busier summer routes, winter Dzongri offers an intimacy that few Himalayan treks can match. Trails are quieter, camps are fewer, and the mountains dominate every moment. Days are spent exploring frozen meadows, following snow-covered ridgelines, and absorbing the ever-shifting moods of the sky — from crystalline mornings to dramatic cloud build-ups rolling in from Tibet. Afternoons glow with soft alpine light, while evenings arrive swiftly, pulling temperatures down and drawing trekkers back into the warmth of camp.

<br>As darkness settles, Dzongri reveals another side of its magic. Stars blaze fiercely in the cold night sky, the Milky Way cutting clearly across the heavens. The mountains fade into silhouettes, but their presence remains unmistakable — vast, silent, eternal. Wrapped in layers, gathered around a warm meal or a crackling fire, the experience becomes deeply personal. Conversations soften, thoughts slow, and the Himalaya works quietly on the mind.

<br>At an altitude of approximately 4,000 m, Dzongri in winter is a demanding trek that rewards preparation and respect. Cold nights, snow-covered trails, and rapid temperature drops test endurance, but they also heighten the sense of achievement. This is a trek for those who seek not just views, but feeling — the raw, humbling sensation of standing small beneath giants.

<br>In winter, Dzongri is more than a viewpoint. It is a sanctuary of snow and silence, a front-row seat to Kanchenjunga’s majesty, and a rare chance to experience the Himalaya in its most honest, undisturbed form. A journey that does not shout for attention, but stays with you — quietly, deeply, and forever.`
  },

  price: 17900,
  priceNote: "* Yuksom to Yuksom",
  addons: {
      transport: 5000, 
      offloadingbag: 4000,
      transportNote: "* Siliguri / Bagdogra to Siliguri / Bagdogra",
      offloadingNote: "* Maximum weight 9kg / bag"
    },

  inclusionsNote: "🍽️ All Meals – Nutritious meals provided from dinner on Day 1 to dinner on Day 7",


 dates: [

  { label: "03 Jan - 09 Jan", start: "2026-01-03", end: "2026-01-09" },
  { label: "17 Jan - 23 Jan", start: "2026-01-17", end: "2026-01-23" },
  { label: "31 Jan - 06 Feb", start: "2026-01-31", end: "2026-02-06" },

  { label: "14 Feb - 20 Feb", start: "2026-02-14", end: "2026-02-20" },
  { label: "28 Feb - 06 Mar", start: "2026-02-28", end: "2026-03-06" },

  { label: "14 Mar - 20 Mar", start: "2026-03-14", end: "2026-03-20" },
  { label: "28 Mar - 03 Apr", start: "2026-03-28", end: "2026-04-03" }
  ],

  highlights: [
    "Witness one of the most dramatic winter sunrises over Mt. Kanchenjunga from Dzongri Top",
    "Explore vast Dzongri meadows covered in pristine winter snow",
    "Experience a true Himalayan winter trek with minimal crowds",
    "Snow-covered forests, frozen trails, and silent alpine camps",
    "Panoramic views of Pandim, Kabru, Rathong & Kokthang peaks"
  ],

  itinerary: [
   {
    day: 1,
    title: "Reporting Day at Yuksom | NJP-Siliguri / Bagdogra to Yuksom (1,780 m / 5,840 ft)",
    details: "<strong>• ~150 km | 6–7 hr drive.</strong><br>• The journey to Yuksom takes you through a scenic 6–7 hour drive from NJP or Bagdogra, winding past emerald tea gardens, misty river valleys, and the rolling foothills of Sikkim. As you ascend into the Himalayas, the air turns cooler and crisper, and the rhythm of life slows down. Yuksom, once the first capital of Sikkim (established in 1642), still carries the charm of an ancient Himalayan settlement — fluttering prayer flags, old monasteries, and quiet lanes lined with traditional homes. After checking into a cozy guesthouse, spend the evening sorting out documents for trek permits, checking your gear. If you reach Yuksom early, take a short acclimatization walk to Kathok Lake or the Norbugang Coronation Throne, both steeped in Sikkim’s royal and spiritual history. As dusk settles over the valley, meet your trek crew over a warm dinner, discuss the trail ahead, and get a good night’s rest — tomorrow, your Himalayan adventure truly begins."
  },
  {
    day: 2,
    title: "Yuksom to Sachen (2,180 m / 7,150 ft)",
    details: "<strong>• Trek: ~8 km | 5–6 hrs.</strong><br>• Your adventure begins today with the first trek from Yuksom to Sachen — a beautiful introduction to the forests and rivers of Sikkim’s Kanchenjunga National Park. After a filling breakfast in Yuksom, the trail takes you past a few traditional wooden homes and cultivated fields before gently leading you into the wilderness. Mobile networks fade, human settlements disappear, and the soothing sounds of nature begin to take over.<br>You’ll soon pass through the grand gate that marks the entrance to Kanchenjunga National Park, a UNESCO World Heritage site known for its pristine biodiversity. The path meanders through lush forest dominated by broadleaf, golden oak, and silver oak, with a stunning display of ferns, orchids, and Himalayan wildflowers lining the trail. Three picturesque bridges span the Prek Chhu River, each offering peaceful stops where you can feel the cool mountain breeze and hear the rhythmic sound of flowing water.<br>The gradient remains moderate until after the second bridge, from where a steep ascent begins towards Sachen. As you climb higher, the air grows cooler and denser with forest aroma.<br>By late afternoon, you’ll reach the Sachen campsite, tucked inside a quiet clearing deep within the forest. The campsite sits above the Prek Chhu Valley, and at night, the distant sound of the river adds to the tranquility. It’s a simple yet soulful place to rest after your first day on the trail — perfect for reflecting on the journey ahead and recharging for tomorrow’s climb to Tshoka. Keep an eye out for leeches — carrying a bit of salt or anti-leech spray is wise."
  },
  {
    day: 3,
    title: "Sachen to Tshoka (2,960 m / 9,700 ft) via Bakhim",
    details: "<strong>• Trek: ~7 km | 4–5 hrs.</strong><br>• The second day of your trek takes you from the deep forested camp of Sachen to the vibrant Tibetan settlement of Tshoka, with a refreshing halt at Bakhim along the way. As dawn breaks, the forest awakens to a soft chorus of Himalayan birds — thrushes, flycatchers, and the occasional laughing thrush echoing through the valley. The air feels cool and clean, and the early sunlight streams through oak leaves, painting golden streaks across the trail.<br>After breakfast, you begin a beautiful forest walk that winds gently up and down, following the sound of the Prek Chu River below. The first landmark is the Prek Chu Bridge, a sturdy wooden crossing that sways lightly above a rushing mountain stream — a wonderful photo stop. From here, the trail starts to climb steadily through lush oak, maple, and rhododendron forests, where the melody of birds and rustling leaves set the perfect trekking rhythm. Keep your eyes peeled for the Yellow-billed Blue Magpie, a striking bird that often flits among the canopy.<br>Soon, a steep zigzag ascent brings you to Bakhim (8,600 ft) — a small rest point with mesmerizing views of the Yuksom Valley far below. Trekkers often stop here for tea and snacks while refilling water bottles before the next stretch. From Bakhim, the path turns steeper but far more rewarding as you climb through groves of magnolia trees. In spring, these trees burst into pink and white blooms, transforming the forest into a dreamlike scene straight out of a painting.<br>A little later, you’ll reach Tshoka, a picturesque hamlet perched on an open shelf with prayer-flagged huts and a small monastery overlooking snow-covered giants like Mt. Pandim and Tenzing Khang. The campsite here is stunning — with wooden huts, a serene lake nearby, and a sweeping view of the Eastern Himalayas. Evening is the best time to explore the Tshoka Monastery or simply sit by the lakeside, watching the clouds drift past the peaks.<br>As night falls, the air turns crisp and silent except for the flutter of prayer flags in the wind. Rest well — tomorrow, the trail takes you even deeper into rhododendron country, towards Dzongri."
  },
  {
    day: 4,
    title: "Tshoka to Dzongri (3,960 m / 13,000 ft) via Phedang",
    details: "<strong>• Trek: ~8 km | 6–8 hrs.</strong><br>• The fourth day of the trek marks one of the most breathtaking — and demanding — sections of the journey, as you climb from the peaceful settlement of Tshoka to the high alpine meadows of Dzongri. The morning at Tshoka feels magical: mist rolling over the wooden huts, prayer flags fluttering softly, and a faint glow on distant snow peaks. After a warm breakfast, you begin your steady ascent toward higher altitudes.<br>The trail starts gently, winding through a dense rhododendron and oak forest, where the cool mountain air carries the earthy scent of moss and rain-soaked wood. Soon, a beautiful wooden walkway appears — a series of planks that guide you through one of the most enchanting sections of the entire trek. In spring, this path transforms into a tunnel of colors, with blooming red, pink, and white rhododendrons draping the forest in a surreal floral canopy. Each step along this stretch feels like walking through a dream — soft creaks beneath your boots, petals scattered across the trail, and an almost sacred stillness in the air.<br>Gradually, the forest thickens again, and the path grows steeper as you climb toward Phedang (12,000 ft) — a scenic clearing lined with prayer flags fluttering against the backdrop of deep green valleys. This is the perfect spot to rest, enjoy a snack, and hydrate before the final push to Dzongri. Beyond Phedang, the trees begin to thin, and the climb becomes more relentless. The gain in altitude is noticeable, so move slowly, breathe deeply, and pace yourself to avoid altitude-related fatigue.<br>After a challenging ascent, you’ll reach Deorali Top, a panoramic ridge that rewards every step of the climb. From here, the view opens dramatically — Kanchenjunga, Pandim, and other towering peaks rise majestically across the skyline, often shimmering through drifting clouds. It’s one of those rare Himalayan moments where silence, effort, and beauty merge perfectly.<br>From Deorali, the terrain levels out into a more gradual path leading to Dzongri, one of the most iconic high-altitude camps in Sikkim. The landscape shifts to open meadows, dwarf rhododendrons, and patches of frost-crusted grass. As the wind turns colder and stronger, you’ll know you’ve truly entered the alpine zone.<br>By evening, you arrive at the Dzongri campsite — a windswept meadow surrounded by snow peaks and crisp mountain air. After settling in, enjoy a hot meal, stay warm inside your tent, and rest deeply. The next morning brings a special reward — the legendary sunrise from Dzongri Top, one of the most magnificent sights in the Eastern Himalayas."
  },
  {
    day: 5,
    title: "Sunrise at Dzongri Top (4,170 m / 13,675 ft) & Dzongri meadows explore (3,930 m / 12,900 ft)",
    details: "<strong>• Trek: ~10 km | 6–8 hrs.</strong><br>•Wake up early at Dzongri campsite to start a truly unforgettable day. Your morning begins with a short trek to Dzongri Top, just about an hour from camp. By sunrise, you’ll reach the top and witness the majestic Himalayas bathed in soft morning light. Kanchenjunga, Pandim, Kabru North & South, Kokthang, and other towering peaks glow golden as the first rays hit the snow, while colorful Tibetan prayer flags flutter in the wind. Take your time to capture photographs, soak in the panoramic views, and savor this magical Himalayan moment before heading back down to Dzongri for a hearty breakfast.<br>After breakfast, the day unfolds as a relaxed exploration of the vast Dzongri Meadows — a chance to soak in the Himalayas beyond the drama of sunrise. With the early summit glow still fresh in memory, you walk slowly across these high-altitude alpine plains, now fully revealed under the crisp winter light. Snow-covered undulations stretch in every direction, creating a sense of space and silence that feels both humbling and deeply calming.<br>As the sun climbs higher, the surrounding peaks stand tall in breathtaking clarity. Kanchenjunga’s massive south face dominates the horizon, while Pandim, the Kabru range, Rathong, and Kokthang form a sweeping arc around the meadows. In winter, the air is razor-sharp — every ridge, icefield, and contour appears etched with precision, offering some of the clearest mountain views the Eastern Himalayas can deliver.<br>The experience here is unhurried and immersive — short walks, long pauses, quiet conversations, and moments of complete stillness broken only by the crunch of snow underfoot. As the afternoon progresses, shadows lengthen across the meadows and the temperature begins to drop rapidly, a reminder of how unforgiving the mountains can be once the sun starts to fade.<br>You return to camp well before sunset, welcomed by the comfort of a warm, cozy campsite, steaming hot food, and often a crackling bonfire under a sky filling with stars. Wrapped in layers, sharing stories and silence in equal measure, the day settles into memory — not just as a trek highlight, but as one of those rare Himalayan moments that feels quietly unforgettable."
  },
    {
      day: 6,
      title: "Dzongri to Tshoka",
      details:
        "<strong>• Trek: ~8 km | 5–6 hrs.</strong><br>• Descend back through alpine slopes into forested terrain. The contrast between open snowfields and dense woods is striking. Return to Tshoka for a warmer night at lower altitude."
    },
    {
      day: 7,
      title: "Tshoka to Yuksom",
      details:
        "<strong>• Trek: ~14 km | 5–6 hrs.</strong><br>• A long descent through familiar forests and bridges brings you back to Yuksom, marking the end of a powerful winter journey."
    }
  ],

  howToReach: {
      air: "<br>• Bagdogra Airport (West Bengal) is the most practical air gateway (~150 km from Yuksom; ~6–7 hr by road).<br>• Pakyong Airport (Sikkim) is closer (~130 km away, ~5–6 hr) but has limited flights and is weather-dependent.<br><em>From both airports book a private cab to yuksom which may cost between ₹4000 - ₹8000</em>",
      train: "New Jalpaiguri (NJP) or Siliguri, the nearest railhead (~145–153 km from Yuksom; 6–7 hr by road)",
      road: "<br>• Route: Siliguri → Sevoke → Melli → Jorethang → Legship → Yuksom<br>• Shared jeeps from Siliguri's Tenzing Norgay Bus Terminus(near NJP railway station to Jorethang<br>• From Jorethang to Yuksom",
      travelTip: "Start early from Siliguri if opting for a shared vehicle as last jeep for Yuksom from Jorethang departs by 1PM - 2PM."
    },

 didYouKnow: [
  "<b>Dzongri is considered a sacred resting ground in local belief.</b><br>Locals believe the vast Dzongri meadows are watched over by mountain spirits of the Kanchenjunga range. This is why permanent structures are avoided and trekkers are expected to tread lightly and respectfully.",

  "<b>Kanchenjunga is never climbed to its true summit out of reverence.</b><br>The third-highest mountain in the world is worshipped as a living deity in Sikkim. Even the first successful expedition in 1955 stopped short of the actual summit, a tradition still respected today.",

  "<b>The Kabru–Pandim ridge tells the story of Sikkim’s guardian peaks.</b><br>From Dzongri, Kabru North & South and Pandim rise dramatically alongside Kanchenjunga. Local folklore regards these peaks as protectors of the land, forming a natural fortress around the sacred heart of Sikkim.",

  "<b>Dzongri’s winter silence is a rare Himalayan phenomenon.</b><br>Unlike popular summer treks, winter Dzongri sees very few trekkers, no grazing animals, and minimal human movement — creating an almost meditative stillness that many describe as spiritually intense.",

  "<b>The meadows were once seasonal grazing grounds.</b><br>Before conservation restrictions, local herders used Dzongri as a summer pasture for yaks. The stone shelters scattered around the region are remnants of this old high-altitude lifestyle.",

  "<b>Winter alters not just scenery, but perception.</b><br>With snow blanketing the meadows and forests, familiar landmarks disappear. Navigation relies heavily on ridgelines and peaks, making winter Dzongri a lesson in reading mountains rather than trails.",

  "<b>Traditional Sikkimese food becomes essential at altitude.</b><br>Local dishes like thukpa, phagshapa, and butter tea are not just comfort food — they are high-calorie, warming meals designed for cold, high-altitude conditions and are deeply tied to mountain survival."
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
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755534978/goechala-view3_et6beb.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1755534973/goechala-view15_wrfshw.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1766063288/khangchendzonga-peak_2_tmtjjo.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1766063292/khangchendzonga-peak_3_kh3a07.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1766063281/khangchendzonga-peak_1_imnm5j.jpg"
      
    ],

    downloadLink: "/docs/Packing_List.pdf",

  faqs: {
  questions: [
    {
      question: "How difficult is the Dzongri Winter Trek?",
      answer:
        "In winter, Dzongri becomes significantly more challenging due to snow-covered trails, sub-zero temperatures, and shorter daylight hours. While it does not involve technical climbing, it demands good fitness, stamina, and the ability to walk on snow for extended durations. Prior high-altitude trekking experience is strongly recommended."
    },
    {
      question: "Who should attempt the Dzongri Winter Trek?",
      answer:
        "This trek is ideal for trekkers who have previously completed at least one Himalayan trek above 3,500 m and are comfortable in cold conditions. It suits those seeking solitude, dramatic mountain views, and a quieter Himalayan experience rather than first-time trekkers or casual hikers."
    },
    {
      question: "How cold does it get on the trek?",
      answer:
        "Daytime temperatures generally range between 0°C and 8°C under clear skies. Nights at Dzongri can drop between -8°C and -12°C, and sometimes lower during cold spells. Wind chill at exposed viewpoints like Dzongri Top can make conditions feel much colder."
    },
    {
      question: "How should I prepare physically and mentally for a winter trek like Dzongri?",
      answer:
        "Preparation should focus on cardiovascular endurance, leg strength, and balance. Stair climbing, weighted hikes, and endurance training are effective. Mental preparedness is equally important, as cold weather, limited daylight, and snow can be psychologically demanding. Familiarity with winter layering systems is a big advantage."
    },
    {
      question: "Is altitude sickness a concern on this trek?",
      answer:
        "Yes. Dzongri sits at approximately 4,000 m (around 13,100 ft), and altitude-related issues can occur. Proper acclimatization, slow ascent, hydration, and honest communication with trek leaders are critical. Guides closely monitor oxygen levels and symptoms throughout the trek."
    },
    {
      question: "Is Dzongri safe to trek in winter?",
      answer:
        "Yes, provided the trek is conducted with an experienced operator using proper winter gear and trained staff. Routes are carefully assessed for snow conditions, weather is monitored daily, and contingency plans are in place for sudden changes."
    },
    {
      question: "Do foreign nationals need special permits for the Dzongri Trek?",
      answer:
        "Yes. Foreign nationals require a Protected Area Permit (PAP) to trek in this region, which must be arranged through a registered Indian trekking operator. Solo trekking is not permitted for foreigners, and valid passport and visa details are required in advance."
    },
    {
      question: "Is offloading or porter support available on the Dzongri Winter Trek?",
      answer:
        "Yes. Offloading via porters is available and highly recommended in winter to conserve energy and reduce fatigue. Trekkers typically carry only a daypack, while the rest of the luggage is transported separately, subject to weather and trail conditions."
    },
    {
      question: "What kind of accommodation can I expect during the trek?",
      answer:
        "Accommodation includes basic guesthouses or lodges at lower villages like Yuksom and Tshoka, and high-quality alpine tents at Dzongri. Sleeping arrangements are designed for winter conditions, with insulated sleeping bags and proper ground insulation."
    },
    {
      question: "Is there mobile network or internet connectivity on the trek?",
      answer:
        "Mobile network is limited. Basic connectivity may be available at Yuksom and occasionally at Tshoka, depending on the provider. Beyond that, including Dzongri, there is no reliable network or internet access. Trekkers should be prepared to remain completely offline."
    },
    {
      question: "What kind of food is served during the winter trek?",
      answer:
        "Meals are nutritious, warm, and designed for high-energy output in cold conditions. Expect a mix of Indian, local Sikkimese, and simple continental dishes, along with soups and hot beverages to maintain hydration and body warmth."
    },
    {
      question: "What makes Dzongri in winter different from other seasons?",
      answer:
        "Winter offers clearer skies, sharper mountain views, far fewer trekkers, and a deeply serene atmosphere. Snow transforms the landscape into a stark alpine environment, making the experience more intense, immersive, and visually dramatic compared to spring or autumn."
    }
  ]
},

  faqsLink: "/faqs-and-articles",
},


  {
  id: "sandakphu-trek",
  name: "Sandakphu Trek",
  tags: ["intermediate", "ridgewalk", "teahouse"],
  difficulty: ["moderate"],
  season: ["winter", "spring", "autumn"],
  month: ["october", "november", "december", "january", "february", "march", "april", "may"],
  region: ["west bengal", "nepal",],
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

  heroImage:  "https://res.cloudinary.com/dr44hob9b/image/upload/v1766063333/sleeping-buddha-sandakpu1_khv34b.jpg",

  heroImages: [ 
                "https://res.cloudinary.com/dr44hob9b/image/upload/v1766063333/sleeping-buddha-sandakpu1_khv34b.jpg",
                "https://res.cloudinary.com/dr44hob9b/image/upload/v1766063322/sleeping-buddha-sandkphu_vqzei7.jpg",
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
      { emoji: "🧥", label: "Cloakroom facility", value: "Not available" },
    ],
    snippet: `The Sandakphu–Phalut Trek is a journey along one of the most iconic ridgelines in the Himalayas — a trail that rises and falls along the Indo–Nepal border, revealing the world’s greatest mountains in one sweeping frame. From the very first day, the landscape feels different: moss-covered oak forests humming with birdlife, mist drifting through ancient rhododendron trees, and long undulating paths that open suddenly into wide, wind-carved meadows.

<br>As you climb higher into the Singalila Ridge, the horizon sharpens into a jaw-dropping panorama — Everest, Lhotse, Makalu, and Kanchenjunga standing together like a silent wall of giants. At dawn, these peaks ignite in soft pink light, while at dusk the entire ridge glows in deep gold and crimson. The Sleeping Buddha — the legendary silhouette formed by Kanchenjunga and its neighbouring peaks — appears so close at sunrise that it feels alive, breathing with the rhythm of the mountains.

<br>The route winds through the heart of Singalila National Park, a sanctuary of rare Himalayan biodiversity. Here, dense forests hide red pandas, black bears, yellow-throated martens, and an astonishing variety of high-altitude birds. Spring transforms the trail into a natural festival of blooming rhododendrons and magnolias, while autumn offers crystal-clear skies and crisp mountain winds.

<br>Trekkers walk through charming border villages like Tumling, Kalipokhri, and Gorkhey — quiet settlements where prayer flags flutter from rooftops, children play outside stone houses, and warm homestays serve Himalayan meals cooked with local ingredients. The blend of Nepali and Indian cultures along this route is unlike anywhere else in the Himalayas: a fusion of languages, traditions, and hospitality that enriches every step of the journey.

<br>From cloud-draped forests to ridges that soar above the world, Sandakphu and Phalut offer an experience that balances adventure with soulful beauty — a trek where the mountains feel close, the culture feels alive, and every viewpoint leaves you humbled by the scale of the Eastern Himalayas. Perfect for fit beginners and seasoned trekkers alike, this is a route that stays with you long after the trail ends.`
  },

  price: 14900,
  priceNote: "* Manebhanjan to Srikhola",
  addons: {
    transport: 4000,
    offloadingbag: 3000,
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
    "https://res.cloudinary.com/dr44hob9b/image/upload/v1766063333/sleeping-buddha-sandakpu1_khv34b.jpg",
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

  downloadLink: "/docs/Packing_List.pdf",

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
    id: "everest-base-camp-trek",
    name: "Everest Base Camp Trek",
    tags: ["intermediate", "pro", "basecamp", "teahouse"],
    difficulty: ["moderate", "difficult"],
    season: ["spring", "autumn"],
    month: ["march", "april", "may", "september", "october", "november"],
    region: "nepal",
    duration: "12 Nights / 13 Days",
    coordinates: [
      [27.7172, 85.3240],   // Kathmandu
      [27.6889, 86.7314],   // Lukla
      [28.0043, 86.8571]    // Everest Base Camp
    ],

    heroImage: "https://res.cloudinary.com/dr44hob9b/image/upload/v1766068757/everest_wdjvrw.jpg",

    heroImages: [
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1766068757/everest_wdjvrw.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1766151466/everest-base-camp_luvggw.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1766151691/namche-bazaar_jfykze.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1766151679/ama-dablam_xlytff.jpg",
    ],

    subtitle: "Walking the Khumbu Trail to the Foot of the World’s Highest Peak",

    seo: {
      title: "Everest Base Camp Trek | Khumbu Valley, Itinerary, Cost & Dates | Planethimalayas",
      description: "The Everest Base Camp Trek (17,598 ft) is the ultimate Himalayan adventure, taking trekkers through the Khumbu Valley, Sherpa villages, ancient monasteries, and glaciers to the legendary base of Mount Everest."
    },

    overview: {
      facts: [
        { emoji: "⏳", label: "Trek Duration", value: "12 Nights / 13 Days" },
        { emoji: "⚡", label: "Trek Grade", value: "Moderate / Difficult" },
        { emoji: "🏔️", label: "Max Altitude", value: "18,519 ft (Kala Patthar)" },
        { emoji: "⚡", label: "Trek Distance", value: "130 Km (round trip)" },
        { emoji: "🌤️", label: "Best Time", value: "March–May & September–November" },
        { emoji: "🗺️", label: "Region", value: "Khumbu Valley, Nepal Himalayas" },
        { emoji: "📍", label: "Start Point", value: "Lukla" },
        { emoji: "🏁", label: "End Point", value: "Everest Base Camp" },
        { emoji: "🧥", label: "Cloakroom facility", value: "Not Available" },
      ],

      snippet: `The Everest Base Camp Trek is not merely a route in the Himalayas — it is the most storied walking trail on Earth. For decades, this path through Nepal’s Khumbu Valley has drawn explorers, mountaineers, and dreamers who want to stand in the shadow of the world’s highest mountain. Every step on this trail carries history: from early Sherpa traders and Tibetan pilgrims to legendary climbers preparing for summit attempts on Everest.

<br>The journey begins with a dramatic flight into Lukla, often described as one of the most thrilling airports in the world. From here, the trail follows ancient trade routes carved into the Khumbu landscape, crossing glacial rivers on high suspension bridges adorned with fluttering prayer flags. Each crossing feels symbolic — a quiet reminder that you are stepping deeper into the high Himalayas.

<br>The trek winds through iconic Sherpa villages such as Phakding, Namche Bazaar, Tengboche, Dingboche, Lobuche, and Gorakshep — each with its own character and significance. Namche Bazaar, the heart of the Khumbu, is a bustling mountain town where trekkers acclimatize, exchange stories, and witness the first jaw-dropping views of Everest, Lhotse, and Ama Dablam. Tengboche Monastery, perched on a ridge beneath Ama Dablam, is the spiritual soul of the trail, where chants echo against snow-clad peaks and prayer flags ripple in the wind.

<br>One of the most remarkable aspects of the EBC trek is its homestay and teahouse culture. Nights are spent in warm, family-run lodges where Sherpa hospitality shines through shared meals, laughter, and stories by the stove. These teahouses are more than accommodation — they are windows into a resilient mountain culture shaped by altitude, tradition, and deep reverence for the mountains.

<br>As altitude increases, the terrain transforms dramatically. Pine and rhododendron forests give way to alpine scrub, yak pastures, and eventually stark glacial landscapes. The region lies within Sagarmatha National Park, a UNESCO World Heritage Site, home to Himalayan tahrs, musk deer, snow leopards (rarely seen), and vibrant high-altitude birdlife. In spring, the lower valleys burst into color with blooming rhododendrons, while autumn brings crystal-clear skies and razor-sharp mountain views.

<br>Throughout the trek, the mountains never leave your sight. Ama Dablam reveals itself in stunning profile from Tengboche and Pangboche, considered by many to be the most beautiful peak in the Himalayas. Nuptse and Lhotse loom massive as you approach Everest, while peaks like Thamserku, Kangtega, Pumori, and Lobuche East frame the valley in every direction. The sense of scale is overwhelming — photographs rarely capture how immense and alive these mountains feel.

<br>Reaching Everest Base Camp itself is an experience layered with emotion. Unlike a traditional summit viewpoint, EBC is a raw, chaotic, and powerful place — a shifting landscape of ice, rock, and color where climbers prepare for one of the most dangerous ascents on Earth. The Khumbu Icefall creaks and groans nearby, prayer flags mark expedition sites, and the realization sets in that you are standing at the very threshold of Mount Everest’s south face. It feels humbling, surreal, and deeply personal.

<br>The journey culminates with the ascent of Kala Patthar, the highest point of the trek and the ultimate viewpoint of Everest. From its rocky summit, trekkers witness Everest up close in all its dominance, especially at sunrise when golden light washes over Everest, Nuptse, and Pumori. This is the moment when exhaustion fades, silence takes over, and the enormity of what you’ve walked through truly sinks in.

<br>The Everest Base Camp Trek is not just about reaching a destination. It is about walking through living history, sharing space with a timeless culture, and confronting both the beauty and harshness of the highest mountains on Earth. It is a journey that changes how you see mountains — and often, how you see yourself.`
    },

    price: 84900,
    priceNote: "* Kathmandu to Kathmandu",
    addons: {
      offloadingbag: 12000,
      offloadingNote: "* Maximum weight 10kg/bag"
    },

    inclusionsNote: `🍽️ All Meals – Meals provided during the trek from Lukla onward.
                    <br><br>🚐 Airport pickup and drop off services.
                    <br><br>✈️ Kathmandu-Lukla-Kathmandu flight`,
    exclusionsNote: `🍽️ Meals during stay at Kathmandu.
                      <br><br>🚿 Drinks, beverages, hot shower, etc during your stay at homestays on trek`,

    highlights: [
      "Walk the legendary Khumbu trail to the base of Mount Everest, the highest peak on Earth",
      "Experience Sherpa culture in iconic villages like Namche Bazaar and Dingboche",
      "Visit Tengboche Monastery with panoramic views of Everest, Ama Dablam, and Lhotse",
      "Stand at Everest Base Camp amidst glaciers, icefalls, and expedition tents",
      "Climb Kala Patthar for the most dramatic sunrise view of Mount Everest",
    ],

    itinerary: [
      {
  day: 1,
  title: "Arrival in Kathmandu (4,600 ft / 1,400 m)",
  details:
    "Upon arrival at Tribhuvan International Airport, the Planethimalayas team will receive you and assist with your transfer to the hotel. After check-in, take time to rest or enjoy a relaxed walk through the lively streets of Thamel, Kathmandu’s trekking hub. In the evening, join a welcome briefing and dinner where you’ll be introduced to the journey ahead, safety protocols, gear essentials, and the rich flavors of traditional Nepali cuisine."
},
      {
  day: 2,
  title: "Kathmandu → Lukla Flight (9,383 ft) – Trek to Phakding (8,563 ft)",
  details:
    "You begin the day with an early morning transfer to the airport, accompanied by your trek leader, for the iconic flight from Kathmandu to Lukla. These flights are intentionally scheduled in the morning hours, when weather conditions are most stable, as winds often pick up later in the day. On clear days, the short flight offers spectacular aerial views of the Himalayas, setting the tone for the journey ahead.<br><br>After landing at Lukla’s dramatic mountain airstrip, you meet your support team and complete final preparations before starting the trek. The trail descends gently toward the Dudh Koshi River, easing your body into walking at altitude. You pass through charming Sherpa villages such as Chheplung, Ghat, and the small hamlets of Sano and Thulo Gumela, where mani stones, prayer wheels, and traditional houses line the path. Along the way, you encounter historic monasteries including Drangdrak Gompa and Pema Choling Gompa, adding a strong spiritual presence to the walk.<br><br>Throughout the day, the soothing sound of the Dudh Koshi flows beside you, while views of sacred Mount Khumbila and the striking twin peaks of Kusum Kanguru dominate the skyline. Sharing the trail with fellow trekkers, porters, and mule caravans, you gradually make your way to Phakding, where you settle in for the night—marking a gentle and rewarding first day on the Everest trail."
},
      {
  day: 3,
  title: "Phakding → Namche Bazaar (11,286 ft / 3,440 m)",
  details:
    "Today’s trek follows the Dudh Koshi River through a series of charming Sherpa villages including Benkar, Chumoa, Monjo, and Jorsale. The trail alternates between gentle forest walks and river crossings over iconic suspension bridges draped with prayer flags. At Monjo, enter the boundaries of Sagarmatha National Park, where permits are checked and the landscape begins to feel distinctly alpine. Beyond the park gate, cross the confluence of the Dudh Koshi and Bhote Koshi rivers before beginning the final, sustained ascent toward Namche Bazaar. This uphill stretch is demanding but deeply rewarding—on a clear day, the first glimpse of Mt. Everest appears high above the Lhotse–Nuptse ridge, marking a powerful milestone on the journey. Continue climbing steadily for another hour or so to reach Namche Bazaar, the vibrant heart of the Khumbu region, nestled in a natural amphitheater of towering peaks."
},
     {
  day: 4,
  title: "Acclimatization Day at Namche Bazaar (11,286 ft / 3,440 m)",
  details:
    "This crucial acclimatization day is designed around the principle of ‘climb high, sleep low’ to help your body adapt safely to the increasing altitude. After breakfast, set out on a day hike to nearby Sherpa villages such as Khunde, Khumjung, or Thame, following scenic trails that gradually gain elevation without overexertion. These walks offer sweeping views of Ama Dablam and surrounding peaks while providing valuable acclimatization. Along the way, visit traditional monasteries, old stone houses, and local schools to gain insight into Sherpa life and mountain culture. Back in Namche, spend time exploring the bustling bazaar—home to bakeries, cafés, gear shops, and museums that document the history of Everest expeditions, the region’s biodiversity, and the lives of early mountaineers. Keep the day active yet relaxed, hydrate well, and return to your lodge early to rest, ensuring your body is well prepared for the higher altitudes ahead."
},
      {
  day: 5,
  title: "Namche Bazaar to Tengboche (12,687 ft)",
  details: "The journey from Namche to Tengboche unfolds along what is widely regarded as one of the most scenic stretches of the entire Everest Base Camp trek. The trail contours high above the Dudh Koshi River, offering breathtaking views as it gradually descends toward Phungithanga. This pleasant walk soon transitions into a challenging uphill climb after the river crossing, testing endurance while rewarding trekkers with ever-expanding mountain vistas. Crossing the Imja Khola, a tributary of the Dudh Koshi, the trail winds through dense rhododendron forests before finally reaching Tengboche. The village is home to the revered Tengboche Monastery, a spiritual landmark of the Khumbu region. Set against a dramatic alpine backdrop, the monastery offers close-up views of Ama Dablam and sweeping panoramas of Everest, Lhotse, and Nuptse. Spend time exploring its intricate murals, statues, and prayer halls before settling in for the night amidst the serene Himalayan atmosphere."
}
,
      {
  day: 6,
  title: "Tengboche to Dingboche (14,469 ft)",
  details: "After an early breakfast at Tengboche, the trail follows the Imja Khola, gradually climbing toward the small settlement of Shemar. As the route gains altitude, the landscape shifts noticeably—dense forests thin out beyond the tree line, giving way to dry, cold-desert terrain marked by sparse conifers, hardy shrubs, and scattered high-altitude fields. Continuing along the lower trail near the Imja Khola, the path leads through Orsho before approaching Dingboche. The final stretch is adorned with chortens, mani walls, and fluttering prayer flags, signaling entry into the upper Khumbu. A gentle climb over a low ridge brings you into the wide, open valley of Dingboche, a stark yet beautiful village known for its strong winds and cold temperatures, where nights can drop to freezing even during summer."
},
      {
  day: 7,
  title: "Acclimatization Day at Dingboche (16,900 ft / 5,100 m)",
  details: "This second acclimatization day is spent allowing the body to adjust to the rising altitude through gentle yet purposeful activity. The surroundings of Dingboche offer several ideal viewpoints for acclimatization hikes, the most rewarding being the gradual ascent of Nagarjun Hill. Climbing steadily to around 5,100 meters, the hike unveils sweeping views of towering Himalayan giants including Ama Dablam, Lhotse, Nuptse, Lobuche, Cholatse, and Kangtega. For those feeling energetic, the rest of the day can be spent strolling through the village, observing high-altitude life and soaking in the stark beauty of the upper Khumbu before returning to rest and recover."
},
      {
  day: 8,
  title: "Dingboche to Lobuche (16,210 ft / 4,940 m)",
  details: "Leaving Dingboche behind, the trail steadily grows more demanding as it climbs alongside the rugged slopes of the Khumbu Glacier. The most challenging section of the day is the narrow, steep ascent to Thukla Pass, where rows of stone memorials stand in quiet tribute to climbers who lost their lives in the high Himalayas. Beyond the pass, the route eases slightly, weaving through stark valleys and rocky terrain before reaching the small settlement of Lobuche. Nestled between the Khumbu Glacier and Lobuche Peak, this high-altitude village consists mainly of teahouses, surrounded by dramatic mountain walls. From here, towering faces of Taboche and Nuptse loom above, creating an unforgettable alpine setting. The day ends with an early rest, as tomorrow marks the long-awaited journey to Everest Base Camp."
},
      {
  day: 9,
  title: "Lobuche to Everest Base Camp (17,598 ft) to Gorak Shep (16,988 ft) – ",
  details: "After breakfast, the journey leads deeper into the high Himalayan wilderness as you trek towards Gorak Shep, the last outpost of the Everest region. The trail is demanding and winds across rough glacial terrain, gradually revealing your first clear views of Kala Patthar rising ahead. Upon reaching Gorak Shep, take a short rest, leave behind unnecessary luggage, and prepare for the most awaited walk of the expedition. The route to Everest Base Camp follows the edge of the mighty Khumbu Glacier, crossing small glacial streams and uneven moraine. The landscape feels otherworldly, with vast stretches of ice, grey rock, and sculpted formations shaped by centuries of movement. After a couple of hours, you finally arrive at Everest Base Camp—a powerful and emotional milestone. Surrounded by Nuptse, Pumori, Khumbutse, the Khumbu Icefall, and the glacier itself, the moment is one of pride and awe. After spending time soaking in the atmosphere and capturing memories, retrace your steps back to Gorak Shep for an overnight stay."
},
      {
  day: 10,
  title: "Kala Patthar Sunrise (18,192 ft) – Descend to Pheriche (14,340 ft)",
  details: "The day begins well before dawn as you set out for the iconic climb to Kala Patthar, the highest point of the trek. Though the ascent is short, the rugged terrain and thin air make it demanding. Reaching the summit at first light is an unforgettable reward—golden sunlight slowly illuminates the Himalayas, revealing sweeping views of Mount Everest, Nuptse, Lhotse, Ama Dablam, Pumori, Thamserku, and countless other towering peaks. After spending time soaking in the sunrise and capturing memories, descend carefully back to Gorak Shep for breakfast. The journey then continues downhill via Lobuche and Dughla, where the trail branches away from the main route and follows the Khumbu Khola towards Pheriche. Surrounded by wide alpine valleys and stark mountain scenery, you arrive at Pheriche by evening and settle into a teahouse for a well-earned rest."
},
      {
  day: 11,
  title: "Pheriche to Namche Bazaar (11,286 ft)",
  details: "After completing the high-point adventures of the trek, the journey turns back toward the heart of the Khumbu. The trail is long yet rewarding, with ever-changing mountain views accompanying you throughout the day. Walking through alpine forests of pine and rhododendron, the route passes the settlements of Orsho, Somare, Pangboche, and Tengboche. With a bit of luck, you may spot wildlife such as musk deer, mountain goats, or wild birds hidden in the dense greenery. Gradual descents and familiar paths eventually lead back to the lively Sherpa town of Namche Bazaar. On arrival, enjoy a hot shower and unwind—perhaps at a cozy café with fresh bakes or a warm drink—to celebrate how far you’ve come."
},
      {
  day: 12,
  title: "Namche Bazaar to Lukla (9,383 ft)",
  details: "The final day on the trail follows a steady downhill route toward Lukla, marking the end of the walking journey. The path winds past mani walls, chortens, and small Buddhist shrines, retracing familiar villages such as Jorsale, Monjo, and Phakding. Forested stretches and open views of surrounding peaks keep the walk engaging, offering last glimpses of the mighty Himalayas that have defined the trek. Reaching Lukla feels both rewarding and emotional—the journey comes full circle here. In the evening, celebrate the successful completion of the Everest Base Camp trek with your crew and teammates. Share stories, music, and laughter with guides and porters, raising a toast in gratitude to everyone who made this unforgettable adventure possible."
},
      {
  day: 13,
  title: "Fly Lukla to Kathmandu",
  details: "An early morning flight takes the team from Lukla back to Kathmandu, offering one last aerial view of the rugged Himalayan terrain. On arrival, transfer to the hotel and enjoy a well-earned day at leisure. You may choose to rest after the long journey, explore the city, or shop for souvenirs and gifts in local markets. In the evening, gather to celebrate the successful completion of the trek, reflecting on the challenges overcome, friendships formed, and memories created in the heart of the Himalayas."
}
    ],

    didYouKnow: [
      "<b>Everest is called Sagarmatha in Nepal.</b><br>The name means ‘Forehead of the Sky’.",
      "<b>The Khumbu Icefall is one of the most dangerous sections for climbers.</b><br>It constantly shifts due to moving glaciers.",
      "<b>Sherpas are renowned high-altitude experts.</b><br>Their physiology allows better adaptation to thin air.",
      "<b>Namche Bazaar is the commercial heart of the Khumbu.</b><br>It serves as a vital trading hub for remote villages."
    ],

    howToReach: {
      air: "International Airport: Tribhuvan International Airport, Kathmandu.",
      train: "No train connectivity. Nepal relies on air and road transport.",
      road: "Kathmandu is accessible by road from India via Sunauli and Raxaul borders.",
      travelTip: "Arrive at least one day early to buffer against Lukla flight delays.",
    },

    gallery: [
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1766151702/kathmandu_k5anvo.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1766151169/lukla-airport_son2v4.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1766068757/everest_wdjvrw.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1766151466/everest-base-camp_luvggw.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1766151691/namche-bazaar_jfykze.jpg",
      "https://res.cloudinary.com/dr44hob9b/image/upload/v1766151679/ama-dablam_xlytff.jpg",
    ],

    downloadLink: "/docs/Packing_List.pdf",

    faqs: {
      questions: [
  {
    question: "Is prior trekking experience required?",
    answer:
      "Yes. While Everest Base Camp does not involve technical climbing, prior high-altitude trekking experience is strongly recommended. The long walking days, altitude above 5,000 m, and cold conditions require good endurance and mental resilience."
  },
  {
    question: "How should I prepare physically for the Everest Base Camp Trek?",
    answer:
      "Preparation should begin at least 8–10 weeks in advance. Focus on cardiovascular endurance (running, cycling, swimming), leg strength (squats, lunges, stair climbing), and core stability. Weekend long walks with a loaded backpack are highly recommended."
  },
  {
    question: "Do I need permits for this trek?",
    answer:
      "Yes. Two permits are mandatory: the Sagarmatha National Park Permit and the Khumbu Pasang Lhamu Rural Municipality Permit. These are usually arranged by the trek operator in Kathmandu."
  },
  {
    question: "Is travel insurance mandatory for Everest Base Camp?",
    answer:
      "Yes. Comprehensive travel insurance covering high-altitude trekking up to at least 6,000 meters and emergency helicopter evacuation is mandatory. Without valid insurance, participation in the trek is not allowed."
  },
  {
    question: "How cold does it get on the trek?",
    answer:
      "Day temperatures typically range between 5–15°C, depending on altitude and season. Night temperatures can drop to -10°C or lower at places like Lobuche and Gorak Shep, especially in October and early spring."
  },
  {
    question: "Is altitude sickness common on this trek?",
    answer:
      "Altitude sickness can occur due to rapid altitude gain. The itinerary includes acclimatization days at Namche Bazaar and Dingboche to minimize risk. Trek leaders closely monitor symptoms, and gradual ascent is key to safety."
  },
  {
    question: "What kind of accommodation is available during the trek?",
    answer:
      "Accommodation is in teahouses (lodges) run by local families. Rooms are basic, usually twin-sharing, with blankets provided. Heating is available only in common dining areas, not in bedrooms."
  },
  {
    question: "What kind of food is available on the Everest Base Camp Trek?",
    answer:
      "Teahouses serve a variety of meals including dal bhat, noodles, rice, pasta, soups, eggs, pancakes, and Tibetan bread. As altitude increases, food options become limited and prices rise."
  },
  {
    question: "Is drinking water available on the trail?",
    answer:
      "Water is available at teahouses and streams, but must always be purified using tablets, filters, or UV devices. Bottled water is discouraged due to environmental concerns and high cost."
  },
  {
    question: "Are toilets available during the trek?",
    answer:
      "Teahouses have basic shared toilets, usually squat-style. Toilet facilities become more primitive at higher altitudes, and hygiene standards vary. Carrying personal toilet paper and sanitizer is essential."
  },
  {
    question: "Is mobile network or internet available?",
    answer:
      "Mobile network is available in some villages like Namche Bazaar and Dingboche, but connectivity is unreliable. Wi-Fi is offered at many teahouses for a fee, but speeds are slow and weather-dependent."
  },
  {
    question: "Can I charge my electronic devices on the trek?",
    answer:
      "Yes, charging facilities are available at teahouses for an additional cost. Power supply is usually solar-based at higher altitudes, so carrying a power bank is highly recommended."
  },
  {
    question: "Do I need to carry cash on the trek?",
    answer:
      "Yes. There are no ATMs beyond Namche Bazaar. Carry sufficient Nepali cash to cover personal expenses like snacks, charging, Wi-Fi, hot showers, and tips."
  },
  {
    question: "Is it necessary to hire a guide or porter?",
    answer:
      "Hiring a licensed guide is mandatory for most trekkers as per Nepal regulations. Porters are optional but highly recommended to reduce physical strain and improve safety at high altitude."
  },
  {
    question: "What is the best time to do the Everest Base Camp Trek?",
    answer:
      "The best seasons are spring (March to May) and autumn (September to November). These months offer stable weather, clear mountain views, and safer trail conditions."
  },
  {
    question: "What happens in case of an emergency?",
    answer:
      "In case of severe altitude sickness or injury, evacuation by helicopter is the primary rescue option. This is why valid insurance with helicopter coverage is mandatory for the trek."
  }
]
    },

    faqsLink: "/faqs-and-articles",
  },

// Add other trek objects here...
];
