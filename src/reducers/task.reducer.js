import { FETCH_ALL_TASKS_REQUEST, FETCH_ALL_TASKS_SUCCESS,
  FETCH_ALL_TASKS_FAILURE, SHOW_MODAL_COMMENTS, HIDE_MODAL_COMMENTS,
  FETCH_EMPLOYEES_BY_DEPARTMENT_REQUEST, FETCH_EMPLOYEES_BY_DEPARTMENT_SUCCESS,
  FETCH_EMPLOYEES_BY_DEPARTMENT_FAILURE
} from '../types'

const updateTaskData = (state, action) => {
  if (state === undefined) {
    return {
      employees: null,
      role: 0,
      tasks: null,
      loading: false,
      loadingEmployees: false,
      modalComments: false,
      error: null
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
      role: action.role,
      employees: action.employees,
      tasks: action.tasks
    }
  case FETCH_ALL_TASKS_FAILURE:
    return {
      ...state.taskData,
      error: action.error,
      loading: false
    }
  case FETCH_EMPLOYEES_BY_DEPARTMENT_REQUEST:
    return {
      ...state.taskData,
      loadingEmployees: true,
      employees: []
    }
  case FETCH_EMPLOYEES_BY_DEPARTMENT_SUCCESS:
    return {
      ...state.taskData,
      loadingEmployees: false,
      employees: action.employees
    }
  case FETCH_EMPLOYEES_BY_DEPARTMENT_FAILURE:
    return {
      ...state.taskData,
      loadingEmployees: false,
      error: action.error
    }
  case SHOW_MODAL_COMMENTS:
    return {
      ...state.taskData,
      modalComments: true
    }
  case HIDE_MODAL_COMMENTS:
    return {
      ...state.taskData,
      modalComments: false
    }
  default:
    return state.taskData
  }
}

export default updateTaskData
