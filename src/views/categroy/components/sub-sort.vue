<template>
  <div class="list-container">
    <!-- 排序区域 -->
    <div class='sub-sort'>
      <div class="sort">
        <a
          :class="{ active: sortParams.sortField === null }"
          @click="changeSort(null)"
          href="javascript:;"
        >默认排序</a>
        <a
          :class="{ active: sortParams.sortField === 'publishTime' }"
          @click="changeSort('publishTime')"
          href="javascript:;"
        >最新商品</a>
        <a
          :class="{ active: sortParams.sortField === 'orderNum' }"
          @click="changeSort('orderNum')"
          href="javascript:;"
        >最高人气</a>
        <a
          :class="{ active: sortParams.sortField === 'evaluateNum' }"
          @click="changeSort('evaluateNum')"
          href="javascript:;"
        >评论最多</a>

        <a
          :class="{ active: sortParams.sortField === 'price' }"
          @click="changeSort('price')"
          href="javascript:;"
        >价格
          <i
            class="arrow up"
            :class="{active:sortParams.sortField==='price'&&sortParams.sortMethod=='asc'}"
          />
          <i
            class="arrow down"
            :class="{active:sortParams.sortField==='price'&&sortParams.sortMethod=='desc'}"
          />
        </a>
      </div>
      <div class="check">
        <!-- <input
          type="checkbox"
          v-model="sortParams.inventory"
        />仅显示有货商品
        <input
          type="checkbox"
          v-model="sortParams.onlyDiscount"
        />仅显示特惠商品 -->
        <XtxCheckbox v-model="sortParams.inventory">仅显示有货商品</XtxCheckbox>
        <XtxCheckbox v-model="sortParams.onlyDiscount">仅显示特惠商品</XtxCheckbox>
      </div>
    </div>
  </div>
</template>
<script>
import { reactive, watch } from 'vue'
import XtxCheckbox from './xtx-checkbox.vue'
export default {
  components: { XtxCheckbox },
  setup (props, { emit }) {
    const sortParams = reactive({
      inventory: false,
      onlyDiscount: false,
      sortField: null,
      sortMethod: 'desc'
    })

    // publishTime(最新), orderNum(人气), price(价格), evaluateNum(评论)

    function changeSort (sortField) {
      sortParams.sortField = sortField
      // 对价格特殊处理
      if (sortField === 'price') {
        if (sortParams.sortMethod === null) {
          // 第一次点击，默认是降序
          sortParams.sortMethod = 'desc'
        } else {
          // 不是第一次点击：当前排序取反
          sortParams.sortMethod = sortParams.sortMethod === 'desc' ? 'asc' : 'desc'
        }
      } else {
        // 如果排序未改变停止逻辑
        sortParams.sortMethod = 'desc'
      }
    }
    watch(sortParams, () => {
      emit('sort-change', sortParams)
    })
    return { changeSort, sortParams }
  }
}
</script>
<style scoped lang='less'>
input[type="checkbox"] {
  -webkit-appearance: button;
}
.sub-sort {
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .sort {
    display: flex;
    a {
      height: 30px;
      line-height: 28px;
      border: 1px solid #e4e4e4;
      padding: 0 20px;
      margin-right: 20px;
      color: #999;
      border-radius: 2px;
      position: relative;
      transition: all 0.3s;
      &.active {
        background: @xtxColor;
        border-color: @xtxColor;
        color: #fff;
      }
      .arrow {
        position: absolute;
        border: 5px solid transparent;
        right: 8px;
        &.up {
          top: 3px;
          border-bottom-color: #bbb;
          &.active {
            border-bottom-color: @xtxColor;
          }
        }
        &.down {
          top: 15px;
          border-top-color: #bbb;
          &.active {
            border-top-color: @xtxColor;
          }
        }
      }
    }
  }
  .check {
    .xtx-checkbox {
      margin-left: 20px;
      color: #999;
    }
  }
}
</style>
