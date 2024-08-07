import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import axios from "axios";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const chartData = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "2023 Expenses",
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: true,
      tension: 0.4,
      backgroundColor: "rgba(75,192,192,0.4)",
      borderColor: "rgba(75,192,192,1)",
    },
    {
      label: "2024 Expenses",
      data: [28, 48, 40, 19, 86, 27, 90],
      fill: true,
      tension: 0.4,
      backgroundColor: "rgba(153,102,255,0.4)",
      borderColor: "rgba(153,102,255,1)",
    },
  ],
};

const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Monthly Expenses Comparison (2023 vs 2024)",
    },
  },
};

const CovidDashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData([
      { country: "USA", totalCases: 500000, totalDeaths: 15000 },
      { country: "Spain", totalCases: 450000, totalDeaths: 14000 },
      { country: "Italy", totalCases: 420000, totalDeaths: 13000 },
      { country: "France", totalCases: 300000, totalDeaths: 9000 },
      { country: "Germany", totalCases: 270000, totalDeaths: 8000 },
      { country: "UK", totalCases: 250000, totalDeaths: 7000 },
      { country: "Russia", totalCases: 240000, totalDeaths: 6500 },
      { country: "Brazil", totalCases: 230000, totalDeaths: 6400 },
      { country: "India", totalCases: 220000, totalDeaths: 6300 },
      { country: "Turkey", totalCases: 210000, totalDeaths: 6200 },
    ]);
  }, []);

  return (
    <div className="bg-gray-900 text-white font-sans">
      <h1 className="text-xl font-bold text-center p-4">Dashboard</h1>

      <div className="p-4">
        <Line data={chartData} options={chartOptions} />
      </div>

      <div className="overflow-x-auto p-4">
        <h2 className="text-lg font-bold text-center p-2">
          COVID-19 Statistics
        </h2>
        <table className="w-full">
          <thead>
            <tr className="bg-gray-800">
              <th className="px-4 py-2">Country</th>
              <th className="px-4 py-2">Total Cases</th>
              <th className="px-4 py-2">Total Deaths</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className="bg-gray-700 border-b border-gray-800">
                <td className="px-4 py-2">{item.country}</td>
                <td className="px-4 py-2">
                  {item.totalCases.toLocaleString()}
                </td>
                <td className="px-4 py-2">
                  {item.totalDeaths.toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CovidDashboard;
