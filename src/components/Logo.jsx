
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Logo = () => {
  return (
    <LogoText>Logo</LogoText>
  )
}

const LogoText = styled.h1`
    font-family: 'Akaya Telivigala', cursive;
    font-size: ${({theme}) => theme.fontxxxl};
    color: ${({theme}) => theme.text};
    transition: transform .2s  ease;

    &:hover{
        transform: scale(1.1);
    }

`
