import styled from 'styled-components'

interface ButtonStylesProps {
  fill?: boolean
}

export const Button = styled.button.attrs((props: ButtonStylesProps) => ({ ...props }))`
  background: ${props => props.fill ? props.theme.colors.primary : ''};
  width: ${props => props.type === 'submit' ? '100%' : 'max-content'};
  padding: 1rem;
  border-radius: ${props => props.theme.sizes.borderRadius};
  color: ${props => props.fill ? props.theme.colors.background : props.theme.colors.color};
  text-align: center;
  transition: .3s;
  
  :hover {
    background: ${props => props.fill ? props.theme.colors.primaryDark : props.theme.colors.primary}
  }
`