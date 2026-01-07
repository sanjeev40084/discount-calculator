const CACHE_NAME = 'discount-calc-v11';
const ASSETS_TO_CACHE = [
    './',
    './index.html',
    './manifest.json',
    /* If you have icons, uncomment these lines:
    './icon-192.png',
    './icon-512.png'
    */
];

// 1. Install Event: Caches the files
self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(ASSETS_TO_CACHE);
        })
    );
});

// 2. Fetch Event: Serve from Cache first, then Network
self.addEventListener('fetch', (e) => {
    e.respondWith(
        caches.match(e.request).then((response) => {
            // Return the cached file if found, otherwise try internet
            return response || fetch(e.request);
        })
    );

});


