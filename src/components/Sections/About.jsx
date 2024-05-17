import styled from 'styled-components'

export const About = () => {
  return (
    <Section id='about' > Section About</Section>
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
