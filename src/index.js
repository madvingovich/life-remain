import App from './components/App.svelte';

import '../assets/styles/global.css';
import 'flatpickr/dist/flatpickr.css';
import 'flatpickr/dist/themes/light.css';

export const app = new App({
  target: document.body
});
