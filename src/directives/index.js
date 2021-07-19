import { useIntersectionObserver } from '@vueuse/core'
import defaltImg from '@/assets/images/200.png'
const useLazyLoad = (target, url) => {
  // 1. stop 是一个函数。如果调用它，就会停止观察（是否进入或移出可视区域的行为）
  // 2. target 是观察的目标容器 dom对象 | 组件对象
  // 3. isIntersecting 是一个bool值，表示是否进入可视区域。 true表示 进入 false表示 移出
  const { stop } = useIntersectionObserver(
    target, // target 是观察的目标容器，而且是vue3.0方式绑定的dom对象
    // isIntersecting 是否进入可视区域，true是进入 false是移出
    // observerElement 被观察的dom
    ([{ isIntersecting }], observerElement) => {
      // 在此处可根据isIntersecting来判断，然后做业务
      console.log('是否可见', isIntersecting, stop)
      if (isIntersecting) {
        target.onerror = () => {
          target.src = defaltImg
        }
        stop()
        target.src = url
      }
    },
    {
      threshold: 0.1
    })
}

export default {
  install (app) {
    app.directive('imgLazy', {
      mounted (el, binding) {
        el.src = defaltImg
        // console.log(el, binding)
        console.log(binding.value)
        useLazyLoad(el, binding.value)
      }
    })
  }
}
