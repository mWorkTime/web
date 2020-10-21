import {
  SET_CONFIRM_SUCCESS_MESSAGE, SET_CONFIRM_FAIL_MESSAGE,
  CLEAR_CONFIRM_ALL_MESSAGES, SET_DISABLED
} from '../types'
import { resendConfirmLink } from '../services/confirm.service'

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
    .then(({ data: { success } }) => {
      dispatch(setConfirmSuccessMessage(success))
    })
    .catch((err) => { console.log(err.response.data.msg) })
}

export {
  setConfirmSuccessMessage,
  setConfirmFailMessage,
  clearConfirmAllMessages,
  getNewConfirmLink
}
