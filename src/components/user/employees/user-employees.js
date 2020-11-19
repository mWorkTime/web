import React, { useEffect, useState } from 'react'
import DepartmentForm from '../department/department-form'
import photo from '../../../images/user/Add_user.svg'
import EmployeeStatistic from './employee-statistic'
import EmployeeCreate from './employee-create'
import EmployeeEdit from './employee-edit'
import General from '../../layouts/user/general'

import { useDispatch, useSelector } from 'react-redux'
import { Typography, Table } from 'antd'
import { fetchAllEmployees } from '../../../actions'
import { UserAddOutlined } from '@ant-design/icons'
import { getEmployeeColumns } from './columns/employee-columns'
import { SET_MODAL_CREATE_ACTIVE, SET_MODAL_EDIT_ACTIVE } from '../../../types'
import { moduleLocalStorage } from '../../../services/local-storage.service'
import { showDismissConfirm, showRecoverConfirm } from './employee-modal-confirm'

const { Title } = Typography

const UserEmployees = () => {
  const { employeeData: { employees, quantity, loading }, paginationData: { paginationEmployees }, userData: { organization } } = useSelector((state) => state)
  const dispatch = useDispatch()
  const nameOrg = organization?.name || moduleLocalStorage.getItem('nameOrg')
  const [userId, setUserId] = useState('')

  useEffect(() => {
    if (!employees) {
      const { currentPage, pageSize } = paginationEmployees
      const queryParams = { currentPage, limit: pageSize }
      dispatch(fetchAllEmployees(queryParams))
    }
  }, [dispatch, paginationEmployees, employees])

  const showModal = (id) => {
    setUserId(id)
    dispatch({ type: SET_MODAL_EDIT_ACTIVE })
  }

  const getUsersByParams = params => {
    return {
      results: params.pagination.pageSize,
      page: params.pagination.current,
      ...params
    }
  }

  const handleTableChange = (pagination) => {
    const { results, page } = getUsersByParams({ pagination })
    const queryParams = { currentPage: page, limit: results }
    dispatch(fetchAllEmployees(queryParams))
  }

  return (
    <General>
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
          <Table dataSource={employees} rowKey={record => record.id}
                 columns={getEmployeeColumns(showModal, showDismissConfirm, showRecoverConfirm)}
                 scroll={{ x: 600 }}
                 pagination={paginationEmployees}
                 onChange={handleTableChange}
                 loading={loading} />
        </div>
      </div>
      <EmployeeEdit userId={userId} />
      <EmployeeCreate />
      <DepartmentForm />
    </General>
  )
}

export default UserEmployees
