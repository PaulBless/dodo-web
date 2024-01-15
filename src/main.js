import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import './styles/main.css';
import './styles/tailwind.css';

import router from './router/index';
import 'animate.css';
import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init()
import jQuery from "jquery";
const $ = jQuery;
window.$ = $;

const app = createApp(App);
app.use(router)
app.mount('#app')

// createApp(App).mount('#app')
