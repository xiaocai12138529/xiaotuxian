import XtxSkeleton from './library/xtx-skeleton.vue'

const MyPlugin = {
  install (app) {
    app.component(XtxSkeleton.name, XtxSkeleton)
  }
}

export default MyPlugin
