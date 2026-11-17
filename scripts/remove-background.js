import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

async function removeBackgroundFloodFill(inputPath, outputPath, threshold = 240) {
  const image = sharp(inputPath);
  const { data, info } = await image.ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;

  // Visited array for flood fill
  const visited = new Uint8Array(width * height);
  const queue = [];

  // Helper to get index
  const getIndex = (x, y) => (y * width + x);

  // Helper to check if pixel is near-white / background
  const isBackground = (x, y) => {
    const idx = (y * width + x) * channels;
    const r = data[idx];
    const g = data[idx + 1];
    const b = data[idx + 2];
    return r >= threshold && g >= threshold && b >= threshold;
  };

  // Seed flood fill from all 4 borders
  for (let x = 0; x < width; x++) {
    if (isBackground(x, 0)) {
      queue.push([x, 0]);
      visited[getIndex(x, 0)] = 1;
    }
    if (isBackground(x, height - 1)) {
      queue.push([x, height - 1]);
      visited[getIndex(x, height - 1)] = 1;
    }
  }
  for (let y = 0; y < height; y++) {
    if (isBackground(0, y)) {
      queue.push([0, y]);
      visited[getIndex(0, y)] = 1;
    }
    if (isBackground(width - 1, y)) {
      queue.push([width - 1, y]);
      visited[getIndex(width - 1, y)] = 1;
    }
  }

  // BFS Flood Fill from exterior borders inwards
  let head = 0;
  while (head < queue.length) {
    const [cx, cy] = queue[head++];

    const neighbors = [
      [cx + 1, cy],
      [cx - 1, cy],
      [cx, cy + 1],
      [cx, cy - 1]
    ];

    for (const [nx, ny] of neighbors) {
      if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
        const nIdx = getIndex(nx, ny);
        if (!visited[nIdx] && isBackground(nx, ny)) {
          visited[nIdx] = 1;
          queue.push([nx, ny]);
        }
      }
    }
  }

  // Set alpha to 0 for all background pixels with smooth feathering
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) * channels;
      const vIdx = getIndex(x, y);

      if (visited[vIdx]) {
        const r = data[idx];
        const g = data[idx + 1];
        const b = data[idx + 2];
        const brightness = (r + g + b) / 3;

        if (brightness >= 248) {
          data[idx + 3] = 0; // Fully transparent
        } else {
          // Feather edge between 240 and 248
          const alpha = Math.max(0, Math.min(255, Math.round(((248 - brightness) / 8) * 255)));
          data[idx + 3] = alpha;
        }
      }
    }
  }

  await sharp(data, {
    raw: {
      width,
      height,
      channels
    }
  })
    .png()
    .toFile(outputPath);

  console.log(`Saved transparent PNG: ${outputPath}`);
}

async function processAll() {
  const banners = [
    { in: 'src/assets/banners/product-haircare-nobg.jpg', out: 'src/assets/banners/product-haircare-transparent.png', th: 236 },
    { in: 'src/assets/banners/product-skincare-nobg.jpg', out: 'src/assets/banners/product-skincare-transparent.png', th: 236 },
    { in: 'src/assets/banners/product-rasayana-nobg.jpg', out: 'src/assets/banners/product-rasayana-transparent.png', th: 236 },
    { in: 'src/assets/banners/product-juices-nobg.jpg', out: 'src/assets/banners/product-juices-transparent.png', th: 236 }
  ];

  for (const b of banners) {
    if (fs.existsSync(b.in)) {
      await removeBackgroundFloodFill(b.in, b.out, b.th);
    }
  }
}

processAll();
