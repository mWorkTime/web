import React from 'react'
import Auth from '../../pages/auth'
import { Form } from 'antd'
import renderAuthForm from './index'

const Login = () => {
  const [form] = Form.useForm()

  const onFinish = (userData) => {
    console.log(userData)
  }

  return (
    <Auth title={'Авторизация'} children={renderAuthForm('login', form, onFinish)} />
  )
}

export default Login
