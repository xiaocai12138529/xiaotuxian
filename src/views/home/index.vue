<template>
  <div class="page-home">
    <div class="home-entry">
      <div class="container">
        <!-- 左侧分类 -->
        <HomeCategory />
        <!-- 轮播图 -->
        <HomeBanner />
      </div>
    </div>
  </div>
</template>

<script>
import HomeBanner from './components/banner.vue'
import HomeCategory from './components/category.vue'
export default {
  name: 'Home',
  components: {
    HomeBanner,
    HomeCategory
  }

}
</script>

<style>
</style>
