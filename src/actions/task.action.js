import { FETCH_ALL_TASKS_REQUEST, FETCH_ALL_TASKS_SUCCESS, FETCH_ALL_TASKS_FAILURE } from '../types'
import { getAllTasks } from '../services/task.service'
import { getErrorMsg } from '../utils'
import { dictionaryRoles } from '../items'

const fetchAllTasks = () => (dispatch) => {
  dispatch({ type: FETCH_ALL_TASKS_REQUEST })
  getAllTasks()
    .then(({ data }) => {
      let convertEmployees = []
      if (data.employees) {
        convertEmployees = data.employees.reduce((acc, employee) => {
          acc.push({ name: `${employee.name} ${employee?.surname}`, email: employee.email,
            role: { name: employee.role.name, normalName: dictionaryRoles[employee.role.name] }, id: employee._id, department: employee.department.name
          })
          return acc
        },[])
      }

      dispatch({ type: FETCH_ALL_TASKS_SUCCESS, employees: convertEmployees, tasks: data?.tasks || [], role: data.role })
    })
    .catch((err) => dispatch({ type: FETCH_ALL_TASKS_FAILURE, error: getErrorMsg(err)}))
}

export {
  fetchAllTasks
}
