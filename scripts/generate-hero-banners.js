import fs from 'fs';
import path from 'path';

// Slide 2: Juices Showcase (Triphala, Wild Amla, Pure Shatavari)
const juicesSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 600" width="100%" height="100%">
  <defs>
    <radialGradient id="juice-aura" cx="50%" cy="40%" r="60%">
      <stop offset="0%" stop-color="#E4EFC7" stop-opacity="0.85" />
      <stop offset="60%" stop-color="#D7E8B3" stop-opacity="0.3" />
      <stop offset="100%" stop-color="#FAF7F2" stop-opacity="0" />
    </radialGradient>
    <linearGradient id="gold-metal" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#D4AF37" />
      <stop offset="40%" stop-color="#FFF3A8" />
      <stop offset="80%" stop-color="#B8860B" />
      <stop offset="100%" stop-color="#8B6508" />
    </linearGradient>
    <filter id="hero-shadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="25" stdDeviation="20" flood-color="#122518" flood-opacity="0.25" />
    </filter>
  </defs>

  <!-- Stage Podium -->
  <ellipse cx="350" cy="520" rx="300" ry="40" fill="url(#juice-aura)" />
  <ellipse cx="350" cy="525" rx="220" ry="22" fill="#1C381E" opacity="0.14" />

  <!-- Botanical foliage -->
  <g opacity="0.25" transform="translate(60, 110)">
    <path d="M 0 160 C 90 60 180 30 260 0 C 220 80 180 180 80 220 Z" fill="#3B6922" />
  </g>
  <g opacity="0.25" transform="translate(640, 130) scale(-1, 1)">
    <path d="M 0 160 C 90 60 180 30 260 0 C 220 80 180 180 80 220 Z" fill="#507F1A" />
  </g>

  <!-- LEFT: Triphala Juice Bottle -->
  <g transform="translate(80, 130) scale(0.85)" filter="url(#hero-shadow)">
    <path d="M 180 140 L 220 140 L 220 115 L 280 115 L 280 140 L 320 140 C 345 140 365 160 365 190 L 365 420 C 365 440 345 455 320 455 L 180 455 C 155 455 135 440 135 420 L 135 190 C 135 160 155 140 180 140 Z" fill="#4B220B" />
    <rect x="212" y="70" width="76" height="52" rx="6" fill="url(#gold-metal)" />
    <rect x="210" y="122" width="80" height="18" rx="4" fill="#E8A344" />
    <rect x="145" y="200" width="210" height="205" rx="8" fill="#301406" stroke="#E8A344" stroke-width="2" />
    <text x="250" y="255" font-family="'Playfair Display', serif" font-size="11" font-weight="700" fill="#E8A344" text-anchor="middle">SHATAVARI</text>
    <text x="250" y="295" font-family="'Playfair Display', serif" font-size="16" font-weight="800" fill="#FFF" text-anchor="middle">TRIPHALA DETOX</text>
    <text x="250" y="315" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" fill="#EAD9BD" text-anchor="middle">Colon &amp; Digestion Care</text>
    <rect x="180" y="334" width="140" height="20" rx="10" fill="#E8A344" />
    <text x="250" y="348" font-family="'Plus Jakarta Sans', sans-serif" font-size="8.5" font-weight="700" fill="#1C1808" text-anchor="middle">500 ML • GUT CLEANSE</text>
  </g>

  <!-- RIGHT: Giloy & Papaya Juice Bottle -->
  <g transform="translate(370, 130) scale(0.85)" filter="url(#hero-shadow)">
    <path d="M 180 140 L 220 140 L 220 115 L 280 115 L 280 140 L 320 140 C 345 140 365 160 365 190 L 365 420 C 365 440 345 455 320 455 L 180 455 C 155 455 135 440 135 420 L 135 190 C 135 160 155 140 180 140 Z" fill="#244B15" />
    <rect x="212" y="70" width="76" height="52" rx="6" fill="url(#gold-metal)" />
    <rect x="210" y="122" width="80" height="18" rx="4" fill="#F59A23" />
    <rect x="145" y="200" width="210" height="205" rx="8" fill="#18360E" stroke="#F59A23" stroke-width="2" />
    <text x="250" y="255" font-family="'Playfair Display', serif" font-size="11" font-weight="700" fill="#F59A23" text-anchor="middle">SHATAVARI</text>
    <text x="250" y="295" font-family="'Playfair Display', serif" font-size="15" font-weight="800" fill="#FFF" text-anchor="middle">GILOY PAPAYA</text>
    <text x="250" y="315" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" fill="#EAD9BD" text-anchor="middle">Immunity &amp; Platelet Shield</text>
    <rect x="180" y="334" width="140" height="20" rx="10" fill="#F59A23" />
    <text x="250" y="348" font-family="'Plus Jakarta Sans', sans-serif" font-size="8.5" font-weight="700" fill="#1C1808" text-anchor="middle">500 ML • AMRITA TONIC</text>
  </g>

  <!-- CENTER FRONT: Wild Amla Juice -->
  <g transform="translate(195, 105) scale(1.05)" filter="url(#hero-shadow)">
    <path d="M 180 140 L 220 140 L 220 115 L 280 115 L 280 140 L 320 140 C 345 140 365 160 365 190 L 365 420 C 365 440 345 455 320 455 L 180 455 C 155 455 135 440 135 420 L 135 190 C 135 160 155 140 180 140 Z" fill="#375C11" />
    <rect x="212" y="70" width="76" height="52" rx="6" fill="url(#gold-metal)" stroke="#9A7010" stroke-width="2" />
    <rect x="210" y="122" width="80" height="18" rx="4" fill="#F5BE2C" />
    <rect x="145" y="200" width="210" height="205" rx="8" fill="#223C0A" stroke="#F5BE2C" stroke-width="2.5" />
    <circle cx="250" cy="235" r="18" fill="#F5BE2C" opacity="0.3" />
    <text x="250" y="258" font-family="'Playfair Display', serif" font-size="12" font-weight="700" fill="#F5BE2C" text-anchor="middle">SHATAVARI</text>
    <text x="250" y="270" font-family="'Plus Jakarta Sans', sans-serif" font-size="8" fill="#FFF" text-anchor="middle">AYURVEDIC</text>
    <line x1="180" y1="278" x2="320" y2="278" stroke="#F5BE2C" stroke-width="1.2" />
    <text x="250" y="303" font-family="'Playfair Display', serif" font-size="17" font-weight="800" fill="#FFF" text-anchor="middle">WILD AMLA JUICE</text>
    <text x="250" y="322" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" fill="#E8D7BF" text-anchor="middle">20x Vitamin C Concentration</text>
    <rect x="175" y="336" width="150" height="24" rx="12" fill="url(#gold-metal)" />
    <text x="250" y="352" font-family="'Plus Jakarta Sans', sans-serif" font-size="9" font-weight="800" fill="#1C1808" text-anchor="middle">COLD PRESSED • PURE</text>
    <text x="250" y="380" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="700" fill="#FFFFFF" text-anchor="middle">NET VOL: 500 ML</text>
  </g>

  <!-- Fresh Juice Seal Badge -->
  <g transform="translate(540, 440)">
    <circle cx="50" cy="50" r="46" fill="url(#gold-metal)" filter="url(#hero-shadow)" />
    <circle cx="50" cy="50" r="40" fill="#24450D" />
    <text x="50" y="44" font-family="'Playfair Display', serif" font-size="10" font-weight="800" fill="#F5BE2C" text-anchor="middle">COLD-PRESSED</text>
    <text x="50" y="58" font-family="'Plus Jakarta Sans', sans-serif" font-size="8" font-weight="700" fill="#FFF" text-anchor="middle">ZERO SUGAR</text>
    <text x="50" y="68" font-family="'Plus Jakarta Sans', sans-serif" font-size="7" fill="#E8D7BF" text-anchor="middle">100% HERBAL</text>
  </g>
</svg>`;

// Slide 3: Skincare Showcase (Kumkumadi Beauty Oil, Saffron Day Cream, Aloe Gel)
const skincareSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 600" width="100%" height="100%">
  <defs>
    <radialGradient id="skin-aura" cx="50%" cy="40%" r="60%">
      <stop offset="0%" stop-color="#FCEFD8" stop-opacity="0.9" />
      <stop offset="60%" stop-color="#F7DFB3" stop-opacity="0.35" />
      <stop offset="100%" stop-color="#FAF7F2" stop-opacity="0" />
    </radialGradient>
    <linearGradient id="gold-metal" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#D4AF37" />
      <stop offset="40%" stop-color="#FFF3A8" />
      <stop offset="80%" stop-color="#B8860B" />
      <stop offset="100%" stop-color="#8B6508" />
    </linearGradient>
    <filter id="hero-shadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="25" stdDeviation="20" flood-color="#2D1A08" flood-opacity="0.22" />
    </filter>
  </defs>

  <!-- Stage Podium -->
  <ellipse cx="350" cy="520" rx="300" ry="40" fill="url(#skin-aura)" />
  <ellipse cx="350" cy="525" rx="220" ry="22" fill="#3D200A" opacity="0.12" />

  <!-- Botanical foliage -->
  <g opacity="0.2" transform="translate(60, 110)">
    <path d="M 0 160 C 90 60 180 30 260 0 C 220 80 180 180 80 220 Z" fill="#994D12" />
  </g>
  <g opacity="0.2" transform="translate(640, 130) scale(-1, 1)">
    <path d="M 0 160 C 90 60 180 30 260 0 C 220 80 180 180 80 220 Z" fill="#C26A18" />
  </g>

  <!-- LEFT: Aloe Vera & Shatavari Gel Tub -->
  <g transform="translate(90, 160) scale(0.85)" filter="url(#hero-shadow)">
    <rect x="160" y="115" width="180" height="38" rx="8" fill="url(#gold-metal)" />
    <rect x="145" y="167" width="210" height="240" rx="18" fill="#1C653C" />
    <rect x="155" y="200" width="190" height="195" rx="8" fill="#0E3D22" stroke="#A8F2BE" stroke-width="2" />
    <text x="250" y="255" font-family="'Playfair Display', serif" font-size="11" font-weight="700" fill="#A8F2BE" text-anchor="middle">SHATAVARI</text>
    <text x="250" y="295" font-family="'Playfair Display', serif" font-size="15" font-weight="800" fill="#FFF" text-anchor="middle">ALOE &amp; SHATAVARI</text>
    <text x="250" y="315" font-family="'Plus Jakarta Sans', sans-serif" font-size="9" fill="#E8D7BF" text-anchor="middle">Multi-Benefit Soothing Gel</text>
    <rect x="175" y="332" width="150" height="22" rx="11" fill="#A8F2BE" />
    <text x="250" y="347" font-family="'Plus Jakarta Sans', sans-serif" font-size="8.5" font-weight="700" fill="#0E3D22" text-anchor="middle">99% PURE INNER LEAF</text>
  </g>

  <!-- RIGHT: Saffron & Sandalwood Radiance Cream Jar -->
  <g transform="translate(370, 160) scale(0.85)" filter="url(#hero-shadow)">
    <rect x="145" y="120" width="210" height="42" rx="10" fill="url(#gold-metal)" />
    <rect x="135" y="178" width="230" height="235" rx="20" fill="#FFF8ED" stroke="#ECC468" stroke-width="2" />
    <rect x="152" y="200" width="196" height="190" rx="10" fill="#4D2604" stroke="#ECC468" stroke-width="2.2" />
    <text x="250" y="255" font-family="'Playfair Display', serif" font-size="11" font-weight="700" fill="#ECC468" text-anchor="middle">SHATAVARI</text>
    <text x="250" y="295" font-family="'Playfair Display', serif" font-size="15" font-weight="800" fill="#FFF" text-anchor="middle">SAFFRON &amp; SANDAL</text>
    <text x="250" y="315" font-family="'Plus Jakarta Sans', sans-serif" font-size="9" fill="#E8D7BF" text-anchor="middle">Radiant Day Moisturizer</text>
    <rect x="175" y="330" width="150" height="22" rx="11" fill="url(#gold-metal)" />
    <text x="250" y="345" font-family="'Plus Jakarta Sans', sans-serif" font-size="8.5" font-weight="700" fill="#1C1808" text-anchor="middle">MYSORE SANDALWOOD</text>
  </g>

  <!-- CENTER FRONT: Kumkumadi Miraculous Beauty Oil -->
  <g transform="translate(200, 110) scale(1.05)" filter="url(#hero-shadow)">
    <!-- Dropper Bulb & Pipette -->
    <path d="M 238 65 C 238 52 242 45 250 45 C 258 45 262 52 262 65 L 260 85 L 240 85 Z" fill="#222222" />
    <rect x="232" y="85" width="36" height="40" rx="3" fill="url(#gold-metal)" />
    <rect x="226" y="125" width="48" height="15" rx="3" fill="#FFD700" />
    <!-- Body -->
    <path d="M 200 140 L 226 140 L 226 135 L 274 135 L 274 140 L 300 140 C 322 140 338 156 340 180 L 340 410 C 340 435 322 450 295 450 L 205 450 C 178 450 160 435 160 410 L 160 180 C 162 156 178 140 200 140 Z" fill="#C63F17" />
    <rect x="170" y="195" width="160" height="210" rx="6" fill="#260B03" stroke="#FFD700" stroke-width="2.2" />
    <circle cx="250" cy="228" r="16" fill="#FFD700" opacity="0.3" />
    <text x="250" y="252" font-family="'Playfair Display', serif" font-size="11" font-weight="700" fill="#FFD700" text-anchor="middle">SHATAVARI</text>
    <text x="250" y="263" font-family="'Plus Jakarta Sans', sans-serif" font-size="7.5" fill="#FFF" text-anchor="middle">AYURVEDIC</text>
    <line x1="190" y1="272" x2="310" y2="272" stroke="#FFD700" stroke-width="1.2" />
    <text x="250" y="295" font-family="'Playfair Display', serif" font-size="15" font-weight="800" fill="#FFF" text-anchor="middle">KUMKUMADI</text>
    <text x="250" y="312" font-family="'Plus Jakarta Sans', sans-serif" font-size="9" fill="#EAD9BD" text-anchor="middle">Miraculous Beauty Oil</text>
    <rect x="185" y="326" width="130" height="22" rx="11" fill="url(#gold-metal)" />
    <text x="250" y="341" font-family="'Plus Jakarta Sans', sans-serif" font-size="8.5" font-weight="700" fill="#1C1808" text-anchor="middle">KASHMIRI SAFFRON</text>
    <text x="250" y="366" font-family="'Plus Jakarta Sans', sans-serif" font-size="8" font-weight="600" fill="#FFD700" text-anchor="middle">26-HERB VEDIC ELIXIR</text>
    <text x="250" y="386" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="700" fill="#FFFFFF" text-anchor="middle">NET VOL: 30 ML</text>
  </g>

  <!-- Glowing Saffron Seal -->
  <g transform="translate(540, 440)">
    <circle cx="50" cy="50" r="46" fill="url(#gold-metal)" filter="url(#hero-shadow)" />
    <circle cx="50" cy="50" r="40" fill="#4A1806" />
    <text x="50" y="44" font-family="'Playfair Display', serif" font-size="10" font-weight="800" fill="#FFD700" text-anchor="middle">100% PURE</text>
    <text x="50" y="58" font-family="'Plus Jakarta Sans', sans-serif" font-size="8" font-weight="700" fill="#FFF" text-anchor="middle">RED SAFFRON</text>
    <text x="50" y="68" font-family="'Plus Jakarta Sans', sans-serif" font-size="7" fill="#E8D7BF" text-anchor="middle">RADIANT GLOW</text>
  </g>
</svg>`;

// Slide 4: Haircare Showcase (Bhringraj & Brahmi Hair Oil, Onion & Kalonji Shampoo)
const haircareSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 600" width="100%" height="100%">
  <defs>
    <radialGradient id="hair-aura" cx="50%" cy="40%" r="60%">
      <stop offset="0%" stop-color="#E1EEDF" stop-opacity="0.9" />
      <stop offset="60%" stop-color="#CEE2CC" stop-opacity="0.35" />
      <stop offset="100%" stop-color="#FAF7F2" stop-opacity="0" />
    </radialGradient>
    <linearGradient id="gold-metal" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#D4AF37" />
      <stop offset="40%" stop-color="#FFF3A8" />
      <stop offset="80%" stop-color="#B8860B" />
      <stop offset="100%" stop-color="#8B6508" />
    </linearGradient>
    <filter id="hero-shadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="25" stdDeviation="20" flood-color="#122416" flood-opacity="0.22" />
    </filter>
  </defs>

  <!-- Stage Podium -->
  <ellipse cx="350" cy="520" rx="300" ry="40" fill="url(#hair-aura)" />
  <ellipse cx="350" cy="525" rx="220" ry="22" fill="#152D1B" opacity="0.14" />

  <!-- Botanical foliage -->
  <g opacity="0.25" transform="translate(60, 110)">
    <path d="M 0 160 C 90 60 180 30 260 0 C 220 80 180 180 80 220 Z" fill="#1D4A27" />
  </g>
  <g opacity="0.25" transform="translate(640, 130) scale(-1, 1)">
    <path d="M 0 160 C 90 60 180 30 260 0 C 220 80 180 180 80 220 Z" fill="#285E34" />
  </g>

  <!-- LEFT: Onion & Kalonji Shampoo -->
  <g transform="translate(100, 120) scale(0.9)" filter="url(#hero-shadow)">
    <rect x="155" y="150" width="190" height="295" rx="25" fill="#4D1027" />
    <rect x="232" y="110" width="36" height="25" rx="3" fill="#242424" />
    <rect x="165" y="210" width="170" height="205" rx="8" fill="#300817" stroke="#F7A7C0" stroke-width="2" />
    <text x="250" y="260" font-family="'Playfair Display', serif" font-size="11" font-weight="700" fill="#F7A7C0" text-anchor="middle">SHATAVARI</text>
    <text x="250" y="300" font-family="'Playfair Display', serif" font-size="15" font-weight="800" fill="#FFF" text-anchor="middle">ONION &amp; KALONJI</text>
    <text x="250" y="320" font-family="'Plus Jakarta Sans', sans-serif" font-size="9" fill="#E8D7BF" text-anchor="middle">Revitalizing Shampoo</text>
    <rect x="180" y="338" width="140" height="22" rx="11" fill="#F7A7C0" />
    <text x="250" y="353" font-family="'Plus Jakarta Sans', sans-serif" font-size="8" font-weight="700" fill="#300817" text-anchor="middle">SULFATE &amp; PARABEN FREE</text>
  </g>

  <!-- RIGHT: Bhringraj & Brahmi Intensive Hair Oil -->
  <g transform="translate(340, 105) scale(1.05)" filter="url(#hero-shadow)">
    <rect x="155" y="150" width="190" height="295" rx="25" fill="#123D26" />
    <rect x="232" y="105" width="36" height="30" rx="4" fill="url(#gold-metal)" />
    <rect x="165" y="210" width="170" height="205" rx="8" fill="#0A1E13" stroke="#D4AF37" stroke-width="2.2" />
    <circle cx="250" cy="242" r="17" fill="#D4AF37" opacity="0.3" />
    <text x="250" y="266" font-family="'Playfair Display', serif" font-size="11" font-weight="700" fill="#D4AF37" text-anchor="middle">SHATAVARI</text>
    <text x="250" y="277" font-family="'Plus Jakarta Sans', sans-serif" font-size="7.5" fill="#FFF" text-anchor="middle">AYURVEDIC</text>
    <line x1="185" y1="285" x2="315" y2="285" stroke="#D4AF37" stroke-width="1.2" />
    <text x="250" y="306" font-family="'Playfair Display', serif" font-size="15" font-weight="800" fill="#FFF" text-anchor="middle">BHRINGRAJ OIL</text>
    <text x="250" y="324" font-family="'Plus Jakarta Sans', sans-serif" font-size="8.5" fill="#D6C4A5" text-anchor="middle">Root Strengthening Formula</text>
    <rect x="180" y="338" width="140" height="22" rx="11" fill="url(#gold-metal)" />
    <text x="250" y="353" font-family="'Plus Jakarta Sans', sans-serif" font-size="8" font-weight="700" fill="#1C1808" text-anchor="middle">INTENSIVE HAIR THERAPY</text>
    <text x="250" y="380" font-family="'Plus Jakarta Sans', sans-serif" font-size="8.5" font-weight="600" fill="#D4AF37" text-anchor="middle">ANTI-HAIRFALL &amp; REGROWTH</text>
    <text x="250" y="398" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="700" fill="#FFFFFF" text-anchor="middle">NET VOL: 200 ML</text>
  </g>

  <!-- Anti Hairfall Seal -->
  <g transform="translate(540, 440)">
    <circle cx="50" cy="50" r="46" fill="url(#gold-metal)" filter="url(#hero-shadow)" />
    <circle cx="50" cy="50" r="40" fill="#0C2516" />
    <text x="50" y="44" font-family="'Playfair Display', serif" font-size="10" font-weight="800" fill="#D4AF37" text-anchor="middle">ROOT THERAPY</text>
    <text x="50" y="58" font-family="'Plus Jakarta Sans', sans-serif" font-size="8" font-weight="700" fill="#FFF" text-anchor="middle">BHRINGRAJ</text>
    <text x="50" y="68" font-family="'Plus Jakarta Sans', sans-serif" font-size="7" fill="#E8D7BF" text-anchor="middle">ANTI-HAIRFALL</text>
  </g>
</svg>`;

const bannersDir = path.join(process.cwd(), 'src', 'assets', 'banners');
fs.writeFileSync(path.join(bannersDir, 'hero-juices.svg'), juicesSvg);
fs.writeFileSync(path.join(bannersDir, 'hero-skincare.svg'), skincareSvg);
fs.writeFileSync(path.join(bannersDir, 'hero-haircare.svg'), haircareSvg);

console.log('Generated dynamic hero banner SVGs successfully.');
