import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { uploadTaskFiles } from '../../../services/task.service'
import { FETCH_UPLOAD_FILE_SUCCESS, SET_CLEAR_FORM } from '../../../types'
import UserFileUpload from '../user-file-upload'

const TaskFileUpload = () => {
  const { taskData: { disable, taskId } } = useSelector(state => state)
  const dispatch = useDispatch()

  const successUploading = () => {
    dispatch({ type: FETCH_UPLOAD_FILE_SUCCESS})
  }

  return <UserFileUpload disable={disable} id={taskId} needClearForm={true} nameFieldForRequest={'task_id'}
                funcSuccess={successUploading}  func={uploadTaskFiles} typeClearForm={SET_CLEAR_FORM}
  />
}

export default TaskFileUpload
