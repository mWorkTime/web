import React from 'react'
import { getColorByCode } from './get-color-by-code'
import { dictionaryRoles } from '../items'
import { Tag } from 'antd'

export const generateRoleTags = (role) => {
  const color = getColorByCode(role.code)
  const name = dictionaryRoles[role.name]

  return (
    <Tag color={color} key={name}>
      {name.toUpperCase()}
    </Tag>
  )
}
