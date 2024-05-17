import styled from 'styled-components'
import { Logo } from './Logo'

export const Navigation = () => {
  return (
    <Section>
      <NabBar>
        <Logo />
      </NabBar>
    </Section>
  )
}

const Section = styled.section`
  width: 100vw;
  background-color: ${({theme}) => theme.body};
`
const NabBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 85%;
  height: ${({theme}) => theme.navHeight};
  margin: 0 auto;

`
