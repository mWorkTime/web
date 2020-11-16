import React from 'react'
import { Form, DatePicker, Input, Select } from 'antd'
import { taskValidator } from '../../../../validators'
import { dictionaryPriority } from '../../../../items'

const { RangePicker } = DatePicker
const { Option } = Select
const { validateDate, validateDesc, validateNameTask, validatePriority } = taskValidator

const renderTaskForm = (typeForm, formInst, data, disable) => {
  return (
    <Form form={formInst} name={typeForm} layout='vertical'>
      <Form.Item name="createdBy" hidden initialValue={data?.user}><Input /></Form.Item>
      <Form.Item name="userId" hidden initialValue={data?.userId}><Input /></Form.Item>
      <Form.Item
        name="name"
        label='Название'
        hasFeedback
        rules={validateNameTask}
        initialValue={'Задание #'}
      >
        <Input placeholder='Введите название и номер задания!' disabled={disable} />
      </Form.Item>
      <Form.Item
        name="desc"
        label='Краткое описание'
        hasFeedback
        rules={validateDesc}
      >
        <Input.TextArea rows={3} style={{ resize: 'none' }} disabled={disable} />
      </Form.Item>
      <Form.Item name="runtime" label="Срок" {...validateDate} >
        <RangePicker showTime format="DD.MM.YYYY HH:mm:ss" disabled={disable} />
      </Form.Item>
      <Form.Item
        name="priority"
        label="Приоритет"
        rules={validatePriority}
        hasFeedback
      >
        <Select placeholder="Выберите приоритет" disabled={disable}>
          <Option value={0}>{dictionaryPriority['0']}</Option>
          <Option value={1}>{dictionaryPriority['1']}</Option>
          <Option value={2}>{dictionaryPriority['2']}</Option>
          <Option value={3}>{dictionaryPriority['3']}</Option>
        </Select>
      </Form.Item>
    </Form>
  )
}

export default renderTaskForm
