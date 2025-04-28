import style from "./Header.module.css";
import { FaTelegramPlane } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { FaViber } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleScrolTo = (sectionId: string) => {
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
    <header className={style.header} >
      <div className={style.logo}>
        <NavLink to="/">
          <img
            src="./img/NR_car_logo.jpg"
            alt="Website logo"
            className={style.mainLogo}
            onClick={(e) => {
                e.preventDefault();
                handleScrolTo("aboutMe");
              }}
          />
        </NavLink>
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
              onClick={(e) => {
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
              onClick={(e) => {
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
              onClick={(e) => {
                e.preventDefault();
                handleScrolTo("oneTimeCarInspecrion");
              }}
            >
              Разовий огляд авто
            </NavLink>
          </li>
        </ul>
      </nav>
      <nav
        className={
          isOpen
            ? [style.wrapperOfSocial, style.active1].join(" ")
            : style.wrapperOfSocial
        }
      >
        <ul className={style.sotialMedia}>
          <li>
            {" "}
            <a
              href="https://t.me/your_channel"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram"
            >
              <svg className={style.svg}>
                <FaTelegramPlane className={style.telegram} />
              </svg>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/your_profile"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <svg className={style.svg}>
                <BsInstagram className={style.instagram} />
              </svg>
            </a>
          </li>
          <li>
            <a
              href="https://www.viber.com/your_profile"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Viber"
            >
              <svg className={style.svg}>
                <FaViber className={style.viber} />
              </svg>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
