import Weather from './Weather.svelte';
import * as serviceWorker from './registerServiceWorker'
const app = new Weather({
	target: document.body,
});
serviceWorker.register()
export default app;