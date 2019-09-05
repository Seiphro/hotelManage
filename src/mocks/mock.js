// 引用子模块的mock文件
// import '@/views/demo/mocks/mock.js'

import config from './config'

import Mock from 'mockjs'
// 引用子模块的mock文件
import '@/views/demo/mocks/mock.js'
// 引用子模块的mock文件
import '@/views/UserMgmt/login/mocks/mock.js'

// 配置mock过滤路径
Mock.mock(
  '/demo/user/queryPageData?currentPage=1&pageSize=10&userId=1030',
  function () {
    console.log('mock getTree')
    return {
      pageCount: 27,
      user: [
        {
          id: '11',
          userName: '1',
          userCode: '11'
        },
        {
          id: '12',
          userName: '2',
          userCode: '12'
        }
      ]
    }
  }
)

Mock.mock(config.url('managerlist'), function () {
  console.log('mock managerlist')
  return Mock.mock({
    'data|1-10': [{
      'name': '@cname',
      'id|+1': 1,
      'isAdmin|0-1': 0,    // 10-60以内的随机数，0用来确定类型
      'date': '@date("yyyy-MM-dd")',    // 年月日
      'address': '@city(true)'    // 中国城市
    }]
  })
})

Mock.mock(config.url('roomStateList'), function () {
  console.log('mock roomStateList')
  return Mock.mock({
    'data|32': [{
      'guestName': '@cname',
      'id|+1': 1,
      'state|0-1': 0    // 10-60以内的随机数，0用来确定类型
    }]
  })
})

// 统计房态
Mock.mock(config.url('roomStatus'), function () {
  console.log('mock roomStatus')
  return Mock.mock({
    data: [{
      'checkIn|0-50': 0,
      'ordered|0-50': 0,
      'empty|0-50': 0
    }]
  })
})
