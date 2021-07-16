import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 1. 样式重置, 抹平浏览器的样式
import 'normalize.css'
// 2. 公共的样式
import '@/styles/common.less'
createApp(App).use(store).use(router).mount('#app')
