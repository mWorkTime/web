import { Button } from 'antd'
import React from 'react'
import SendComment from './send-comment'

const renderReviewTaskList = (taskList) => {
  return taskList.map(({ name, employee, createdBy, desc, runtime, createdAt, _id }) => (
    <div className="review--wrapper__task" key={_id}>
      <div className="review--wrapper__title"> {name}</div>
      <div className="review--wrapper--info">
        <div className="review--wrapper--ls__info">
          <div className="review--info__title"> Прислал на проверку:</div>
          <div className="review--info__value">{employee.name}</div>
          <div className="review--info__title"> Задание создано:</div>
          <div className="review--info__value">{new Date(createdAt).toLocaleString()}</div>
        </div>
        <div className="review--wrapper--md__info">
          <div className="review--info__title"> Кем создано:</div>
          <div className="review--info__value">{createdBy}</div>
          <div className="review--info__title"> Установленный срок:</div>
          <div className="review--info__value">{runtime[0]} - {runtime[1]}</div>
        </div>
        <div className="review--wrapper--rs__info">
          <div className="review--info__title"> Прикреплёные файлы:</div>
          <Button type='dashed' block>Скачать</Button>
        </div>
      </div>
      <div className="review--wrapper--bs">
        <div className="review--wrapper--bs__desc">
          <div className="wrapper--bs__title">Описание задания:</div>
          <div className="wrapper--bs__text">{desc}</div>
        </div>
      </div>
      <div className="wrapper--bs__title">Напишите комментарий или просто подтвердите выполнение задания</div>
      <div className="wrapper--bs--form__comment">
        <SendComment />
      </div>
    </div>
  ))
}

export default renderReviewTaskList
