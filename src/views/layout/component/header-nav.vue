<template>
  <ul class="app-header-nav">
    <li class="home">
      <RouterLink to="/">首页</RouterLink>
    </li>
    <li
      v-for="item in list "
      :key="item.id"
    >
      <RouterLink :to="`/categroy/${item.id}`">
        <a href="#">{{item.name}}</a>
      </RouterLink>
      <!--下边是一个弹层内容-->
      <div class="layer">
        <ul>
          <li
            v-for="i in item.children"
            :key="i.id"
          >
            <a href="#">
              <RouterLink :to="`/categroy/sub/${i.id}`">
                <img
                  :src="i.picture"
                  alt=""
                >
                <p>{{i.name}}</p>
              </RouterLink>
            </a>
          </li>
        </ul>
      </div>
    </li>
    <!-- <li><a href="#">餐厨</a></li>
    <li><a href="#">艺术</a></li>
    <li><a href="#">电器</a></li>
    <li><a href="#">居家</a></li>
    <li><a href="#">洗护</a></li>
    <li><a href="#">孕婴</a></li>
    <li><a href="#">服装</a></li>
    <li><a href="#">杂货</a></li> -->
  </ul>
</template>

<script>
import { useStore } from 'vuex'
export default {
  name: 'AppHeaderNav',
  setup () {
    const store = useStore()
    const list = store.state.category.list
    return { list }
  }

}
</script>

<style scoped lang='less'>
.app-header-nav {
  width: 820px;
  display: flex;
  justify-content: space-around;
  padding-left: 40px;
  position: relative;
  z-index: 998;
  > li {
    margin-right: 40px;
    width: 38px;
    text-align: center;
    > a {
      font-size: 16px;
      line-height: 32px;
      height: 32px;
      display: inline-block;
    }
    &:hover {
      > a {
        color: @xtxColor;
        border-bottom: 1px solid @xtxColor;
      }
    }
    // 初始样式 不显示
    .layer {
      width: 1240px;
      background-color: #fff;
      position: absolute;
      left: -200px;
      top: 56px;
      height: 0; // 不显示
      overflow: hidden; // 不显示
      opacity: 0; // 不显示
      box-shadow: 0 0 5px #ccc;
      transition: all 0.2s 0.1s;
      ul {
        display: flex;
        flex-wrap: wrap;
        padding: 0 70px;
        align-items: center;
        height: 124px;
        li {
          width: 110px;
          text-align: center;
          img {
            width: 60px;
            height: 60px;
          }
          p {
            padding-top: 10px;
          }
          &:hover {
            p {
              color: @xtxColor;
            }
          }
        }
      }
    }
    // 在li 上 hover时
    &:hover {
      // 加上 > 直接子元素
      > a {
        color: @xtxColor;
        border-bottom: 1px solid @xtxColor;
      }
      > .layer {
        // 显示
        height: 124px;
        opacity: 1;
      }
    }
  }
}
</style>
