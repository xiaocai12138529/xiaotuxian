<template>
  <div class="goods-image">
    <div
      v-if="!isOutside"
      class="large"
      :style="{backgroundImage: `url(${images[curIdx]})`, ...largeStyle}"
    ></div>
    <div
      class="middle"
      ref="target"
    >
      <img
        :src="images[curIdx]"
        alt=""
      >
      <div
        class="layer"
        :style="layerStyle"
        v-if="!isOutside"
      ></div>
    </div>
    <ul class="small">
      <li
        v-for="(url,ind) in images"
        :key="url"
        :class="{active: ind === curIdx}"
        @mouseenter="curIdx = ind"
      >
        <img
          :src="url"
          alt=""
        >
      </li>
    </ul>
  </div>
</template>
<script>
import { reactive, ref, watch } from 'vue'
import { useMouseInElement } from '@vueuse/core'

export default {
  name: '',
  props: { images: { type: Array, default: () => ([]) } },
  setup () {
    const curIdx = ref(0) // 显示图片的效果
    const target = ref(null)
    const layerStyle = reactive({ top: 0, left: 0 })
    const largeStyle = reactive({})

    const { elementX, elementY, isOutside } = useMouseInElement(target)
    watch([elementX, elementY, isOutside], () => {
      let top = elementY.value - 100
      let left = elementX.value - 100
      if (top > 200) top = 200
      if (left > 200) left = 200
      if (top < 0) top = 0
      if (left < 0) left = 0
      layerStyle.top = top + 'px'
      layerStyle.left = left + 'px'
      largeStyle['background-position'] = `-${top * 2}px -${left * 2}px`
    })
    return { curIdx, target, layerStyle, isOutside, largeStyle }
  }
}
</script>
<style scoped lang="less">
.goods-image {
  width: 480px;
  height: 400px;
  position: relative;
  display: flex;
  z-index: 500;
  .large {
    position: absolute;
    top: 0;
    left: 412px;
    width: 400px;
    height: 400px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    background-repeat: no-repeat;
    background-size: 800px 800px;
    background-color: #f8f8f8;
  }
  .middle {
    width: 400px;
    height: 400px;
    position: relative;
    cursor: move;
    .layer {
      width: 200px;
      height: 200px;
      background: rgba(0, 0, 0, 0.2);
      left: 0;
      top: 0;
      position: absolute;
    }
  }
  .small {
    width: 80px;
    li {
      width: 68px;
      height: 68px;
      margin-left: 12px;
      margin-bottom: 15px;
      cursor: pointer;
      &:hover,
      &.active {
        border: 2px solid @xtxColor;
      }
    }
  }
}
</style>
