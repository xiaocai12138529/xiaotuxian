<template>
  <div class='top-category'>
    <div class="container">
      <XtxBread separator=">">
        <XtxBreadItem to="/">首页</XtxBreadItem>
        <XtxBreadItem to='/category'>电器</XtxBreadItem>
      </XtxBread>
      <!-- 轮播图 -->
      <XtxCarousel
        :siders='sliders'
        style="height: 500px"
      ></XtxCarousel>
      <!-- 所有二级分类 -->
      <div
        class="sub-list"
        ref="target"
      >
        <h3>全部分类</h3>
        <ul>

          <li
            v-for="item in cateList"
            :key="item.id"
          >
            <RouterLink :to="`/categroy/sub/${item.id}`">
              <a href="javascript:;">
                <img :src="item.picture" />
                <p>{{ item.name }}</p>
              </a>
            </RouterLink>
          </li>
        </ul>
      </div>
      <!-- 分类关联商品 -->
      <div
        class="ref-goods"
        v-for="item in cateList"
        :key="item.id"
      >
        <div class="head">
          <h3>- {{item.name}} -</h3>
          <XtxMore to="/" />
        </div>
        <div class="body">
          <GoodsItem
            v-for="good in item.goods"
            :key="good.id"
            :goods="good"
          />
          <!-- <RouterLink
            to="/"
            class="goods-item"
            v-for="good in item.goods"
            :key="good.id"
          >
            <img
              :src="good.picture"
              alt=""
            />
            <p class="name ellipsis">{{good.name}}</p>
            <p class="desc ellipsis">{{good.desc}}</p>
            <p class="price">&yen;{{good.price}}</p>
          </RouterLink> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { findTopCategory } from '@/api/category'
import { findBanner } from '@/api/home'
import { ref } from 'vue'
import { onBeforeRouteUpdate, useRoute } from 'vue-router'
import GoodsItem from './components/goods-item.vue'
// import useLazyData from '@/compositions/'
export default {
  name: 'TopCategory',
  components: {
    GoodsItem
  },
  setup () {
    const sliders = ref([])
    const router = useRoute()
    const cateList = ref([])
    // 轮播图数据
    findBanner().then(data => {
      sliders.value = data.result
    })
    // 分类数据
    findTopCategory(router.params.id).then(data => {
      cateList.value = data.result.children
    })

    // watch(() => router.params.id, () => {
    //   // 轮播图数据
    //   //   findBanner().then(data => {
    //   //     sliders.value = data.result
    //   //   })
    //   findTopCategory(router.params.id).then(data => {
    //     cateList.value = data.result.children
    //   })
    // }, { immediate: true })

    onBeforeRouteUpdate((to) => {
      // 分类数据
      console.log(to)
      findTopCategory(to.params.id || router.params.id).then(data => {
        cateList.value = data.result.children
      })
    })
    return { sliders, cateList }
  }
}
</script>

<style scoped lang="less">
.top-category {
  h3 {
    font-size: 28px;
    color: #666;
    font-weight: normal;
    text-align: center;
    line-height: 100px;
  }
  .sub-list {
    margin-top: 20px;
    background-color: #fff;
    ul {
      display: flex;
      padding: 0 32px;
      flex-wrap: wrap;
      li {
        width: 168px;
        height: 160px;
        a {
          text-align: center;
          display: block;
          font-size: 16px;
          img {
            width: 100px;
            height: 100px;
          }
          p {
            line-height: 40px;
          }
          &:hover {
            color: @xtxColor;
          }
        }
      }
    }
  }
  .ref-goods {
    background-color: #fff;
    margin-top: 20px;
    position: relative;
    .head {
      .xtx-more {
        position: absolute;
        top: 20px;
        right: 20px;
      }
      .tag {
        text-align: center;
        color: #999;
        font-size: 20px;
        position: relative;
        top: -20px;
      }
    }
    .body {
      display: flex;
      justify-content: space-around;
      padding: 0 40px 30px;
    }
  }
}
</style>
