import React from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './GlobalStyles'

import light from './light'


const Theme: React.FC = ({ children }) => {
	return (
		<ThemeProvider theme={light}>
			<GlobalStyles />
			{ children }
		</ThemeProvider>
	)
}

export default Theme