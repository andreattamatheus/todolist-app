import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from './plugins/axios'
import VueCookies from 'vue-cookies';

import "@/assets/css/tailwind.css";

const app = createApp(App)

app.use(store).use(router).use(router).use(axios, {
    baseUrl: process.env.VUE_APP_URL,
})
.use(VueCookies)
.mount('#app')
