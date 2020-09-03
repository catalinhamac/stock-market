import React, { useState } from "react";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import { makeStyles, Theme } from "@material-ui/core/styles";
import clsx from "clsx";

import { RoutePath } from "../../config/route-config";
import { Signup } from "../signup/Signup";
import { DrawerMenu } from "../drawer-menu/DrawerMenu";

import styles from "./Header.module.scss";

import logo from "../../assets/img/Logo.png";
import iconMenu from "../../assets/img/IconMenu.png";
import iconAdd from "../../assets/img/IconAdd.png";
import iconSearch from "../../assets/img/IconSearch.png";
import iconCancel from "../../assets/img/IconCancel.png";

const useStyles = makeStyles((theme: Theme) => ({
  paper: {
    width: "100%",
  },
}));

export const Header = () => {
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  const classes = useStyles();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <header>
      <div className={styles.mainNav}>
        <button
          className={clsx(styles.btnLink, styles.btnMenu)}
          type="button"
          onClick={toggleMenu}
        >
          <img src={iconMenu} alt="Icon Menu" />
        </button>
        <a
          href={RoutePath.Home}
          className={clsx(styles.logo, open ? styles.ml0 : "")}
        >
          <img src={logo} alt="Logo" />
        </a>
        {!open ? (
          <div className={styles.login}>
            <button
              className={clsx(styles.btnLink, styles.btnAdd)}
              type="button"
              onClick={handleDrawerOpen}
            >
              <img src={iconAdd} alt="Menu" />
            </button>
            <Hidden smDown>
              <img className={styles.search} src={iconSearch} alt="Search" />
              <span className={styles.avatar}></span>
            </Hidden>
          </div>
        ) : (
          <button
            className={clsx(styles.btnLink, styles.btnClose)}
            onClick={handleDrawerClose}
          >
            <img className={styles.close} src={iconCancel} alt="CancCloseel" />
          </button>
        )}
      </div>

      <Drawer
        anchor="right"
        open={open}
        variant="persistent"
        ModalProps={{
          onBackdropClick: handleDrawerClose,
          onEscapeKeyDown: handleDrawerClose,
        }}
        classes={{ paper: classes.paper }}
      >
        <Signup />
      </Drawer>
      <Hidden lgDown>
        <Drawer
          anchor="left"
          open={openMenu}
          variant="persistent"
          ModalProps={{
            onBackdropClick: handleDrawerClose,
            onEscapeKeyDown: handleDrawerClose,
          }}
          classes={{ paper: classes.paper }}
        >
          <DrawerMenu />
        </Drawer>
      </Hidden>
    </header>
  );
};
