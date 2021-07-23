<template>
  <!-- 面包屑 -->
  <XtxBread>
    <XtxBreadItem to="/">首页</XtxBreadItem>
    <XtxBreadItem :to="`/categroy/${id=product.categories[1].id}`">{{product.categories[1].name}}</XtxBreadItem>
    <XtxBreadItem :to="`/categroy/sub/${id=product.categories[0].id}`">{{product.categories[0].name}}</XtxBreadItem>
    <XtxBreadItem to="">{{product.name}}</XtxBreadItem>
  </XtxBread>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      default: () => ({})
    }
  }

}
</script>

<style>
</style>
