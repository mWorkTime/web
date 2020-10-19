import React, { useEffect } from 'react'
import { moduleLocalStorage } from '../../services/local-storage.service'
import { useRoutes } from '../../routes'
import { useSelector, useDispatch } from 'react-redux'
import { setAuthToken } from '../../actions'

import '../../styles/global.scss'

function App() {
  const state = useSelector(({ userData }) => userData)
  const dispatch = useDispatch()
  const token = moduleLocalStorage.getItem('token')

  useEffect(() => {
    if (token) {
      dispatch(setAuthToken(token))
    }
  }, [token, dispatch])

  const routes = useRoutes(token || state.token)

  return <>{routes}</>
}

export default App
