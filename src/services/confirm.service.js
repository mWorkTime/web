import api from '../axios/axios-app'

export const confirmEmail = (data) =>  {
  return api.post('/confirm/email', data)
    .then(res => res)
}
