import {
  SET_CONFIRM_SUCCESS_MESSAGE, SET_CONFIRM_FAIL_MESSAGE,
  CLEAR_CONFIRM_ALL_MESSAGES
} from '../types'

const setConfirmSuccessMessage = (successMsg) => {
  return {
    type: SET_CONFIRM_SUCCESS_MESSAGE,
    message: successMsg
  }
}

const setConfirmFailMessage = (errorMsg) => {
  return {
    type: SET_CONFIRM_FAIL_MESSAGE,
    message: errorMsg
  }
}

const clearConfirmAllMessages = () => {
  return {
    type: CLEAR_CONFIRM_ALL_MESSAGES
  }
}

export {
  setConfirmSuccessMessage,
  setConfirmFailMessage,
  clearConfirmAllMessages
}
