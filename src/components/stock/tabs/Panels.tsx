import React from "react";
import { Line, defaults } from "react-chartjs-2";
import { makeStyles, Theme } from "@material-ui/core/styles";

import { Panel } from "./Panel";
import { stocks, StockItem, chartOptions } from "../../../config/stock-config";

interface Props {
  value: number;
}

defaults.global.maintainAspectRatio = false;

const useStyles = makeStyles((theme: Theme) => ({
  canvas: {
    height: "60vh",
    padding: theme.typography.pxToRem(16),
  },
  panel: {
    [theme.breakpoints.up("xl")]: {
      flex: 1,
    },
  },
}));

export const Panels = ({ value }: Props) => {
  const classes = useStyles();

  return (
    <div aria-label="tabs" className={classes.panel}>
      {stocks.map((stock: StockItem, index: number) => {
        const { data } = stock;

        return (
          <Panel key={index} value={value} index={index}>
            <div className={classes.canvas}>
              <Line data={data} options={chartOptions} />
            </div>
          </Panel>
        );
      })}
    </div>
  );
};
