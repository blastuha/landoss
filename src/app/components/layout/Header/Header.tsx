import React from "react";
import Image from "next/image";
import Container from "../../container/Container";
import styles from "./Header.module.scss";

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
