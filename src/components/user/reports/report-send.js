import React from 'react'
import { Button, DatePicker, Form, Input } from 'antd'

const ReportSend = () => {
  const [form] = Form.useForm()

  const config = {
    rules: [
      {
        type: 'object',
        required: true,
        message: 'Пожалуйста укажите дату!'
      }
    ]
  }

  return (
    <div className="reports--wrapper__send">
      <div className="reports--send__title">Отправка отчёта</div>
      <Form form={form} name={'form-report-send'} layout='vertical'>
        <Form.Item name="start" label="Приступил к заданию " {...config} hasFeedback>
          <DatePicker showTime format="DD.MM.YYYY HH:mm:ss" />
        </Form.Item>
        <Form.Item name="finish" label="Завершил задание" {...config} hasFeedback>
          <DatePicker showTime format="DD.MM.YYYY HH:mm:ss" />
        </Form.Item>
        <Form.Item
          label={'Общее кол-во затраченых часов'}
          name={'total_time'}
          hasFeedback
        >
          <Input />
        </Form.Item>
        <Form.Item
          label='Обед (всего часов)'
          name={'break_time'}
          hasFeedback
        >
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" shape='round' block>
            Отправить отчёт
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}
export default ReportSend
