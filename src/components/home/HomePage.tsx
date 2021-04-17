import NavbarDekstop from "../navbar/NavbarDekstop";
import HomeHeader from "./HomeHeader";
import TestimonySection from "./TestimonySection";

const HomePage: React.FC = () => {
  return (
    <div>
      <NavbarDekstop />
      <HomeHeader />
      <TestimonySection />
    </div>
  );
};

export default HomePage;
