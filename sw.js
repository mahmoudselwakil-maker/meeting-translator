// Minimal service worker: makes the app installable. It does not cache API calls.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (event) => event.waitUntil(self.clients.claim()));
