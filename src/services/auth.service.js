import api from '../axios/axios-app'

export const fetchRegister = (data) => {
  return api.post('/auth/register', data)
    .then(res => res)
}

export const fetchLogin = (data) => {
  return api.post('/auth/login', data)
    .then(res => res)
}
