import React from 'react'
import Sidebar from '../../user/sidebar'
import UserBurger from '../../user/user-burger'
import UserHeader from '../../user/user-header'
import { useSelector } from 'react-redux'

const General = ({ children }) => {
  const { sidebarUser: { active } } = useSelector(state => state)

  return (
    <>
      <Sidebar />
      <div className={`base--layout ${active ? 'active' : ''}`}>
        <UserHeader />
        {children}
      </div>
      <UserBurger />
    </>
  )
}

export default General
