<template>
  <div class='sub-category'>
    <div class="container">
      <!-- 二级类目 -->
      <!-- 面包屑导航 -->
      <GoodsNav :subCate="subCate"></GoodsNav>
      <!-- 筛选区 -->
      <SubFilter
        :subCate="subCate"
        @filter-change="filterChange"
      />
      <!-- 商品显示区域 -->
      <div class="ref-goods">
        <!-- 排序 -->
        <SubSort @sort-change='sortChange' />
        <!-- 商品 -->
        <div class="body">
          <GoodsItem
            class="box"
            v-for="item in list"
            :key="item.id"
            :goods="item"
          />
        </div>
      </div>
      <XtxInfiniteLoading
        :isFinished='isFinished'
        :isLoading='isLoading'
        @loading='loading'
      />
    </div>
  </div>
</template>

<script>
import GoodsNav from './components/goods-nav.vue'
import GoodsItem from './components/goods-item.vue'
import { findSubCategoryFilter, findSubCategoryGoods } from '@/api/category.js'
import { onBeforeRouteUpdate, useRoute } from 'vue-router'
import { ref } from 'vue'
import SubFilter from './components/sub-filter.vue'
import SubSort from './components/sub-sort.vue'
export default {
  name: 'SubCategory',
  components: { GoodsNav, SubFilter, SubSort, GoodsItem },
  setup () {
    const router = useRoute()
    const subCate = ref(null)
    const list = ref([])
    // 请求参数
    let reqParams = {
      categoryId: router.params.id, // 分类id
      inventory: false, // 是否有库存
      onlyDiscount: false, // 只显示特惠
      brandId: null, // 品牌名称
      attrs: [], // 商品属性
      sortField: null, // 排序类别
      sortMethod: 'desc', // 排序规则
      page: 1,
      pageSize: 10
    }
    const getgoods = () => {
      // 获取商品
      findSubCategoryGoods(reqParams).then((res) => {
        console.log(res)
        list.value = res.result.items
      })
    }
    // 封装获取商品信息
    const getcate = (id) => {
      reqParams.categoryId = id || router.params.id
      getgoods()
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

    // 筛选事件
    const filterChange = (obj) => {
      init()
      reqParams = { ...reqParams, ...obj }
      getgoods()
    }
    const sortChange = (sortParams) => {
      init()
      reqParams = { ...reqParams, ...sortParams }
      getgoods()
      console.log('父组件点击了')
    }

    // 组件创建执行一次
    getcate()
    // 路由守卫  路由变化的时候执行一次
    onBeforeRouteUpdate((to) => {
      init()
      getcate(to.params.id)
    })

    const isLoading = ref(false) // 正在加载
    const isFinished = ref(false) // 没有数据了
    const loading = () => {
      isLoading.value = true
      findSubCategoryGoods(reqParams).then((res) => {
        isLoading.value = false
        console.log(res.result.items.length)
        if (res.result.items.length) {
          isFinished.value = false
          reqParams.page++
        } else {
          isFinished.value = true
        }
        list.value.push(...res.result.items)
      })
    }
    // 初始化
    const init = () => {
      list.value = []
      reqParams.page = 1
      isLoading.value = false
      isFinished.value = false
    }
    return { subCate, list, filterChange, sortChange, loading, isFinished, isLoading }
  }
}
</script>
<style scoped lang='less'>
.sort-list-container {
  display: flex;
  flex-wrap: wrap;
}
.ref-goods {
  background-color: #fff;
  margin-top: 20px;
  position: relative;
  .body {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0 40px 30px;
    /**
    *display: flex;
    *display: -webkit-flex;
    *justify-content: space-between;
    *flex-direction: row;
    *flex-wrap: wrap;
    */
  }
}
.goods-list {
  background: #fff;
  padding: 0 25px;
  margin-top: 25px;
}
</style>
