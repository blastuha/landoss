"use client";

import React from "react";
import styles from "./Program.module.scss";
import { AccordionComponent } from "@/components/ui/Accordeon/Accordeon";

const accordionItems = [
  {
    title: "Введение",
    content: "Введение",
  },
  {
    title: "Модуль 1: Основы нейронных сетей",
    content: (
      <ul>
        <li>Теория: «Кратко про нейросети»</li>
        <li>Теория: «Что такое ChatGPT и промт-инжиниринг»</li>
        <li>Теория: «Какие бывают ChatGPT?»</li>
        <li>Теория: «Нейро-профессии»</li>
        <li>Теория: «Авторская техника РОЗА промтов Кибер-Миши»</li>
      </ul>
    ),
  },
  {
    title: "Модуль 2: Введение в промт-инжиниринг",
    content: (
      <ul>
        <li>Начало работы с ChatGPT: Регистрация и интерфейс</li>
        <li>Начало работы с ChatGPT: 1 правило «Р» — Роль</li>
        <li>Начало работы с ChatGPT: 2 правило «О» — Окружение</li>
        <li>Начало работы с ChatGPT: 3 правило «З» — Задача</li>
        <li>Начало работы с ChatGPT: 4 правило «А» — Архитектура ответа</li>
        <li>Начало работы с ChatGPT: «РОЗА промтов Кибер-Миши» на практике</li>
      </ul>
    ),
  },
  {
    title: "Модуль 3: Работа с текстовыми моделями (text to text)",
    content: (
      <ul>
        <li>Практика: ChatGPT и работа в HR</li>
        <li>Практика: ChatGPT и работа с таблицами</li>
        <li>Практика: ChatGPT и работа в психологии</li>
        <li>Практика: ChatGPT и работа в маркетинге</li>
        <li>Практика: Suno и ChatGPT в музыке</li>
        <li>Практика: GitChat и работа с продажами</li>
        <li>Практика: Техники проверки ChatGPT на корректность ответов</li>
      </ul>
    ),
  },
  {
    title: "Модуль 4: Работа с визуальными моделями (text to image)",
    content: (
      <ul>
        <li>Как зарегистрироваться в Midjourney</li>
        <li>Правила генерации изображений в Midjourney</li>
        <li>Правила генерации изображений в ChatGPT</li>
        <li>Правила генерации изображений в Kandinsky</li>
      </ul>
    ),
  },
  {
    title: "Послесловие",
    content: "Завершение и заключение по курсу",
  },
];

export const Program = () => {
  return (
    <section className={styles["program"]}>
      <h1 className={styles["program__title"]}>
        Программа курса «Нейро-Прорыв БАЗА 2.0»
      </h1>
      <AccordionComponent items={accordionItems} />
    </section>
  );
};
