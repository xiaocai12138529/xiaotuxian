import request from '@/utils/request'
export const findBrand = (limit = 6) => {
  return request('/home/brand', 'get', { limit })
}
/**
 * 获取广告图
 * @returns Promise
 */
export const findBanner = () => {
  return request('/home/banner', 'get')
}
// 主页-发现好物
export const findNew = () => {
  return request('home/new', 'get')
}
