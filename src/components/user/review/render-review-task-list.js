import { Button, Row, Col } from 'antd'
import React from 'react'
import SendComment from './send-comment'
import { DownloadOutlined } from '@ant-design/icons'
import ReviewConfirmTask from './review-confirm-task'
import UserFileUpload from '../user-file-upload'

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
          <a href={`${process.env.REACT_APP_BASE_SERVER_URI}/task/${_id}/files/download`} download
             target='_blank' rel="noopener noreferrer"><Button type='dashed'
                                                               block><DownloadOutlined /> Скачать</Button>
          </a>
        </div>
      </div>
      <div className="review--wrapper--bs">
        <div className="review--wrapper--bs__desc">
          <div className="wrapper--bs__title">Описание задания:</div>
          <div className="wrapper--bs__text">{desc}</div>
        </div>
      </div>
      <div className="wrapper--bs__title">Напишите комментарий или просто подтвердите выполнение задания</div>
      <Row justify='space-between'>
        <Col lg={14}>
          <SendComment id={_id} />
        </Col>
        <Col lg={10}>
          <ReviewConfirmTask id={_id} />
        </Col>
      </Row>
    </div>
  ))
}

export default renderReviewTaskList
