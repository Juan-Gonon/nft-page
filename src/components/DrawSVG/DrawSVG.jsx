import styled, {keyframes} from 'styled-components'
import { Vector } from '../../assets/Icons/Vector'

export const DrawSVG = () => {
  return (
    <>
      <Ball />
      <VectorContainer>
        <Vector />
      </VectorContainer>
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

const VectorContainer = styled.div`
    position: absolute;
    top: .5rem;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    height: 100%;
    overflow: hidden;

    svg{
        display: inline-block;
        width: 100%;
        height: 100%;
    }
`
