import styled from 'styled-components'
import { Container as Cont } from 'src/themes/GlobalStyles'

export const Main = styled.main`
  padding: 3rem 1rem;

`

export const Container = styled(Cont)`

`


export const CardItem = styled.li`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
  justify-content: space-between;
  
  strong {
    color: ${props => props.theme.colors.primary};
    margin-right: auto;
  }
  span {
    margin-right: auto;
  }
  img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }
`
export const CardList = styled.ul`
  padding: 3rem 0;
  width: 100%;

  ${CardItem} + ${CardItem} {
    margin-top: 3rem;
  }
`

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

export const Controllers = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 3rem;
  margin: 0 auto;
`

export const Text = styled.span`
  font-size: 1.3rem;
`