import {
  FETCH_ALL_TASKS_REQUEST, FETCH_ALL_TASKS_SUCCESS,
  FETCH_ALL_TASKS_FAILURE, SHOW_MODAL_TASK, HIDE_MODAL_TASK,
  FETCH_EMPLOYEES_BY_DEPARTMENT_REQUEST, FETCH_EMPLOYEES_BY_DEPARTMENT_SUCCESS,
  FETCH_EMPLOYEES_BY_DEPARTMENT_FAILURE, FETCH_CREATE_TASK_SUCCESS,
  FETCH_CREATE_TASK_FAILURE, FETCH_UPLOAD_FILE_SUCCESS, SET_CLEAR_FORM,
  SHOW_OR_HIDE_DATES, FETCH_UPDATE_TASK_STATUS_SUCCESS, FETCH_TASK_ON_REVIEW_SUCCESS,
  FETCH_TASK_ON_REVIEW_FAILURE
} from '../types'

const showOrHideModal = (payload, str, value, state) => {
  return payload === str ? value : state
}

const updateTasks = (tasks, item, idx) => {
  return [
    ...tasks.slice(0, idx),
    item,
    ...tasks.slice(idx + 1)
  ]
}

const updateTaskData = (state, action) => {
  if (state === undefined) {
    return {
      employees: null,
      role: 0,
      tasks: null,
      loading: false,
      loadingEmployees: false,
      managers: null,
      user: '',
      commentId: '',
      userId: '',
      taskId: '',
      modalComments: false,
      modalReview: false,
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
      comments: action.comments,
      managers: action.managers
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
  case FETCH_UPDATE_TASK_STATUS_SUCCESS:
    const { updatedTask } = action
    const taskIndex = state.taskData.tasks.findIndex(({ id }) => id === updatedTask.id)

    return {
      ...state.taskData,
      tasks: updateTasks(state.taskData.tasks, updatedTask, taskIndex)
    }
  case FETCH_TASK_ON_REVIEW_SUCCESS:
    const findIndex = state.taskData.tasks.findIndex(({ id }) => id === action.updatedTask.id)
    return {
      ...state.taskData,
      commentId: '',
      tasks: updateTasks(state.taskData.tasks, action.updatedTask, findIndex)
    }
  case FETCH_TASK_ON_REVIEW_FAILURE:
    return {
      ...state.taskData,
      error: action.error
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
      modalReview: showOrHideModal(action.payload, 'review', true, state.taskData.modalReview),
      commentId: action.id ? action.id : state.taskData.commentId,
      userId: action.user_id ? action.user_id : state.taskData.userId,
      clearForm: false,
    }
  case HIDE_MODAL_TASK:
    return {
      ...state.taskData,
      clearForm: false,
      modalComments: showOrHideModal(action.payload, 'comments', false, state.taskData.modalComments),
      modalTask: showOrHideModal(action.payload, 'task', false, state.taskData.modalTask),
      modalReview: showOrHideModal(action.payload, 'review', false, state.taskData.modalReview),
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
