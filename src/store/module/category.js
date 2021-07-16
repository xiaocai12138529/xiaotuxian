import { findHeadCategory as getList } from '@/api/category'

// 分类模块
export default {
  namespaced: true,
  state () {
    return {
      // 分类信息集合
      list: []
    }
  },
  // 通过mutation去设置数据
  mutations: {
    setList (state, category) {
      state.list = category
    }
  },
  // action
  actions: {
    async getList (context) {
      const res = await getList()
      console.log(res)
      context.commit('setList', res.result)
    }
  }
}
