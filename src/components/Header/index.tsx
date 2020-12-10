import React from 'react'
import { Link } from 'react-router-dom'

import { Container } from './styles'

import logo from 'src/img/logo-header.png'
import plus from 'src/img/plus.svg'

function Header () {
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="logo Coobrastur" />
      </Link>
      <nav>
        <li>
          <button>
            <img src={plus} alt="icone adicionar" />
          </button>
        </li>
      </nav>
    </Container>
  )
}

export default Header
