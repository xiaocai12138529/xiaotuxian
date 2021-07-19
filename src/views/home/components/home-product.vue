<template>
  <div
    class="home-product"
    ref="target"
  >
    <template v-if="list.length">
      <HomePanel
        :title="cate.name"
        v-for="cate in list"
        :key="cate.id"
      >
        <template v-slot:right>
          <div class="sub">
            <RouterLink
              v-for="sub in cate.children"
              :key="sub.id"
              to="/"
            >{{sub.name}}</RouterLink>
          </div>
          <XtxMore />
        </template>
        <div class="box">
          <RouterLink
            class="cover"
            to="/"
          >
            <img
              v-imgLazy="cate.picture"
              alt=""
            >
            <strong class="label">
              <span>{{cate.name}}馆</span>
              <span>{{cate.saleInfo}}</span>
            </strong>
          </RouterLink>
          <ul class="goods-list">
            <li
              v-for="item in cate.goods"
              :key="item.id"
            >
              <HomeGoods :goods="item" />
            </li>
          </ul>
        </div>
      </HomePanel>
    </template>
    <template v-else>
      <div
        class="xtxSl"
        v-for="item in 4"
        :key="item"
      >

        <xtx-skeleton
          width="240px"
          height="610px"
        />
        <div>
          <xtx-skeleton
            v-for="item in 8"
            :key="item"
            width="240px"
            height="300px"
            style="margin:0 0 10px 10px; float: right;"
          />
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import HomePanel from './home-Pannel.vue'
import HomeGoods from './home-goods'
import { findGoods } from '@/api/home'
import { ref } from 'vue'
import uselayzData from '@/compositions'
import XtxSkeleton from '@/components/xtx-skeleton.vue'
export default {
  name: 'HomeProduct',
  components: { HomePanel, HomeGoods, XtxSkeleton },
  setup () {
    const list = ref([])
    const target = uselayzData(() => {
      findGoods().then(res => {
        list.value = res.result
      })
    })
    return { list, target }
  }
}
</script>

<style scoped lang='less'>
.home-product {
  background: #fff;
  height: 2900px;
  .xtxSl {
    display: flex;
    margin-top: 115px;
    :last-child {
      flex: 1;
    }
  }
  .sub {
    margin-bottom: 2px;
    a {
      padding: 2px 12px;
      font-size: 16px;
      border-radius: 4px;
      &:hover {
        background: @xtxColor;
        color: #fff;
      }
      &:last-child {
        margin-right: 80px;
      }
    }
  }
  .box {
    display: flex;
    .cover {
      width: 240px;
      height: 610px;
      margin-right: 10px;
      position: relative;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      .label {
        width: 188px;
        height: 66px;
        display: flex;
        font-size: 18px;
        color: #fff;
        line-height: 66px;
        font-weight: normal;
        position: absolute;
        left: 0;
        top: 50%;
        transform: translate3d(0, -50%, 0);
        span {
          text-align: center;
          &:first-child {
            width: 76px;
            background: rgba(0, 0, 0, 0.9);
          }
          &:last-child {
            flex: 1;
            background: rgba(0, 0, 0, 0.7);
          }
        }
      }
    }
    .goods-list {
      width: 990px;
      display: flex;
      flex-wrap: wrap;
      li {
        width: 240px;
        height: 300px;
        margin-right: 10px;
        margin-bottom: 10px;
        &:nth-last-child(-n + 4) {
          margin-bottom: 0;
        }
        &:nth-child(4n) {
          margin-right: 0;
        }
      }
    }
  }
}
</style>
