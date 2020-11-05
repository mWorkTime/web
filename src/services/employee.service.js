import api from '../axios/axios-app'

export const getAllEmployees = (query) => {
  const { currentPage, limit } = query
  return api.get(`/employee?currentPage=${currentPage}&limit=${limit}`)
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


export const recoverEmployee = (data) => {
  return api.put('/employee/recover', data)
}
