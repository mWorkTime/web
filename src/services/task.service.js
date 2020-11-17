import api from '../axios/axios-app'

export const getAllTasks = () => {
  return api.get('/task')
}

export const getEmployeesByDepartment = (data) => {
  return api.post('/task/employees', data)
}

export const createTask = (data) => {
  return api.post('/task/create', data)
}

export const uploadTaskFiles = (data) => {
  return api.put('/task/upload', data)
}
