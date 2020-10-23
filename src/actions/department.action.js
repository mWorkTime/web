import { getAllDepartments } from '../services/department.service'
import { FETCH_ALL_DEPARTMENT_SUCCESS, FETCH_ALL_DEPARTMENT_FAILURE } from '../types'

const fetchAllDepartments = () => (dispatch) => {
  getAllDepartments()
    .then(({ data }) => dispatch({ type: FETCH_ALL_DEPARTMENT_SUCCESS, payload: data.departments }))
    .catch((err) => dispatch({ type: FETCH_ALL_DEPARTMENT_FAILURE, message: err?.message || err?.response?.data?.msg }))
}

export {
  fetchAllDepartments
}
