import styled from 'styled-components'

interface ButtonStylesProps {
  fill?: boolean,
  stroke?: boolean
}

export const Button = styled.button.attrs((props: ButtonStylesProps) => ({ ...props }))`
  background: ${props => props.fill ? props.theme.colors.primary : ''};
  width: ${props => props.type === 'submit' ? '100%' : 'max-content'};
  height: 3rem;
  padding: 1rem;
  border-radius: ${props => props.theme.sizes.borderRadius};
  color: ${props => props.fill ? props.theme.colors.background : props.theme.colors.color || props.stroke ? props.theme.colors.primary : props.theme.colors.color};
  text-align: center;
  transition: .3s;
  display: flex;
  align-items: center;
  justify-content: center;

  border: ${props => props.stroke ? `2px solid ${props.theme.colors.primary}` : ''};

  :hover {
    background: ${props => props.fill ? props.theme.colors.primaryDark : props.theme.colors.primary};
    color: ${props => props.stroke ? props.theme.colors.background : props.theme.colors.primary}
  }

  :disabled {
    background: ${props => props.theme.colors.disabled}
  }
`