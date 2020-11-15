import React from 'react'
import { Button } from 'antd'
import { PlusOutlined } from '@ant-design/icons'

export const renderListEmployees = (employees, func) => {
  return employees.map(({ id, name, email, role, department }) => (
    <div className="ls--list__item" key={id}>
      <Button className="ls--list__btn" type='primary' shape='circle' onClick={() => func(id)}>
        <PlusOutlined />
      </Button>
      <div className="ls--list__img">
        {name.substr(0, 1).toLocaleUpperCase()}
      </div>
      <div className="ls--list__title">
        {name}
      </div>
      <a href={`mailto: ${email} `} className="ls--list__text">
        {email}
      </a>
      <div className="ls--list__department">
        {department}
      </div>
      <div className={`ls--list__role ${role.name.toLowerCase()}`}>
        {role.normalName}
      </div>
    </div>
  ))
}
