<template>
  <div class="home-banner">
    <XtxCarousel :siders='siders' />
  </div>
</template>
<script>
import { findBanner } from '@/api/home'
import { ref } from 'vue'
export default {
  name: 'HomeBanner',
  setup () {
    const siders = ref(null)
    findBanner().then(data => {
      siders.value = data.result
    })
    return { siders }
  }
}
</script>
<style scoped lang="less">
.home-banner {
  width: 1240px;
  height: 500px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 98;
}
</style>
