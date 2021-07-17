import XtxSkeleton from './xtx-skeleton.vue'
import XtxCarousel from '@/components/xtx-carousel.vue'

const MyPlugin = {
  install (app) {
    app.component(XtxSkeleton.name, XtxSkeleton)
    app.component(XtxCarousel.name, XtxCarousel)
  }
}

export default MyPlugin
