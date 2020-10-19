import React, { useEffect } from 'react'
import Auth from '../../pages/auth'
import renderAuthForm from './index'
import Resend from './resend'

import { Form, message } from 'antd'
import { connect } from 'react-redux'
import { loginUser } from '../../actions'
import { clearMessages, setDisabled } from '../../actions/auth.action'
import { useHistory } from 'react-router'

const Login = ({ disabled, clearMsg, cancelDisableFields, successConfirmMsg, errorConfirmMsg, onFinishAuthorization, redirect }) => {
  const [form] = Form.useForm()
  const history = useHistory()

  const clearFormFields = () => {
    form.resetFields()
    cancelDisableFields()
  }

  useEffect(() => {
    if (successConfirmMsg) {
      message.success(successConfirmMsg)
    }

    if (errorConfirmMsg) {
      message.error(errorConfirmMsg)
    }
  }, [successConfirmMsg, errorConfirmMsg])

  useEffect(() => clearMsg, [clearMsg])
  useEffect(() => {
    if (redirect) {
      history.push('/dashboard')
    }
  },[redirect, history])

  return (
    <Auth title={'Авторизация'}
          children={renderAuthForm('login', form, onFinishAuthorization, clearFormFields, disabled, cancelDisableFields)}
          resendComponent={<Resend />}
    />
  )
}

const mapStateToProps = ({ authUser: { disabled, redirect }, confirmUser: { successConfirmMsg, errorConfirmMsg } }) => {
  return { disabled, successConfirmMsg, errorConfirmMsg, redirect }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onFinishAuthorization: (data) => dispatch(loginUser(data)()),
    clearMsg: () => dispatch(clearMessages('login')),
    cancelDisableFields: () => dispatch(setDisabled())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
