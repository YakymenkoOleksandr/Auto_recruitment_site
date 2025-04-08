import style from "./Footer.module.css";
import { IoLocationOutline } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.info}>
        <IoLocationOutline className={style.icon} />
        <a>Розташування: Київ</a>
      </div>
      <div className={style.info}>
        <FaPhoneAlt className={style.icon} />
        <a href="tel:+380955144040" title="Зателефонуйте нам">
          Тел. +380955144040
        </a>
      </div>
      <div className={style.info}>
        <MdOutlineEmail className={style.icon} />
        <a href="mailto:ruslan_naumenko@gmail.com">ruslan_naumenko@gmail.com</a>
      </div>
      <div className={style.info}>
        <BsInstagram className={style.icon} />
        <a
          href="https://www.instagram.com/your_profile"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          NR_car
        </a>
      </div>
      <div className={style.info}>
        <FaTelegramPlane className={style.icon} />
        <a
          href="https://t.me/your_channel"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Telegram"
        >
          Руслан Науменко
        </a>
      </div>
    </footer>
  );
}
