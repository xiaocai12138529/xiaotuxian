<template>
  <!-- 顶部导航 -->
  <nav>1.顶部通栏</nav>
  <!-- 菜单分类 -->
  <header>2.菜单-分类</header>
  <!-- 主体 -->
  <main>
    <!-- 主体出口 -->
    <router-view />
  </main>
  <!-- 底部 -->
  <footer>4.底部区域</footer>
</template>

<script>
export default {
  name: 'Layout'
}
</script>

<style>
</style>
