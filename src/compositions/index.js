import { ref } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'

/**
 * 数据懒加载
 */
export default (fn) => {
  // 1. stop 是一个函数。如果调用它，就会停止观察（是否进入或移出可视区域的行为）
  // 2. target 是观察的目标容器 dom对象 | 组件对象
  // 3. isIntersecting 是一个bool值，表示是否进入可视区域。 true表示 进入 false表示 移出
  const target = ref(null)

  const { stop } = useIntersectionObserver(
    target,
    ([{ isIntersecting }], observerElement) => {
      // 这里进行业务逻辑
      // 在此处可根据isIntersecting来判断，然后做业务
      if (isIntersecting) { // 目标可见，
        // 1. ajax可以发了，后续不需要观察了
        stop()
        // 2. 执行函数
        fn()
      }
    },
    { threshold: 0 } // threshold  元素进入可视区域的比值 [0-1]
  )

  return target
}
