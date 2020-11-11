import React from 'react'
import { Spin } from 'antd'

const Loader = () => (
  <div className="loader">
    <Spin size={'large'} tip="Загрузка данных..."  />
  </div>
)

export default Loader
