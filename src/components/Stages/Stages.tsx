import { useState } from "react";
import style from "./Stages.module.css";
import { TfiArrowCircleDown } from "react-icons/tfi";
import { TfiArrowCircleUp } from "react-icons/tfi";

export default function Stages() {
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
      title: "1. Консультація та визначення критеріїв",
      text: "Першим етапом є визначення бажаного автомобіля або декількох моделей, що підходять за вашими критеріями. Оговорюємо бюджет, допустимі роки випуску автомобіля, пробіг та комплектацію. Також оговорюємо ціну за послугу автопідбору під ключ."
    },
    {
      title: "2. Підписання договору",
      text: "Після узгодження всіх вимог до бажаного авто та ціни за послугу зустрічаємся та заключаємо договір про надання послуг автопідбору."
    },
    {
      title: "3. Пошук варіантів",
      text: "Здійснюється аналіз всіх авто, які підходять за вашими критеріями та відсіюються ризиковані варіанти. Найбільш привабливі автівки відбираються та надсилаються на узгодження."
    },
    {
      title: "4. Онлайн-огляд та узгодження",
      text: "Якщо одна з надісланих автівок вам подобається то комунікуємо з продавцем та узгоджуємо виїздний огляд. Якщо ні, то продовжуємо пошук авто, яке буде більш підходящим для вас."
    },
    {
      title: "5. Виїзний огляд найкращих варіантів",
      text: "На виїздній діагностиці перевіряємо лакофарбове покриття, геометрію, стан салону, робимо комп'ютерну діагностику, визначаємо пробіг, помилки, наявність подушок безпеки. Робиться фото та відео звіт про стан авто та його недоліки, а також висновок про те чи варто розглядати дане авто для його діагностики на СТО."
    },
    {
      title: "6. Детальна діагностика на СТО",
      text: "В залежності від авто та ваших уподобань домовляємося з необхідним СТО де більш детально робимо огляд ходової частини автомобіля, ендоскопію для встановлення стану циліндрів двигуна, також механіки дають своє заключення про необхідність заміни тих чи інших деталей автівки. На даному етапі ви також отримуєте звіт про виконану роботу в фото та відео форматі."
    },
    {
      title: "7. Супровід угоди",
      text: "Якщо авто проходить СТО та відповідає вашим параметрам, відбуваються торги з продавцем, виходячи з реальної ринкової вартості авто, його стану та виявлених недоліків домовляємося про ціну. Після узгодження ціни оранізовуємо переоформлення автомобіля на МРЕО."
    }
  ];

  return (
    <div className={style.wrapper}>
      <div className={style.wrapperForStages}>
        <h2 className={style.titleForStages}>Автопідбір під ключ</h2>
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
                    <TfiArrowCircleDown className={style.icon}/>
                )}
              </div>
              {expandedStages.includes(index) && (
                <p className={style.textOfPointOfListForStages}>
                  {stage.text}
                </p>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}