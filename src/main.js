import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 3. 注册全局骨架屏
import components from './components'
// 4. 注册自定义指令
import defineDirective from '@/directives'

// 1. 样式重置, 抹平浏览器的样式
import 'normalize.css'
// 2. 公共的样式
import '@/styles/common.less'

createApp(App).use(store).use(router).use(components).use(defineDirective).mount('#app')
