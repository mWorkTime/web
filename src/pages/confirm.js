import React, { useEffect, useState } from 'react'
import { confirmEmail } from '../services/confirm.service'
import { connect } from 'react-redux'
import { setConfirmSuccessMessage, setConfirmFailMessage } from '../actions'
import { Redirect } from 'react-router'

const ConfirmPage = ({ token, successConfirmMsg, failConfirmMsg }) => {
  const [isConfirmOrNeedLogin, setIsConfirmOrNeedLogin] = useState(false)
  const [needRegister, setNeedRegister] = useState(false)

  useEffect(() => {
    confirmEmail({ token })
      .then(({ data }) => {
        successConfirmMsg(data.success)
        setIsConfirmOrNeedLogin(true)
      })
      .catch(({ response: { data } }) => {
        if (data.needRegister) {
          failConfirmMsg(data.error)
          return setNeedRegister(true)
        }
        failConfirmMsg(data.error)
        setIsConfirmOrNeedLogin(true)
      })
  }, [token, failConfirmMsg, successConfirmMsg])

  if (isConfirmOrNeedLogin) {
    return <Redirect to={'/auth/login'} />
  }

  if (needRegister) {
    return <Redirect to={'/auth/register'} />
  }

  return <h1>Осуществляется подтверждение аккаунта. Ожидайте... </h1>
}

const mapDispatchToProps = (dispatch) => {
  return {
    successConfirmMsg: (message) => dispatch(setConfirmSuccessMessage(message)),
    failConfirmMsg: (message) => dispatch(setConfirmFailMessage(message))
  }
}

export default connect(null, mapDispatchToProps)(ConfirmPage)
