import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'

import './assets/main.css';
import router from './router'
import AppLink from './components/AppLink.vue';

const app = createApp(App)

app.use(router).component('AppLink',AppLink)

app.mount('#app')
