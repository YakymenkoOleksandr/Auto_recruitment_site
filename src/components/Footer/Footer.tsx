import style from "./Footer.module.css";
import { IoLocationOutline, IoTimeOutline } from "react-icons/io5";
import { FaPhoneAlt, FaTelegramPlane } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FC } from "react";
import { useTranslation } from "react-i18next";

const Footer: FC = () => {
  const { t } = useTranslation();
  return (
    <footer className={style.footer}>
      <div className={style.footerContainer}>
        <div className={style.contactBlock}>
          <h6 className={style.blockTitle}>{t("footer.contacts")}</h6>
          <div className={style.contactItem}>
            <IoLocationOutline className={style.icon} />
            <span>{t("footer.address")}</span>
          </div>
          <div className={style.contactItem}>
            <IoTimeOutline className={style.icon} />
            <span>{t("footer.time")}</span>
          </div>
          <div className={style.contactItem}>
            <FaPhoneAlt className={style.icon} />
            <a href="tel:+380955144040" className={style.contacts}>+38 (095) 514-40-40</a>
          </div>
        </div>

        <div className={style.socialBlock}>
          <h6 className={style.blockTitle}>{t("footer.sotial")}</h6>
          <div className={style.socialLinks}>
            <a
              href="https://www.instagram.com/NR_car"
              target="_blank"
              rel="noopener noreferrer"
              className={style.socialLink}
            >
              <BsInstagram className={style.socialIcon} />
              <span className={style.contacts}>Instagram</span>
            </a>
            <a
              href="https://t.me/rogozov07"
              target="_blank"
              rel="noopener noreferrer"
              className={style.socialLink}
            >
              <FaTelegramPlane className={style.socialIcon} />
              <span className={style.contacts}>Telegram</span>
            </a>
          </div>
        </div>
      </div>

      <div className={style.copyright}>
        <p>
          © {new Date().getFullYear()} {t("footer.rights")}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
