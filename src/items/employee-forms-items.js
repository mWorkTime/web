import React from 'react'
import { MailOutlined, UserOutlined } from '@ant-design/icons'
import { employeeValidator, generalValidation, phoneValidation, registerValidation } from '../validators'

const { validateEmail } = generalValidation
const { validateName } = registerValidation
const { validateSurname } = employeeValidator
const { validateNumber } = phoneValidation

export const formCreateItems = {
  create: [
    {
      key: 'hggt77g7ygy',
      name: 'name',
      label: 'Имя',
      rules: validateName,
      icon: <UserOutlined />,
      placeholder: 'Введите имя'
    },
    {
      key: 'sadhsahd27',
      name: 'surname',
      label: 'Фамилия',
      rules: validateSurname,
      icon: <UserOutlined />,
      placeholder: 'Введите фамилию'
    },
    {
      key: 'jkeuun872',
      name: 'email',
      label: 'Email',
      rules: validateEmail,
      icon: <MailOutlined />,
      placeholder: 'example@gmail.com'
    },
    {
      key: 'jsduisj89',
      name: 'phone', label: 'Номер телефона',
      rules: validateNumber, icon: '',
      placeholder: '096 666 66 06',
      addonBefore: '+38', normalize: (values) => {
        return values.replace(/(\d{3})(\d{3})(\d{2})(\d{2})/, '$1 $2 $3 $4')
      }
    }
  ],
  edit: [{
    key: 'hggt77g7ygy',
    name: 'name',
    label: 'Имя',
    rules: validateName,
    icon: <UserOutlined />,
    placeholder: 'Введите имя'
  },
    {
      key: 'sadhsahd27',
      name: 'surname',
      label: 'Фамилия',
      rules: validateSurname,
      icon: <UserOutlined />,
      placeholder: 'Введите фамилию'
    },
    {
      key: 'jsduisj89',
      name: 'phone', label: 'Номер телефона',
      rules: validateNumber, icon: '',
      placeholder: '096 666 66 06',
      addonBefore: '+38', normalize: (values) => {
        return values.replace(/(\d{3})(\d{3})(\d{2})(\d{2})/, '$1 $2 $3 $4')
      }
    }]
}
