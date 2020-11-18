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
 * @param {function} func3
 * @param {function} funcUpdate
 * @param {function} funcReview
 * @return {*}
 */
const renderListTasks = (data, visibleDate, func, func2, func3, funcUpdate, funcReview) => {
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
            <a href={`${process.env.REACT_APP_BASE_SERVER_URI}/task/${id}/files/download`} download
               target='_blank' rel="noopener noreferrer">
              <Button className="board--info__download" type='link' onClick={() => func3(id)}>
              <DownloadOutlined />Скачать
              файлы </Button></a>
          </div>
          <div className="board--info__comment"
               onClick={() => func2(id)}>Прочитать комментарии
          </div>
          <div className="tasks--board__buttons">
            <Button className='board--btn start' shape='round' disabled={status >= 1} onClick={() => funcUpdate({ id, status: 1 })} >Начать выполнение</Button>
            <Button className='board--btn review' shape='round' disabled={status >= 2} onClick={() => funcReview(id)}>Отправить на проверку</Button>
            <Button className='board--btn finish' type='primary' disabled shape='round'>Завершить
              задание</Button>
          </div>
        </div>
      </div>
    )
  })
}

export default renderListTasks
