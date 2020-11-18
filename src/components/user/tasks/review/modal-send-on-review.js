import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Form, Select } from 'antd'
import UserModal from '../../user-modal'
import { HIDE_MODAL_TASK } from '../../../../types'
import { fetchSendTaskOnReview } from '../../../../actions'

const { Option } = Select

const ModalSendOnReview = () => {
  const [form] = Form.useForm()
  const { taskData: { modalReview, managers, commentId, clearForm } } = useSelector(state => state)
  const dispatch = useDispatch()
  const hideModal = () => dispatch({ type: HIDE_MODAL_TASK, payload: 'review' })

  const renderManagerItems = (arr) => arr.map(({ name, id }) => (
    <Option key={id} value={id}>{name}</Option>
  ))

  useEffect(() => {
    if(clearForm) {
      form.resetFields()
    }
  }, [form, clearForm])

  return (
    <UserModal title={'Оптравить на проверку'} onCancel={hideModal} active={modalReview}
               reset={false} formInst={form} okText={'Отправить'} func={fetchSendTaskOnReview}
               obj={{ taskId: commentId }}
    >
      <Form form={form} name={'form-send-on-review'} layout='vertical'>
        <Form.Item
          name="manager"
          label="Список управляющих"
          rules={[{
            required: true,
            message: 'Выберите управляющего, для того что бы отправить ему задание!'
          }]}
          hasFeedback
        >
          <Select placeholder="Выберите управляющего">
            {managers && renderManagerItems(managers)}
          </Select>
        </Form.Item>
      </Form>
    </UserModal>
  )
}
export default ModalSendOnReview
