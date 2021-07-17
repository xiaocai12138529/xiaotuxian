import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import components from './components'

// 1. 样式重置, 抹平浏览器的样式
import 'normalize.css'
// 2. 公共的样式
import '@/styles/common.less'

// 3. 注册全局骨架屏

createApp(App).use(store).use(router).use(components).mount('#app')
