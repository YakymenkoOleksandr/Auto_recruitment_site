import style from "./SocialMediaNavigation.module.css";
import { FaTelegramPlane, FaViber } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FC } from "react";

interface SocialMediaNavigationProps {
  isOpen: boolean;
}

const SocialMediaNavigation: FC<SocialMediaNavigationProps> = ({ isOpen }) => {
  return (
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
            href="https://t.me/rogozov07"
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
            href="https://www.instagram.com/nr_car?utm_source=qr&igsh=bG81a3J5M3JsNmt1"
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
            href="viber://chat?number=+380955144040"
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
  );
};

export default SocialMediaNavigation;
