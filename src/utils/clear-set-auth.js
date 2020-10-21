import { moduleLocalStorage } from '../services/local-storage.service'

/**
 * clearLocalStorageAndCookie. Remove all data from local storage, cookie and remove header 'Authorization'.
 * @return {void}
 */
export const clearLocalStorage = () => {
  moduleLocalStorage.removeItem('refresh')
  moduleLocalStorage.removeItem('user')
  moduleLocalStorage.removeItem('exp')
  moduleLocalStorage.removeItem('token')
}

/**
 * setLocalStorageAndCookie. Set some data to local storage, cookie and set header 'Authorization'.
 * @param {object} data
 * @return {void}
 */
export const setLocalStorage = (data) => {
  moduleLocalStorage.setItem('user', data.user.username)
  moduleLocalStorage.setItem('refresh', data.refresh || Math.floor(Date.now() / 1000) + process.env.REACT_APP_REFRESH_TIME_TOKEN)
  moduleLocalStorage.setItem('exp', data.exp)
  moduleLocalStorage.setItem('token', data.token)
}
