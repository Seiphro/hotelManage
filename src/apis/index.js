import Axios from '@/assets/js/AxiosPlugin'

// 接口地址
const BASE_PATH = process.env.API_URL
// const BASE_PATH = 'http://localhost:8082' // 数据访问地址
// // 查询管理员信息
// export const getManagerList = () => {
//   return Axios.get('/getManagerList').then(res => res.data)
// }

// 查询所有管理员
export const authMgmt = params => {
  return Axios.get(`${BASE_PATH}/getManagerList`).then(res => res.data)
}

// 超级管理员新增管理员
export const register = params => {
  return Axios.post(`${BASE_PATH}/insertManager`).then(res => res.data)
}

// 超级管理员修改管理员信息
export const updateManager = params => {
  return Axios.post(`${BASE_PATH}/updateManager`).then(res => res.data)
}

// 超级管理员删除普通管理员
export const deleteManager = params => {
  return Axios.post(`${BASE_PATH}/deleteManager`).then(res => res.data)
}

// 查询所有房间信息
export const roomStateList = params => {
  return Axios.get(`${BASE_PATH}/getRoomStateList`).then(res => res.data)
}
// 查询当前房间状态分布
export const roomStatus = params => {
  return Axios.get(`${BASE_PATH}/hotelMgmt/incomeStatistics/getRoomList`).then(res => res.data)
}

// 查看当前消费情况趋势
export const incomeStatus = params => {
  return Axios.get(`${BASE_PATH}/hotelMgmt/incomeStatistics/getIncome`).then(res => res.data)
}
