// import Vuex from 'vuex'
// import vue from 'vue'
// Vue.use(Vuex)
// export default new Vuex.Store({

// })
import { createStore, createLogger } from 'vuex'
import cart from './module/cart'
import category from './module/category'
import user from './module/user'
import createPersistedstate from 'vuex-persistedstate'

export default createStore({
  // // 定义数据
  // state: {
  //   name: '小王',
  //   salary: 12000,
  //   companyName: 'DIDI'
  // },
  // // 定义修改数据的方法
  // mutations: {
  //   // 涨薪
  //   addSalary (state, num) {
  //     state.salary += num
  //   },
  //   // 跳槽
  //   changeCompany (state, num) {
  //     state.companyName = num
  //   }
  // },
  // // 监听
  // getters: {
  //   isAppleFree (state) {
  //     return state.salary > 30000
  //   }
  // },
  // actions: {
  //   jumpTo (context, companyName = 'JD') {
  //     setTimeout(() => {
  //       context.commit('changeCompany', companyName)
  //     }, 1000)
  //   }
  // },
  modules: {
    cart,
    category,
    user
  },
  plugins: [
    createPersistedstate({
      key: 'erabbit-client-pc-store', // 起个名
      paths: ['user', 'cart', 'category'] // 要做持久化的模块
    }),
    createLogger()
  ]
})
