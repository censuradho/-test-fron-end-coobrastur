import React, { useState, useCallback, useMemo, useEffect } from 'react'

import Header from 'src/components/Header'
import Button from 'src/components/Button'
import Modal from 'src/components/Modal'

import * as Styles from './styles'

import perfil from 'src/img/perfil.svg'

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

function Clientes () {
  const [user, setUser] = useState<User[]>()
  const [page, setPage] = useState(1)
  const [length, setLength] = useState(0)
  const [totalPages, setTotalPages] = useState(0)

  const [editMode, setEditMode] = useState(false)

  const getInitialUsers = useCallback(async (page) => {
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

    setEditMode(false)
  }, [])

  const handleOpenEditMode = useCallback(() => {
    setEditMode(true)
  }, [])

  const renderCardItem = useMemo(() => user?.map(value => (
    <Styles.CardItem key={value.id}>
      <img src={value?.avatar} alt={`${value?.first_name} ${value?.last_name}`} />
      <strong>{`${value?.first_name} ${value?.last_name}`}</strong>
      <span>{value.email}</span>
      <Button 
        stroke
        onClick={handleOpenEditMode}
      >Editar</Button>
    </Styles.CardItem>
  )), [user, handleOpenEditMode])

  useEffect(() => {
    getInitialUsers(page)
  }, [getInitialUsers, page])

  return (
    <>
      <Header />
      <Modal 
        visible={editMode} 
        onClickOutside={handleCloseEditMode}
      />
      <Styles.Main>
        <Styles.Container>
          <Styles.Title>
            <img src={perfil} alt="icon perfil" />
            <strong>Painel de clientes</strong>
          </Styles.Title>
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
