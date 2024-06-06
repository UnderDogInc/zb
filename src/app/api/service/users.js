import api from '../index.js'

const currentString = (query, arr) => {
  return arr.map(item => `${query}=${item}`).join('&')
}
const getUsers = (query, arr) => {
  const params = currentString(query, arr);
  return api.get(`/users?${params}`);

}

export default getUsers
