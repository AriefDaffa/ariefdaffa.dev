import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import assert from 'node:assert/strict';

const dist = new URL('../dist/', import.meta.url);

const pages = [
  '/',
  '/projects/',
  '/projects/byakuya/',
  '/projects/naya-living/',
  '/projects/btn-properti/',
  '/projects/hoshi/',
  '/projects/isf/',
  '/projects/lagalio/',
  '/projects/si-miku/',
  '/projects/pokedex/',
  '/projects/personal-website/',
  '/blog/',
  '/blog/end-of-world/',
  '/blog/bocchi-the-rock-review/',
  '/blog/saving-money/',
];

const htmlFor = (route) => {
  const file = route === '/' ? 'index.html' : join(route.slice(1), 'index.html');
  const path = new URL(file, dist);
  assert.equal(existsSync(path), true, `Missing built page for ${route}`);
  return readFileSync(path, 'utf8');
};

for (const route of pages) {
  const html = htmlFor(route);
  assert.match(html, /<html lang="en">/, `${route} should set html lang`);
  assert.match(html, /<link rel="canonical" href="https:\/\/ariefdaffa\.dev\//, `${route} should include canonical URL`);
  assert.match(html, /<meta property="og:title"/, `${route} should include Open Graph title`);
  assert.match(html, /<meta name="twitter:card" content="summary_large_image">/, `${route} should include Twitter card metadata`);
  assert.doesNotMatch(html, /href="(?:index|projects|project|blog|blog-post)\.html/, `${route} should not link to legacy .html routes`);
}

const robotsPath = new URL('robots.txt', dist);
assert.equal(existsSync(robotsPath), true, 'robots.txt should be generated');
assert.match(readFileSync(robotsPath, 'utf8'), /Sitemap: https:\/\/ariefdaffa\.dev\/sitemap-index\.xml/);

const sitemapPath = new URL('sitemap-index.xml', dist);
assert.equal(existsSync(sitemapPath), true, 'sitemap-index.xml should be generated');

const legacyProject = htmlFor('/project.html/');
assert.match(legacyProject, /window\.location\.replace/, 'legacy project route should redirect with client-side slug handling');

const sourceChecks = [
  new URL('../src/content/blog/bocchi-the-rock-review.md', import.meta.url),
  new URL('../src/content/projects/byakuya.md', import.meta.url),
  new URL('../src/content/projects/si-miku.md', import.meta.url),
];

for (const path of sourceChecks) {
  assert.equal(existsSync(path), true, `${path.pathname} should exist as Markdown content`);
}

console.log(`Verified ${pages.length} clean routes, Markdown content, SEO metadata, robots, sitemap, and legacy redirect shell.`);
