import api from '../axios/axios-app'

export const confirmEmail = (data) =>  {
  return api.post('/confirm/email', data)
}

export const resendConfirmLink = (data) => {
  return api.post('/confirm/resend/link', data)
}

