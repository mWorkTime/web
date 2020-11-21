import api from '../axios/axios-app'

export const getAllTasksByUserId = () => {
  return api.get('/report')
}

export const getTaskById = (data) => {
  return api.post('/report/task', data)
}

export const createReport = (data) => {
  return api.post('/report/create', data)
}

export const uploadReportFiles = (data) => {
  return api.put('/report/upload/report/files', data)
}
