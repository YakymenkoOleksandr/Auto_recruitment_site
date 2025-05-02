import style from "./Risks.module.css";
import { FC } from "react";
import { useTranslation } from "react-i18next";

const Risks: FC = () => {
  const { t } = useTranslation();

  return (
    <div className={style.wrapperForRisks}>
      <h3 className={style.headerOfRisks}>
        {t("risks.mainHeaderRisks")}
      </h3>
      <div className={style.wrapperForRisons}>
        <div className={style.cellOfRisk}>
          <h4 className={style.headerCellOfRisk}>
            {t("risks.headerCellOfRisk1")}
          </h4>
          <p className={style.textCellOfRisk}>
            {t("risks.textCellOfRisk1")}
          </p>
        </div>
        <div className={style.cellOfRisk}>
          <h4 className={style.headerCellOfRisk}>{t("risks.headerCellOfRisk2")}</h4>
          <p className={style.textCellOfRisk}>
            {t("risks.textCellOfRisk2")}
          </p>
        </div>
        <div className={style.cellOfRisk}>
          <h4 className={style.headerCellOfRisk}>
            {t("risks.headerCellOfRisk3")}
          </h4>
          <p className={style.textCellOfRisk}>
            {t("risks.textCellOfRisk3")}
          </p>
        </div>
        <div className={style.cellOfRisk}>
          <h4 className={style.headerCellOfRisk}>
            {t("risks.headerCellOfRisk4")}
          </h4>
          <p className={style.textCellOfRisk}>
            {t("risks.textCellOfRisk4")}
          </p>
        </div>
        <div className={style.cellOfRisk}>
          <h4 className={style.headerCellOfRisk}>{t("risks.headerCellOfRisk5")}</h4>
          <p className={style.textCellOfRisk}>
            {t("risks.textCellOfRisk5")}
          </p>
        </div>
        <div className={style.cellOfRisk}>
          <h4 className={style.headerCellOfRisk}>
            {t("risks.headerCellOfRisk6")}
          </h4>
          <p className={style.textCellOfRisk}>
            {t("risks.textCellOfRisk6")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Risks;
