import request from '../utils/request'

export default {
  addVisitor(visitor) {
    return request({
      url: '/pulse/visitor/addVisitor',
      method: 'post',
      data: visitor
    })
  },
  addAnswer(answer) {
    return request({
      url: '/pulse/answer/addAnswer',
      method: 'post',
      data: answer
    })
  },
  getUserInfoByBelieve(codeAndAppId) {
    return request({
      // 接口路径
      url: 'https://civetinterface.foxconn.com/open/get_user_info_bycode?' + codeAndAppId,
      method: 'get'
    })
  }
}