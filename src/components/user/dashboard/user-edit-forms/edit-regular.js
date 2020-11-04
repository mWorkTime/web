import React from 'react'
import { Button, Form, Input, Select } from 'antd'
import { employeeValidator } from '../../../../validators'
import { formUserItems } from '../../../../items'
import PropTypes from 'prop-types'

const { Option } = Select
const { validateGender } = employeeValidator
const { editRegular } = formUserItems

const EditRegular = ({ onFinish, initialData = {} }) => {
  const [form] = Form.useForm()

  const renderFormEditRegular = editRegular.map((item) => (
    <Form.Item
      key={item.key} name={item.name}
      label={item.label} rules={item.rules}
      hasFeedback normalize={item?.normalize}>
      <Input prefix={item?.icon} addonBefore={item?.addonBefore} placeholder={item.placeholder} />
    </Form.Item>
  ))

  return (
  <Form form={form} name='form-edit-regular'
        layout="vertical" className='form--edit--regular' onFinish={onFinish}
        initialValues={{
          name: initialData?.name,
          surname: initialData?.surname,
          phone: initialData?.phone,
          gender: initialData?.gender
        }}
  >
    {renderFormEditRegular}
    <Form.Item
      name="gender"
      label="Пол"
      rules={validateGender}
      hasFeedback
    >
      <Select placeholder="Выберите пол">
        <Option value="male">Мужчина</Option>
        <Option value="female">Женщина</Option>
      </Select>
    </Form.Item>
    <Form.Item>
      <Button type="primary" htmlType="submit" shape='round' block>
        Редактировать
      </Button>
    </Form.Item>
  </Form>
)}

EditRegular.propTypes = {
  onFinish: PropTypes.func.isRequired,
  initialData: PropTypes.object.isRequired
}

export default EditRegular
