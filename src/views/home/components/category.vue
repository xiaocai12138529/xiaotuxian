<template>
  <div
    class='home-category'
    @mouseleave="cateId = null"
  >
    <ul class="menu">
      <li
        v-for="item in cateList"
        :key="item.id"
        @mouseenter="cateId = item.id"
        :class="{active: cateId === item.id}"
      >
        <RouterLink to="/">{{item.name}}</RouterLink>
        <template v-if="item.children">
          <RouterLink
            to="/"
            v-for="i in item.children"
            :key="i.id"
          >{{i.name}}</RouterLink>
          <!-- <RouterLink to="/">二级类目</RouterLink> -->
        </template>
      </li>
    </ul>
    <!-- 弹层 -->
    <div class="layer">
      <h4>分类推荐 <small>根据您的购买或浏览记录推荐</small></h4>
      <ul v-if="goodsList">
        <li
          v-for="item in goodsList.goods"
          :key="item.id"
        >
          <RouterLink to="/">
            <img
              alt=""
              :src="item.picture"
            >
            <div class="info">
              <p class="name ellipsis-2">{{item.name}}</p>
              <p class="desc ellipsis">{{item.desc}}</p>
              <p class="price"><i>¥</i>{{item.price}}</p>
            </div>
          </RouterLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { computed, reactive, ref } from 'vue'
import { useStore } from 'vuex'
export default {
  name: 'HomeCategory',
  setup () {
    // vuex
    const store = useStore()
    // 品牌对象
    const brand = reactive({
      id: 'brand',
      name: '品牌',
      children: [{ id: '', name: '推荐品牌' }]
    })
    // 使用计算属性从vuex中获取分类
    const cateList = computed(() => {
      const list = store.state.category.list.map(item => {
        return {
          id: item.id,
          name: item.name,
          children: item.children && item.children.slice(0, 2),
          goods: item.goods
        }
      })
      list.push(brand)
      return list
    })

    // 鼠标进入显示
    const cateId = ref(0) // 鼠标移入取值
    // 计算属性获取goods
    const goodsList = computed(() => {
      const list = cateList.value.find(item => item.id === cateId.value)
      console.log(list)
      return list
    })
    return { cateList, cateId, goodsList }
  }
}
</script>

<style scoped lang='less'>
.home-category {
  width: 250px;
  height: 500px;
  background: rgba(0, 0, 0, 0.8);
  position: relative;
  z-index: 99;
  .menu {
    li {
      padding-left: 40px;
      height: 50px;
      line-height: 50px;
      &:hover,
      &.active {
        background: @xtxColor;
      }
      a {
        margin-right: 4px;
        color: #fff;
        &:first-child {
          font-size: 16px;
        }
      }
    }
  }
  // 省略其他...
  .layer {
    width: 990px;
    height: 500px;
    background: rgba(255, 255, 255, 0.8);
    position: absolute;
    left: 250px;
    top: 0;
    display: none;
    padding: 0 15px;
    h4 {
      font-size: 20px;
      font-weight: normal;
      line-height: 80px;
      small {
        font-size: 16px;
        color: #666;
      }
    }
    ul {
      display: flex;
      flex-wrap: wrap;
      li {
        width: 310px;
        height: 120px;
        margin-right: 15px;
        margin-bottom: 15px;
        border: 1px solid #eee;
        border-radius: 4px;
        background: #fff;
        &:nth-child(3n) {
          margin-right: 0;
        }
        a {
          display: flex;
          width: 100%;
          height: 100%;
          align-items: center;
          padding: 10px;
          &:hover {
            background: #e3f9f4;
          }
          img {
            width: 95px;
            height: 95px;
          }
          .info {
            padding-left: 10px;
            line-height: 24px;
            width: 190px;
            .name {
              font-size: 16px;
              color: #666;
            }
            .desc {
              color: #999;
            }
            .price {
              font-size: 22px;
              color: @priceColor;
              i {
                font-size: 16px;
              }
            }
          }
        }
      }
    }
  }
  &:hover {
    .layer {
      display: block;
    }
  }
}
</style>
