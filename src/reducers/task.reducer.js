import {
  FETCH_ALL_TASKS_REQUEST, FETCH_ALL_TASKS_SUCCESS,
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
      commentId: '',
      comments: {
        '2324fdf': [
          {
            key: '9k9090k9',
            createdBy: 'Илья Шараевский',
            about: `Создайте, измените или увольте - работника. 
            Выберите для них роль "Работник", "Временный управляющий", "Управляющий".`,
            createdAt: '11/4/2020, 6:25:25 PM'
          },
          {
            key: '92923-dfd',
            createdBy: 'Илья Шараевский',
            about: `Создайте, измените или увольте - работника. 
            Выберите для них роль "Работник"`,
            createdAt: '11/7/2020, 7:25:34 PM'
          }],
        'ju27ye23': [
          {
            key: 'h828ddf',
            createdBy: 'Илья Шараевский',
            about: `Создайте, измените или увольте - работника. 
            Выберите для них роль "Работник", "Временный управляющий", "Управляющий".`,
            createdAt: '11/10/2020, 9:25:25 PM'
          },
          {
            key: 'llsdsjb3',
            createdBy: 'Илья Шараевский',
            about: `Создайте, измените или увольте - работника. 
            Выберите для них роль "Работник"`,
            createdAt: '11/12/2020, 7:25:34 PM'
          },
          {
            key: 'hbhiiu82',
            createdBy: 'Илья Шараевский',
            about: `Создайте, измените или увольте - работника. 
            Выберите для них роль "Работник"`,
            createdAt: '11/13/2020, 1:35:34 PM'
          }
        ]
      },
      modalComments: false,
      error: null
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
      modalComments: true,
      commentId: action.id
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
