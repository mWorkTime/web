import {
  FETCH_ALL_EMPLOYEES_FAILURE, FETCH_ALL_EMPLOYEES_REQUEST,
  FETCH_ALL_EMPLOYEES_SUCCESS, FETCH_CREATE_EMPLOYEE_REQUEST,
  FETCH_CREATE_EMPLOYEE_SUCCESS, FETCH_CREATE_EMPLOYEE_FAILURE,
  FETCH_EMPLOYEE_FAILURE, FETCH_EMPLOYEE_REQUEST, FETCH_EMPLOYEE_SUCCESS,
  FETCH_EDIT_EMPLOYEE_REQUEST, FETCH_EDIT_EMPLOYEE_SUCCESS,
  FETCH_EDIT_EMPLOYEE_FAILURE, FETCH_DISMISS_OR_RECOVER_EMPLOYEE_SUCCESS,
  FETCH_DISMISS_OR_RECOVER_EMPLOYEE_FAILURE
} from '../types'
import {
  createEmployee,
  getAllEmployees,
  getEmployee,
  editEmployee,
  dismissEmployee,
  recoverEmployee
} from '../services/employee.service'
import { getErrorMsg, normalizeEmployeeObject, convertRole } from '../utils'

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

const fetchCreateEmployee = (userData) => (obj) => (dispatch) => {
  const userRoles = convertRole({ ...obj, data: userData })
  const convertingData = { ...userData, department: { id: userData.department }, role: userRoles }

  dispatch({ type: FETCH_CREATE_EMPLOYEE_REQUEST })
  createEmployee(convertingData)
    .then(() => {
      dispatch(fetchAllEmployees())
      dispatch({ type: FETCH_CREATE_EMPLOYEE_SUCCESS })
    })
    .catch((err) => {
      dispatch({ type: FETCH_CREATE_EMPLOYEE_FAILURE, error: getErrorMsg(err) })
    })
}

const fetchEmployeeById = (id) => (roles) => (dispatch) => {
  dispatch({ type: FETCH_EMPLOYEE_REQUEST })
  getEmployee(id)
    .then(({ data: { user } }) => {
      const getIdRole = roles.reduce((acc, item) => {
        if (item['role-code'] === user.role.code)
        {
          acc = item._id
        }

        return acc
      }, '')

      dispatch({
        type: FETCH_EMPLOYEE_SUCCESS,
        payload: { ...user, department: user.department.name, role: getIdRole }
      })
    })
    .catch((err) => dispatch({ type: FETCH_EMPLOYEE_FAILURE, error: getErrorMsg(err) }))
}

const fetchEmployeeEdit = (editData) => (obj) => (dispatch) => {
  dispatch({ type: FETCH_EDIT_EMPLOYEE_REQUEST })

  const { departmentsObj, rolesObj } = obj
  const department = departmentsObj[editData.department] ? departmentsObj[editData.department] : editData.department
  const userRoles = convertRole({ rolesObj, data: editData })
  const changedData = { ...editData, department: { name: department }, role: userRoles}

  editEmployee(changedData)
    .then(({ data: { user } }) => {
      dispatch({
        type: FETCH_EDIT_EMPLOYEE_SUCCESS,
        employee: normalizeEmployeeObject(user)
      })
    })
    .catch((err) => dispatch({ type: FETCH_EDIT_EMPLOYEE_FAILURE, error: getErrorMsg(err) }))
}

const fetchEmployeeRecoverOrDismiss = (dataUser, func, dispatch) => {
  return func(dataUser)
    .then(({ data: { user } }) => {
      dispatch({
        type: FETCH_DISMISS_OR_RECOVER_EMPLOYEE_SUCCESS,
        newEmployee: normalizeEmployeeObject(user)
      })
    })
    .catch((err) => dispatch({ type: FETCH_DISMISS_OR_RECOVER_EMPLOYEE_FAILURE, error: getErrorMsg(err) }))
}

const fetchEmployeeDismiss = (dataUser) => () => (dispatch) => {
  fetchEmployeeRecoverOrDismiss(dataUser, dismissEmployee, dispatch)
}

const fetchEmployeeRecover = (dataUser) => () => (dispatch) => {
  fetchEmployeeRecoverOrDismiss(dataUser, recoverEmployee, dispatch)
}

export {
  fetchAllEmployees,
  fetchCreateEmployee,
  fetchEmployeeById,
  fetchEmployeeEdit,
  fetchEmployeeDismiss,
  fetchEmployeeRecover
}
