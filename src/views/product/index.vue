<template>
  <div class='xtx-goods-page'>
    <div
      class="container"
      v-if="product.categories"
    >
      <GoodsBread :product="product" />
      <!-- 商品信息 -->
      <div class="goods-info">商品信息</div>
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
import { findGoods } from '@/api/product'
import { ref } from 'vue'
import { useRoute } from 'vue-router'
export default {
  name: 'XtxGoodsPage',
  components: { GoodsBread },
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
