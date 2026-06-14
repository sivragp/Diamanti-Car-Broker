/**
 * Prerender SSG: per ogni rotta (incl. i 19 articoli) renderizza l'HTML reale
 * con @unhead (meta/JSON-LD baked) e lo scrive come file statico in dist/.
 * Produce anche dist/404.html (servito da Vercel con status 404 per le URL
 * sconosciute → niente soft-404).
 *
 * Eseguito DOPO `build:client` (genera dist/index.html template + asset) e
 * `build:server` (genera dist-server/entry-server.js).
 */
import { promises as fs } from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const ROOT = process.cwd();
const DIST = path.join(ROOT, 'dist');
const SERVER_ENTRY = pathToFileURL(path.join(ROOT, 'dist-server/entry-server.js')).href;

const { render, PRERENDER_ROUTES } = await import(SERVER_ENTRY);

const template = await fs.readFile(path.join(DIST, 'index.html'), 'utf-8');

function inject(tpl, { appHtml, headTags }) {
  let out = tpl;
  if (headTags) out = out.replace('</head>', `${headTags}\n  </head>`);
  out = out.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);
  return out;
}

async function writeRoute(url, html) {
  // '/' → dist/index.html ; '/servizi' → dist/servizi/index.html (clean URLs)
  const rel = url === '/' ? 'index.html' : path.join(url.replace(/^\//, ''), 'index.html');
  const file = path.join(DIST, rel);
  await fs.mkdir(path.dirname(file), { recursive: true });
  await fs.writeFile(file, html, 'utf-8');
  return rel;
}

const written = [];

for (const url of PRERENDER_ROUTES) {
  const result = await render(url);
  await writeRoute(url, inject(template, result));
  written.push(`${url}  (status ${result.statusCode})`);
}

// 404 reale: una URL che combacia solo con la rotta '*' → NotFound → 404.html
const notFound = await render('/__not-found__');
await fs.writeFile(path.join(DIST, '404.html'), inject(template, notFound), 'utf-8');
written.push('/__not-found__  → 404.html');

console.log(`✓ Prerender: ${written.length} pagine generate`);
for (const w of written) console.log('  ' + w);
