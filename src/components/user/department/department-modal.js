import React, { useEffect } from 'react'
import { SET_DEPARTMENT_MODAL_ACTIVE } from '../../../types'
import { Modal, Form, Input, message } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { ReconciliationOutlined } from '@ant-design/icons'
import { departmentValidator } from '../../../validators'
import { fetchCreateDepartment } from '../../../actions'

const DepartmentModal = () => {
  const [form] = Form.useForm()
  const { departmentData: { active, successMsg } } = useSelector(state => state)
  const dispatch = useDispatch()
  const { validateDepartment } = departmentValidator

  useEffect(() => {
    if (successMsg) {
      message.success(successMsg)
    }
  }, [successMsg])

  return (
    <Modal
      visible={active}
      title="Создайте новый отдел"
      okText="Создать"
      cancelText="Отмена"
      onCancel={() => dispatch({ type: SET_DEPARTMENT_MODAL_ACTIVE })}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields()
            dispatch(fetchCreateDepartment(values))
          })
          .catch((info) => { console.log('Validate Failed:', info) })
      }}
    >

      <Form
        form={form}
        layout="vertical"
        name="form-create-department"
      >
        <Form.Item
          name="name_department"
          label="Название отдела"
          rules={validateDepartment}
          hasFeedback
        >
          <Input prefix={<ReconciliationOutlined />} placeholder='Введите название' />
        </Form.Item>
      </Form>
    </Modal>
  )
}
export default DepartmentModal
