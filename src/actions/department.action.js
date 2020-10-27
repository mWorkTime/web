import { createDepartment, getAllDepartments } from '../services/department.service'
import {
  FETCH_ALL_DEPARTMENT_SUCCESS,
  FETCH_ALL_DEPARTMENT_FAILURE,
  FETCH_CREATE_DEPARTMENT_FAILURE,
  FETCH_CREATE_DEPARTMENT_SUCCESS, SET_DEPARTMENT_MODAL_ACTIVE
} from '../types'

const fetchAllDepartments = () => (dispatch) => {
  getAllDepartments()
    .then(({ data }) => dispatch({ type: FETCH_ALL_DEPARTMENT_SUCCESS, payload: data.departments }))
    .catch((err) => dispatch({ type: FETCH_ALL_DEPARTMENT_FAILURE, message: err?.message || err?.response?.data?.msg }))
}

const fetchCreateDepartment = (departmentData) => (dispatch) => {
  createDepartment(departmentData)
    .then(({ data }) => {
      dispatch({ type: FETCH_CREATE_DEPARTMENT_SUCCESS, message: data.success })
      dispatch(fetchAllDepartments())
    })
    .catch((err) => dispatch({
      type: FETCH_CREATE_DEPARTMENT_FAILURE,
      message: err?.message || err?.response?.data?.msg
    }))
}

const showFormDepartment = { type: SET_DEPARTMENT_MODAL_ACTIVE }

export {
  fetchAllDepartments,
  fetchCreateDepartment,
  showFormDepartment
}
