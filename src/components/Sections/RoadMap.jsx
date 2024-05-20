import styled from 'styled-components'

export const RoadMap = () => {
  return (
    <Section>
      <Title>
        RoadMap
      </Title>
      <Container>
        <SvgContainer>Hola</SvgContainer>
      </Container>
    </Section>
  )
}

const Section = styled.section`
    min-height: 100vh;
    width: 100vw;
    background-color: ${({theme}) => theme.body};
    position: relative;
    display: inline-block;
    overflow: hidden;
`

const Title = styled.h1`
  font-size: ${({theme}) => theme.fontxxl};
  text-transform: capitalize;
  color: ${(theme) => theme.text};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem auto;
  border-bottom: 2px solid ${({theme}) => theme.text};
  width: fit-content;

  @media (max-width: 40em) {
    font-size: ${({theme}) => theme.fontxl};
  }
`

const Container = styled.div`
  width: 70%;
  height: 200vh;
  background-color: ${({theme}) => theme.body};
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  @media (max-width: 64em) {
    width: 80%;
  }
  @media (max-width: 48em) {
    width: 90%;
  }
`

const SvgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
