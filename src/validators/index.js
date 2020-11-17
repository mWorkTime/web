import { generalValidation, registerValidation } from './auth.validator'
import { departmentValidator } from './department.validator'
import { phoneValidation } from './phone.validator'
import { employeeValidator } from './employee.validator'
import { taskValidator } from './task.validator'
import { validateFiles } from './file.validator'

export {
  generalValidation,
  registerValidation,
  departmentValidator,
  phoneValidation,
  employeeValidator,
  taskValidator,
  validateFiles
}
