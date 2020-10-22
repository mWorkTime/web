import React from 'react'
import Sidebar from '../../user/sidebar'
import UserBurger from '../../user/user-burger'

const Employees = ({ children }) => {
  return (
    <>
      <Sidebar />
      {children}
      <UserBurger/>
    </>
  )
}

export default Employees
