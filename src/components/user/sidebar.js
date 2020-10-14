import React from 'react'
import {
  DashboardOutlined,
  UserOutlined,
  FunctionOutlined,
  CustomerServiceOutlined,
  CommentOutlined,
  ExportOutlined
} from '@ant-design/icons'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Sidebar = () => {
  const active = useSelector(({ sidebarUser: { active } }) => active )

  const sidebarItems = [
    {
      key: 'main',
      link: '/',
      label: 'Главная',
      icon: <DashboardOutlined className="sidebar--menu--i__home" />

    },
    {
      key: 'customers',
      link: '/users',
      label: 'Пользователи',
      icon: <UserOutlined className="sidebar--menu--i__user" />
    },
    {
      key: 'order-measure',
      label: 'Заказы замерщиков',
      link: '/order-measure',
      icon: <FunctionOutlined className="sidebar--menu--i__function" />
    },
    {
      key: 'callbacks',
      link: '/callbacks',
      label: 'Обратные звонки', icon: <CustomerServiceOutlined
        className="sidebar--menu--i__customer" />

    },
    {
      key: 'comments',
      link: '/comments',
      label: 'Комментарии', icon: <CommentOutlined
        className="sidebar--menu--i__comment" />
    }
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
          <span className="sidebar--menu--l__title">Три кита</span>
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
