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
          typewriter.typeString('<span className="text-1"> Divertidos </span>').pauseFor(500).deleteAll().start()
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
`
