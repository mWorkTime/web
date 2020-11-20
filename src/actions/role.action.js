import { FETCH_ALL_ROLE_SUCCESS, FETCH_ALL_ROLE_FAILURE,
  FETCH_USER_ROLE_SUCCESS, FETCH_USER_ROLE_FAILURE
} from '../types'
import { getRoles, getUserRole } from '../services/role.service'
import { dictionaryRoles } from '../items'
import { getErrorMsg } from '../utils'

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
    .catch((err) => dispatch({ type: FETCH_ALL_ROLE_FAILURE, message: getErrorMsg(err) }))
}

const fetchUserRole = (id) => (dispatch) => {
  getUserRole(id)
    .then(({ data: { code } }) => {
      dispatch({ type: FETCH_USER_ROLE_SUCCESS, role: code})
    } )
    .catch((err) => dispatch({ type: FETCH_USER_ROLE_FAILURE, error: getErrorMsg(err) }) )
}

export {
  fetchAllRole,
  fetchUserRole
}
