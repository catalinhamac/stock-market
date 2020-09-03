import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { StaticContent } from "../../config/static-content-config";

import styles from "./Loading.module.scss";

interface Props {
  message?: string;
}

export const Loading = ({ message }: Props) => {
  return (
    <div className={styles.box}>
      <CircularProgress color="primary" />
      <p>{message || StaticContent.DefaultLoadingMessage}</p>
    </div>
  );
};
