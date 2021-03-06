import { FETCH_ALL_DEPARTMENT_FAILURE, FETCH_ALL_DEPARTMENT_SUCCESS, FETCH_CREATE_DEPARTMENT_REQUEST,
  FETCH_CREATE_DEPARTMENT_SUCCESS, FETCH_CREATE_DEPARTMENT_FAILURE, SET_DEPARTMENT_MODAL_ACTIVE
} from '../types'

const updateDepartmentData = (state, action) => {
  if (state === undefined) {
    return  {
      departments: null,
      departmentsObj: null,
      error: null,
      loading: false,
      active: false,
    }
  }
  switch (action.type) {
  case SET_DEPARTMENT_MODAL_ACTIVE:
    return {
      ...state.departmentData,
      active: !state.departmentData.active,
    }
  case FETCH_ALL_DEPARTMENT_SUCCESS:
    return {
      ...state.departmentData,
      departments: action.departments,
      departmentsObj: action.payload,
      loading: false,
    }
  case FETCH_ALL_DEPARTMENT_FAILURE:
    return {
      ...state.departmentData,
      error: action.message,
      loading: false,
    }
  case FETCH_CREATE_DEPARTMENT_REQUEST:
    return {
      ...state.departmentData,
      loading: true,
      error: null,
    }
  case FETCH_CREATE_DEPARTMENT_SUCCESS:
    return {
      ...state.departmentData,
      error: null,
      loading: false,
    }
  case FETCH_CREATE_DEPARTMENT_FAILURE:
    return {
      ...state.departmentData,
      loading: false,
      error: action.message
    }
  default:
    return state.departmentData
  }

}

export default updateDepartmentData
