import request from '../utils/request'

export default {
  addSchedule(bSchedule) {
    return request({
      url: '/pulse/schedule/addSchedule',
      method: 'post',
      data: bSchedule
    })
  },
  updateSchedule(bSchedule) {
    return request({
      url: '/pulse/schedule/updateSchedule',
      method: 'post',
      data: bSchedule
    })
  },
  queryScheduleListAll() {
    return request({
      url: '/pulse/schedule/queryScheduleListAll',
      method: 'get'
    })
  },
  querySchedule(id) {
    return request({
      url: '/pulse/schedule/querySchedule/' + id,
      method: 'get'
    })
  },
  addScheduleBatch(rangeForm) {
    return request({
      url: '/pulse/schedule/addScheduleBatch',
      method: 'post',
      data: rangeForm
    })
  },
  getQuestionBySchedule(date) {
    return request({
      url: '/pulse/answer/getQuestionBySchedule/' + date,
      method: 'get'
    })
  },
  finishSchedule(date) {
    return request({
      url: '/pulse/schedule/finishSchedule/' + date,
      method: 'get'
    })
  }
}
