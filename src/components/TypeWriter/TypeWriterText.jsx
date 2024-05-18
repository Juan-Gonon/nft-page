import styled from 'styled-components'
import Typewriter from 'typewriter-effect'

export const TypeWriterText = () => {
  return (
    <Title>
      Aprende React creando proyectos
      <Typewriter
        options={{
          strings: ['Hello', 'World'],
          autoStart: true,
          loop: true
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
