import { HIDE_SIDEBAR, TOGGLE_SIDEBAR } from '../types'

const updateSidebar = (state, action) => {
  if (state === undefined) {
    return {
      active: true
    }
  }

  switch (action.type) {
  case TOGGLE_SIDEBAR:
    return {
      active: !state.sidebarUser.active
    }
  case HIDE_SIDEBAR:
    return {
      active: false
    }
  default:
    return state.sidebarUser
  }
}

export default updateSidebar
