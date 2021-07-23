import XtxSkeleton from './xtx-skeleton.vue'
import XtxMore from './xtx-more.vue'
import XtxCarousel from '@/components/xtx-carousel.vue'
import XtxBread from '@/components/xtx-bread.vue'
import XtxBreadItem from '@/components/xtx-bread-item.vue'
import XtxInfiniteLoading from '@/components/xtx-infinite-loading.vue'
import XtxCity from '@/components/xtx-city.vue'

const MyPlugin = {
  install (app) {
    app.component(XtxSkeleton.name, XtxSkeleton)
    app.component(XtxCarousel.name, XtxCarousel)
    app.component(XtxMore.name, XtxMore)
    app.component(XtxBread.name, XtxBread)
    app.component(XtxBreadItem.name, XtxBreadItem)
    app.component(XtxInfiniteLoading.name, XtxInfiniteLoading)
    app.component(XtxCity.name, XtxCity)
  }
}

export default MyPlugin
