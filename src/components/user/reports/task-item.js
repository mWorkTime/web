import React from 'react'
import { CheckCircleFilled, CloseCircleFilled } from '@ant-design/icons'

const renderTaskItem = (task) => {
  return  (
    <div className="reports--wrapper__task">
      <div className="reports--task__title">
        Информация о задании
      </div>
        {
          task.isConfirmed
            ? <> <div className="task--confirm__allow"><CheckCircleFilled /> <span>Подтверждено</span></div></>
            : <><div className="task--confirm__disallow"><CloseCircleFilled /> <span>Не  подтверждено</span></div></>
        }
      <div className="reports--task">
        <div className="reports--task--ls">
          <div className="task--ls__box">
            <div className="task--ls__title">Кем создан</div>
            <div className="task--ls__value">{task.createdBy}</div>
          </div>
          <div className="task--ls__box">
            <div className="task--ls__title">Кем подтверждён</div>
            <div className="task--ls__value">{task?.confirmedBy}</div>
          </div>
        </div>
        <div className="reports--task--rs">
          <div className="task--rs__box">
            <div className="task--rs__title">Срок</div>
            <div className="task--rs__value">{task.runtime}</div>
          </div>
          <div className="task--rs__box">
            <div className="task--rs__title priority">Приоритет</div>
            <div className="task--rs__value priority-low">{task.priority}</div>
          </div>
        </div>
      </div>
      <div className="report--task--description">
        <div className="task--description__title">Краткое описание</div>
        <p className='task--description__text'>{task.desc}</p>
      </div>
    </div>
    )
}

export default renderTaskItem
