import React from "react";
import styles from "./CustomButton.module.scss";

export const CustomButton = ({ children }: { children: React.ReactNode }) => {
  return <button className={styles["button"]}>{children}</button>;
};
