import axios from 'axios'
import store from '@/store/index'
import router from '@/router'

// 配置
const instance = axios.create({
  baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net/',
  timeout: 5000
})

// 请求拦截器
instance.interceptors.request.use(
  aconfig => {
    const token = store.state.user.profile.token
    if (token) {
      aconfig.headers.Authorization = `Bearer ${token}`
    }
    return aconfig
  }
)
// 相应拦截器
instance.interceptors.response.use(request => request.data, error => {
  if (error.response && error.response.status === 401) {
    // 清空个人信息
    store.commit('user/setUser', {})
    return router.push('/login?redirectUrl=' + encodeURIComponent(router.currentRoute.value.fullPath))
  }
})
// 自适应发送ajax请求
export default function (url, method, paramsData) {
  return instance({
    url,
    method,
    [method.toLowerCase() === 'get' ? 'params' : 'data']: paramsData
  })
}
