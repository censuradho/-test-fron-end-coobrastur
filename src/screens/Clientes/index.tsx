import React, { useState, useCallback, useMemo, useEffect } from 'react'

import Header from 'src/components/Header'
import Button from 'src/components/Button'
import Modal from 'src/components/Modal'
import Input from 'src/components/Input'
import Loading from 'src/components/ActivityIndicator'

import * as Styles from './styles'
import { Title } from 'src/themes/GlobalStyles'

import perfil from 'src/img/user.svg'

import api from 'src/services/reqres'

interface User {
  id: number,
  email?: string,
  first_name?: string,
  last_name?: string,
  avatar?: string,
}

interface ApiUser {
  data: User[], 
  total: number, 
  total_pages: number 
}


const baseCurrentUser = { name: '', job: '', id: 0 }

function Clientes () {
  const [user, setUser] = useState<User[]>()
  const [page, setPage] = useState(1)
  const [length, setLength] = useState(0)
  const [totalPages, setTotalPages] = useState(0)
  const [editMode, setEditMode] = useState(false)
  const [currentUser, setCurrentUser] = useState(baseCurrentUser)
  const [loading, setLoading] = useState(false)

  const getUsers = useCallback(async (page) => {
    const { data } = await api.get<ApiUser>(`/users?page=${page}`)
    setUser(data.data)
    setLength(data.total)
    setTotalPages(data.total_pages)
  }, [])

  const nextBlock = useMemo(() => (page === totalPages), [totalPages, page])

  const next = useCallback(() => {
    if (nextBlock) return;
  
    setPage(prevState => prevState + 1)
  }, [nextBlock])

  const backBlock = useMemo(() => (page === 1), [page])

  const back = useCallback(() => {
    if (backBlock) return;
    setPage(prevState => prevState - 1)
  }, [backBlock])

  const handleCloseEditMode = useCallback(() => {
    const confirm = window.confirm('Quer mesmo sair?')

    if (!confirm) return

    setCurrentUser(baseCurrentUser)
    setEditMode(false)
  }, [])

  const handleOpenEditMode = useCallback((id: number) => {
    setCurrentUser(prevState => ({ ...prevState, id }))
    setEditMode(true)
  }, [])

  const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target
    setCurrentUser(prevState => ({ ...prevState, [name]: value }))
  }, [])

  const handleSubmit = useCallback(async (event: React.FormEvent) => {
    event.preventDefault()
    try {
      setLoading(true)

      const options = {
        job: currentUser.job,
        name: currentUser.name
      }

      await api.patch(`/user/${currentUser.id}`, options)

      getUsers(page)

      setCurrentUser(baseCurrentUser)
      setEditMode(false)

      alert('Salvo com sucesso!!!')
    } 
    catch (err) {}
    finally {
      setLoading(false)
    }
  }, [currentUser, getUsers, page])

  const renderCardItem = useMemo(() => user?.map(value => (
    <Styles.CardItem key={value.id}>
      <img src={value?.avatar} alt={`${value?.first_name} ${value?.last_name}`} />
      <strong>{`${value?.first_name} ${value?.last_name}`}</strong>
      <span>{value.email}</span>
      <Button 
        stroke
        onClick={() => handleOpenEditMode(value.id)}
      >
        Editar
      </Button>
    </Styles.CardItem>
  )), [user, handleOpenEditMode])

  useEffect(() => {
    getUsers(page)
  }, [getUsers, page])

  return (
    <>
      <Header />
      <Modal 
        visible={editMode} 
        onClickOutside={handleCloseEditMode}
      >
        <Styles.Form onSubmit={handleSubmit}>
          <Input 
            label="Nome"
            name="name"
            value={currentUser.name}
            onChange={handleChange}
            required
          />
          <Input 
            label="Profissão"
            name="job"
            value={currentUser.job}
            onChange={handleChange}
            required
          />
          <Button 
            fill
            type="submit"
            disabled={loading}
          >
              { !loading && 'Alterar' }
            { loading && <Loading /> }
          </Button>
        </Styles.Form>
      </Modal>
      <Styles.Main>
        <Styles.Container>
          <Title>
            <img src={perfil} alt="icon perfil" />
            <strong>Painel de clientes</strong>
          </Title>
          <Styles.Text>Página atual: {page}</Styles.Text>
          <Styles.CardList>
            { renderCardItem }
          </Styles.CardList>
          <Styles.Text>Total de Clientes: {length}</Styles.Text>
          <Styles.Controllers>
            <Button 
              stroke
              onClick={back}
              disabled={backBlock}
            >Anterior</Button>
            <Button 
              stroke
              onClick={next}
              disabled={nextBlock}
            >Próximo
            </Button>
          </Styles.Controllers>
        </Styles.Container>
      </Styles.Main>
    </>
  )
}

export default Clientes
