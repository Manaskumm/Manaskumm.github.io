const sharp = require('sharp');
const path = require('path');

const outputPath = path.join(__dirname, 'public', 'assets', 'images', 'manas-logo.png');
const srcPath = 'C:\\Users\\Manas\\.gemini\\antigravity\\brain\\54afb84a-6e3f-498c-88fe-6c2d1107b4a0\\manas_minecraft_logo_1777157685391.png';

async function removeCheckerboard() {
  const image = sharp(srcPath);
  const metadata = await image.metadata();
  const { width, height } = metadata;

  const { data, info } = await image
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const channels = 4; // ensureAlpha guarantees 4
  const newData = Buffer.from(data);

  // First pass: identify the two checkerboard colors by sampling corners
  // The corners should always be background
  const samplePixels = [];
  for (let y = 0; y < 20; y++) {
    for (let x = 0; x < 20; x++) {
      const idx = (y * width + x) * channels;
      samplePixels.push({ r: data[idx], g: data[idx+1], b: data[idx+2] });
    }
  }
  
  // Find unique colors in corner sample
  const colorCounts = {};
  samplePixels.forEach(p => {
    const key = `${p.r},${p.g},${p.b}`;
    colorCounts[key] = (colorCounts[key] || 0) + 1;
  });
  
  // Get the two most common colors (these are the checkerboard colors)
  const sorted = Object.entries(colorCounts).sort((a, b) => b[1] - a[1]);
  console.log('Most common corner colors:', sorted.slice(0, 5));
  
  const bgColors = sorted.slice(0, 2).map(([key]) => {
    const [r, g, b] = key.split(',').map(Number);
    return { r, g, b };
  });
  
  console.log('Background colors detected:', bgColors);

  // Second pass: remove any pixel that closely matches either background color
  const tolerance = 15;
  
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) * channels;
      const r = data[idx];
      const g = data[idx + 1];
      const b = data[idx + 2];

      // Check if this pixel matches either background color
      let isBg = false;
      for (const bg of bgColors) {
        if (Math.abs(r - bg.r) <= tolerance && 
            Math.abs(g - bg.g) <= tolerance && 
            Math.abs(b - bg.b) <= tolerance) {
          isBg = true;
          break;
        }
      }

      if (isBg) {
        newData[idx + 3] = 0; // Make transparent
      }
    }
  }

  await sharp(newData, { raw: { width, height, channels: 4 } })
    .png()
    .toFile(outputPath);

  console.log('Done! Saved to', outputPath);
}

removeCheckerboard().catch(console.error);
