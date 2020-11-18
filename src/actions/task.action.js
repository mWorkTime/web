import {
  FETCH_ALL_TASKS_REQUEST, FETCH_ALL_TASKS_SUCCESS, FETCH_ALL_TASKS_FAILURE,
  FETCH_EMPLOYEES_BY_DEPARTMENT_REQUEST, FETCH_EMPLOYEES_BY_DEPARTMENT_SUCCESS,
  FETCH_EMPLOYEES_BY_DEPARTMENT_FAILURE, SHOW_MODAL_TASK, FETCH_CREATE_TASK_SUCCESS,
  FETCH_CREATE_TASK_FAILURE
} from '../types'
import { createTask, getAllTasks, getEmployeesByDepartment } from '../services/task.service'
import { getConvertingEmployees, getErrorMsg, getConvertingTasks,
  getObjectWithVisibleDates, getConvertingComments } from '../utils'

const fetchAllTasks = () => (dispatch) => {
  dispatch({ type: FETCH_ALL_TASKS_REQUEST })
  getAllTasks()
    .then(({ data }) => {
      let convertEmployees = []
      let convertTasks = []
      let visibleDates = {}
      let comments = {}

      if (data.employees) {
        convertEmployees = getConvertingEmployees(data)
      }

      if (data.tasks) {
        convertTasks = getConvertingTasks(data.tasks)
        visibleDates = getObjectWithVisibleDates(data.tasks)
        comments = getConvertingComments(data.tasks)
      }

      dispatch({
        type: FETCH_ALL_TASKS_SUCCESS, employees: convertEmployees,
        tasks: convertTasks, role: data.role, name: data.name,
        visibleDates, comments
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
