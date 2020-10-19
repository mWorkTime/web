import { registerUser, loginUser, logoutUser } from './auth.action'
import {
  setConfirmSuccessMessage,
  setConfirmFailMessage,
  clearConfirmAllMessages,
  getNewConfirmLink
} from './confirm.action'
import { toggleSidebar, hideSidebar, showSidebar } from './sidebar.action'
import { fetchUserRequest, setAuthToken } from './user.action'

export {
  registerUser,
  loginUser,
  logoutUser,
  setConfirmSuccessMessage,
  setConfirmFailMessage,
  clearConfirmAllMessages,
  getNewConfirmLink,
  setAuthToken,
  fetchUserRequest,
  toggleSidebar,
  hideSidebar,
  showSidebar
}
