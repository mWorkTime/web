import api from '../axios/axios-app'

export const getAllTasks = () => {
  return api.get('/task')
}

export const getEmployeesByDepartment = (data) => {
  return api.post('/task/employees', data)
}
