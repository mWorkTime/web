import { getColorByCode } from './get-color-by-code'
import { setLocalStorage, clearLocalStorage } from './clear-set-auth'
import { getErrorMsg } from './get-error-message'
import { generateRoleTags } from './generate-role-tags'
import { normalizeEmployeeObject } from './normalize-employee-object'
import { convertRole } from './convert-role'
import { getClassNameByPriority } from './get-class-name-by-priority'
import { getConvertingEmployees, getConvertingTasks, getObjectWithVisibleDates, getConvertingComments } from './functions-for-transform-task'

export {
  getColorByCode,
  setLocalStorage,
  clearLocalStorage,
  getErrorMsg,
  generateRoleTags,
  normalizeEmployeeObject,
  convertRole,
  getClassNameByPriority,
  getConvertingEmployees,
  getConvertingTasks,
  getObjectWithVisibleDates,
  getConvertingComments
}
