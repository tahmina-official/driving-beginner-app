self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("dmv-cache-v1").then((cache) =>
      cache.addAll([
        "/",
        "/index.html",
        "/manifest.json",
        "/favicon.png",
        "/icon-192.png",
      ])
    )
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => cachedResponse || fetch(event.request))
  );
});
