import {
  REGISTRATION_SUCCESSFUL, AUTHORIZATION_SUCCESSFUL,
  START_AUTHENTICATION, AUTHORIZATION_FAILED,
  REGISTRATION_FAILED, CLEAR_AUTH_MESSAGES, SET_DISABLED
} from '../types'
import { fetchRegister, fetchLogin } from '../services/auth.service'
import { setLocalStorageAndCookie } from '../utils/clear-set-auth'
import { clearConfirmAllMessages } from './confirm.action'

const startAuth = {
  type: START_AUTHENTICATION
}

const failedAuth = (type) => {
  return {
    type: type
  }
}

const setDisabled = () => {
  return {
    type: SET_DISABLED
  }
}

const successAuth = (type, msg, user = null, organization = null) => {
  return {
    type,
    message: msg,
    user,
    organization
  }
}

const clearMessages = (typeForm) => (dispatch) => {
  dispatch(clearConfirmAllMessages())
  dispatch({ type: CLEAR_AUTH_MESSAGES, form: typeForm })
}

const registerUser = (userData) => () => (dispatch) => {
  dispatch(startAuth)

  fetchRegister(userData)
    .then(({ data: { success } }) => {
      dispatch(successAuth(REGISTRATION_SUCCESSFUL, success))
    })
    .catch(() => {
      dispatch(failedAuth(REGISTRATION_FAILED))
    })
}

const loginUser = (userData) => () => (dispatch) => {
  dispatch(startAuth)
  dispatch(clearConfirmAllMessages())

  fetchLogin(userData)
    .then(({ data }) => {
      const { user, organization, success } = data
      setLocalStorageAndCookie(data)
      dispatch(successAuth(AUTHORIZATION_SUCCESSFUL, success, user, organization))
    })
    .catch(() => {
      dispatch(failedAuth(AUTHORIZATION_FAILED))
    })
}

export {
  registerUser,
  loginUser,
  clearMessages,
  setDisabled
}
