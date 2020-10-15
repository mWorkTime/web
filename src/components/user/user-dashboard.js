import React from 'react'
import Dashboard from '../layouts/user/dashboard'
import { useSelector } from 'react-redux'

const UserDashboard = () => {
  const active = useSelector(({ sidebarUser: { active } }) => active)

  return (
    <Dashboard>
      <div className={`base--layout ${active ? 'active' : ''}`}>

      </div>
    </Dashboard>
  )
}

export default UserDashboard
