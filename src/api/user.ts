import request from '@/utils/request'

/**
 * 登录接口
 */
export function login(data: any) {
  return request({
    method: 'post',
    url: '/sys/login',
    data
  })
}

/**
 * 获取用户资料接口
 */
export function getUserInfo() {
  return request({
    method: 'post',
    url: '/sys/profile'
  })
}

/**
 *
 * 根据用户id 获取用户基本信息(获取头像)
 */
export function getUserDetailById(id: any) {
  return request({
    method: 'get',
    url: `/sys/user/${id}`
  })
}

export function logout() {

}
