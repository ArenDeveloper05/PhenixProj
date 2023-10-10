import HomeAdSection from "./home-ad-section/HomeAdSection";
import HomePartnersSlider from "./home-partners-slider/HomePartnersSlider";
import HomeSlider from "./home-slider/HomeSlider";
import HomeTopHotelsSection from "./home-top-hotels-section/HomeTopHotelsSection";
import HomeTopToursSection from "./home-top-tours-section/HomeTopToursSection";

const Home = () => {
  return (
    <div className="home">
      <HomeSlider />
      <HomePartnersSlider />
      <HomeTopHotelsSection />
      <HomeAdSection />
      <HomeTopToursSection />
    </div>
  );
};

export default Home;
