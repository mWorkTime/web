import { FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_FAILURE } from '../types'

const updateUserData = (state, action) => {
  if(state === undefined) {
    return {
      user: null,
      organization: null,
      loading: false,
      error: null
    }
  }

  switch (action.type) {
  case FETCH_USER_REQUEST:
    return {
      ...state.userData,
      loading: true,
    }
  case FETCH_USER_SUCCESS:
    return {
      user: action.user,
      organization: action.organization,
      loading: false,
      error: null
    }
  case FETCH_USER_FAILURE:
    return {
      ...state.userData,
      loading: false,
      error: action.error
    }
  default:
    return state.userData
  }
}

export default updateUserData
