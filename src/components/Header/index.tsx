import React, { useCallback, useState, useMemo } from 'react'
import { Link, useLocation, useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import * as Styles from './styles'

import logo from 'src/img/logo-header.png'
import plus from 'src/img/plus.svg'
import exit from 'src/img/exit.svg'
import menu from 'src/img/menu.svg'

import { resetToken } from 'src/store/ducks/user/action'

function Header () {
  const dispatch = useDispatch()
  const location = useLocation()
  const history = useHistory()

  const [isOpen, setIsOpen] = useState(false)
  
  const signOut = useCallback(() => {
    const confirm = window.confirm('Deseja mesmo sair?')
    
    if (!confirm) return;
    dispatch(resetToken())
    history.push('/')
  }, [dispatch, history])

  const renderAddCliente = useMemo(() => !location.pathname.match('/registrar') && (
    <li>
      <Styles.Add>
        <Link to="/registrar">
          <img src={plus} alt="icone adicionar" />
          novo cliente
        </Link>
      </Styles.Add>
    </li>
  ), [location])

  return (
    <Styles.Container>
      <Link to="/">
        <img src={logo} alt="logo Coobrastur" />
      </Link>
      <Styles.Menu onClick={() => setIsOpen(!isOpen )}>
        <img src={menu} alt="icone menu" />
      </Styles.Menu>
      <Styles.Nav state={isOpen}>
        <ul>
          { renderAddCliente }
          <li>
            <Styles.Exit onClick={signOut}>
              <img src={exit} alt="icone sair" />
              sair
            </Styles.Exit>
          </li>
        </ul>
      </Styles.Nav>
    </Styles.Container>
  )
}

export default React.memo(Header)
