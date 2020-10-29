import React from 'react'
import { Modal } from 'antd'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'

const UserModal = ({ children, onCancel, func, title, okText, active, formInst, obj }) => {
  const dispatch = useDispatch()

  return (
    <Modal
      visible={active}
      title={title}
      okText={okText}
      cancelText="Отмена"
      onCancel={onCancel}
      onOk={() => {
        formInst
          .validateFields()
          .then((values) => {
            dispatch(func(values)(obj))
          })
          .catch((info) => {
            console.log('Validate Failed:', info)
          })
      }}
    >
      {children}
    </Modal>
  )
}

UserModal.propTypes = {
  children: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  okText: PropTypes.string.isRequired,
  onCancel: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
  formInst: PropTypes.object.isRequired,
  func: PropTypes.func.isRequired,
  obj: PropTypes.object
}

export default UserModal
