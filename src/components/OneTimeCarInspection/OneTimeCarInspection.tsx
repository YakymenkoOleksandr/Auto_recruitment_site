import { useState } from "react";
import style from "./OneTimeCarInspection.module.css";
import { TfiArrowCircleDown } from "react-icons/tfi";
import { TfiArrowCircleUp } from "react-icons/tfi";

export default function OneTimeCarInspection() {
  const [expandedStages, setExpandedStages] = useState<number[]>([]);

  const toggleStage = (index: number) => {
    if (expandedStages.includes(index)) {
      setExpandedStages(expandedStages.filter((i) => i !== index));
    } else {
      setExpandedStages([...expandedStages, index]);
    }
  };

  const stages = [
    {
      title: "1. Консультація ",
      text: "Ви телефонуєте нам, щодо обраного авто, обговорюємо тонкощі, щодо марки, моделі, комплектації вузлів та агрегатів авто. Домовляємося, щодо проведення огляду на сто чи у вибраному вами місці на певний час. Оговорюємо оплату.",
    },
    {
      title: "2. Огляд авто",
      text: "Вам надається фото та відео звіт про стан авто, якщо авто оглядається на СТО можливий звіт з ендоскопією циліндрів двигуна. Також вам надається висновок про стан авто та заключення про те чи варто його купувати.",
    },
  ];

  return (
    <div className={style.wrapper}>
      <div className={style.wrapperForStages}>
        <h2 className={style.titleForStages}>Разовий огляд авто</h2>
        <ul className={style.listForStages}>
          {stages.map((stage, index) => (
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
                <p className={style.textOfPointOfListForStages}>{stage.text}</p>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
