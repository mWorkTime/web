import updateConfirm from './confirm.reducer'
import updateAuthUser from './auth-user.reducer'

const Reducer = (state, action) => {
  return {
    authUser: updateAuthUser(state, action),
    confirmUser: updateConfirm(state, action)
  }
}

export default Reducer
