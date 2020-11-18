import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllTasks, fetchAllDepartments, showComment, showCreateTask } from '../../../actions'
import { renderListEmployees } from './render-list-employees'
import { Form } from 'antd'
import noTasks from '../../../images/task/empty.svg'
import Tasks from '../../layouts/user/tasks'
import UserHeader from '../user-header'
import FormChooseDepartment from './form-choose-department'
import Loader from '../../loader/loader'
import ModalComments from './comments/modal-comments'
import TaskCreate from './task-create'
import renderListTasks from './render-list-tasks'
import { SHOW_OR_HIDE_DATES } from '../../../types'

const UserTasks = () => {
  const {
    sidebarUser: { active }, taskData: { loading, employees, role, loadingEmployees, tasks, visible },
    departmentData: { departments }
  } = useSelector(state => state)
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

  const handleActive = (id) => {
    dispatch(showCreateTask(id))
  }

  const handleVisible = (id) => {
    dispatch({ type: SHOW_OR_HIDE_DATES, id })
  }

  const handleModalComment = (id) => {
    dispatch(showComment(id))
  }

  return (
    <Tasks>
      <div className={`base--layout ${active ? 'active' : ''}`}>
        <UserHeader />
        <div className="tasks--wrapper">
          {
            loading
              ? <Loader height={'100vh'} />
              : null
          }
          {
            role === 3 && departments
              ? <div className="tasks--wrapper--top">
                <div className='wrapper--top__title'>Вы являетесь основателем и Вы можете выбрать отдел с работниками и
                  выдать им задания.
                </div>
                <FormChooseDepartment formInst={form} departments={departments} />
              </div>
              : null
          }
          <div className="tasks--wrapper--content">
            {
              employees && Array.isArray(employees) && employees.length > 0
                ? <>
                  <div className="wrapper--content--ls">
                    <div className="content--ls__title">
                      Выберите рабочего и добавьте ему задачу
                    </div>
                    <div className="content-ls--list">
                      {renderListEmployees(employees, handleActive)}
                    </div>
                  </div>
                  <div className="wrapper--content--rs">

                  </div>
                </>
                : loadingEmployees ?
                <Loader height={'50vh'} />
                : null
            }

            <div className="content--tasks">
              <div className="content--tasks__title">
                Ваши задачи
              </div>
              <div className="content--tasks--board">
                {
                  tasks && Array.isArray(tasks) && tasks.length > 0
                    ? renderListTasks(tasks, visible, handleVisible, handleModalComment)
                    : loadingEmployees ?
                    <Loader height={'50vh'} />
                    : <div className="task--board--empty">
                      <div className="board--empty__title">
                        На данный момент у Вас нету никаких задач
                      </div>
                      <div className="board--empty__background">
                        <img src={noTasks} alt="Остутсвуют задачи" className='board--empty__img' />
                      </div>
                    </div>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
      <ModalComments />
      <TaskCreate />
    </Tasks>
  )
}

export default UserTasks
