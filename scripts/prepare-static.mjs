import { copyFile, mkdir, readdir } from 'node:fs/promises';
import { join, resolve } from 'node:path';

// Give exported subpages directory indexes for hosts without HTML rewrites.
const output = resolve('dist/client');
for (const entry of await readdir(output, { withFileTypes: true })) {
  if (
    !entry.isFile() ||
    !entry.name.endsWith('.html') ||
    ['index.html', '404.html'].includes(entry.name)
  )
    continue;
  const routeDirectory = join(output, entry.name.slice(0, -5));
  await mkdir(routeDirectory, { recursive: true });
  await copyFile(join(output, entry.name), join(routeDirectory, 'index.html'));
}
