import { useRoute } from 'vue-router'
const router = useRoute()

export const reqParams = {
  categoryId: router.params.id, // 分类id
  inventory: false, // 是否有库存
  onlyDiscount: false, // 只显示特惠
  brandId: null, // 品牌名称
  attrs: [], // 商品属性
  sortField: null, // 排序类别
  sortMethod: 'desc', // 排序规则
  page: 1,
  pageSize: 10
}
