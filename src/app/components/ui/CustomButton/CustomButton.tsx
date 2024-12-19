import React from "react";
import classNames from "classnames";
import styles from "./CustomButton.module.scss";

interface CustomButtonProps {
  children: React.ReactNode;
  variant?: "default" | "outlined";
  onClick?: () => void;
}

export const CustomButton: React.FC<CustomButtonProps> = ({
  children,
  variant = "default",
  onClick,
}) => {
  const buttonClass = classNames(styles["button"], {
    [styles["button--outlined"]]: variant === "outlined",
  });

  return (
    <button className={buttonClass} onClick={onClick}>
      {children}
    </button>
  );
};
