import { useState, useRef, FC } from "react";
import style from "./SearchAutoAllDay.module.css";
import { TfiArrowCircleDown, TfiArrowCircleUp } from "react-icons/tfi";
import { useTranslation } from "react-i18next";

interface StageItem {
  title: string;
  text: string;
}

const Stages: FC = () => {
  const [expandedStages, setExpandedStages] = useState<number[]>([]);
  const stagesRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();

  const toggleStage = (index: number): void => {
    if (expandedStages.includes(index)) {
      setExpandedStages(expandedStages.filter((i) => i !== index));
    } else {
      setExpandedStages([...expandedStages, index]);
    }
  };

  const stages = t("searchAutoAllDay.items", { returnObjects: true }) as StageItem[];

  return (
    <div ref={stagesRef} id="stages" className={style.wrapper}>
      <div className={style.wrapperForStages}>
        <h4 className={style.titleForStages}>{t("searchAutoAllDay.mainHeaderSearchAutoAllDay")}</h4>
        <ul className={style.listForStages}>
          {stages.map(
            (stage: { title: string; text: string }, index: number) => (
              <li key={index} className={style.pointOfListForStages}>
                <div
                  className={style.titleOfPointOfListForStages}
                  onClick={() => toggleStage(index)}
                >
                  <strong className={style.title}>{stage.title}</strong>
                  {expandedStages.includes(index) ? (
                    <TfiArrowCircleUp className={style.icon} />
                  ) : (
                    <TfiArrowCircleDown className={style.icon} />
                  )}
                </div>
                {expandedStages.includes(index) && (
                  <p className={style.textOfPointOfListForStages}>
                    {stage.text}
                  </p>
                )}
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default Stages;
