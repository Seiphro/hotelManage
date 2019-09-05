const SERVER = 'http://localhost'
const PORT = '8088'
const API_URL = {
  // homeloadData: '/home/loadData',
  managerlist: '/getManagerList',
  roomStateList: '/getRoomStateList'
}

export default {
  url (name) {
    return SERVER + ':' + PORT + API_URL[name]
  }
}
