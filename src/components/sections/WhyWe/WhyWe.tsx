import React from "react";
import styles from "./WhyWe.module.scss";

export const WhyWe = () => {
  return (
    <section className={styles["why-we"]}>
      <div className={styles["why-we__container"]}>
        <div className={styles["why-we__content"]}>
          <h1 className={styles["why-we__title"]}>Почему мы?</h1>
          <br />
          <p className={styles["why-we__subtitle"]}>
            Кибер Миша и команда Black Mesa IT —
          </p>
          <br />
          <p className={styles["why-we__text"]}>
            признанные эксперты по ИИ с опытом внедрения нейросетей в реальные
            бизнес-проекты. Мы не просто следим за трендами, а создаем их.
            Получите самые передовые и проверенные на практике знания и навыки.
          </p>
        </div>
      </div>
    </section>
  );
};
