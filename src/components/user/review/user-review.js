import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import General from '../../layouts/user/general'
import { fetchAllTasksOnReview } from '../../../actions'
import Loader from '../../loader/loader'
import renderReviewTaskList from './render-review-task-list'
import noTasks from '../../../images/task/empty.svg'

const UserReview = () => {
  const { roleData: { userRole }, reviewData: { onReview, user, loading } } = useSelector(state => state)
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

  return (
    <General>
      <div className="review--wrapper">
        {loading ?
          <Loader height={'80vh'} />
          : onReview && Array.isArray(onReview) && onReview.length > 0
            ? renderReviewTaskList(onReview)
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
