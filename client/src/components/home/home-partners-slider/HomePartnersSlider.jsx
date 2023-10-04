import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import "./HomePartnersSlider.css"

import logo1 from "../../../assets/homePartnersSliderLogo1.png"
import logo2 from "../../../assets/homePartnersSliderLogo2.png"
import logo3 from "../../../assets/homePartnersSliderLogo3.png"
import logo4 from "../../../assets/homePartnersSliderLogo4.png"
import logo5 from "../../../assets/homePartnersSliderLogo5.png"


const HomePartnersSlider = () => {
  return (
    <div className="homePartnersSlider">
      <p className="homePartnersSliderTitle">OUR PARTNERS</p>
      <Swiper
        className="homePartnersSliderSwiper"
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={60}
        slidesPerView={7}
        speed={600}
        loop={true}
        rewind={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          // stopOnLastSlide: false,
        }}
        // navigation
        // pagination={{ clickable: true }} 
        // scrollbar={{ draggable: true }}
        // onSlideChange={() => console.log('slide change')}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide className="homePartnersSliderSwiperSlide">
          <img src={logo1} alt=''/>
        </SwiperSlide>
        <SwiperSlide className="homePartnersSliderSwiperSlide">
          <img src={logo2} alt="" />
        </SwiperSlide>
        <SwiperSlide className="homePartnersSliderSwiperSlide">
          <img src={logo3} alt="" />
        </SwiperSlide>
        <SwiperSlide className="homePartnersSliderSwiperSlide">
          <img src={logo4} alt="" />
        </SwiperSlide>
        <SwiperSlide className="homePartnersSliderSwiperSlide">
          <img src={logo5} alt="" />
        </SwiperSlide>
        <SwiperSlide className="homePartnersSliderSwiperSlide">
          <img src={logo1} alt="" />
        </SwiperSlide>
        <SwiperSlide className="homePartnersSliderSwiperSlide">
          <img src={logo2} alt="" />
        </SwiperSlide>
        <SwiperSlide className="homePartnersSliderSwiperSlide">
          <img src={logo3} alt="" />
        </SwiperSlide>
        <SwiperSlide className="homePartnersSliderSwiperSlide">
          <img src={logo4} alt="" />
        </SwiperSlide>
        <SwiperSlide className="homePartnersSliderSwiperSlide">
          <img src={logo5} alt="" />
        </SwiperSlide>
        <SwiperSlide className="homePartnersSliderSwiperSlide">
          <img src={logo1} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default HomePartnersSlider

