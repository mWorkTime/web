import React from 'react'
import { MailOutlined, UserOutlined } from '@ant-design/icons'
import { employeeValidator, phoneValidation, registerValidation, generalValidation } from '../validators'

const { validateName } = registerValidation
const { validateSurname } = employeeValidator
const { validateNumber } = phoneValidation
const { validateEmail } = generalValidation

export const formUserItems = {
  editRegular: [{
    key: 'jjn99j3njo',
    name: 'name',
    label: 'Имя',
    rules: validateName,
    icon: <UserOutlined />,
    placeholder: 'Введите имя'
  },
    {
      key: '9jj897h38',
      name: 'surname',
      label: 'Фамилия',
      rules: validateSurname,
      icon: <UserOutlined />,
      placeholder: 'Введите фамилию'
    },
    {
      key: 'hg763yu67',
      name: 'phone', label: 'Номер телефона',
      rules: validateNumber, icon: '',
      placeholder: '096 666 66 06',
      addonBefore: '+38', normalize: (values) => {
        return values.replace(/(\d{3})(\d{3})(\d{2})(\d{2})/, '$1 $2 $3 $4')
      }
    }],
  editEmail: {
    key: 'buybbb8b77',
    name: 'email',
    label: 'Email',
    rules: validateEmail,
    icon: <MailOutlined />,
    placeholder: 'example@gmail.com'
  }
}
