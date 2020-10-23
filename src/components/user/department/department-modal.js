import React from 'react'
import { SET_DEPARTMENT_MODAL_ACTIVE } from '../../../types'
import { Modal, Form, Input } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { UserOutlined } from '@ant-design/icons'
import { departmentValidator } from '../../../validators/department.validator'

const DepartmentModal = () => {
  const [form] = Form.useForm()
  const { departmentData: { active } } = useSelector(state => state)
  const dispatch = useDispatch()
  const { validateDepartment } = departmentValidator

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
            console.log(values)
          })
          .catch((info) => {
            console.log('Validate Failed:', info)
          })
      }}
    >

      <Form
        form={form}
        layout="vertical"
        name="form-create-department"
      >
        <Form.Item
          name="name_department"
          label="Название департамента"
          rules={validateDepartment}
          hasFeedback
        >
          <Input prefix={<UserOutlined />} placeholder='Введите название' />
        </Form.Item>
      </Form>
    </Modal>
  )
}
export default DepartmentModal
