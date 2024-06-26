import styled from 'styled-components'

export const Button = ({text, link}) => {
  return (
    <>
      <a href={link} aria-label={text} >
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
    border: none;
    font-size: ${({theme}) => theme.text};
    padding: .9rem 2.3rem;
    border-radius: 50px;
    cursor: pointer;
    transition: all .2s ease;
    position: relative;

    &:hover{
        transform: scale(.9);
    }
    &::after{
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(0);
        border: 2px solid ${({theme}) => theme.text};
        width: 100%;
        height: 100%;
        border-radius: 50px;
        transition: all .2s ease;
    }

    &:hover::after{
        transform: translate(-50%, -50%) scale(1);
        padding: .3rem;
    }

    @media screen and (max-width: 48em){
        font-size: ${({theme}) => theme.fontsm};
    }


`
