import React from 'react'
import {
  DashboardOutlined,
  TeamOutlined,
  CarryOutOutlined,
  ReconciliationOutlined,
  ExportOutlined
} from '@ant-design/icons'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Logo from '../../images/logo/timeline.svg'

const Sidebar = () => {
  const active = useSelector(({ sidebarUser: { active } }) => active )

  const sidebarItems = [
    {
      key: 'dashboard',
      link: '/',
      label: 'Главная',
      icon: <DashboardOutlined className="sidebar--menu--i__home" />

    },
    {
      key: 'employees',
      link: '/employees',
      label: 'Работники',
      icon: <TeamOutlined className="sidebar--menu--i__user" />
    },
    {
      key: 'tasks',
      label: 'Задания',
      link: '/tasks',
      icon: <CarryOutOutlined className="sidebar--menu--i__function" />
    },
    {
      key: 'reports',
      link: '/reports',
      label: 'Отчёты', icon: <ReconciliationOutlined
        className="sidebar--menu--i__customer" />

    },
  ]

  const renderSidebarMenu = sidebarItems.map(({ key, label, icon, link, func }) => (
    <li className="sidebar--menu__li" key={key} onClick={func}>
      <Link to={link}>
        <div className="sidebar--menu__link">
          <span className="sidebar--menu__icon" data-text={label}>{icon}</span>
          <span className="sidebar--menu__title">{label}</span>
        </div>
      </Link>
    </li>
  ))

  return (
    <div className={`sidebar--menu ${active ? 'active' : ''}`}>
      <Link to={'/'}>
        <div className="sidebar--menu__logo">
          <img src={Logo} alt="Logo app mYourTime" />
          <span className="sidebar--menu--l__title">mYourTime</span>
        </div>
      </Link>
      <ul className="sidebar--menu__list">
        {renderSidebarMenu}
      </ul>

      <div className="sidebar--menu__footer" onClick={() => {
      }}>
        <span className="sidebar--menu--f__icon"><ExportOutlined className="sidebar--menu--f--i__logout" /></span>
        <span className="sidebar--menu--f__title">Выйти</span>
      </div>
    </div>
  )
}

export default Sidebar
