import React from 'react'
import { ExclamationCircleOutlined } from '@ant-design/icons'
import { generateRoleTags } from '../../../utils'
import { Modal } from 'antd'
import { fetchEmployeeDismiss, fetchEmployeeRecover } from '../../../actions'
import store from '../../../store'
import PropTypes from 'prop-types'

const { confirm } = Modal

const EmployeeData = ({ title, value, cls }) => {
  return (
    <div className="employee--confirm--content">
      <span className="employee--confirm__title">{title}</span>
      <span className={`employee--confirm__value name ${cls}`}>{value}</span>
    </div>
  )
}

EmployeeData.propTypes = {
  title: PropTypes.string.isRequired,
  cls: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node
  ])
}

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

const showConfirm = (data = {}) => {
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

export const showDismissConfirm = (id, text) => {
  const data = {
    title: 'Уволить работника ?',
    text,
    id,
    icon: <ExclamationCircleOutlined />,
    type: 'danger',
    func: fetchEmployeeDismiss
  }
  showConfirm(data)
}

export const showRecoverConfirm = (id, text) => {
  const data = {
    title: 'Восстановить работника ?',
    text,
    id,
    icon: <ExclamationCircleOutlined />,
    type: 'primary',
    func: fetchEmployeeRecover
  }
  showConfirm(data)
}




