import { dictionaryPriority, dictionaryRoles } from '../items'

export const getConvertingEmployees = (arr) => {
  return arr.employees.reduce((acc, employee) => {
    acc.push({
      name: `${employee.name} ${employee?.surname}`, email: employee.email,
      role: { name: employee.role.name, normalName: dictionaryRoles[employee.role.name] },
      id: employee._id, department: employee.department.name
    })
    return acc
  }, [])
}

export const getConvertingTasks = (tasks) => {
  return tasks.reduce((acc, task) => {
    acc.push({
      runtime: +task.runtime[1].substr(0, 2) - (+task.runtime[0].substr(0, 2)),
      name: task.name, id: task._id, visibleDate: false,
      dates: `${task.runtime[0]} - ${task.runtime[1]}`,
      createdBy: task.createdBy, desc: task.desc, status: task.status,
      priority: { title: dictionaryPriority[`${task.priority}`], code: task.priority }
    })
    return acc
  }, [])
}

export const getObjectWithVisibleDates = (tasks) => {
  return tasks.reduce((acc, { _id }) => {
    return {
      ...acc,
      [_id]: false
    }
  }, {})
}

export const getConvertingComments = (tasks) => {
  return tasks.reduce((acc, task) => {
    return {
      ...acc,
      [task._id]: task?.comments || []
    }
  }, {})
}
