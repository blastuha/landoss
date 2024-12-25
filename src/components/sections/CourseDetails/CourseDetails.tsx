import React from "react";
import { Divider } from "../../ui/Divider/Divider";
import styles from "./CourseDetails.module.scss";
import { CustomButton } from "../../ui/CustomButton/CustomButton";

export const CourseDetails = ({ openModal }: { openModal: () => void }) => {
  const scrollToProgram = () => {
    const programSection = document.getElementById("program");
    if (programSection) {
      programSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section className={styles["course-details"]}>
      <Divider fullWidth />
      <div className={styles["course-details__effective"]}>
        <h1 className={styles["course-details__effective-title"]}>
          Ваша эффективность — наше вдохновение!
        </h1>
        <p className={styles["course-details__effective-subtitle"]}>
          Станьте лидером, который управляет будущим своего бизнеса
        </p>
        <div className={styles["course-details__effective-buttons"]}>
          <CustomButton onClick={openModal}>Записаться</CustomButton>
          <CustomButton variant="outlined" onClick={scrollToProgram}>
            Посмотреть программу
          </CustomButton>
        </div>
      </div>

      {/* Информация о длительности и формате курса */}
      <div className={styles["course-details__info"]}>
        <div className={styles["course-details__item"]}>
          <h3 className={styles["course-details__title"]}>Длительность</h3>
          <Divider className={styles["divider-custom"]} />
          <p className={styles["course-details__text"]}>4 недели</p>
        </div>
        <div className={styles["course-details__item"]}>
          <h3 className={styles["course-details__title"]}>Формат</h3>
          <Divider className={styles["divider-custom"]} />
          <p className={styles["course-details__text"]}>
            Лекции, домашние задания, воркшопы
          </p>
        </div>
      </div>

      <Divider className={styles["divider-custom"]} fullWidth />

      {/* Контент: видео и описание */}
      <div className={styles["course-details__content"]}>
        {/* Видео */}
        <div className={styles["course-details__video"]}>
          <video controls>
            <source
              src="https://www.dl.dropboxusercontent.com/scl/fi/dpr2bc4aerclzgp0iwwf5/_-_.mp4?rlkey=ik4ynkqqqa8p2bejcixczp9pi&st=vde0vc1i&dl=0"
              type="video/mp4"
            />
            Ваш браузер не поддерживает видео.
          </video>
        </div>

        {/* Описание */}
        <div className={styles["course-details__description"]}>
          <h2 className={styles["course-details__heading"]}>
            Мы учим тому, что будет <br /> в тренде даже через 10 лет!
          </h2>
          <p className={styles["course-details__paragraph"]}>
            Пока мир только догадывается, как использовать искусственный
            интеллект, мы уже создаём систему обучения и инструменты, которые
            останутся актуальными десятилетиями. Этот курс — не просто шаг
            вперёд, это прыжок в будущее. Вы научитесь работать с ИИ так, как
            другие даже не мечтали, и зададите новый вектор технологий.
          </p>
          <p className={styles["course-details__paragraph"]}>
            Хотите быть тем, кто формирует правила игры? Тогда начните прямо
            сейчас!
          </p>
        </div>
      </div>
      <Divider fullWidth />
    </section>
  );
};
