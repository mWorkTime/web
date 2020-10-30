import {
  REGISTRATION_SUCCESSFUL, AUTHORIZATION_SUCCESSFUL,
  START_AUTHENTICATION, AUTHORIZATION_FAILED,
  REGISTRATION_FAILED, SET_DISABLED, CLEAR_USER_DATA,
  CLEAR_REDIRECT_TO_MAIN
} from '../types'
import { fetchRegister, fetchLogin, fetchLogout } from '../services/auth.service'
import { clearLocalStorage, getErrorMsg, setLocalStorage } from '../utils'
import { clearConfirmAllMessages } from './confirm.action'
import { setAuthToken } from './user.action'

const startAuth = {
  type: START_AUTHENTICATION
}

const setDisabled = () => {
  return {
    type: SET_DISABLED
  }
}

const clearMessages = () => (dispatch) => {
  dispatch(clearConfirmAllMessages())
}

const registerUser = (userData) => () => (dispatch) => {
  dispatch(startAuth)

  fetchRegister(userData)
    .then(() => {
      dispatch({ type: REGISTRATION_SUCCESSFUL })
    })
    .catch(() => {
      dispatch({ type: REGISTRATION_FAILED })
    })
}

const loginUser = (userData) => () => (dispatch) => {
  dispatch(startAuth)
  dispatch(clearConfirmAllMessages())

  fetchLogin(userData)
    .then(({ data }) => {
      dispatch(setAuthToken(data.token))
      setLocalStorage(data)
      dispatch({ type: AUTHORIZATION_SUCCESSFUL })
    })
    .catch(() => {
      dispatch({ type: AUTHORIZATION_FAILED })
    })
}

const logoutUser = () => (dispatch) => {
  fetchLogout()
    .then(() => {
      dispatch({ type: CLEAR_USER_DATA })
      clearLocalStorage()
    })
    .catch((err) => getErrorMsg(err))
    .finally(() => dispatch({ type: CLEAR_REDIRECT_TO_MAIN }))
}

export {
  registerUser,
  loginUser,
  clearMessages,
  setDisabled,
  logoutUser
}
