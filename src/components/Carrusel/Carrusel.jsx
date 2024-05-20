import styled from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y, EffectCards } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-cards'

import img1 from '../../assets/nft/bighead.svg'
import img2 from '../../assets/nft/bighead-1.svg'
import img3 from '../../assets/nft/bighead-2.svg'
import img4 from '../../assets/nft/bighead-3.svg'
import img5 from '../../assets/nft/bighead-4.svg'
import img6 from '../../assets/nft/bighead-5.svg'
import arrow from '../../assets/Arrow.svg'

export const Carrusel = () => {
  return (
    <Container>
      <Swiper
        autoplay={{delay: 200, disableOnInteraction: false}}
        modules={[Navigation, Pagination, Scrollbar, A11y, EffectCards]}
        navigation
        pagination={{type: 'fraction'}}
        scrollbar={{ draggable: true }}
        effect={'cards'}
      >
        <SwiperSlide> <img src={img1} alt='bighead' width={500} height={400} /> </SwiperSlide>
        <SwiperSlide> <img src={img2} alt='bighead' width={500} height={400} /> </SwiperSlide>
        <SwiperSlide> <img src={img3} alt='bighead' width={500} height={400} /> </SwiperSlide>
        <SwiperSlide> <img src={img4} alt='bighead' width={500} height={400} /> </SwiperSlide>
        <SwiperSlide> <img src={img5} alt='bighead' width={500} height={400} /> </SwiperSlide>
        <SwiperSlide> <img src={img6} alt='bighead' width={500} height={400} /> </SwiperSlide>
      </Swiper>
    </Container>
  )
}

const Container = styled.div`
    width: 25vw;
    height: 70vh;

    @media screen and (max-width: 70em){
        height: 60vh;
        padding: 15px 0;
    }
    @media screen and (max-width: 64em) {
        height: 50vh;
        width: 30vh;
    }
    @media screen and (max-width: 48em) {
        height: 50vh;
        width: 40vw;
    }
    @media screen and (max-width: 30em) {
        height: 45vh;
        width: 60vw;
    }

    .swiper{
        width: 100%;
        height: 100%;
    }
    .swiper-slide{
        background: ${({theme}) => theme.carouselColor};
        border-radius: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        
        img{
          display: block;
          width: 100%;
          height: auto;
          object-fit: cover;
        }

    }

    .swiper-button-next{
      color: ${({theme}) => theme.text};
      right: 0;
      width: 4rem;
      top: 60%;
      background-image: url(${arrow});
      background-position: center;
      background-size: cover;

      &::after{
        display: none;
      }

      @media screen and (max-width: 64em) {
        width: 3rem;
      }
      @media screen and (max-width: 30em) {
        width: 2rem;
      }
    }
    .swiper-button-prev{
      color: ${({theme}) => theme.text};
      right: 0;
      width: 4rem;
      top: 60%;
      background-image: url(${arrow});
      background-position: center;
      background-size: cover;
      transform: rotate(180deg);

      &::after{
        display: none;
      }

      @media screen and (max-width: 64em) {
        width: 3rem;
      }
      @media screen and (max-width: 30em) {
        width: 2rem;
      }
    }
`
