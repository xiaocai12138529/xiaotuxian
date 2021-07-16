<template>
  <!-- 顶部导航 -->
  <!-- <nav>1.顶部通栏</nav> -->
  <TopNav />
  <!-- 菜单分类 -->
  <!-- <header>2.菜单-分类</header> -->
  <AppHeader />
  <!-- 主体 -->
  <main>
    <!-- 主体出口 -->
    <router-view />
  </main>
  <!-- 底部 -->
  <!-- <footer>4.底部区域</footer> -->
  <Footer />
</template>

<script>
import TopNav from './component/topnav'
import AppHeader from './component/header.vue'
import Footer from './component/footer.vue'
export default {
  name: 'Layout',
  components: {
    TopNav,
    AppHeader,
    Footer
  }
}
</script>

<style>
</style>
