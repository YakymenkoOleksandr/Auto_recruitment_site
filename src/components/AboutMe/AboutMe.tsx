import style from "./AboutMe.module.css";
import { useRef, FC } from "react";

const AboutMe: FC = () => {
  const aboutMe = useRef<HTMLDivElement>(null);
  return (
    <div className={style.wrapperForAboutMe} ref={aboutMe} id="aboutMe">
      <img
        src="./img/Ruslan_1_desktop_enhanced.jpg"
        alt="Руслан Науменко автоексперт"
        className={style.mainImg}
      />
      <p className={style.text}>
        Привіт! Мене звати Руслан, більше п’яти років я займаюсь автопідбором,
        допомагаючи клієнтам знаходити ідеальні авто з урахуванням їхніх потреб
        та бюджету. За ці роки я перевірив сотні різних автомобілів, навчився
        розпізнавати навіть найменші технічні нюанси та приховані дефекти. Тому
        хочу трошки більше розповісти про нюанси, які бувають при підборі
        автівки, а також чому варто скористатися послугами автопідбору.
      </p>
    </div>
  );
};

export default AboutMe;
