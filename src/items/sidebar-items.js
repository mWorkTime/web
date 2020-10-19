import React from 'react'
import { CarryOutOutlined, DashboardOutlined, ReconciliationOutlined, TeamOutlined } from '@ant-design/icons'

export const sidebarItems = [
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
