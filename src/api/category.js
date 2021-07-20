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
