import {
  FETCH_ALL_EMPLOYEES_FAILURE, FETCH_ALL_EMPLOYEES_REQUEST,
  FETCH_ALL_EMPLOYEES_SUCCESS, FETCH_CREATE_EMPLOYEE_REQUEST,
  FETCH_CREATE_EMPLOYEE_SUCCESS, FETCH_CREATE_EMPLOYEE_FAILURE,
  FETCH_EMPLOYEE_FAILURE, FETCH_EMPLOYEE_REQUEST, FETCH_EMPLOYEE_SUCCESS,
  FETCH_EDIT_EMPLOYEE_REQUEST, FETCH_EDIT_EMPLOYEE_SUCCESS,
  FETCH_EDIT_EMPLOYEE_FAILURE
} from '../types'
import { createEmployee, getAllEmployees, getEmployee, editEmployee } from '../services/employee.service'
import { getErrorMsg } from '../utils'

const fetchAllEmployees = () => (dispatch) => {
  dispatch({ type: FETCH_ALL_EMPLOYEES_REQUEST })
  getAllEmployees()
    .then(({ data: { employees, quantity: { total, managers, owners, workers } } }) => {
      const convertEmployees = employees.reduce((acc, employee) => {
        acc.push({
          ...employee, createdAt: new Date(employee.createdAt).toLocaleDateString(),
          department: employee.department.name, key: employee.id
        })
        return acc
      }, [])
      dispatch({ type: FETCH_ALL_EMPLOYEES_SUCCESS, payload: convertEmployees, total, managers, owners, workers })
    })
    .catch((err) => {
      dispatch({ type: FETCH_ALL_EMPLOYEES_FAILURE, error: getErrorMsg(err) })
    })
}

const fetchCreateEmployee = (userData) => () => (dispatch) => {
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

const fetchEmployeeById = (id) => (roles) => (dispatch) => {
  dispatch({ type: FETCH_EMPLOYEE_REQUEST })
  getEmployee(id)
    .then(({ data: { user } }) => {
      let convertRoles = []

      for (let i = 0; i < roles.length; i++) {
        for (let j = 0; j < user.role.length; j++) {
          if (roles[i].name === user.role[j].name) {
            convertRoles.push(roles[i].id)
          }
        }
      }

      dispatch({
        type: FETCH_EMPLOYEE_SUCCESS,
        payload: { ...user, department: user.department.name, role: convertRoles }
      })
    })
    .catch((err) => dispatch({ type: FETCH_EMPLOYEE_FAILURE, error: getErrorMsg(err) }))
}

const fetchEmployeeEdit = (editData) => (obj) => (dispatch) => {
  dispatch({ type: FETCH_EDIT_EMPLOYEE_REQUEST })
  const { departmentsObj, rolesObj } = obj
  const department = departmentsObj[editData.department] ? departmentsObj[editData.department] : editData.department

  const roles = editData.roles.reduce((acc, item) => {
    acc.push({ name: rolesObj[item].name, 'role-code': rolesObj[item].code })
    return acc
  }, [])
  const changedData = { ...editData, department: { name: department }, roles }

  editEmployee(changedData)
    .then(({ data }) => {
      console.log(data)
      dispatch({ type: FETCH_EDIT_EMPLOYEE_SUCCESS, message: data.success })
    })
    .catch((err) => dispatch({ type: FETCH_EDIT_EMPLOYEE_FAILURE, error: getErrorMsg(err) }))
}

export {
  fetchAllEmployees,
  fetchCreateEmployee,
  fetchEmployeeById,
  fetchEmployeeEdit
}
