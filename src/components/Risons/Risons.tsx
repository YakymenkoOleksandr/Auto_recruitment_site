import styles from "./Risons.module.css";
import { FC } from "react";
import { useTranslation } from "react-i18next";

const Risons: FC = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.wrapperOfRisons}>
      <h3 className={styles.headerOfRisons}>{t("risons.mainHeaderRisons")}</h3>
      <ul className={styles.listOfRisons}>
        <li className={styles.pointOfRisons}>{t("risons.pointOfRisons1")}</li>
        <li className={styles.pointOfRisons}>{t("risons.pointOfRisons2")}</li>
        <li className={styles.pointOfRisons}>{t("risons.pointOfRisons3")}</li>
        <li className={styles.pointOfRisons}>{t("risons.pointOfRisons4")}</li>
        <li className={styles.pointOfRisons}>{t("risons.pointOfRisons5")}</li>
        <li className={styles.pointOfRisons}>{t("risons.pointOfRisons6")}</li>
      </ul>
      <p className={styles.conclusion}>{t("risons.conclusion")}</p>
    </div>
  );
};

export default Risons;
