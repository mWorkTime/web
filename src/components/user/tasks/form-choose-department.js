import React from 'react'
import PropTypes from 'prop-types'
import { Button, Form, Select } from 'antd'
import { employeeValidator } from '../../../validators'
import { useDispatch } from 'react-redux'
import { fetchEmployeesByDepartment } from '../../../actions'

const { Option } = Select

const FormChooseDepartment = ({ formInst, departments }) => {
  const { validateDepartment } = employeeValidator
  const dispatch = useDispatch()
  const onFinish = values => {
    dispatch(fetchEmployeesByDepartment(values))
  }
  return (
    <Form form={formInst} onFinish={onFinish}
          name='form-choose-department' className="form--choose--department" layout='horizontal'>
      <Form.Item
        name="department"
        label="Отдел:"
        rules={validateDepartment}
        hasFeedback
      >
        <Select
          placeholder="Выберите отдел"
          showSearch
          optionFilterProp="children"
          autoClearSearchValue
        >
          {departments && departments.map(({ id, name }) => (<Option key={id} value={name}>{name}</Option>))}
        </Select>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" shape='round' block>
          Получить
        </Button>
      </Form.Item>
    </Form>
  )
}
FormChooseDepartment.propTypes = {
  formInst: PropTypes.object.isRequired,
  departments: PropTypes.array.isRequired
}

export default FormChooseDepartment
