import style from "./SocialMediaNavigation.module.css";
import { FaTelegramPlane } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaViber } from "react-icons/fa";

interface SocialMediaNavigationProps {
    isOpen: boolean;
}

const SocialMediaNavigation = ({isOpen}: SocialMediaNavigationProps) => {

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
    );
}

export default SocialMediaNavigation;