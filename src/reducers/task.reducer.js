import {
  FETCH_ALL_TASKS_REQUEST, FETCH_ALL_TASKS_SUCCESS,
  FETCH_ALL_TASKS_FAILURE, SHOW_MODAL_TASK, HIDE_MODAL_TASK,
  FETCH_EMPLOYEES_BY_DEPARTMENT_REQUEST, FETCH_EMPLOYEES_BY_DEPARTMENT_SUCCESS,
  FETCH_EMPLOYEES_BY_DEPARTMENT_FAILURE, FETCH_CREATE_TASK_SUCCESS,
  FETCH_CREATE_TASK_FAILURE, FETCH_UPLOAD_FILE_SUCCESS, SET_CLEAR_FORM,
  SHOW_OR_HIDE_DATES
} from '../types'

const showOrHideModal = (payload, str, value, state) => {
  return payload === str ? value : state
}

const updateTaskData = (state, action) => {
  if (state === undefined) {
    return {
      employees: null,
      role: 0,
      tasks: null,
      loading: false,
      loadingEmployees: false,
      user: '',
      commentId: '',
      userId: '',
      taskId: '',
      modalComments: false,
      disable: false,
      modalTask: false,
      clearForm: false,
      error: null,
      visible: {},
      comments: {}
    }
  }

  switch (action.type) {
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
      user: action.name,
      tasks: action.tasks,
      visible: action.visibleDates,
      comments: action.comments
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
  case FETCH_CREATE_TASK_SUCCESS:
    return {
      ...state.taskData,
      disable: true,
      taskId: action.id
    }
  case FETCH_CREATE_TASK_FAILURE:
    return {
      ...state.taskData,
      error: action.error
    }
  case FETCH_UPLOAD_FILE_SUCCESS:
    return {
      ...state.taskData,
      clearForm: true,
      disable: false
    }
  case SET_CLEAR_FORM:
    return {
      ...state.taskData,
      clearForm: false
    }
  case SHOW_MODAL_TASK:
    return {
      ...state.taskData,
      modalComments: showOrHideModal(action.payload, 'comments', true, state.taskData.modalComments),
      modalTask: showOrHideModal(action.payload, 'task', true, state.taskData.modalTask),
      commentId: action.id ? action.id : state.taskData.commentId,
      userId: action.user_id ? action.user_id : state.taskData.userId,
      clearForm: false
    }
  case HIDE_MODAL_TASK:
    return {
      ...state.taskData,
      clearForm: false,
      modalComments: showOrHideModal(action.payload, 'comments', false, state.taskData.modalComments),
      modalTask: showOrHideModal(action.payload, 'task', false, state.taskData.modalTask)
    }
  case SHOW_OR_HIDE_DATES:
    return {
      ...state.taskData,
      visible: {
        ...state.taskData.visible,
        [action.id]: !state.taskData.visible[action.id]
      }
    }
  default:
    return state.taskData
  }
}

export default updateTaskData
