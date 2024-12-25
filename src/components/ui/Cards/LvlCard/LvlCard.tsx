"use client";

import React from "react";
import styles from "./LvlCard.module.scss";

interface GroupedBulletPoints {
  groupTitle: string;
  items: string[];
}

interface LvlCardProps {
  heading: string;
  price: string;
  snippet: string;
  bulletPoints: GroupedBulletPoints[];
  buttonText: string;
  credit?: string;
  snippet2?: string;
  snippet2Sticker?: string;
}

export const LvlCard: React.FC<LvlCardProps> = ({
  heading,
  price,
  snippet,
  bulletPoints,
  buttonText,
  credit,
  snippet2,
  snippet2Sticker,
}) => {
  return (
    <div className={styles["lvl-card"]}>
      <div className={styles["lvl-card__header"]}>
        <h3 className={styles["lvl-card__level"]}>{heading}</h3>
        <p className={styles["lvl-card__price"]}>{price}</p>
        {credit && <p className={styles["lvl-card__credit"]}>{credit}</p>}
      </div>
      <div className={styles["lvl-card__body"]}>
        <p className={styles["lvl-card__subtitle"]}>{snippet}</p>
        <p className={styles["lvl-card__subtitle2"]}>
          {snippet2Sticker && (
            <span className={styles["lvl-card__sticker"]}>
              {snippet2Sticker}
            </span>
          )}
          <span className={styles["lvl-card__subtitle2-text"]}>{snippet2}</span>
        </p>

        {bulletPoints.map((group, index) => (
          <div key={index} className={styles["lvl-card__group"]}>
            <p className={styles["lvl-card__group-title"]}>
              <strong>{group.groupTitle}</strong>
            </p>
            <ul className={styles["lvl-card__list"]}>
              {group.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <button className={styles["lvl-card__cta"]}>{buttonText}</button>
    </div>
  );
};
