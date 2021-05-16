import FooterDekstop from "../footer/FooterDekstop";
import NavbarDekstop from "../navbar/NavbarDekstop";
import HomeActivities from "./HomeActivities";
import HomeHeader from "./HomeHeader";
import HomeTestimony from "./HomeTestimony";

const HomePage: React.FC = () => {
  return (
    <div>
      <NavbarDekstop />
      <HomeHeader />
      <HomeTestimony />
      {/* <HomeActivities /> */}
      <FooterDekstop />
    </div>
  );
};

export default HomePage;
