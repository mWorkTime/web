import { FETCH_ALL_TASKS_REQUEST, FETCH_ALL_TASKS_SUCCESS, FETCH_ALL_TASKS_FAILURE } from '../types'

const updateTaskData = (state, action) => {
  if (state === undefined) {
    return {
      employees: null,
      tasks: null,
      loading: false,
      error: null,
    }
  }

  switch(action.type) {
  case FETCH_ALL_TASKS_REQUEST:
    return {
      ...state.taskData,
      loading: true
    }
  case FETCH_ALL_TASKS_SUCCESS:
    return {
      ...state.taskData,
      loading: false,
      error: null,
      employees: action.employees,
      tasks: action.tasks
    }
  case FETCH_ALL_TASKS_FAILURE:
    return {
      ...state.taskData,
      error: action.error,
      loading: false
    }
  default:
    return state.taskData
  }
}

export default updateTaskData
