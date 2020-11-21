import api from '../axios/axios-app'

export const getAllTasksOnReview = () => {
  return api.get('/review')
}

export const confirmReviewTask = (data) => {
  return api.put('/review/confirm/success', data)
}

export const commentReview = (data) => {
  return api.put('/review/comment/create', data)
}

export const reviewUploadFiles = (data) => {
  return api.put('/review/comment/files/upload', data)
}
