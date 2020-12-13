import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Roboto', --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: ${props => props.theme.colors.color};
  }
  html, body, #root {
    width: 100%;
    height: 100%auto;
  }
  body {
    background: ${props => props.theme.colors.background};
  }
  button {
    background: none;
    border: none;
    text-transform: uppercase;
    cursor: pointer;
  }

  form {
    width: 100%;
  }
`

export const Container = styled.div`
  width: 100%;
  max-width: 820px;
  margin: 0 auto;
`

export default GlobalStyles

export const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
  img {
    width: 30px;
  }
  strong {
    color: ${props => props.theme.colors.primary};
    font-size: 1.4rem
  }
`
