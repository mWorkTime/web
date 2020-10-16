import api from '../axios/axios-app'

export const getUser = () => {
  return api.get('/user')
}
