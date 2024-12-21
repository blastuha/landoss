"use client";

import React from "react";
import Image from "next/image";
import styles from "./Benefits.module.scss";

export const Benefits = () => {
  return (
    <section className={styles["benefits"]}>
      <h2 className={styles["benefits__title"]}>Что вы получите?</h2>

      <div className={styles["benefits__content"]}>
        {/* Левая часть со списком блоков */}
        <div className={styles["benefits__left"]}>
          <div
            className={`${styles["benefits__item"]} ${styles["benefits__item--active"]}`}
          >
            Полный контроль над ИИ-инструментами
          </div>
          <div className={styles["benefits__item"]}>
            Индивидуальное обучение <br />и практические результаты
          </div>
          <div className={styles["benefits__item"]}>
            Решение конкретных задач вашего бизнеса
          </div>
          <div className={styles["benefits__item"]}>
            Защиту и безопасность ваших данных
          </div>
          <div className={styles["benefits__item"]}>
            Подготовку вашей команды к работе <br />с ИИ
          </div>
        </div>

        {/* Правая часть с изображением */}
        <div className={styles["benefits__right"]}>
          <Image
            src="/benefitsImg.png"
            alt="Иллюстрация руки-робота"
            width={560}
            height={560}
            priority
          />
        </div>
      </div>

      {/* Кнопка внизу */}
      <div className={styles["benefits__footer"]}>
        <button className={styles["benefits__cta"]}>
          ➡️ Выберите свой пакет и становитесь лидером индустрии!
        </button>
      </div>
    </section>
  );
};
