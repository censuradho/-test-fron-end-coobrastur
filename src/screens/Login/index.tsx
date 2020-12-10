import React, { useState, useCallback } from 'react'

import Input from 'src/components/Input'
import { Main } from './styles'
import Button from 'src/components/Button'

import logo from 'src/img/logo.png'
import reqres from 'src/services/reqres'

const baseCredentials = {
  email: '',
  password: ''
}

function Login () {

  const [credentials, setCredentials] = useState(baseCredentials)
  
  const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) =>  {
    const { name, value } = event.target
    setCredentials(prevState => ({ ...prevState, [name]: value }))
  }, [])

  const handleSubmit = useCallback(async (event: React.FormEvent) => {
    event.preventDefault()
    
    const { data } = await reqres.post('/login', credentials)

    
  }, [credentials])

  return (
    <Main>
      <img src={logo} alt="logo Coobrastur" />
      <form onSubmit={handleSubmit}>
        <Input 
          label="E-mail"
          name="email"
          type="email"
          onChange={handleChange}
          value={credentials.email}
        />
        <Input 
          label="Senha"
          name="password"
          type="password"
          onChange={handleChange}
          value={credentials.password}
        />
        <Button fill>Acessar o sistema</Button>
      </form>
    </Main>
  )
}

export default Login
