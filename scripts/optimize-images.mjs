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
  // About page portrait.
  me: "assets/images/me.jpeg",
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

// Portrait and David's reaction: 16 transparent frames of one render
// (assets/images/statue_animation_frames/1..16.webp, lossless, aligned to each
// other and already cropped to the framing of the original statue.png, so
// the swap from photo to frames is seamless). Frame 1 is the portrait; frames
// 3-16 play once his bubble comes off (frame 2, the bubble leaving his lips,
// is skipped: the hero's own bubble does that). Transparency is kept.
const framesDir = path.join(root, "assets/images/statue_animation_frames");
const PORTRAIT = { width: 500, height: 501 };
const REACTION_FRAMES = Array.from({ length: 14 }, (_, i) => i + 3);

async function statueFrame(n, name) {
  const frame = await sharp(path.join(framesDir, `${n}.webp`))
    .resize(PORTRAIT.width, PORTRAIT.height, { fit: "fill" })
    .png()
    .toBuffer();
  await encode(frame, name, [320, 500], true);
  manifest[name] = { ...PORTRAIT, widths: [320, 500] };
}

await statueFrame(1, "statue");
for (const n of REACTION_FRAMES) await statueFrame(n, `statue-react-${n}`);

// Company logos for /experience, in their own colors on a transparent
// background, plus a "-dark" version for the dark theme. Raster logos are one
// brand ink on a flat background: each pixel's distance from the background
// becomes opacity and its color is set to the ink. SVGs keep their own
// transparency. In the dark version near-black ink turns to the dark theme's
// text color and dim colors are lightened (same hue) until they read on the
// dark page; colors that already read are left alone.
const logos = {
  "logo-presidio": { file: "assets/images/company logos/presidio.jpg", ink: "#006a9a" },
  // Thin linework at its small size needs more lift to read on the dark page.
  "logo-crafted-with-love": { file: "assets/images/company logos/craftedwithlove.jpeg", ink: "#1f7472", darkLum: 0.32 },
  "logo-openweaver": { file: "assets/images/company logos/openweaver.svg" },
};
const LOGO_H = 120;
const DARK_TEXT = [0xec, 0xe9, 0xe4]; // --color-fg (dark)
const DARK_MIN_LUM = 0.2; // ~4.5:1 against the dark --color-bg

const hex = (h) => [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16));
const lum = ([r, g, b]) => {
  const c = (v) => ((v /= 255) <= 0.04045 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4);
  return 0.2126 * c(r) + 0.7152 * c(g) + 0.0722 * c(b);
};
const toHsl = ([r, g, b]) => {
  (r /= 255), (g /= 255), (b /= 255);
  const max = Math.max(r, g, b), min = Math.min(r, g, b), l = (max + min) / 2, d = max - min;
  if (!d) return [0, 0, l];
  const s = d / (1 - Math.abs(2 * l - 1));
  const h = max === r ? ((g - b) / d) % 6 : max === g ? (b - r) / d + 2 : (r - g) / d + 4;
  return [h * 60, s, l];
};
const fromHsl = ([h, s, l]) => {
  const c = (1 - Math.abs(2 * l - 1)) * s, x = c * (1 - Math.abs(((h / 60) % 2) - 1)), m = l - c / 2;
  const [r, g, b] = h < 60 ? [c, x, 0] : h < 120 ? [x, c, 0] : h < 180 ? [0, c, x] : h < 240 ? [0, x, c] : h < 300 ? [x, 0, c] : [c, 0, x];
  return [r, g, b].map((v) => Math.round((v + m) * 255));
};
const forDark = (rgb, minLum = DARK_MIN_LUM) => {
  const [h, s, l] = toHsl(rgb);
  // Near-black (judged by chroma: HSL saturation is unstable this dark).
  if (Math.max(...rgb) - Math.min(...rgb) < 40 && l < 0.35) return DARK_TEXT;
  if (lum(rgb) >= minLum) return rgb;
  let lo = l, hi = 1;
  for (let i = 0; i < 20; i++) {
    const mid = (lo + hi) / 2;
    lum(fromHsl([h, s, mid])) < minLum ? (lo = mid) : (hi = mid);
  }
  return fromHsl([h, s, hi]);
};

for (const [name, { file, ink, darkLum }] of Object.entries(logos)) {
  const src = path.join(root, file);
  let rgba, W, H;
  if (ink) {
    const { data, info } = await sharp(src).removeAlpha().raw().toBuffer({ resolveWithObject: true });
    (W = info.width), (H = info.height);
    // Background: the most common color.
    const counts = new Map();
    for (let i = 0; i < data.length; i += 3) {
      const k = (data[i] << 16) | (data[i + 1] << 8) | data[i + 2];
      counts.set(k, (counts.get(k) || 0) + 1);
    }
    const k = [...counts].sort((a, b) => b[1] - a[1])[0][0];
    const bg = [k >> 16, (k >> 8) & 255, k & 255];
    const fg = hex(ink);
    const span = Math.hypot(...fg.map((v, j) => v - bg[j]));
    rgba = Buffer.alloc(W * H * 4);
    for (let i = 0, o = 0; i < data.length; i += 3, o += 4) {
      const d = Math.hypot(data[i] - bg[0], data[i + 1] - bg[1], data[i + 2] - bg[2]);
      const a = Math.min(1, Math.max(0, (d - 8) / (span - 8)));
      rgba[o] = fg[0], rgba[o + 1] = fg[1], rgba[o + 2] = fg[2], rgba[o + 3] = Math.round(a * 255);
    }
  } else {
    const { data, info } = await sharp(src, { density: 400 }).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
    (W = info.width), (H = info.height), (rgba = data);
  }
  // Trim to the mark.
  let x0 = W, y0 = H, x1 = 0, y1 = 0;
  for (let i = 0; i < W * H; i++) {
    if (rgba[i * 4 + 3] > 8) {
      const x = i % W, y = (i / W) | 0;
      x0 = Math.min(x0, x), x1 = Math.max(x1, x), y0 = Math.min(y0, y), y1 = Math.max(y1, y);
    }
  }
  const { data: px, info } = await sharp(rgba, { raw: { width: W, height: H, channels: 4 } })
    .extract({ left: x0, top: y0, width: x1 - x0 + 1, height: y1 - y0 + 1 })
    .resize({ height: LOGO_H })
    .raw()
    .toBuffer({ resolveWithObject: true });
  const dark = Buffer.from(px);
  const memo = new Map();
  for (let o = 0; o < dark.length; o += 4) {
    if (!dark[o + 3]) continue;
    const key = (dark[o] << 16) | (dark[o + 1] << 8) | dark[o + 2];
    if (!memo.has(key)) memo.set(key, forDark([dark[o], dark[o + 1], dark[o + 2]], darkLum));
    [dark[o], dark[o + 1], dark[o + 2]] = memo.get(key);
  }
  const raw = { raw: { width: info.width, height: info.height, channels: 4 } };
  for (const [suffix, buf] of [["", px], ["-dark", dark]]) {
    await sharp(buf, raw).png({ compressionLevel: 9 }).toFile(path.join(outDir, `${name}${suffix}.png`));
  }
  manifest[name] = { width: info.width, height: info.height };
  console.log(name, `${info.width}x${info.height}`);
}

// Tech marks for components/TechList.jsx, cut from logo lockups and made
// one-colour (drawn as a CSS mask in the list's text color, like the
// react-icons beside them). `alpha` maps each pixel to opacity; `region`
// keeps only the mark (as a fraction of the image width). Square, 96px.
const dist = (r, g, b, [R, G, B]) => Math.hypot(r - R, g - G, b - B);
const ramp = (d, solid, clear) => Math.min(1, Math.max(0, (clear - d) / (clear - solid)));
const techMarks = {
  // Light blue disc with the train knocked out.
  "mark-litellm": {
    file: "assets/images/company logos/litellm.png",
    region: 0.3,
    alpha: (r, g, b) => ramp(dist(r, g, b, [137, 207, 235]), 30, 90),
  },
  // Red square with the lettering knocked out.
  "mark-modelizeit": {
    file: "assets/images/company logos/modelizeit_inc_logo.jpeg",
    region: 1,
    alpha: (r, g, b) => ramp(dist(r, g, b, [237, 28, 36]), 40, 120),
  },
  // The round OpenWeaver mark, its two pinks kept as two tones.
  "mark-openweaver-studio": {
    file: "assets/images/company logos/open-weaver-studio.webp",
    region: 0.15,
    alpha: (r, g, b) => ramp(255 - (r * 0.3 + g * 0.59 + b * 0.11), 150, 8),
  },
};
const MARK = 96;

for (const [name, { file, region, alpha }] of Object.entries(techMarks)) {
  const { data, info } = await sharp(path.join(root, file))
    .flatten({ background: "#ffffff" })
    .raw()
    .toBuffer({ resolveWithObject: true });
  const W = info.width, H = info.height, C = info.channels, maxX = Math.round(W * region);
  const rgba = Buffer.alloc(W * H * 4);
  let x0 = W, y0 = H, x1 = 0, y1 = 0;
  for (let y = 0; y < H; y++) {
    for (let x = 0; x < maxX; x++) {
      const i = (y * W + x) * C;
      const a = Math.round(alpha(data[i], data[i + 1], data[i + 2]) * 255);
      rgba[(y * W + x) * 4 + 3] = a;
      if (a > 8) (x0 = Math.min(x0, x)), (x1 = Math.max(x1, x)), (y0 = Math.min(y0, y)), (y1 = Math.max(y1, y));
    }
  }
  const w = x1 - x0 + 1, h = y1 - y0 + 1, side = Math.max(w, h);
  await sharp(rgba, { raw: { width: W, height: H, channels: 4 } })
    .extract({ left: x0, top: y0, width: w, height: h })
    .extend({
      top: Math.floor((side - h) / 2),
      bottom: Math.ceil((side - h) / 2),
      left: Math.floor((side - w) / 2),
      right: Math.ceil((side - w) / 2),
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .resize(MARK, MARK)
    .png({ compressionLevel: 9 })
    .toFile(path.join(outDir, `${name}.png`));
  manifest[name] = { width: MARK, height: MARK };
  console.log(name, `${w}x${h} -> ${MARK}px`);
}

await fs.writeFile(
  path.join(root, "data/images.json"),
  JSON.stringify(manifest, null, 2) + "\n"
);
console.log("wrote", Object.keys(manifest).length, "images");
