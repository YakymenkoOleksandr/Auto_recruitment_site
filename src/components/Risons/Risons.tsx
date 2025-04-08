import styles from './Risons.module.css'

export default function Risons() {

    return (
        <div className={styles.wrapperOfRisons}>
            <h3 className={styles.headerOfRisons}>Чому варто скористатися послугами з підбору авто?</h3>
            <ul className={styles.listOfRisons}>
                <li className={styles.pointOfRisons}>Допомога у виборі оптимального варіанту за вашими критеріями.</li>
                <li className={styles.pointOfRisons}>Пошук авто з оптимальним співвідношенням ціна/якість.</li>
                <li className={styles.pointOfRisons}>Діагностика технічного стану авто.</li>
                <li className={styles.pointOfRisons}>Допомога у торгах із продавцем.</li>
                <li className={styles.pointOfRisons}>Не потрібно самостійно переглядати сотні оголошень.</li>
                <li className={styles.pointOfRisons}>Консультація з оформлення документів.</li>
            </ul>
            <p className={styles.conclusion}>Автопідбор не просто економить ваш час – він захищає від ризиків,
                а професійний торг робить послугу вигідною. Результат: ви отримуєте ідеальне авто без переплат,
                проблем і негативних емоцій.
            </p>
        </div>
    );
}