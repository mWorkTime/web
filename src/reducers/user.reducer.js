import {
  FETCH_USER_REQUEST, FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE, SET_AUTH_TOKEN,
  CLEAR_USER_DATA, CLEAR_REDIRECT_TO_MAIN
} from '../types'

const updateUserData = (state, action) => {
  if (state === undefined) {
    return {
      user: null,
      organization: null,
      token: null,
      loading: true,
      error: null,
      redirectToMain: false
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
      ...state.userData,
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
  case CLEAR_USER_DATA:
    return {
      user: null,
      organization: null,
      token: null,
      loading: false,
      error: null,
      redirectToMain: true
    }
  case CLEAR_REDIRECT_TO_MAIN:
    return {
      ...state.userData,
      redirectToMain: false
    }
  default:
    return state.userData
  }
}

export default updateUserData
