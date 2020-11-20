import { FETCH_ALL_TASKS_ON_REVIEW_REQUEST, FETCH_ALL_TASKS_ON_REVIEW_SUCCESS,
  FETCH_ALL_TASKS_ON_REVIEW_FAILURE
} from '../types'

const updateReviewData = (state, action) => {
  if (state === undefined) {
    return {
      onReview: null,
      user: null,
      error: null,
      loading: false,
      disable: false
    }
  }
  switch (action.type) {
  case FETCH_ALL_TASKS_ON_REVIEW_REQUEST:
    return {
      ...state.reviewData,
      loading: true
    }
  case FETCH_ALL_TASKS_ON_REVIEW_SUCCESS:
    return {
      ...state.reviewData,
      onReview: action.review,
      user: action.user,
      loading: false,
      error: null
    }
  case FETCH_ALL_TASKS_ON_REVIEW_FAILURE:
    return {
      ...state.reviewData,
      error: action.error,
      loading: false
    }
  default:
    return state.reviewData
  }
}

export default updateReviewData
