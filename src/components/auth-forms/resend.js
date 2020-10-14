import React from 'react'
import { Button, Form, Input, Typography } from 'antd'
import { MailOutlined } from '@ant-design/icons'
import { generalValidation } from '../../validators/auth.validator'
import { useDispatch, useSelector } from 'react-redux'
import { getNewConfirmLink } from '../../actions'

const { Title } = Typography

const Resend = () => {
  const [form] = Form.useForm()
  const { validateEmail } = generalValidation
  const dispatch = useDispatch()
  const lock = useSelector(({ confirmUser: { disabled } }) => disabled)

  const onResend = (data) => dispatch(getNewConfirmLink(data)())
  const clearForm = () => form.resetFields()

  return (
    <div className="auth--wrapper__resend">
      <div className="resend--link">
        <Title className='resend--link__title' level={2}>Получить новую ссылку</Title>
        <Form form={form} onFinish={onResend} name='form--resend--link'>
          <Form.Item
            className='form--resend__input'
            name='email'
            label='Email'
            rules={validateEmail}
            hasFeedback
          >
            <Input prefix={<MailOutlined />} placeholder="введите email" disabled={lock}/>
          </Form.Item>
          <div className="form--resend--buttons">
            <Button className='form--resend__btn' type='primary' shape='round' htmlType='submit' disabled={lock}>Получить</Button>
            <Button type='link' onClick={clearForm}>Очистить поле</Button>
          </div>
        </Form>
      </div>
    </div>
  )
}

export default Resend
