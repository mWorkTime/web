import { editUserRegular, getUser, getUserData } from '../services/user.service'
import {
  FETCH_USER_REQUEST, FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE, SET_AUTH_TOKEN,
  FETCH_USER_DATA_REQUEST, FETCH_USER_DATA_SUCCESS,
  FETCH_USER_DATA_FAILURE, FETCH_EDIT_USER_REGULAR_SUCCESS, FETCH_EDIT_USER_REGULAR_FAILURE
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
    .then(({ data: { user} }) => {
      dispatch({ type: FETCH_EDIT_USER_REGULAR_SUCCESS, user })
    })
    .catch((err) =>  dispatch({ type: FETCH_EDIT_USER_REGULAR_FAILURE, error: getErrorMsg(err)}))
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
  setAuthToken,
  fetchUserData
}
