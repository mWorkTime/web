import { getColorByCode } from './get-color-by-code'
import { dictionaryRoles } from '../items'
import { Tag } from 'antd'
import React from 'react'

export const generateRoleTags = (role) => {
  return role.map(tag => {
    const color = getColorByCode(tag.code)
    const name = dictionaryRoles[tag.name]

    return (
      <Tag color={color} key={name}>
        {name.toUpperCase()}
      </Tag>
    )
  })
}
