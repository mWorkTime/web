import { getUser } from '../services/user.service'
import { FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_FAILURE, SET_AUTH_TOKEN } from '../types'

const fetchUserRequest = (token) => (dispatch) => {
  dispatch({ type: FETCH_USER_REQUEST })
  getUser(token)
    .then(({ data: { user, organization } }) => {
      dispatch({ type: FETCH_USER_SUCCESS, user, organization })
    })
    .catch((err) => {
      dispatch({ type: FETCH_USER_FAILURE, error: err })
    })
}

const setAuthToken = (token) =>  {
  return {
    type: SET_AUTH_TOKEN,
    payload: token
  }
}

export {
  fetchUserRequest,
  setAuthToken
}
