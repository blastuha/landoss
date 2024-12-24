import React from "react";
import styles from "./TrustUs.module.scss";
import Image from "next/image";
import { Divider } from "@/components/ui/Divider/Divider";

export const TrustUs = () => {
  return (
    <section className={styles["trust-us"]}>
      {/* title */}
      <div className={styles["trust-us__mobile"]}>
        <div className={styles["trust-us__mobile-container"]}>
          <h2 className={styles["trust-us__mobile-title"]}>Почему мы?</h2>
          <br />
          <p className={styles["trust-us__mobile-subtitle"]}>
            Кибер Миша и команда Black Mesa IT —
          </p>
          <br />
          <p className={styles["trust-us__mobile-text"]}>
            признанные эксперты по ИИ с опытом внедрения нейросетей в реальные
            бизнес-проекты. Мы не просто следим за трендами, а создаем их.
            Получите самые передовые и проверенные на практике знания и навыки.
          </p>
        </div>
      </div>

      <h2 className={styles["trust-us__title"]}>Почему нам доверяют лидеры?</h2>

      {/* столбцы */}
      <div className={styles["trust-us__items"]}>
        {/* item1 */}
        <div className={styles["trust-us__item"]}>
          <div className={styles["trust-us__icon"]}>
            <Image
              src="/trustUsSection/hat_graduate_student.svg"
              alt="Выпускники Skolkovo MBA"
              width={100}
              height={100}
            />
          </div>
          <h3 className={styles["trust-us__subtitle"]}>
            <span>Выпускники </span>
            Skolkovo MBA
          </h3>
          <p className={styles["trust-us__description"]}>
            Программы для лидеров бизнеса и инноваций
          </p>
        </div>
        {/* item2 */}
        <div className={styles["trust-us__item"]}>
          <div className={styles["trust-us__icon"]}>
            <Image
              src="/trustUsSection/lightning_effective.svg"
              alt="Выпускники Skolkovo MBA"
              width={100}
              height={100}
            />
          </div>
          <h3 className={styles["trust-us__subtitle"]}>
            <span>Эксперты</span> CDTO
          </h3>
          <p className={styles["trust-us__description"]}>
            Специалисты по цифровой трансформации
          </p>
        </div>
        {/* item3 */}
        <div className={styles["trust-us__item"]}>
          <div className={styles["trust-us__icon"]}>
            <Image
              src="/trustUsSection/startup_company_rock.svg"
              alt="Выпускники Skolkovo MBA"
              width={100}
              height={100}
            />
          </div>
          <h3 className={styles["trust-us__subtitle"]}>
            <span>Практики</span> Startup Academy
          </h3>
          <p className={styles["trust-us__description"]}>
            Реальный опыт акселерации стартапов и вывода проектов на рынок
          </p>
        </div>
      </div>

      {/* footer */}
      <Divider className={styles["divider-custom"]} fullWidth />
      <p className={styles["trust-us__footer"]}>
        Наши знания и опыт проверены на практике и востребованы крупнейшими
        компаниями. <strong>Мы — официальные партнёры Сбера</strong>, что
        подтверждает нашу экспертизу и надёжность.
      </p>
      <Divider className={styles["divider-custom"]} fullWidth />
    </section>
  );
};
