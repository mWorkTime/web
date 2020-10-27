import {
  FETCH_ALL_EMPLOYEES_FAILURE, FETCH_ALL_EMPLOYEES_REQUEST,
  FETCH_ALL_EMPLOYEES_SUCCESS, FETCH_CREATE_EMPLOYEE_REQUEST,
  FETCH_CREATE_EMPLOYEE_SUCCESS, FETCH_CREATE_EMPLOYEE_FAILURE
} from '../types'
import { createEmployee, getAllEmployees } from '../services/employee.service'

const fetchAllEmployees = () => (dispatch) => {
  dispatch({ type: FETCH_ALL_EMPLOYEES_REQUEST })
  getAllEmployees()
    .then(({ data: { employees, quantity: { total, managers, owners, workers } } }) => {
      const convertEmployees = employees.reduce((acc, employee) => {
        acc.push({ ...employee, createdAt: new Date(employee.createdAt).toLocaleDateString(),
          department: employee.department.name, key: employee.id })
        return acc
      },[])
      dispatch({ type: FETCH_ALL_EMPLOYEES_SUCCESS, payload: convertEmployees, total, managers, owners, workers })
    })
    .catch((err) => {
      dispatch({ type: FETCH_ALL_EMPLOYEES_FAILURE, error: err.message })
    })
}

const fetchCreateEmployee = (userData) => (dispatch) => {
  const convertingData = { ...userData, department: { id: userData.department } }

  dispatch({ type: FETCH_CREATE_EMPLOYEE_REQUEST })
  createEmployee(convertingData)
    .then(({ data }) => {
      dispatch(fetchAllEmployees())
      dispatch({ type: FETCH_CREATE_EMPLOYEE_SUCCESS, message: data.success })
    })
    .catch((err) => {
      dispatch({ type: FETCH_CREATE_EMPLOYEE_FAILURE, error: err?.message || err?.response?.data?.msg })
    })
}

export {
  fetchAllEmployees,
  fetchCreateEmployee
}
