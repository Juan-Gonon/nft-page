import styled, {ThemeProvider} from 'styled-components'
// import { Carrusel } from '../Carrusel/Carrusel'
import { Button } from '../Buttons/Button'
import { Dark } from '../../Styles/Thems'
import { lazy, Suspense } from 'react'
import { Loading } from '../Loading/Loading'
const Carrusel = lazy(() => import('../Carrusel/Carrusel'))


export const About = () => {
  return (
    <Section id='about' >

      <Container>
        <Box>
          <Suspense fallback={<Loading />} >

          <Carrusel />
          </Suspense>
        </Box>
        <Box>
          <Title>
            Bienvenido al club <br /> de los bichos raros
          </Title>
          <SubText>
            WEIRDOS CLUB es una colección privada: coleccionables digitales
            únicos. Los Weirdos se almacenan como tokens ERC-721 en la cadena de
            bloques de Ethereum y se alojan en IPFS
          </SubText>
          <SubTextLight>
            Con más de 200 rasgos dibujados a mano, cada NFT es único y viene
            con una membresía a un grupo exclusivo de inversores exitosos. Únase
            a una ambiciosa comunidad en constante crecimiento con múltiples
            beneficios y utilidades.
          </SubTextLight>
          <ButtonContainer>
            <ThemeProvider theme={Dark}>
              <Button text='UNIRSE A DISCORD' link='#' />
            </ThemeProvider>
          </ButtonContainer>
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

const Title = styled.h2`
  font-size: ${({theme}) => theme.fontxxl};
  text-transform: capitalize;
  color: ${({theme}) => theme.body};
  align-self: flex-start;
  width: 80%;
  margin: 0 auto;

  @media screen and (max-width: 64em) {
    width: 100%;
    text-align: center;
  }
  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontxl};
  }
  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontlg};
  }

`

const SubText = styled.p`
  font-size: ${({theme}) => theme.fontlg};
  color: ${({theme}) => theme.body};
  align-self: flex-start;
  width: 80%;
  margin: 1rem auto;
  font-weight: 400;

  @media screen and (max-width: 64em) {
    width: 100%;
    text-align: center;
    font-size: ${({theme}) => theme.fontmd};
  }
  @media screen and (max-width: 40em) {
    font-size: ${({theme}) => theme.fontmd};
  }
  @media screen and (max-width: 30em) {
    font-size: ${({theme}) => theme.fontsm};
  }


`

const SubTextLight = styled.p`
  font-size: ${({theme}) => theme.fontmd};
  color: ${({theme}) => `rgba(${theme.bodyRgba},0.6)`};
  align-self: flex-start;
  width: 80%;
  margin: 1rem auto;
  font-weight: 400;

  @media (max-width: 64em) {
    width: 100%;
    text-align: center;
    font-size: ${({theme}) => theme.fontsm};
  }
  @media (max-width: 40em) {
    font-size: ${({theme}) => theme.fontsm};
  }
  @media (max-width: 30em) {
    font-size: ${({theme}) => theme.fontxs};
  }
`

const ButtonContainer = styled.div`
  width: 80%;
  margin: 1rem auto;
  display: flex;
  align-self: flex-start;

  @media screen and (max-width: 64em) {
    width: 100%;

    a{
      margin: 0 auto;
    }

  }

`
