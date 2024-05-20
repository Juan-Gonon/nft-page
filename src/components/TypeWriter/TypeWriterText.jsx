import styled from 'styled-components'
import Typewriter from 'typewriter-effect'
import { Button } from '../Buttons/Button'

export const TypeWriterText = () => {
  return (
    <>
      <Title>
        Aprende React creando proyectos
        <Typewriter
          options={{
            autoStart: true,
            loop: true
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString('<span class="text-1"> Divertidos </span>')
              .pauseFor(500).deleteAll()
              .typeString('<span class="text-2"> Increíbles </span>')
              .pauseFor(500).deleteAll()
              .typeString('<span class="text-3"> Reutilizase </span>')
              .pauseFor(500).deleteAll()
              .start()
          }}
        />
      </Title>
      <SubTitle>
        React es cool 💙
      </SubTitle>
      <ButtonContainer>
        <Button text='Explorar curso' link='#' />
      </ButtonContainer>
    </>
  )
}

const Title = styled.h2`
    font-size: ${({theme}) => theme.fontxxl};
    text-transform: capitalize;
    width: 80%;
    color: ${({theme}) => theme.text};
    align-self: flex-start;
    transition: all .5s ease-in-out;

    .text-1{
      color: blue;
    }
    .text-2{
      color: orange;
    }
    .text-3{
      color: red;
    }

    span{
      text-transform: uppercase;
      font-family:'Akaya Telivigala', cursive;
    }

    @media screen and (max-width: 70em) {
      font-size: ${({theme}) => theme.fontxl};
    }
    @media screen and (max-width: 48em) {
      text-align: center;
      align-self: center;
    }
    @media screen and (max-width: 40em) {
      width: 90%;
    }
`

const SubTitle = styled.h3`
  font-size: ${({theme}) => theme.fontlg};
  text-transform: capitalize;
  color: ${({theme}) => `rgba(${theme.textRgba}, .6)`};
  font-weight : 600;
  margin-bottom : 1rem;
  width : 80%;
  align-self : flex-start;

  @media screen and (max-width: 40em){
    font-size : ${({theme}) => theme.fontmd}
  }
  @media screen and (max-width: 48em) {
    align-self : center;
    text-align: center;
  }
`
const ButtonContainer = styled.div`
  width: 80%;
  align-self: flex-start;

  @media screen and (max-width: 48em){
    align-self: center;
    text-align: center;

    button{
      margin: 0 auto;
    }

  }
  
`

