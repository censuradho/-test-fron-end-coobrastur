import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
  from {
    opacity: 0;
    visibility: hidden
  }
  to {
    opacity: 1;
    visibility: visible
  }
`


export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, .4);
  animation: ${fadeIn} .4s forwards;
`

const ScaleIn = keyframes`
  from {
    transform: Scale(.5)
  }
  to {
    transform: Scale(1)

  }
`

export const Card = styled.div`
  background: ${props => props.theme.colors.background};
  padding: 1rem;
  max-width: max-content;
  animation: ${ScaleIn} .5s forwards;
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
`

