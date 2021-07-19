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
        <!-- 商品区块 -->
        <HomeProduct />
        <!-- 最新专题 -->
        <HomeSpecial />
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
import HomeProduct from './components/home-product.vue'
import HomeSpecial from './components/home-special.vue'

export default {
  name: 'Home',
  components: {
    HomeBanner,
    HomeCategory,
    HomeNew,
    HomeHot,
    HomeBrand,
    HomeProduct,
    HomeSpecial
  }

}
</script>

<style>
</style>
