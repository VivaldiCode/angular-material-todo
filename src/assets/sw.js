// sw.js
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('todo-cache').then(cache => {
      return cache.addAll([
        '/',
        '/index.html',
        '/main.js',  // Substitua pelo caminho real do seu arquivo JavaScript principal
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
