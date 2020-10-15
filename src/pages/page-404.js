import React from 'react'
import img404 from '../images/page-404/page_404.svg'
import { Typography } from 'antd'
import { Link } from 'react-router-dom'

const { Title } = Typography

const PageNotFound = () => (
  <div className="page--404">
    <div className="page--404__background">
      <img className='page--404__img' src={img404} alt="Page not found" />
    </div>
    <div className="page--404__content">
      <Title level={3} className='page--404__title'>Страница не найдена</Title>
      <Link to={'/'}>
        <div className="page--404__btn__back">
          На главную
        </div>
      </Link>
    </div>
  </div>
)

export default PageNotFound
