import React from 'react'
import { Alert, Button, Form, Input, Select } from 'antd'
import { employeeValidator } from '../../../../validators'
import { formEmployeeItems } from '../../../../items'

const { Option } = Select

/**
 * @param {string} typeForm
 * @param {boolean} disable
 * @param {object} formInst
 * @param {array} departments
 * @param {array} roles
 * @param {function} showFormDepartment
 * @param {object} data
 * @return {JSX.Element}
 */
const renderEmployeeForm = (typeForm, disable, formInst, departments, roles, showFormDepartment, data = {}) => {
  const { validateGender, validateDepartment, validateRoles } = employeeValidator

  const renderFormCreateItems = formEmployeeItems[typeForm].map((item) => (
    <Form.Item
      key={item.key} name={item.name}
      label={item.label} rules={item.rules}
      hasFeedback normalize={item?.normalize}>
      <Input prefix={item?.icon} addonBefore={item?.addonBefore} placeholder={item.placeholder} disabled={disable} />
    </Form.Item>
  ))

  return (
    <Form
      form={formInst}
      layout="vertical"
      name={typeForm === 'create' ? 'form-create-employee' : 'form-edit-employee'}
      className={typeForm === 'create' ? 'form--create--employee' : 'form--edit--employee'}
      initialValues={{
        name: data?.name,
        surname: data?.surname,
        phone: data?.phone,
        gender: data?.gender,
        department: data?.department,
        roles: data?.role
      }}
    >
      {renderFormCreateItems}
      {
        typeForm !== 'create'
          ? <Form.Item name="orgId" initialValue={data?.organization} hidden><Input /></Form.Item>
          : null
      }
      <Form.Item name="userId" initialValue={data?._id} hidden><Input /></Form.Item>
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
      {typeForm === 'create'
        ? <>
          <Alert
            showIcon
            message={'Если не нашли нужного отдела, нажмите на кнопку ниже --> впишите нужное название и добавьте отдел.'} />
          <div className="form--employee__btn__department">
            <Button type='primary' onClick={showFormDepartment} block>Добавить новый отдел</Button>
          </div>
        </>
        : null
      }

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
    </Form>
  )
}

export default renderEmployeeForm
