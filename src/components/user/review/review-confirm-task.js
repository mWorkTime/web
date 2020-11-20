import React from 'react'
import { Button } from 'antd'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { fetchConfirmReviewTask } from '../../../actions'

const ReviewConfirmTask = ({ id = ''}) => {
  const dispatch = useDispatch()

  return (
    <div className="review--confirm--task">
      <div className="confirm--task__title">Подтвердите выполнение задания</div>
      <Button type={'primary'} shape='round' onClick={() => dispatch(fetchConfirmReviewTask(id))}>Подтвердить</Button>
    </div>
  )
}
ReviewConfirmTask.propTypes = {
  id: PropTypes.string.isRequired
}


export default ReviewConfirmTask
