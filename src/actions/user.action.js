import { getUser } from '../services/user.service'
import { FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_FAILURE } from '../types'

const fetchUserRequest = () => (dispatch) => {
  dispatch({ type: FETCH_USER_REQUEST })
  getUser()
    .then(({ data: { user, organization } }) => {
      dispatch({ type: FETCH_USER_SUCCESS, user, organization })
    })
    .catch((err) => {
      dispatch({ type: FETCH_USER_FAILURE, error: err })
    })
}

export {
  fetchUserRequest
}
