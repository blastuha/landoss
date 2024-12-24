import React from "react";
import styles from "./Results.module.scss";
import { Divider } from "@/components/ui/Divider/Divider";

export const Results = () => {
  return (
    <section className={styles.results}>
      <Divider fullWidth />
      <h2 className={styles["results__title"]}>Ваши результаты после курса</h2>
      <div className={styles["results__list"]}>
        <div className={styles["results__item"]}>
          <span className={styles["results__number"]}>1</span>
          <p className={styles["results__text"]}>
            <span className={styles["results__highlight"]}>Увеличите</span>{" "}
            скорость выполнения
            <br /> задач и качество работы
          </p>
        </div>
        <div className={styles["results__item"]}>
          <span className={styles["results__number"]}>2</span>
          <p className={styles["results__text"]}>
            <span className={styles["results__highlight"]}>Делегируете</span>{" "}
            рутину <br /> искусственному интеллекту
          </p>
        </div>
        <div className={styles["results__item"]}>
          <span className={styles["results__number"]}>3</span>
          <p className={styles["results__text"]}>
            <span className={styles["results__highlight"]}>
              Автоматизируете
            </span>{" "}
            рабочие <br /> процессы вашей команды
          </p>
        </div>
        <div className={styles["results__item"]}>
          <span className={styles["results__number"]}>4</span>
          <p className={styles["results__text"]}>
            <span className={styles["results__highlight"]}>Увеличите</span>{" "}
            продуктивность <br /> и достигнете большего
          </p>
        </div>
        <div className={styles["results__item"]}>
          <span className={styles["results__number"]}>5</span>
          <p className={styles["results__text"]}>
            <span className={styles["results__highlight"]}>Оптимизируете</span>{" "}
            бизнес-процессы <br /> и аналитику
          </p>
        </div>
        <div className={styles["results__item"]}>
          <span className={styles["results__number"]}>6</span>
          <p className={styles["results__text"]}>
            <span className={styles["results__highlight"]}>Создадите</span>{" "}
            конкурентное <br /> преимущество с помощью ИИ
          </p>
        </div>
      </div>
      <button className={styles["results__button"]}>
        Скидка для студентов 15%
      </button>
    </section>
  );
};
