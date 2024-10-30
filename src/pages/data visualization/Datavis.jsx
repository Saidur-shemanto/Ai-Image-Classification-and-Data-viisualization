import { Chart } from "chart.js";
import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";

export default function Datavis() {
  const [weatherData, setWeatherData] = useState([]);
  const baseUrl = "https://api.nextbike.net/maps/nextbike-live.json";
  const apikey = import.meta.env.VITE_API_KEY;
  const svgRef = useRef();

  useEffect(() => {
    fetch(baseUrl)
      .then((res) => res.json())
      .then((data) => console.log(data.countries.name));
  }, []);
  useEffect(() => {
    // setting up svg
    const w = 400;
    const h = 200;
    const svg = d3
      .select(svgRef.current)
      .attr("width", w)
      .attr("height", h)
      .style("overflow", "visible")
      .style("background", "#c5f6fa");

    const xScale = d3
      .scaleLinear()
      .domain([0, weatherData.length - 1])
      .range([0, w]);
    const yScale = d3.scaleLinear().domain([0, h]).range([h, 0]);

    const generateScaledLine = d3
      .line()
      .x((d, i) => xScale(i))
      .y(yScale)
      .curve(d3.curveCardinal);

    const xAxis = d3
      .axisBottom(xScale)
      .ticks(1 + weatherData.length)
      .tickFormat((i) => i + 1);
    const yAxis = d3.axisLeft(yScale).ticks(7);
    // drawing the axes on the svg
    svg.append("g").call(xAxis).attr("transform", `translate(0,${h})`);
    svg.append("g").call(yAxis);

    svg
      .selectAll(".line")
      .data([weatherData])
      .join("path")
      .attr("d", (d) => generateScaledLine(d))
      .attr("fill", "none")
      .attr("stroke", "black");
  }, [weatherData]);

  return (
    <div>
      <svg ref={svgRef} style={{ margin: "100px", display: "block" }}></svg>
    </div>
  );
}
