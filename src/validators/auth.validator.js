const dictionary = {
  mustBeName: 'Пожалуйста, введите ваше имя!',
  mustBeEmail: 'Пожалуйста, введите ваш адрес электронной почты!',
  mustBeNameOfOrganization: 'Пожалуйста, введите название организации!',
  mustBeNameOfOrganizationThreeDigits: 'Название должно состоять более чем с 3 символов, но не более 20',
  mustBePass: 'Пожалуйста, введите ваш пароль!',
  mustBeNameThreeDigits: 'Имя должно состоять более чем с 3 символов, но не более 20',
  mustBeValidEmail: 'Введен неверный E-mail',
  mustBePassSixDigits: 'Пароль должен содержать 6 цифр, символов или более',
  mustBeConfirmed: 'Пароли дожны совпадать!',
  mustBeMatch: 'Два введенных вами пароля не совпадают!',
  mustContainUppercase: 'Пароль должен содержать 1 заглавную букву',
  mustContainLowercase: 'Пароль должен содержать 1 маленькую букву',
}

export const generalValidation = {
  validateEmail: [
    {
      required: true,
      message: dictionary.mustBeEmail
    },
    {
      type: 'email',
      message: dictionary.mustBeValidEmail
    }
  ],
  validatePassword: [
    {
      required: true,
      message: dictionary.mustBePass
    },
    {
      pattern: /^(?=.*[0-9])(?=.{6,})/,
      message: dictionary.mustBePassSixDigits
    }
  ]
}

export const registerValidation = {
  validateName: [
    {
      required: true,
      message: dictionary.mustBeName
    },
    {
      pattern: /^(?=.{3,20}$)/,
      message: dictionary.mustBeNameThreeDigits
    }
  ],
  validateOrganization: [
    {
      required: true,
      message: dictionary.mustBeNameOfOrganization
    },
    {
      pattern: /^(?=.{3,20}$)/,
      message: dictionary.mustBeNameOfOrganizationThreeDigits
    }
  ],
  validateRegisterPassword: [
    {
      required: true,
      message: dictionary.mustBePass
    },
    {
      pattern: /^(?=.*[0-9])(?=.{6,})/,
      message: dictionary.mustBePassSixDigits
    },
    {
      pattern: /^(?=.*[A-Z])/,
      message: dictionary.mustContainUppercase
    },
    {
      pattern: /^(?=.*[a-z])/,
      message: dictionary.mustContainLowercase
    }
  ],
  validateConfirmPassword: [
    {
      required: true,
      message: dictionary.mustBeConfirmed
    },
    ({ getFieldValue }) => ({
      validator(rule, value) {
        if (!value || getFieldValue('password') === value) {
          return Promise.resolve()
        }
        return Promise.reject(dictionary.mustBeMatch)
      }
    })
  ]
}
