// Save successful app files; the access file always goes straight to the network.
const CACHE = 'emotions-45fa7590';
const ASSETS = ['./', './index.html', './manifest.webmanifest',
                './icon-192.png', './icon-512.png', './icon-512-maskable.png',
                './apple-touch-icon.png'];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(async c => {
    await Promise.all(ASSETS.map(async url => {
      const response = await fetch(url, { cache: 'reload' });
      if (!response.ok) throw new Error('App file unavailable: ' + url);
      await c.put(url, response);
    }));
    await self.skipWaiting();
  }));
});
self.addEventListener('activate', e => {
  e.waitUntil((async () => {
    const previous = (await caches.keys()).filter(k => k.startsWith('emotions-') && k !== CACHE);
    if (previous.length) {
      const cache = await caches.open(CACHE);
      await cache.put('./__from-earlier', new Response('1', { headers: { 'Content-Type': 'text/plain' } }));
    }
    await Promise.all(previous.map(k => caches.delete(k)));
    await self.clients.claim();
  })());
});
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  const url = new URL(e.request.url), access = new URL('./access.json', self.location.href);
  if (url.origin === access.origin && url.pathname === access.pathname) {
    return; // No interception: the page's no-store fetch reaches the network directly.
  }
  e.respondWith((async () => {
    const cache = await caches.open(CACHE), navigation = e.request.mode === 'navigate';
    const hit = navigation
      ? await cache.match(e.request, { ignoreSearch: true }) || await cache.match('./index.html')
      : await cache.match(e.request);
    if (hit) return hit;
    try {
      const response = await fetch(e.request);
      if (response.ok && url.origin === self.location.origin) {
        try { await cache.put(e.request, response.clone()); } catch (err) {}
      }
      return response;
    } catch (err) {
      if (navigation) {
        const page = await cache.match('./index.html');
        if (page) return page;
      }
      throw err;
    }
  })());
});
