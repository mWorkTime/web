import React from 'react'
import { Button, Form, Select } from 'antd'

const { Option } = Select

const ChooseTask = () => {
  const [form] = Form.useForm()

  return (
    <div className="reports--wrapper__choose">
      <Form form={form} name={'form-choose-task'} className='form--choose--task'>
        <Form.Item
          name="task"
          label="Задание"
          hasFeedback
        >
          <Select placeholder="Выберите задание">
            <Option value={'jhiu878h'}>Задача #1</Option>
            <Option value={'sahvt727g'}>Задача #2</Option>
          </Select>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" shape='round' block>
            Получить данные
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}
export default ChooseTask
