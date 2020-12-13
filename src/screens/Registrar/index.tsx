import React, { useCallback, useState } from 'react'
import { useHistory } from 'react-router-dom'

import Header from 'src/components/Header'
import Input from 'src/components/Input'
import Button from 'src/components/Button'

import * as Styles from './styles'
import { Title } from 'src/themes/GlobalStyles'

import api from 'src/services/reqres'

import perfil from 'src/img/user.svg'

const baseUser = { name: '', job: '' }

function Registrar () {
  const history = useHistory()

  const [user, setUser] = useState(baseUser)
  const [loading, setLoading] = useState(false)

  const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target

    setUser(prevState => ({ ...prevState, [name]: value }))
  }, [])

  const clearUserState = useCallback(() => {
    setUser(baseUser)
  }, [])

  const handleSubmit = useCallback(async (event: React.FormEvent) => {
    event.preventDefault()

    try {
      setLoading(true)
      await api.post('/users', user)
      alert('Cadastro realizado com sucesso!')
      clearUserState()
    } 
    catch (err) {}
    finally {
      setLoading(false)
    }

  }, [user, clearUserState])


  const goBack = useCallback(() => history.push('/') ,[history])

  return (
    <>
      <Header />
      <Styles.Main>
        <Styles.Container>
          <Title>
            <img src={perfil} alt="icone perfil" />
            <strong>Painel de Clientes</strong>
          </Title>
          <Styles.Form onSubmit={handleSubmit}>
            <fieldset>
              <legend>Novo cliente</legend>
              <span>Informe os campos a seguir para cadastrar um novo cliente</span>
              <Styles.InputField>
                <Input 
                  label="Nome"
                  id="name"
                  name="name"
                  value={user.name}
                  required
                  onChange={handleChange}
                />
                <Input 
                  label="Profissão"
                  id="job"
                  name="job"
                  value={user.job}
                  required
                  onChange={handleChange}
                />
              </Styles.InputField>
            </fieldset>
            <Styles.SubmitContainer>
              <Button
                stroke
                onClick={goBack}
                disabled={loading}
              >Voltar</Button>
              <Button
                fill
                disabled={loading}
              >Cadastrar</Button>
            </Styles.SubmitContainer>
          </Styles.Form>
        </Styles.Container>
      </Styles.Main>
    </>
  )
}

export default Registrar
