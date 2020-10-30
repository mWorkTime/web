import {
  START_AUTHENTICATION, AUTHORIZATION_SUCCESSFUL,
  REGISTRATION_SUCCESSFUL, AUTHORIZATION_FAILED,
  REGISTRATION_FAILED, SET_DISABLED
} from '../types'

const updateAuthUser = (state, action) => {
  if (state === undefined) {
    return {
      disabled: false,
      redirect: false,
      failed: false
    }
  }
  switch (action.type) {
  case START_AUTHENTICATION:
    return {
      ...state.authUser,
      disabled: true
    }
  case REGISTRATION_SUCCESSFUL:
    return {
      ...state.authUser
    }
  case AUTHORIZATION_SUCCESSFUL: {
    return {
      ...state.authUser,
      disabled: true,
      redirect: true
    }
  }
  case REGISTRATION_FAILED:
    return {
      ...state.authUser,
      disabled: false
    }
  case AUTHORIZATION_FAILED: {
    return {
      ...state.authUser,
      failed: true,
      disabled: false
    }
  }
  case SET_DISABLED:
    return {
      ...state.authUser,
      disabled: false
    }
  default:
    return state.authUser
  }
}

export default updateAuthUser
