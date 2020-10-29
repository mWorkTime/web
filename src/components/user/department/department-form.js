import React, { useEffect } from 'react'
import { SET_DEPARTMENT_MODAL_ACTIVE } from '../../../types'
import { Form, Input, message } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { ReconciliationOutlined } from '@ant-design/icons'
import { departmentValidator } from '../../../validators'
import { fetchCreateDepartment } from '../../../actions'
import UserModal from '../user-modal'

const DepartmentForm = () => {
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
    <UserModal
      formInst={form} okText={"Создать"} active={active} func={fetchCreateDepartment} reset={true}
      onCancel={() => dispatch({ type: SET_DEPARTMENT_MODAL_ACTIVE })} title={"Создайте новый отдел"}>
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
    </UserModal>
  )
}

export default DepartmentForm
