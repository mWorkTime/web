import React from 'react'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { employeeValidator, phoneValidation, registerValidation } from '../validators'

const { validateName, validateRegisterPassword, validateConfirmPassword } = registerValidation
const { validateSurname } = employeeValidator
const { validateNumber } = phoneValidation

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
  editPassword: [
    {
      key: 'dhu8b2g7',
      name: 'password',
      label: 'Новый пароль',
      rules: validateRegisterPassword,
      placeholder: 'введите новый пароль',
      icon: <LockOutlined />
    },
    {
      key: 'jkinh99n9',
      name: 'confirm',
      label: 'Подвердите пароль',
      rules: validateConfirmPassword,
      placeholder: 'потвердите новый пароль',
      dependencies: ['password'],
      icon: <LockOutlined />
    }
  ]
}
