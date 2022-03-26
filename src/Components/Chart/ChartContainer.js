import React from "react";
import Chart from "./Chart";

const ChartContainer = ({ data }) => {
  let sum = [];
  data &&
    data.map((el, i) => {
      let temp = {};
      temp["Name"] = new Date(data[i].dt * 1000).toLocaleTimeString("en-us", {
        hour: "2-digit",
        minute: "2-digit",
      });
      temp["Cloud"] = el.clouds;
      temp["Precipitation"] = el.pop * 100;
      temp["Humidity"] = el.humidity;
      sum[i] = temp;
    });
  return (
    <>
      <Chart sum={sum} />
    </>
  );
};

export default ChartContainer;
