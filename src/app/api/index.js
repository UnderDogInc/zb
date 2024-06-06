import axios from 'axios'

const loginConfig = {
  baseURL: 'https://jsonplaceholder.typicode.com',
  headers: {
    'Content-Type': 'application/json'
  }
}

export default axios.create(loginConfig)
