export interface Dataset {
  label: string;
  data: number[];
  fill: boolean;
  borderColor: string;
}

export interface StockItem {
  name: string;
  dueValue: number;
  value: number;
  data: {
    labels: string[];
    //datasets: Dataset[];
    datasets: any;
  };
}

export const stocks: StockItem[] = [
  {
    name: "Nasdaq",
    dueValue: 0.51,
    value: 5055.55,
    data: {
      labels: [
        "10/04/2018",
        "10/05/2018",
        "10/06/2018",
        "10/07/2018",
        "10/08/2018",
        "10/09/2018",
        "10/10/2018",
        "10/11/2018",
        "10/12/2018",
        "10/13/2018",
        "10/14/2018",
        "10/15/2018",
      ],
      datasets: [
        {
          label: "Temperature",
          data: [22, 19, 27, 23, 22, 24, 17, 25, 23, 22, 20, 19],
          fill: true,
          backgroundColor: "rgba(0, 0, 0, 0.2)",
          pointBackgroundColor: function (context: any) {
            var index = context.dataIndex;
            var value = context.dataset.data[index];
            return value === 24 ? "red" : "transparent";
          },
          pointBorderColor: function (context: any) {
            var index = context.dataIndex;
            var value = context.dataset.data[index];
            return value === 24 ? "rgba(255,0,0, 0.2)" : "transparent";
          },
          pointBorderWidth: function (context: any) {
            var index = context.dataIndex;
            var value = context.dataset.data[index];
            return value === 24 ? "13" : "0";
          },
          borderColor: "transparent",
        },
      ],
    },
  },
  {
    name: "Dow Jones",
    dueValue: 0.31,
    value: 4657,
    data: {
      labels: [
        "10/04/2020",
        "10/05/2020",
        "10/06/2020",
        "10/07/2020",
        "10/08/2020",
        "10/09/2020",
        "10/10/2020",
        "10/11/2020",
        "10/12/2020",
        "10/13/2020",
        "10/14/2020",
        "10/15/2018",
      ],
      datasets: [
        {
          label: "Temperature",
          data: [5, 4, 27, 23, 2, 24, 7, 25, 3, 20, 20, 9],
          fill: true,
          pointBackgroundColor: function (context: any) {
            var index = context.dataIndex;
            var value = context.dataset.data[index];
            return value === 7 ? "red" : "transparent";
          },
          pointBorderColor: function (context: any) {
            var index = context.dataIndex;
            var value = context.dataset.data[index];
            return value === 7 ? "rgba(255,0,0, 0.2)" : "transparent";
          },
          pointBorderWidth: function (context: any) {
            var index = context.dataIndex;
            var value = context.dataset.data[index];
            return value === 7 ? "13" : "0";
          },
          borderColor: "transparent",
        },
      ],
    },
  },
];

export const chartOptions = {
  legend: {
    align: "end",
    labels: {
      fontColor: "#000",
    },
  },
  scaleShowLabels: true,
  plugins: {
    datalabels: {
      display: false,
    },
  },
  scales: {
    xAxes: [
      {
        ticks: {
          suggestedMin: 0,
          suggestedMax: 11.12 * 2,
          stepSize: 1, //interval between ticks
        },
        //display: false,
        gridLines: {
          drawOnChartArea: false,
          //drawTicks: false,
        },
      },
    ],
    yAxes: [
      {
        //display: false,
        position: "right",
        gridLines: {
          drawOnChartArea: false,
        },

        ticks: {
          //display: false,
        },
      },
    ],
  },
};
