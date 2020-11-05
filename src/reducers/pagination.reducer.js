import { SET_PAGINATION_EMPLOYEES } from '../types'

const updatePaginationData = (state, action) => {
  if (state === undefined) {
    return {
      paginationEmployees: {
        pageSize: 10,
        currentPage: 1,
        total: 0
      }
    }
  }
  switch (action.type) {
  case SET_PAGINATION_EMPLOYEES:
    return {
      paginationEmployees: {
        ...state.paginationData.paginationEmployees,
        total: action.total,
        currentPage: action.curPage
      }
    }
  default:
    return state.paginationData
  }
}

export default updatePaginationData
