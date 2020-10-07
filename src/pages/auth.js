import React from 'react'
import { Typography } from 'antd'

const { Title } = Typography

const Auth = ({ children, title }) => (
  <div className="auth--background">
    <div className="auth--wrapper">
      <div className="auth--wrapper__content">
        <Title className='auth--wrapper__title' level={2}>{title}</Title>
        {children}
      </div>
    </div>
  </div>
)

export default Auth
