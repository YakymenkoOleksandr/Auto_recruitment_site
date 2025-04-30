import style from "./Logo.module.css";
import { NavLink } from "react-router-dom";
import { FC } from "react";

interface LogoProps {
  handleScrolTo: (sectionId: string) => void;
}

const Logo: FC<LogoProps> = ({ handleScrolTo }) => {
  return (
    <NavLink to="/">
      <img
        src="./img/NR_car_logo.jpg"
        alt="Website logo"
        className={style.mainLogo}
        onClick={(e: React.MouseEvent<HTMLImageElement>) => {
          e.preventDefault();
          handleScrolTo("aboutMe");
        }}
      />
    </NavLink>
  );
};

export default Logo;
