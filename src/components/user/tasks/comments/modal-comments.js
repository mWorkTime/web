import React from 'react'
import { Modal, Button } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { HIDE_MODAL_TASK } from '../../../../types'
import { DownloadOutlined, SmileTwoTone } from '@ant-design/icons'

const ModalComments = () => {
  const { taskData: { modalComments, commentId, comments } } = useSelector(state => state)
  const dispatch = useDispatch()
  const hideModal = () => dispatch({ type: HIDE_MODAL_TASK, payload: 'comments' })

  const renderComments = (id) => {
    return comments[id].map(({ key, createdBy, about, createdAt }) => (
      <div className="comments--box" key={key}>
        <div className="comments--box__created__by">От кого: {createdBy}</div>
        <div className="comments--box__content">
          <div className="comments--box__text">{about}</div>
          <Button type={'primary'} className="comments--box__download" shape='round'>
            <DownloadOutlined />Скачать доп. файлы
          </Button>
        </div>
        <div className="comments--box__date">{createdAt}</div>
      </div>
    ))
  }

  return (
    <Modal
      visible={modalComments}
      onOk={hideModal}
      onCancel={hideModal}
      title={`Комментарии для задачи #1`}
      cancelText={'Закрыть'}
    >
      {
        comments && typeof comments === 'object' && commentId && comments[commentId].length
          ? <div className="modal--comments">
            {renderComments(commentId)}
          </div>
          : <div className="modal--empty">
              <div className='modal--empty__icon'><SmileTwoTone /></div>
              <div className='modal--empty__text'>Комментарии для данной задачи отсутствуют</div>
            </div>
      }
    </Modal>
  )
}

export default ModalComments
