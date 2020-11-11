import React from 'react'
import { Button, Form, Select } from 'antd'
import PropTypes from 'prop-types'

const { Option } = Select

const FormChooseDepartment = ({ formInst, departments }) => (
  <Form form={formInst} name='form-choose-department' className="form--choose--department" layout='horizontal'>
    <Form.Item
      name="department"
      label="Отдел:"
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

FormChooseDepartment.propTypes = {
  formInst: PropTypes.object.isRequired,
  departments: PropTypes.array
}

export default FormChooseDepartment
