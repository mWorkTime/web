import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Welcome from '../pages/welcome'
import Register from '../components/auth-forms/register'
import Login from '../components/auth-forms/login'
import ConfirmPage from '../pages/confirm'
import UserDashboard from '../components/user/dashboard/user-dashboard'
import UserEmployees from '../components/user/employees/user-employees'
import UserDashboardEdit from '../components/user/dashboard/user-dashboard-edit'
import UserTasks from '../components/user/tasks/user-tasks'
import UserReports from '../components/user/reports/user-reports'
import UserReview from '../components/user/review/user-review'

export const useRoutes = isAuth => {
  if (isAuth) {
    return (
      <Switch>
        <Route path='/dashboard' exact component={UserDashboard} />
        <Route path='/employees' component={UserEmployees} />
        <Route path='/dashboard/user/edit' component={UserDashboardEdit}/>
        <Route path='/tasks' component={UserTasks}/>
        {/*<Route path='/reports' component={UserReports}/>*/}
        <Route path='/review' component={UserReview}/>
        <Redirect to={'/dashboard'} />
      </Switch>
    )
  }

  return (
    <Switch>
      <Route path={['/', '/welcome']} exact component={Welcome} />
      <Route path={'/auth/register'} component={Register} />
      <Route path={'/auth/login'} component={Login} />
      <Route path={'/confirm/:token'} render={({ match }) => {
        const { token } = match.params
        return <ConfirmPage token={token} />
      }} />
      <Redirect to={'/'} />
    </Switch>
  )
}
