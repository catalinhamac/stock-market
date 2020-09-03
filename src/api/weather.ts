interface Current {
  cloudcover: number;
  feelslike: number;
  humidity: number;
  is_day: string;
  observation_time: string;
  precip: number;
  pressure: number;
  temperature: number;
  uv_index: number;
  visibility: number;
  weather_code: number;
  weather_descriptions: string[];
  weather_icons: string[];
  wind_degree: number;
  wind_dir: string;
  wind_speed: number;
}

interface Location {
  country: string;
  lat: string;
  localtime: string;
  localtime_epoch: number;
  lon: string;
  name: string;
  region: string;
  timezone_id: string;
  utc_offset: string;
}

interface Request {
  language: string;
  query: string;
  type: string;
  unit: string;
}

export interface WeatherData {
  current: Current;
  location: Location;
  request: Request;
}

const weatherMockData: WeatherData = {
  current: {
    cloudcover: 100,
    feelslike: 27,
    humidity: 88,
    is_day: "no",
    observation_time: "08:08 AM",
    precip: 0.1,
    pressure: 1009,
    temperature: 25,
    uv_index: 1,
    visibility: 16,
    weather_code: 122,
    weather_descriptions: ["Overcast"],
    weather_icons: [
      "https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0004_black_low_cloud.png",
    ],
    wind_degree: 270,
    wind_dir: "W",
    wind_speed: 19,
  },
  location: {
    country: "United States of America",
    lat: "40.714",
    localtime: "2020-09-03 04:08",
    localtime_epoch: 1599106080,
    lon: "-74.006",
    name: "New York",
    region: "New York",
    timezone_id: "America/New_York",
    utc_offset: "-4.0",
  },
  request: {
    language: "en",
    query: "New York, United States of America",
    type: "City",
    unit: "m",
  },
};

export const getWeather = () => {
  return new Promise((resolve, reject) => {
    resolve(weatherMockData);
  });
};
