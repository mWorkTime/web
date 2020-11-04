import React from 'react'
import { CheckCircleFilled, EditFilled, CloseCircleFilled } from '@ant-design/icons'
import { Typography, Tag } from 'antd'
import { Link } from 'react-router-dom'
import UserDashboardItem from './user-dashboard-item'
import { getColorByCode } from '../../../utils'
import { moduleLocalStorage } from '../../../services/local-storage.service'

const { Title } = Typography

const UserDashboardTop = ({ user, organization }) => {
  const { name, createdAt, isOwner, isVerified, email, role, phone, department } = user

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
            firstItem={{ title: `Вы являетесь ${isOwner ? 'основателем' : 'частью'}:`,
              value: moduleLocalStorage.getItem('nameOrg') || organization.name }}
            secondItem={{
              title: 'Статус аккаунта:', value:
                isVerified
                  ? <><CheckCircleFilled className='top--info__value__confirm' /> Подтверждён </>
                  : <><CloseCircleFilled className='top--info__value__not__confirm' /> Не подтверждён</>
            }}
          />
          <UserDashboardItem
            firstItem={{ title: 'Email:', value: email }}
            secondItem={{ title: 'Ваша роль:',
              value: <Tag key={role.code}  className="top--info__tag" color={getColorByCode(role.code)}>{role.name}</Tag>
            }}
          />
          <UserDashboardItem
            firstItem={{ title: 'Ваш отдел:', value: department.name }}
            secondItem={{ title: 'Ваш телефон:', value: phone }}
          />
        </div>
        <div className="top--info__buttons">
          <Link to={`/dashboard/user/edit`}>
            <EditFilled /> Редактировать профиль
          </Link>
        </div>
      </div>
    </>
  )
}

export default UserDashboardTop
