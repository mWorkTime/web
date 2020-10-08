import React, { useState } from 'react'
import Auth from '../../pages/auth'
import renderAuthForm from './index'
import { Form, message } from 'antd'
import { fetchRegister } from '../../services/auth.service'

const Register = () => {
  const [form] = Form.useForm()
  const [disabled, setDisabled] = useState(false)

  const onFinish = (userData) => {
    setDisabled(true)
    fetchRegister(userData)
      .then(({ data }) => {
        message.success(data.success)
        setDisabled(false)
        form.resetFields()
      })
      .catch(() => setDisabled(false))
  }

  return (
    <Auth title={'Регистрация'} children={renderAuthForm('register', form, onFinish, disabled)} />
  )
}

export default Register
