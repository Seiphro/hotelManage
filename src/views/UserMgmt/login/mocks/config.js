const SERVER = 'http://localhost'
const PORT = '8082'
const API_URL = {
  userlogin: '/login',
  homeloadData: '/home/loadData',
  userlist: '/user/list?page=1&pageSize=10&name=&address='
}

export default {
  url (name) {
    return SERVER + ':' + PORT + API_URL[name]
  }
}
