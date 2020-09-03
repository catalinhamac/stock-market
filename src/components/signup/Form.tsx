import React from "react";
import InputAdornment from "@material-ui/core/InputAdornment";
import Input from "@material-ui/core/Input";
import EmailIcon from "@material-ui/icons/Email";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import { LinkTitle, StaticContent } from "../../config/static-content-config";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formRoot: {
      padding: `0 ${theme.typography.pxToRem(25)} ${theme.typography.pxToRem(
        25
      )}`,

      maxWidth: theme.typography.pxToRem(320),
      marginLeft: "auto",
      marginRight: "auto",
    },
    inputRoot: {
      backgroundColor: "rgba(255,255,255,0.2)",
      borderRadius: theme.typography.pxToRem(30),
      padding: `${theme.typography.pxToRem(12)} ${theme.typography.pxToRem(
        20
      )} `,
      marginBottom: theme.typography.pxToRem(15),
      color: "white",
      fontWeight: 700,
    },
    formcontent: {
      marginBottom: theme.typography.pxToRem(30),
    },
    btnOutlined: {
      border: "1px solid rgba(255, 255, 255, 0.5)",
      color: "white",
      fontWeight: 700,
      backgroundColor: "transparent",
      display: "block",
      margin: "0 auto",
      borderRadius: theme.typography.pxToRem(30),
      padding: `${theme.typography.pxToRem(18)} ${theme.typography.pxToRem(
        20
      )} `,
      marginBottom: theme.typography.pxToRem(24),
      width: "100%",
    },
    termLink: {
      color: "rgba(255, 255, 255, 0.5)",
      fontSize: theme.typography.pxToRem(11),
      textDecoration: "none",
      fontWeight: 700,
      display: "block",
      textAlign: "center",
      marginBottom: theme.typography.pxToRem(25),
    },
  })
);

export const Form = () => {
  const classes = useStyles();

  return (
    <form className={classes.formRoot} noValidate autoComplete="off">
      <div className={classes.formcontent}>
        <Input
          id="name"
          name="name"
          placeholder="Name"
          required
          error
          fullWidth
          classes={{ root: classes.inputRoot }}
          disableUnderline
          startAdornment={
            <InputAdornment position="start">
              <EmailIcon />
            </InputAdornment>
          }
        />

        <Input
          id="email"
          name="email"
          placeholder="Email"
          required
          error
          fullWidth
          classes={{ root: classes.inputRoot }}
          disableUnderline
          startAdornment={
            <InputAdornment position="start">
              <EmailIcon />
            </InputAdornment>
          }
        />
        <Input
          id="password"
          name="password"
          placeholder="Password"
          required
          error
          fullWidth
          classes={{ root: classes.inputRoot }}
          disableUnderline
          startAdornment={
            <InputAdornment position="start">
              <EmailIcon />
            </InputAdornment>
          }
        />
      </div>

      <button className={classes.btnOutlined} type="submit">
        {StaticContent.SignupFormBtnLabel}
      </button>
      <a className={classes.termLink} href="http://">
        {LinkTitle.TermsConditions}
      </a>
    </form>
  );
};
