import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router.js'
import "bootstrap/dist/css/bootstrap.min.css";

const pinia = createPinia();
const app = createApp(App)

app.use(router).use(pinia).mount('#app')

