import { FETCH_ALL_TASKS_REQUEST, FETCH_ALL_TASKS_SUCCESS, FETCH_ALL_TASKS_FAILURE } from '../types'
import { getAllTasks } from '../services/task.service'
import { getErrorMsg } from '../utils'

const fetchAllTasks = () => (dispatch) => {
  dispatch({ type: FETCH_ALL_TASKS_REQUEST })
  getAllTasks()
    .then(({ data }) => {
      dispatch({ type: FETCH_ALL_TASKS_SUCCESS, employees: data?.employees, tasks: data?.tasks })
    })
    .catch((err) => dispatch({ type: FETCH_ALL_TASKS_FAILURE, error: getErrorMsg(err)}))
}

export {
  fetchAllTasks
}
