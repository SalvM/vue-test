import App from './App.vue'
import { createApp } from 'vue'
import store from './stores';

createApp(App)
    .use(store)
    .mount('#app')
