import api from '../axios/axios-app'

export const getAllTasksOnReview = () => {
  return api.get('/review')
}

export const confirmReviewTask = (data) => {
  return api.put('/review/confirm/success', data)
}
