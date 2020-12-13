import styled from 'styled-components'

import { Container as Cont } from 'src/themes/GlobalStyles'

export const Main = styled.main`
  height: 100vh;
  padding: 3rem 1rem;
`

export const Form = styled.form`
  max-width: 600px;
  
  fieldset {
    border: none;
    margin: 4rem 0;
  }
  legend {
    font-size: 1.3rem;
    font-weight: bold;
  }
`

export const InputField = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`

export const SubmitContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`
export const Container = styled(Cont)``