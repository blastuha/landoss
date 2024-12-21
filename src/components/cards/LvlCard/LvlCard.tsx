"use client";

import React from "react";
import styles from "./LvlCard.module.scss";

interface LvlCardProps {
  heading: string;
  price: string;
  snippet: string;
  bulletPoints: string[];
  buttonText: string;
  credit?: string;
}

export const LvlCard: React.FC<LvlCardProps> = ({
  heading,
  price,
  snippet,
  bulletPoints,
  buttonText,
  credit,
}) => {
  return (
    <div className={styles["lvl-card"]}>
      {/* Верхняя часть карточки (цветной блок) */}
      <div className={styles["lvl-card__header"]}>
        <h3 className={styles["lvl-card__level"]}>{heading}</h3>
        <p className={styles["lvl-card__price"]}>{price}</p>
        {credit && <p className={styles["lvl-card__credit"]}>{credit}</p>}
      </div>

      {/* Основной контент (темный блок) */}
      <div className={styles["lvl-card__body"]}>
        <p className={styles["lvl-card__subtitle"]}>{snippet}</p>
        <ul className={styles["lvl-card__list"]}>
          {bulletPoints.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>

      {/* Кнопка внизу */}
      <button className={styles["lvl-card__cta"]}>{buttonText}</button>
    </div>
  );
};
