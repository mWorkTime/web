import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Typography, Spin } from 'antd'
import EditRegular from './user-edit-forms/edit-regular'
import EditPassword from './user-edit-forms/edit-password'
import { fetchEditUserRegular, fetchUserData } from '../../../actions'
import CheckOldPassword from './user-edit-forms/check-old-password'
import General from '../../layouts/user/general'

const { Title } = Typography

const UserDashboardEdit = () => {
  const { userData: { edit: { user, loading, disable } } } = useSelector(state => state)
  const dispatch = useDispatch()

  useEffect(() => {
    if (!user) {
      dispatch(fetchUserData())
    }
  }, [user, dispatch])

  const onFinishRegular = values => {
    dispatch(fetchEditUserRegular(values))
  }

  return (
    <General>
      <div className="user--edit--wrapper">
        <div className="user--edit">
          <div className="user--edit--header">
            <Title level={1} className="user--header__title">Данные пользователя</Title>
          </div>
          <div className="user--edit--content">

            {loading ?
              <div className="user--content--loader">
                <Spin size='large' tip={'Загрузка данных...'} />
              </div> : null
            }

            {user && typeof user === 'object'
              ? <>
                <div className="user--content--ls">
                  <EditRegular onFinish={onFinishRegular} initialData={user} />
                </div>
                <div className="user--content--rs">
                  <div className="content--rs--title">
                    Смена пароля
                  </div>
                  <div className="content--rs--top">
                    <CheckOldPassword disable={disable} />
                  </div>
                  <div className="content--rs--bottom">
                    <EditPassword disable={disable} />
                  </div>
                </div>
              </>
              : null
            }
          </div>
        </div>
      </div>
    </General>
  )
}

export default UserDashboardEdit
