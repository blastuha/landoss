import React from "react";
import styles from "./MainSection.module.scss";
import { CustomButton } from "../../ui/CustomButton/CustomButton";
import { Divider } from "@/components/ui/Divider/Divider";

const MainSection = () => {
  return (
    <section className={styles["main-section"]}>
      <div className={styles["main-section__container"]}>
        {/* Левая часть: Текстовый блок */}
        <div className={styles["main-section__wrapper"]}>
          <div className={styles["main-section__content"]}>
            <h1 className={styles["main-section__title"]}>
              «Нейро-
              {/* <br /> */}
              прорыв БАЗА 2.0» <p>от Black Mesa IT! 🚀</p>
            </h1>

            <p className={styles["main-section__subtitle"]}>
              Освойте ИИ за 1 месяц!
            </p>
            <br />
            <p className={styles["main-section__subtitle-expert"]}>
              🚀 Станьте экспертом в области ИИ и увеличьте свои доходы в 3
              раза!
            </p>
            <br />
            <ul className={styles["main-section__list"]}>
              <li className={styles["main-section__item"]}>
                <strong>Решайте задачи за минуты:</strong> автоматизация
                рутинных процессов с помощью ИИ
              </li>
              <li className={styles["main-section__item"]}>
                <strong>Освойте трендовые инструменты:</strong> ChatGPT,
                MidJourney, DALL-E и многое другое
              </li>
              <li className={styles["main-section__item"]}>
                <strong>Увеличьте доход:</strong> применяйте навыки для
                контента, аналитики, управления и дизайна
              </li>
            </ul>
          </div>

          {/* Правая часть: Форма */}
          <div className={styles["main-section__form-block"]}>
            <div className={styles["main-section__form"]}>
              <h3 className={styles["main-section__form-title"]}>
                Оставь заявку и мы все расскажем!
              </h3>
              <form className={styles["main-section__form-wrapper"]}>
                <input
                  type="text"
                  placeholder="Имя"
                  className={styles["main-section__form-input"]}
                />
                <input
                  type="tel"
                  placeholder="+7 (999) 999-99-99"
                  className={styles["main-section__form-input"]}
                />
                <label className={styles["main-section__form-checkbox"]}>
                  <input type="checkbox" />Я согласен с политикой
                  конфиденциальности
                </label>
                <CustomButton>Получить консультацию</CustomButton>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainSection;
