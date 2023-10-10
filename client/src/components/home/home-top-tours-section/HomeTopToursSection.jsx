import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";

import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectCoverflow,
  Autoplay,
} from "swiper/modules";

import "./HomeTopToursSection.scss";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import img1 from "../../../assets/topTourImg1.jpg";
import img2 from "../../../assets/topTourImg2.jpg";
import img3 from "../../../assets/topTourImg3.jpg";
// import { useEffect } from "react";

const HomeTopToursSection = () => {
  const [activeSlide, setActiveSlide] = useState(1);

  const [data, setData] = useState([
    {
      id: 1,
      img: img1,
    },
    {
      id: 2,
      img: img2,
    },
    {
      id: 3,
      img: img3,
    },
  ]);

  return (
    <div className="home-top-tours-section">
      <p className="home-top-tours-section-title">BEST PROMOTIONS</p>

      <div className="home-top-tours-section-container">
        <Swiper
          // install Swiper modules
          className="home-top-tours-section-container-swiper"
          modules={[
            Navigation,
            Pagination,
            Scrollbar,
            A11y,
            EffectCoverflow,
            Autoplay,
          ]}
          spaceBetween={0}
          slidesPerView={1.1}
          // loop={true}
          speed={500}
          // autoplay={{
          //   delay: 5000,
          //   // pauseOnMouseEnter: true,
          //   disableOnInteraction: false,
          // }}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          //   slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 500,
            modifier: 1,
            // slideShadows: true,
          }}
          navigation
          //   pagination={{ clickable: true }}
          //   scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={(e) => {
            console.log(e);
            // setActiveSlide(id);
          }}
        >
          {data &&
            data.length !== 0 &&
            data.map(({ img, id }) => {
              return (
                <SwiperSlide
                  className="home-top-tours-section-container-swiper-swiperSlide"
                  key={id}
                >
                  <div className="home-top-tours-section-container-swiper-swiperSlide-img ">
                    <img src={img} alt="" />
                  </div>
                  <div
                    className={`home-top-tours-section-container-swiper-swiperSlide-content  ${
                      id === activeSlide ? "top-tours-animated" : ""
                    }`}
                  ></div>
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
    </div>
  );
};

export default HomeTopToursSection;
