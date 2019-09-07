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

// 查看所有管理员
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

// 新增管理员
Mock.mock(config.url('registerManager'), function () {
  console.log('mock registerManager')
  return {
    'errorcode': 200,
    'errormsg': '新增管理员成功',
    'data': ''
  }
})

// 超级管理员修改普通管理员
Mock.mock(config.url('updateManager'), function () {
  console.log('mock updateManager')
  return {
    'errorcode': 200,
    'errormsg': '修改管理员成功',
    'data': ''
  }
})

// 删除管理员
Mock.mock(config.url('deleteManager'), function () {
  console.log('mock deleteManager')
  return {
    'errorcode': 200,
    'errormsg': '删除管理员成功',
    'data': ''
  }
})

// 管理员自己给自己修改密码
Mock.mock(config.url('resetManagerPwd'), function () {
  console.log('mock resetManagerPwd')
  return {
    'errorcode': 200,
    'errormsg': '修改密码成功',
    'data': ''
  }
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
