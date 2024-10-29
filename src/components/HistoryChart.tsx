import React from "react";
import { useParams } from "react-router";
import useAxios from "../hooks/useAxios";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import moment from "moment"; // Import moment
import faker from "faker"; // This import is unused, consider removing if not needed
import Skeleton from "./Skeleton";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

function HistoryChart() {
  const { id } = useParams();
  const { response } = useAxios(
    `coins/${id}/market_chart?vs_currency=usd&days=7`
  );

  if (!response) {
    return (
      <div className="wrapper-container">
        <Skeleton className="h-72 w-full mb-10" />
      </div>
    );
  }

  const coinChartData = response.prices.map((value) => ({
    x: value[0],
    y: value[1].toFixed(2),
  }));

  const options = {
    responsive: true,
  };

  const data = {
    labels: coinChartData.map((value) => moment(value.x).format("MM/DD")),
    datasets: [
      {
        fill: true,
        label: id,
        data: coinChartData.map((val) => val.y),
        borderColor: "rgb(53, 162, 235)", // Fixed here
        backgroundColor: "rgba(53, 162, 235, 0.5)", // Fixed here
      },
    ],
  };

  return (
    <div>
      <Line options={options} data={data} /> {/* Fixed here */}
    </div>
  );
}

export default HistoryChart;
