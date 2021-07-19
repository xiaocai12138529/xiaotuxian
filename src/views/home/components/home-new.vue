<template>
  <div
    class="home-new"
    ref="target"
  >
    <HomePanel
      title="新鲜好物"
      sub-title="新鲜出炉 品质靠谱"
    >
      <template #right>
        <XtxMore path="/" />
      </template>
      <!-- 面板内容 -->
      <ul
        class="goods-list"
        v-if="goods.length"
      >
        <li
          v-for="item in goods"
          :key="item.id"
        >
          <RouterLink :to="`/product/${item.id}`">
            <img
              :src="item.picture"
              alt=""
            >
            <p class="name ellipsis">{{item.name}}</p>
            <p class="price">&yen;{{item.price}}</p>
          </RouterLink>
        </li>
      </ul>
      <HomeSkeleton v-else />
    </HomePanel>
  </div>
</template>
<script>
import { ref } from 'vue'
import { findNew } from '@/api/home'
import HomePanel from './home-Pannel.vue'
import HomeSkeleton from './home-skeleton.vue'
import useLazyData from '@/compositions/index.js'
export default {
  name: 'HomeNew',
  components: { HomePanel, HomeSkeleton },
  setup () {
    const goods = ref([])
    const target = useLazyData(() => {
      findNew().then(data => {
        goods.value = data.result
      })
    })
    return { goods, target }
  }
}
</script>
<style scoped lang="less">
.goods-list {
  display: flex;
  justify-content: space-between;
  height: 406px;
  li {
    width: 306px;
    height: 406px;
    background: #f0f9f4;
    .hoverShadow();
    img {
      width: 306px;
      height: 306px;
    }
    p {
      font-size: 22px;
      padding: 12px 30px 0 30px;
      text-align: center;
    }
    .price {
      color: @priceColor;
    }
  }
}
</style>
