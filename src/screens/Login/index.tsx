import React, { useState, useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Input from 'src/components/Input'
import { Main } from './styles'
import Button from 'src/components/Button'
import Loader from 'src/components/ActivityIndicator'

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

  const [loading, setLoading] = useState(false)

  const [credentials, setCredentials] = useState(baseCredentials)
  
  const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) =>  {
    const { name, value } = event.target
    setCredentials(prevState => ({ ...prevState, [name]: value }))
  }, [])

  const handleSubmit = useCallback(async (event: React.FormEvent) => {
    event.preventDefault()
    
    try {
      setLoading(true)
      const { data: { token } } = await reqres.post('/login', credentials)

      dispatch(getToken(token))
    } 
    catch (err) {}
    finally {
      setLoading(false)
    }

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
          disabled={loading}
        >
          { loading ? <Loader /> : 'Acessar o sistema' }
        </Button>
      </form>
    </Main>
  )
}

export default Login
