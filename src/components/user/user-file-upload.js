import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { validateFiles } from '../../validators'
import { Button, Upload } from 'antd'
import { UploadOutlined } from '@ant-design/icons'

const UserFileUpload = ({ disable, id, func, nameFieldForRequest, needClearForm = false, typeClearForm = '', funcSuccess }) => {
  const [fileList, setFileList] = useState([])
  const [uploading, setUploading] = useState(false)
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
    formData.append(nameFieldForRequest, id)

    func(formData)
      .then(({ data }) => {
        funcSuccess(data)
        setUploading(false)
        setFileList([])
      })
      .catch((err) => console.dir(err))
      .finally(() => {
        if (needClearForm) {
          dispatch({ type: typeClearForm })
        }
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
        onClick={() => handleUpload(id)}
        style={{ marginTop: 16 }}
      >
        {uploading ? 'Загрузка...' : 'Загрузить'}
      </Button>
    </>
  )
}

UserFileUpload.propTypes = {
  disable: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
  func: PropTypes.func.isRequired,
  nameFieldForRequest: PropTypes.string.isRequired,
  needClearForm: PropTypes.bool.isRequired,
  typeClearForm: PropTypes.string.isRequired,
  funcSuccess: PropTypes.func.isRequired
}

export default UserFileUpload
