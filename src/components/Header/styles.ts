import styled from 'styled-components'

interface NavStyleProps {
  state?: boolean
}

export const Container = styled.header`
  background: ${props => props.theme.colors.primary};
  padding: 1rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;


  img:first-child {
    max-width: 150px;
  }

  li {
    list-style: none;
  }
`
export const Nav = styled.nav.attrs((props: NavStyleProps) => ({ ...props}))`
  position: fixed;
  width: 100%;
  max-width: 270px !important;
  height: 100vh;
  top: 0;
  padding: 1rem;
  left: 0;
  background: ${props => props.theme.colors.primary};
  transform: ${props => !props.state ? 'translateX(-100%)' : 'translateX(0)'};
  transition: .3s;

  button {
    background: ${props => props.theme.colors.foreground};
    padding: .6rem;
    display: flex;
    align-items: center;
    gap: .3rem;
    border-radius: ${props => props.theme.sizes.borderRadius};
  }
`

export const Exit = styled.button`
  display: flex;
  align-items: center;
  gap: .4rem;
  color: ${props => props.theme.colors.background};
  margin-left: auto;
  img {
    object-fit: contain;
    height: 100%;
  }
  :hover {
    opacity: .7;
  }
`

export const Menu = styled.button`
  width: 40px;
  height: 40px;
  margin-left: 30px;

  filter: invert();
  img {
    object-fit: contain;
    width: 100%100vh;
  }
`