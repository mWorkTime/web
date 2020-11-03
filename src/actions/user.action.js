import { confirmPassword, editUserRegular, getUser, getUserData } from '../services/user.service'
import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
  SET_AUTH_TOKEN,
  FETCH_USER_DATA_REQUEST,
  FETCH_USER_DATA_SUCCESS,
  FETCH_USER_DATA_FAILURE,
  FETCH_EDIT_USER_REGULAR_SUCCESS,
  FETCH_EDIT_USER_REGULAR_FAILURE,
  FETCH_CONFIRM_PASSWORD_FAILURE, FETCH_CONFIRM_PASSWORD_SUCCESS
} from '../types'
import { logoutUser } from './index'
import { dictionaryRoles } from '../items'
import { getErrorMsg } from '../utils'

const fetchUserRequest = () => (dispatch) => {
  dispatch({ type: FETCH_USER_REQUEST })
  getUser()
    .then(({ data: { user, organization } }) => {
      const transformedDate = new Date(user.createdAt).toLocaleString()
      const transformedRoles = user.role.reduce((acc, role) => {
        acc.push({ name: dictionaryRoles[role.name], code: role.code })
        return acc
      }, [])

      const transformedUser = { ...user, createdAt: transformedDate, role: transformedRoles }
      dispatch({ type: FETCH_USER_SUCCESS, user: transformedUser, organization })
    })
    .catch((err) => {
      dispatch(logoutUser())
      dispatch({ type: FETCH_USER_FAILURE, error: err.response.data.msg })
    })
}

const fetchUserData = () => (dispatch) => {
  dispatch({ type: FETCH_USER_DATA_REQUEST })

  getUserData()
    .then(({ data }) => {
      dispatch({ type: FETCH_USER_DATA_SUCCESS, user: data.user })
    })
    .catch((err) => dispatch({ type: FETCH_USER_DATA_FAILURE, error: getErrorMsg(err) }))
}

const fetchEditUserRegular = (userData) => (dispatch) => {
  editUserRegular(userData)
    .then(({ data: { user } }) => {
      const modifiedData = {
        name: user.name, surname: user.surname, phone: user.phone, gender: user.gender
      }

      const transformedRoles = user.role.reduce((acc, role) => {
        acc.push({ name: dictionaryRoles[role.name], code: role.code })
        return acc
      }, [])

      const transformedDate = new Date(user.createdAt).toLocaleString()
      dispatch({
        type: FETCH_EDIT_USER_REGULAR_SUCCESS, payload: modifiedData,
        dashboard: { ...user, id: user._id, createdAt: transformedDate, role: transformedRoles }
      })
    })
    .catch((err) => dispatch({ type: FETCH_EDIT_USER_REGULAR_FAILURE, error: getErrorMsg(err) }))
}

const fetchConfirmPassword = (password) => (dispatch) => {
  confirmPassword(password)
    .then(() => dispatch({ type: FETCH_CONFIRM_PASSWORD_SUCCESS }))
    .catch((err) => dispatch({ type: FETCH_CONFIRM_PASSWORD_FAILURE, error: getErrorMsg(err)}))
}

const setAuthToken = (token) => {
  return {
    type: SET_AUTH_TOKEN,
    payload: token
  }
}

export {
  fetchUserRequest,
  fetchEditUserRegular,
  fetchConfirmPassword,
  setAuthToken,
  fetchUserData
}
