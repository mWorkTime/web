import api from '../axios/axios-app'

export const getRoles = () => {
  return api.get('/role')
}

export const getUserRole = (id) => {
  return api.get(`/role/${id}`)
}
