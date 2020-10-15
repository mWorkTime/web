import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Welcome from '../pages/welcome'
import Register from '../components/auth-forms/register'
import Login from '../components/auth-forms/login'
import ConfirmPage from '../pages/confirm'
import UserDashboard from '../components/user/user-dashboard'
import PageNotFound from '../pages/page-404'

export const useRoutes = isAuthenticated => {
  if (isAuthenticated) {
    return (
      <Switch>
        <Route path='/' exact component={UserDashboard} />
        <Route render={() => <PageNotFound />} />
      </Switch>
    )
  }

  return (
    <Switch>
      <Route path={'/'} exact component={Welcome} />
      <Route path={'/auth/register'} component={Register} />
      <Route path={'/auth/login'} component={Login} />
      <Route path={'/confirm/:token'} render={({ match }) => {
        const { token } = match.params
        return <ConfirmPage token={token} />
      }} />
      <Route render={() => <PageNotFound />} />
    </Switch>
  )
}
