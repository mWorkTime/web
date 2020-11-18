/**
 * getClassNameByStatus
 * @param {number|string} priority
 * @return {string}
 */
export const getClassNameByPriority = (priority) => {
  let clsName = ''
  if(+priority === 0) {
    clsName = 'low'
  } else if (+priority === 1) {
    clsName = 'medium'
  } else if (+priority === 2) {
    clsName = 'high'
  } else {
    clsName = 'very-high'
  }

  return clsName
}
