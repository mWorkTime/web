import React from 'react'
import General from '../../layouts/user/general'
import { CheckCircleFilled } from '@ant-design/icons'
import ReportSend from './report-send'
import ChooseTask from './choose-task'

const UserReports = () => {
  return (
    <General>
      <div className="reports--wrapper">
        <div className="reports--wrapper__title">Отчёт</div>
        <ChooseTask />
        <div className="reports--wrapper__task">
          <div className="reports--task__title">
            Информация о задании
          </div>
          <div className="reports--task__confirm">
            <CheckCircleFilled /> <span className='task--confirm__text'>Подтверждено</span>
          </div>
          <div className="reports--task">
            <div className="reports--task--ls">
              <div className="task--ls__box">
                <div className="task--ls__title">Кем создан</div>
                <div className="task--ls__value">Илья Шараевский</div>
              </div>
              <div className="task--ls__box">
                <div className="task--ls__title">Кем подтверждён</div>
                <div className="task--ls__value">Борис Волков</div>
              </div>
            </div>
            <div className="reports--task--rs">
              <div className="task--rs__box">
                <div className="task--rs__title">Срок</div>
                <div className="task--rs__value">17.11.2020 20:34:08 - 19.11.2020 16:34:08 (3д.)</div>
              </div>
              <div className="task--rs__box">
                <div className="task--rs__title priority">Приоритет</div>
                <div className="task--rs__value priority-low">Низкий</div>
              </div>
            </div>
          </div>
          <div className="report--task--description">
            <div className="task--description__title">Краткое описание</div>
            <p className='task--description__text'>Создайте, измените или увольте - работника. Выберите для них роль
              "Работник", "Временный управляющий", "Управляющий".
              Создайте, измените или увольте - работника. Выберите для них роль "Работник", "Временный управляющий",
              "Управляющий".
            </p>
          </div>
        </div>
        <ReportSend />
      </div>
    </General>
  )
}
export default UserReports
