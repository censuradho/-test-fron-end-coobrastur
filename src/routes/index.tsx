import React from 'react'
import { BrowserRouter, Route  } from 'react-router-dom'

import Login from 'src/screens/Login'

function Routes () {
  return (
    <BrowserRouter>
      <Route component={Login} path="/" />
    </BrowserRouter>
  )
}

export default Routes
