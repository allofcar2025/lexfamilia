const CACHE_NAME = 'lexfamilia-cache-v6.4';
console.log('LexFamilia SW v6.1 initialized');
const urlsToCache = [
    './',
    './index.html',
    './styles.css',
    './app.js',
    './data.js',
    './data_borja.js',
    './teoria_boe.js',
    './claude_generator.js',
    './config.js',
    './manifest.json',
    './icon-192.png',
    './icon-512.png',
];

// InstalaciÃ³n: Cachear archivos base y forzar actualizaciÃ³n
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Abriendo cache y guardando archivos estÃ¡ticos');
                return cache.addAll(urlsToCache);
            })
            .then(() => self.skipWaiting()) // Fuerza a que el nuevo SW active directamente
    );
});

// ActivaciÃ³n: Limpiar caches antiguos y tomar el control inmediatamente
self.addEventListener('activate', event => {
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        Promise.all([
            caches.keys().then(cacheNames => {
                return Promise.all(
                    cacheNames.map(cacheName => {
                        if (cacheWhitelist.indexOf(cacheName) === -1) {
                            return caches.delete(cacheName);
                        }
                    })
                );
            }),
            self.clients.claim() // Toma el control de las pÃ¡ginas abiertas inmediatamente
        ])
    );
});

// Estrategia de respuesta: Cache First, falling back to Network
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                // Encontrado en cache, devolverlo
                if (response) {
                    return response;
                }
                return fetch(event.request);
            }
            )
    );
});
