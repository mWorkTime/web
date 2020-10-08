import Cookies from 'js-cookie'
import api from '../axios/axios-app'
import { moduleLocalStorage } from '../services/local-storage.service'

/**
 * clearLocalStorageAndCookie. Remove all data from local storage, cookie and remove header 'Authorization'.
 * @return {void}
 */
export const clearLocalStorageAndCookie = () => {
  Cookies.remove('token')
  api.defaults.headers.Authorization = null
  moduleLocalStorage.removeItem('refresh')
  moduleLocalStorage.removeItem('user')
  moduleLocalStorage.removeItem('exp')
}

/**
 * setLocalStorageAndCookie. Set some data to local storage, cookie and set header 'Authorization'.
 * @param {object} data
 * @return {void}
 */
export const setLocalStorageAndCookie = (data) => {
  Cookies.set('token', data.token, { expires: 3600 })
  api.defaults.headers.Authorization = `Bearer ${data.token.token}`
  moduleLocalStorage.setItem('user', data.user.username)
  moduleLocalStorage.setItem('refresh', data.refresh || Math.floor(Date.now() / 1000) + 86400)
  moduleLocalStorage.setItem('exp', data.exp)
}
