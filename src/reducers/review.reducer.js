import { FETCH_ALL_TASKS_ON_REVIEW_REQUEST, FETCH_ALL_TASKS_ON_REVIEW_SUCCESS,
  FETCH_ALL_TASKS_ON_REVIEW_FAILURE, FETCH_CONFIRM_TASK_SUCCESS, FETCH_CONFIRM_TASK_FAILURE,
  FETCH_REVIEW_COMMENT_REQUEST, FETCH_REVIEW_COMMENT_SUCCESS, FETCH_REVIEW_COMMENT_FAILURE
} from '../types'

const updateReviewData = (state, action) => {
  if (state === undefined) {
    return {
      onReview: null,
      user: null,
      error: null,
      loading: false,
      disable: false,
      commentId: ''
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
  case FETCH_CONFIRM_TASK_SUCCESS:
    const findIdx = state.reviewData.onReview.findIndex(({ _id }) => _id === action.id)

    return {
      ...state.reviewData,
      onReview: [
        ...state.reviewData.onReview.slice(0, findIdx),
        ...state.reviewData.onReview.slice(findIdx + 1)
      ]
    }
  case FETCH_CONFIRM_TASK_FAILURE:
    return {
      ...state.reviewData,
      error: action.error
    }
  case FETCH_REVIEW_COMMENT_REQUEST:
    return {
      ...state.reviewData,
      disable: true
    }
  case FETCH_REVIEW_COMMENT_SUCCESS:
    return {
      ...state.reviewData,
      commentId: action.commentId
    }
  case FETCH_REVIEW_COMMENT_FAILURE:
    return {
      ...state.reviewData,
      disable: false,
      error: action.error
    }
  default:
    return state.reviewData
  }
}

export default updateReviewData
