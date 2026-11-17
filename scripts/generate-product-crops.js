import sharp from 'sharp';
import path from 'path';

const srcDir = 'c:/Users/bashe/OneDrive/Desktop/setavara/src/assets';
const bannersDir = path.join(srcDir, 'banners');
const productsDir = path.join(srcDir, 'products');
const categoriesDir = path.join(srcDir, 'categories');

async function processImages() {
  console.log('Generating product crops...');

  // 1. Wild Amla Juice / Green Herbal Bottle from hero-juices.jpg
  // hero-juices has 2 bottles: left is amber Shatavari, right is green Amla (around x: 550..1200)
  const juicesMeta = await sharp(path.join(bannersDir, 'hero-juices.jpg')).metadata();
  console.log('juices dimensions:', juicesMeta.width, juicesMeta.height);

  // Crop green bottle (Wild Amla juice)
  // Let's crop centered around right bottle: x from ~35% to 85%, full height
  const amlaCropWidth = Math.round(juicesMeta.height * 0.95);
  const amlaCropLeft = Math.round(juicesMeta.width * 0.42);
  await sharp(path.join(bannersDir, 'hero-juices.jpg'))
    .extract({
      left: Math.min(amlaCropLeft, juicesMeta.width - amlaCropWidth),
      top: 0,
      width: amlaCropWidth,
      height: juicesMeta.height
    })
    .resize(800, 800)
    .toFile(path.join(productsDir, 'amla-nectar.png'));

  // Also giloy juice from that same green bottle
  await sharp(path.join(bannersDir, 'hero-juices.jpg'))
    .extract({
      left: Math.min(amlaCropLeft, juicesMeta.width - amlaCropWidth),
      top: 0,
      width: amlaCropWidth,
      height: juicesMeta.height
    })
    .resize(800, 800)
    .toFile(path.join(productsDir, 'giloy-juice.png'));

  // 2. Skincare Cream Jar from hero-skincare.jpg
  // Left is dropper, right is amber jar (x: ~40% to ~85%)
  const skincareMeta = await sharp(path.join(bannersDir, 'hero-skincare.jpg')).metadata();
  console.log('skincare dimensions:', skincareMeta.width, skincareMeta.height);

  const jarCropWidth = Math.round(skincareMeta.height * 0.95);
  const jarCropLeft = Math.round(skincareMeta.width * 0.38);
  await sharp(path.join(bannersDir, 'hero-skincare.jpg'))
    .extract({
      left: Math.min(jarCropLeft, skincareMeta.width - jarCropWidth),
      top: 0,
      width: jarCropWidth,
      height: skincareMeta.height
    })
    .resize(800, 800)
    .toFile(path.join(productsDir, 'saffron-moisturizer.png'));

  await sharp(path.join(bannersDir, 'hero-skincare.jpg'))
    .extract({
      left: Math.min(jarCropLeft, skincareMeta.width - jarCropWidth),
      top: 0,
      width: jarCropWidth,
      height: skincareMeta.height
    })
    .resize(800, 800)
    .toFile(path.join(productsDir, 'aloe-shatavari-gel.png'));

  // 3. Tonic Elixir & Jar from hero-rasayana.jpg
  const rasayanaMeta = await sharp(path.join(bannersDir, 'hero-rasayana.jpg')).metadata();
  console.log('rasayana dimensions:', rasayanaMeta.width, rasayanaMeta.height);

  // Jar for Ashwagandha Churna & Shilajit Resin
  const rasJarWidth = Math.round(rasayanaMeta.height * 0.95);
  const rasJarLeft = Math.round(rasayanaMeta.width * 0.1);
  await sharp(path.join(bannersDir, 'hero-rasayana.jpg'))
    .extract({
      left: rasJarLeft,
      top: 0,
      width: rasJarWidth,
      height: rasayanaMeta.height
    })
    .resize(800, 800)
    .toFile(path.join(productsDir, 'ashwagandha-churna.png'));

  await sharp(path.join(bannersDir, 'hero-rasayana.jpg'))
    .extract({
      left: rasJarLeft,
      top: 0,
      width: rasJarWidth,
      height: rasayanaMeta.height
    })
    .resize(800, 800)
    .toFile(path.join(productsDir, 'shilajit-resin.png'));

  await sharp(path.join(bannersDir, 'hero-rasayana.jpg'))
    .extract({
      left: rasJarLeft,
      top: 0,
      width: rasJarWidth,
      height: rasayanaMeta.height
    })
    .resize(800, 800)
    .toFile(path.join(productsDir, 'turmeric-latte.png'));

  await sharp(path.join(bannersDir, 'hero-rasayana.jpg'))
    .extract({
      left: rasJarLeft,
      top: 0,
      width: rasJarWidth,
      height: rasayanaMeta.height
    })
    .resize(800, 800)
    .toFile(path.join(productsDir, 'brahmi-tablets.png'));

  // Tonic spray bottle for Hormone Balance & Neem Tulsi cleanser
  const tonicCropWidth = Math.round(rasayanaMeta.height * 0.95);
  const tonicCropLeft = Math.round(rasayanaMeta.width * 0.35);
  await sharp(path.join(bannersDir, 'hero-rasayana.jpg'))
    .extract({
      left: Math.min(tonicCropLeft, rasayanaMeta.width - tonicCropWidth),
      top: 0,
      width: tonicCropWidth,
      height: rasayanaMeta.height
    })
    .resize(800, 800)
    .toFile(path.join(productsDir, 'hormone-balance.png'));

  await sharp(path.join(bannersDir, 'hero-rasayana.jpg'))
    .extract({
      left: Math.min(tonicCropLeft, rasayanaMeta.width - tonicCropWidth),
      top: 0,
      width: tonicCropWidth,
      height: rasayanaMeta.height
    })
    .resize(800, 800)
    .toFile(path.join(productsDir, 'neem-tulsi-cleanser.png'));

  // Hair care shampoo from hero-haircare.jpg
  const haircareMeta = await sharp(path.join(bannersDir, 'hero-haircare.jpg')).metadata();
  const hairCropWidth = Math.round(haircareMeta.height * 0.95);
  const hairCropLeft = Math.round((haircareMeta.width - hairCropWidth) / 2);
  await sharp(path.join(bannersDir, 'hero-haircare.jpg'))
    .extract({
      left: hairCropLeft,
      top: 0,
      width: hairCropWidth,
      height: haircareMeta.height
    })
    .resize(800, 800)
    .toFile(path.join(productsDir, 'onion-shampoo.png'));

  // 4. Also generate circular/square images for Categories!
  // Category 1: Ayurvedic Wellness -> shatavari-kalpa
  await sharp(path.join(productsDir, 'shatavari-kalpa.png'))
    .resize(400, 400)
    .toFile(path.join(categoriesDir, 'cat-ayurvedic-wellness.png'));

  // Category 2: Herbal Juices -> shatavari-juice
  await sharp(path.join(productsDir, 'shatavari-juice.png'))
    .resize(400, 400)
    .toFile(path.join(categoriesDir, 'cat-herbal-juices.png'));

  // Category 3: Natural Skincare -> kumkumadi-oil
  await sharp(path.join(productsDir, 'kumkumadi-oil.png'))
    .resize(400, 400)
    .toFile(path.join(categoriesDir, 'cat-natural-skincare.png'));

  // Category 4: Hair Care -> bhringraj-oil
  await sharp(path.join(productsDir, 'bhringraj-oil.png'))
    .resize(400, 400)
    .toFile(path.join(categoriesDir, 'cat-hair-care.png'));

  // Category 5: Daily Wellness -> aloe-shatavari-gel or tonic
  await sharp(path.join(productsDir, 'saffron-moisturizer.png'))
    .resize(400, 400)
    .toFile(path.join(categoriesDir, 'cat-daily-wellness.png'));

  // Category 6: Herbal Supplements -> triphala-juice
  await sharp(path.join(productsDir, 'triphala-juice.png'))
    .resize(400, 400)
    .toFile(path.join(categoriesDir, 'cat-herbal-supplements.png'));

  console.log('All crops created successfully!');
}

processImages().catch(console.error);
