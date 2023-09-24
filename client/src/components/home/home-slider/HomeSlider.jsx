import { Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectCoverflow, EffectFade} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import 'swiper/css/effect-coverflow';

import "./HomeSlider.css"

const HomeSlider = () => {
  return (
    <div className='homeSlider'>
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectCoverflow, EffectFade]}
            spaceBetween={0}
            slidesPerView={1}
            effect='fade'
            loop={true}
            speed={600}
            autoplay={{
                delay: 6000,
                // pauseOnMouseEnter: true,
                disableOnInteraction: false
            }}
            navigation
            pagination={{ clickable: true }}
            // scrollbar={{ draggable: false }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            >
            <SwiperSlide className="swiperSlide1">
                <p className="swiperSlideTitleTop">WE LIKE TO</p>
                <p className="swiperSlideTitleBottom">go AROUND</p>
            </SwiperSlide>
            <SwiperSlide className="swiperSlide2">
                <p className="swiperSlideTitleTop">WE LIKE TO</p>
                <p className="swiperSlideTitleBottom">go AROUND</p>
            </SwiperSlide>
            <SwiperSlide className="swiperSlide3">
                <p className="swiperSlideTitleTop">WE LIKE TO</p>
                <p className="swiperSlideTitleBottom">go AROUND</p>
            </SwiperSlide>
            <SwiperSlide className="swiperSlide4">
                <p className="swiperSlideTitleTop">WE LIKE TO</p>
                <p className="swiperSlideTitleBottom">go AROUND</p>
            </SwiperSlide>
            <SwiperSlide className="swiperSlide5">
                <p className="swiperSlideTitleTop">WE LIKE TO</p>
                <p className="swiperSlideTitleBottom">go AROUND</p>
            </SwiperSlide>
            <SwiperSlide className="swiperSlide6">
                <p className="swiperSlideTitleTop">WE LIKE TO</p>
                <p className="swiperSlideTitleBottom">go AROUND</p>
            </SwiperSlide>
            <SwiperSlide className="swiperSlide7">
                <p className="swiperSlideTitleTop">WE LIKE TO</p>
                <p className="swiperSlideTitleBottom">go AROUND</p>
            </SwiperSlide>
            <SwiperSlide className="swiperSlide8">
                <p className="swiperSlideTitleTop">WE LIKE TO</p>
                <p className="swiperSlideTitleBottom">go AROUND</p>
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default HomeSlider