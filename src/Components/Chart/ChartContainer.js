import React, { useState, useEffect } from "react";
import Chart from "./Chart";

const ChartContainer = ({ data, pref }) => {
  const [chartData, setChartData] = useState("Conditions");
  return <>{data && <Chart data={data} pref={pref} />}</>;
};

export default ChartContainer;
