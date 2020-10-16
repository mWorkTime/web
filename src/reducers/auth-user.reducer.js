import {
  START_AUTHENTICATION, AUTHORIZATION_SUCCESSFUL,
  REGISTRATION_SUCCESSFUL, AUTHORIZATION_FAILED,
  REGISTRATION_FAILED, CLEAR_AUTH_MESSAGES, SET_DISABLED
} from '../types'

const clearAllMessages = (state, typeForm) => {
  if (typeForm === 'register') {
    return {
      login: state.login,
      register: ''
    }
  }
  return { register: state.register, login: '' }
}

const updateAuthUser = (state, action) => {
  if (state === undefined) {
    return {
      successMsg: {
        register: '',
        login: ''
      },
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
      ...state.authUser,
      successMsg: {
        login: '',
        register: action.message
      }
    }
  case AUTHORIZATION_SUCCESSFUL: {
    return {
      ...state.authUser,
      disabled: true,
      redirect: true,
      successMsg: {
        register: '',
        login: ''
      }
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
  case CLEAR_AUTH_MESSAGES:
    return {
      ...state.authUser,
      successMsg: clearAllMessages(state.authUser.successMsg, action.form)
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
