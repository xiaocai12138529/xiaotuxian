<template>
  <XtxBread>
    <XtxBreadItem to="/">主页</XtxBreadItem>
    <XtxBreadItem
      v-if="subCate"
      :to="`/categroy/${id=subCate.parentId}`"
    >{{subCate.parentName}}</XtxBreadItem>
    <XtxBreadItem v-if="subCate">{{subCate.name}}</XtxBreadItem>
  </XtxBread>
</template>

<script>
export default {
  name: 'GoodsNav',
  props: {
    subCate: { type: Object }
  }

}
</script>

<style>
</style>
