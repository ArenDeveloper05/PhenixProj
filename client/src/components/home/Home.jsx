import HomeAdSection from "./home-ad-section/HomeAdSection";
import HomePartnersSlider from "./home-partners-slider/HomePartnersSlider";
import HomeSlider from "./home-slider/HomeSlider";
import HomeTopHotelsSection from "./home-top-hotels-section/HomeTopHotelsSection";

const Home = () => {
  return (
    <div className="home">
      <HomeSlider />
      <HomePartnersSlider />
      <HomeTopHotelsSection />
      <HomeAdSection />
    </div>
  );
};

export default Home;
