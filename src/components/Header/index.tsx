import React, { useCallback, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import * as Styles from './styles'

import logo from 'src/img/logo-header.png'
import plus from 'src/img/plus.svg'
import exit from 'src/img/exit.svg'
import menu from 'src/img/menu.svg'

import { resetToken } from 'src/store/ducks/user/action'

function Header () {
  const dispatch = useDispatch()
  const [isOpen, setIsOpen] = useState(false)

  const signOut = useCallback(() => {
    const confirm = window.confirm('Deseja mesmo sair?')

    if (!confirm) return;
    dispatch(resetToken())

  }, [dispatch])

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
          <li>
            <Styles.Add>
              <img src={plus} alt="icone adicionar" />
              novo cliente
            </Styles.Add>
          </li>
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

export default Header
