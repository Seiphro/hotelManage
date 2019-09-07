const SERVER = 'http://localhost'
const PORT = '8082'
const API_URL = {
  // homeloadData: '/home/loadData',
  managerlist: '/getManagerList',
  roomStateList: '/getRoomStateList',
  roomStatus: '/hotelMgmt/incomeStatistics/getRoomList'
}

export default {
  url (name) {
    return SERVER + ':' + PORT + API_URL[name]
  }
}
