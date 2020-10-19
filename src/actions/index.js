import { registerUser, loginUser } from './auth.action'
import { setConfirmSuccessMessage, setConfirmFailMessage, clearConfirmAllMessages, getNewConfirmLink } from './confirm.action'
import { toggleSidebar, hideSidebar} from './sidebar.action'
import { fetchUserRequest, setAuthToken } from './user.action'

export {
  registerUser,
  loginUser,
  setConfirmSuccessMessage,
  setConfirmFailMessage,
  clearConfirmAllMessages,
  getNewConfirmLink,
  setAuthToken,
  fetchUserRequest,
  toggleSidebar,
  hideSidebar
}
