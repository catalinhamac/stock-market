import React, { HTMLAttributes } from "react";

import styles from "./Title.module.scss";

interface OwnProps {
  title: string;
}

type Props = HTMLAttributes<HTMLHeadingElement> & OwnProps;

export const Title = ({ title, ...rest }: Props) => {
  return (
    <h1 className={styles.title} {...rest}>
      {title}
    </h1>
  );
};
