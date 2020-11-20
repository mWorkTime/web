import {
  FETCH_ALL_TASKS_ON_REVIEW_FAILURE,
  FETCH_ALL_TASKS_ON_REVIEW_REQUEST,
  FETCH_ALL_TASKS_ON_REVIEW_SUCCESS,
  FETCH_CONFIRM_TASK_SUCCESS, FETCH_CONFIRM_TASK_FAILURE,
  FETCH_REVIEW_COMMENT_REQUEST, FETCH_REVIEW_COMMENT_SUCCESS, FETCH_REVIEW_COMMENT_FAILURE
} from '../types'
import { commentReview, confirmReviewTask, getAllTasksOnReview } from '../services/review.service'
import { getErrorMsg } from '../utils'

const fetchAllTasksOnReview = () => (dispatch) => {
  dispatch({ type: FETCH_ALL_TASKS_ON_REVIEW_REQUEST })
  getAllTasksOnReview()
    .then(({ data }) => {
      dispatch({
        type: FETCH_ALL_TASKS_ON_REVIEW_SUCCESS,
        review: data.onReview, user: data.user
      })
    })
    .catch((err) => {
      dispatch({ type: FETCH_ALL_TASKS_ON_REVIEW_FAILURE, error: getErrorMsg(err) })
    })
}

const fetchConfirmReviewTask = (dataConfirm) => (dispatch) => {
  confirmReviewTask({ task_id: dataConfirm })
    .then(({ data: { id } }) => {
      dispatch({ type: FETCH_CONFIRM_TASK_SUCCESS, id })
    })
    .catch((err) => dispatch({ type: FETCH_CONFIRM_TASK_FAILURE, error: getErrorMsg(err) }))
}

const fetchReviewComment = (dataComment) => (dispatch) => {
  dispatch({ type: FETCH_REVIEW_COMMENT_REQUEST })
  commentReview(dataComment)
    .then(({ data }) => dispatch({ type: FETCH_REVIEW_COMMENT_SUCCESS, commentId: data.commentKey }))
    .catch((err) => dispatch({ type: FETCH_REVIEW_COMMENT_FAILURE, error: getErrorMsg(err) }))
}

export {
  fetchAllTasksOnReview,
  fetchConfirmReviewTask,
  fetchReviewComment
}

