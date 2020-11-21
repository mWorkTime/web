import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import General from '../../layouts/user/general'
import { fetchAllTasksOnReview } from '../../../actions'
import Loader from '../../loader/loader'
import renderReviewTaskList from './render-review-task-list'
import noTasks from '../../../images/task/empty.svg'
import { reviewUploadFiles } from '../../../services/review.service'
import { FETCH_CONFIRM_TASK_SUCCESS } from '../../../types'

const UserReview = () => {
  const { roleData: { userRole }, reviewData: { onReview, user, loading, disable, commentId } } = useSelector(state => state)
  const dispatch = useDispatch()

  const history = useHistory()
  useEffect(() => {
    if (userRole === 0 || userRole > 3) {
      history.push('/dashboard')
    }

  }, [history, userRole])

  useEffect(() => {
    if (!(onReview || user)) {
      dispatch(fetchAllTasksOnReview())
    }

  }, [dispatch, onReview, user])

  const reviewUploadFileSuccess = (data) => {
    setTimeout(() => dispatch({ type: FETCH_CONFIRM_TASK_SUCCESS, id: data.taskId}),500)
  }

  return (
    <General>
      <div className="review--wrapper">
        {loading ?
          <Loader height={'80vh'} />
          : onReview && Array.isArray(onReview) && onReview.length > 0
            ? renderReviewTaskList(onReview, disable, commentId, reviewUploadFiles, reviewUploadFileSuccess)
            : <div className="task--board--empty">
              <div className="board--empty__title">
                У вас нету задач на подтверждение
              </div>
              <div className="board--empty__background">
                <img src={noTasks} alt="Остутсвуют задачи" className='board--empty__img' />
              </div>
            </div>
        }
      </div>
    </General>
  )

}
export default UserReview
