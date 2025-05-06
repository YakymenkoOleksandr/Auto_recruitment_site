import style from "./AboutMe.module.css";
import { useRef, FC } from "react";
import { useTranslation } from "react-i18next";

const AboutMe: FC = () => {
  const aboutMe = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();

  return (
    <div className={style.wrapperForAboutMe} ref={aboutMe} id="aboutMe">
      <img
        src="./img/Ruslan_1_desktop_enhanced.jpg"
        alt="Руслан Науменко автоексперт"
        className={style.mainImg}
      />
      <h1 className={style.mainHeader}>{t("aboutMe.mainHeaderOfSite")}</h1>
      <p className={style.text}>
        {t("aboutMe.description")}
      </p>
    </div>
  );
};

export default AboutMe;
