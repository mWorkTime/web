import {
  SET_CONFIRM_SUCCESS_MESSAGE,
  SET_CONFIRM_FAIL_MESSAGE,
  CLEAR_CONFIRM_ALL_MESSAGES,
  SET_DISABLED
} from '../types'

const updateConfirm = (state, action) => {
  if (state === undefined) {
    return {
      errorConfirmMsg: '',
      disabled: true
    }
  }

  switch (action.type) {
  case SET_CONFIRM_SUCCESS_MESSAGE:
    return {
      errorConfirmMsg: '',
      disabled: true
    }
  case SET_CONFIRM_FAIL_MESSAGE:
    return {
      errorConfirmMsg: action.message,
      disabled: false
    }
  case CLEAR_CONFIRM_ALL_MESSAGES:
    return {
      ...state.confirmUser,
      errorConfirmMsg: ''
    }
  case SET_DISABLED:
    return {
      ...state.confirmUser,
      disabled: true
    }
  default:
    return state.confirmUser
  }
}

export default updateConfirm
