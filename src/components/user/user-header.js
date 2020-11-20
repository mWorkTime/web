import React, { useEffect } from 'react'
import { moduleLocalStorage } from '../../services/local-storage.service'
import { useDispatch, useSelector } from 'react-redux'
import avatar from '../../images/user/profile.svg'
import { fetchUserRole } from '../../actions'
import { Badge } from 'antd'
import { Link } from 'react-router-dom'

const UserHeader = () => {
  const name = moduleLocalStorage.getItem('name')
  const userId = moduleLocalStorage.getItem('user')
  const { roleData: { userRole } } = useSelector(state => state)
  const dispatch = useDispatch()

  useEffect(() => {
    if (!userRole && userId) {
      dispatch(fetchUserRole(userId))
    }
  }, [userRole, userId, dispatch])

  return (
    <div className='user--header'>
      <div className="user--header--ls">
        {userRole > 0 && userRole < 4 ?
          <Link to={'/review'} className='user--header--ls__link'>
            <Badge count={5} className='user--header--ls__badge'>
              На проверку
            </Badge>
          </Link> : null
        }
      </div>
      <div className='user--header--rs'>
        <div className="user--header--rs__title">{name}</div>
        <div className="user--header--rs__profile">
          <img className="user--header--rs__img" src={avatar} alt="профиль" />
        </div>
      </div>
    </div>
  )
}

export default UserHeader
