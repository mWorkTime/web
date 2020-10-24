import api from '../axios/axios-app'

export const getAllDepartments = () => {
  return api.get('/department')
}

export const createDepartment = (data) => {
  return api.post('/department/create', data)
}
