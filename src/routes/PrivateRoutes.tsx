import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Clientes from 'src/screens/Clientes'
import Registrar from 'src/screens/Registrar'

function PrivateRoutes () {
  return (
    <Switch>
      <Route exact path="/" component={Clientes} />
      <Route path="/registrar" component={Registrar} />
    </Switch>
  )
}

export default PrivateRoutes
