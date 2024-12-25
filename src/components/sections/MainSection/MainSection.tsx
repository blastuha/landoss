import React, { useState } from "react";
import { InputMask } from "@react-input/mask";
import styles from "./MainSection.module.scss";
import { CustomButton } from "../../ui/CustomButton/CustomButton";

const MainSection = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Form submitted", { name, phone, isCheckboxChecked });
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsCheckboxChecked(e.target.checked);
  };

  return (
    <section className={styles["main-section"]}>
      <div className={styles["main-section__container"]}>
        {/* Левая часть: Текстовый блок */}
        <div className={styles["main-section__wrapper"]}>
          <div className={styles["main-section__content"]}>
            <h1 className={styles["main-section__title"]}>
              «Нейро-прорыв БАЗА 2.0» <p>от Black Mesa IT! 🚀</p>
            </h1>

            <p className={styles["main-section__subtitle"]}>
              Освойте ИИ за 1 месяц!
            </p>
            <p className={styles["main-section__subtitle-expert"]}>
              🚀 Станьте экспертом в области ИИ и увеличьте свои доходы в 3
              раза!
            </p>
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
              <form
                className={styles["main-section__form-wrapper"]}
                onSubmit={handleFormSubmit}
              >
                {/* Поле имени */}
                <input
                  type="text"
                  placeholder="Имя"
                  className={styles["main-section__form-input"]}
                  value={name}
                  onChange={handleNameChange}
                  required
                />

                {/* Поле телефона с маской */}
                <InputMask
                  mask="+7 (###) ###-##-##"
                  replacement={{ "#": /\d/ }}
                  className={styles["main-section__form-input"]}
                  placeholder="+7 (___) ___-__-__"
                  value={phone}
                  onChange={handlePhoneChange}
                  required
                />

                {/* Чекбокс */}
                <label className={styles["main-section__form-checkbox"]}>
                  <input
                    type="checkbox"
                    checked={isCheckboxChecked}
                    onChange={handleCheckboxChange}
                    required
                  />
                  Я согласен с политикой конфиденциальности
                </label>

                {/* Кнопка отправки */}
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
