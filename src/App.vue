<template>
  <!-- <div id="nav">
    是否苹果自由{{$store.getters.isAppleFree}}
    现在:{{$store.state.salary}}
    跳槽:{{$store.state.companyName}}
    <button @click="add">加薪</button>
    <button @click="$store.dispatch('jumpTo','baidu')">跳槽</button>
  </div> -->
  <p class="container">hahahha </p>
  {{$store.state.user.profile}}
  <button @click="$store.commit('user/setUser',{id:3,username:'小王'})">修改user模块,测试持久化调用</button>
  <button @click="hClick">修改user模块,测试持久化调用</button>
  <router-view />
</template>

<script>
// 导入
import { useStore } from 'vuex'
import request from '@/utils/request.js'
export default ({
  setup () {
    // 调用
    const store = useStore()
    const add = () => {
      // 去调用 mutations
      store.commit('addSalary', 1000)
    }
    const hClick = () => {
      request('/member/cart/count', 'GET')
    }
    return { add, hClick }
  }
})
</script>

<style lang="less">
.container {
  color: @xtxColor;
  .hoverShadow();
}
</style>
