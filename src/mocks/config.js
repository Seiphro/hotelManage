const SERVER = 'http://localhost'
const PORT = '8082'
const API_URL = {
  // homeloadData: '/home/loadData',
  managerlist: '/getManagerList',
  roomStatus: '/hotelMgmt/incomeStatistics/getRoomList',
  incomeStatus: '/hotelMgmt/incomeStatistics/getIncome'
}

export default {
  url (name) {
    return SERVER + ':' + PORT + API_URL[name]
  }
}
