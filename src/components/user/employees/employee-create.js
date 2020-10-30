import React from 'react'
import UserModal from '../user-modal'
import renderEmployeeForm from './employee-forms'

import { Form } from 'antd'
import { SET_MODAL_CREATE_ACTIVE } from '../../../types'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCreateEmployee } from '../../../actions'
import { withDepartmentsAndRoles } from '../../hoc/with-departments-and-roles'

const EmployeeCreate = ({ func, departments, roles }) => {
  const { employeeData: { modal: { create }, disable }} = useSelector(state => state)
  const dispatch = useDispatch()
  const [form] = Form.useForm()

  return (
    <UserModal
      title={'Создайте нового работника'}
      onCancel={() => dispatch({ type: SET_MODAL_CREATE_ACTIVE })}
      active={create}
      okText={'Создать'}
      formInst={form}
      reset={true}
      func={fetchCreateEmployee}
    >
      {renderEmployeeForm('create', disable, form, departments, roles, func)}
    </UserModal>
  )
}

export default withDepartmentsAndRoles(EmployeeCreate)
