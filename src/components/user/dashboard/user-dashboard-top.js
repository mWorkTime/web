import React from 'react'
import { CheckCircleFilled, EditFilled, CloseCircleFilled } from '@ant-design/icons'
import { Typography } from 'antd'
import { Link } from 'react-router-dom'

const { Title } = Typography

const UserDashboardTop = ({ user, organization }) => {
  const { name, createdAt, isOwner, isVerified, email, id } = user

  return (
    <>
      <div className="top--ls__header">
        <Title className="top--ls__title" level={1}>Приветствую {name}</Title>
        <div className='top--ls__date'>Аккаунт создан: {new Date(createdAt).toLocaleString()}</div>
      </div>

      <div className="top--ls__info">
        <div className="top--ls--info__header">Информация о пользователе</div>
        <div className="top--ls--info__content">
          <div className="top--ls--info__col">
            <div className="top--info">
              <div className="top--info__label">
                Вы являетесь {isOwner ? 'основателем' : 'частью'}:
              </div>
              <div className="top--info__value">
                {organization.name}
              </div>

            </div>
            <div className="top--info">
              <div className="top--info__label">
                Статус аккаунта:
              </div>
              <div className="top--info__value ">
                {isVerified
                  ? <><CheckCircleFilled className='top--info__value__confirm' /> Подтверждён </>
                  : <><CloseCircleFilled className='top--info__value__not__confirm' /> Не подтверждён</>
                }
              </div>
            </div>
          </div>
          <div className="top--info__col">
            <div className="top--info">
              <div className="top--info__label">
                Email:
              </div>
              <div className="top--info__value">
                {email}
              </div>
            </div>
            <div className="top--info">
              <div className="top--info__label">
                Код организации:
              </div>
              <div className="top--info__value">
                {organization.code}
              </div>
            </div>
          </div>
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
