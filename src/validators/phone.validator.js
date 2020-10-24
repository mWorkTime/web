const dictionary = {
  mustBePhoneNumber: 'Пожалуйста, введите номер телефона',
  mustBeValidPhoneNumber: 'Введите корректный номер телефона'
}

export const phoneValidation = {
  validateNumber: [
    {
      required: true,
      message: dictionary.mustBePhoneNumber
    },
    {
      pattern: /^(?=.{10})[0](\d{2})?[\s]?(\d{3})[\s]?(\d{2})[\s]?(\d{2})$/,
      message: dictionary.mustBeValidPhoneNumber
    }
  ]
}
