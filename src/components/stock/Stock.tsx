import React from "react";
import Hidden from "@material-ui/core/Hidden";

import { Tabs } from "./tabs/Tabs";
import { StockBox } from "./StockBox";
import { stocks, StockItem } from "../../config/stock-config";

import styles from "./Stock.module.scss";

export const Stock = () => {
  return (
    <div className={styles.wrapper}>
      <Hidden mdUp>
        {stocks.map((stock: StockItem, index: number) => (
          <StockBox key={index} stock={stock} />
        ))}
      </Hidden>
      <Hidden smDown>
        <Tabs />
      </Hidden>
    </div>
  );
};
