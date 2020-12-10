import React from 'react';
import { Provider } from 'react-redux'

import Routes from 'src/routes'
import ThemeProvider from 'src/themes'
import store from './store'


function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <Routes />
      </ThemeProvider>
    </Provider>
  )
}

export default App;
