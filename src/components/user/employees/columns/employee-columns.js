import React from 'react'
import { Tag,Button } from 'antd'
import { getColorByCode } from '../../../../utils'
import { dictionaryRoles } from '../../../../items'
import { EditFilled, DeleteFilled } from '@ant-design/icons'

/**
 *
 * @param {function} funcEdit
 * @param {function} funcDel
 * @return {array} []
 */
export const getEmployeeColumns = (funcEdit, funcDel) => [
  {
    title: 'Имя',
    dataIndex: 'name',
    key: 'name',
    width: 120,
    fixed: 'left',
    render: text => <span className='table--employee__name'>{text}</span>
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
    width: 200,
    render: text => <a href={`mailto: ${text}`}>{text}</a>
  },
  {
    title: 'Отдел',
    dataIndex: 'department',
    key: 'department',
    width: 160
  },
  {
    title: 'Телефон',
    dataIndex: 'phone',
    key: 'phone',
    width: 150,
    render: text => <a href={`tel: +38 ${text}`}>{text}</a>
  },
  {
    title: 'Роли',
    dataIndex: 'role',
    key: 'role',
    width: 250,
    render: role => role.map(tag => {
      const color = getColorByCode(tag.code)
      const name = dictionaryRoles[tag.name]

      return (
        <Tag color={color} key={name}>
          {name.toUpperCase()}
        </Tag>
      )
    })
  },
  {
    title: 'Статус работника',
    dataIndex: 'isSacked',
    key: 'isSacked',
    width: 110,
    render: text => text ? 'уволен' : 'не уволен'
  },
  {
    title: 'Дата регистрации',
    dataIndex: 'createdAt',
    key: 'createdAt',
    width: 120
  },
  {
    title: 'Действия',
    key: 'action',
    width: 100,
    fixed: 'right',
    render: (text) => {
      return (
        <div className='table--employee__actions'>
          <Button type='primary' size='small'
                  onClick={() => funcEdit(text.id)}
          ><EditFilled /></Button>
          &nbsp;&nbsp;
          <Button type='danger' size='small'
                  onClick={() => funcDel(text.id)}
          ><DeleteFilled /></Button>
        </div>
      )
    }
  }
]
