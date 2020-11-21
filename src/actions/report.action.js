import {
  FETCH_ALL_TASKS_ON_REPORT_REQUEST,
  FETCH_ALL_TASKS_ON_REPORT_SUCCESS, FETCH_ALL_TASKS_ON_REPORT_FAILURE,
  FETCH_TASK_ON_REPORT_SUCCESS, FETCH_TASK_ON_REPORT_FAILURE,
  FETCH_REPORT_CREATE_SUCCESS, FETCH_REPORT_CREATE_FAILURE
} from '../types'
import { getAllTasksByUserId, getTaskById, createReport } from '../services/report.service'
import { getErrorMsg } from '../utils'
import { dictionaryPriority } from '../items'

const fetchAllTasksOnReport = () => (dispatch) => {
  dispatch({ type: FETCH_ALL_TASKS_ON_REPORT_REQUEST })
  getAllTasksByUserId()
    .then(({ data }) => {
      let convertTasks = []
      if (data.user.tasks) {
        convertTasks = data.user.tasks.reduce((acc, task) => {
          acc.push({ name: task.name, id: task._id })
          return acc
        }, [])
      }

      dispatch({ type: FETCH_ALL_TASKS_ON_REPORT_SUCCESS, tasks: convertTasks })
    })
    .catch((err) => dispatch({ type: FETCH_ALL_TASKS_ON_REPORT_FAILURE, error: getErrorMsg(err) }))
}

const fetchTaskOnReport = (taskData) => (dispatch) => {
  getTaskById(taskData)
    .then(({ data: { task } }) => {
      const convertingData = {
        ...task, confirmedBy: task?.confirmedBy,
        runtime: `${task.runtime[0]} - ${task.runtime[1]}`,
        priority: dictionaryPriority[`${task.priority}`]
      }
      dispatch({ type: FETCH_TASK_ON_REPORT_SUCCESS, task: convertingData, taskId: task._id })
    })
    .catch((err) => dispatch({ type: FETCH_TASK_ON_REPORT_FAILURE, error: getErrorMsg(err) }))
}

const fetchReportCreate = (reportData) => (dispatch) => {
  createReport(reportData)
    .then(({ data }) => {
      dispatch({ type: FETCH_REPORT_CREATE_SUCCESS, reportId: data.reportId })
    })
    .catch((err) => dispatch({ type: FETCH_REPORT_CREATE_FAILURE, error: getErrorMsg(err) }))
}

export {
  fetchAllTasksOnReport,
  fetchTaskOnReport,
  fetchReportCreate
}
