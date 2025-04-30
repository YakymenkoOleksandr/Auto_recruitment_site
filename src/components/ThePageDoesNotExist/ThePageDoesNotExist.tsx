import style from "./ThePageDoesNotExist.module.css";
import { FC } from "react";

const ThePageDoesNotExist: FC = () => {
  return (
    <div className={style.wrapperForNotExistPage}>
      <p className={style.textForNotExistPage}>
        Ой... Щось пішло не так. Здається такої сторінки не існує.
      </p>
    </div>
  );
};

export default ThePageDoesNotExist;
