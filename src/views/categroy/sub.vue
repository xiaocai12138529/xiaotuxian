<template>
  <div class='sub-category'>
    <div class="container">
      <!-- 二级类目 -->
      <!-- 面包屑导航 -->
      <GoodsNav :subCate="subCate"></GoodsNav>
      <!-- 筛选区 -->
      <SubFilter :subCate="subCate" />
    </div>
  </div>
</template>

<script>
import GoodsNav from './components/goods-nav.vue'
import { findSubCategoryFilter } from '@/api/category.js'
import { onBeforeRouteUpdate, useRoute } from 'vue-router'
import { ref } from 'vue'
import SubFilter from './components/sub-filter.vue'
export default {
  name: 'SubCategory',
  components: { GoodsNav, SubFilter },
  setup () {
    const router = useRoute()
    const subCate = ref(null)
    console.log('router', router)
    // 封装获取商品信息
    const getcate = (id) => {
      findSubCategoryFilter(id || router.params.id).then(data => {
        //  给品牌添加全部
        //  补充selected：false
        data.result.brands.forEach(it => { it.selected = false })
        data.result.brands.unshift({ id: null, name: '全部', selected: true })

        // 给销售属性添加全部
        // 补充selected：false
        data.result.saleProperties.forEach(item => {
          item.properties.forEach(it => { it.selected = false })
          item.properties.unshift({
            id: null,
            name: '全部',
            selected: true // 默认选中
          })
        })
        subCate.value = data.result
      })
    }
    // 组件创建执行一次
    getcate()
    // 路由守卫  路由变化的时候执行一次
    onBeforeRouteUpdate((to) => {
      getcate(to.params.id)
    })
    return { subCate }
  }
}
</script>
<style scoped lang='less'>
.goods-list {
  background: #fff;
  padding: 0 25px;
  margin-top: 25px;
}
</style>
