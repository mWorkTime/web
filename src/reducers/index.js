import updateConfirm from './confirm.reducer'
import updateAuthUser from './auth-user.reducer'
import updateSidebar from './sidebar.reducer'

const Reducer = (state, action) => {
  return {
    authUser: updateAuthUser(state, action),
    confirmUser: updateConfirm(state, action),
    sidebarUser: updateSidebar(state, action)
  }
}

export default Reducer
