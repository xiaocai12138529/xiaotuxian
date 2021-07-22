<template>
  <div
    class="xtx-infinite-loading"
    ref="target"
  >
    <!-- 正在加载数据时显示 -->
    <div
      class="loading"
      v-if="isLoading"
    >
      <span class="img"></span>
      <span class="text">正在加载...</span>
    </div>
    <!-- 数据全部加载完毕时显示 -->
    <div
      class="none"
      v-if="isFinished"
    >
      <span class="text">亲，没有更多了</span>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'
export default {
  name: 'XtxInfiniteLoading',
  props: {
    isFinished: {
      type: Boolean,
      default: false
    },
    isLoading: {
      type: Boolean,
      default: false
    }
  },
  setup (props, { emit }) {
    const target = ref(null)
    const { stop } = useIntersectionObserver(target, ([{ isIntersecting }], dom) => {
      if (isIntersecting && !props.isFinished && !props.isLoading) {
        if (props.isFinished === 1) stop()
        emit('loading')
      }
    }, { threshold: 0 })
    return { target }
  }
}
</script>

<style scoped lang='less'>
.xtx-infinite-loading {
  .loading {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 200px;
    .img {
      width: 50px;
      height: 50px;
      background: url("~@/assets/images/load.gif") no-repeat center / contain;
    }
    .text {
      color: #999;
      font-size: 16px;
    }
  }
  .none {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 200px;
    .text {
      color: #999;
      font-size: 16px;
    }
  }
}
</style>
