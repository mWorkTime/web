import React from 'react'
import { Button, Form, Input } from 'antd'
import { LockOutlined } from '@ant-design/icons'
import { generalValidation } from '../../../../validators'
import PropTypes from 'prop-types'
import { fetchConfirmPassword } from '../../../../actions'
import { useDispatch } from 'react-redux'

const { validatePassword } = generalValidation

const CheckOldPassword = ({ disable }) => {
  const [form] = Form.useForm()
  const dispatch = useDispatch()
  const onFinishCheck = value => {
    dispatch(fetchConfirmPassword(value))
    form.resetFields()
  }

  return (
    <Form onFinish={onFinishCheck} form={form} layout='vertical' name='form-check-password' className='form--check--password'>
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
  disable: PropTypes.bool.isRequired
}

export default CheckOldPassword
