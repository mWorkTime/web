import React from 'react'
import { Modal, Button } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { HIDE_MODAL_COMMENTS } from '../../../../types'
import { DownloadOutlined } from '@ant-design/icons'

const ModalComments = () => {
  const { taskData: { modalComments } } = useSelector(state => state)
  const dispatch = useDispatch()
  const hideModal = () => dispatch({ type: HIDE_MODAL_COMMENTS })

  return (
    <Modal
      visible={modalComments}
      onOk={hideModal}
      onCancel={hideModal}
      title={`Комментарии для задачи #1`}
      cancelText={'Закрыть'}
    >
      <div className="modal--comments">
        <div className="comments--box">
          <div className="comments--box__created__by">От кого: Илья Шараевский</div>
          <div className="comments--box__content">
            <div className="comments--box__text">Создайте, измените или увольте - работника. Выберите для них
              роль "Работник", "Временный управляющий", "Управляющий".
            </div>
            <Button type={'primary'} className="comments--box__download" shape='round'>
              <DownloadOutlined />Скачать доп. файлы
            </Button>
          </div>
          <div className="comments--box__date">Добавлен: 11/4/2020, 6:25:25 PM</div>
        </div>

        <div className="comments--box">
          <div className="comments--box__created__by">От кого: Илья Шараевский</div>
          <div className="comments--box__content">
            <div className="comments--box__text">Создайте, измените или увольте - работника. Выберите для них
              роль "Работник", "Временный управляющий", "Управляющий".
            </div>
            <Button type={'primary'} className="comments--box__download" shape='round'>
              <DownloadOutlined />Скачать доп. файлы
            </Button>
          </div>
          <div className="comments--box__date">Добавлен: 11/4/2020, 6:25:25 PM</div>
        </div>

        <div className="comments--box">
          <div className="comments--box__created__by">От кого: Илья Шараевский</div>
          <div className="comments--box__content">
            <div className="comments--box__text">Создайте, измените или увольте - работника. Выберите для них
              роль "Работник", "Временный управляющий", "Управляющий".
            </div>
            <Button type={'primary'} className="comments--box__download" shape='round'>
              <DownloadOutlined />Скачать доп. файлы
            </Button>
          </div>
          <div className="comments--box__date">Добавлен: 11/4/2020, 6:25:25 PM</div>
        </div>
      </div>
    </Modal>
  )
}

export default ModalComments
