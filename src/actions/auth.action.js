import {
  REGISTRATION_SUCCESSFUL, AUTHORIZATION_SUCCESSFUL,
  START_AUTHENTICATION, AUTHORIZATION_FAILED,
  REGISTRATION_FAILED
} from '../types'
import { fetchRegister, fetchLogin } from '../services/auth.service'
import { setLocalStorageAndCookie } from '../utils/clear-set-auth'

const startAuth = () => {
  return {
    type: START_AUTHENTICATION
  }
}

const failedAuth = (type) => {
  return {
    type: type
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

const registerUser = (userData) => {
  startAuth()

  return (dispatch) => {
    fetchRegister(userData)
      .then(({ data }) => {
        dispatch(successAuth(REGISTRATION_SUCCESSFUL, data.success))
      })
      .catch(() => {
        dispatch(failedAuth(REGISTRATION_FAILED))
      })
  }

}

const loginUser = (userData) => {
  startAuth()

  return dispatch => {
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
}

export {
  registerUser,
  loginUser
}
