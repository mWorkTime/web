import React from 'react'
import { Typography } from 'antd'
import { Link } from 'react-router-dom'

const { Title } = Typography

const Welcome = () => {
  return (
    <div className="welcome--background">
      <div className="welcome--wrapper">
        <Title level={1} className="welcome--wrapper__title">Добро пожаловать</Title>
        <div className="welcome--wrapper__text"><strong>Приложение Work Time Manager - </strong>
          в приложении вы можете зарегистрировать свою организацию. После регистрации Вы можете создавать пользователей,
          которые являются частью организации и назначать им роли: "Сотрудник", "Менеджер". Менеджер дает задания
          сотрудникам. Сотрудники могут видеть задания на странице "Задания" и принимать участие в работе. После
          выполнения задания сотрудник может отправить отчет о проделанной работе в разделе "Отчеты".
        </div>
        <div className="welcome--wrapper__footer">
          <Link to={'/auth/register'}><div className="welcome--wrapper__register">Зарегистрироваться</div></Link>
          <Link to={'/auth/login'}><div className="welcome--wrapper__login">Войти</div></Link>
        </div>
      </div>
    </div>
  )
}

export default Welcome
