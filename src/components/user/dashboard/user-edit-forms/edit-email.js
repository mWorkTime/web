import React from 'react'
import { Button, Form, Input, Alert } from 'antd'
import { formUserItems } from '../../../../items'
import PropTypes from 'prop-types'

const { editEmail } = formUserItems

const EditEmail = ({ onFinish, initialData = '' }) => {
  const [form] = Form.useForm()

  return (
    <>
      <Alert
        message="Внимание"
        description="Если Вы смените email, то логин для входа тоже изменяться! "
        type="info"
        showIcon
      />
      <Form form={form} name='form-edit-email'
            layout="vertical" className='form--edit--email' onFinish={onFinish}
            initialValues={{ email: initialData }}
      >
        <Form.Item
          key={editEmail.key} name={editEmail.name}
          label={editEmail.label} rules={editEmail.rules}
          hasFeedback>
          <Input prefix={editEmail.icon} placeholder={editEmail.placeholder} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" shape='round'>
            Редактировать
          </Button>
        </Form.Item>
      </Form>
    </>
  )
}

EditEmail.propTypes = {
  onFinish: PropTypes.func.isRequired,
  initialData: PropTypes.string.isRequired
}

export default EditEmail
