import React from 'react'
import UserModal from '../user-modal'
import renderTaskForm from './task-form'
import TaskFileUpload from './task-file-upload'
import { Form } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { HIDE_MODAL_TASK } from '../../../types'
import { fetchCreateTask } from '../../../actions'

const TaskCreate = () => {
  const [form] = Form.useForm()
  const { taskData: { modalTask, userId, user, disable } } = useSelector(state => state)
  const dispatch = useDispatch()
  const hideModal = () => dispatch({ type: HIDE_MODAL_TASK, payload: 'task' })

  return (
    <UserModal
      formInst={form} okText={'Создать'}
      title={'Создать задание'} reset={false}
      active={modalTask} onCancel={hideModal} func={fetchCreateTask}>
      <>
        {renderTaskForm('form-create-task', form, { userId, user }, disable)}
        <TaskFileUpload />
      </>
    </UserModal>
  )
}
export default TaskCreate
