import React from 'react'
import { useRoutes } from '../../routes'

import '../../styles/global.scss'

function App() {

  const routes = useRoutes(true)

  return <>{routes}</>
}

export default App
