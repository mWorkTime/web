import api from '../axios/axios-app'

export const getAllEmployees = () => {
  return api.get('/employee')
}

export const createEmployee = (data) => {
  return api.post('/employee/create', data)
}

export const getEmployee = (id) => {
  return api.get(`/employee/${id}`)
}

export const editEmployee = (data) => {
  return api.put('/employee/edit', data)
}

export const dismissEmployee = (data) => {
  return api.put('/employee/dismiss', data)
}
