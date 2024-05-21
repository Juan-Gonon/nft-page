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

function NftItem ({img, number, price}) {
  return (
    <ImgContainer>
      <img src={img} alt='imagen' width={500} height={400} />
    </ImgContainer>
  )
}

export const ShowCases = () => {
  return (
    <Section>
      <Row direction='none'>
        <NftItem img={img1} number={847} price={1.5} />
        <NftItem img={img2} number={447} price={1.6} />
        <NftItem img={img3} number={647} price={1.9} />
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
