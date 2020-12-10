import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  
  input {
    border: 2px solid ${props => props.theme.colors.border};
    border-radius: ${props => props.theme.sizes.borderRadius};
    padding: 10px 20px;
    outline: none;
  }
  input:focus {
    border-color: ${props => props.theme.colors.primary};
  }
`