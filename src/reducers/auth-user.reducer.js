import {
  START_AUTHENTICATION, AUTHORIZATION_SUCCESSFUL,
  REGISTRATION_SUCCESSFUL, AUTHORIZATION_FAILED,
  REGISTRATION_FAILED
  } from '../types'

const updateAuthUser = (state, action) => {
  if (state === undefined) {
    return {
      user: null,
      organization: null,
      successMsg: '',
      disabled: false,
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
      ...state.authUser,
      successMsg: action.message
    }
  case AUTHORIZATION_SUCCESSFUL: {
    return {
      ...state.authUser,
      user: action.user,
      disabled: true,
      organization: action.organization,
      successMsg: action.message
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
  default:
    return state.authUser
  }
}

export default updateAuthUser
