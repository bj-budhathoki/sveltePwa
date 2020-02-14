const cacheName = "v2"

self.addEventListener('install', e => {
    console.log('server worker installed ::')

})

self.addEventListener('activate', e => {
    console.log('sw active::')
    e.waitUntil(caches.keys().then(cacheNames => {
        return Promise.all(
            cacheNames.map(cache => {
                if (cache !== cacheName) {
                    console.log('clearing out old cache')
                    return caches.delete(cache)
                }
            })
        )
    }))
})

//fething

self.addEventListener('fetch', e => {
    console.log('fetching....')
    if (!(e.request.url.indexOf('http') === 0)) {
        return;
    }
    e.respondWith(
        fetch(e.request).then((res) => {
            const resClone = res.clone()
            caches.open(cacheName).then(cache => {
                cache.put(e.request, resClone)
            })
            return res;
        }).catch(err => caches.match(e.request).then(res => res))
    )
})