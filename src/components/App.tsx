import React from "react";
import Hidden from "@material-ui/core/Hidden";
import Grid from "@material-ui/core/Grid/Grid";

import { PageTitle } from "../config/static-content-config";
import { Header } from "./header/Header";
import { Title } from "./title/Title";
import { Weather } from "./weather/Weather";
import { Stock } from "./stock/Stock";
import { News } from "./news/News";

export const App = () => {
  return (
    <div className="App">
      <Header />
      <Hidden smUp>
        <Title title={PageTitle.Widgets} />
      </Hidden>
      <Grid container>
        <Hidden lgDown>
          <Grid item xl={6}>
            <News />
          </Grid>
        </Hidden>
        <Grid item xs={12} xl={6}>
          <Weather />
        </Grid>
      </Grid>
      <Stock />
    </div>
  );
};
