import React from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { toggleSidebar } from '../../actions'

const UserBurger = () => {
  const active = useSelector(({ sidebarUser: { active } }) => active )
  const dispatch = useDispatch()

  return (
    <div className={`user--button ${active ? 'open' : ''}`} onClick={() => dispatch(toggleSidebar)}>
      <div className="user--button__burger" />
    </div>
  )
}

export default UserBurger
