// 导入
import request from '@/utils/request'

/**
 * 获取首页头部分类数据
 */
export const findHeadCategory = () => {
  return request('/home/category/head', 'get')
}

/**
 * @description: 获取分类数据
 * @param {*} id 分类id
 * @return {*}
 */
export const findTopCategory = (id) => {
  return request('/category', 'get', { id })
}
/**
 * 获取二级分类筛选条件数据
 * @param {String} id - 二级分类ID
 */
export const findSubCategoryFilter = (id) => {
  return request('/category/sub/filter', 'get', { id })
}
/**
 * @description: 获取筛选商品
 * @param {*} params
 * @return {*}
 */
export const findSubCategoryGoods = (params) => {
  return request('/category/goods', 'post', params)
}
