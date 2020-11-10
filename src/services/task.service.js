import api from '../axios/axios-app'

export const getAllTasks = () => {
  return api.get('/task')
}
