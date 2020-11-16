const dictionary = {
  mustBeName: 'Пожалуйста, введите название задания!',
  mustBeNameMin: 'Название должно содержать от 3 до 15 символов',
  mustBeRuntime: 'Пожалуйста, выберите даты!',
  mustBeDesc: 'Введите описание',
  mustBeDescMin: 'Напишите описание от 10 до 150 символов',
  mustBePriority: 'Выберите приоритет для задания!'
}

export const taskValidator = {
  validateNameTask: [
    {
      required: true,
      message: dictionary.mustBeName
    },
    {
      pattern: /^(?=.{3,15}$)/,
      message: dictionary.mustBeNameMin
    }
  ],
  validateDesc: [
    {
      required: true,
      message: dictionary.mustBeDesc
    },
    {
      pattern: /^(?=.{10,150}$)/,
      message: dictionary.mustBeDescMin
    }
  ],
  validateDate: {
    rules: [
      {
        type: 'array',
        required: true,
        message: dictionary.mustBeRuntime
      }]
  },
  validatePriority: [
    {
      required: true,
      message: dictionary.mustBePriority
    }
  ]
}
