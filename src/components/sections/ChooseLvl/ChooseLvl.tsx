"use client";

import React from "react";
import styles from "./ChooseLvl.module.scss";
import { LvlCard } from "../../cards/LvlCard/LvlCard";

export const ChooseLvl = () => {
  return (
    <section className={styles["choose-lvl"]}>
      <h2 className={styles["choose-lvl__title"]}>Выберите свой уровень</h2>

      <div className={styles["choose-lvl__cards"]}>
        <LvlCard
          heading="Кибер-Новичок"
          price="39 900 ₽"
          credit="Есть рассрочка"
          snippet="Идеально для тех, кто начинает осваивать ИИ"
          bulletPoints={[
            "Доступ к видео-лекциям на 180 дней",
            "Проверка практических заданий и домашних работ",
            "Методические материалы",
            "Инструкции по настройке",
          ]}
          buttonText="Купить"
        />

        <LvlCard
          heading="Кибер-Мастер"
          price="69 900 ₽"
          credit="Есть рассрочка"
          snippet="Для тех, кто хочет углубиться в тему"
          bulletPoints={[
            "Всё из пакета «Кибер-Новичок» +",
            "Индивидуальная работа: 4 консультации с экспертом",
            "Проверка практических заданий и дополнительных заданий",
            "Поддержка и общение: закрытый чат участников",
            "Бонусы: Поддержка экспертов 180 дней + методички",
          ]}
          buttonText="Купить"
        />

        <LvlCard
          heading="Кибер-Босс"
          price="350 000 ₽"
          credit="Есть рассрочка"
          snippet="Для лидеров и бизнесменов, которые хотят внедрить ИИ в свои процессы"
          bulletPoints={[
            "Всё из пакета «Кибер-Мастер» +",
            "Полная персонализация: разбор кейсов из вашего бизнеса",
            "Промт-инжиниринг под ваши цели",
            "Индивидуальная работа с «Кибер-Мишей» и разработка стратегии",
            "Практический результат: рабочий прототип бота для вашего бизнеса",
            "Эксклюзивные бонусы: поддержка экспертов 365 дней + методичка",
          ]}
          buttonText="Купить"
        />

        <LvlCard
          heading="Кибер-Легенда"
          price="Обсудить условия"
          credit="Есть рассрочка"
          snippet="Максимум возможностей для вашего бизнеса и команды"
          bulletPoints={[
            "Всё из пакета «Кибер-Босс» +",
            "Индивидуальная программа обучения: полная адаптация курса",
            "Обучение команды (до 20 человек)",
            "Разработка продукта: создание рабочего прототипа",
            "Поддержка 365 дней + методички по защите данных",
          ]}
          buttonText="Заказать звонок"
        />
      </div>
    </section>
  );
};
