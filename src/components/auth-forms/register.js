import React, { useEffect } from 'react'
import Auth from '../../pages/auth'
import renderAuthForm from './index'
import { connect } from 'react-redux'
import { Form, message } from 'antd'
import { registerUser } from '../../actions'

const Register = ({ onFinishRegistration, disabled, successMsg }) => {
  const [form] = Form.useForm()

  useEffect(() => {
    if (successMsg) {
      message.success(successMsg)
    }
  }, [successMsg])


  return (
    <Auth title={'Регистрация'} children={renderAuthForm('register', form, onFinishRegistration, disabled)} />
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
    onFinishRegistration: (data) => {
      dispatch(registerUser(data, dispatch))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)
