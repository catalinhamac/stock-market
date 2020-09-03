import React from "react";

import { StaticContent } from "../../config/static-content-config";

import styles from "./News.module.scss";

import iconSpace from "../../assets/img/IconSpace.png";
import iconTime from "../../assets/img/IconTime.png";

export const News = () => {
  return (
    <div className={styles.news}>
      <div>
        <h2 className={styles.title}>{StaticContent.NewsTitle}</h2>
        <div className={styles.meta}>
          <ul className={styles.metaList}>
            <li>
              <img src={iconSpace} alt="Space" />
              <a
                href="https://space.com"
                target="blank"
                rel="noopener noreferrer"
              >
                space.com
              </a>
            </li>
            <li>
              <img src={iconTime} alt="Time" />
              <span>20m ago</span>
            </li>
          </ul>
          <h6 className={styles.metaTitle}>{StaticContent.ScienceTitle}</h6>
        </div>
      </div>
    </div>
  );
};
