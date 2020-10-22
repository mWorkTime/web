import React from 'react'
import { CheckCircleFilled, EditFilled, CloseCircleFilled } from '@ant-design/icons'
import { Typography, Tag } from 'antd'
import { Link } from 'react-router-dom'
import UserDashboardItem from './user-dashboard-item'

const { Title } = Typography

const UserDashboardTop = ({ user, organization }) => {
  const { name, createdAt, isOwner, isVerified, email, id, role } = user

  const renderRoles = role.map(({ name, code }) => {
    let color = 'blue'
    if (code === 2) {
      color = 'green'
    } else if (code === 3) {
      color = 'gold'
    } else if (code === 4) {
      color = 'purple'
    } else if (code === 5) {
      color = 'red'
    }

    return (
      <Tag key={code} color={color}>{name}</Tag>
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
