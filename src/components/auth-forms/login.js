import React, { useState } from 'react'
import Auth from '../../pages/auth'
import renderAuthForm from './index'

import { Form, message } from 'antd'
import { fetchLogin } from '../../services/auth.service'
import { setLocalStorageAndCookie } from '../../utils/clear-set-auth'

const Login = () => {
  const [form] = Form.useForm()
  const [disabled, setDisabled] = useState(false)

  const onFinish = (userData) => {
    setDisabled(true)
    fetchLogin(userData)
      .then(({ data }) => {
        setLocalStorageAndCookie(data)
        message.success(data.success)
      })
      .catch(() => {
        setDisabled(false)
        form.resetFields()
      })
  }

  return (
    <Auth title={'Авторизация'} children={renderAuthForm('login', form, onFinish, disabled)} />
  )
}

export default Login
