import React from 'react'
import { ExclamationCircleOutlined } from '@ant-design/icons'
import { fetchEmployeeRecover } from '../../../../actions'
import { showConfirm } from './modal-confirm'

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
