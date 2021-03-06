import updateConfirm from './confirm.reducer'
import updateAuthUser from './auth-user.reducer'
import updateSidebar from './sidebar.reducer'
import updateUserData from './user.reducer'
import updateEmployeeData from './employee.reducer'
import updateDepartmentData from './department.reducer'
import updateRoleData from './role.reducer'
import updatePaginationData from './pagination.reducer'
import updateTaskData from './task.reducer'
import updateReviewData from './review.reducer'
import updateReportData from './report.reducer'

const Reducer = (state, action) => {
  return {
    authUser: updateAuthUser(state, action),
    confirmUser: updateConfirm(state, action),
    sidebarUser: updateSidebar(state, action),
    userData: updateUserData(state, action),
    employeeData: updateEmployeeData(state, action),
    departmentData: updateDepartmentData(state, action),
    roleData: updateRoleData(state, action),
    paginationData: updatePaginationData(state, action),
    taskData: updateTaskData(state, action),
    reviewData: updateReviewData(state, action),
    reportData: updateReportData(state, action)
  }
}

export default Reducer
