import React from 'react'
import { Form, Input, Select, Alert, Button } from 'antd'
import { UserOutlined, MailOutlined } from '@ant-design/icons'
import { SET_DEPARTMENT_MODAL_ACTIVE } from '../../../types'
import { useDispatch } from 'react-redux'

//{ roles, name, surname, email, password, phone, gender, department }
const { Option } = Select

const EmployeeCreate = ({ formInst, departments }) => {
  const dispatch = useDispatch()

  return (
    <Form
      form={formInst}
      layout="vertical"
      name="form-create-employee"
      className='form--create--employee'
    >
      <Form.Item
        name="name"
        label="Имя"
        hasFeedback
      >
        <Input prefix={<UserOutlined />} placeholder='Введите имя' />
      </Form.Item>
      <Form.Item
        name="surname"
        label="Фамилия"
        hasFeedback
      >
        <Input prefix={<UserOutlined />} placeholder='Введите фамилию' />
      </Form.Item>
      <Form.Item
        name="email"
        label="Email"
        hasFeedback
      >
        <Input prefix={<MailOutlined />} placeholder='exapmple@gmail.com' />
      </Form.Item>
      <Form.Item
        name="phone"
        label="Номер телефона"
        hasFeedback
        normalize={(values) => {
          return values.replace(/(\d{3})(\d{3})(\d{2})(\d{2})/, '$1 $2 $3 $4')
        }}
      >
        <Input addonBefore="+38" placeholder="096 666 66 06" />
      </Form.Item>

      <Form.Item
        name="gender"
        label="Пол"
        hasFeedback
      >
        <Select placeholder="Выберите пол">
          <Option value="male">Мужчина</Option>
          <Option value="female">Женщина</Option>
        </Select>
      </Form.Item>

      <Form.Item
        name="department"
        label="Отдел"
        hasFeedback
      >
        <Select
          placeholder="Выберите отдел"
          showSearch
          optionFilterProp="children"
          autoClearSearchValue
        >
          {departments && departments.map(({ id, name }) => (<Option key={id} value={id}>{name}</Option>))}
        </Select>
      </Form.Item>
      <Alert
        showIcon
        message={'Если не нашли нужного отдела, нажмите на кнопку ниже --> впишите нужное название и добавьте отдел.'} />
        <div className="form--employee__btn__department">
          <Button type='primary' onClick={() => dispatch({ type: SET_DEPARTMENT_MODAL_ACTIVE })}>Добавить новый отдел</Button>
        </div>
    </Form>
  )
}

export default EmployeeCreate
