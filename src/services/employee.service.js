import api from '../axios/axios-app'

export const getAllEmployees = () => {
  return api.get('/employee')
}

export const createEmployee = (data) => {
  return api.post('/employee/create', data)
}
