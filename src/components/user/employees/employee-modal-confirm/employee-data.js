import PropTypes from 'prop-types'
import React from 'react'

const EmployeeData = ({ title, value, cls }) => {
  return (
    <div className="employee--confirm--content">
      <span className="employee--confirm__title">{title}</span>
      <span className={`employee--confirm__value name ${cls}`}>{value}</span>
    </div>
  )
}

EmployeeData.propTypes = {
  title: PropTypes.string.isRequired,
  cls: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node
  ])
}

export default EmployeeData
