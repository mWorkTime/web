// localstorage
export const moduleLocalStorage = (function () {
  function setItem(key, value) {
    return localStorage.setItem(key, JSON.stringify(value))
  }

  function getItem(key) {
    return localStorage.getItem(key)
  }

  function removeItem(key) {
    return localStorage.removeItem(key)
  }

  return {
    setItem,
    getItem,
    removeItem
  }
})()
