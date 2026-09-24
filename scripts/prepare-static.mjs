import { copyFile, mkdir, readdir } from 'node:fs/promises';
import { basename, join, resolve } from 'node:path';

// Give exported subpages directory indexes for hosts without HTML rewrites.
const output = resolve('dist/client');
for (const entry of await readdir(output, { recursive: true })) {
  if (
    !entry.endsWith('.html') ||
    ['index.html', '404.html'].includes(basename(entry))
  )
    continue;
  const routeDirectory = join(output, entry.slice(0, -5));
  await mkdir(routeDirectory, { recursive: true });
  await copyFile(join(output, entry), join(routeDirectory, 'index.html'));
}
