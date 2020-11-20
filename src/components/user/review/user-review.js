import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import General from '../../layouts/user/general'
import { fetchAllTasksOnReview } from '../../../actions'
import Loader from '../../loader/loader'
import renderReviewTaskList from './render-review-task-list'

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
            : null
          }
          {
            onReview && Array.isArray(onReview) && onReview.length > 0
              ? renderReviewTaskList(onReview)
              : null
          }
      </div>
    </General>
  )

}
export default UserReview
