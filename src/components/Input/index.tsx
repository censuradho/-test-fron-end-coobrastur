import React from 'react'

import { Container } from './styles'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string,
}

function Input ({ label, ...props }: InputProps) {
  return (
    <Container>
      <label htmlFor={props.id}>{label}</label>
      <input {...props} />
    </Container>
  ) 
}

export default React.memo(Input)
