import styled from 'styled-components'
import { TypeWriterText } from '../TypeWriter/TypeWriterText'
import { CoverVideo } from '../CoverVideo/CoverVideo'

export const Home = () => {
  return (
    <Section id='home' >
      <Container>
        <Box>
          <TypeWriterText />
        </Box>
        <Box>
          <CoverVideo />
        </Box>
      </Container>
    </Section>
  )
}

const Section = styled.section`
    min-height: ${({theme}) => `calc(100vh-${theme.navHeight})`};
    width : 100vw;
    position: relative;
    background-color : ${({theme}) => theme.body};

`

const Container = styled.div`
  width: 75%;
  min-height: 80vh;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 64em) {
    width: 85%;
  }
`

const Box = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
