import React, { useEffect } from 'react'
import { Modal, message } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import PropTypes from 'prop-types'

const UserModal = ({ children, onCancel, func, title, okText, active, formInst }) => {
  const { employeeData: { successMsg }} = useSelector((state) => state)
  const dispatch = useDispatch()

  useEffect(() => {
    if (successMsg) {
      message.success(successMsg)
    }
  }, [successMsg])

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
            formInst.resetFields()
            dispatch(func(values))
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
}

export default UserModal
