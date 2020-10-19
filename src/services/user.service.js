import api from '../axios/axios-app'

export const getUser = (token) => {
  return api.get('/user', { headers: { 'Authorization': `Bearer ${token}` } })
}
