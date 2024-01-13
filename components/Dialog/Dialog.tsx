import React from "react";
import styles from "./Dialog.module.css";
import { Button } from "../Button";

interface Props {
    children: React.ReactNode;
}

function Dialog({ children }: Props) {
    const closeDialog = () => {
        console.log("close dialog");
    };
    return (
    <div className={styles["dialog-background"]}>
        <dialog className={styles["dialog"]}>
            {children}
            <Button callBack={closeDialog}>Close</Button>
        </dialog>
    </div>
    );
}

export default Dialog;

