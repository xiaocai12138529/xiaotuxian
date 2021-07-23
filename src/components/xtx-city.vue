<template>
  <div
    class="xtx-city"
    ref="target"
  >
    <div
      class="select"
      @click="toggleDialog"
      :class="{active: visible}"
    >
      <span class="placeholder">{{fullLocation}}</span>
      <span class="value"></span>
      <i class="iconfont icon-angle-down"></i>
    </div>
    <div
      class="option"
      v-show="visible"
    >
      <span
        class="ellipsis"
        v-for="city in curList"
        :key="city.code"
        @click="changeItem(city)"
      >{{city.name}}</span>
    </div>
  </div>
</template>

<script>
import { ref, reactive, computed } from 'vue'
import { onClickOutside } from '@vueuse/core'
import axios from 'axios'
const url = 'https://yjy-oss-files.oss-cn-zhangjiakou.aliyuncs.com/tuxian/area.json'
// 获取省市区数据
const getCityData = () => {
  return axios({ url })
}
export default {
  name: 'XtxCity',
  props: { fullLocation: { type: String, default: '' } },
  setup (props, { emit }) {
    // 城市数据
    const cityData = ref([])
    // 控制展开收起,默认收起
    const visible = ref(false)
    const openDialog = () => {
      visible.value = true
      // 在打开的时候发送数据
      if (!cityData.value.length) {
        getCityData().then(res => {
          cityData.value = res.data
        })
      }
    }
    const closeDialog = () => {
      visible.value = false
      // changeResult.provinceCode = '' // 省的code
      // changeResult.provinceName = '' // 省的name
      // changeResult.cityCode = '' // 市的code
      // changeResult.cityName = '' // 市的name
      // changeResult.countyCode = '' // 区的code
      // changeResult.countyName = '' // 区的name
      // changeResult.fullLocation = ''// 组合
      // changeResult.forEach(item => {
      //   item = ''
      // })
      for (const key in changeResult) {
        changeResult[key] = ''
      }
    }
    // 切换展开收起
    const toggleDialog = () => {
      if (visible.value) closeDialog()
      else openDialog()
    }
    // 点击其他位置隐藏
    const target = ref(null)
    onClickOutside(target, () => {
      closeDialog()
    })
    // 点击改变地址
    const changeResult = reactive({
      provinceCode: '', // 省的code
      provinceName: '', // 省的name
      cityCode: '', // 市的code
      cityName: '', // 市的name
      countyCode: '', // 区的code
      countyName: '', // 区的name
      fullLocation: '' // 组合
    })
    // 定义计算属性
    const curList = computed(() => {
      // 省份
      let currList = cityData.value
      // 城市
      if (changeResult.provinceCode) {
        currList = currList.find(p => p.code === changeResult.provinceCode).areaList
      }
      // 地区
      if (changeResult.cityCode) {
        currList = currList.find(c => c.code === changeResult.cityCode).areaList
      }
      return currList
    })
    const changeItem = (city) => {
      console.log(city)
      if (city.level === 0) {
        // 点击的是省
        changeResult.provinceCode = city.code
        changeResult.provinceName = city.name
      }
      if (city.level === 1) {
        // 点击的是省
        changeResult.cityCode = city.code
        changeResult.cityName = city.name
      }
      if (city.level === 2) {
        // 点击的是省
        changeResult.countyCode = city.code
        changeResult.countyName = city.name
        changeResult.fullLocation = `${changeResult.provinceName} ${changeResult.cityName} ${changeResult.countyName}`
        emit('change', changeResult)
        closeDialog()
      }
    }
    return { visible, toggleDialog, target, cityData, changeItem, curList }
  }
}
</script>
<style scoped lang="less">
.xtx-city {
  display: inline-block;
  position: relative;
  z-index: 400;
  .select {
    border: 1px solid #e4e4e4;
    height: 30px;
    padding: 0 5px;
    line-height: 28px;
    cursor: pointer;
    &.active {
      background: #fff;
    }
    .placeholder {
      color: #999;
    }
    .value {
      color: #666;
      font-size: 12px;
    }
    i {
      font-size: 12px;
      margin-left: 5px;
    }
  }
  .option {
    width: 542px;
    border: 1px solid #e4e4e4;
    position: absolute;
    left: 0;
    top: 29px;
    background: #fff;
    min-height: 30px;
    line-height: 30px;
    display: flex;
    flex-wrap: wrap;
    padding: 10px;
    > span {
      width: 130px;
      text-align: center;
      cursor: pointer;
      border-radius: 4px;
      padding: 0 3px;
      &:hover {
        background: #f5f5f5;
      }
    }
  }
}
</style>
