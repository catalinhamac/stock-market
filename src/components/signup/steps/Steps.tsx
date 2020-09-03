import React from "react";

import styles from "./Steps.module.scss";

export const Steps = () => {
  return (
    <ul className={styles.steps}>
      {[1, 2, 3].map((step: number) => (
        <li key={step} className={step === 1 ? styles.active : ""}></li>
      ))}
    </ul>
  );
};
