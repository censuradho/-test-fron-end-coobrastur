import React, { ReactNode } from 'react'

import  * as Styles from './styles'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  fill?: boolean,
  children: ReactNode
}

function Button ({ fill, children,...props}: ButtonProps) {
  return (
    <Styles.Button 
      fill={fill}
      {...props}  
    >
      {children}
    </Styles.Button>
  )
}

export default Button
