import React from "react";
import styles from "./TrustUs.module.scss";
import Image from "next/image";

export const TrustUs = () => {
  return (
    <section className={styles["trust-us"]}>
      {/* title */}
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
            <span>Выпускники</span> <br />
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
            <span>Практики</span> Startup <br /> Academy
          </h3>
          <p className={styles["trust-us__description"]}>
            Реальный опыт <br /> акселерации стартапов <br /> и вывода проектов
            <br />
            на рынок
          </p>
        </div>
      </div>

      {/* footer */}
      <p className={styles["trust-us__footer"]}>
        Наши знания и опыт проверены на практике и востребованы <br />
        крупнейшими компаниями. <strong>Мы — официальные партнёры Сбера</strong>
        , что <br /> подтверждает нашу экспертизу и надёжность.
      </p>
    </section>
  );
};
