import {
  FETCH_ALL_EMPLOYEES_REQUEST, FETCH_ALL_EMPLOYEES_SUCCESS,
  FETCH_ALL_EMPLOYEES_FAILURE, SET_MODAL_CREATE_ACTIVE,
  FETCH_CREATE_EMPLOYEE_REQUEST, FETCH_CREATE_EMPLOYEE_SUCCESS,
  FETCH_CREATE_EMPLOYEE_FAILURE, SET_MODAL_EDIT_ACTIVE, FETCH_EMPLOYEE_REQUEST,
  FETCH_EMPLOYEE_SUCCESS, FETCH_EMPLOYEE_FAILURE, HIDE_MODAL_EMPLOYEE_EDIT
} from '../types'

const updateEmployeeData = (state, action) => {
  if (state === undefined) {
    return {
      employees: null,
      loading: false,
      error: null,
      employee: null,
      fetching: false,
      modal: {
        create: false,
        edit: false
      },
      quantity: {
        total: 0,
        managers: 0,
        workers: 0,
        owners: 0
      },
      disable: false,
      successMsg: ''
    }
  }

  switch (action.type) {
  case FETCH_ALL_EMPLOYEES_REQUEST:
    return {
      ...state.employeeData,
      loading: true,
      successMsg: ''
    }
  case FETCH_ALL_EMPLOYEES_SUCCESS:
    const { total, managers, workers, owners, payload } = action
    return {
      ...state.employeeData,
      loading: false,
      employees: payload,
      quantity: { total, managers, workers, owners }
    }
  case FETCH_ALL_EMPLOYEES_FAILURE:
    return {
      ...state.employeeData,
      error: action.error,
      loading: false
    }
  case FETCH_CREATE_EMPLOYEE_REQUEST:
    return {
      ...state.employeeData,
      disable: true
    }
  case FETCH_CREATE_EMPLOYEE_SUCCESS:
    return {
      ...state.employeeData,
      successMsg: action.message,
      disable: false
    }
  case FETCH_CREATE_EMPLOYEE_FAILURE:
    return {
      ...state.employeeData,
      disable: false,
      successMsg: '',
      error: action.error
    }
  case FETCH_EMPLOYEE_REQUEST:
    return {
      ...state.employeeData,
      employee: null,
      fetching: true
    }
  case FETCH_EMPLOYEE_SUCCESS:
    return {
      ...state.employeeData,
      employee: action.payload,
      fetching: false
    }
  case FETCH_EMPLOYEE_FAILURE:
    return {
      ...state.employeeData,
      error: action.error,
      fetching: false
    }
  case SET_MODAL_CREATE_ACTIVE:
    return {
      ...state.employeeData,
      successMsg: '',
      modal: {
        ...state.employeeData.modal,
        create: !state.employeeData.modal.create
      }
    }
  case SET_MODAL_EDIT_ACTIVE:
    return {
      ...state.employeeData,
      modal: {
        ...state.employeeData.modal,
        edit: !state.employeeData.modal.edit
      }
    }
  case HIDE_MODAL_EMPLOYEE_EDIT:
    return {
      ...state.employeeData,
      successMsg: '',
      modal: {
        ...state.employeeData.modal,
        edit: false
      }
    }
  default:
    return state.employeeData
  }
}

export default updateEmployeeData
