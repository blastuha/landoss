import React from "react";
import classNames from "classnames";
import styles from "./Divider.module.scss";

interface DividerProps {
  className?: string;
  fullWidth?: boolean;
}

export const Divider: React.FC<DividerProps> = ({ className, fullWidth }) => {
  return (
    <hr
      className={classNames(
        styles["divider"],
        fullWidth && styles["divider--fullWidth"],
        className
      )}
    />
  );
};
