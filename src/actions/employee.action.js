import {
  FETCH_ALL_EMPLOYEES_FAILURE, FETCH_ALL_EMPLOYEES_REQUEST,
  FETCH_ALL_EMPLOYEES_SUCCESS, FETCH_CREATE_EMPLOYEE_REQUEST,
  FETCH_CREATE_EMPLOYEE_SUCCESS, FETCH_CREATE_EMPLOYEE_FAILURE,
  FETCH_EMPLOYEE_FAILURE, FETCH_EMPLOYEE_REQUEST, FETCH_EMPLOYEE_SUCCESS,
} from '../types'
import { createEmployee, getAllEmployees, getEmployee } from '../services/employee.service'

const getErrorMsg = (err) => err?.message || err?.response?.data?.msg

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
      dispatch({ type: FETCH_ALL_EMPLOYEES_FAILURE, error: getErrorMsg(err) })
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
      dispatch({ type: FETCH_CREATE_EMPLOYEE_FAILURE, error: getErrorMsg(err) })
    })
}

const fetchEmployeeById = (id) => (dispatch) => {
  dispatch({ type: FETCH_EMPLOYEE_REQUEST })
  getEmployee(id)
    .then(({ data: { user } }) => {
      dispatch({ type: FETCH_EMPLOYEE_SUCCESS, payload: { ...user, department: user.department.name } })
    })
    .catch((err) => dispatch({ type: FETCH_EMPLOYEE_FAILURE, error: getErrorMsg(err) }))
}

export {
  fetchAllEmployees,
  fetchCreateEmployee,
  fetchEmployeeById
}
