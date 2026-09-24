import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { runInNewContext } from 'node:vm';
import test from 'node:test';
import { parseTheme, themeInitializationScript } from '../src/lib/theme.ts';

test('stored theme is applied before rendering; invalid preferences use the system', () => {
  for (const stored of ['light', 'dark', 'system', null, 'unknown']) {
    const document = { documentElement: { dataset: {} } };
    runInNewContext(themeInitializationScript, {
      document,
      localStorage: { getItem: () => stored },
    });
    assert.equal(document.documentElement.dataset.theme, parseTheme(stored));
  }
});

test('unavailable browser storage does not interrupt theme initialization', () => {
  const document = { documentElement: { dataset: {} } };
  runInNewContext(themeInitializationScript, {
    document,
    localStorage: {
      getItem() {
        throw new Error('Storage denied');
      },
    },
  });
  assert.equal(document.documentElement.dataset.theme, 'system');
});

function luminance(hex) {
  const values = hex.match(/[a-f\d]{2}/gi).map((channel) => {
    const value = Number.parseInt(channel, 16) / 255;
    return value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4;
  });
  return values[0] * 0.2126 + values[1] * 0.7152 + values[2] * 0.0722;
}

function contrast(first, second) {
  const lighter = Math.max(luminance(first), luminance(second));
  const darker = Math.min(luminance(first), luminance(second));
  return (lighter + 0.05) / (darker + 0.05);
}

const themes = readFileSync(
  new URL('../src/styles/themes.css', import.meta.url),
  'utf8',
);
const palettes = [...themes.matchAll(/\{([^{}]+)\}/g)]
  .map(([, body]) =>
    Object.fromEntries(
      [...body.matchAll(/--([\w-]+):\s*(#[a-f\d]{6});/gi)].map(
        ([, key, value]) => [key, value],
      ),
    ),
  )
  .filter((palette) => palette.background);

test('both themes meet AA text contrast and 3:1 control/focus contrast', () => {
  assert.equal(
    palettes.length,
    3,
    'light, system dark and explicit dark palettes',
  );
  for (const palette of palettes) {
    for (const background of ['background', 'surface']) {
      for (const foreground of ['foreground', 'muted', 'accent']) {
        assert.ok(
          contrast(palette[foreground], palette[background]) >= 4.5,
          `${foreground} on ${background}`,
        );
      }
      assert.ok(
        contrast(palette.border, palette[background]) >= 3,
        `control border on ${background}`,
      );
    }
    for (const foreground of [
      'about-foreground',
      'about-muted',
      'about-accent',
    ]) {
      assert.ok(
        contrast(palette[foreground], palette['about-background']) >= 4.5,
        foreground,
      );
    }
    for (const background of ['accent', 'button-hover']) {
      assert.ok(
        contrast(palette['button-text'], palette[background]) >= 4.5,
        `button on ${background}`,
      );
    }
  }
});
