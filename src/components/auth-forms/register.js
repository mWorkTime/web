import React, { useEffect } from 'react'
import Auth from '../../pages/auth'
import renderAuthForm from './index'
import { connect } from 'react-redux'
import { Form, message } from 'antd'
import { registerUser } from '../../actions'
import { clearMessages, setDisabled } from '../../actions/auth.action'

const Register = ({ onFinishRegistration, disabled, successMsg, clearMsg, cancelDisableFields, errorConfirmMsg }) => {
  const [form] = Form.useForm()

  const clearFormFields = () => {
    form.resetFields()
    cancelDisableFields()
  }

  useEffect(() => {
    if (successMsg.register) {
      message.success(successMsg.register)
    }

    if (errorConfirmMsg) {
      message.error(errorConfirmMsg)
    }
  }, [successMsg.register, errorConfirmMsg])

  useEffect(() => clearMsg, [clearMsg])

  return (
    <Auth title={'Регистрация'}
          children={renderAuthForm('register', form, onFinishRegistration, clearFormFields, disabled, cancelDisableFields)} />
  )
}

const mapStateToProps = ({ authUser: { successMsg, disabled }, confirmUser: { errorConfirmMsg } }) => {
  return { successMsg, disabled, errorConfirmMsg }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onFinishRegistration: (data) => dispatch(registerUser(data)()),
    clearMsg: () => dispatch(clearMessages('register')),
    cancelDisableFields: () => dispatch(setDisabled())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)
