import React from 'react'
import { Button, Form, Input } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { fetchReviewComment } from '../../../actions'

const SendComment = ({ id }) => {
  const [form] = Form.useForm()
  const { reviewData: { user, disable } } = useSelector(state => state)
  const dispatch = useDispatch()

  const onFinish = (values) => {
    const data = {...values, createdBy: user.name, taskId: id}
    dispatch(fetchReviewComment(data))
  }

  return (
    <Form form={form} onFinish={onFinish} name="form-send-comment" layout='vertical' className="form--send--comment">
      <Form.Item
        label='Коментарий'
        name={'comment'}
        rules={[{
          required: true,
          message: 'Напишите коментарий'
        }]}
        hasFeedback
      >
        <Input.TextArea rows={3} style={{ resize: 'none' }} disabled={disable}/>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" shape='round' block disabled={disable}>
          Отправить
        </Button>
      </Form.Item>
    </Form>
  )
}
export default SendComment
