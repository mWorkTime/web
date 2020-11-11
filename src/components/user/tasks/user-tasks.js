import React, { useEffect } from 'react'
import Tasks from '../../layouts/user/tasks'
import { useDispatch, useSelector } from 'react-redux'
import UserHeader from '../user-header'
import { fetchAllTasks, fetchAllDepartments } from '../../../actions'
import { renderListEmployees } from './render-list-employees'
import { Form } from 'antd'
import FormChooseDepartment from './form-choose-department'
import Loader from '../../loader/loader'

const UserTasks = () => {
  const { sidebarUser: { active }, taskData: { loading, employees, role }, departmentData: { departments } } = useSelector(state => state)
  const dispatch = useDispatch()
  const [form] = Form.useForm()

  useEffect(() => {
    dispatch(fetchAllTasks())
  }, [dispatch])

  useEffect(() => {
    if (!departments) {
      dispatch(fetchAllDepartments())
    }
  }, [dispatch, departments])

  return (
    <Tasks>
      <div className={`base--layout ${active ? 'active' : ''}`}>
        <UserHeader />
        <div className="tasks--wrapper">
          {
            loading
              ? <Loader />
              : null
          }
          {
            role === 3
              ? <div className="tasks--wrapper--top">
                <div className='wrapper--top__title'>Вы являетесь основателем и Вы можете выбрать отдел с работниками и
                  выдать им задания.
                </div>
                <FormChooseDepartment formInst={form} departments={departments} />
              </div>
              : null
          }
          <div className="tasks--wrapper--content">
            <div className="wrapper--content--ls">
              {
                !loading && employees && Array.isArray(employees) && employees.length > 0
                  ? <>
                    <div className="content--ls__title">
                      Выберите рабочего и добавьте ему задачу
                    </div>
                    <div className="content-ls--list">
                      {renderListEmployees(employees)}
                    </div>
                  </>
                  : null
              }

            </div>
            <div className="wrapper--content--rs">

            </div>
          </div>
        </div>
      </div>
    </Tasks>
  )
}

export default UserTasks
