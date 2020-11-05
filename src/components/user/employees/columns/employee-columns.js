import React from 'react'
import { Button } from 'antd'
import { generateRoleTags } from '../../../../utils'
import { EditFilled, DeleteFilled, UndoOutlined } from '@ant-design/icons'

/**
 * @param {function} funcEdit
 * @param {function} funcDel
 * @param {function} funcRec
 * @return {array} []
 */
export const getEmployeeColumns = (funcEdit, funcDel, funcRec) => [
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
    title: 'Роль',
    dataIndex: 'role',
    key: 'role',
    width: 200,
    render: role => generateRoleTags(role)
  },
  {
    title: 'Дата регистрации',
    dataIndex: 'createdAt',
    key: 'createdAt',
    width: 120
  },
  {
    title: 'Статус работника',
    dataIndex: 'isSacked',
    key: 'isSacked',
    width: 120,
    render: text => {
      return text
        ? <span className="tag table--employee__dismiss">уволен</span>
        : <span className="tag table--employee__success">не уволен</span>
    }
  },
  {
    title: 'Действия',
    key: 'action',
    width: 100,
    fixed: 'right',
    render: (text) => {
      return (
        <div className='table--employee__actions'>

          <Button type='primary' size='small' disabled={text.isSacked}
                  onClick={() => funcEdit(text.id)}
          ><EditFilled /></Button>
          &nbsp;&nbsp;
          {text.isSacked
            ? <Button size='small' className={'btn--recovery'}
            onClick={() => funcRec(text.id, text)}
            >
                <UndoOutlined  />
              </Button>
            : <Button type='danger' size='small'
                      onClick={() => funcDel(text.id, text)}>
                <DeleteFilled />
              </Button>
          }
        </div>
      )
    }
  }
]


