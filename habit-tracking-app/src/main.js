import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router.js'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const pinia = createPinia();
const app = createApp(App)

pinia.use(piniaPluginPersistedstate)

app.use(router).use(pinia).mount('#app')

