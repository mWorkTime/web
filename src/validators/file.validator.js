import { message } from 'antd'

const isPositive = (value) => value === true

/**
 * fileValidation.Looking for type and size file and return message or true.
 * @param {Array} fileList
 * @return {MessageType|boolean}
 */
export const validateFiles = (fileList) => {
  let arr1 = []
  let arr2 = []
  const allowedTypes = /jpeg|jpg|png|doc|docx|pdf/

  if (fileList.length > 4) {
    message.error('Максимум можно загружать до 4 файлов!')
    return false
  }

  for (let i = 0; i < fileList.length; i++) {
    if (allowedTypes.test(fileList[i].type)) {
      arr1.push(true)
    } else {
      arr1.push(false)
    }
  }

  for (let i = 0; i < fileList.length; i++) {
    if (fileList[i].size < 3000000) {
      arr2.push(true)
    } else {
      arr2.push(false)
    }
  }

  const isValidTypes = arr1.every(isPositive)
  const isValidSize = arr2.every(isPositive)

  if (!isValidTypes) {
    message.error('Загружать можно файлы только с таким разширением: .png/.jpg/.jpeg/.doc/.docx/.pdf')
    return false
  }

  if (!isValidSize) {
    message.error('Размер файла не должен привышать 3МБ')
    return false
  }

  return true
}
