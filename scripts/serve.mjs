import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { extname, resolve, sep } from 'node:path';

const publicDirectory = resolve('dist/client');
const port = 4173;
const contentTypes = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json',
  '.rsc': 'text/x-component',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
  '.jpg': 'image/jpeg',
  '.png': 'image/png',
  '.woff2': 'font/woff2',
};

async function serveFile(request, response) {
  if (request.method !== 'GET' && request.method !== 'HEAD') {
    response.writeHead(405, { Allow: 'GET, HEAD' });
    response.end();
    return;
  }

  try {
    const pathname = decodeURIComponent(
      new URL(request.url, 'http://localhost').pathname,
    );
    const relativePath = pathname.endsWith('/')
      ? `${pathname}index.html`
      : pathname;
    const filePath = resolve(publicDirectory, `.${relativePath}`);

    if (
      !filePath.startsWith(`${publicDirectory}${sep}`) ||
      pathname.split('/').some((part) => part.startsWith('.'))
    ) {
      response.writeHead(403);
      response.end('Forbidden');
      return;
    }

    const content = await readFile(filePath);
    response.writeHead(200, {
      'Content-Type':
        contentTypes[extname(filePath)] ?? 'application/octet-stream',
    });
    response.end(request.method === 'HEAD' ? undefined : content);
  } catch {
    response.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    response.end('Diese Seite wurde nicht gefunden.');
  }
}

createServer(serveFile).listen(port, '127.0.0.1', () => {
  console.log(`Portfolio: http://127.0.0.1:${port}/`);
});
