import api from '../axios/axios-app'

export const getRoles = () => {
  return api.get('/role')
}
