import {
  FETCH_ALL_EMPLOYEES_FAILURE, FETCH_ALL_EMPLOYEES_REQUEST,
  FETCH_ALL_EMPLOYEES_SUCCESS, FETCH_CREATE_EMPLOYEE_REQUEST,
  FETCH_CREATE_EMPLOYEE_SUCCESS, FETCH_CREATE_EMPLOYEE_FAILURE
} from '../types'
import { createEmployee, getAllEmployees } from '../services/employee.service'

const fetchAllEmployees = () => (dispatch) => {
  dispatch({ type: FETCH_ALL_EMPLOYEES_REQUEST })
  getAllEmployees()
    .then(({ data: { employees } }) => {
      dispatch({ type: FETCH_ALL_EMPLOYEES_SUCCESS, payload: employees })
    })
    .catch((err) => {
      dispatch({ type: FETCH_ALL_EMPLOYEES_FAILURE, error: err.message })
    })
}

const fetchCreateEmployee = (userData) => (dispatch) => {
  dispatch({ type: FETCH_CREATE_EMPLOYEE_REQUEST })
  createEmployee(userData)
    .then(({ data }) => {
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
