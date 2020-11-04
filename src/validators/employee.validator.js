const dictionary = {
  mustBeGender: 'Пожалуйста, выберите пол',
  mustBeRoles: 'Пожалуйста, выберите роль',
  mustBeDepartment: 'Пожалуйста, выберите отдел',
  mustBeSurname: 'Введите фамилию',
  mustBeSurnameThreeDigits: 'Фамилия должна состоять более чем с 3 символов, но не более 20',
}

export const employeeValidator = {
  validateGender: [
    {
      required: true,
      message: dictionary.mustBeGender
    }
  ],
  validateRoles: [
    {
      required: true,
      message: dictionary.mustBeRoles
    }
  ],
  validateDepartment: [
    {
      required: true,
      message: dictionary.mustBeDepartment
    }
  ],
  validateSurname: [
    {
      required: true,
      message: dictionary.mustBeSurname
    },
    {
      pattern: /^(?=.{3,20}$)/,
      message: dictionary.mustBeSurnameThreeDigits
    }
  ],
}
