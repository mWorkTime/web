import updateConfirm from './confirm.reducer'
import updateAuthUser from './auth-user.reducer'
import updateSidebar from './sidebar.reducer'
import updateUserDashboard from './user/dashboard.reducer'

const Reducer = (state, action) => {
  return {
    authUser: updateAuthUser(state, action),
    confirmUser: updateConfirm(state, action),
    sidebarUser: updateSidebar(state, action),
    userDashboard: updateUserDashboard(state, action)
  }
}

export default Reducer
