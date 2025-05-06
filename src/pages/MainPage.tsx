import Header from "../components/Header/Header.tsx";
import Risks from "../components/Risks/Risks";
import Risons from "../components/Risons/Risons";
import Footer from "../components/Footer/Footer";
import Stages from "../components/Stages/Stages";
import OneTimeCarInspection from "../components/OneTimeCarInspection/OneTimeCarInspection";
import AboutMe from "../components/AboutMe/AboutMe";
import OnTheMap from "../components/OnTheMap/OnTheMap";
import PhotoCarousel from "../components/PhotoСarousel/PhotoCarousel";
import SearchAutoAllDay from "../components/SearchAutoAllDay/SearchAutoAllDay.tsx"
import { FC } from "react";

const MainPage: FC = () => {
  return (
    <div>
      <Header />
      <AboutMe />
      <Risons />
      <Risks />
      <Stages />
      <OneTimeCarInspection />
      <SearchAutoAllDay />
      <PhotoCarousel />
      <OnTheMap />
      <Footer />
    </div>
  );
};

export default MainPage;
