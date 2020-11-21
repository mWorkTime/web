import {
  FETCH_ALL_TASKS_ON_REPORT_REQUEST,
  FETCH_ALL_TASKS_ON_REPORT_SUCCESS, FETCH_ALL_TASKS_ON_REPORT_FAILURE,
  FETCH_TASK_ON_REPORT_SUCCESS, FETCH_TASK_ON_REPORT_FAILURE,
  FETCH_REPORT_CREATE_SUCCESS, FETCH_REPORT_CREATE_FAILURE, FETCH_UPLOAD_REPORT_FILE_SUCCESS
} from '../types'

const updateReportData = (state, action) => {
  if (state === undefined) {
    return {
      tasks: null,
      task: null,
      error: null,
      taskId: '',
      reportId: '',
      loading: true,
      loadingTask: true,
      disableChoose: false,
      disableReport: false
    }
  }
  switch (action.type) {
  case FETCH_ALL_TASKS_ON_REPORT_REQUEST:
    return {
      ...state.reportData,
      loading: true
    }
  case FETCH_ALL_TASKS_ON_REPORT_SUCCESS:
    return {
      ...state.reportData,
      error: null,
      loading: false,
      tasks: action.tasks
    }
  case FETCH_ALL_TASKS_ON_REPORT_FAILURE:
    return {
      ...state.reportData,
      error: action.error
    }
  case FETCH_TASK_ON_REPORT_SUCCESS:
    return {
      ...state.reportData,
      task: action.task,
      loadingTask: false,
      taskId: action.taskId,
      error: null
    }
  case FETCH_TASK_ON_REPORT_FAILURE:
    return {
      ...state.reportData,
      error: action.error
    }
  case FETCH_REPORT_CREATE_SUCCESS:
    return {
      ...state.reportData,
      disableReport: true,
      reportId: action.reportId,
      error: null
    }
  case FETCH_REPORT_CREATE_FAILURE:
    return {
      ...state.reportData,
      disableReport: false,
      error: action.error
    }
  case FETCH_UPLOAD_REPORT_FILE_SUCCESS:
    return {
      ...state.reportData,
      task: null,
      disableReport: false,
      loadingTask: true
    }
  default:
    return state.reportData
  }
}

export default updateReportData
