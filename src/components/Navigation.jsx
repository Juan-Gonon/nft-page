import styled from 'styled-components'

export const Navigation = () => {
  return (
    <Section>
      Hola
    </Section>
  )
}

const Section = styled.section`
  width: 100vw;
  background-color: ${({theme}) => theme.body};
`
