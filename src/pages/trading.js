import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";
import './trading.css'

function Trading() {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: "Price",
        data: [],
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const headersList = {
        }; 
        const response = await fetch(
          "https://api.binance.com/api/v3/historicalTrades?symbol=BTCUSDT",
          {
            method: "GET",
            headers: headersList,
          }
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();

        const labels = data.map((trade) =>
          new Date(trade.time).toLocaleString()
        );
        const prices = data.map((trade) => parseFloat(trade.price));

        setChartData({
          ...chartData,
          labels: labels,
          datasets: [
            {
              ...chartData.datasets[0],
              data: prices,
            },
          ],
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [chartData]);

  return (
    <div className="trading-container">
      <h1 className="chart-title">Trading</h1>
      <div className="chart-container">
        <Line data={chartData} />
      </div>
    </div>
  );
}

export default Trading;
