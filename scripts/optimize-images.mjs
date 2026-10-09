// One-off image pipeline: node scripts/optimize-images.mjs
//
// Project screenshots ship with a decorative gradient frame around the app
// window. This crops to the window (found as the outermost long, sharp edges;
// the smooth gradient frame has none),
// then writes AVIF + WebP at two widths to public/images/opt, plus a manifest
// with intrinsic sizes so <img> tags can reserve space (no layout shift).

import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const outDir = path.join(root, "public/images/opt");

const screenshots = [
  "tangled",
  "xrp-commerce",
  "back-to-the-future",
  "back-to-the-future2",
  "gpt-learn2",
  "own-your-tune",
  "licet-map",
  "weather-css",
];

const WIDTHS = [720, 1280];

// Featured project images (assets/, not served): already tight, so no crop.
const photos = {
  "ens-drive": "assets/images/project pics/ens drive.jpg",
  perjury: "assets/images/project pics/perjury.jpg",
  snapads: "assets/images/project pics/snapads.jpg",
  swapyoursuiiii: "assets/images/project pics/swapyoursuiiii.jpeg",
  "token-defense": "assets/images/project pics/token defense.png",
  squidchain: "assets/images/project pics/squidchain.png",
  citycash: "assets/images/project pics/city cash.png",
  "whisper-network": "assets/images/project pics/whisper network.jpg",
  "chennai-connects": "assets/images/project pics/chennai connects.png",
  castai: "assets/images/project pics/cast-ai.png",
};

// Where the app's own background is too close to the frame for edge
// detection, use the window geometry shared by the other screenshots.
const cropOverrides = {
  "weather-css": { left: 150, top: 225, width: 1200, height: 673 },
};

async function findWindow(file) {
  const W = 600;
  const img = sharp(file).removeAlpha().greyscale();
  const { width, height } = await img.metadata();
  const H = Math.round((W * height) / width);
  const px = await img.resize(W, H).raw().toBuffer();
  const at = (x, y) => px[y * W + x];

  // The gradient frame is smooth; the window bezel is a long, sharp edge.
  // Count strong edges per column (vertical edges) and per row.
  const cols = new Array(W).fill(0);
  const rows = new Array(H).fill(0);
  for (let y = 1; y < H - 1; y++) {
    for (let x = 1; x < W - 1; x++) {
      if (Math.abs(at(x + 1, y) - at(x - 1, y)) > 24) cols[x]++;
      if (Math.abs(at(x, y + 1) - at(x, y - 1)) > 24) rows[y]++;
    }
  }
  const span = (arr, len) => {
    const min = len * 0.3;
    const first = arr.findIndex((v) => v > min);
    const last = arr.length - 1 - [...arr].reverse().findIndex((v) => v > min);
    return [first, last];
  };
  const [ex0, ex1] = span(cols, H);
  const [ey0, ey1] = span(rows, W);
  // Step inside the bezel and its rounded corners.
  const inset = Math.round(Math.min(ex1 - ex0, ey1 - ey0) * 0.015) + 4;
  const s = width / W;
  return {
    left: Math.round((ex0 + inset) * s),
    top: Math.round((ey0 + inset) * s),
    width: Math.round((ex1 - ex0 - inset * 2) * s),
    height: Math.round((ey1 - ey0 - inset * 2) * s),
  };
}

async function encode(input, name, widths, alpha = false) {
  const meta = await sharp(input).metadata();
  const out = {};
  for (const w of widths) {
    const width = Math.min(w, meta.width);
    const base = sharp(input).resize({ width, withoutEnlargement: true });
    await base.clone().avif({ quality: 55, effort: 6 }).toFile(path.join(outDir, `${name}-${w}.avif`));
    await base
      .clone()
      .webp({ quality: 78, alphaQuality: alpha ? 90 : 100 })
      .toFile(path.join(outDir, `${name}-${w}.webp`));
  }
  out.width = meta.width;
  out.height = meta.height;
  return out;
}

await fs.mkdir(outDir, { recursive: true });
const manifest = {};

for (const name of screenshots) {
  const file = path.join(root, "public/images", `${name}.png`);
  const crop = cropOverrides[name] ?? (await findWindow(file));
  const cropped = await sharp(file).extract(crop).toBuffer();
  const { width, height } = await encode(cropped, name, WIDTHS);
  manifest[name] = { width, height, widths: WIDTHS };
  console.log(name, crop);
}

for (const [name, file] of Object.entries(photos)) {
  const { width, height } = await encode(path.join(root, file), name, WIDTHS);
  manifest[name] = { width, height, widths: WIDTHS };
  console.log(name, `${width}x${height}`);
}

// Portrait: keep transparency.
const portrait = await encode(path.join(root, "public/statue.png"), "statue", [320, 500], true);
manifest.statue = { ...portrait, widths: [320, 500] };

await fs.writeFile(
  path.join(root, "data/images.json"),
  JSON.stringify(manifest, null, 2) + "\n"
);
console.log("wrote", Object.keys(manifest).length, "images");
