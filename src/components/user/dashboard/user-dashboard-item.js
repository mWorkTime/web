import React from 'react'
import PropTypes from 'prop-types'

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
      <div className="top--info__value">
        {secondItem.value}
      </div>
    </div>
  </div>
)

UserDashboardItem.propTypes = {
  firstItem: PropTypes.object.isRequired,
  secondItem: PropTypes.object.isRequired
}

export default UserDashboardItem
