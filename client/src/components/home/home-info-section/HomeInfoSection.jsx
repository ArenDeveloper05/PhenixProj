import Atropos from "atropos/react";
import "atropos/scss";

import "./HomeInfoSection.scss";

// import bg from "../../../assets/homeInfoSectionBG1.jpg";

const HomeInfoSection = () => {
  return (
    <div className="home-info-section">
      <Atropos
        className="home-info-section-atropos"
        // activeOffset={40}
        // shadowScale={1.05}
      >
        <div
          className="home-info-section-atropos-bg"
          data-atropos-offset=" -3 "
        >
          <div
            className="home-info-section-atropos-bg-titleBox"
            data-atropos-offset=" 7 "
          >
            <p>HOME INFO SECTION</p>
          </div>
          <div
            className="home-info-section-atropos-bg-infoBox"
            data-atropos-offset=" 10 "
          >
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel nisi
              voluptatum quidem repellat laudantium, voluptates laborum unde
              praesentium illo, blanditiis, sapiente perferendis labore a
              corrupti odit rerum doloremque. Sequi, officiis? Qui illum sequi
              dolore expedita ut laborum cupiditate necessitatibus incidunt
              asperiores fugiat. A repellat sapiente, corporis officia eveniet
              pariatur in quidem harum, aliquam reiciendis excepturi officiis
              nulla dignissimos necessitatibus alias?
            </p>
          </div>
          <div
            className="home-info-section-atropos-bg-buttonBox"
            data-atropos-offset=" 7 "
          >
            <form action="">
              <button className="home-info-section-atropos-bg-buttonBox-button">
                SEE MORE
              </button>
            </form>
          </div>
        </div>
      </Atropos>
    </div>
  );
};

export default HomeInfoSection;
