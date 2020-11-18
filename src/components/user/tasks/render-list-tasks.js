import React from 'react'
import { Button } from 'antd'
import { DownloadOutlined } from '@ant-design/icons'
import { getClassNameByPriority } from '../../../utils'

/**
 * renderListTasks.
 * @param {object} data
 * @param {object} visibleDate
 * @param {function} func
 * @param {function} func2
 * @return {*}
 */
const renderListTasks = (data, visibleDate, func, func2) => {
  return data.map(({ name, runtime, dates, createdBy, desc, status, priority: { title, code }, id }) => {
    return (
      <div className="tasks--board__card " key={id}>
        <div className="tasks--board__title">{name}</div>
        <div className={`tasks--board__priority ${getClassNameByPriority(code)}`}>{title}</div>
        <div className="tasks--board__date" onClick={() => func(id)}>{runtime} д.</div>
        <div className={`tasks--board__runtime ${visibleDate[id] ? 'active' : ''}`}>{dates}</div>
        <div className="tasks--board--info">
          <div className="tasks--board--ls">
            <div className="board--info__block__desc">
              <div className="board--info__created__by">От кого: {createdBy}</div>
              <div className="board--info__desc">{desc}</div>
            </div>
            <Button className="board--info__download" type='primary' shape='round'><DownloadOutlined />Скачать
              файлы </Button>
          </div>
          <div className="board--info__comment"
               onClick={() => func2(id)}>Прочитать комментарии
          </div>
          <div className="tasks--board__buttons">

            <Button className='board--btn start' shape='round' disabled={status === 1}>Начать выполнение</Button>
            <Button className='board--btn review' shape='round' disabled={status === 2}>Отправить на проверку</Button>
            <Button className='board--btn finish' type='primary' disabled shape='round'>Завершить
              задание</Button>
          </div>
        </div>
      </div>
    )
  })
}

export default renderListTasks
