import fs from 'fs';
import path from 'path';

const products = [
  {
    filename: 'shatavari-kalpa.svg',
    type: 'jar',
    title: 'SHATAVARI KALPA',
    subtitle: 'Nourishing Granules',
    mainColor: '#1F5135',
    accentColor: '#D4AF37',
    capColor: '#E6C665',
    bodyGradient: ['#F9F6F0', '#EAE3D2'],
    labelBg: '#153C27',
    textColor: '#FFFFFF',
    tagText: 'HERBAL GRANULES',
    badgeText: '100% RASAYANA',
    weight: '250 g',
    herbType: 'asparagus'
  },
  {
    filename: 'shatavari-juice.svg',
    type: 'juice_bottle',
    title: 'PURE SHATAVARI',
    subtitle: 'Wild Crafted Juice',
    mainColor: '#174A2C',
    accentColor: '#D8A038',
    capColor: '#C49129',
    bodyGradient: ['#234B30', '#122D1D'],
    labelBg: '#0F2C1A',
    textColor: '#FFFFFF',
    tagText: 'COLD PRESSED',
    badgeText: 'HORMONAL VITALITY',
    weight: '500 ml',
    herbType: 'leaf'
  },
  {
    filename: 'triphala-juice.svg',
    type: 'juice_bottle',
    title: 'TRIPHALA DETOX',
    subtitle: 'Digestive & Colon Care',
    mainColor: '#7A3816',
    accentColor: '#E8A344',
    capColor: '#C77D25',
    bodyGradient: ['#4E220D', '#2B1104'],
    labelBg: '#381607',
    textColor: '#FFFFFF',
    tagText: 'THREE HERB ELIXIR',
    badgeText: 'GUT CLEANSER',
    weight: '500 ml',
    herbType: 'triphala'
  },
  {
    filename: 'amla-nectar.svg',
    type: 'juice_bottle',
    title: 'WILD AMLA JUICE',
    subtitle: 'Vitamin C & Immunity',
    mainColor: '#436B18',
    accentColor: '#F5BE2C',
    capColor: '#D8A020',
    bodyGradient: ['#3A5E12', '#213809'],
    labelBg: '#2A460B',
    textColor: '#FFFFFF',
    tagText: 'NATURAL VIT-C',
    badgeText: 'IMMUNITY RASAYANA',
    weight: '500 ml',
    herbType: 'amla'
  },
  {
    filename: 'kumkumadi-oil.svg',
    type: 'dropper_bottle',
    title: 'KUMKUMADI TAILAM',
    subtitle: 'Miraculous Beauty Oil',
    mainColor: '#C63F17',
    accentColor: '#FFD700',
    capColor: '#D4AF37',
    bodyGradient: ['#D96524', '#7E250A'],
    labelBg: '#260B03',
    textColor: '#FFFFFF',
    tagText: 'KASHMIRI SAFFRON',
    badgeText: 'GLOW & REPAIR',
    weight: '30 ml',
    herbType: 'saffron'
  },
  {
    filename: 'bhringraj-oil.svg',
    type: 'tall_bottle',
    title: 'BHRINGRAJ OIL',
    subtitle: 'Root Strengthening Formula',
    mainColor: '#123D26',
    accentColor: '#D4AF37',
    capColor: '#7C481A',
    bodyGradient: ['#173824', '#0A1E13'],
    labelBg: '#091C12',
    textColor: '#FFFFFF',
    tagText: 'INTENSIVE HAIR THERAPY',
    badgeText: 'ANTI-HAIRFALL',
    weight: '200 ml',
    herbType: 'bhringraj'
  },
  {
    filename: 'ashwagandha-churna.svg',
    type: 'churna_tub',
    title: 'ASHWAGANDHA ROOT',
    subtitle: 'Stress & Vigor Powder',
    mainColor: '#8C5E32',
    accentColor: '#E6C665',
    capColor: '#5C3817',
    bodyGradient: ['#EFE5D5', '#DDCBB0'],
    labelBg: '#4A2B0E',
    textColor: '#FFFFFF',
    tagText: 'ORGANIC ROOT CHURNA',
    badgeText: 'STRENGTH & CALM',
    weight: '150 g',
    herbType: 'roots'
  },
  {
    filename: 'neem-tulsi-cleanser.svg',
    type: 'pump_bottle',
    title: 'NEEM & TULSI',
    subtitle: 'Purifying Face Wash',
    mainColor: '#1B613A',
    accentColor: '#72D68C',
    capColor: '#144629',
    bodyGradient: ['#287A4C', '#104423'],
    labelBg: '#0E361B',
    textColor: '#FFFFFF',
    tagText: 'ACNE DEFENSE',
    badgeText: 'DEEP CLEANSING',
    weight: '150 ml',
    herbType: 'tulsi'
  },
  {
    filename: 'saffron-moisturizer.svg',
    type: 'cosmetic_jar',
    title: 'SAFFRON & SANDAL',
    subtitle: 'Radiance Day Cream',
    mainColor: '#B57422',
    accentColor: '#FFDF79',
    capColor: '#ECC468',
    bodyGradient: ['#FFF8ED', '#F7E7CD'],
    labelBg: '#592D05',
    textColor: '#FFFFFF',
    tagText: 'AYURVEDIC RADIANCE',
    badgeText: 'SKIN REPLENISH',
    weight: '50 g',
    herbType: 'sandal'
  },
  {
    filename: 'aloe-shatavari-gel.svg',
    type: 'clear_tub',
    title: 'ALOE & SHATAVARI',
    subtitle: 'Multi-Benefit Soothing Gel',
    mainColor: '#1F7A4C',
    accentColor: '#A8F2BE',
    capColor: '#135032',
    bodyGradient: ['#3CA06D', '#1B653E'],
    labelBg: '#0F3E24',
    textColor: '#FFFFFF',
    tagText: 'PURE INNER LEAF',
    badgeText: '99% NATURAL',
    weight: '200 g',
    herbType: 'aloe'
  },
  {
    filename: 'brahmi-tablets.svg',
    type: 'pill_bottle',
    title: 'BRAHMI MEMORY',
    subtitle: 'Cognitive Focus Tablets',
    mainColor: '#1D4D54',
    accentColor: '#E6B800',
    capColor: '#CC9900',
    bodyGradient: ['#332516', '#1A1209'],
    labelBg: '#0E2E32',
    textColor: '#FFFFFF',
    tagText: 'MEDHYA RASAYANA',
    badgeText: '60 TABLETS',
    weight: '60 Tabs',
    herbType: 'brahmi'
  },
  {
    filename: 'shilajit-resin.svg',
    type: 'resin_jar',
    title: 'HIMALAYAN SHILAJIT',
    subtitle: 'Pure Golden Grade Resin',
    mainColor: '#111111',
    accentColor: '#DFB53C',
    capColor: '#B8860B',
    bodyGradient: ['#1C1B1A', '#080807'],
    labelBg: '#151413',
    textColor: '#FFFFFF',
    tagText: 'FULVIC ACID 75%+',
    badgeText: 'STAMINA & VIGOR',
    weight: '20 g',
    herbType: 'mountain'
  },
  {
    filename: 'giloy-juice.svg',
    type: 'juice_bottle',
    title: 'GILOY PAPAYA JUICE',
    subtitle: 'Platelet & Immune Shield',
    mainColor: '#2E5E1C',
    accentColor: '#F59A23',
    capColor: '#D47D11',
    bodyGradient: ['#3A6B25', '#1B3B0C'],
    labelBg: '#1B380E',
    textColor: '#FFFFFF',
    tagText: 'AMRITA ELIXIR',
    badgeText: 'IMMUNITY SHIELD',
    weight: '500 ml',
    herbType: 'giloy'
  },
  {
    filename: 'onion-shampoo.svg',
    type: 'tall_bottle',
    title: 'ONION & KALONJI',
    subtitle: 'Anti-Hair Fall Cleanser',
    mainColor: '#781D42',
    accentColor: '#F7A7C0',
    capColor: '#242424',
    bodyGradient: ['#59132E', '#300817'],
    labelBg: '#360A1C',
    textColor: '#FFFFFF',
    tagText: 'SULPHATE & PARABEN FREE',
    badgeText: 'HAIR VOLUMIZER',
    weight: '300 ml',
    herbType: 'onion'
  },
  {
    filename: 'hormone-balance.svg',
    type: 'pill_bottle',
    title: 'SHATAVARI BALANCE',
    subtitle: 'Female Vitality & Cycle Care',
    mainColor: '#702244',
    accentColor: '#ECC468',
    capColor: '#D4AF37',
    bodyGradient: ['#3B1F2B', '#1B0E14'],
    labelBg: '#47142A',
    textColor: '#FFFFFF',
    tagText: 'ESTROGEN BALANCE',
    badgeText: '60 VEG CAPS',
    weight: '60 Caps',
    herbType: 'lotus'
  },
  {
    filename: 'turmeric-latte.svg',
    type: 'churna_tub',
    title: 'GOLDEN MILK LATTE',
    subtitle: 'Turmeric, Saffron & Black Pepper',
    mainColor: '#B36B00',
    accentColor: '#FFD700',
    capColor: '#E6A100',
    bodyGradient: ['#FFF0D4', '#F5DCAD'],
    labelBg: '#7A4400',
    textColor: '#FFFFFF',
    tagText: 'BEDTIME WELLNESS',
    badgeText: 'CURCUMIN BOOST',
    weight: '100 g',
    herbType: 'turmeric'
  }
];

function generateProductSVG(p) {
  let shapeSVG = '';
  const idPrefix = p.filename.replace('.svg', '');

  if (p.type === 'juice_bottle') {
    shapeSVG = `
      <!-- Bottle Body -->
      <path d="M 180 140 L 220 140 L 220 115 L 280 115 L 280 140 L 320 140 C 345 140 365 160 365 190 L 365 420 C 365 440 345 455 320 455 L 180 455 C 155 455 135 440 135 420 L 135 190 C 135 160 155 140 180 140 Z" fill="url(#${idPrefix}-body)" filter="url(#drop-shadow)" />
      <!-- Bottle Highlights -->
      <path d="M 148 190 L 148 420 C 148 430 155 440 168 444 L 168 185 C 155 186 148 188 148 190 Z" fill="#FFFFFF" opacity="0.22" />
      <path d="M 345 195 L 345 415" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round" opacity="0.15" />
      <!-- Golden Neck Ring & Measuring Cap -->
      <rect x="212" y="70" width="76" height="52" rx="6" fill="url(#${idPrefix}-cap)" stroke="#9A7010" stroke-width="2" />
      <line x1="216" y1="88" x2="284" y2="88" stroke="#FFFFFF" stroke-width="2" opacity="0.4" />
      <line x1="216" y1="102" x2="284" y2="102" stroke="#FFFFFF" stroke-width="2" opacity="0.4" />
      <rect x="210" y="122" width="80" height="18" rx="4" fill="${p.accentColor}" stroke="#9A7010" stroke-width="1.5" />
      <!-- Main Product Label -->
      <rect x="145" y="200" width="210" height="205" rx="8" fill="${p.labelBg}" stroke="${p.accentColor}" stroke-width="2.5" />
      <!-- Label Gold Inner Border -->
      <rect x="151" y="206" width="198" height="193" rx="5" fill="none" stroke="${p.accentColor}" stroke-width="1" stroke-dasharray="6 3" />
      <!-- Brand Emblem -->
      <circle cx="250" cy="235" r="18" fill="${p.accentColor}" opacity="0.2" />
      <path d="M 250 220 C 242 227 242 238 250 245 C 258 238 258 227 250 220 Z" fill="${p.accentColor}" />
      <text x="250" y="258" font-family="'Playfair Display', serif" font-size="11" font-weight="700" fill="${p.accentColor}" text-anchor="middle" letter-spacing="2">SHATAVARI</text>
      <text x="250" y="269" font-family="'Plus Jakarta Sans', sans-serif" font-size="8" font-weight="600" fill="#E6D2B5" text-anchor="middle" letter-spacing="1.5">AYURVEDIC</text>
      <!-- Gold Separator -->
      <line x1="180" y1="277" x2="320" y2="277" stroke="${p.accentColor}" stroke-width="1.2" />
      <polygon points="250,274 253,277 250,280 247,277" fill="${p.accentColor}" />
      <!-- Title & Subtitle -->
      <text x="250" y="298" font-family="'Playfair Display', serif" font-size="16" font-weight="800" fill="#FFFFFF" text-anchor="middle" letter-spacing="0.5">${p.title}</text>
      <text x="250" y="316" font-family="'Plus Jakarta Sans', sans-serif" font-size="9.5" font-weight="500" fill="#D6C4A5" text-anchor="middle">${p.subtitle}</text>
      <!-- Tag Pill -->
      <rect x="175" y="332" width="150" height="20" rx="10" fill="${p.accentColor}" />
      <text x="250" y="346" font-family="'Plus Jakarta Sans', sans-serif" font-size="8.5" font-weight="700" fill="#1C1808" text-anchor="middle" letter-spacing="1">${p.tagText}</text>
      <!-- Botanical Details & Specs -->
      <text x="250" y="372" font-family="'Plus Jakarta Sans', sans-serif" font-size="8" font-weight="600" fill="${p.accentColor}" text-anchor="middle" letter-spacing="0.5">● 100% PURE & NATURAL ●</text>
      <text x="250" y="388" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" font-weight="700" fill="#FFFFFF" text-anchor="middle">NET VOL: ${p.weight}</text>
    `;
  } else if (p.type === 'dropper_bottle') {
    shapeSVG = `
      <!-- Dropper Pipette Tip & Bulb -->
      <path d="M 238 65 C 238 52 242 45 250 45 C 258 45 262 52 262 65 L 260 85 L 240 85 Z" fill="#222222" />
      <rect x="232" y="85" width="36" height="40" rx="3" fill="url(#${idPrefix}-cap)" stroke="#9A7010" stroke-width="1.5" />
      <rect x="226" y="125" width="48" height="15" rx="3" fill="${p.accentColor}" />
      <!-- Amber Glass Bottle Body -->
      <path d="M 200 140 L 226 140 L 226 135 L 274 135 L 274 140 L 300 140 C 322 140 338 156 340 180 L 340 410 C 340 435 322 450 295 450 L 205 450 C 178 450 160 435 160 410 L 160 180 C 162 156 178 140 200 140 Z" fill="url(#${idPrefix}-body)" filter="url(#drop-shadow)" />
      <!-- Liquid & Reflection Highlights -->
      <path d="M 172 185 L 172 410 C 172 422 180 435 195 440 L 195 180 Z" fill="#FFFFFF" opacity="0.25" />
      <path d="M 324 185 L 324 410" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round" opacity="0.18" />
      <!-- Luxurious Cosmetic Label -->
      <rect x="170" y="195" width="160" height="210" rx="6" fill="${p.labelBg}" stroke="${p.accentColor}" stroke-width="2" />
      <rect x="175" y="200" width="150" height="200" rx="4" fill="none" stroke="${p.accentColor}" stroke-width="0.8" stroke-dasharray="4 2" />
      <!-- Gold Emblem -->
      <circle cx="250" cy="228" r="16" fill="${p.accentColor}" opacity="0.25" />
      <polygon points="250,218 258,228 250,238 242,228" fill="${p.accentColor}" />
      <text x="250" y="252" font-family="'Playfair Display', serif" font-size="10" font-weight="700" fill="${p.accentColor}" text-anchor="middle" letter-spacing="1.5">SHATAVARI</text>
      <text x="250" y="263" font-family="'Plus Jakarta Sans', sans-serif" font-size="7.5" font-weight="600" fill="#E6D2B5" text-anchor="middle" letter-spacing="1">AYURVEDIC</text>
      <!-- Title -->
      <line x1="190" y1="272" x2="310" y2="272" stroke="${p.accentColor}" stroke-width="1" />
      <text x="250" y="293" font-family="'Playfair Display', serif" font-size="14" font-weight="800" fill="#FFFFFF" text-anchor="middle">${p.title}</text>
      <text x="250" y="310" font-family="'Plus Jakarta Sans', sans-serif" font-size="8.5" font-weight="500" fill="#EAD9BD" text-anchor="middle">${p.subtitle}</text>
      <!-- Tag -->
      <rect x="185" y="325" width="130" height="20" rx="10" fill="${p.accentColor}" />
      <text x="250" y="339" font-family="'Plus Jakarta Sans', sans-serif" font-size="8" font-weight="700" fill="#1A1208" text-anchor="middle">${p.tagText}</text>
      <text x="250" y="365" font-family="'Plus Jakarta Sans', sans-serif" font-size="8" font-weight="600" fill="${p.accentColor}" text-anchor="middle">AUTHENTIC VEDIC OIL</text>
      <text x="250" y="385" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="700" fill="#FFFFFF" text-anchor="middle">${p.weight}</text>
    `;
  } else if (p.type === 'jar' || p.type === 'cosmetic_jar' || p.type === 'resin_jar') {
    shapeSVG = `
      <!-- Jar Cap -->
      <rect x="145" y="120" width="210" height="42" rx="10" fill="url(#${idPrefix}-cap)" stroke="#9A7010" stroke-width="2" filter="url(#drop-shadow)" />
      <rect x="155" y="130" width="190" height="6" fill="#FFFFFF" opacity="0.3" rx="3" />
      <!-- Neck Band -->
      <rect x="160" y="162" width="180" height="16" fill="${p.accentColor}" />
      <!-- Jar Body -->
      <rect x="135" y="178" width="230" height="235" rx="20" fill="url(#${idPrefix}-body)" filter="url(#drop-shadow)" stroke="#E0D6C3" stroke-width="1.5" />
      <!-- Glass reflection -->
      <path d="M 148 190 L 148 395 C 148 402 154 406 162 406 L 162 190 Z" fill="#FFFFFF" opacity="0.35" />
      <path d="M 348 190 L 348 395" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round" opacity="0.25" />
      <!-- Label -->
      <rect x="152" y="200" width="196" height="190" rx="10" fill="${p.labelBg}" stroke="${p.accentColor}" stroke-width="2.2" />
      <rect x="158" y="206" width="184" height="178" rx="8" fill="none" stroke="${p.accentColor}" stroke-width="1" stroke-dasharray="5 3" />
      <!-- Emblem -->
      <circle cx="250" cy="235" r="18" fill="${p.accentColor}" opacity="0.25" />
      <path d="M 250 220 Q 240 230 250 242 Q 260 230 250 220 Z" fill="${p.accentColor}" />
      <text x="250" y="258" font-family="'Playfair Display', serif" font-size="11" font-weight="700" fill="${p.accentColor}" text-anchor="middle" letter-spacing="2">SHATAVARI</text>
      <text x="250" y="270" font-family="'Plus Jakarta Sans', sans-serif" font-size="8" font-weight="600" fill="#E8D7BF" text-anchor="middle" letter-spacing="1.5">AYURVEDIC</text>
      <!-- Title -->
      <line x1="185" y1="278" x2="315" y2="278" stroke="${p.accentColor}" stroke-width="1.2" />
      <text x="250" y="300" font-family="'Playfair Display', serif" font-size="16" font-weight="800" fill="#FFFFFF" text-anchor="middle">${p.title}</text>
      <text x="250" y="318" font-family="'Plus Jakarta Sans', sans-serif" font-size="9.5" font-weight="500" fill="#D6C4A5" text-anchor="middle">${p.subtitle}</text>
      <!-- Tag Badge -->
      <rect x="175" y="330" width="150" height="22" rx="11" fill="${p.accentColor}" />
      <text x="250" y="345" font-family="'Plus Jakarta Sans', sans-serif" font-size="8.5" font-weight="700" fill="#1C1808" text-anchor="middle" letter-spacing="1">${p.tagText}</text>
      <text x="250" y="372" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="700" fill="#FFFFFF" text-anchor="middle">NET WT: ${p.weight}</text>
    `;
  } else if (p.type === 'tall_bottle' || p.type === 'pump_bottle') {
    shapeSVG = `
      <!-- Pump Head or Dispenser -->
      <path d="M 245 60 L 295 60 C 298 60 300 64 298 68 L 290 85 L 245 85 Z" fill="#202020" />
      <rect x="242" y="85" width="16" height="25" fill="#333333" />
      <rect x="232" y="110" width="36" height="25" rx="3" fill="url(#${idPrefix}-cap)" stroke="#806010" stroke-width="1.5" />
      <rect x="226" y="135" width="48" height="15" fill="${p.accentColor}" />
      <!-- Bottle Body -->
      <rect x="155" y="150" width="190" height="295" rx="25" fill="url(#${idPrefix}-body)" filter="url(#drop-shadow)" />
      <!-- Highlights -->
      <rect x="168" y="165" width="14" height="260" rx="7" fill="#FFFFFF" opacity="0.2" />
      <line x1="330" y1="170" x2="330" y2="425" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" opacity="0.15" />
      <!-- Label -->
      <rect x="165" y="210" width="170" height="205" rx="8" fill="${p.labelBg}" stroke="${p.accentColor}" stroke-width="2.2" />
      <rect x="171" y="216" width="158" height="193" rx="6" fill="none" stroke="${p.accentColor}" stroke-width="1" stroke-dasharray="5 3" />
      <!-- Emblem -->
      <circle cx="250" cy="242" r="17" fill="${p.accentColor}" opacity="0.25" />
      <path d="M 250 228 C 243 235 243 245 250 252 C 257 245 257 235 250 228 Z" fill="${p.accentColor}" />
      <text x="250" y="266" font-family="'Playfair Display', serif" font-size="10" font-weight="700" fill="${p.accentColor}" text-anchor="middle" letter-spacing="1.5">SHATAVARI</text>
      <text x="250" y="277" font-family="'Plus Jakarta Sans', sans-serif" font-size="7.5" font-weight="600" fill="#E8D7BF" text-anchor="middle" letter-spacing="1">AYURVEDIC</text>
      <!-- Title -->
      <line x1="185" y1="285" x2="315" y2="285" stroke="${p.accentColor}" stroke-width="1.2" />
      <text x="250" y="306" font-family="'Playfair Display', serif" font-size="14.5" font-weight="800" fill="#FFFFFF" text-anchor="middle">${p.title}</text>
      <text x="250" y="324" font-family="'Plus Jakarta Sans', sans-serif" font-size="8.5" font-weight="500" fill="#D6C4A5" text-anchor="middle">${p.subtitle}</text>
      <!-- Tag -->
      <rect x="180" y="338" width="140" height="22" rx="11" fill="${p.accentColor}" />
      <text x="250" y="353" font-family="'Plus Jakarta Sans', sans-serif" font-size="8" font-weight="700" fill="#1C1808" text-anchor="middle">${p.tagText}</text>
      <text x="250" y="380" font-family="'Plus Jakarta Sans', sans-serif" font-size="8.5" font-weight="600" fill="${p.accentColor}" text-anchor="middle">● PARABEN & SLS FREE ●</text>
      <text x="250" y="398" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="700" fill="#FFFFFF" text-anchor="middle">NET VOL: ${p.weight}</text>
    `;
  } else {
    // pill_bottle or churna_tub or clear_tub
    shapeSVG = `
      <!-- Cap -->
      <rect x="160" y="115" width="180" height="38" rx="8" fill="url(#${idPrefix}-cap)" stroke="#9A7010" stroke-width="2" filter="url(#drop-shadow)" />
      <rect x="170" y="125" width="160" height="5" fill="#FFFFFF" opacity="0.35" rx="2" />
      <rect x="175" y="153" width="150" height="14" fill="${p.accentColor}" />
      <!-- Body -->
      <rect x="145" y="167" width="210" height="260" rx="18" fill="url(#${idPrefix}-body)" filter="url(#drop-shadow)" stroke="#E0D6C3" stroke-width="1.5" />
      <!-- Highlights -->
      <rect x="156" y="180" width="14" height="230" rx="7" fill="#FFFFFF" opacity="0.25" />
      <!-- Label -->
      <rect x="155" y="200" width="190" height="205" rx="8" fill="${p.labelBg}" stroke="${p.accentColor}" stroke-width="2.2" />
      <rect x="161" y="206" width="178" height="193" rx="6" fill="none" stroke="${p.accentColor}" stroke-width="1" stroke-dasharray="5 3" />
      <!-- Emblem -->
      <circle cx="250" cy="235" r="18" fill="${p.accentColor}" opacity="0.25" />
      <path d="M 250 220 Q 240 230 250 242 Q 260 230 250 220 Z" fill="${p.accentColor}" />
      <text x="250" y="258" font-family="'Playfair Display', serif" font-size="11" font-weight="700" fill="${p.accentColor}" text-anchor="middle" letter-spacing="2">SHATAVARI</text>
      <text x="250" y="270" font-family="'Plus Jakarta Sans', sans-serif" font-size="8" font-weight="600" fill="#E8D7BF" text-anchor="middle" letter-spacing="1.5">AYURVEDIC</text>
      <!-- Title -->
      <line x1="185" y1="278" x2="315" y2="278" stroke="${p.accentColor}" stroke-width="1.2" />
      <text x="250" y="300" font-family="'Playfair Display', serif" font-size="15" font-weight="800" fill="#FFFFFF" text-anchor="middle">${p.title}</text>
      <text x="250" y="318" font-family="'Plus Jakarta Sans', sans-serif" font-size="9" font-weight="500" fill="#D6C4A5" text-anchor="middle">${p.subtitle}</text>
      <!-- Tag Badge -->
      <rect x="175" y="332" width="150" height="22" rx="11" fill="${p.accentColor}" />
      <text x="250" y="347" font-family="'Plus Jakarta Sans', sans-serif" font-size="8.5" font-weight="700" fill="#1C1808" text-anchor="middle" letter-spacing="1">${p.tagText}</text>
      <text x="250" y="374" font-family="'Plus Jakarta Sans', sans-serif" font-size="8.5" font-weight="600" fill="${p.accentColor}" text-anchor="middle">AUTHENTIC HERBAL QUALITY</text>
      <text x="250" y="394" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="700" fill="#FFFFFF" text-anchor="middle">QTY: ${p.weight}</text>
    `;
  }

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="100%" height="100%">
  <defs>
    <!-- Filter for realistic soft shadow -->
    <filter id="drop-shadow" x="-15%" y="-15%" width="130%" height="130%">
      <feDropShadow dx="0" dy="16" stdDeviation="16" flood-color="#122417" flood-opacity="0.18" />
    </filter>
    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="8" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
    <!-- Body Gradient -->
    <linearGradient id="${idPrefix}-body" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="${p.bodyGradient[0]}" />
      <stop offset="50%" stop-color="${p.bodyGradient[1]}" />
      <stop offset="100%" stop-color="${p.bodyGradient[0]}" />
    </linearGradient>
    <!-- Cap Metallic Gradient -->
    <linearGradient id="${idPrefix}-cap" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="${p.capColor}" />
      <stop offset="35%" stop-color="#FFF2A3" />
      <stop offset="70%" stop-color="${p.capColor}" />
      <stop offset="100%" stop-color="#9E7618" />
    </linearGradient>
    <!-- Background Podium Aura -->
    <radialGradient id="${idPrefix}-podium" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#E8DFCD" stop-opacity="0.6" />
      <stop offset="70%" stop-color="#FBF8F2" stop-opacity="0.1" />
      <stop offset="100%" stop-color="#FFFFFF" stop-opacity="0" />
    </radialGradient>
  </defs>

  <!-- Clean Subtle Background Podium -->
  <ellipse cx="250" cy="450" rx="190" ry="24" fill="url(#${idPrefix}-podium)" />
  <ellipse cx="250" cy="452" rx="140" ry="14" fill="#203323" opacity="0.12" />

  <!-- Botanical Leaf Accent in Background -->
  <g opacity="0.14" transform="translate(40, 60)">
    <path d="M 0 100 C 50 40 100 20 160 0 C 130 50 100 120 40 140 Z" fill="${p.mainColor}" />
    <path d="M 10 95 Q 80 50 150 10" stroke="${p.mainColor}" stroke-width="2" fill="none" />
  </g>
  <g opacity="0.12" transform="translate(360, 280) scale(-1, 1)">
    <path d="M 0 100 C 50 40 100 20 160 0 C 130 50 100 120 40 140 Z" fill="${p.accentColor}" />
  </g>

  ${shapeSVG}
</svg>`;
}

const categories = [
  {
    filename: 'cat-ayurvedic-wellness.svg',
    title: 'Ayurvedic Wellness',
    color1: '#1F5135',
    color2: '#0F2C1A',
    accent: '#D4AF37',
    icon: 'herb'
  },
  {
    filename: 'cat-herbal-juices.svg',
    title: 'Herbal Juices',
    color1: '#3A6B25',
    color2: '#1B3B0C',
    accent: '#E8A344',
    icon: 'juice'
  },
  {
    filename: 'cat-natural-skincare.svg',
    title: 'Natural Skincare',
    color1: '#B57422',
    color2: '#592D05',
    accent: '#FFDF79',
    icon: 'skincare'
  },
  {
    filename: 'cat-hair-care.svg',
    title: 'Hair Care',
    color1: '#123D26',
    color2: '#0A1E13',
    accent: '#D4AF37',
    icon: 'hair'
  },
  {
    filename: 'cat-daily-wellness.svg',
    title: 'Daily Wellness',
    color1: '#8C5E32',
    color2: '#4A2B0E',
    accent: '#ECC468',
    icon: 'wellness'
  },
  {
    filename: 'cat-herbal-supplements.svg',
    title: 'Herbal Supplements',
    color1: '#1D4D54',
    color2: '#0E2E32',
    accent: '#DFB53C',
    icon: 'supplement'
  }
];

function generateCategorySVG(c) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" width="100%" height="100%">
  <defs>
    <radialGradient id="cat-grad-${c.title.replace(/\s+/g, '')}" cx="35%" cy="30%" r="70%">
      <stop offset="0%" stop-color="${c.color1}" />
      <stop offset="85%" stop-color="${c.color2}" />
      <stop offset="100%" stop-color="#08140B" />
    </radialGradient>
    <linearGradient id="gold-border" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${c.accent}" />
      <stop offset="50%" stop-color="#FFF2A3" />
      <stop offset="100%" stop-color="${c.accent}" />
    </linearGradient>
    <filter id="cat-shadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="10" stdDeviation="10" flood-color="#0F2415" flood-opacity="0.25" />
    </filter>
  </defs>

  <!-- Circular Outer Glow -->
  <circle cx="150" cy="150" r="140" fill="url(#cat-grad-${c.title.replace(/\s+/g, '')})" filter="url(#cat-shadow)" />
  <!-- Golden Ring -->
  <circle cx="150" cy="150" r="132" fill="none" stroke="url(#gold-border)" stroke-width="3" />
  <circle cx="150" cy="150" r="126" fill="none" stroke="${c.accent}" stroke-width="1" stroke-dasharray="6 4" opacity="0.6" />

  <!-- Botanical Art Center -->
  <g transform="translate(150, 140)">
    <!-- Central Herbal Leaf Motif -->
    <path d="M 0 -60 C 40 -30 45 25 0 60 C -45 25 -40 -30 0 -60 Z" fill="${c.accent}" opacity="0.9" />
    <path d="M 0 -50 C 25 -20 30 20 0 45 C -30 20 -25 -20 0 -50 Z" fill="#FFFFFF" opacity="0.25" />
    <!-- Leaf veins -->
    <line x1="0" y1="-50" x2="0" y2="50" stroke="#102E19" stroke-width="2.5" />
    <line x1="0" y1="-20" x2="16" y2="-5" stroke="#102E19" stroke-width="2" />
    <line x1="0" y1="-5" x2="-16" y2="10" stroke="#102E19" stroke-width="2" />
    <line x1="0" y1="12" x2="14" y2="24" stroke="#102E19" stroke-width="2" />
    <!-- Flanking botanical sprouts -->
    <path d="M -25 15 C -45 5 -55 -20 -40 -35 C -35 -15 -25 0 -15 10 Z" fill="${c.accent}" opacity="0.75" />
    <path d="M 25 15 C 45 5 55 -20 40 -35 C 35 -15 25 0 15 10 Z" fill="${c.accent}" opacity="0.75" />
  </g>

  <!-- Banner Plate -->
  <rect x="40" y="215" width="220" height="42" rx="21" fill="#FFFFFF" stroke="${c.accent}" stroke-width="2" filter="url(#cat-shadow)" />
  <text x="150" y="241" font-family="'Playfair Display', serif" font-size="14.5" font-weight="700" fill="#153C27" text-anchor="middle" letter-spacing="0.5">${c.title}</text>
</svg>`;
}

// Generate products
const productsDir = path.join(process.cwd(), 'src', 'assets', 'products');
products.forEach(p => {
  const svg = generateProductSVG(p);
  fs.writeFileSync(path.join(productsDir, p.filename), svg);
});

// Generate categories
const categoriesDir = path.join(process.cwd(), 'src', 'assets', 'categories');
categories.forEach(c => {
  const svg = generateCategorySVG(c);
  fs.writeFileSync(path.join(categoriesDir, c.filename), svg);
});

console.log(`Generated ${products.length} product packaging SVGs and ${categories.length} category SVGs.`);
