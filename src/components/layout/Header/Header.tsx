import React from "react";
import Image from "next/image";
import styles from "./Header.module.scss";
import Container from "@/components/container/Container";
import { Divider } from "@/components/ui/Divider/Divider";

export const Header = () => {
  return (
    <header className={styles["header"]}>
      <Container>
        <div className={styles["header__logo"]}>
          <Image src="/logo.svg" width={100} height={39} alt="logo" />
        </div>
      </Container>
    </header>
  );
};
