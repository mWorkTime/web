import React, { useEffect } from 'react'
import Auth from '../../pages/auth'
import renderAuthForm from './index'

import { Form, message } from 'antd'
import { connect } from 'react-redux'
import { loginUser } from '../../actions'

const Login = ({ onFinishAuthorization, disabled, successMsg }) => {
  const [form] = Form.useForm()

  useEffect(() => {
    if (successMsg) {
      message.success(successMsg)
    }
  }, [successMsg])

  return (
    <Auth title={'Авторизация'} children={renderAuthForm('login', form, onFinishAuthorization, disabled)} />
  )
}

const mapStateToProps = ({ authUser: { successMsg, disabled } }) => {
  return {
    successMsg,
    disabled
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onFinishAuthorization: (data) => {
      dispatch(loginUser(data, dispatch))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
