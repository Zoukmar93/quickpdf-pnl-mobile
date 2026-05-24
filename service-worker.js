const CACHE='quickpdf-pnl-mobile-v1';
const FILES=['./','./index.html','./manifest.json','./icon.svg','./alyzia_logo.png'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)).catch(()=>null)));
self.addEventListener('fetch',e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))));
