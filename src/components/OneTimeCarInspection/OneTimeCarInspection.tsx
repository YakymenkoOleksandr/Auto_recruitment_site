import { useState, useRef } from "react";
import style from "./OneTimeCarInspection.module.css";
import { TfiArrowCircleDown, TfiArrowCircleUp } from "react-icons/tfi";
import { useTranslation } from "react-i18next";

interface StageItem {
  title: string;
  text: string;
}

export default function OneTimeCarInspection() {
  const [expandedStages, setExpandedStages] = useState<number[]>([]);
  const oneTimeCarInspecrionRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();

  const toggleStage = (index: number): void => {
    if (expandedStages.includes(index)) {
      setExpandedStages(expandedStages.filter((i) => i !== index));
    } else {
      setExpandedStages([...expandedStages, index]);
    }
  };

  const stagesOneTime = t("stagesOneTime.items", {
    returnObjects: true,
  }) as StageItem[];

  return (
    <div
      ref={oneTimeCarInspecrionRef}
      id="oneTimeCarInspecrion"
      className={style.wrapper}
    >
      <div className={style.wrapperForStages}>
        <h2 className={style.titleForStages}>
          {t("stagesOneTime.mainHeaderStages")}
        </h2>
        <ul className={style.listForStages}>
          {stagesOneTime.map((stage, index) => (
            <li key={index} className={style.pointOfListForStages}>
              <div
                className={style.titleOfPointOfListForStages}
                onClick={(e: React.MouseEvent<HTMLDivElement>) => {
                  e.stopPropagation();
                  toggleStage(index);
                }}
              >
                <strong className={style.title}>{stage.title}</strong>
                {expandedStages.includes(index) ? (
                  <TfiArrowCircleUp className={style.icon} />
                ) : (
                  <TfiArrowCircleDown className={style.icon} />
                )}
              </div>
              {expandedStages.includes(index) && (
                <p className={style.textOfPointOfListForStages}>{stage.text}</p>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
