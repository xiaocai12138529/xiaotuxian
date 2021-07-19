<template>
  <div
    class="home-brand"
    ref="target"
  >
    <HomePanel
      title="热门品牌"
      sub-title="国际经典 品质保证"
    >
      <template v-slot:right>
        <a
          @click="curIdx=0"
          :class="{disabled:curIdx===0}"
          href="javascript:;"
          class="iconfont icon-angle-left prev"
        ></a>
        <a
          @click="curIdx=1"
          :class="{disabled:curIdx===1}"
          href="javascript:;"
          class="iconfont icon-angle-right next"
        ></a>
      </template>
      <div class="box">
        <ul
          v-if="brands.length"
          class="list"
          :style="transX"
        >
          <li
            v-for="item in brands"
            :key="item.id"
          >
            <RouterLink to="/">
              <img
                :src="item.picture"
                alt=""
              >
            </RouterLink>
          </li>
        </ul>
        <template v-else>
          <xtx-skeleton
            width='240px'
            height="305px"
            style="margin-right:10px;"
          />
          <xtx-skeleton
            width='240px'
            height="305px"
            style="margin-right:10px;"
          />
          <xtx-skeleton
            width='240px'
            height="305px"
            style="margin-right:10px;"
          />
          <xtx-skeleton
            width='240px'
            height="305px"
            style="margin-right:10px;"
          />
          <xtx-skeleton
            width='240px'
            height="305px"
          />
        </template>
      </div>
    </HomePanel>
  </div>
</template>

<script>
import { computed, ref } from 'vue'
import HomePanel from './home-Pannel.vue'
import { findBrand } from '@/api/home'
import uselayzData from '@/compositions'
import XtxSkeleton from '@/components/xtx-skeleton.vue'
export default {
  name: 'HomeBrand',
  components: { HomePanel, XtxSkeleton },
  setup () {
    // 获取数据
    const brands = ref([])
    // 数据懒加载
    const target = uselayzData(() => {
      findBrand(10).then(data => {
        brands.value = data.result
      })
    })
    // 切换效果：只有 0 1 两页
    const curIdx = ref(0) // 0, 1
    const transX = computed(() => {
      const t = -1200 * curIdx.value
      return `transform: translateX(${t}px)`
    })

    return { brands, transX, curIdx, target }
  }
}
</script>

<style scoped lang='less'>
.home-panel {
  background: #f5f5f5;
}
.iconfont {
  width: 20px;
  height: 20px;
  background: #ccc;
  color: #fff;
  display: inline-block;
  text-align: center;
  margin-left: 5px;
  background: @xtxColor;
  &::before {
    font-size: 12px;
    position: relative;
    top: -2px;
  }
  &.disabled {
    background: #ccc;
    cursor: not-allowed;
  }
}
.box {
  display: flex;
  width: 100%;
  height: 345px;
  overflow: hidden;
  padding-bottom: 40px;
  .list {
    width: 200%;
    display: flex;
    transition: all 1s;
    li {
      margin-right: 10px;
      width: 240px;
      &:nth-child(5n) {
        margin-right: 0;
      }
      img {
        width: 240px;
        height: 305px;
      }
    }
  }
}
</style>
