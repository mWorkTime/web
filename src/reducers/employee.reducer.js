import {
  FETCH_ALL_EMPLOYEES_REQUEST, FETCH_ALL_EMPLOYEES_SUCCESS,
  FETCH_ALL_EMPLOYEES_FAILURE, SET_MODAL_CREATE_ACTIVE
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
      }
    }
  }

  switch (action.type) {
  case FETCH_ALL_EMPLOYEES_REQUEST:
    return {
      ...state.employeeData,
      loading: true
    }
  case FETCH_ALL_EMPLOYEES_SUCCESS:
    return {
      ...state.employeeData,
      loading: false,
      employees: action.payload
    }
  case FETCH_ALL_EMPLOYEES_FAILURE:
    return {
      ...state.employeeData,
      error: action.error,
      loading: false
    }
  case SET_MODAL_CREATE_ACTIVE: {
    return {
      ...state.employeeData,
      modal: {
        ...state.employeeData.modal,
        create: !state.employeeData.modal.create
      }
    }
  }
  default:
    return state.employeeData
  }
}

export default updateEmployeeData
