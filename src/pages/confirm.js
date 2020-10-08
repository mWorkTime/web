import React, { useEffect, useState } from 'react'
import { confirmEmail } from '../services/confirm.service'
import { Redirect } from 'react-router-dom'

const ConfirmPage = ({ token }) => {
  const [isConfirm, setIsConfirm] = useState(false)
  const [needRegister, setNeedRegister] = useState(false)

  useEffect(() => {
    confirmEmail({ token })
      .then(({ data }) => {
        if (data.needRegister) {
          setNeedRegister(true)
        } else if (data.needResend) {
          setIsConfirm(true)
        }
        setIsConfirm(true)
      })
  }, [token])


  if (!isConfirm) {
    return <h1>Осуществляется подтверждение аккаунта. Ожидайте... </h1>
  }

  if (needRegister) {
    return <Redirect to={'/auth/register'} />
  }

  return (
    <Redirect to={'/auth/login'} />
  )
}

export default ConfirmPage
