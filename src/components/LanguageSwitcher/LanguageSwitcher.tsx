import { useTranslation } from "react-i18next";
import styles from "./LanguageSwitcher.module.css";
import { FC } from "react";

const LanguageSwitcher: FC = () => {
  const { i18n } = useTranslation();
  const languages = [
    { code: "uk", label: "UA" },
    { code: "ru", label: "RU" },
    { code: "en", label: "ENG" },
  ];

  const changeLenguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className={styles.switcher}>
      {languages.map((lng) => (
        <button
          key={lng.code}
          onClick={() => changeLenguage(lng.code)}
          className={i18n.language === lng.code ? styles.active : ""}
          disabled={i18n.language === lng.code}
        >
          {lng.label}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
