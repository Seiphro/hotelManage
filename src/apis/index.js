import Axios from '@/assets/js/AxiosPlugin'

// 接口地址
const BASE_PATH = process.env.API_URL

// // 查询管理员信息
// export const getManagerList = () => {
//   return Axios.get('/getManagerList').then(res => res.data)
// }

// 查询所有管理员
export const authMgmt = params => {
  return Axios.get(`${BASE_PATH}/getManagerList`).then(res => res.data)
}

// 查询所
export const roomStateList = params => {
  return Axios.get(`${BASE_PATH}/getRoomStateList`).then(res => res.data)
}
