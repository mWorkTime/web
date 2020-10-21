import React, { useEffect } from 'react'
import { ExportOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Logo from '../../images/logo/timeline.svg'
import { logoutUser, showSidebar } from '../../actions'
import { sidebarItems } from '../../items'

const Sidebar = () => {
  const { sidebarUser: { active }, userData: { redirectToMain } } = useSelector((state) => state)
  const dispatch = useDispatch()

  useEffect(() => {
    if (window.innerWidth > 768) {
      dispatch(showSidebar)
    }
  }, [dispatch])

  useEffect(() => () => {
    if (redirectToMain) {
      window.location.reload()
    }
  }, [redirectToMain])

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

      <div className="sidebar--menu__footer" onClick={() => dispatch(logoutUser())}>
        <span className="sidebar--menu--f__icon"><ExportOutlined className="sidebar--menu--f--i__logout" /></span>
        <span className="sidebar--menu--f__title">Выйти</span>
      </div>
    </div>
  )
}

export default Sidebar
