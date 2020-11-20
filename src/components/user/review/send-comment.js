import React from 'react'
import { Button, Form, Input } from 'antd'

const SendComment = () => {
  const [form] = Form.useForm()

  return (
    <Form form={form} name="form-send-comment" layout='vertical' className="form--send--comment">
      <Form.Item
        label='Коментарий'
        name={'comment'}
        hasFeedback
      >
        <Input.TextArea rows={3} style={{ resize: 'none' }} />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" shape='round' block>
          Отправить
        </Button>
      </Form.Item>
    </Form>
  )
}
export default SendComment
