import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJs } from "chart.js/auto";

export const LineChart = () => {
  const [userData, setUserData] = useState({
    labels: ["Jan", "Feb", "Mar", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Income Expenses",
        fill: false,
        // lineTension: 0.5,
        backgroundColor: "rgba(106,13,173,1)",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,
        data: [65, 59, 80, 81, 56, 100, 70],
      },
    ],
  });

  return (
    <div>
      <Line
        data={userData}
        options={{
          title: {
            display: true,
            text: "Average Rainfall per month",
            fontSize: 20,
          },
          legend: {
            display: true,
            position: "right",
          },
        }}
      />
    </div>
  );
};
