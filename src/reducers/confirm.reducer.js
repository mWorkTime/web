import { SET_CONFIRM_SUCCESS_MESSAGE, SET_CONFIRM_FAIL_MESSAGE, CLEAR_CONFIRM_ALL_MESSAGES } from '../types'

const updateConfirm = (state, action) => {
  if (state === undefined) {
    return {
      successConfirmMsg: '',
      errorConfirmMsg: ''
    }
  }

  switch (action.type) {
  case SET_CONFIRM_SUCCESS_MESSAGE:
    return {
      successConfirmMsg: action.message,
      errorConfirmMsg: ''
    }
  case SET_CONFIRM_FAIL_MESSAGE:
    return {
      successConfirmMsg: '',
      errorConfirmMsg: action.message
    }
  case CLEAR_CONFIRM_ALL_MESSAGES:
    return {
      successConfirmMsg: '',
      errorConfirmMsg: ''
    }
  default:
    return state.confirmUser
  }
}

export default updateConfirm
