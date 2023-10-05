import "./HomeTopHotelsSection.scss";

import img1 from "../../../assets/top1.webp";
import img2 from "../../../assets/top2.webp";
import img3 from "../../../assets/top3.webp";
import img4 from "../../../assets/top4.webp";
import logo1 from "../../../assets/homePartnersSliderLogo3.png";
import { useState } from "react";
import SingleTopHotel from "./single-top-hotel/SingleTopHotel";

// ==========================================================

const HomeTopHotelsSection = () => {
  const [data, setData] = useState([
    {
      id: 1,
      images: [img1, img2, img3, img4],
      desc: "lorem",
      price: "100$",
      logo: logo1,
    },
    {
      id: 2,
      images: [img1, img2, img3, img4],
      desc: "lorem",
      price: "200$",
      logo: logo1,
    },
    {
      id: 3,
      images: [img1, img2, img3, img4],
      desc: "lorem",
      price: "200$",
      logo: logo1,
    },
    {
      id: 3,
      images: [img1, img2, img3, img4],
      desc: "lorem",
      price: "200$",
      logo: logo1,
    },
  ]);
  return (
    <div className="home-top-hotels-section">
      <p className="home-top-hotels-section-title">best deals</p>
      <div className="home-top-hotels-section-container">
        {data &&
          data.length !== 0 &&
          data.map((hotel) => {
            return <SingleTopHotel key={hotel.id} hotelData={hotel} />;
          })}
      </div>
      <form action="">
        <button className="home-top-hotels-section-viewButton">view all</button>
      </form>
    </div>
  );
};

export default HomeTopHotelsSection;
