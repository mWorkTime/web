import React, { useEffect } from 'react'
import { Form, Modal, message } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { SET_MODAL_CREATE_ACTIVE } from '../../../types'
import { fetchAllDepartments, fetchAllRole, fetchCreateEmployee } from '../../../actions'
import EmployeeCreate from './employee-create'

const EmployeeModal = () => {
  const [form] = Form.useForm()
  const { employeeData: { modal: { create }, disable, successMsg }, departmentData: { departments }, roleData: { roles } } = useSelector((state) => state)
  const dispatch = useDispatch()

  useEffect(() => {
    if (!departments) {
      dispatch(fetchAllDepartments())
    }
  }, [departments, dispatch])

  useEffect(() => {
    if (!roles) {
      dispatch(fetchAllRole())
    }
  }, [dispatch, roles])

  useEffect(() => {
    if (successMsg) {
      message.success(successMsg)
    }
  }, [successMsg])

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
            const data = { ...values, department: { id: values.department } }
            dispatch(fetchCreateEmployee(data))
          })
          .catch((info) => {
            console.log('Validate Failed:', info)
          })
      }}
    >
      <EmployeeCreate formInst={form} departments={departments} roles={roles} disable={disable} />
    </Modal>
  )
}

export default EmployeeModal
