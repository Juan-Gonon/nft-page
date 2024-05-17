import styled from 'styled-components'

export const Home = () => {
  return (
    <Section id='home' > Section Home</Section>
  )
}

const Section = styled.section`
    min-height: ${({theme}) => `calc(100vh-${theme.navHeight})`};
    width : 100vw;
    position: relative;
    background-color : ${({theme}) => theme.body};

`
