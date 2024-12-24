import React from "react";
import styles from "./JoinUs.module.scss";

export const JoinUs = () => {
  return (
    <section className={styles["join-section"]}>
      <h2 className={styles["join-section__title"]}>
        Запишитесь на курс{" "}
        <span className={styles["join-section__highlight"]}>
          «Нейро-прорыв БАЗА 2.0»
        </span>{" "}
        и уже через месяц вы сможете называть себя настоящим ИИ-профи!
      </h2>
      <p className={styles["join-section__subtitle"]}>
        Присоединяйтесь к дружной семье нейроманьяков и{" "}
        <span className={styles["join-section__highlight"]}>
          совершите квантовый скачок
        </span>{" "}
        в мир искусственного интеллекта! <span>🤖</span>
      </p>
      <div className={styles["join-section__contacts"]}>
        <p>
          Телеграм:{" "}
          <a
            href="https://t.me/cybermisha_team"
            target="_blank"
            rel="noopener noreferrer"
            className={styles["join-section__link"]}
          >
            https://t.me/cybermisha_team
          </a>
        </p>
        <p>
          Телефон:{" "}
          <a href="tel:+79135000055" className={styles["join-section__link"]}>
            +7 (913) 500-00-55
          </a>
        </p>
      </div>

      {/* Нижняя часть */}
      <div className={styles["join-section__cta-wrapper"]}>
        <button className={styles["join-section__button"]}>
          <span>Записаться</span>
          <svg
            role="presentation"
            className={styles["join-section__arrow"]}
            style={{ fill: "#be69ff" }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 80 180"
          >
            <path d="M54.1 109c-.8 0-1.6-.4-2-1.1-.8-1.1-.5-2.7.6-3.5 1.3-.9 6.8-4 11.6-6.6-15.9-1.3-29.2-8.3-38.5-20.2C8.9 56 8.5 24.1 13.2 3.4c.3-1.3 1.7-2.2 3-1.9 1.3.3 2.2 1.7 1.9 3-4.5 19.6-4.2 49.8 11.6 70 9 11.5 21.5 17.7 37.2 18.4l-1.8-2.3c-1.4-1.7-2.7-3.4-4.1-5.1-.7-.9-1.5-1.9-2.3-2.9-.9-1.1-.7-2.6.4-3.5 1.1-.9 2.6-.7 3.5.4 0 0 0 .1.1.1l6.4 7.9c.5.5.9 1.1 1.4 1.7 1.5 1.8 3.1 3.6 4.4 5.6 0 .1.1.1.1.2.1.3.2.5.3.8v.6c0 .2-.1.4-.2.6-.1.1-.1.3-.2.4-.1.2-.3.4-.5.6-.1.1-.3.2-.5.3-.1 0-.1.1-.2.1-1.2.6-16 8.6-18.1 10-.5.5-1 .6-1.5.6z"></path>
          </svg>
        </button>
      </div>
    </section>
  );
};
