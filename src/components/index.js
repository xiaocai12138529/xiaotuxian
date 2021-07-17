import XtxSkeleton from './xtx-skeleton.vue'
import XtxMore from './xtx-more.vue'
import XtxCarousel from '@/components/xtx-carousel.vue'

const MyPlugin = {
  install (app) {
    app.component(XtxSkeleton.name, XtxSkeleton)
    app.component(XtxCarousel.name, XtxCarousel)
    app.component(XtxMore.name, XtxMore)
  }
}

export default MyPlugin
