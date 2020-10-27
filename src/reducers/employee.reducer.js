import {
  FETCH_ALL_EMPLOYEES_REQUEST, FETCH_ALL_EMPLOYEES_SUCCESS,
  FETCH_ALL_EMPLOYEES_FAILURE, SET_MODAL_CREATE_ACTIVE,
  FETCH_CREATE_EMPLOYEE_REQUEST, FETCH_CREATE_EMPLOYEE_SUCCESS,
  FETCH_CREATE_EMPLOYEE_FAILURE
} from '../types'

const updateEmployeeData = (state, action) => {
  if (state === undefined) {
    return {
      employees: null,
      loading: false,
      error: null,
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
  case SET_MODAL_CREATE_ACTIVE:
    return {
      ...state.employeeData,
      successMsg: '',
      modal: {
        ...state.employeeData.modal,
        create: !state.employeeData.modal.create
      }
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
  default:
    return state.employeeData
  }
}

export default updateEmployeeData
