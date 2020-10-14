import {
  SET_CONFIRM_SUCCESS_MESSAGE,
  SET_CONFIRM_FAIL_MESSAGE,
  CLEAR_CONFIRM_ALL_MESSAGES,
  SET_DISABLED
} from '../types'

const updateConfirm = (state, action) => {
  if (state === undefined) {
    return {
      successConfirmMsg: '',
      errorConfirmMsg: '',
      disabled: true
    }
  }

  switch (action.type) {
  case SET_CONFIRM_SUCCESS_MESSAGE:
    return {
      successConfirmMsg: action.message,
      errorConfirmMsg: '',
      disabled: true
    }
  case SET_CONFIRM_FAIL_MESSAGE:
    return {
      successConfirmMsg: '',
      errorConfirmMsg: action.message,
      disabled: false
    }
  case CLEAR_CONFIRM_ALL_MESSAGES:
    return {
      ...state.confirmUser,
      successConfirmMsg: '',
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
