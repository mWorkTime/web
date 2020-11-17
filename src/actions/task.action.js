import {
  FETCH_ALL_TASKS_REQUEST, FETCH_ALL_TASKS_SUCCESS, FETCH_ALL_TASKS_FAILURE,
  FETCH_EMPLOYEES_BY_DEPARTMENT_REQUEST, FETCH_EMPLOYEES_BY_DEPARTMENT_SUCCESS,
  FETCH_EMPLOYEES_BY_DEPARTMENT_FAILURE, SHOW_MODAL_TASK, FETCH_CREATE_TASK_SUCCESS,
  FETCH_CREATE_TASK_FAILURE
} from '../types'
import { createTask, getAllTasks, getEmployeesByDepartment } from '../services/task.service'
import { getErrorMsg } from '../utils'
import { dictionaryRoles } from '../items'

const getConvertingEmployees = (arr) => {
  return arr.employees.reduce((acc, employee) => {
    acc.push({
      name: `${employee.name} ${employee?.surname}`, email: employee.email,
      role: { name: employee.role.name, normalName: dictionaryRoles[employee.role.name] },
      id: employee._id, department: employee.department.name
    })
    return acc
  }, [])
}

const fetchAllTasks = () => (dispatch) => {
  dispatch({ type: FETCH_ALL_TASKS_REQUEST })
  getAllTasks()
    .then(({ data }) => {
      let convertEmployees = []
      if (data.employees) {
        convertEmployees = getConvertingEmployees(data)
      }

      dispatch({
        type: FETCH_ALL_TASKS_SUCCESS, employees: convertEmployees,
        tasks: data?.tasks || [], role: data.role, name: data.name
      })
    })
    .catch((err) => dispatch({ type: FETCH_ALL_TASKS_FAILURE, error: getErrorMsg(err) }))
}

const fetchEmployeesByDepartment = (values) => (dispatch) => {
  dispatch({ type: FETCH_EMPLOYEES_BY_DEPARTMENT_REQUEST })
  getEmployeesByDepartment(values)
    .then(({ data }) => {
      let convertEmployees = []
      if (data.employees) {
        convertEmployees = getConvertingEmployees(data)
      }
      dispatch({ type: FETCH_EMPLOYEES_BY_DEPARTMENT_SUCCESS, employees: convertEmployees })
    })
    .catch((err) => dispatch({ type: FETCH_EMPLOYEES_BY_DEPARTMENT_FAILURE, error: getErrorMsg(err) }))
}

const fetchCreateTask = (fieldsValue) => () => (dispatch) => {
  const rangeTimeValue = fieldsValue['runtime']
  const values = {
    ...fieldsValue,
    runtime: [
      rangeTimeValue[0].format('DD.MM.YYYY HH:mm:ss'),
      rangeTimeValue[1].format('DD.MM.YYYY HH:mm:ss')
    ]
  }
  createTask(values)
    .then(({ data: { task } }) => dispatch({ type: FETCH_CREATE_TASK_SUCCESS, id: task }))
    .catch((err) => dispatch({ type: FETCH_CREATE_TASK_FAILURE, error: getErrorMsg(err) }))
}

const showComment = (commentId) => (dispatch) => {
  dispatch({ type: SHOW_MODAL_TASK, id: commentId, payload: 'comments' })
}

const showCreateTask = (usrId) => (dispatch) => {
  dispatch({ type: SHOW_MODAL_TASK, user_id: usrId, payload: 'task' })
}

export {
  fetchAllTasks,
  fetchEmployeesByDepartment,
  showComment,
  showCreateTask,
  fetchCreateTask
}
