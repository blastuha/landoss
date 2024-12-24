"use client";

import React, { useState } from "react";
import classNames from "classnames";
import Image from "next/image";
import styles from "./Benefits.module.scss";

export const Benefits = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const items = [
    "Полный контроль над ИИ-инструментами",
    "Индивидуальное обучение и практические результаты",
    "Решение конкретных задач вашего бизнеса",
    "Защиту и безопасность ваших данных",
    "Подготовку вашей команды к работе с ИИ",
  ];

  const getImageSrc = (index: number) =>
    `/benefitsSection/benefitsImg${index + 1}.png`;

  return (
    <section className={styles["benefits"]}>
      <h2 className={styles["benefits__title"]}>Что вы получите?</h2>

      <div className={styles["benefits__content"]}>
        {/* Левая часть со списком блоков */}
        <div className={styles["benefits__left"]}>
          {items.map((item, index) => (
            <div
              key={index}
              className={classNames(styles["benefits__item"], {
                [styles["benefits__item--active"]]: activeIndex === index,
              })}
              onClick={() => setActiveIndex(index)}
            >
              {item}
            </div>
          ))}
        </div>

        {/* Правая часть с изображением */}
        <div className={styles["benefits__right"]}>
          <img
            src={getImageSrc(activeIndex)}
            alt={`Иллюстрация для блока ${items[activeIndex]}`}
            // width={560}
            // height={560}
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
