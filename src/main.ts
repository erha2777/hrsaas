import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'normalize.css/normalize.css' // 初始化css
import '@/styles/index.scss'

const app = createApp(App)

app.use(router)
app.mount('#app')
