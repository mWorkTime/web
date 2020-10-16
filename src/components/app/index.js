import React from 'react'
import Cookie from 'js-cookie'

import { useRoutes } from '../../routes'

import '../../styles/global.scss'

function App() {
  const token = Cookie.get('token')
  const routes = useRoutes(token)

  return <>{routes}</>
}

export default App
