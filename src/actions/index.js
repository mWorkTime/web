import { registerUser, loginUser, logoutUser } from './auth.action'
import {
  setConfirmSuccessMessage,
  setConfirmFailMessage,
  clearConfirmAllMessages,
  getNewConfirmLink
} from './confirm.action'
import { toggleSidebar, hideSidebar, showSidebar } from './sidebar.action'
import { fetchUserRequest, setAuthToken, fetchUserData,
  fetchEditUserRegular, fetchConfirmPassword, fetchEditPassword } from './user.action'
import { fetchAllEmployees, fetchCreateEmployee,
         fetchEmployeeById, fetchEmployeeEdit,
         fetchEmployeeDismiss, fetchEmployeeRecover } from './employee.action'
import { fetchAllDepartments, fetchCreateDepartment, showFormDepartment } from './department.action'
import { fetchAllRole } from './role.action'
import { fetchAllTasks } from './task.action'

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
  fetchEmployeeById,
  fetchEmployeeEdit,
  fetchEmployeeDismiss,
  fetchEmployeeRecover,
  fetchUserData,
  fetchEditUserRegular,
  fetchConfirmPassword,
  fetchEditPassword,
  fetchAllTasks,
  showFormDepartment,
  toggleSidebar,
  hideSidebar,
  showSidebar
}
