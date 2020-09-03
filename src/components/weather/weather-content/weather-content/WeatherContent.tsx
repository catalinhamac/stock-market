import React from "react";
import Hidden from "@material-ui/core/Hidden/Hidden";

import {
  weatherByHour,
  Hour,
  WeatherPeriods,
} from "../../../../config/weather-config";
import { WeatherData } from "../../../../api/weather-client";

import styles from "./WeatherContent.module.scss";

interface Props {
  data: WeatherData;
}

export const WeatherContent = (props: Props) => {
  const {
    data: {
      location: { name },
      current,
    },
  } = props;

  const { weather_icons, weather_descriptions, temperature } = current;

  return (
    <div className={styles.box}>
      <div className={styles.top}>
        <div>
          <img className={styles.img} src={weather_icons[0]} alt="Weather" />
          <p className={styles.desc}>
            <strong>{weather_descriptions[0]}</strong>
          </p>
          <p className={styles.location}>
            <strong>{name}</strong>
          </p>
        </div>
        <div>
          <Hidden smDown>
            <ul className={styles.tempNav}>
              {Object.keys(WeatherPeriods).map((n: string, index: number) => (
                <li key={index} className={index === 0 ? styles.active : ""}>
                  <a href="/">{n}</a>
                </li>
              ))}
            </ul>
          </Hidden>
          <span className={styles.temp}>
            <strong>
              {temperature}
              <span className={styles.degr}>&deg;</span>
            </strong>
          </span>
        </div>
      </div>
      <ul className={styles.bottom}>
        {weatherByHour.map(({ temperature, time }: Hour, index: number) => (
          <li key={index}>
            <span>
              <strong>{temperature}&deg;</strong>
            </span>
            <span>
              <strong>{time}</strong>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};
