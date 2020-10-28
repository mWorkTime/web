import { FETCH_ALL_ROLE_SUCCESS, FETCH_ALL_ROLE_FAILURE } from '../types'

const updateRoleData = (state, action) => {
  if (state === undefined) {
    return {
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
  default:
    return state.roleData
  }
}

export default updateRoleData
