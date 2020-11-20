import api from '../axios/axios-app'

export const getAllTasksOnReview = () => {
  return api.get('/review')
}
