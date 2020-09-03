import React, { useEffect, useState, useCallback } from "react";

import { getWeather, WeatherData } from "../../api/weather";
import { WeatherContent } from "./weather-content/weather-content/WeatherContent";
import { Loading } from "../loading/Loading";
import { StaticContent } from "../../config/static-content-config";

export const Weather = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | any>();
  const [isLoading, setIsLoading] = useState(true);
  const [weatherError, setWeatherError] = useState();

  const fetchWeather = useCallback(async () => {
    try {
      const weatherData = await getWeather();
      setWeatherData(weatherData);
      setIsLoading(false);
    } catch (e) {
      setWeatherError(e);
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchWeather();
  }, [fetchWeather]);

  return !weatherError && weatherData ? (
    <WeatherContent data={weatherData} />
  ) : isLoading ? (
    <Loading message={StaticContent.WeatherLoadingMessage} />
  ) : null;
};
