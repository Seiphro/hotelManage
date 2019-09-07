const SERVER = 'http://localhost'
const PORT = '8082'
const API_URL = {
  // homeloadData: '/home/loadData',
  managerlist: '/getManagerList',
<<<<<<< HEAD
<<<<<<< HEAD
  roomStatus: '/hotelMgmt/incomeStatistics/getRoomList',
  incomeStatus: '/hotelMgmt/incomeStatistics/getIncome'
=======
=======
  registerManager: '/insertManager',
  updateManager: '/updateManager',
  deleteManager: '/deleteManager',
  resetManagerPwd: '/updateManager',
>>>>>>> ecf3a3221417dbd86ce06dd5d9fc17ab84ba0428
  roomStateList: '/getRoomStateList',
  roomStatus: '/hotelMgmt/incomeStatistics/getRoomList'
>>>>>>> e3348a64b990f9347203f0409edaca0bd5decb30
}

export default {
  url (name) {
    return SERVER + ':' + PORT + API_URL[name]
  }
}
