import styled, {keyframes} from 'styled-components'
import { CoverVideo } from '../CoverVideo/CoverVideo'
import imgReact from '../../assets/react.png'
import { lazy, Suspense } from 'react'
const TypeWriterText = lazy(() => import('../TypeWriter/TypeWriterText'))
import { Loading } from '../Loading/Loading'

export const Home = () => {
  return (
    <Section id='home' >
      <Container>
        <Box>
          <Suspense fallback={<Loading />} >
          <TypeWriterText />
          </Suspense>
        </Box>
        <Box>
          <CoverVideo />
        </Box>
        <Round>
          <img src={imgReact} alt='logoReact' width={500} height={400} />
        </Round>
      </Container>
    </Section>
  )
}

const Section = styled.section`
    min-height: ${({theme}) => `calc(100vh -${theme.navHeight})`};
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
  @media screen and (max-width: 48em) {
    flex-direction: column-reverse;
    width: 100%;

    &>*:first-child{
      width: 100%;
      margin-top: 2rem;
    }
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

const rotate = keyframes`
  100%{
    transform: rotate(1turn);
  }
`

const Round = styled.div`
  position: absolute;
  bottom: 2rem;
  right: 90%;
  width: 7rem;

  img{
    width: 100%;
    height: auto;
    animation: ${rotate} 6s linear infinite reverse;
  }

  @media screen  and (max-width: 64em){
    width: 4rem;
    height: 4rem;
    left: none;
    right: 2rem;
    bottom: 100%;
  }

  @media screen and (max-width: 48em){
    right: 1.5rem;
  }
`

