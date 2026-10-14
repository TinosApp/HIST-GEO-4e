/* Service worker : l'application fonctionne hors connexion après la première visite.
   Stratégie : réseau d'abord (pour recevoir les mises à jour), cache en secours. */
const CACHE = "hg4e-v1";
const FICHIERS = ["./", "index.html", "manifest.json", "icon-192.png", "icon-512.png"];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(FICHIERS)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys()
      .then((cles) => Promise.all(cles.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return; /* appels au script de codes : jamais en cache */
  e.respondWith(
    fetch(req)
      .then((rep) => {
        if (rep && rep.ok) { const copie = rep.clone(); caches.open(CACHE).then((c) => c.put(req, copie)); }
        return rep;
      })
      .catch(() => caches.match(req).then((r) => r || caches.match("index.html")))
  );
});
