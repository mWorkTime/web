import {
  FETCH_ALL_TASKS_REQUEST, FETCH_ALL_TASKS_SUCCESS, FETCH_ALL_TASKS_FAILURE,
  FETCH_EMPLOYEES_BY_DEPARTMENT_REQUEST, FETCH_EMPLOYEES_BY_DEPARTMENT_SUCCESS,
  FETCH_EMPLOYEES_BY_DEPARTMENT_FAILURE, SHOW_MODAL_TASK, FETCH_CREATE_TASK_SUCCESS,
  FETCH_CREATE_TASK_FAILURE, FETCH_UPDATE_TASK_STATUS_SUCCESS, FETCH_TASK_ON_REVIEW_SUCCESS,
  FETCH_TASK_ON_REVIEW_FAILURE, HIDE_MODAL_TASK
} from '../types'
import {
  createTask,
  getAllTasks,
  getEmployeesByDepartment,
  sendTaskOnReview,
  updateTaskStatus
} from '../services/task.service'
import {
  getConvertingEmployees, getErrorMsg, getConvertingTasks,
  getObjectWithVisibleDates, getConvertingComments
} from '../utils'
import { dictionaryPriority } from '../items'

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
        visibleDates, comments, managers: data.managers
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

const getTaskObject = (obj) => {
  const runtimeSt = obj.runtime[0]
  const runtimeFin =  obj.runtime[1]

  return {
    id: obj._id, name: obj.name, runtime: +runtimeFin.substr(0, 2) - (+runtimeSt.substr(0, 2)),
    visibleDate: false, dates: `${runtimeSt}-${runtimeFin}`, createdBy: obj.createdBy, desc: obj.desc, status: obj.status,
    priority: { title: dictionaryPriority[`${obj.priority}`], code: obj.priority },
    files: obj.filepath
  }
}

const fetchUpdateStatus = (task) => (dispatch) => {
  updateTaskStatus(task)
    .then(({ data }) => {
      const updatedTask = getTaskObject(data.task)
      dispatch({ type: FETCH_UPDATE_TASK_STATUS_SUCCESS, updatedTask })
    })
    .catch((err) => getErrorMsg(err))
}

const fetchSendTaskOnReview = (dataReview) => (obj) => (dispatch) => {
  const sendData = { ...dataReview, ...obj }
  sendTaskOnReview(sendData)
    .then(({ data }) => {
      const updatedTask = getTaskObject(data.task)
      dispatch({ type: FETCH_TASK_ON_REVIEW_SUCCESS, updatedTask })
      dispatch({ type: HIDE_MODAL_TASK, payload: 'review' })
    })
    .catch((err) => dispatch({ type: FETCH_TASK_ON_REVIEW_FAILURE, error: getErrorMsg(err) }))
}

const showComment = (commentId) => (dispatch) => {
  dispatch({ type: SHOW_MODAL_TASK, id: commentId, payload: 'comments' })
}

const showCreateTask = (usrId) => (dispatch) => {
  dispatch({ type: SHOW_MODAL_TASK, user_id: usrId, payload: 'task' })
}

const showReview = (taskId) => (dispatch) => {
  dispatch({ type: SHOW_MODAL_TASK, id: taskId, payload: 'review' })
}

export {
  fetchAllTasks,
  fetchEmployeesByDepartment,
  showComment,
  showCreateTask,
  fetchCreateTask,
  fetchUpdateStatus,
  fetchSendTaskOnReview,
  showReview
}
