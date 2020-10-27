import React from 'react'

const EmployeeStatistic = ({ title, count, cls }) => (
  <div className={`statistic--rs__box ${cls}`}>
    <div className="rs--box__title">{title}</div>
    <div className="rs--box__value">{count} чел.</div>
  </div>
)

export default EmployeeStatistic
