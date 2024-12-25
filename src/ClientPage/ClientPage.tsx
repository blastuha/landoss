"use client";
import React, { useState } from "react";
import styles from "./ClientPage.module.scss";
import { Header } from "@/components/layout/Header/Header";
import Container from "@/components/container/Container";
import MainSection from "@/components/sections/MainSection/MainSection";
import { CourseDetails } from "@/components/sections/CourseDetails/CourseDetails";
import { Program } from "@/components/sections/Program/Program";
import { Benefits } from "@/components/sections/Benefits/Benefits";
import { ChooseLvl } from "@/components/sections/ChooseLvl/ChooseLvl";
import { Results } from "@/components/sections/Results/Results";
import { WhyWe } from "@/components/sections/WhyWe/WhyWe";
import { TrustUs } from "@/components/sections/TrustUs/TrustUs";
import { JoinUs } from "@/components/sections/JoinUs/JoinUs";
import { ModalForm } from "@/components/ui/ModalForm/ModalForm";

export const ClientPage = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);

  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <Container>
          <MainSection />
          <CourseDetails openModal={openModal} />
          <Program />
          <Benefits />
          <ChooseLvl />
          <Results />
          <WhyWe />
          <TrustUs />
          <JoinUs openModal={openModal} />
        </Container>
      </main>
      <ModalForm isVisible={isModalVisible} onClose={closeModal} />
    </div>
  );
};
