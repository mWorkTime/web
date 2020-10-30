import React from 'react'
import EmployeeData from './employee-data'
import store from '../../../../store'
import { Modal } from 'antd'
import { generateRoleTags } from '../../../../utils'

const { confirm } = Modal

const confirmContent = (text) => (
  <>
    <EmployeeData title={'ФИО:'} value={text.name} cls={'name'} />
    <EmployeeData title={'Email:'} value={text.email} cls={'email'} />
    <EmployeeData title={'Роли:'} value={generateRoleTags(text.role)} cls={'tags'} />
    <EmployeeData title={'Отдел:'} value={text.department} cls={'department'} />
    <EmployeeData title={'Статус:'} cls={''}
                  value={text.isSacked
                    ? <span className="status status--dismiss">уволен</span>
                    : <span className="status status--success">не уволен</span>} />
  </>
)

export const showConfirm = (data = {}) => {
  const { title, icon, type, text, id, func } = data
  confirm({
    title,
    icon,
    content: confirmContent(text),
    okText: 'Да',
    cancelText: 'Нет',
    okType: type,
    onOk() {
      const employeeData = { orgId: text.organization, userId: id }
      store.dispatch(func(employeeData)())
    }
  })
}
