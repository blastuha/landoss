"use client";
import React from "react";
import styles from "./ClientPage.module.scss";
import { Header } from "@/components/layout/Header/Header";
import Container from "@/components/container/Container";
import MainSection from "@/components/sections/MainSection/MainSection";
import { CourseDetails } from "@/components/sections/CourseDetails/CourseDetails";
import { Program } from "@/components/sections/Program/Program";
import { Benefits } from "@/components/sections/Benefits/Benefits";
import { ChooseLvl } from "@/components/sections/ChooseLvl/ChooseLvl";
import { Results } from "@/components/sections/Results/Results";

export const ClientPage = () => {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <Container>
          <MainSection />
          <CourseDetails />
          <Program />
          <Benefits />
          <ChooseLvl />
          <Results />
        </Container>
      </main>
    </div>
  );
};
