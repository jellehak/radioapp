const CACHE_NAME = "default-v1";
const CACHE_ASSETS = [];
const TAG = "[SW]: ";

self.addEventListener("install", event => {
  console.log(TAG, "installing");
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      cache.addAll(CACHE_ASSETS)
    })
  )
})

self.addEventListener("activate", event => {
  console.log(TAG, "activated");
})

self.addEventListener("fetch", event => {
  console.log(TAG, "fetching");
  event.respondWith(fetch(event.request));
})
