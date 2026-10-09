// Favicon set from the bubble mark: node scripts/make-icons.mjs
// Writes app/icon.svg, app/apple-icon.png and app/favicon.ico (16/32/48).

import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");

const bubble = (bg) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <defs>
    <radialGradient id="b" cx="0.34" cy="0.3" r="0.75">
      <stop offset="0" stop-color="#ffe0ef"/>
      <stop offset="0.42" stop-color="#ff8fc4"/>
      <stop offset="1" stop-color="#d94f93"/>
    </radialGradient>
  </defs>
  ${bg ? `<rect width="64" height="64" fill="${bg}"/>` : ""}
  <circle cx="32" cy="32" r="${bg ? 20 : 28}" fill="url(#b)"/>
</svg>
`;

// Browsers tab icon: transparent background.
await fs.writeFile(path.join(root, "app/icon.svg"), bubble());

// Apple touch icon: opaque ink background, as iOS fills transparency.
await sharp(Buffer.from(bubble("#0f0f12")))
  .resize(180, 180)
  .png()
  .toFile(path.join(root, "app/apple-icon.png"));

// ICO containing PNG-encoded images (supported by all current browsers).
const sizes = [16, 32, 48];
const pngs = await Promise.all(
  sizes.map((s) => sharp(Buffer.from(bubble()), { density: 384 }).resize(s, s).png().toBuffer())
);
const header = Buffer.alloc(6);
header.writeUInt16LE(0, 0);
header.writeUInt16LE(1, 2);
header.writeUInt16LE(sizes.length, 4);
let offset = 6 + 16 * sizes.length;
const entries = pngs.map((png, i) => {
  const e = Buffer.alloc(16);
  e.writeUInt8(sizes[i], 0);
  e.writeUInt8(sizes[i], 1);
  e.writeUInt8(0, 2);
  e.writeUInt8(0, 3);
  e.writeUInt16LE(1, 4);
  e.writeUInt16LE(32, 6);
  e.writeUInt32LE(png.length, 8);
  e.writeUInt32LE(offset, 12);
  offset += png.length;
  return e;
});
await fs.writeFile(path.join(root, "app/favicon.ico"), Buffer.concat([header, ...entries, ...pngs]));
console.log("icons written");
