import { moduleLocalStorage } from '../services/local-storage.service'

/**
 * clearLocalStorageAndCookie. Remove all data from local storage, cookie and remove header 'Authorization'.
 * @return {void}
 */
export const clearLocalStorage = () => {
  moduleLocalStorage.removeItem('refresh')
  moduleLocalStorage.removeItem('user')
  moduleLocalStorage.removeItem('name')
  moduleLocalStorage.removeItem('exp')
  moduleLocalStorage.removeItem('token')
  moduleLocalStorage.removeItem('nameOrg')
}

/**
 * setLocalStorageAndCookie. Set some data to local storage, cookie and set header 'Authorization'.
 * @param {object} data
 * @return {void}
 */
export const setLocalStorage = (data) => {
  const refreshTime = parseInt(process.env.REACT_APP_REFRESH_TIME_TOKEN)
  moduleLocalStorage.setItem('user', data.user)
  moduleLocalStorage.setItem('refresh', data.refresh || Math.floor(Date.now() / 1000) + refreshTime)
  moduleLocalStorage.setItem('exp', data.exp)
  moduleLocalStorage.setItem('name', data.name)
  moduleLocalStorage.setItem('nameOrg', data.nameOrg)
  moduleLocalStorage.setItem('token', data.token)
}
