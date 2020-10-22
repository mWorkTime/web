import {
  FETCH_ALL_EMPLOYEES_FAILURE, FETCH_ALL_EMPLOYEES_REQUEST,
  FETCH_ALL_EMPLOYEES_SUCCESS
} from '../types'
import { getAllEmployees } from '../services/employee.service'

const fetchAllEmployees = () => (dispatch) => {
  dispatch({ type: FETCH_ALL_EMPLOYEES_REQUEST })
  getAllEmployees()
    .then(({ data: { employees } }) => {
      dispatch({ type: FETCH_ALL_EMPLOYEES_SUCCESS, payload: employees })
    })
    .catch((err) => {
      dispatch({ type: FETCH_ALL_EMPLOYEES_FAILURE, error: err.message })
    })
}

export {
  fetchAllEmployees
}
