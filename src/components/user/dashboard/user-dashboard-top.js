import React from 'react'
import { CheckCircleFilled, EditFilled, CloseCircleFilled } from '@ant-design/icons'
import { Typography, Tag } from 'antd'
import { Link } from 'react-router-dom'
import UserDashboardItem from './user-dashboard-item'
import { getColorByCode } from '../../../utils'

const { Title } = Typography

const UserDashboardTop = ({ user, organization }) => {
  const { name, createdAt, isOwner, isVerified, email, id, role, phone, department } = user

  const renderRoles = role.map(({ name, code }) => {
    let color = getColorByCode(code)

    return (
      <Tag key={code}  className="top--info__tag" color={color}>{name}</Tag>
    )
  })

  return (
    <>
      <div className="top--ls__header">
        <Title className="top--ls__title" level={1}>Приветствую {name}</Title>
        <div className='top--ls__date'>Аккаунт создан: {createdAt}</div>
      </div>

      <div className="top--ls__info">
        <div className="top--ls--info__header">Информация о пользователе</div>
        <div className="top--ls--info__content">
          <UserDashboardItem
            firstItem={{ title: `Вы являетесь ${isOwner ? 'основателем' : 'частью'}:`, value: organization.name }}
            secondItem={{
              title: 'Статус аккаунта:', value:
                isVerified
                  ? <><CheckCircleFilled className='top--info__value__confirm' /> Подтверждён </>
                  : <><CloseCircleFilled className='top--info__value__not__confirm' /> Не подтверждён</>
            }}
          />
          <UserDashboardItem
            firstItem={{ title: 'Email:', value: email }}
            secondItem={{ title: 'Ваши роли:', value: renderRoles }}
          />
          <UserDashboardItem
            firstItem={{ title: 'Ваш отдел:', value: department.name }}
            secondItem={{ title: 'Ваш телефон:', value: phone }}
          />
        </div>
        <div className="top--info__buttons">
          <Link to={`/profile/edit/${id}`}>
            <EditFilled /> Редактировать профиль
          </Link>
        </div>
      </div>
    </>
  )
}

export default UserDashboardTop
