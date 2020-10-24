import updateConfirm from './confirm.reducer'
import updateAuthUser from './auth-user.reducer'
import updateSidebar from './sidebar.reducer'
import updateUserData from './user.reducer'
import updateEmployeeData from './employee.reducer'
import updateDepartmentData from './department.reducer'
import updateRoleData from './role.reducer'

const Reducer = (state, action) => {
  return {
    authUser: updateAuthUser(state, action),
    confirmUser: updateConfirm(state, action),
    sidebarUser: updateSidebar(state, action),
    userData: updateUserData(state, action),
    employeeData: updateEmployeeData(state, action),
    departmentData: updateDepartmentData(state, action),
    roleData: updateRoleData(state, action)
  }
}

export default Reducer
