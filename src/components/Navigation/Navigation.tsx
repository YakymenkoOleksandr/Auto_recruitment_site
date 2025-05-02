import style from "./Navigation.module.css";
import { NavLink } from "react-router-dom";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";

interface NavigationProps {
  isOpen: boolean;
  handleScrolTo: (sectionId: string) => void;
}

const Navigation: FC<NavigationProps> = ({ isOpen, handleScrolTo }) => {
  const { t } = useTranslation();
  return (
    <nav
      className={
        isOpen
          ? [style.wrapperOfHeaderNavigation, style.active].join(" ")
          : style.wrapperOfHeaderNavigation
      }
    >
      <ul className={style.tableOfNavigation}>
        <li>
          <a
            href="tel:+380955144040"
            title="Зателефонуйте нам"
            className={style.tel}
          >
            +38 (095) 514-40-40
          </a>
        </li>
        <li>
          <NavLink
            to="/"
            className={style.navLink}
            onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
              e.preventDefault();
              handleScrolTo("aboutMe");
            }}
          >
            {t("navigation.home")}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/"
            className={style.navLink}
            onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
              e.preventDefault();
              handleScrolTo("stages");
            }}
          >
            {t("navigation.full_service")}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/"
            className={style.navLink}
            onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
              e.preventDefault();
              handleScrolTo("oneTimeCarInspecrion");
            }}
          >
            {t("navigation.inspection")}
          </NavLink>
        </li>
        
          <LanguageSwitcher />
        
      </ul>
    </nav>
  );
};

export default Navigation;
