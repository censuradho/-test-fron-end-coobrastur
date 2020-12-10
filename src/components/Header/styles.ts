import styled from 'styled-components'

export const Container = styled.header`
  background: ${props => props.theme.colors.primary};
  padding: 1rem;

  img {
    max-width: 200px;
  }

  li {
    list-style: none;
  }
`