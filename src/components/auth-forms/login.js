import React, { useEffect } from 'react'
import Auth from '../../pages/auth'
import renderAuthForm from './index'
import Resend from './resend'

import { Form, message } from 'antd'
import { connect } from 'react-redux'
import { loginUser } from '../../actions'
import { clearMessages, setDisabled } from '../../actions/auth.action'

const Login = ({ onFinishAuthorization, disabled, successMsg, clearMsg, cancelDisableFields, successConfirmMsg, errorConfirmMsg }) => {
  const [form] = Form.useForm()

  const clearFormFields = () => {
    form.resetFields()
    cancelDisableFields()
  }

  useEffect(() => {
    if (successMsg.login) {
      message.success(successMsg.login)
    }

    if (successConfirmMsg) {
      message.success(successConfirmMsg)
    }

    if (errorConfirmMsg) {
      message.error(errorConfirmMsg)
    }
  }, [successMsg.login, successConfirmMsg, errorConfirmMsg])

  useEffect(() => clearMsg, [clearMsg])

  return (
    <Auth title={'Авторизация'}
          children={renderAuthForm('login', form, onFinishAuthorization, clearFormFields, disabled, cancelDisableFields)}
          resendComponent={<Resend />}
    />
  )
}

const mapStateToProps = ({ authUser: { successMsg, disabled }, confirmUser: { successConfirmMsg, errorConfirmMsg } }) => {
  return { successMsg, disabled, successConfirmMsg, errorConfirmMsg }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onFinishAuthorization: (data) => dispatch(loginUser(data)()),
    clearMsg: () => dispatch(clearMessages('login')),
    cancelDisableFields: () => dispatch(setDisabled())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
