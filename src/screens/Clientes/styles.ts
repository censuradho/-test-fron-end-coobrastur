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
  flex-wrap: wrap;
  
  strong {
    color: ${props => props.theme.colors.primary};
    margin-right: auto;
    display: block; 
  }
  span {
    margin-right: auto;
    width: 100%;
    display: block; 
  }
  img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }

  @media (min-width: 720px) {
    strong {
      display: inline;
    }
    span {
      display: inline;
      width: max-content;
    }
  }
`
export const CardList = styled.ul`
  padding: 3rem 0;
  width: 100%;

  ${CardItem} + ${CardItem} {
    margin-top: 3rem;
  }
`

export const Form = styled.form`
  width: 100%;
  max-width: 400px;
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
`

export const Controllers = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 3rem;
  margin: 2rem auto;
`

export const Text = styled.span`
  font-size: 1.3rem;
`