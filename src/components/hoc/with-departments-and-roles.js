import React, { useEffect } from 'react'
import { fetchAllDepartments, fetchAllRole, showFormDepartment } from '../../actions'
import { useDispatch, useSelector } from 'react-redux'

export function withDepartmentsAndRoles(Component) {
  return () => {
    const { departmentData: { departments }, roleData: { roles } } = useSelector(state => state)
    const dispatch = useDispatch()

    useEffect(() => {
      if (!departments) {
        dispatch(fetchAllDepartments())
      }
    }, [dispatch, departments])

    useEffect(() => {
      if (!roles) {
        dispatch(fetchAllRole())
      }
    }, [dispatch, roles])

    const showDepartmentForm = () => dispatch(showFormDepartment)

    return (<Component {...arguments} func={showDepartmentForm} departments={departments} roles={roles} />)
  }
}
