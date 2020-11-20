import { FETCH_ALL_ROLE_SUCCESS, FETCH_ALL_ROLE_FAILURE, FETCH_USER_ROLE_SUCCESS, FETCH_USER_ROLE_FAILURE } from '../types'

const updateRoleData = (state, action) => {
  if (state === undefined) {
    return {
      userRole: null,
      roles: null,
      rolesObj: null,
      loading: false,
      error: null
    }
  }

  switch (action.type) {
  case FETCH_ALL_ROLE_SUCCESS:
    return {
      ...state.roleData,
      roles: action.roles,
      rolesObj: action.payload,
      loading: false
    }
  case FETCH_ALL_ROLE_FAILURE:
    return {
      ...state.roleData,
      loading: false,
      error: action.message
    }
  case FETCH_USER_ROLE_SUCCESS:
    return {
      ...state.roleData,
      userRole: action.role
    }
  case FETCH_USER_ROLE_FAILURE:
    return {
      ...state.roleData,
      error: action.error
    }
  default:
    return state.roleData
  }
}

export default updateRoleData
