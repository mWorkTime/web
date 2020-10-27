import { registerUser, loginUser, logoutUser } from './auth.action'
import {
  setConfirmSuccessMessage,
  setConfirmFailMessage,
  clearConfirmAllMessages,
  getNewConfirmLink
} from './confirm.action'
import { toggleSidebar, hideSidebar, showSidebar } from './sidebar.action'
import { fetchUserRequest, setAuthToken } from './user.action'
import { fetchAllEmployees, fetchCreateEmployee } from './employee.action'
import { fetchAllDepartments, fetchCreateDepartment, showFormDepartment } from './department.action'
import { fetchAllRole } from './role.action'

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
  fetchAllEmployees,
  fetchAllDepartments,
  fetchCreateDepartment,
  fetchAllRole,
  fetchCreateEmployee,
  showFormDepartment,
  toggleSidebar,
  hideSidebar,
  showSidebar
}
