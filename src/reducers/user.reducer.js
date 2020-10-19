import { FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_FAILURE, SET_AUTH_TOKEN } from '../types'

const updateUserData = (state, action) => {
  if (state === undefined) {
    return {
      user: null,
      organization: null,
      token: null,
      loading: false,
      error: null
    }
  }

  switch (action.type) {
  case FETCH_USER_REQUEST:
    return {
      ...state.userData,
      loading: true
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
  case SET_AUTH_TOKEN:
    return {
      ...state.userData,
      token: action.payload
    }
  default:
    return state.userData
  }
}

export default updateUserData
