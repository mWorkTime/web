import React from 'react'
import Auth from '../../pages/auth'
import renderAuthForm from './index'
import { Form } from 'antd'

const Register = () => {
  const [form] = Form.useForm()

  const onFinish = (userData) => {
    console.log(userData)
  }

  return (
    <Auth title={'Регистрация'} children={renderAuthForm('register', form, onFinish)} />
  )
}

export default Register
