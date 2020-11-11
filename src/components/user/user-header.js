import React from 'react'
import { moduleLocalStorage } from '../../services/local-storage.service'
import avatar from '../../images/user/profile.svg'

const UserHeader = () => {
  const name = moduleLocalStorage.getItem('name')
  return (
    <div className='user--header'>
      <div className="user--header__title">{name}</div>
      <div className="user--header__profile">
        <img className="user--header__img" src={avatar} alt="профиль" />
      </div>
    </div>
  )
}

export default UserHeader
