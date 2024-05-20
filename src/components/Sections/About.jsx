import styled from 'styled-components'
import { Carrusel } from '../Carrusel/Carrusel'

export const About = () => {
  return (
    <Section id='about' >
      <Container>
        <Box>
          <Carrusel />
        </Box>
      </Container>
    </Section>
  )
}

const Section = styled.section`
    min-height: 100vh;
    width : 100%;
    background-color : ${({theme}) => theme.text};
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;

`

const Container = styled.div`
  width: 75%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 70em) {
    width: 85%;
  }

  @media screen and (max-width: 64em) {
    width: 100%;
    flex-direction: column;

    &>*:last-child{
      width: 80%;
    }
  }

  @media screen and (max-width: 40em){
    &>*:last-child{
      width: 90%;
    }
  }
`

const Box = styled.div`
  width: 50%;
  height: 100%;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 40em) {
    min-height: 50vh;
  }
`
