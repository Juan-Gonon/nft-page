import styled from 'styled-components'
import { Swiper, SwiperSlide} from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

import img1 from '../../assets/nft/bighead.svg'
import img2 from '../../assets/nft/bighead-1.svg'
import img3 from '../../assets/nft/bighead-2.svg'
import img4 from '../../assets/nft/bighead-3.svg'
import img5 from '../../assets/nft/bighead-4.svg'
import img6 from '../../assets/nft/bighead-5.svg'

export const Carrusel = () => {
  return (
    <Container>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
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
    }
`
