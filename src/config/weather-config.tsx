export interface Hour {
  temperature: string;
  time: string;
}

export const weatherByHour: Hour[] = [
  {
    temperature: "65",
    time: "6 AM",
  },
  {
    temperature: "86",
    time: "8 AM",
  },
  {
    temperature: "88",
    time: "12 PM",
  },
  {
    temperature: "79",
    time: "3 PM",
  },
  {
    temperature: "62",
    time: "6 PM",
  },
  {
    temperature: "59",
    time: "9 PM",
  },
  {
    temperature: "52",
    time: "12 AM",
  },
  {
    temperature: "49",
    time: "3 AM",
  },
];

export enum WeatherPeriods {
  Today = "Today",
  Tomorrow = "Tomorrow",
  Week = "Week",
}
