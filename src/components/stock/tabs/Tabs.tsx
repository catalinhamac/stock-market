import React, { useState } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";

import { Nav } from "./nav/Nav";
import { Panels } from "./Panels";

const useStyles = makeStyles((theme: Theme) => ({
  tabs: {
    [theme.breakpoints.up("xl")]: {
      display: "flex",
    },
  },
}));

export const Tabs = () => {
  const [value, setValue] = useState(0);

  const classes = useStyles();

  const handleClick = (newValue: number) => (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setValue(newValue);
  };

  return (
    <div className={classes.tabs}>
      <Nav handleClick={handleClick} value={value} />
      <Panels value={value} />
    </div>
  );
};
