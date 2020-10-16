import React from 'react'
import Dashboard from '../layouts/user/dashboard'
import { useSelector } from 'react-redux'
import UserHeader from './user-header'
import { Typography } from 'antd'
import { Link } from 'react-router-dom'
import avatar from '../../images/user/profile.svg'
import { EditFilled, CheckCircleFilled } from '@ant-design/icons'

const { Title } = Typography

const UserDashboard = ({ isOwner = true }) => {
  const { userDashboard: { items }, sidebarUser: { active } } = useSelector((state) => state)

  const renderItems = items.map(({ key, title, text, imgLink, link }) => {
    return (
      <div className="dashboard--content__box" key={key}>
        <div className="content--box__ts">
          <div className="content--ts__ls">
            <div className="content--box__title">{title}</div>
            <div className="content--box__text">{text}</div>
          </div>
          <div className="content--ts__rs">
            <img className='content--ts__img' src={imgLink} alt={title} />
          </div>
        </div>
        <div className="content--box__btn"><Link to={link}>Перейти</Link></div>
      </div>
    )
  })

  return (
    <Dashboard>
      <div className={`base--layout ${active ? 'active' : ''}`}>
        <UserHeader />
        <div className="dashboard--wrapper">
          <div className="dashboard--wrapper__top">

            <div className="dashboard--top__ls">
              <div className="top--ls__header">
                <Title className="top--ls__title" level={1}>Приветствую Илья</Title>
                <div className='top--ls__date'>Аккаунт создан: 10/14/2020, 1:29:39 PM</div>
              </div>

              <div className="dashboard--top__info">
                <div className="top--info__header">Информация о пользователе</div>
                <div className="top--info__content">
                  <div className="top--info__col">
                    <div className="top--info">
                      <div className="top--info__label">
                        Вы являетесь {isOwner ? 'основателем' : 'частью'}:
                      </div>
                      <div className="top--info__value">
                        TabUP
                      </div>

                    </div>
                    <div className="top--info">
                      <div className="top--info__label">
                        Статус аккаунта:
                      </div>
                      <div className="top--info__value ">
                        <CheckCircleFilled className='top--info__value__confirm' /> Подтверждён
                      </div>
                    </div>
                  </div>
                  <div className="top--info__col">
                    <div className="top--info">
                      <div className="top--info__label">
                        Email:
                      </div>
                      <div className="top--info__value">
                        shabelnyk.ilya@gmail.com
                      </div>
                    </div>
                    <div className="top--info">
                      <div className="top--info__label">
                        Код организации:
                      </div>
                      <div className="top--info__value">
                        a8aa
                      </div>
                    </div>
                  </div>
                </div>
                <div className="top--info__buttons">
                  <Link to={'/profile/edit/h367j2o1okh3h3h4b3j4'}>
                    <EditFilled /> Редактировать профиль
                  </Link>
                </div>
              </div>
            </div>

            <div className="dashboard--top__rs">
              <img className="dashboard--top__img" src={avatar} alt="profile" />
            </div>
          </div>
          <div className="dashboard--wrapper__content">
            {renderItems}
          </div>
        </div>
      </div>
    </Dashboard>
  )
}

export default UserDashboard
