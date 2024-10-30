import React, { useEffect, useRef, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export default function Datavis() {
  const [quoteData, setquoteData] = useState([]);
  const [cValues, setCValues] = useState([]);
  const [tValues, setTValues] = useState([]);
  const apikey = import.meta.env.VITE_API_KEY;
  const baseUrl = `https://finnhub.io/api/v1/quote?symbol=AAPL&token=${apikey}`;

  const svgRef = useRef();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(baseUrl);
        const data = await response.json();
        setquoteData(data);

        setCValues((prevC) => {
          const newC = [...prevC, data.c].slice(-10);
          return newC;
        });

        setTValues((prevT) => {
          let newDate = new Date(data.t * 1000);
          newDate = newDate.toTimeString();
          const newT = [...prevT, newDate].slice(-10);
          return newT;
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [baseUrl]);
  console.log(quoteData);
  const canvasData = {
    datasets: [
      {
        label: "Home",
        borderColor: "navy",
        pointRadius: 0,
        fill: true,
        backgroundColor: "purple",
        lineTension: 0.4,
        data: cValues,
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        grid: {
          display: false,
        },
        labels: tValues,
        ticks: {
          color: "white",
          font: {
            family: "Nunito",
            size: 12,
          },
        },
      },
      y: {
        grid: {
          display: false,
        },
        border: {
          display: false,
        },
        min: 0,
        max: 80,
        ticks: {
          stepSize: 10,
          color: "white",
          font: {
            family: "Nunito",
            size: 12,
          },
        },
      },
    },
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
  };

  const graphStyle = {
    minHeight: "10rem",
    maxWidth: "540px",
    width: "100%",
    border: "1px solid #C4C4C4",
    borderRadius: "0.375rem",
    padding: "0.5rem",
  };

  return (
    <div className="mt-10">
      <Line id="home" options={options} data={canvasData} />
    </div>
  );
}
