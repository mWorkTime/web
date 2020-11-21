import React, { useEffect } from 'react'
import { Button, Form, Select } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllTasksOnReport, fetchTaskOnReport } from '../../../actions'

const { Option } = Select

const ChooseTask = () => {
  const [form] = Form.useForm()
  const { reportData: { tasks, loading, disableChoose } } = useSelector(state => state)
  const dispatch = useDispatch()

  useEffect(() => {
    if (!tasks) {
      dispatch(fetchAllTasksOnReport())
    }
  }, [dispatch, tasks])

  const renderTaskItems = (tasks) => {
    return tasks.map(({ id, name }) => (
        <Option key={id} value={id}>{name}</Option>
      )
    )
  }

  const onFinish = (values) => {
    dispatch(fetchTaskOnReport(values))
  }

  return (
    <div className="reports--wrapper__choose">
      <Form form={form} onFinish={onFinish} name={'form-choose-task'} className='form--choose--task'>
        <Form.Item
          name="task"
          label="Задание"
          rules={[{
            required: true,
            message: 'Пожалуйста, выберите задание!'
          }]}
          hasFeedback
        >
          <Select placeholder="Выберите задание" disabled={disableChoose}>
            {!loading && tasks && Array.isArray(tasks) && tasks.length > 0
              ? renderTaskItems(tasks)
              : null
            }
          </Select>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" shape='round' block disabled={disableChoose}>
            Получить данные
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}
export default ChooseTask
