import { getUser } from '../services/user.service'
import { FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_FAILURE, SET_AUTH_TOKEN } from '../types'
import { logoutUser } from './index'
import { dictionaryRoles } from '../items'

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

const setAuthToken = (token) => {
  return {
    type: SET_AUTH_TOKEN,
    payload: token
  }
}

export {
  fetchUserRequest,
  setAuthToken
}
