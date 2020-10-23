import api from '../axios/axios-app'

export const getAllDepartments = () => {
  return api.get('/department')
}
