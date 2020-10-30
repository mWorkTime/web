import React from 'react'
import { ExclamationCircleOutlined } from '@ant-design/icons'
import { fetchEmployeeDismiss } from '../../../../actions'
import { showConfirm } from './modal-confirm'

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
