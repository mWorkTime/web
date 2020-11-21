import React from 'react'
import { Button, DatePicker, Form, Input } from 'antd'
import { fetchReportCreate } from '../../../actions'
import { useDispatch, useSelector } from 'react-redux'
import UserFileUpload from '../user-file-upload'
import { uploadReportFiles } from '../../../services/report.service'
import { FETCH_UPLOAD_REPORT_FILE_SUCCESS } from '../../../types'

const ReportSend = ({ id }) => {
  const [form] = Form.useForm()
  const dispatch = useDispatch()
  const { reportData: { disableReport } } = useSelector(state => state)

  const onFinish = values => {
    const timeValueStart = values['start']
    const timeValueFinish = values['finish']
    const data = {
      ...values, id,
      start: timeValueStart.format('DD.MM.YYYY HH:mm:ss'),
      finish: timeValueFinish.format('DD.MM.YYYY HH:mm:ss')
    }
    dispatch(fetchReportCreate(data))
  }

  const config = {
    rules: [
      {
        type: 'object',
        required: true,
        message: 'Пожалуйста укажите дату!'
      }
    ]
  }

  const uploadSuccess = () => {
    dispatch({ type: FETCH_UPLOAD_REPORT_FILE_SUCCESS })
  }

  return (
    <div className="reports--wrapper__send">
      <div className="reports--send__title">Отправка отчёта</div>
      <Form form={form} onFinish={onFinish} name={'form-report-send'} layout='vertical'>
        <Form.Item name="start" label="Приступил к заданию " {...config} hasFeedback>
          <DatePicker showTime format="DD.MM.YYYY HH:mm:ss" disabled={disableReport} />
        </Form.Item>
        <Form.Item name="finish" label="Завершил задание" {...config} hasFeedback>
          <DatePicker showTime format="DD.MM.YYYY HH:mm:ss" disabled={disableReport} />
        </Form.Item>
        <Form.Item
          label={'Общее кол-во затраченых часов'}
          name={'total_time'}
          rules={[{
            required: true,
            message: 'Напишите сколько времени вы потратили всего на выполнение задания'
          }]}
          hasFeedback

        >
          <Input disabled={disableReport} />
        </Form.Item>
        <Form.Item
          label='Обед (всего часов)'
          name={'break_time'}
          rules={[{
            required: true,
            message: 'Напишите сколько времени вы потратили на перерыв'
          }]}
          hasFeedback
        >
          <Input disabled={disableReport} />
        </Form.Item>
        <Form.Item
          label={'Опишите что вы делали (кратко)'}
          name='description'
          hasFeedback
          rules={[{
            required: true,
            message: 'Распишите что вы делали'
          }]}
        >
          <Input.TextArea rows={4} style={{ resize: 'none' }} disabled={disableReport} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" shape='round' block>
            Отправить отчёт
          </Button>
        </Form.Item>
      </Form>
      <UserFileUpload func={uploadReportFiles} disable={disableReport} funcSuccess={uploadSuccess} needClearForm={false}
                      typeClearForm={''}
                      additionalFields={[
                        { field: 'reportId', value: id }
                      ]} />
    </div>
  )
}
export default ReportSend
