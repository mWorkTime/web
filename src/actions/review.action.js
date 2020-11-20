import {
  FETCH_ALL_TASKS_ON_REVIEW_FAILURE,
  FETCH_ALL_TASKS_ON_REVIEW_REQUEST,
  FETCH_ALL_TASKS_ON_REVIEW_SUCCESS
} from '../types'
import { getAllTasksOnReview } from '../services/review.service'
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

export {
  fetchAllTasksOnReview
}

