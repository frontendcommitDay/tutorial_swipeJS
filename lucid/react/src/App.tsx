import {ReactNode, useState} from 'react'
import './App.css'
import {Swiper, SwiperSlide, useSwiperSlide} from "swiper/react";
import "swiper/css";

import {Navigation, EffectCoverflow, A11y, Pagination, Thumbs} from "swiper";

const SlideComp = ({index}: { index: number }) => {
  const swiperSlide = useSwiperSlide();
  console.log(index, swiperSlide.isVisible);
  return <div>slide {index}</div>;
}

function SwiperText(data: any) {
  const swiperSlide = useSwiperSlide();

  console.log({
    swiperSlide
  })

  return (
    <div>hello</div>
  )
}

export default function App() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);


  return (
    <>
      <Swiper
        loop={true}
        modules={[Navigation,
          Thumbs,
          EffectCoverflow, A11y, Pagination]}
        keyboard={false}
        centeredSlides
        thumbs={{ swiper: thumbsSwiper }}
        navigation
        watchSlidesProgress
        effect={"slide"}
        slideToClickedSlide
        pagination={{
          clickable: true
        }}
        slidesPerGroup={1}
        spaceBetween={10}
        slidesPerView={1.53}
        coverflowEffect={{
          rotate: 0,
          stretch: 80,
          depth: 200,
          modifier: 1,
          slideShadows: false
        }}
      >
        <SwiperSlide>
          {({isActive, isVisible, isDuplicate, isPrev, isNext}) => (
            <div>Current slide is {isVisible ? 'Visible' : 'not Visible'}</div>
          )}
        </SwiperSlide>
        <SwiperSlide>
          <SwiperText/>
        </SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
    </>
  );
}
