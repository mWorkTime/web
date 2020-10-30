import {
  SET_CONFIRM_SUCCESS_MESSAGE, SET_CONFIRM_FAIL_MESSAGE,
  CLEAR_CONFIRM_ALL_MESSAGES, SET_DISABLED
} from '../types'
import { resendConfirmLink } from '../services/confirm.service'
import { getErrorMsg } from '../utils'

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

const setDisable = {
  type: SET_DISABLED
}

const getNewConfirmLink = (userData) => () => (dispatch) => {
  dispatch(setDisable)

  resendConfirmLink(userData)
    .then(({ data }) => data)
    .catch((err) => { setConfirmFailMessage(getErrorMsg(err)) })
}

export {
  setConfirmSuccessMessage,
  setConfirmFailMessage,
  clearConfirmAllMessages,
  getNewConfirmLink
}
