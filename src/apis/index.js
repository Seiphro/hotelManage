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

// 查看当前房间状态分布
export const roomStatus = params => {
  return Axios.get(`${BASE_PATH}/hotelMgmt/incomeStatistics/getRoomList`).then(res => res.data)
}

// 查看当前消费情况趋势
export const incomeStatus = params => {
  return Axios.get(`${BASE_PATH}/hotelMgmt/incomeStatistics/getIncome`).then(res => res.data)
}
