import style from "./Risks.module.css";
import { FC } from "react";

const Risks: FC = () => {
  return (
    <div className={style.wrapperForRisks}>
      <h3 className={style.headerOfRisks}>
        Які бувають проблеми у вживаних автомобілів?
      </h3>
      <div className={style.wrapperForRisons}>
        <div className={style.cellOfRisk}>
          <h4 className={style.headerCellOfRisk}>
            Не всі авто однаково надійні.
          </h4>
          <p className={style.textCellOfRisk}>
            У кожного виробника є моделі, які часто ламаються або потребують
            дорогого обслуговування. Без досвіду легко купити “проблемну”
            машину, навіть якщо виглядає ідеально.
          </p>
        </div>
        <div className={style.cellOfRisk}>
          <h4 className={style.headerCellOfRisk}>Скручений пробіг.</h4>
          <p className={style.textCellOfRisk}>
            Одна з найпоширеніших шахрайських схем на ринку вживаних авто.
            Недобросовісні продавці легко можуть "омолодити" авто на сотні тисяч
            кілометрів.
          </p>
        </div>
        <div className={style.cellOfRisk}>
          <h4 className={style.headerCellOfRisk}>
            Авто після ДТП? Ремонт не завжди якісний.
          </h4>
          <p className={style.textCellOfRisk}>
            Щоб продати машину швидше, власники часто звертаються до дешевих
            майстрів, використовують сумнівні матеріали й нехтують технологією
            відновлення.
          </p>
        </div>
        <div className={style.cellOfRisk}>
          <h4 className={style.headerCellOfRisk}>
            Часто авто вимагає дорогого ремонту.
          </h4>
          <p className={style.textCellOfRisk}>
            Наближається строк заміни дорогих вузлів (ГРМ, турбіна, коробка,
            ходова).
          </p>
        </div>
        <div className={style.cellOfRisk}>
          <h4 className={style.headerCellOfRisk}>Прихована історія ДТП</h4>
          <p className={style.textCellOfRisk}>
            Багато власників ремонтують авто після аварії без участі страхової,
            тож у базах — "чисто". Але під красивим зовнішнім виглядом може
            ховатися серйозне ушкодження кузова чи геометрії.
          </p>
        </div>
        <div className={style.cellOfRisk}>
          <h4 className={style.headerCellOfRisk}>
            Складне спілкування з продавцем.
          </h4>
          <p className={style.textCellOfRisk}>
            Якщо авто продає перекупник, його головна мета — прибуток, а не
            чесність. Часто реальний стан машини приховується або подається в
            "кращому світлі".
          </p>
        </div>
      </div>
    </div>
  );
};

export default Risks;
