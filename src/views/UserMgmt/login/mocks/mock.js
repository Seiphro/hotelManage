
import config from './config'
import Mock from 'mockjs'

Mock.mock(config.url('userlogin'), function () {
  console.log('mock userlogin')
  return {
    'errorcode': '200',
    'errormsg': '登录成功',
    'data': {
      'name': 'admin',
      'age': 28,
      'password': 'admin',
      'userType': 0   // 超级管理员是0 普通管理员是1
    }
    // // 登录失败情况
    // 'errorcode': '500',
    // 'errormsg': '鉴权失败，用户名或密码错误'
  }
})

Mock.mock(config.url('homeloadData'), function () {
  console.log('mock homeloadData')
  return {'status': true, 'code': 200, 'message': null, 'data': 'hello'}
})

Mock.mock(config.url('userlist'), function () {
  console.log('mock userlist')
  return {'status': true, 'code': 200, 'message': null, 'data': {'total': 19, 'pageSize': 1000, 'list': [{'id': 1, 'name': '王小虎21_1', 'address': '上海市普陀区金沙江路 1518 弄', 'date': '2016-05-02'}, {'id': 2, 'name': '王小虎21_2', 'address': '上海市普陀区金沙江路 1518 弄', 'date': '2016-05-02'}, {'id': 3, 'name': '王小虎21_3', 'address': '上海市普陀区金沙江路 1518 弄', 'date': '2016-05-02'}, {'id': 4, 'name': '王小虎21_4', 'address': '上海市普陀区金沙江路 1518 弄', 'date': '2016-05-02'}, {'id': 5, 'name': '王小虎21_5', 'address': '上海市普陀区金沙江路 1518 弄', 'date': '2016-05-02'}, {'id': 6, 'name': '王小虎21_6', 'address': '上海市普陀区金沙江路 1518 弄', 'date': '2016-05-02'}, {'id': 7, 'name': '王小虎21_7', 'address': '上海市普陀区金沙江路 1518 弄', 'date': '2016-05-02'}, {'id': 8, 'name': '王小虎21_8', 'address': '上海市普陀区金沙江路 1518 弄', 'date': '2016-05-02'}, {'id': 9, 'name': '王小虎21_9', 'address': '上海市普陀区金沙江路 1518 弄', 'date': '2016-05-02'}, {'id': 10, 'name': '王小虎21_10', 'address': '上海市普陀区金沙江路 1518 弄', 'date': '2016-05-02'}], 'currentPage': 1}}
})

Mock.mock(config.url('managerlist'), function () {
  console.log('mock managerlist')
  return {
    'data': [
      {
        'name': 'Rufus',
        'isAdmin': 1
      },
      {
        'name': 'Marty',
        'isAdmin': 1
      }
    ]
  }
})
/*
Mock.mock(config.url('test'), function () {
  console.log('mock homeloadData')
  return { 'status': true, 'code': 200, 'message': null, 'data': 'hello' }
})
*/
