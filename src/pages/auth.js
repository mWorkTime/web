import React from 'react'
import { Typography } from 'antd'

const { Title } = Typography

const Auth = ({ children, title, resendComponent = null }) => (
  <div className="auth--background">
    <div className="auth--wrapper">
      <div className="auth--wrapper__content">
        <Title className='auth--wrapper__title' level={2}>{title}</Title>
        {children}
      </div>
      {resendComponent}
    </div>
  </div>
)

export default Auth
