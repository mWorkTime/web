import React from 'react'

const UserDashboardItem = ({ firstItem = {}, secondItem = {} }) => (
  <div className="top--ls--info__col">
    <div className="top--info">
      <div className="top--info__label">
        {firstItem.title}
      </div>
      <div className="top--info__value">
        {firstItem.value}
      </div>

    </div>
    <div className="top--info">
      <div className="top--info__label">
        {secondItem.title}
      </div>
      <div className="top--info__value ">
        {secondItem.value}
      </div>
    </div>
  </div>
)

export default UserDashboardItem
