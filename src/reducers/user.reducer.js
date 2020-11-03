import {
  FETCH_USER_REQUEST, FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE, SET_AUTH_TOKEN,
  CLEAR_USER_DATA, CLEAR_REDIRECT_TO_MAIN,
  FETCH_USER_DATA_REQUEST, FETCH_USER_DATA_SUCCESS,
  FETCH_USER_DATA_FAILURE, FETCH_EDIT_USER_REGULAR_SUCCESS,
  FETCH_EDIT_USER_REGULAR_FAILURE
} from '../types'

const updateUserData = (state, action) => {
  if (state === undefined) {
    return {
      user: null,
      organization: null,
      token: null,
      loading: false,
      error: null,
      redirectToMain: false,
      edit: {
        userData: null,
        loading: false,
        error: null
      }
    }
  }

  switch (action.type) {
  case FETCH_USER_REQUEST:
    return {
      ...state.userData,
      loading: true
    }
  case FETCH_USER_SUCCESS:
    return {
      ...state.userData,
      user: action.user,
      organization: action.organization,
      loading: false,
      error: null
    }
  case FETCH_USER_FAILURE:
    return {
      ...state.userData,
      loading: false,
      error: action.error
    }
  case SET_AUTH_TOKEN:
    return {
      ...state.userData,
      token: action.payload
    }
  case CLEAR_USER_DATA:
    return {
      user: null,
      organization: null,
      token: null,
      loading: false,
      error: null,
      redirectToMain: true,
      edit: {
        userData: null,
        loading: false,
        error: null
      }
    }
  case CLEAR_REDIRECT_TO_MAIN:
    return {
      ...state.userData,
      redirectToMain: false
    }

  case FETCH_USER_DATA_REQUEST:
    return {
      ...state.userData,
      edit: {
        ...state.userData.edit,
        loading: true
      }
    }
  case FETCH_USER_DATA_SUCCESS:
    return {
      ...state.userData,
      edit: {
        user: action.user,
        error: null,
        loading: false
      }
    }
  case FETCH_USER_DATA_FAILURE:
    return {
      ...state.userData,
      edit: {
        ...state.userData.edit,
        loading: false,
        error: action.error
      }
    }
  case FETCH_EDIT_USER_REGULAR_SUCCESS:
    return {
      ...state.userData,
      edit: {
        ...state.userData.edit,
        user: action.user
      }
    }
  case FETCH_EDIT_USER_REGULAR_FAILURE:
    return {
      ...state.userData,
      edit: {
        ...state.userData.edit,
        error: action.error
      }
    }
  default:
    return state.userData
  }
}

export default updateUserData
