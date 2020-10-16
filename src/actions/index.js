import { registerUser, loginUser } from './auth.action'
import { setConfirmSuccessMessage, setConfirmFailMessage, clearConfirmAllMessages, getNewConfirmLink } from './confirm.action'
import { toggleSidebar, hideSidebar} from './sidebar.action'
import { fetchUserRequest } from './user.action'

export {
  registerUser,
  loginUser,
  setConfirmSuccessMessage,
  setConfirmFailMessage,
  clearConfirmAllMessages,
  getNewConfirmLink,
  fetchUserRequest,
  toggleSidebar,
  hideSidebar
}
