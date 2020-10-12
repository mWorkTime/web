import React from 'react'
import { Button, Form, Input } from 'antd'
import { UserOutlined, MailOutlined, LockOutlined, SolutionOutlined } from '@ant-design/icons'
import { generalValidation, registerValidation} from '../../validators/auth.validator'
import { Link } from 'react-router-dom'

const renderAuthForm = (typeForm, instanceForm,  funcFinish, funcClear, disable, cancelDisable) => {
  const { validatePassword, validateEmail } = generalValidation
  const { validateRegisterPassword, validateConfirmPassword, validateName, validateOrganization} = registerValidation

  let clsForm = 'form--login'
  let clsInput = 'form--login__input'
  let clsButton = 'form--login__button'
  let btnLabel = 'Авторизоваться'
  let linkText = 'Зарегистрироваться'

  if (typeForm === 'register') {
    clsForm = 'form--register'
    clsInput = 'form--register__input'
    clsButton = 'form--register__button'
    btnLabel = 'Зарегистрироваться'
    linkText = 'Войти'
  }

  const bottomItems = {
    cls: typeForm === 'register' ? 'form--register__link' : 'form--login__link',
    text: typeForm === 'register' ? 'если вы зарегистрированы' : 'или',
    link: typeForm === 'register' ? '/auth/login' : '/auth/register'
  }

  return (
    <Form form={instanceForm}
          onFinish={funcFinish} name={typeForm}
          layout='vertical' className={clsForm}>
      { typeForm === 'register' ?
        <>
          <Form.Item
            className={clsInput}
            name='name'
            label='Имя'
            rules={validateName}
            hasFeedback
          >
            <Input prefix={<UserOutlined />} placeholder="введите ваше имя" disabled={disable} />
          </Form.Item>

          <Form.Item
            className={clsInput}
            name='organization'
            label='Организация'
            rules={validateOrganization}
            hasFeedback
          >
            <Input prefix={<SolutionOutlined />} placeholder="введите название организации" disabled={disable} />
          </Form.Item>
        </>
        : null
      }
      <Form.Item
        className={clsInput}
        name='email'
        label='Email'
        rules={validateEmail}
        hasFeedback
      >
        <Input prefix={<MailOutlined />} placeholder="example@gmail.com" disabled={disable} />
      </Form.Item>
      <Form.Item
        className={clsInput}
        label="Пароль"
        name="password"
        rules={typeForm === 'register' ? validateRegisterPassword : validatePassword}
        hasFeedback
      >
        <Input.Password prefix={<LockOutlined />} placeholder="введите пароль" disabled={disable}/>
      </Form.Item>
      {
        typeForm === 'register' ?
          <Form.Item
            name='confirm'
            className={clsInput}
            label='Потвердите пароль'
            dependencies={['password']}
            rules={validateConfirmPassword}
            hasFeedback
          >
            <Input.Password prefix={<LockOutlined className="site-form-item-icon" />} placeholder="потвердите пароль" disabled={disable}/>
          </Form.Item>
          : null
      }
      <div className='form--auth__buttons'>
        <Button type="primary" className={clsButton}
                htmlType="submit" shape="round" disabled={disable}>{btnLabel}</Button>
        <Button type='link' onClick={funcClear}>Очистить поля</Button>
      </div>
      <div className={bottomItems.cls}>
        {bottomItems.text} &nbsp;
        <Link to={bottomItems.link} onClick={cancelDisable}>
          {linkText}
        </Link>
      </div>

    </Form>
  )
}

export default renderAuthForm
