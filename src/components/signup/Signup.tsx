import React from "react";

import { Form } from "./Form";
import { Steps } from "./steps/Steps";
import { StaticContent } from "../../config/static-content-config";

import styles from "./Signup.module.scss";

export const Signup = () => {
  return (
    <div className={styles.wrapper}>
      <Steps />
      <h2 className={styles.title}>{StaticContent.SignUpTitle}</h2>
      <Form />
    </div>
  );
};
