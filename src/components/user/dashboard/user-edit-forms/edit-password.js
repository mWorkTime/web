import React from 'react'
import { Button, Form, Input } from 'antd'
import { formUserItems } from '../../../../items'
import PropTypes from 'prop-types'
import { fetchEditPassword } from '../../../../actions'
import { useDispatch } from 'react-redux'

const { editPassword } = formUserItems

const EditPassword = ({ disable }) => {
  const [form] = Form.useForm()
  const dispatch = useDispatch()
  const onFinishPassword = values => {
    dispatch(fetchEditPassword(values))
    form.resetFields()
  }

  const renderItems = editPassword.map(({ key, name, label, dependencies, rules, placeholder, icon }) => (
    <Form.Item key={key} name={name}
      label={label} dependencies={dependencies}
      rules={rules} hasFeedback
    >
      <Input.Password prefix={icon} placeholder={placeholder} disabled={disable}  />
    </Form.Item>
  ))

  return (
    <Form form={form} name='form-edit-password'
          layout="vertical" className='form--edit--password' onFinish={onFinishPassword}>
      {renderItems}
      <Form.Item>
        <Button type="primary" htmlType="submit" shape='round' disabled={disable}>
          Редактировать
        </Button>
      </Form.Item>
    </Form>
  )
}

EditPassword.propTypes = {
  disable: PropTypes.bool.isRequired
}

export default EditPassword
