import React, { useState } from "react";
import GradientDonut from "react-apexcharts";

export default function GradientDonutChart() {
  const [series, setSeries] = useState([44, 55, 41, 17, 15]);
  const [options, setOption] = useState({
    chart: {
      width: 380,
      type: "donut",
    },
    plotOptions: {
      pie: {
        startAngle: -90,
        endAngle: 270,
      },
    },
    dataLabels: {
      enabled: false,
    },
    fill: {
      type: "gradient",
    },
    legend: {
      formatter: function (val, opts) {
        return val + " - " + opts.w.globals.series[opts.seriesIndex];
      },
    },
    title: {
      text: "Yearly Expenses",
      style: {
        fontWeight: "400",
      },
    },
    responsive: [
      {
        breakpoint: "",
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  });
  return (
    <div>
      <GradientDonut options={options} series={series} type="donut" />
    </div>
  );
}
