import React from 'react'
import { BrowserRouter, Route, Redirect  } from 'react-router-dom'
import { useSelector } from 'react-redux'

import PublicRoutes from './PublicRoutes'
import PrivateRoutes from './PrivateRoutes'

function Routes () {
  const { token } = useSelector(value => value.user)

  return (
    <BrowserRouter>
      { !token && <Redirect to={{ pathname: '/' }} /> }
      { !token && <Route path="/" component={PublicRoutes} /> }
      { token && <Route path="/" component={PrivateRoutes} /> }
    </BrowserRouter>
  )
}

export default Routes
