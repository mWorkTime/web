import {
  FETCH_ALL_EMPLOYEES_REQUEST, FETCH_ALL_EMPLOYEES_SUCCESS,
  FETCH_ALL_EMPLOYEES_FAILURE
} from '../types'

const updateEmployeeData = (state, action) => {
  if (state === undefined) {
    return {
      employees: null,
      loading: false,
      error: null
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
  default:
    return state.employeeData
  }
}

export default updateEmployeeData
