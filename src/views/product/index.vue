<template>
  <div class='xtx-goods-page'>
    <div
      class="container"
      v-if="product.categories"
    >
      <GoodsBread :product="product" />
      <!-- 商品信息 -->
      <div class="goods-info">
        <!--左边-->
        <div class="media">
          <!-- 商品图片组件 -->
          <GoodsImage :images="product.mainPictures" />
          <!-- 商品销售信息组件 -->
          <GoodsSales />
        </div>
        <!--右边-->
        <div class="spec">
          <!-- 商品介绍组件 -->
          <!-- sku组件  -->
          <!-- 数量选择组件 -->
          <!-- 按钮组件 -->
        </div>
      </div>
      <!-- 商品推荐 -->
      <div class='goods-relevant'>
        商品推荐
      </div>
      <!-- 商品详情 -->
      <div class="goods-footer">
        <div class="goods-article">
          <!-- 商品+评价 -->
          <div class="goods-tabs">商品+评价</div>
          <!-- 注意事项 -->
          <div class="goods-warn">注意事项</div>
        </div>
        <!-- 24热榜+专题推荐 -->
        <div class="goods-aside">24热榜+专题推荐</div>
      </div>
    </div>
  </div>
</template>

<script>
import GoodsBread from './components/goods-bread.vue'
import GoodsImage from './components/goods-image.vue'
import GoodsSales from './components/goods-sales'
import { findGoods } from '@/api/product'
import { ref } from 'vue'
import { useRoute } from 'vue-router'
export default {
  name: 'XtxGoodsPage',
  components: { GoodsBread, GoodsImage, GoodsSales },
  setup () {
    const router = useRoute()
    const product = ref({})
    findGoods(router.params.id).then(res => {
      product.value = res.result
    })
    return { product }
  }
}
</script>

<style scoped lang='less'>
.goods-info {
  min-height: 600px;
  background: #fff;
  display: flex;
  .media {
    width: 580px;
    height: 600px;
    padding: 30px 50px;
  }
  .spec {
    flex: 1;
    padding: 30px 30px 30px 0;
  }
}
.goods-footer {
  display: flex;
  margin-top: 20px;
  .goods-article {
    width: 940px;
    margin-right: 20px;
  }
  .goods-aside {
    width: 280px;
    min-height: 1000px;
  }
}
.goods-tabs {
  min-height: 600px;
  background: #fff;
}
.goods-warn {
  min-height: 600px;
  background: #fff;
  margin-top: 20px;
}
</style>
