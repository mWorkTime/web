import { HIDE_SIDEBAR, TOGGLE_SIDEBAR, SHOW_SIDEBAR } from '../types'

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
  case SHOW_SIDEBAR:
    return {
      active: true
    }
  default:
    return state.sidebarUser
  }
}

export default updateSidebar
