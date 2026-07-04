// Genera le OG image dedicate (1200x630) per gli articoli /risorse.
// Template brandizzato Diamanti: sfondo navy, accento oro, titolo + logo.
// Uso: node scripts/generate-og.mjs
import sharp from 'sharp';
import { readFileSync, mkdirSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const OUT_DIR = join(ROOT, 'public', 'og');
const LOGO = join(ROOT, 'public', 'logo-diamanti.png');

const W = 1200;
const H = 630;

// Palette Diamanti
const NAVY = '#061629';
const NAVY_2 = '#0b2b5b';
const GOLD = '#ae9166';
const BLUE = '#7ba6e4';

function escapeXml(s) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

// Wrap del testo su piu' righe stimando la larghezza per carattere.
function wrapText(text, maxChars) {
  const words = text.split(/\s+/);
  const lines = [];
  let cur = '';
  for (const w of words) {
    const test = cur ? cur + ' ' + w : w;
    if (test.length > maxChars && cur) {
      lines.push(cur);
      cur = w;
    } else {
      cur = test;
    }
  }
  if (cur) lines.push(cur);
  return lines;
}

function buildSvg({ title, category }) {
  // Dimensiona il font in base al numero di righe per restare leggibile.
  const maxChars = 26;
  let lines = wrapText(title, maxChars);
  let fontSize = 60;
  let lineHeight = 74;
  if (lines.length > 4) {
    fontSize = 50;
    lineHeight = 62;
    lines = wrapText(title, 32);
  }
  const blockHeight = lines.length * lineHeight;
  // Blocco testo verticalmente centrato nell'area utile (sotto categoria, sopra footer).
  const startY = 250 + (250 - blockHeight) / 2 + fontSize * 0.4;

  const tspans = lines
    .map(
      (ln, i) =>
        `<tspan x="90" y="${Math.round(startY + i * lineHeight)}">${escapeXml(ln)}</tspan>`,
    )
    .join('');

  const cat = category ? escapeXml(category.toUpperCase()) : '';

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${NAVY}"/>
      <stop offset="70%" stop-color="${NAVY}"/>
      <stop offset="100%" stop-color="${NAVY_2}"/>
    </linearGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <!-- barra accento oro a sinistra -->
  <rect x="0" y="0" width="10" height="${H}" fill="${GOLD}"/>
  <!-- linea sottile oro sopra il footer -->
  <rect x="90" y="540" width="1020" height="2" fill="${GOLD}" opacity="0.55"/>
  <!-- categoria -->
  <text x="90" y="180" font-family="Inter, sans-serif" font-size="24" font-weight="700" letter-spacing="4" fill="${BLUE}">${cat}</text>
  <!-- titolo -->
  <text font-family="Inter, sans-serif" font-size="${fontSize}" font-weight="800" fill="#ffffff" style="line-height:${lineHeight}px">${tspans}</text>
  <!-- footer dominio -->
  <text x="90" y="585" font-family="Inter, sans-serif" font-size="26" font-weight="700" fill="#ffffff" opacity="0.92">diamantiautomobili.com</text>
</svg>`;
}

async function main() {
  const articles = JSON.parse(readFileSync('/tmp/articles.json', 'utf8'));
  if (!existsSync(OUT_DIR)) mkdirSync(OUT_DIR, { recursive: true });

  // Logo ridimensionato (angolo in alto a destra).
  const logoBuf = await sharp(LOGO)
    .resize({ width: 150, height: 150, fit: 'inside' })
    .png()
    .toBuffer();

  let ok = 0;
  for (const a of articles) {
    const svg = buildSvg({ title: a.h1, category: a.category });
    const base = await sharp(Buffer.from(svg))
      .composite([{ input: logoBuf, top: 60, left: W - 150 - 90 }])
      .jpeg({ quality: 80 })
      .toBuffer();
    const outPath = join(OUT_DIR, `${a.slug}.jpg`);
    await sharp(base).toFile(outPath);
    ok++;
    console.log(`✓ ${a.slug}.jpg`);
  }
  console.log(`\nGenerate ${ok}/${articles.length} OG image in public/og/`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
