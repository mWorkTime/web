import Axios from 'axios'
import { message } from 'antd'

const api = Axios.create({
  baseURL: 'http://localhost:5000',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
})

// /** @type {Array} */
// let requestsToRefresh = []
//
// /** @type {boolean} */
// let isRefreshRequesting = false

api.interceptors.response.use((res) => {
  return res
}, (err) => {
  const { response } = err

  if (response.status === 400 && response.data && typeof response.data === 'object' && response.data.error) {
    if (response.data.needResend || response.data.needRegister) {
      return Promise.reject(err)
    }
    message.error(response.data.error)
  }

  if (response.status === 422 && response.data && typeof response.data === 'object' && response.data.error) {
    message.error(response.data.error)
    return Promise.reject(err)
  }

  if (response.status === 500) {
    return Promise.reject(err)
  }

  // if (response.status === 401) {
  //   const currentToken = Cookies.get('token')
  //   const refresh = moduleLocalStorage.getItem('refresh')
  //   const name = moduleLocalStorage.getItem('name')
  //
  //   if (!currentToken) {
  //     return Promise.reject(err)
  //   }
  //
  //   if (!isRefreshRequesting) {
  //     isRefreshRequesting = true
  //
  //     api.post('/auth/refresh', { refresh, name })
  //       .then((resp) => {
  //
  //         clearLocalStorageAndCookie()
  //         setLocalStorageAndCookie(resp.data)
  //         requestsToRefresh.forEach((cb) => cb(resp.data.token))
  //         message.success(resp.data.success)
  //
  //       })
  //       .catch(() => {
  //         clearLocalStorageAndCookie()
  //         requestsToRefresh.forEach((cb) => cb(null))
  //       })
  //       .finally(() => {
  //         isRefreshRequesting = false
  //         requestsToRefresh = []
  //       })
  //   }
  //
  //   return new Promise((resolve, reject) => {
  //     // In our variable (requests that expect a new token
  //     // from the first request), we add a callback,
  //     // which the first request to execute
  //     requestsToRefresh.push((token) => {
  //       if (token) {
  //         config.headers.Authorization = 'Bearer ' + token
  //         resolve(api(config))
  //       }
  //       // // If the first request could not update the token, we
  //       // // must return the basic request processing logic
  //       reject(Promise.reject(err))
  //     })
  //   })
  // }
  return Promise.reject(err)
})

export default api
