import api from '../axios/axios-app'

export const fetchRegister = (data) => {
  return api.post('/auth/register', data)
}

export const fetchLogin = (data) => {
  return api.post('/auth/login', data)
}
