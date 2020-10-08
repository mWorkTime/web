import React from 'react'
import Login from '../auth-forms/login'
import Register from '../auth-forms/register'
import Welcome from '../../pages/welcome'
import ConfirmPage from '../../pages/confirm'

import { Switch, Route } from 'react-router-dom'

import '../../styles/global.scss'

function App() {
  return (
    <Switch>
      <Route path={'/'} exact component={Welcome} />
      <Route path={'/auth/register'} component={Register} />
      <Route path={'/auth/login'} component={Login} />
      <Route path={'/confirm/:token'} render={({ match }) => {
        const { token } = match.params
        return <ConfirmPage token={token} />
      }} />
      <Route render={() => <h1>Page not found</h1>} />
    </Switch>
  )
}

export default App
