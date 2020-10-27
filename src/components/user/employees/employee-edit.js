import React, { useEffect } from 'react'
import UserModal from '../user-modal'

import { Form, Spin } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCreateEmployee, fetchEmployeeById, showFormDepartment } from '../../../actions'
import renderEmployeeForm from './employee-forms'
import { HIDE_MODAL_EMPLOYEE_EDIT } from '../../../types'

const EmployeeEdit = ({ userId }) => {
  const {
    employeeData: { disable, modal: { edit }, fetching, employee },
    departmentData: { departments }, roleData: { roles }
  } = useSelector(state => state)
  const dispatch = useDispatch()
  const [form] = Form.useForm()

  const showDepartmentForm = () => dispatch(showFormDepartment)

  useEffect(() => () => form.resetFields(),[employee, form])

  useEffect(() => {
    if (userId) {
      dispatch(fetchEmployeeById(userId))
    }

  }, [userId, dispatch])

  return (
    <UserModal
      title={'Данные пользователя'}
      onCancel={() => dispatch({ type: HIDE_MODAL_EMPLOYEE_EDIT })}
      active={edit}
      okText={'Изменить'}
      formInst={form}
      func={fetchCreateEmployee}
    >
      <>
        {employee && typeof employee === 'object' && !fetching
          ? renderEmployeeForm('edit', disable, form, departments, roles, showDepartmentForm, employee)
          : <div className="form--edit--employee__loader"><Spin size='large' tip={'Loading...'} /></div>
        }
      </>
    </UserModal>
  )
}

export default EmployeeEdit
