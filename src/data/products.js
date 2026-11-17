import imgShatavariKalpa from '../assets/products/shatavari-kalpa.png';
import imgShatavariJuice from '../assets/products/shatavari-juice.png';
import imgTriphalaJuice from '../assets/products/triphala-juice.png';
import imgAmlaNectar from '../assets/products/amla-nectar.png';
import imgKumkumadiOil from '../assets/products/kumkumadi-oil.png';
import imgBhringrajOil from '../assets/products/bhringraj-oil.png';
import imgAshwagandhaChurna from '../assets/products/ashwagandha-churna.png';
import imgNeemTulsiCleanser from '../assets/products/neem-tulsi-cleanser.png';
import imgSaffronMoisturizer from '../assets/products/saffron-moisturizer.png';
import imgAloeShatavariGel from '../assets/products/aloe-shatavari-gel.png';
import imgBrahmiTablets from '../assets/products/brahmi-tablets.png';
import imgShilajitResin from '../assets/products/shilajit-resin.png';
import imgGiloyJuice from '../assets/products/giloy-juice.png';
import imgOnionShampoo from '../assets/products/onion-shampoo.png';
import imgHormoneBalance from '../assets/products/hormone-balance.png';
import imgTurmericLatte from '../assets/products/turmeric-latte.png';

export const products = [
  {
    id: 'shatavari-kalpa-granules',
    name: 'Shatavari Kalpa Granules',
    subtitle: 'Nourishing Herbal Granules with Pure Cow Ghee & Elaichi',
    category: 'Ayurvedic Wellness',
    categoryId: 'ayurvedic-wellness',
    image: imgShatavariKalpa,
    price: 449,
    originalPrice: 599,
    discount: 25,
    rating: 4.9,
    reviewCount: 428,
    isBestSeller: true,
    isFeatured: true,
    isNew: false,
    volumeOrWeight: '250g',
    sizes: ['250g', '500g'],
    shortDescription: 'Traditional Ayurvedic Rasayana granules crafted with pure Shatavari root, cow ghee, and fragrant green cardamom.',
    fullDescription: 'Shatavari Kalpa is a revered Rasayana formulation in classical Ayurveda. Cooked carefully with potent Shatavari root (Asparagus racemosus) extract, pure A2 cow ghee, and natural rock sugar, it provides restorative nourishment for women and men of all ages. Known to rejuvenate tissues, promote vitality, and soothe internal heat.',
    ingredients: [
      'Certified Organic Shatavari Root (Asparagus racemosus)',
      'Pure Desi Cow Ghee (Ghrita)',
      'Fragrant Green Cardamom (Elaichi)',
      'Natural Unrefined Sugar (Sharkara)'
    ],
    benefits: [
      'Nourishes reproductive tissues & hormonal balance',
      'Boosts everyday energy, stamina, and physical endurance',
      'Soothes Pitta dosha and cools digestive tract',
      'Pleasant naturally aromatic taste easy to mix with warm milk'
    ],
    howToUse: 'Take 1 to 2 teaspoons (approx. 5-10g) twice daily with a cup of warm milk or warm water after meals, or as advised by an Ayurvedic practitioner.',
    certifications: ['GMP Certified', '100% Herbal', 'Free from Heavy Metals', 'No Artificial Flavors'],
    inStock: true
  },
  {
    id: 'pure-shatavari-juice',
    name: 'Pure Shatavari Juice',
    subtitle: 'Cold-Pressed Wild-Harvested Herbal Vitality Extract',
    category: 'Herbal Juices',
    categoryId: 'herbal-juices',
    image: imgShatavariJuice,
    price: 399,
    originalPrice: 499,
    discount: 20,
    rating: 4.8,
    reviewCount: 312,
    isBestSeller: true,
    isFeatured: true,
    isNew: false,
    volumeOrWeight: '500ml',
    sizes: ['500ml', '1000ml'],
    shortDescription: 'Pure, whole-plant Shatavari juice cold-pressed to preserve active saponins for daily vitality and hormonal balance.',
    fullDescription: 'Our Pure Shatavari Juice is prepared from wild-harvested Shatavari tubers using gentle cold-press extraction. Free from added synthetic colors or artificial sugar, this potent herbal tonic delivers pure botanical nourishment that supports inner resilience, hormonal rhythm, and reproductive wellness.',
    ingredients: [
      'Pure Shatavari Root Extract (Asparagus racemosus) - 99.6%',
      'Citric Acid (pH stabilizer derived from lemons)',
      'Permitted Class II preservative (less than 0.2%)'
    ],
    benefits: [
      'Supports female hormonal health and regular cycles',
      'Restores moisture and natural elasticity throughout the body',
      'Enhances natural immunity and vitality',
      'Zero added sugar, zero synthetic food colors'
    ],
    howToUse: 'Shake well before use. Mix 20-30ml of Shatavari Juice in a glass of lukewarm water. Consume early in the morning on an empty stomach.',
    certifications: ['Cold Pressed', 'Non-GMO', 'Ayush Approved', 'Cruelty Free'],
    inStock: true
  },
  {
    id: 'triphala-detox-juice',
    name: 'Triphala Detox & Digestion Juice',
    subtitle: 'Classic Three-Fruit Vedic Elixir for Complete Gut Cleansing',
    category: 'Herbal Juices',
    categoryId: 'herbal-juices',
    image: imgTriphalaJuice,
    price: 349,
    originalPrice: 449,
    discount: 22,
    rating: 4.9,
    reviewCount: 520,
    isBestSeller: true,
    isFeatured: false,
    isNew: false,
    volumeOrWeight: '500ml',
    sizes: ['500ml', '1000ml'],
    shortDescription: 'Balanced blend of Amla, Haritaki, and Bibhitaki that cleanses toxins and regulates natural bowel movements.',
    fullDescription: 'Triphala is one of Ayurveda’s most celebrated classical formulas. By harmonizing all three Doshas (Vata, Pitta, Kapha), this juice flushes accumulated Ama (metabolic toxins) from the intestinal tract, enhances nutrient absorption, and relieves occasional sluggishness gently without causing dependency.',
    ingredients: [
      'Organic Amla (Emblica officinalis) - 33.3%',
      'Organic Haritaki (Terminalia chebula) - 33.3%',
      'Organic Bibhitaki (Terminalia bellirica) - 33.3%'
    ],
    benefits: [
      'Stimulates healthy digestive fire (Agni)',
      'Promotes gentle daily detoxification & regularity',
      'Rich in natural Vitamin C and antioxidant polyphenols',
      'Supports healthy metabolism and weight management'
    ],
    howToUse: 'Dilute 30ml in a glass of warm water. Drink at night 30 minutes before bed or early in the morning.',
    certifications: ['100% Organic Herbs', 'No Added Sugar', 'GMP Certified'],
    inStock: true
  },
  {
    id: 'wild-amla-juice',
    name: 'Wild Amla Vitality Juice',
    subtitle: 'Cold-Pressed Wild Indian Gooseberry Rich in Natural Vitamin C',
    category: 'Herbal Juices',
    categoryId: 'herbal-juices',
    image: imgAmlaNectar,
    price: 299,
    originalPrice: 380,
    discount: 21,
    rating: 4.8,
    reviewCount: 285,
    isBestSeller: false,
    isFeatured: true,
    isNew: false,
    volumeOrWeight: '500ml',
    sizes: ['500ml', '1000ml'],
    shortDescription: 'Fresh cold-pressed juice of wild Himalayan Amla fruit for glowing skin, strong hair roots, and robust immunity.',
    fullDescription: 'Shatavari Ayurvedic Wild Amla Juice is extracted from indigenous small-variety Amla berries gathered from deep forests. Known as the foremost longevity fruit in Ayurveda, it possesses 20 times the Vitamin C concentration of orange juice, preserving natural bioflavonoids that protect cells against oxidative damage.',
    ingredients: [
      'Pure Wild Amla Fruit (Phyllanthus emblica) Juice - 99.8%',
      'Lemon juice extract for freshness'
    ],
    benefits: [
      'Strengthens respiratory and immune defense system',
      'Nourishes hair follicles from within, combating premature greying',
      'Supports collagen synthesis for radiant clear skin',
      'Aids healthy iron absorption and liver function'
    ],
    howToUse: 'Mix 20-30ml in a cup of water with a drizzle of honey if desired. Drink daily upon waking.',
    certifications: ['Cold Pressed', 'No Added Water', '100% Pure Fruit Juice'],
    inStock: true
  },
  {
    id: 'kumkumadi-miraculous-oil',
    name: 'Kumkumadi Miraculous Beauty Oil',
    subtitle: 'Authentic 26-Herb Vedic Facial Elixir with Kashmiri Saffron',
    category: 'Natural Skincare',
    categoryId: 'natural-skincare',
    image: imgKumkumadiOil,
    price: 899,
    originalPrice: 1199,
    discount: 25,
    rating: 5.0,
    reviewCount: 640,
    isBestSeller: true,
    isFeatured: true,
    isNew: false,
    volumeOrWeight: '30ml',
    sizes: ['15ml', '30ml'],
    shortDescription: 'Regal Ayurvedic facial oil formulated with real Kashmiri Saffron, Sandalwood, and Lotus to illuminate dull skin.',
    fullDescription: 'Prepared using traditional Taila Paka Vidhi over slow fire for 72 hours, our Kumkumadi Tailam is a golden nectar for the complexion. Pure red saffron stigmas brighten pigmentation, sandalwood calms redness, and licorice evening skin tone, leaving your skin soft, supple, and luminescent.',
    ingredients: [
      'Pure Kashmiri Saffron (Crocus sativus)',
      'Red Sandalwood (Pterocarpus santalinus)',
      'Indian Madder (Manjistha)',
      'Sacred Lotus Pollen (Nelumbo nucifera)',
      'Licorice Root (Yashtimadhu)',
      'Pure Sesame Oil Base (Sesamum indicum)'
    ],
    benefits: [
      'Visibly reduces dark spots, hyperpigmentation, and blemishes',
      'Restores youthful golden radiance and deep hydration',
      'Non-greasy, absorbs deeply to nourish dermal layers',
      'Time-tested classical Ayurvedic recipe'
    ],
    howToUse: 'Cleanse face and apply 3 to 4 drops directly onto damp skin. Gently massage in upward circular motions until fully absorbed. Best used overnight.',
    certifications: ['Cruelty-Free', '100% Plant & Herbal', 'Paraben-Free', 'Dermatologist Tested'],
    inStock: true
  },
  {
    id: 'bhringraj-brahmi-hair-oil',
    name: 'Bhringraj & Brahmi Hair Oil',
    subtitle: 'Intensive Scalp Therapy with 18 Cold-Pressed Ayurvedic Herbs',
    category: 'Hair Care',
    categoryId: 'hair-care',
    image: imgBhringrajOil,
    price: 499,
    originalPrice: 650,
    discount: 23,
    rating: 4.8,
    reviewCount: 380,
    isBestSeller: true,
    isFeatured: false,
    isNew: false,
    volumeOrWeight: '200ml',
    sizes: ['100ml', '200ml'],
    shortDescription: 'Intensive herbal oil formulated with King of Herbs Bhringraj to reduce hair fall and encourage thicker hair growth.',
    fullDescription: 'Crafted with authentic Kshirpak Vidhi, this intensive hair therapy combines fresh Bhringraj juice, memory herb Brahmi, Amla, and Fenugreek simmered gently in pure sesame and virgin coconut oils. It deeply penetrates hair follicles, calms excess scalp heat, and strengthens weakened strands from the roots.',
    ingredients: [
      'Fresh Bhringraj Extract (Eclipta alba)',
      'Brahmi (Bacopa monnieri)',
      'Amla (Phyllanthus emblica)',
      'Methi / Fenugreek (Trigonella foenum-graecum)',
      'Virgin Coconut Oil & Pure Cold Pressed Sesame Oil'
    ],
    benefits: [
      'Significantly curtails hair fall within 4-6 weeks of regular use',
      'Stimulates dormant hair follicles for visible volume',
      'Soothes itchy dry scalp and controls dandruff flakes',
      'Imparts a deep calming cooling effect before restful sleep'
    ],
    howToUse: 'Gently warm a small amount of oil. Part hair and massage thoroughly into the scalp for 10-15 minutes. Leave on for at least 2 hours or overnight before washing.',
    certifications: ['No Mineral Oil', 'No Synthetic Fragrance', 'GMP Certified'],
    inStock: true
  },
  {
    id: 'ashwagandha-root-churna',
    name: 'Ashwagandha Root Churna',
    subtitle: '100% Pure Organic Root Powder for Stress Relief & Stamina',
    category: 'Herbal Supplements',
    categoryId: 'herbal-supplements',
    image: imgAshwagandhaChurna,
    price: 320,
    originalPrice: 399,
    discount: 20,
    rating: 4.9,
    reviewCount: 290,
    isBestSeller: false,
    isFeatured: true,
    isNew: false,
    volumeOrWeight: '150g',
    sizes: ['150g', '300g'],
    shortDescription: 'Organic, finely micro-pulverized Ashwagandha root powder to naturally lower cortisol, calm the mind, and bolster vigor.',
    fullDescription: 'Ashwagandha (Withania somnifera) is revered as the ultimate Balya (strength-giver) in Ayurveda. Our churna is made exclusively from whole, mature organic roots cultivated in traditional mineral-rich soil. It acts as an adaptogen that modulates the adrenal system, supporting peaceful sleep and physical vigor.',
    ingredients: [
      '100% Pure Organic Ashwagandha Root (Withania somnifera)'
    ],
    benefits: [
      'Adaptogenic herb that alleviates everyday stress and fatigue',
      'Supports healthy muscle strength and post-workout recovery',
      'Promotes deep, tranquil and rejuvenating REM sleep',
      'Zero additives, preservatives, or chemical fillers'
    ],
    howToUse: 'Take 1/2 teaspoon (approx. 3g) with warm milk, a pinch of nutmeg, and honey 30 minutes before bedtime.',
    certifications: ['Certified Organic', 'USDA Organic Equivalent', 'Vegan', 'GMP'],
    inStock: true
  },
  {
    id: 'neem-tulsi-purifying-cleanser',
    name: 'Neem & Tulsi Purifying Cleanser',
    subtitle: 'Gentle Soap-Free Herbal Gel for Clear, Blemish-Free Skin',
    category: 'Natural Skincare',
    categoryId: 'natural-skincare',
    image: imgNeemTulsiCleanser,
    price: 349,
    originalPrice: 425,
    discount: 18,
    rating: 4.7,
    reviewCount: 215,
    isBestSeller: false,
    isFeatured: false,
    isNew: true,
    volumeOrWeight: '150ml',
    sizes: ['150ml'],
    shortDescription: 'Purifying face wash packed with fresh Neem leaf extract and Holy Basil to cleanse pores without drying.',
    fullDescription: 'A gentle, sulfate-free cleanser that purifies deep inside pores while maintaining the skin’s natural lipid barrier. Cold-macerated Neem provides potent antibacterial action while Queen of Herbs Tulsi calms irritation, preventing recurring breakouts and balancing oil secretion.',
    ingredients: [
      'Neem Leaf Extract (Azadirachta indica)',
      'Holy Basil / Tulsi Extract (Ocimum sanctum)',
      'Organic Aloe Vera Gel Base',
      'Tea Tree Oil & Natural Glycerin'
    ],
    benefits: [
      'Deeply cleanses dirt, makeup, and excess sebum',
      'Helps prevent acne, blackheads, and skin redness',
      'Soap-free and non-stripping formulation',
      'Leaves skin feeling instantly fresh, calm, and purified'
    ],
    howToUse: 'Pump a coin-sized amount onto damp palms. Work into a gentle lather, massage onto face for 60 seconds, and rinse with cool water.',
    certifications: ['Sulfate Free', 'Paraben Free', 'Dermatologically Tested'],
    inStock: true
  },
  {
    id: 'saffron-sandal-radiance-cream',
    name: 'Saffron & Sandalwood Radiance Cream',
    subtitle: 'Nourishing Day Moisturizer with Precious Saffron & Kokum Butter',
    category: 'Natural Skincare',
    categoryId: 'natural-skincare',
    image: imgSaffronMoisturizer,
    price: 699,
    originalPrice: 899,
    discount: 22,
    rating: 4.9,
    reviewCount: 198,
    isBestSeller: false,
    isFeatured: true,
    isNew: true,
    volumeOrWeight: '50g',
    sizes: ['50g'],
    shortDescription: 'Decadent botanical day cream infused with Kashmiri Saffron and Mysore Sandalwood for radiant, velvety hydration.',
    fullDescription: 'Infused with the calming coolness of pure Mysore Chandana (Sandalwood) and the skin-illuminating power of saffron strands, this luxurious cream hydrates deep into skin layers. Whipped with virgin kokum butter, it shields skin against environmental stressors while imparting a subtle dewy glow.',
    ingredients: [
      'Pure Kashmiri Saffron (Crocus sativus)',
      'Mysore Sandalwood Extract (Santalum album)',
      'Raw Kokum Butter (Garcinia indica)',
      'Cold Pressed Almond Oil & Rosewater'
    ],
    benefits: [
      'Deeply moisturizes without clogging pores',
      'Brightens uneven skin tone and soothes sun sensitivity',
      'Contains natural antioxidants that combat environmental aging',
      'Subtle, naturally uplifting sandalwood aroma'
    ],
    howToUse: 'Dot lightly over cleansed face and neck every morning. Smooth gently into skin using gentle upward strokes.',
    certifications: ['100% Vegetarian', 'No Synthetic Color', 'Cruelty Free'],
    inStock: true
  },
  {
    id: 'aloe-shatavari-soothing-gel',
    name: 'Aloe Vera & Shatavari Soothing Gel',
    subtitle: '99% Pure Multipurpose Hydrating Gel for Face, Body & Hair',
    category: 'Natural Skincare',
    categoryId: 'natural-skincare',
    image: imgAloeShatavariGel,
    price: 299,
    originalPrice: 380,
    discount: 21,
    rating: 4.8,
    reviewCount: 340,
    isBestSeller: true,
    isFeatured: false,
    isNew: false,
    volumeOrWeight: '200g',
    sizes: ['200g'],
    shortDescription: 'Refreshing multi-purpose gel combining pure cold-harvested Aloe Vera inner leaf with cooling Shatavari extract.',
    fullDescription: 'Our Aloe Vera & Shatavari Soothing Gel is crafted from hand-filleted mature aloe vera leaves combined with cooling Shatavari root extract. Ideal as an everyday lightweight face moisturizer, post-sun soothing treatment, hair styling hydrator, or after-shave balm.',
    ingredients: [
      'Pure Cold-Extracted Aloe Vera Leaf Gel - 95%',
      'Shatavari Root Extract (Asparagus racemosus) - 4%',
      'Vitamin E (Tocopherol)'
    ],
    benefits: [
      'Instant cooling relief for sun-exposed or irritated skin',
      'Hydrates without stickiness or residue',
      'Soothes razor burns, minor rashes, and dryness',
      'Can be used as a leave-in hair conditioner for frizz control'
    ],
    howToUse: 'Apply generously to face, neck, body, or scalp as needed. Massage gently until completely absorbed.',
    certifications: ['99% Natural', 'Alcohol Free', 'No Artificial Dyes'],
    inStock: true
  },
  {
    id: 'brahmi-memory-tablets',
    name: 'Brahmi Cognitive & Focus Tablets',
    subtitle: 'Classical Medhya Rasayana for Mental Clarity & Alertness',
    category: 'Herbal Supplements',
    categoryId: 'herbal-supplements',
    image: imgBrahmiTablets,
    price: 380,
    originalPrice: 480,
    discount: 21,
    rating: 4.7,
    reviewCount: 165,
    isBestSeller: false,
    isFeatured: false,
    isNew: false,
    volumeOrWeight: '60 Tabs',
    sizes: ['60 Tabs', '120 Tabs'],
    shortDescription: 'Time-tested Ayurvedic brain tonic tablets designed to support sharp memory retention, focus, and neurological calm.',
    fullDescription: 'Brahmi (Bacopa monnieri) is celebrated in classical texts as the premier Medhya herb for cognitive enhancement. These tablets offer concentrated bacosides that support neurotransmitter synthesis, reduce mental exhaustion from long working hours, and encourage relaxed clarity.',
    ingredients: [
      'Standardized Bacopa monnieri (Brahmi) Whole Plant Extract - 500mg'
    ],
    benefits: [
      'Enhances memory retention, information processing, and recall',
      'Sharpens day-long concentration without jitters',
      'Nourishes the nervous system during demanding intellectual tasks',
      'Non-sedative formulation that encourages calm mental balance'
    ],
    howToUse: 'Take 1 tablet twice daily with water after meals, or as recommended by an Ayurvedic doctor.',
    certifications: ['GMP Certified', 'Heavy Metal Tested', 'Vegetarian Tablet'],
    inStock: true
  },
  {
    id: 'himalayan-shilajit-gold-resin',
    name: 'Pure Himalayan Shilajit Gold Resin',
    subtitle: 'High-Altitude 18,000ft Sourced Resin with 75%+ Fulvic Acid',
    category: 'Daily Wellness',
    categoryId: 'daily-wellness',
    image: imgShilajitResin,
    price: 1199,
    originalPrice: 1599,
    discount: 25,
    rating: 5.0,
    reviewCount: 488,
    isBestSeller: true,
    isFeatured: true,
    isNew: false,
    volumeOrWeight: '20g',
    sizes: ['20g'],
    shortDescription: 'Pure Grade-A black gold Shilajit resin hand-harvested from high Himalayan altitudes for supreme vitality and endurance.',
    fullDescription: 'Sourced directly from pristine high Himalayan altitudes above 18,000 feet, this authentic semi-solid Shilajit resin is purified using traditional Shodhana processes with Triphala decoction. Packed with over 84 trace minerals and bio-active fulvic acid, it revitalizes physical and mental stamina.',
    ingredients: [
      '100% Pure Purified Himalayan Shilajit Resin (Asphaltum punjabianum)'
    ],
    benefits: [
      'Enhances cellular energy production (ATP synthesis)',
      'Optimizes stamina, endurance, and physical performance',
      'Packed with 84+ essential trace minerals in ionic bioavailable form',
      'Powerful natural rejuvenator for overall vitality'
    ],
    howToUse: 'Dissolve a pea-sized amount (300-500mg) using the included measuring spoon into lukewarm milk or green tea. Consume once daily in the morning.',
    certifications: ['Lab Certified 75%+ Fulvic Acid', 'Heavy Metal Free', 'Purified by Classical Shodhana'],
    inStock: true
  },
  {
    id: 'giloy-papaya-immunity-juice',
    name: 'Giloy & Papaya Immunity Shield Juice',
    subtitle: 'Vedic Amrita Formulation for Platelet Support & Fever Defense',
    category: 'Herbal Juices',
    categoryId: 'herbal-juices',
    image: imgGiloyJuice,
    price: 360,
    originalPrice: 450,
    discount: 20,
    rating: 4.8,
    reviewCount: 230,
    isBestSeller: false,
    isFeatured: false,
    isNew: true,
    volumeOrWeight: '500ml',
    sizes: ['500ml', '1000ml'],
    shortDescription: 'Potent seasonal immunity juice blending divine herb Giloy (Amrita) with nutrient-rich fresh Papaya leaf extract.',
    fullDescription: 'Known in Ayurvedic scriptures as Amrita (root of immortality), Giloy stem juice is blended with fresh cold-pressed Papaya leaves, Tulsi, and Black Pepper. Highly recommended during seasonal shifts to assist normal platelet count and reinforce the body’s innate defense mechanisms.',
    ingredients: [
      'Giloy Stem Extract (Tinospora cordifolia) - 50%',
      'Papaya Leaf Extract (Carica papaya) - 40%',
      'Tulsi Extract (Ocimum sanctum) - 8%',
      'Black Pepper & Citric Acid - 2%'
    ],
    benefits: [
      'Helps maintain and boost healthy blood platelet counts',
      'Strengthens immunity against seasonal infections & fevers',
      'Cleanses metabolic toxins and purifies blood',
      'No artificial sugar, completely natural taste'
    ],
    howToUse: 'Dilute 20ml in a glass of lukewarm water. Drink twice daily before meals.',
    certifications: ['Cold Pressed', 'GMP Quality', 'Zero Artificial Color'],
    inStock: true
  },
  {
    id: 'onion-kalonji-herbal-shampoo',
    name: 'Onion & Kalonji Revitalizing Shampoo',
    subtitle: 'Gentle Cleanser with Red Onion Oil, Black Seed & Shikakai',
    category: 'Hair Care',
    categoryId: 'hair-care',
    image: imgOnionShampoo,
    price: 420,
    originalPrice: 550,
    discount: 24,
    rating: 4.7,
    reviewCount: 310,
    isBestSeller: false,
    isFeatured: true,
    isNew: false,
    volumeOrWeight: '300ml',
    sizes: ['300ml'],
    shortDescription: 'Botanical sulfate-free hair cleanser with sulfur-rich Red Onion and Black Seed oil to reduce breakage and add shine.',
    fullDescription: 'Free from harsh sulfates, parabens, and silicones, this revitalizing shampoo harnesses sulfur-rich Red Onion extract and nutrient-dense Kalonji (Black Seed) oil. Gently washes away scalp buildup while infusing hair shafts with plant keratin, leaving tresses soft, bouncy, and resilient.',
    ingredients: [
      'Red Onion Seed Oil (Allium cepa)',
      'Black Seed Oil (Nigella sativa)',
      'Shikakai & Reetha Natural Saponins',
      'Rosemary Essential Oil & Plant Keratin'
    ],
    benefits: [
      'Reinforces hair follicles and minimizes breakage during brushing',
      'Deeply cleanses scalp without stripping natural protective oils',
      'Imparts natural gloss, volume, and silky smoothness',
      'Safe for color-treated and chemically processed hair'
    ],
    howToUse: 'Wet hair thoroughly. Apply shampoo to scalp and lengths, massage into a rich herbal lather for 2 minutes, and rinse thoroughly.',
    certifications: ['Sulfate Free', 'Paraben Free', 'Silicone Free', 'Cruelty Free'],
    inStock: true
  },
  {
    id: 'shatavari-hormone-balance-capsules',
    name: 'Shatavari Hormonal Balance Capsules',
    subtitle: 'Standardized 40% Saponin Extract for Female Vitality & Cycles',
    category: 'Ayurvedic Wellness',
    categoryId: 'ayurvedic-wellness',
    image: imgHormoneBalance,
    price: 499,
    originalPrice: 650,
    discount: 23,
    rating: 4.9,
    reviewCount: 415,
    isBestSeller: true,
    isFeatured: true,
    isNew: false,
    volumeOrWeight: '60 Caps',
    sizes: ['60 Caps', '120 Caps'],
    shortDescription: 'Convenient vegetarian capsules containing concentrated Shatavari root extract for hormonal balance and cycle comfort.',
    fullDescription: 'Designed for modern busy lifestyles, these pure vegetarian capsules deliver standardized 40% steroidal saponins from premium wild Shatavari root. It supports normal estrogen balance, relieves PMS discomfort, cools menopausal hot flashes, and promotes overall emotional well-being.',
    ingredients: [
      'Standardized Shatavari Root Extract (Asparagus racemosus) - 500mg (40% Saponins)',
      'Plant-based HPMC vegetarian capsule shell'
    ],
    benefits: [
      'Supports hormonal balance through all life stages',
      'Alleviates monthly cycle discomfort and bloating',
      'Assists postpartum recovery and lactation nourishment',
      '100% vegetarian, non-hormonal, non-synthetic'
    ],
    howToUse: 'Take 1 capsule twice daily after meals with water or warm milk.',
    certifications: ['Vegetarian Capsule', 'GMP Certified', 'Heavy Metal Safe'],
    inStock: true
  },
  {
    id: 'vedic-golden-milk-latte',
    name: 'Vedic Golden Milk Turmeric Latte',
    subtitle: 'Comforting Bedtime Blend with Lakadong Turmeric, Saffron & Spices',
    category: 'Daily Wellness',
    categoryId: 'daily-wellness',
    image: imgTurmericLatte,
    price: 350,
    originalPrice: 450,
    discount: 22,
    rating: 4.9,
    reviewCount: 260,
    isBestSeller: false,
    isFeatured: false,
    isNew: true,
    volumeOrWeight: '100g',
    sizes: ['100g', '200g'],
    shortDescription: 'Traditional Haldi Doodh blend crafted with high-curcumin Lakadong Turmeric, Kashmiri Saffron, and warming spices.',
    fullDescription: 'Inspired by the ancient Ayurvedic tradition of golden bedtime milk, this aromatic blend brings together high-curcumin (7%+) Lakadong turmeric, real saffron strands, Ceylon cinnamon, cardamom, ginger, and black pepper. The piperine in black pepper ensures maximum curcumin bioavailability.',
    ingredients: [
      'High Curcumin Lakadong Turmeric (Curcuma longa)',
      'Kashmiri Saffron (Crocus sativus)',
      'Ceylon Cinnamon & Green Cardamom',
      'Dry Ginger (Sunthi) & Black Pepper (Maricha)'
    ],
    benefits: [
      'Supports joint flexibility and natural anti-inflammatory response',
      'Soothes the nervous system for deeply restorative sleep',
      'Supports respiratory defense during cooler weather',
      'Delicious comforting taste with dairy or plant-based milks'
    ],
    howToUse: 'Whisk 1 teaspoon into a cup of hot milk (dairy or almond/oat). Simmer for 1 minute, sweeten with honey or jaggery, and drink warm.',
    certifications: ['High Curcumin (7%+)', 'No Added Sugar', '100% Pure Spices'],
    inStock: true
  }
];
