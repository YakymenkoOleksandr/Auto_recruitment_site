import style from "./Header.module.css";
import { useState, FC } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import SocialMediaNavigation from "../SocialMediaNavigation/SocialMediaNavigation";
import Logo from "../Logo/Logo";

const Header: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleScrolTo = (sectionId: string): void => {
    setIsOpen(false);
    if (window.location.pathname !== "/") {
      navigate("/", {});
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 50);
    } else {
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 50);
    }
  };

  return (
    <header className={style.header}>
      <div className={style.logo}>
        <Logo handleScrolTo={handleScrolTo} />
        {isOpen ? (
          <IoClose
            className={style.burgerMenu}
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          />
        ) : (
          <IoMenu
            className={style.burgerMenu}
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          />
        )}
      </div>

      <Navigation isOpen={isOpen} handleScrolTo={handleScrolTo} />
      <SocialMediaNavigation isOpen={isOpen} />
    </header>
  );
};

export default Header;
