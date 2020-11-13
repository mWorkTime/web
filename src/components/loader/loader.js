import React from 'react'
import { Spin } from 'antd'
import PropTypes from 'prop-types'

const Loader = ({ height }) => (
  <div className="loader" style={{ height }}>
    <Spin size={'large'} tip="Загрузка данных..." />
  </div>
)

Loader.propTypes = {
  height: PropTypes.string.isRequired,
}

export default Loader
