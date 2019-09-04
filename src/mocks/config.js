const SERVER = 'http://localhost'
const PORT = '8088'
const API_URL = {
  // homeloadData: '/home/loadData',
  managerlist: '/getManagerList'
}

export default {
  url (name) {
    return SERVER + ':' + PORT + API_URL[name]
  }
}
