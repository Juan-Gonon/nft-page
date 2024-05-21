import styled, {keyframes} from 'styled-components'
import { Vector } from '../../assets/Icons/Vector'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useLayoutEffect, useRef } from 'react'

export const DrawSVG = () => {
  const ref = useRef(null)
  const ballRef = useRef(null)

  gsap.registerPlugin(ScrollTrigger)

  useLayoutEffect(() => {
    let element = ref.current
    let svg = document.getElementsByClassName('svg-path')[0]

    const length = svg.getTotalLength()
    console.log(length)
    // comienza a posicionar el dibujo svg
    svg.style.strokeDasharray = length

    // ocultar andes de comenzar a desplazarse
    svg.style.strokeDashoffset = length

    let recorrido = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: 'top center',
        end: 'bottom bottom',

        onUpdate: (self) => {
          const draw = length * self.progress
          svg.style.strokeDashoffset = length - draw
        },
        onToggle: (self) => {
          if (self.isActive) {
            ballRef.current.style.display = 'none'
          } else {
            ballRef.current.style.display = 'inline-block'
          }
        }
      }
    })

    return () => {
      if (recorrido) recorrido.kill()
    }
  }, [])

  return (
    <>
      <Ball ref={ballRef} />
      <VectorContainer ref={ref} >
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

    @media screen and (max-width: 48em) {
        left: 1rem;
    }
`
