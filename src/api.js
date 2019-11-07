import axios from 'axios'

axios.defaults.baseURL = 'https://my-json-server.typicode.com/amasho/myJSONServer'

const api = {
  async fetch(id = '') {
    const path = id !== '' ? `/inquiry/${id}` : '/inquiry'
    const res = await axios.get(path).catch(e => console.error(e))
    return res.data
  },
  async create(params) {
    axios.post('/inquiry', params).catch(e => console.error(e))
  },
  async update(id, params) {
    axios.put(`/inquiry/${id}`, params).catch(e => console.error(e))
  },
}

export default api
