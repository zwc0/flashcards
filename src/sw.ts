/// <reference lib="webworker" />
import pkg from '../package.json';
const cacheName = 'v'+pkg.version;
const cacheFiles = [
    './dist/app.css',
    './dist/app.js',
    './index.html'
];
const addCache = () => caches.open(cacheName)
    .then(cache => cache.addAll(cacheFiles));

self.addEventListener('install', event => {
    event.waitUntil(addCache);
});

const fetchResponse = async (event) => {
    const keys = await caches.keys();
    Promise.allSettled(keys.map(k => k !== cacheName && caches.delete(k)));
    if (!keys.includes(cacheName))
        await addCache();
    const response = await caches.match(event.request, {cacheName});
    if (response)
        return response;
    return fetch(event.request, {cache: 'no-cache'});
}

self.addEventListener('fetch', (event) => {
    event.respondWith(fetchResponse(event));
});

self.addEventListener('message', async (event) => {
    if (event.data.type !== 'SKIP_WAITING')
        return;
    //@ts-ignore
    return self.skipWaiting();
});