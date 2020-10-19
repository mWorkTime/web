import React, { useEffect } from 'react'
import Dashboard from '../../layouts/user/dashboard'
import UserHeader from '../user-header'
import avatar from '../../../images/user/profile.svg'
import { Spin } from 'antd'
import { Link } from 'react-router-dom'
import { dashboardItems } from '../../../items'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUserRequest } from '../../../actions'
import UserDashboardTop from './user-dashboard-top'

const UserDashboard = () => {
  const { sidebarUser: { active }, userData: { user, loading, organization, token } } = useSelector((state) => state)
  const dispatch = useDispatch()

  useEffect(() => {
    if (!(user && organization) && token) {
      dispatch(fetchUserRequest(token))
    }
  }, [token, user, organization, dispatch])

  const renderItems = dashboardItems.map(({ key, title, text, imgLink, link }) => {
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
              {
                loading
                  ? <div className="top--ls__loader">
                    <Spin size='large' tip='Загрузка данных...' />
                  </div>
                  : null
              }
              { user && typeof user === 'object' && organization && typeof organization === 'object'
                ? <UserDashboardTop user={user} organization={organization} />
                : null
              }
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
