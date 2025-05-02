import style from "./Footer.module.css";
import { IoLocationOutline, IoTimeOutline } from "react-icons/io5";
import { FaPhoneAlt, FaTelegramPlane } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { BsInstagram, BsFacebook } from "react-icons/bs";
import { FC } from "react";
import { useTranslation } from "react-i18next";

const Footer: FC = () => {
  const { t } = useTranslation();
  return (
    <footer className={style.footer}>
      <div className={style.footerContainer}>
        <div className={style.contactBlock}>
          <h3 className={style.blockTitle}>{t("footer.contacts")}</h3>
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
            <a href="tel:+380955144040">+38 (095) 514-40-40</a>
          </div>
          <div className={style.contactItem}>
            <MdOutlineEmail className={style.icon} />
            <a href="mailto:ruslan_naumenko@gmail.com">
              ruslan_naumenko@gmail.com
            </a>
          </div>
        </div>

        <div className={style.socialBlock}>
          <h3 className={style.blockTitle}>{t("footer.sotial")}</h3>
          <div className={style.socialLinks}>
            <a
              href="https://www.instagram.com/NR_car"
              target="_blank"
              rel="noopener noreferrer"
              className={style.socialLink}
            >
              <BsInstagram className={style.socialIcon} />
              <span>Instagram</span>
            </a>
            <a
              href="https://t.me/your_channel"
              target="_blank"
              rel="noopener noreferrer"
              className={style.socialLink}
            >
              <FaTelegramPlane className={style.socialIcon} />
              <span>Telegram</span>
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className={style.socialLink}
            >
              <BsFacebook className={style.socialIcon} />
              <span>Facebook</span>
            </a>
          </div>
        </div>

        <div className={style.navBlock}>
          <h3 className={style.blockTitle}>{t("footer.navigation")}</h3>
          <nav className={style.navLinks}>
            <a href="/" className={style.navLink}>
              {t("footer.mainPage")}
            </a>
            <a href="/services" className={style.navLink}>
              {t("footer.services")}
            </a>
            <a href="/about" className={style.navLink}>
              {t("footer.aboutus")}
            </a>
            <a href="/blog" className={style.navLink}>
              {t("footer.blog")}
            </a>
            <a href="/contacts" className={style.navLink}>
              {t("footer.contact")}
            </a>
          </nav>
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
