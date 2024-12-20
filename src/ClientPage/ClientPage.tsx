"use client";
import React from "react";
import styles from "./ClientPage.module.scss";
import { Header } from "@/components/layout/Header/Header";
import Container from "@/components/container/Container";
import MainSection from "@/components/sections/MainSection/MainSection";
import { CourseDetails } from "@/components/sections/CourseDetails/CourseDetails";
import { Program } from "@/components/sections/Program/Program";

export const ClientPage = () => {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <Container>
          <MainSection />
          <CourseDetails />
          <Program />
        </Container>
      </main>
    </div>
  );
};
