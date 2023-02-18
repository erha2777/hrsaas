import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import './router/permission'
import 'normalize.css/normalize.css' // 初始化css
import '@/styles/index.scss'
import * as directives from '@/directives'

const app = createApp(App)

// 注册所有 element-plus 的icon
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
let directiveObj:any = {...directives}
Object.keys(directiveObj).forEach((key) => {
    
    app.directive(key, directiveObj[key]) // 注册自定义指令
})

app.use(router)
app.use(store)
app.mount('#app')
