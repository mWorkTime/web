import React, { useEffect } from 'react'
import { Form, Modal } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { SET_MODAL_CREATE_ACTIVE } from '../../../types'
import { fetchAllDepartments } from '../../../actions'
import EmployeeCreate from './employee-create'

const EmployeeModal = () => {
  const [form] = Form.useForm()
  const { employeeData: { modal: { create } }, departmentData: { departments } } = useSelector((state) => state)
  const dispatch = useDispatch()

  useEffect(() => {
    if (!departments) {
      dispatch(fetchAllDepartments())
    }
  }, [departments, dispatch])

  return (
    <Modal
      visible={create}
      title="Создайте нового работника"
      okText="Создать"
      cancelText="Отмена"
      onCancel={() => {
        dispatch({ type: SET_MODAL_CREATE_ACTIVE })
      }}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields()
          })
          .catch((info) => {
            console.log('Validate Failed:', info)
          })
      }}
    >
      <EmployeeCreate formInst={form} departments={departments} />
    </Modal>
  )
}

export default EmployeeModal
