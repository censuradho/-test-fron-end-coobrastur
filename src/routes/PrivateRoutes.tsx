import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Clientes from 'src/screens/Clientes'


function PrivateRoutes () {
  return (
    <Switch>
      <Route exact path="/" component={Clientes} />
    </Switch>
  )
}

export default PrivateRoutes
