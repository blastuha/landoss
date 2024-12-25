import React, { useState } from "react";
import { InputMask } from "@react-input/mask";
import styles from "./ModalForm.module.scss";

export const ModalForm = ({
  isVisible,
  onClose,
}: {
  isVisible: boolean;
  onClose: () => void;
}) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
  const [checkboxError, setCheckboxError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Проверка имени
    if (!name.trim()) {
      setNameError(true);
    } else {
      setNameError(false);
    }

    // Проверка телефона
    if (!phone.trim() || phone.length < 18) {
      setPhoneError(true);
    } else {
      setPhoneError(false);
    }

    // Проверка чекбокса
    if (!isCheckboxChecked) {
      setCheckboxError(true);
    } else {
      setCheckboxError(false);
    }

    // Если есть ошибки, форма не отправляется
    if (
      !name.trim() ||
      !phone.trim() ||
      phone.includes("_") ||
      !isCheckboxChecked
    ) {
      return;
    }

    console.log("Form submitted", { name, phone, isCheckboxChecked });
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    if (e.target.value.trim()) {
      setNameError(false);
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
    if (e.target.value.trim() && !e.target.value.includes("_")) {
      setPhoneError(false);
    }
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsCheckboxChecked(e.target.checked);
    if (e.target.checked) {
      setCheckboxError(false);
    }
  };

  if (!isVisible) return null;

  return (
    <div className={styles.modal}>
      <div className={styles.modal__overlay} onClick={onClose}></div>
      <div className={styles.modal__content}>
        <h2 className={styles.modal__title}>Оставить заявку</h2>
        <form className={styles.modal__form} onSubmit={handleFormSubmit}>
          {/* Поле ввода имени */}
          <div className={styles.modal__inputBlock}>
            <input
              type="text"
              placeholder="Имя"
              className={styles.modal__input}
              value={name}
              onChange={handleNameChange}
            />
            {nameError && (
              <div className={styles.modal__error}>
                Пожалуйста, заполните имя
              </div>
            )}
          </div>

          {/* Поле ввода телефона */}
          <div className={styles.modal__inputBlock}>
            <InputMask
              mask="+7 (###) ###-##-##"
              replacement={{ "#": /\d/ }}
              className={styles.modal__input}
              placeholder="+7 (___) ___-__-__"
              value={phone}
              onChange={handlePhoneChange}
            />
            {phoneError && (
              <div className={styles.modal__error}>
                Пожалуйста, введите корректный номер телефона
              </div>
            )}
          </div>

          {/* Чекбокс */}
          <label className={styles.modal__checkboxWrapper}>
            <input
              type="checkbox"
              className={styles.modal__checkbox}
              checked={isCheckboxChecked}
              onChange={handleCheckboxChange}
            />
            <span className={styles.modal__checkboxText}>
              Я согласен с политикой конфиденциальности
            </span>
          </label>
          {checkboxError && (
            <div className={styles.modal__error}>
              Вы должны согласиться с политикой конфиденциальности
            </div>
          )}

          {/* Кнопка отправки */}
          <button type="submit" className={styles.modal__button}>
            Отправить
          </button>
        </form>
      </div>
    </div>
  );
};
