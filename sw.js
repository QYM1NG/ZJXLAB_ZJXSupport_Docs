const CACHE_NAME = 'zjx-docs-v1';
const urlsToCache = [
  '/ZJXLAB_ZJXSupport_Docs/',
  '/ZJXLAB_ZJXSupport_Docs/README.md',
  '/ZJXLAB_ZJXSupport_Docs/_sidebar.md',
  '/ZJXLAB_ZJXSupport_Docs/_coverpage.md'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
