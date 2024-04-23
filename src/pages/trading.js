import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";

function Trading() {
  const [tradesData, setTradesData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const headersList = {
          // Add any required headers here
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
        console.log("Fetched data:", data);
        setTradesData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    console.log("Fetching data...");
    fetchData();
  }, []);

  const chartData = {
    labels: tradesData.map((trade) =>
      new Date(trade.time).toLocaleString()
    ),
    datasets: [
      {
        label: "Price",
        data: tradesData.map((trade) => parseFloat(trade.price)),
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };

  return (
    <div>
      <h1>Trading</h1>
      <div style={{ height: "400px", width: "600px" }}>
        <Line data={chartData} />
      </div>
    </div>
  );
}

export default Trading;
