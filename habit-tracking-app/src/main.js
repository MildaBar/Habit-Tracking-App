import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router.js'

const pinia = createPinia();
const app = createApp(App)

app.use(router).use(pinia).mount('#app')

