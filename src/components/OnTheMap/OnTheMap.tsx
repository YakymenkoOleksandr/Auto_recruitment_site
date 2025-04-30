import style from "./OnTheMap.module.css";
import { FC } from "react";

const OnTheMap: FC = () => {
  return (
    <div className={style.wrapperForMapBlock}>
      <h3 className={style.headerForMapBlock}>Ми на карті</h3>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2543.3117510432553!2d30.475655276057168!3d50.398027391137624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4c915617a9af3%3A0xd31a985f34f18128!2z0JDQstGC0L7Qv9GW0LTQsdGW0YAsINC_0LXRgNC10LLRltGA0LrQsCDQsNCy0YLQviDQv9C10YDQtdC0INC60YPQv9GW0LLQu9C10Y4gTlJfQ2Fy!5e0!3m2!1sru!2sua!4v1744413416040!5m2!1sru!2sua"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Maps Location"
        className={style.map}
      ></iframe>
    </div>
  );
};

export default OnTheMap;
