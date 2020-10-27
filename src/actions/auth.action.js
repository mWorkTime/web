import {
  REGISTRATION_SUCCESSFUL, AUTHORIZATION_SUCCESSFUL,
  START_AUTHENTICATION, AUTHORIZATION_FAILED,
  REGISTRATION_FAILED, CLEAR_AUTH_MESSAGES, SET_DISABLED, CLEAR_USER_DATA,
  CLEAR_REDIRECT_TO_MAIN
} from '../types'
import { fetchRegister, fetchLogin, fetchLogout } from '../services/auth.service'
import { clearLocalStorage, setLocalStorage } from '../utils'
import { clearConfirmAllMessages } from './confirm.action'
import { setAuthToken } from './user.action'

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

const successAuth = (type, msg = '') => {
  return {
    type,
    message: msg
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
      dispatch(setAuthToken(data.token))
      setLocalStorage(data)
      dispatch(successAuth(AUTHORIZATION_SUCCESSFUL))
    })
    .catch(() => {
      dispatch(failedAuth(AUTHORIZATION_FAILED))
    })
}

const logoutUser = () => (dispatch) => {
  fetchLogout()
    .then(() => {
      dispatch({ type: CLEAR_USER_DATA })
      clearLocalStorage()
    })
    .catch((err) => console.log(err))
    .finally(() => dispatch({ type: CLEAR_REDIRECT_TO_MAIN }))
}

export {
  registerUser,
  loginUser,
  clearMessages,
  setDisabled,
  logoutUser
}
