import React, { useState } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import { Line } from "react-chartjs-2";

import { StockItem, chartOptions } from "../../config/stock-config";
import { StaticContent } from "../../config/static-content-config";
import { Colors } from "../../config/style-config";
import { addOperator, colorValue } from "./utils";

import StockBackgroundXS from "../../assets/img/StockBackgroundXS.png";

interface Props {
  stock: StockItem;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.typography.pxToRem(20),
      "&:focus": {
        outline: "none",
      },
    },
    paperContent: {
      border: `1px solid ${theme.palette.primary.main}`,
      padding: theme.typography.pxToRem(16),
    },
    box: {
      backgroundImage: `url(${StockBackgroundXS})`,
      backgroundPosition: "center center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      padding: theme.typography.pxToRem(15),
      position: "relative",
    },
    name: {
      margin: `0 0 ${theme.typography.pxToRem(10)}`,
      fontWeight: 700,
      fontSize: theme.typography.pxToRem(12),
      textTransform: "uppercase",
    },
    dueValue: {
      margin: `0 0 ${theme.typography.pxToRem(10)}`,
      fontWeight: 700,
      fontSize: theme.typography.pxToRem(38),
    },
    formatValue: {
      margin: 0,
      fontWeight: 700,
      fontSize: theme.typography.pxToRem(14),
      color: "rgba(0, 0, 0, 0.30)",
      marginBottom: theme.typography.pxToRem(74),
    },
    btn: {
      backgroundColor: "transparent",
      color: theme.palette.primary.main,
      fontWeight: 700,
      fontSize: theme.typography.pxToRem(11),
      border: "1px solid rgba(0, 0, 0, 0.10)",
      borderRadius: "50px",
      padding: `${theme.typography.pxToRem(10)} ${theme.typography.pxToRem(
        30
      )}`,
      margin: "auto",
      display: "block",

      "&:focus": {
        outline: "none",
      },
    },
    circles: {
      position: "absolute",
      top: theme.typography.pxToRem(15),
      right: theme.typography.pxToRem(13),
      fontSize: theme.typography.pxToRem(7),
      display: "flex",
      flexDirection: "column",
    },
  })
);

export const StockBox = (props: Props) => {
  const {
    stock: { name, dueValue, value, data },
  } = props;
  const formatValue = new Intl.NumberFormat("en-Us", {
    minimumFractionDigits: 2,
  }).format(value);

  const [open, setOpen] = useState(false);

  const classes = useStyles();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className={classes.box}>
        <span className={classes.circles}>
          <RadioButtonUncheckedIcon fontSize="inherit" />
          <RadioButtonUncheckedIcon fontSize="inherit" />
        </span>
        <h5 className={classes.name}>{name}</h5>
        <h3
          className={classes.dueValue}
          style={{
            color: colorValue(dueValue, {
              green: Colors.SUCCESS,
              red: Colors.ERROR,
            }),
          }}
        >
          {addOperator(dueValue)}
        </h3>
        <p className={classes.formatValue}>{formatValue}</p>
        <button className={classes.btn} type="button" onClick={handleOpen}>
          {StaticContent.ModalBtnLabel}
        </button>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        className={classes.modal}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className={classes.paper}>
          <div className={classes.paperContent}>
            <Line data={data} options={chartOptions} />
          </div>
        </div>
      </Modal>
    </>
  );
};
