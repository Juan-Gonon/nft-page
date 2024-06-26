import styled from 'styled-components'
import { Accordion } from '../Acordion/Accordion'

export const Preguntas = () => {
  return (
    <Section id='preguntas'>
      <Title>Preguntas</Title>
      <Container>
        <Box>
          <Accordion title='¿Olvidaste tu contraseña?'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </Accordion>
          <Accordion title='¿Donde se aceptan tarjetas ?'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </Accordion>
          <Accordion title='¿Cuando cumples año?'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </Accordion>
        </Box>
        <Box>
          <Accordion title='¿Olvidaste tu contraseña?'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </Accordion>
          <Accordion title='¿Donde se aceptan tarjetas ?'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </Accordion>
          <Accordion title='¿Cuando cumples año?'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </Accordion>
        </Box>
      </Container>
    </Section>
  )
}

const Section = styled.section`
  min-height: 100vh;
  height: auto;
  width: 100vw;
  background-color: ${(props) => props.theme.text};
  position: relative;
  color: ${(props) => props.theme.body};
  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: uppercase;
  color: ${(props) => props.theme.body};

  margin: 1rem auto;
  border-bottom: 2px solid ${(props) => props.theme.carouselColor};
  width: fit-content;

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxl};
  }
`
const Container = styled.div`
  width: 75%;
  margin: 2rem auto;

  display: flex;
  justify-content: space-between;
  align-content: center;

  @media (max-width: 64em) {
    width: 80%;
  }
  @media (max-width: 48em) {
    width: 90%;
    flex-direction: column;

    & > *:last-child {
      & > *:first-child {
        margin-top: 0;
      }
    }
  }
`
const Box = styled.div`
  width: 45%;
  @media (max-width: 64em) {
    align-self: center;
  }
  @media (max-width: 48em) {
    width: 90%;
  }
`

