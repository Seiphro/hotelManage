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
    'data|1-5': [{
      'id|+1': 1,
      'name': '@cname',
      'age|18-45': 1,    // 10-60以内的随机数，0用来确定类型
      'userType': 1
      // 'date': '@date("yyyy-MM-dd")'    // 年月日
    }]
  })
})
// 统计房态(房间入住情况)
Mock.mock(config.url('roomStatus'), function () {
  console.log('mock roomStatus')
  return Mock.mock({
    'errorcode': '00000',
    'errormsg': '',
    'data': [
      {
        'status': 0, // 入住
        'count': 3
      },
      {
        'status': 1, // 预定
        'count': 1
      },
      {
        'status': -1, // 空房
        'count': 22
      }
    ]
  })
})
// 统计房态(房间入住情况)
Mock.mock(config.url('incomeStatus'), function () {
  console.log('mock incomeStatus')
  return Mock.mock({
    'errorcode': '00000',
    'errormsg': '',
    'data': [
      {
        'amonth': '2019-01',
        'totalMoney': 2000
      },
      {
        'amonth': '2019-02',
        'totalMoney': 600
      },
      {
        'amonth': '2019-03',
        'totalMoney': 300
      },
      {
        'amonth': '2019-04',
        'totalMoney': 500
      },
      {
        'amonth': '2019-05',
        'totalMoney': 2000
      },
      {
        'amonth': '2019-06',
        'totalMoney': 3000
      },
      {
        'amonth': '2019-07',
        'totalMoney': 2000
      },
      {
        'amonth': '2019-08',
        'totalMoney': 8549
      },
      {
        'amonth': '2019-09',
        'totalMoney': 120
      },
      {
        'amonth': '2019-10',
        'totalMoney': 120
      }
      // {
      //   'amonth': '2019-11',
      //   'totalMoney': 120
      // },
      // {
      //   'amonth': '2019-12',
      //   'totalMoney': 120
      // }
    ]
  })
})
