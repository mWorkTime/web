import api from '../axios/axios-app'

export const getUser = () => {
  return api.get('/user')
}

export const getUserData = () => {
  return api.get('/user/edit')
}

export const editUserRegular = (data) => {
  return api.put('/user/edit/regular', data)
}

export const confirmPassword = (data) => {
  return api.post('/user/confirm/password', data)
}

export const editUserPassword = (data) => {
  return api.put('/user/edit/password', data)
}
