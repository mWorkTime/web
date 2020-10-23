const dictionary = {
  mustBeNameOfDepartment: 'Пожалуйста, введите название отдела!',
  mustBeNameOfDepartmentThreeDigits: 'Название должно состоять более чем с 3 символов',
}

export const departmentValidator = {
  validateDepartment: [
    {
      required: true,
      message: dictionary.mustBeNameOfDepartment
    },
    {
      pattern: /^(?=.{3,32}$)/,
      message: dictionary.mustBeNameOfDepartmentThreeDigits
    }
  ]
}
