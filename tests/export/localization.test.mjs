import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

const output = new URL('../../dist/client/', import.meta.url);
const readPage = (path) => readFileSync(new URL(path, output), 'utf8');

for (const [path, language, heading, alternative] of [
  ['index.html', 'de', 'Ausgewählte Arbeiten', '/en/'],
  ['en/index.html', 'en', 'Selected work', '/'],
  [
    'barrierefreiheit/index.html',
    'de',
    'Barrierefreiheit',
    '/en/accessibility/',
  ],
  ['en/accessibility/index.html', 'en', 'Accessibility', '/barrierefreiheit/'],
]) {
  test(`${path} exports translated content, document language and reciprocal navigation`, () => {
    const html = readPage(path);
    assert.match(html, new RegExp(`<html[^>]+lang="${language}"`));
    assert.ok(
      html.includes(heading),
      'translated page content exists before JavaScript',
    );
    assert.ok(
      html.includes(`href="${alternative}"`),
      'language switch points to equivalent page',
    );
    assert.match(html, /hrefLang="de"|hreflang="de"/i);
    assert.match(html, /hrefLang="en"|hreflang="en"/i);
    assert.ok(
      html.includes(
        `aria-label="${language === 'en' ? 'English' : 'Deutsch'}" aria-current="page"`,
      ),
    );
  });
}

test('both portfolios include all six real project images and the KochGoat website', () => {
  for (const path of ['index.html', 'en/index.html']) {
    const html = readPage(path);
    for (const asset of [
      'little-bolt.webp',
      'pokedex-preview.webp',
      'bestellapp-preview.webp',
      'fotogram-preview.webp',
      'join-preview.webp',
      'kochgoat-preview.webp',
    ]) {
      assert.ok(
        html.includes(`/assets/${asset}`),
        `missing ${asset} in ${path}`,
      );
    }
    assert.ok(html.includes('href="https://kochgoat.com"'));
    assert.ok(!html.includes('Päplern'));
  }
});
