// 引用pages
// import demoindex from '@/views/demo/index'
import userMgmtLogin from '@/views/UserMgmt/login/Login'
import authMgmt from '@/views/UserMgmt/login/Auth'

// 定义路由路径数组列表
export default[
  {
    path: '/userMgmtLogin',
    name: 'userMgmtLogin',
    component: userMgmtLogin
  },
  {
    path: '/authMgmt',
    name: 'authMgmt',
    component: authMgmt
  }
]
