import style from './Stages.module.css';

export default function Stages() {

    return (
        <div className={style.wrapperForStages}>
            <h4 className={style.titleForStages}>Автопідбір під ключ</h4> 
            <ul className={style.listForStages}>
                <li className={style.pointOfListForStages}>
                    <strong className={style.titleOfPointOfListForStages}>1. Консультація та визначення критеріїв</strong>
                    <p className={style.textOfPointOfListForStages}>
                       Першим етапом є визначення бажаного автомобіля або декількох моделей,
                       що підходять за вашими критеріями. Оговорюємо бюджет, допустимі роки випуску автомобіля,
                       пробіг та комплектацію. Також оговорюємо ціну за послугу автопідбору під ключ.
                    </p>
                </li>
                <li className={style.pointOfListForStages}>
                    <strong className={style.titleOfPointOfListForStages}>2. Підписання договору</strong>
                    <p className={style.textOfPointOfListForStages}>
                        Після узгодження всіх вимог до бажаного авто та ціни за послугу
                        зустрічаємся та заключаємо договір про надання послуг автопідбору.
                    </p>
                </li>
                <li className={style.pointOfListForStages}>
                    <strong className={style.titleOfPointOfListForStages}>3. Пошук варіантів</strong>
                    <p className={style.textOfPointOfListForStages}>
                        Здійснюється аналіз всіх авто, які підходять за вашими критеріями та відсіюються
                        ризиковані варіанти. Найбільш привабливі автівки відбираються та надсилаються на узгодження.
                    </p>
                </li>
                <li className={style.pointOfListForStages}>
                    <strong className={style.titleOfPointOfListForStages}>4. Онлайн-огляд та узгодження</strong>
                    <p className={style.textOfPointOfListForStages}>
                        Якщо одна з надісланих автівок вам подобається то комунікуємо з продавцем та узгоджуємо виїздний огляд.
                       Якщо ні, то продовжуємо пошук авто, яке буде більш підходящим для вас.
                    </p>
                </li>
                <li className={style.pointOfListForStages}>
                    <strong className={style.titleOfPointOfListForStages}>5. Виїзний огляд найкращих варіантів</strong>
                    <p className={style.textOfPointOfListForStages}>
                        На виїздній діагностиці перевіряємо лакофарбове покриття, геометрію, стан салону,
                        робимо комп'ютерну діагностику, визначаємо пробіг, помилки, наявність подушок безпеки.
                        Робиться фото та відео звіт про стан авто та його недоліки, а також висновок про те
                        чи варто розглядати дане авто для його діагностики на СТО.
                    </p>
                </li>
                <li className={style.pointOfListForStages}>
                    <strong className={style.titleOfPointOfListForStages}>6. Детальна діагностика на СТО</strong>
                    <p className={style.textOfPointOfListForStages}>
                        В залежності від авто та ваших уподобань домовляємося з необхідним СТО де більш детально робимо огляд
                        ходової частини автомобіля, ендоскопію для встановлення стану циліндрів двигуна, також механіки дають
                        своє заключення про необхідність заміни тих чи інших деталей автівки. На даному етапі ви також
                        отримуєте звіт про виконану роботу в фото та відео форматі.  </p> 
                </li>
                <li className={style.pointOfListForStages}>
                    <strong className={style.titleOfPointOfListForStages}>7. Супровід угоди</strong>
                    <p className={style.textOfPointOfListForStages}>
                       Якщо авто проходить СТО та відповідає вашим параметрам, відбуваються торги з продавцем, виходячи з
                       реальної ринкової вартості авто, його стану та виявлених недоліків домовляємося про ціну. Після узгодження
                       ціни оранізовуємо переоформлення автомобіля на МРЕО. </p>
                </li>
            </ul>
            
        </div>
    );
    
}