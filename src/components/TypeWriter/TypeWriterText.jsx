import styled from 'styled-components'
import Typewriter from 'typewriter-effect'

export const TypeWriterText = () => {
  return (
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
