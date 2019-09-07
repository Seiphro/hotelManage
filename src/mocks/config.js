const SERVER = 'http://localhost'
const PORT = '8082'
const API_URL = {
  // homeloadData: '/home/loadData',
  managerlist: '/getManagerList',
<<<<<<< HEAD
  roomStatus: '/hotelMgmt/incomeStatistics/getRoomList',
  incomeStatus: '/hotelMgmt/incomeStatistics/getIncome'
=======
  roomStateList: '/getRoomStateList',
  roomStatus: '/hotelMgmt/incomeStatistics/getRoomList'
>>>>>>> e3348a64b990f9347203f0409edaca0bd5decb30
}

export default {
  url (name) {
    return SERVER + ':' + PORT + API_URL[name]
  }
}
