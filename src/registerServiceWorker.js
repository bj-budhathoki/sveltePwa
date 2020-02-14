
export function register() {
    if ('serviceWorker' in navigator) {
        console.log('inside service worker')
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('/sw.js').then(() => {
                console.log('service worker registered')
            }).catch(err => console.log('service worker fail'))
        });
    }
}
export function unregister() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.ready.then(registration => {
            registration.unregister();
        });
    }
}
