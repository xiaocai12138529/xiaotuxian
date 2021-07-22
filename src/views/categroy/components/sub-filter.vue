<template>
  <!-- 筛选区 -->
  <div
    class="sub-filter"
    v-if="subCate"
  >
    <div class="item">
      <div class="head">品牌：</div>
      <div class="body">
        <a
          href="javascript:;"
          v-for="brand in subCate.brands"
          @click="selectBrand(brand)"
          :class="{active:brand.selected}"
          :key="brand.id"
        >{{brand.name}}</a>
      </div>
    </div>

    <div
      class="item"
      v-for="sale in subCate.saleProperties"
      :key="sale.id"
    >
      <div class="head">{{sale.name}}：</div>
      <div class="body">
        <a
          href="javascript:;"
          v-for="prop in sale.properties"
          @click="selectAttr(prop, sale)"
          :class="{active:prop.selected}"
          :key="prop.id"
        >{{prop.name}}</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'SubFilter',
  props: { subCate: { type: Object, default: () => ({}) } },
  setup (props, { emit }) {
    const getFilterParams = () => {
      const obj = { brandId: null, attrs: [] }
      // 品牌
      const t = props.subCate.brands.find(brand => brand.selected)
      obj.brandId = t ? t.id : null

      // 销售属性
      props.subCate.saleProperties.forEach(item => {
        const prop = item.properties.find(prop => prop.selected)
        if (prop && prop.name !== '全部') {
          obj.attrs.push({ groupName: item.name, propertyName: prop.name })
        }
      })
      // 参考数据：{brandId:'',attrs:[{groupName:'',propertyName:''},...]}
      if (obj.attrs.length === 0) obj.attrs = null
      // debugger
      return obj
    }
    const selectBrand = (brand) => {
      console.log(brand)
      props.subCate.brands.forEach(it => { it.selected = false })
      brand.selected = true
      emit('filter-change', getFilterParams())
    }

    const selectAttr = (prop, sale) => {
      console.log(prop, sale)
      sale.properties.forEach(it => { it.selected = false })
      prop.selected = true
      emit('filter-change', getFilterParams())
    }
    return { selectBrand, selectAttr }
  }
}
</script>
<style scoped lang='less'>
// 筛选区
.sub-filter {
  background: #fff;
  padding: 25px;
  .item {
    display: flex;
    line-height: 40px;
    .head {
      width: 80px;
      color: #999;
    }
    .body {
      flex: 1;
      a {
        margin-right: 36px;
        transition: all 0.3s;
        display: inline-block;
        &.active,
        &:hover {
          color: @xtxColor;
        }
      }
    }
  }
}
</style>
