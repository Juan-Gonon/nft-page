import styled, {keyframes} from 'styled-components'

export const DrawSVG = () => {
  return (
    <>
      <Ball />
    </>
  )
}

const Bounce = keyframes`
    from{
        transform: translateX(-50%) scale(.5);
    }
    to{
        transform: translateX(-50%) scale(1);
    }
`

const Ball = styled.div`
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 1.5rem;
    height: 1.5rem;
    background-color: ${({theme}) => theme.text};
    border-radius: 50%;
    animation: ${Bounce} .5s linear infinite alternate;

    @media screen and (max-width: 48em) {
        left: 1rem;
    }
`
