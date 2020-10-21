import Axios from 'axios'
import { message } from 'antd'
import store from '../store'
import { moduleLocalStorage } from '../services/local-storage.service'
import { clearLocalStorage, setLocalStorage } from '../utils/clear-set-auth'
import { setAuthToken } from '../actions'
import { CLEAR_USER_DATA } from '../types'

const api = Axios.create({
  baseURL: process.env.REACT_APP_BASE_SERVER_URI,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
})

api.interceptors.request.use(function (config) {
  const token = store.getState().userData.token || moduleLocalStorage.getItem('token')

  config.headers.Authorization = `Bearer ${token}`
  return config
})

/** @type {Array} */
let requestsToRefresh = []

/** @type {boolean} */
let isRefreshRequesting = false

api.interceptors.response.use((res) => {
  return res
}, (err) => {
  const { response, config } = err

  if (response.status === 400 && response.data && typeof response.data === 'object' && response.data.error) {
    if (response.data.needResend || response.data.needRegister) {
      return Promise.reject(err)
    }
    message.error(response.data.error)
  }

  if (response.status === 422 && response.data && typeof response.data === 'object' && response.data.error) {
    message.error(response.data.error)
  }

  if (response.status === 401) {
    const currentToken =  moduleLocalStorage.getItem('token')
    const refresh = moduleLocalStorage.getItem('refresh')

    if (!currentToken) {
      return Promise.reject(err)
    }

    if (!isRefreshRequesting) {
      isRefreshRequesting = true

      api.post('/auth/refresh', { refresh })
        .then((resp) => {
          store.dispatch(setAuthToken(resp.data.token))

          clearLocalStorage()
          setLocalStorage(resp.data)
          requestsToRefresh.forEach((cb) => cb(resp.data.token))
          message.success(resp.data.success)

        })
        .catch(() => {
          store.dispatch({ type: CLEAR_USER_DATA })
          clearLocalStorage()
          requestsToRefresh.forEach((cb) => cb(null))
        })
        .finally(() => {
          isRefreshRequesting = false
          requestsToRefresh = []
        })
    }

    return new Promise((resolve, reject) => {
      // In our variable (requests that expect a new token
      // from the first request), we add a callback,
      // which the first request to execute
      requestsToRefresh.push((token) => {
        if (token) {
          config.headers.Authorization = `Bearer ${token}`
          resolve(api(config))
        }
        // // If the first request could not update the token, we
        // // must return the basic request processing logic
        reject(Promise.reject(err))
      })
    })
  }
  return Promise.reject(err)
})

export default api
