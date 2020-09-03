import React from "react";
import clsx from "clsx";

import { stocks, StockItem } from "../../../../config/stock-config";
import { addOperator, colorValue } from "../../utils";

import { Colors } from "../../../../config/style-config";
import styles from "./Nav.module.scss";

interface Props {
  value: number;
  handleClick: (
    newValue: number
  ) => (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const a11yProps = (index: number) => {
  return {
    id: `tab-${index}`,
    "aria-controls": `tabpanel-${index}`,
  };
};

export const Nav = ({ value, handleClick }: Props) => {
  return (
    <div className={styles.tabsNav}>
      {stocks.map((stock: StockItem, index: number) => {
        const { name, dueValue, value: itemValue } = stock;
        const formatValue = new Intl.NumberFormat("en-Us", {
          minimumFractionDigits: 2,
        }).format(itemValue);

        return (
          <button
            key={index}
            type="button"
            onClick={handleClick(index)}
            className={
              index === value ? clsx(styles.active, styles.btn) : styles.btn
            }
            {...a11yProps(index)}
          >
            <span className={styles.name}>{name}</span>

            <span className={styles.value}>{formatValue}</span>
            <span
              className={styles.dueValue}
              style={{
                color: colorValue(dueValue, {
                  green: Colors.SUCCESS,
                  red: Colors.ERROR,
                }),
              }}
            >
              {addOperator(dueValue)}
            </span>
          </button>
        );
      })}
    </div>
  );
};
