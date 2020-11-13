import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllTasks, fetchAllDepartments } from '../../../actions'
import { renderListEmployees } from './render-list-employees'
import { Form, Button } from 'antd'
import { DownloadOutlined } from '@ant-design/icons'
import Tasks from '../../layouts/user/tasks'
import UserHeader from '../user-header'
import FormChooseDepartment from './form-choose-department'
import Loader from '../../loader/loader'
import ModalComments from './comments/modal-comments'
import { SHOW_MODAL_COMMENTS } from '../../../types'

const UserTasks = () => {
  const { sidebarUser: { active }, taskData: { loading, employees, role }, departmentData: { departments } } = useSelector(state => state)
  const dispatch = useDispatch()
  const [visible, setVisible] = useState(false)
  const [form] = Form.useForm()

  useEffect(() => {
    dispatch(fetchAllTasks())
  }, [dispatch])

  useEffect(() => {
    if (!departments) {
      dispatch(fetchAllDepartments())
    }
  }, [dispatch, departments])

  const handleVisible = () => {
    setVisible(!visible)
  }

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

            {
              !loading && employees && Array.isArray(employees) && employees.length > 0
                ? <>
                  <div className="wrapper--content--ls">
                    <div className="content--ls__title">
                      Выберите рабочего и добавьте ему задачу
                    </div>
                    <div className="content-ls--list">
                      {renderListEmployees(employees)}
                    </div>
                  </div>
                  <div className="wrapper--content--rs">

                  </div>
                </>
                : null
            }
            <div className="content--tasks">
              <div className="content--tasks__title">
                Ваши задачи
              </div>
              <div className="content--tasks--board">
                <div className="tasks--board__card ">
                  <div className="tasks--board__title">Задача #1</div>
                  <div className="tasks--board__priority high">Высокий</div>
                  <div className="tasks--board__date" onClick={handleVisible}>3 д.</div>
                  <div className={`tasks--board__runtime ${visible ? 'active' : ''}`}>
                    11/4/2020, 6:25:25 PM - 11/7/2020, 2:05:27 PM
                  </div>
                  <div className="tasks--board--info">
                    <div className="tasks--board--ls">
                      <div className="board--info__block__desc">
                        <div className="board--info__created__by">От кого: Илья Шараевский</div>
                        <div className="board--info__desc">Создайте, измените или увольте - работника. Выберите для них
                          роль "Работник", "Временный управляющий", "Управляющий".
                        </div>
                      </div>
                      <Button className="board--info__download" type='primary' shape='round'><DownloadOutlined />Скачать
                        файлы </Button>
                    </div>
                    <div className="board--info__comment" onClick={() => dispatch({ type: SHOW_MODAL_COMMENTS })}>Прочитать комментарии</div>
                    <div className="tasks--board__buttons">
                      <Button className='board--btn start' shape='round'>Начать выполнение</Button>
                      <Button className='board--btn review' shape='round'>Отправить на проверку</Button>
                      <Button className='board--btn finish' disabled shape='round'>Завершить задание</Button>
                    </div>
                  </div>
                </div>
                <div className="tasks--board__card ">
                  <div className="tasks--board__title">Задача #1</div>
                  <div className="tasks--board__priority high">Высокий</div>
                  <div className="tasks--board__date" onClick={handleVisible}>3 д.</div>
                  <div className={`tasks--board__runtime ${visible ? 'active' : ''}`}>
                    11/4/2020, 6:25:25 PM - 11/7/2020, 2:05:27 PM
                  </div>
                  <div className="tasks--board--info">
                    <div className="tasks--board--ls">
                      <div className="board--info__block__desc">
                        <div className="board--info__created__by">От кого: Илья Шараевский</div>
                        <div className="board--info__desc">Создайте, измените или увольте - работника. Выберите для них
                          роль "Работник", "Временный управляющий", "Управляющий".
                        </div>
                      </div>
                      <Button className="board--info__download" type='primary' shape='round'><DownloadOutlined />Скачать
                        файлы </Button>
                    </div>
                    <div className="board--info__comment" onClick={() => dispatch({ type: SHOW_MODAL_COMMENTS })}>Прочитать комментарии</div>
                    <div className="tasks--board__buttons">
                      <Button className='board--btn start' shape='round'>Начать выполнение</Button>
                      <Button className='board--btn review' shape='round'>Отправить на проверку</Button>
                      <Button className='board--btn finish' disabled shape='round'>Завершить задание</Button>
                    </div>
                  </div>
                </div>
                <div className="tasks--board__card ">
                  <div className="tasks--board__title">Задача #1</div>
                  <div className="tasks--board__priority high">Высокий</div>
                  <div className="tasks--board__date" onClick={handleVisible}>3 д.</div>
                  <div className={`tasks--board__runtime ${visible ? 'active' : ''}`}>
                    11/4/2020, 6:25:25 PM - 11/7/2020, 2:05:27 PM
                  </div>
                  <div className="tasks--board--info">
                    <div className="tasks--board--ls">
                      <div className="board--info__block__desc">
                        <div className="board--info__created__by">От кого: Илья Шараевский</div>
                        <div className="board--info__desc">Создайте, измените или увольте - работника. Выберите для них
                          роль "Работник", "Временный управляющий", "Управляющий".
                        </div>
                      </div>
                      <Button className="board--info__download" type='primary' shape='round'><DownloadOutlined />Скачать
                        файлы </Button>
                    </div>
                    <div className="board--info__comment" onClick={() => dispatch({ type: SHOW_MODAL_COMMENTS })}>Прочитать комментарии</div>
                    <div className="tasks--board__buttons">
                      <Button className='board--btn start' shape='round'>Начать выполнение</Button>
                      <Button className='board--btn review' shape='round'>Отправить на проверку</Button>
                      <Button className='board--btn finish' disabled shape='round'>Завершить задание</Button>
                    </div>
                  </div>
                </div>
                <div className="tasks--board__card ">
                  <div className="tasks--board__title">Задача #1</div>
                  <div className="tasks--board__priority high">Высокий</div>
                  <div className="tasks--board__date" onClick={handleVisible}>3 д.</div>
                  <div className={`tasks--board__runtime ${visible ? 'active' : ''}`}>
                    11/4/2020, 6:25:25 PM - 11/7/2020, 2:05:27 PM
                  </div>
                  <div className="tasks--board--info">
                    <div className="tasks--board--ls">
                      <div className="board--info__block__desc">
                        <div className="board--info__created__by">От кого: Илья Шараевский</div>
                        <div className="board--info__desc">Создайте, измените или увольте - работника. Выберите для них
                          роль "Работник", "Временный управляющий", "Управляющий".
                        </div>
                      </div>
                      <Button className="board--info__download" type='primary' shape='round'><DownloadOutlined />Скачать
                        файлы </Button>
                    </div>
                    <div className="board--info__comment" onClick={() => dispatch({ type: SHOW_MODAL_COMMENTS })}>Прочитать комментарии</div>
                    <div className="tasks--board__buttons">
                      <Button className='board--btn start' shape='round'>Начать выполнение</Button>
                      <Button className='board--btn review' shape='round'>Отправить на проверку</Button>
                      <Button className='board--btn finish' disabled shape='round'>Завершить задание</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ModalComments/>
    </Tasks>
  )
}

export default UserTasks
