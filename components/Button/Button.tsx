import React from "react";
import styles from "./Button/Button.module.css";

export enum ButtonType {
  "SUBMIT" = "submit",
  "RESET" = "reset",
  "BUTTON" = "button",
}

interface Props {
    children: React.ReactNode;
    callBack:(e: any) => void;
    type?: ButtonType;
}

function Button({ children, callBack, type = ButtonType.BUTTON }: Props) {
  const handleClick = (e: any) => {
    callBack(e);
  }
  return (
    <button className={styles.button} type={type} onClick={handleClick}>
      {children}
    </button>
  );
}

export default Button;

