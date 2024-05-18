import styled from 'styled-components'

export const Button = ({text, link}) => {
  return (
    <>
      <a href={link} aria-label={text} target='_blank'>
        <Btn>{text}</Btn>
      </a>
    </>
  )
}

const Btn = styled.button`
    display: inline-block;
    background-color: ${({theme}) => theme.text};
    color: ${({theme}) => theme.body};
    outline: none;


`
