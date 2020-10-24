import React from 'react'
import { Form, Input, Select, Alert, Button } from 'antd'
import { UserOutlined, MailOutlined, LockOutlined } from '@ant-design/icons'
import { SET_DEPARTMENT_MODAL_ACTIVE } from '../../../types'
import { useDispatch } from 'react-redux'
import { generalValidation, registerValidation, phoneValidation, employeeValidator } from '../../../validators'

const { Option } = Select

const EmployeeCreate = ({ formInst, departments, roles, disable }) => {
  const dispatch = useDispatch()
  const { validateEmail } = generalValidation
  const { validateName, validateRegisterPassword, validateConfirmPassword } = registerValidation
  const { validateGender, validateDepartment, validateRoles, validateSurname } = employeeValidator
  const { validateNumber } = phoneValidation

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
        rules={validateName}
        hasFeedback
      >
        <Input prefix={<UserOutlined />} placeholder='Введите имя' disabled={disable}/>
      </Form.Item>
      <Form.Item
        name="surname"
        label="Фамилия"
        rules={validateSurname}
        hasFeedback
      >
        <Input prefix={<UserOutlined />} placeholder='Введите фамилию' disabled={disable} />
      </Form.Item>
      <Form.Item
        name="email"
        label="Email"
        rules={validateEmail}
        hasFeedback
      >
        <Input prefix={<MailOutlined />} placeholder='exapmple@gmail.com' disabled={disable} />
      </Form.Item>
      <Form.Item
        name="phone"
        label="Номер телефона"
        rules={validateNumber}
        hasFeedback
        normalize={(values) => {
          return values.replace(/(\d{3})(\d{3})(\d{2})(\d{2})/, '$1 $2 $3 $4')
        }}
      >
        <Input addonBefore="+38" placeholder="096 666 66 06" disabled={disable} />
      </Form.Item>
      <Form.Item
        name="gender"
        label="Пол"
        rules={validateGender}
        hasFeedback
      >
        <Select placeholder="Выберите пол" disabled={disable}>
          <Option value="male">Мужчина</Option>
          <Option value="female">Женщина</Option>
        </Select>
      </Form.Item>
      <Form.Item
        name="department"
        label="Отдел"
        rules={validateDepartment}
        hasFeedback
      >
        <Select
          placeholder="Выберите отдел"
          showSearch
          optionFilterProp="children"
          autoClearSearchValue
          disabled={disable}
        >
          {departments && departments.map(({ id, name }) => (<Option key={id} value={id}>{name}</Option>))}
        </Select>
      </Form.Item>
      <Alert
        showIcon
        message={'Если не нашли нужного отдела, нажмите на кнопку ниже --> впишите нужное название и добавьте отдел.'} />
      <div className="form--employee__btn__department">
        <Button type='primary' onClick={() => dispatch({ type: SET_DEPARTMENT_MODAL_ACTIVE })}>Добавить новый
          отдел</Button>
      </div>

      <Form.Item
        name="roles"
        label="Роли"
        rules={validateRoles}
        hasFeedback
      >
        <Select
          placeholder="Выберите роли"
          disabled={disable}
          mode="multiple">
          {roles && roles.map(({ id, normalName }) => (<Option key={id} value={id}>{normalName}</Option>))}
        </Select>
      </Form.Item>
      <Form.Item
        label="Пароль"
        name="password"
        rules={validateRegisterPassword}
        hasFeedback
      >
        <Input.Password prefix={<LockOutlined />} placeholder="введите пароль" disabled={disable}/>
      </Form.Item>
      <Form.Item
        name='confirm'
        label='Потвердите пароль'
        dependencies={['password']}
        rules={validateConfirmPassword}
        hasFeedback
      >
        <Input.Password prefix={<LockOutlined className="site-form-item-icon" />} placeholder="потвердите пароль" disabled={disable} />
      </Form.Item>
    </Form>
  )
}

export default EmployeeCreate
