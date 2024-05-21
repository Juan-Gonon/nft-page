import styled, {keyframes} from 'styled-components'
import img1 from '../../assets/nft/bighead.svg'
import img2 from '../../assets/nft/bighead-1.svg'
import img3 from '../../assets/nft/bighead-2.svg'
import img4 from '../../assets/nft/bighead-3.svg'
import img5 from '../../assets/nft/bighead-4.svg'
import img6 from '../../assets/nft/bighead-5.svg'
import img7 from '../../assets/nft/bighead-6.svg'
import img8 from '../../assets/nft/bighead-7.svg'
import img9 from '../../assets/nft/bighead-8.svg'
import img10 from '../../assets/nft/bighead-9.svg'
import img11 from '../../assets/nft/bighead-10.svg'
import ETH from '../../assets/icons8-ethereum-48.png'
import { useRef } from 'react'

function NftItem ({img, number, price, passRef}) {
  let play = (e) => {
    passRef.current.style.animationPlayState = 'running'
  }
  let pause = (e) => {
    passRef.current.style.animationPlayState = 'paused'
  }

  return (
    <ImgContainer onMouseOver={(e) => pause(e)} onMouseOut={(e) => play(e)} >
      <img src={img} alt='imagen' width={500} height={400} />
      <Details>
        <div>
          <span>Nfts</span> <br />
          <h1># {number}</h1>
        </div>
        <div>
          <span>Price</span>
          <Price>
            <img src={ETH} alt='eth' width={200} height={200} />
            <h1>{Number(price).toFixed(1)}</h1>
          </Price>
        </div>
      </Details>
    </ImgContainer>
  )
}

export const ShowCases = () => {
  const Row1Ref = useRef(null)
  const Row2Ref = useRef(null)

  return (
    <Section id='cards'>
      <Row direction='none' ref={Row1Ref} >
        <NftItem img={img1} number={847} price={1.5} passRef={Row1Ref} />
        <NftItem img={img2} number={447} price={1.6} passRef={Row1Ref} />
        <NftItem img={img3} number={647} price={1.9} passRef={Row1Ref} />
        <NftItem img={img4} number={647} price={1.9} passRef={Row1Ref} />
        <NftItem img={img5} number={647} price={1.9} passRef={Row1Ref} />
        <NftItem img={img11} number={647} price={1.9} passRef={Row1Ref} />
      </Row>
      <Row direction='reverse' ref={Row2Ref} >
        <NftItem img={img6} number={847} price={1.5} passRef={Row2Ref} />
        <NftItem img={img7} number={447} price={1.6} passRef={Row2Ref} />
        <NftItem img={img8} number={647} price={1.9} passRef={Row2Ref} />
        <NftItem img={img9} number={647} price={1.9} passRef={Row2Ref} />
        <NftItem img={img10} number={647} price={1.9} passRef={Row2Ref} />
        <NftItem img={img11} number={647} price={1.9} passRef={Row2Ref} />
      </Row>
    </Section>
  )
}

const ImgContainer = styled.div`
  width: 15rem;
  margin: 0 1rem;
  background-color: ${(props) => props.theme.body};

  border-radius: 20px;
  cursor: pointer;

  @media (max-width: 48em) {
    width: 12rem;
  }
  @media (max-width: 30em) {
    width: 10rem;
  }

  img {
    width: 100%;
    height: auto;
  }
`
const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.theme.text};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;

  & > *:first-child {
    animation-duration: 20s;

    @media (max-width: 30em) {
      animation-duration: 15s;
    }
  }
  & > *:last-child {
    animation-duration: 15s;
    @media (max-width: 30em) {
      animation-duration: 10s;
    }
  }
`
const move = keyframes`
0%{ transform: translateX(100%)   };
100%{ transform: translateX(-100%)   }

`
const Row = styled.div`
  white-space: nowrap;
  box-sizing: content-box;
  margin: 2rem 0;
  display: flex;
  animation: ${move} linear infinite ${(props) => props.direction};
`

const Details = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.8rem 1rem;
  background-color: ${(props) => props.theme.text};
  border: 2px solid ${(props) => `rgba(${props.theme.bodyRgba},0.5)`};
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;

  span {
    font-size: ${(props) => props.theme.fontsm};
    color: ${(props) => `rgba(${props.theme.bodyRgba},0.5)`};
    font-weight: 600;
    line-height: 1.5rem;
  }
  h1 {
    font-size: ${(props) => props.theme.fontmd};
    color: ${(props) => props.theme.body};
    font-weight: 600;

    @media (max-width: 30em) {
      font-size: ${(props) => props.theme.fontsm};
    }
  }
`
const Price = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  img {
    width: 1rem;
    height: auto;
  }
`
