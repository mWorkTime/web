import { FETCH_ALL_ROLE_SUCCESS, FETCH_ALL_ROLE_FAILURE } from '../types'
import { getRoles } from '../services/role.service'
import { dictionaryRoles } from '../items'

const fetchAllRole = () => (dispatch) => {
  getRoles()
    .then(({ data: { roles } }) => {
      const convertingRoles = roles.reduce((acc, item) => {
        acc.push({ ...item, normalName: dictionaryRoles[item.name], id: item._id })
        return acc
      }, [])

      const rolesObj = roles.reduce((acc, item) => {
        return {
          ...acc,
          [item['_id']]: { name: item.name, code: item['role-code'] }
        }
      }, {})

      dispatch({ type: FETCH_ALL_ROLE_SUCCESS, roles: convertingRoles, payload: rolesObj })
    })
    .catch((err) => dispatch({ type: FETCH_ALL_ROLE_FAILURE, message: err?.message || err?.response?.data?.msg }))
}

export {
  fetchAllRole
}
