/**
 * @param {object} obj
 * @return {[]}
 */
export const convertRole = (obj) => {
  const { rolesObj, data } = obj

  return rolesObj[data.role]
}
