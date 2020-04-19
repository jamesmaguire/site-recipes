self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('video-store').then(function(cache) {
     return cache.addAll([
       '/www-recipes/',
       '/www-recipes/index.html',
       '/www-recipes/static/common.css',
       '/www-recipes/static/index.css',
       '/www-recipes/static/recipe.css',
       '/www-recipes/static/search.js',
       '/www-recipes/static/pwa.js',
     ]);
   })
 );
});

self.addEventListener('fetch', function(e) {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
