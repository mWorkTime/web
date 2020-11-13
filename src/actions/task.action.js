import { FETCH_ALL_TASKS_REQUEST, FETCH_ALL_TASKS_SUCCESS, FETCH_ALL_TASKS_FAILURE,
  FETCH_EMPLOYEES_BY_DEPARTMENT_REQUEST, FETCH_EMPLOYEES_BY_DEPARTMENT_SUCCESS,
  FETCH_EMPLOYEES_BY_DEPARTMENT_FAILURE
} from '../types'
import { getAllTasks, getEmployeesByDepartment } from '../services/task.service'
import { getErrorMsg } from '../utils'
import { dictionaryRoles } from '../items'

const getConvertingEmployees = (arr) => {
  return arr.employees.reduce((acc, employee) => {
    acc.push({ name: `${employee.name} ${employee?.surname}`, email: employee.email,
      role: { name: employee.role.name, normalName: dictionaryRoles[employee.role.name] },
      id: employee._id, department: employee.department.name
    })
    return acc
  },[])
}

const fetchAllTasks = () => (dispatch) => {
  dispatch({ type: FETCH_ALL_TASKS_REQUEST })
  getAllTasks()
    .then(({ data }) => {
      let convertEmployees = []
      if (data.employees) {
        convertEmployees = getConvertingEmployees(data)
      }

      dispatch({ type: FETCH_ALL_TASKS_SUCCESS, employees: convertEmployees,
        tasks: data?.tasks || [], role: data.role })
    })
    .catch((err) => dispatch({ type: FETCH_ALL_TASKS_FAILURE, error: getErrorMsg(err)}))
}

const fetchEmployeesByDepartment = (values) => (dispatch) => {
  dispatch({ type: FETCH_EMPLOYEES_BY_DEPARTMENT_REQUEST })
  getEmployeesByDepartment(values)
    .then(({ data }) => {
      let convertEmployees = []
      if (data.employees) {
        convertEmployees = getConvertingEmployees(data)
      }
      dispatch({ type: FETCH_EMPLOYEES_BY_DEPARTMENT_SUCCESS, employees: convertEmployees })
    })
    .catch((err) => dispatch({ type: FETCH_EMPLOYEES_BY_DEPARTMENT_FAILURE, error: getErrorMsg(err)}) )
}

export {
  fetchAllTasks,
  fetchEmployeesByDepartment
}
