import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Login from 'src/screens/Login'


function PublicRoutes () {
  return (
    <Switch>
      <Route path="/" component={Login} />
    </Switch>
  )
}

export default PublicRoutes
