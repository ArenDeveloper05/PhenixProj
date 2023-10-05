// import Swiper core and required modules
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  Mousewheel,
  EffectFade,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// ==========================================================

const SingleTopHotel = ({ hotelData }) => {
  return (
    <div className="home-top-hotels-section-container-item">
      <div className="home-top-hotels-section-container-item-logo">
        <img src={hotelData.logo} alt="" />
      </div>
      <div className="home-top-hotels-section-container-item-images">
        <Swiper
          className="home-top-hotels-section-container-item-images-swiper"
          modules={[
            Navigation,
            Pagination,
            Scrollbar,
            A11y,
            Autoplay,
            Mousewheel,
            EffectFade,
          ]}
          direction="vertical"
          // mousewheel={true}
          spaceBetween={50}
          slidesPerView={1}
          effect="fade"
          loop={true}
          rewind={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            // stopOnLastSlide: false,
          }}
          // navigation
          // effect={'creative'}
          pagination={{ clickable: true }}
        >
          {hotelData.images.length !== 0 &&
            hotelData.images.map((item, i) => {
              return (
                <SwiperSlide
                  className="home-top-hotels-section-container-item-images-swiper-swiperSlide"
                  key={i}
                >
                  <img src={item} alt="" />
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
      <div className="home-top-hotels-section-container-item-info">
        <p>{hotelData.desc}</p>
      </div>
      <div className="home-top-hotels-section-container-item-price">
        <h3>{hotelData.price}</h3>
      </div>
    </div>
  );
};

export default SingleTopHotel;
