import React, { useState, useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Input from 'src/components/Input'
import { Main } from './styles'
import Button from 'src/components/Button'

import logo from 'src/img/logo.png'
import reqres from 'src/services/reqres'

import { getToken } from 'src/store/ducks/user/action'

const baseCredentials = {
  email: 'eve.holt@reqres.in',
  password: 'cityslicka'
}

function Login () {
  const dispatch = useDispatch()
  const user = useSelector(value => value.user)

  const [credentials, setCredentials] = useState(baseCredentials)
  
  const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) =>  {
    const { name, value } = event.target
    setCredentials(prevState => ({ ...prevState, [name]: value }))
  }, [])

  const handleSubmit = useCallback(async (event: React.FormEvent) => {
    event.preventDefault()
    
    const { data: { token } } = await reqres.post('/login', credentials)

    dispatch(getToken(token))

  }, [credentials, dispatch])


  useEffect(() => {
    console.log(user)
  }, [user])

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
        <Button
          type="submit" 
          fill
        >Acessar o sistema</Button>
      </form>
    </Main>
  )
}

export default Login
