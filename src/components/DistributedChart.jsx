import React, { useState } from "react";
import Distributed from "react-apexcharts";

export default function DistributedChart() {
  const [series, setSeries] = useState([
    {
      data: [21, 22, 10, 28, 16, 21, 13, 30],
    },
  ]);

  const [options, setOption] = useState({
    chart: {
      height: 350,
      type: "bar",
      events: {
        click: function (chart, w, e) {
          // console.log(chart, w, e)
        },
      },
    },

    colors: [
      "#2E93fA",
      "#66DA26",
      "#546E7A",
      "#E91E63",
      "#FF9800",
      "#66DA26",
      "#546E7A",
      "#E91E63",
      "#FF9800",
    ],

    colors: Apex.colors,
    plotOptions: {
      bar: {
        columnWidth: "45%",
        distributed: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },

    title: {
      text: "Stuff Performace",
      style: {
        fontWeight: "400",
      },
    },
    xaxis: {
      categories: [
        ["John", "Doe"],
        ["Joe", "Smith"],
        ["Jake", "Williams"],
        "Amber",
        ["Peter", "Brown"],
        ["Mary", "Evans"],
        ["David", "Wilson"],
        ["Lily", "Roberts"],
      ],
      labels: {
        style: {
          colors: Apex.colors,
          fontSize: "12px",
        },
      },
    },
  });
  return (
    <div>
      <Distributed options={options} series={series} type="bar" />
    </div>
  );
}
