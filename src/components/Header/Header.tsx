import style from "./Header.module.css";
import { FaTelegramPlane } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";

export default function Header() {
  return (
    <>
      <header className={style.header}>
        <div className={style.logoAndTel}>
          <img src="" alt="Website logo" className={style.mainLogo} />
          <a
            href="tel:+380955144040"
            title="Зателефонуйте нам"
            className={style.tel}
          >
            +38 (095) 514-40-40
          </a>
        </div>

        <nav className={style.wrapperOfHeaderNavigation}>
          <ul className={style.tableOfNavigation}>
            <li>
              <a href="#" className={style.navLink}>
                Головна сторінка
              </a>
            </li>
            <li>
              <a href="#" className={style.navLink}>
                Автопідбір під ключ
              </a>
            </li>
            <li>
              <a href="#" className={style.navLink}>
                Разовий огляд авто
              </a>
            </li>
          </ul>
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
          </ul>
        </nav>
      </header>
    </>
  );
}
