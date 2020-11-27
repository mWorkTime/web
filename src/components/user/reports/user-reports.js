import React, { useEffect } from 'react'
import General from '../../layouts/user/general'
import ReportSend from './report-send'
import ChooseTask from './choose-task'
import { useDispatch, useSelector } from 'react-redux'
import renderTaskItem from './task-item'
import { CLEAR_TASK } from '../../../types'

const UserReports = () => {
  const { reportData: { loadingTask, task, taskId } } = useSelector(state => state)
  const dispatch = useDispatch()

  useEffect(() => () => {
    if (task) {
      dispatch({ type: CLEAR_TASK })
    }
  }, [dispatch, task])

  return (
    <General>
      <div className="reports--wrapper">
        <div className="reports--wrapper__title">Отчёт</div>
        <ChooseTask />
        {loadingTask ?
          <div className="reports--wrapper--empty">Задание не выбрано</div>
          : null
        }
        {
          task && typeof task === 'object' && renderTaskItem(task)
        }
        {
          task && typeof task === 'object' && <ReportSend id={taskId} />
        }
      </div>
    </General>
  )
}
export default UserReports
