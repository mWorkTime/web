import React, { useState } from 'react'
import { Upload, Button } from 'antd'
import { UploadOutlined } from '@ant-design/icons'
import { useDispatch, useSelector } from 'react-redux'
import { validateFiles } from '../../../validators'
import { uploadTaskFiles } from '../../../services/task.service'
import { FETCH_UPLOAD_FILE_SUCCESS, SET_CLEAR_FORM } from '../../../types'

const TaskFileUpload = () => {
  const [fileList, setFileList] = useState([])
  const [uploading, setUploading] = useState(false)
  const { taskData: { disable, taskId } } = useSelector(state => state)
  const dispatch = useDispatch()

  const props = {
    name: 'files',
    multiple: true,
    beforeUpload: (file, files) => {

      setFileList([...files])
      return false
    },
    onRemove: (file) => {
      if (fileList.length > 1) {
        const itemIndex = fileList.findIndex(({ uid }) => uid === file.uid)
        setFileList([...fileList.slice(0, itemIndex), ...fileList.slice(itemIndex + 1)])

        return
      }
      setFileList([])
    },
    fileList
  }

  const handleUpload = (id) => {
    setUploading(true)
    const isValid = validateFiles(fileList)

    if (!isValid) {
      setUploading(false)
      return setFileList([])
    }

    const formData = new FormData()
    fileList.forEach(file => {
      formData.append('files', file)
    })
    formData.append('task_id', id)

    uploadTaskFiles(formData)
      .then(() => {
        dispatch({ type: FETCH_UPLOAD_FILE_SUCCESS })
        setUploading(false)
        setFileList([])
      })
      .catch(() => console.log('Error photo updated'))
      .finally(() => {
        dispatch({ type: SET_CLEAR_FORM })
      })
  }

  return (
    <>
      <Upload {...props} fileList={fileList} multiple>
        <Button disabled={!disable}>
          <UploadOutlined /> Выберите файлы
        </Button>
      </Upload>
      <Button
        type="primary"
        disabled={fileList.length === 0}
        loading={uploading}
        onClick={() => handleUpload(taskId)}
        style={{ marginTop: 16 }}
      >
        {uploading ? 'Загрузка...' : 'Загрузить'}
      </Button>
    </>
  )
}
export default TaskFileUpload
