import React from 'react'
import { Button, Form, Input } from 'antd'
import { LockOutlined } from '@ant-design/icons'
import { generalValidation } from '../../../../validators'
import PropTypes from 'prop-types'

const { validatePassword } = generalValidation

const CheckOldPassword = ({ onFinishOldPass, disable }) => {
  return (
    <Form onFinish={onFinishOldPass} layout='vertical' name='form-check-password' className='form--check--password'>
      <Form.Item
        label="Ваш пароль"
        name="password"
        rules={validatePassword}
        hasFeedback
      >
        <Input.Password prefix={<LockOutlined />} placeholder="введите ваш пароль" disabled={!disable} />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" shape='round' disabled={!disable} >
          Подтвердить
        </Button>
      </Form.Item>
    </Form>
  )
}

CheckOldPassword.propTypes = {
  onFinishOldPass: PropTypes.func.isRequired,
  disable: PropTypes.bool.isRequired
}

export default CheckOldPassword
