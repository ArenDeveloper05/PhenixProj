import "./HomeAdSection.scss";

// import adImg from "../../../assets/AdSectionContainerImg.jpg";

const HomeAdSection = () => {
  return (
    <div className="home-ad-section">
      <div className="home-ad-section-img"></div>
      <div className="home-ad-section-glass">
        {/* <img src={adImg} alt="" /> */}

        <div className="home-ad-section-glass-container">
          <h1>HOME AD SECTION</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis
            perspiciatis non perferendis porro earum ea, quo quasi aperiam sit
            sint distinctio laboriosam reiciendis aliquid ducimus ipsum vel
            nihil vero minus.
          </p>
          <form action="">
            <button>READ MORE</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HomeAdSection;
