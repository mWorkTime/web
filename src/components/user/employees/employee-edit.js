import React, { useEffect } from 'react'
import UserModal from '../user-modal'
import PropTypes from 'prop-types'
import renderEmployeeForm from './employee-forms'

import { Form, Spin } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { fetchEmployeeById, showFormDepartment, fetchEmployeeEdit } from '../../../actions'
import { HIDE_MODAL_EMPLOYEE_EDIT } from '../../../types'

const EmployeeEdit = ({ userId }) => {
  const {
    employeeData: { disable, modal: { edit }, fetching, employee },
    departmentData: { departments, departmentsObj }, roleData: { roles, rolesObj }
  } = useSelector(state => state)
  const dispatch = useDispatch()
  const [form] = Form.useForm()

  const showDepartmentForm = () => dispatch(showFormDepartment)

  useEffect(() => () => {
    if (fetching) {
      form.resetFields()
    }
  }, [fetching, form])

  useEffect(() => {
    if (userId) {
      dispatch(fetchEmployeeById(userId)(roles))
    }

  }, [userId, roles, dispatch])

  return (
    <UserModal
      title={'Данные пользователя'}
      onCancel={() => dispatch({ type: HIDE_MODAL_EMPLOYEE_EDIT })}
      active={edit}
      okText={'Изменить'}
      formInst={form}
      func={fetchEmployeeEdit}
      reset={false}
      obj={{ departmentsObj, rolesObj }}
    >
      {employee && typeof employee === 'object' && !fetching
        ? renderEmployeeForm('edit', disable, form, departments, roles, showDepartmentForm, employee)
        : <div className="form--edit--employee__loader"><Spin size='large' tip={'Загрузка данных...'} /></div>
      }
    </UserModal>
  )
}

EmployeeEdit.propTypes = {
  userId: PropTypes.string.isRequired
}

export default EmployeeEdit
