<template>
  <div class="page-home">
    <div class="home-entry">
      <div class="container">
        <!-- 左侧分类 -->
        <HomeCategory />
        <!-- 轮播图 -->
        <HomeBanner />
        <!-- 新鲜好物 -->
        <HomeNew />
        <!-- 人气推荐 -->
        <HomeHot />
        <!-- 热梦品牌 -->
        <HomeBrand />
      </div>
    </div>
  </div>
</template>

<script>
import HomeBanner from './components/banner.vue'
import HomeCategory from './components/category.vue'
import HomeNew from './components/home-new.vue'
import HomeHot from './components/home-hot.vue'
import HomeBrand from './components/home-brand.vue'
export default {
  name: 'Home',
  components: {
    HomeBanner,
    HomeCategory,
    HomeNew,
    HomeHot,
    HomeBrand
  }

}
</script>

<style>
</style>
