import React, { useEffect } from 'react'
import Employees from '../../layouts/user/employees'
import UserHeader from '../user-header'
import EmployeeModal from './employee-modal'
import { useDispatch, useSelector } from 'react-redux'
import { Typography, Table } from 'antd'
import { fetchAllEmployees } from '../../../actions'
import { UserAddOutlined } from '@ant-design/icons'
import photo from '../../../images/user/Add_user.svg'
import { employeeColumns } from './columns/employee-columns'
import { SET_MODAL_CREATE_ACTIVE } from '../../../types'
import DepartmentModal from '../department/department-modal'

const { Title } = Typography

const UserEmployees = () => {
  const { sidebarUser: { active }, employeeData: { employees } } = useSelector((state) => state)
  const dispatch = useDispatch()

  useEffect(() => {
    if (!employees) {
      dispatch(fetchAllEmployees())
    }

  }, [dispatch, employees])

  return (
    <Employees>
      <div className={`base--layout ${active ? 'active' : ''}`}>
        <UserHeader />
        <div className="employees--wrapper">
          <div className="employees--wrapper__top">
            <Title level={1} className="wrapper--top__title">
              Работники организации TabUp
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
                <div className="statistic--rs__box statistic--rs__total">
                  <div className="rs--box__title">Штат состоит из:</div>
                  <div className="rs--box__value">32 чел.</div>
                </div>
                <div className="statistic--rs__box statistic--rs__owner">
                  <div className="rs--box__title">Основатели:</div>
                  <div className="rs--box__value">1 чел.</div>

                </div>
                <div className="statistic--rs__box statistic--rs__manager">
                  <div className="rs--box__title">Управляющие:</div>
                  <div className="rs--box__value">4 чел.</div>

                </div>
                <div className="statistic--rs__box statistic--rs__employee">
                  <div className="rs--box__title">Работников:</div>
                  <div className="rs--box__value">27 чел.</div>
                </div>
              </div>
            </div>

            <div className="wrapper--top__button" onClick={() => dispatch({ type: SET_MODAL_CREATE_ACTIVE })}>
              <UserAddOutlined /> Создать нового работника
            </div>
          </div>
          <div className="employees--wrapper__content">
            <Table columns={employeeColumns()} bordered />
          </div>
        </div>
      </div>
      <EmployeeModal />
      <DepartmentModal />
    </Employees>
  )
}

export default UserEmployees
