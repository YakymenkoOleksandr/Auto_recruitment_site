import style from "./Navigation.module.css";
import { NavLink } from "react-router-dom";
import { FC } from "react";

interface NavigationProps {
  isOpen: boolean;
  handleScrolTo: (sectionId: string) => void;
}

const Navigation: FC<NavigationProps> = ({ isOpen, handleScrolTo }) => {
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
            Головна сторінка
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
            Автопідбір під ключ
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
            Разовий огляд авто
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
