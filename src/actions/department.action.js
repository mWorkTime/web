import { createDepartment, getAllDepartments } from '../services/department.service'
import {
  FETCH_ALL_DEPARTMENT_SUCCESS, FETCH_ALL_DEPARTMENT_FAILURE,
  FETCH_CREATE_DEPARTMENT_FAILURE, FETCH_CREATE_DEPARTMENT_SUCCESS, SET_DEPARTMENT_MODAL_ACTIVE
} from '../types'
import { getErrorMsg } from '../utils'

const fetchAllDepartments = () => (dispatch) => {
  getAllDepartments()
    .then(({ data: { departments } }) => {
      const convertingToObj = departments.reduce((acc, item) => {
        return {
          ...acc,
          [item['id']]: item.name
        }
      }, {})

      dispatch({ type: FETCH_ALL_DEPARTMENT_SUCCESS, departments, payload: convertingToObj })
    })
    .catch((err) => dispatch({ type: FETCH_ALL_DEPARTMENT_FAILURE, message: getErrorMsg(err) }))
}

const fetchCreateDepartment = (departmentData) => () => (dispatch) => {
  createDepartment(departmentData)
    .then(({ data }) => {
      dispatch({ type: FETCH_CREATE_DEPARTMENT_SUCCESS, message: data.success })
      dispatch(fetchAllDepartments())
    })
    .catch((err) => dispatch({
      type: FETCH_CREATE_DEPARTMENT_FAILURE, message: getErrorMsg(err)
    }))
}

const showFormDepartment = { type: SET_DEPARTMENT_MODAL_ACTIVE }

export {
  fetchAllDepartments,
  fetchCreateDepartment,
  showFormDepartment
}
