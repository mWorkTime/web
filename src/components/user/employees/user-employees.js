import React, { useEffect, useState } from 'react'
import Employees from '../../layouts/user/employees'
import UserHeader from '../user-header'
import DepartmentModal from '../department/department-modal'
import photo from '../../../images/user/Add_user.svg'
import EmployeeStatistic from './employee-statistic'
import EmployeeCreate from './employee-create'
import EmployeeEdit from './employee-edit'

import { useDispatch, useSelector } from 'react-redux'
import { Typography, Table } from 'antd'
import { fetchAllEmployees } from '../../../actions'
import { UserAddOutlined } from '@ant-design/icons'
import { getEmployeeColumns } from './columns/employee-columns'
import { SET_MODAL_CREATE_ACTIVE, SET_MODAL_EDIT_ACTIVE } from '../../../types'
import { moduleLocalStorage } from '../../../services/local-storage.service'

const { Title } = Typography

const UserEmployees = () => {
  const { sidebarUser: { active }, employeeData: { employees, quantity, loading }, userData: { organization } } = useSelector((state) => state)
  const dispatch = useDispatch()
  const nameOrg = organization?.name || moduleLocalStorage.getItem('nameOrg')
  const [userId, setUserId] = useState('')

  useEffect(() => {
    if (!employees) {
      dispatch(fetchAllEmployees())
    }

  }, [dispatch, employees])

  const deleteUser = (id) => {
    console.log(id)
  }

  const showModal = (id) => {
    setUserId(id)
    dispatch({ type: SET_MODAL_EDIT_ACTIVE })
  }

  return (
    <Employees>
      <div className={`base--layout ${active ? 'active' : ''}`}>
        <UserHeader />
        <div className="employees--wrapper">
          <div className="employees--wrapper__top">
            <Title level={1} className="wrapper--top__title">
              Работники организации {nameOrg}
            </Title>
            <div className="wrapper--top__statistic">
              <div className="top--statistic__ls">
                <div className="statistic--ls__title">Создайте, измените или удалите - аккаунт работника. Выберите для
                  них роль "Работник" или "Управляющий".
                </div>
                <div className="statistic--ls__img">
                  <img className="statistic--ls__img__employees" src={photo} alt="Работники" />
                </div>
              </div>
              <div className="top--statistic__rs">
                <EmployeeStatistic title={'Штат состоит из:'} cls={'statistic--rs__total'} count={quantity.total} />
                <EmployeeStatistic title={'Основатели:'} cls={'statistic--rs__owner'} count={quantity.owners} />
                <EmployeeStatistic title={'Управляющие:'} cls={'statistic--rs__manager'} count={quantity.managers} />
                <EmployeeStatistic title={'Работников:'} cls={'statistic--rs__employee'} count={quantity.workers} />
              </div>
            </div>

            <div className="wrapper--top__button" onClick={() => dispatch({ type: SET_MODAL_CREATE_ACTIVE })}>
              <UserAddOutlined /> Создать нового работника
            </div>
          </div>
          <div className="employees--wrapper__content">
            <Table dataSource={employees} columns={getEmployeeColumns(showModal, deleteUser)} scroll={{ x: 600 }}
                   loading={loading} />
          </div>
        </div>
      </div>
      <EmployeeEdit userId={userId}/>
      <EmployeeCreate />
      <DepartmentModal />
    </Employees>
  )
}

export default UserEmployees
