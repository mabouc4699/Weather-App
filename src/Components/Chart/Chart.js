import React from "react";
import { Box } from "@mui/material";
import { LineChart, XAxis, YAxis, Line, Tooltip, Legend } from "recharts";

const Chart = ({ sum }) => {
  return (
    <Box mx="auto">
      <LineChart
        width={500}
        height={300}
        data={sum}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <XAxis stroke="black" dataKey="Name" />
        <YAxis stroke="black" />
        <Tooltip />
        <Legend />
        <Line
          isAnimationActive={true}
          type="monotone"
          dataKey="Cloud"
          stroke="#eeb310"
          dot={false}
        />
        <Line
          isAnimationActive={true}
          type="monotone"
          dataKey="Precipitation"
          stroke="blue"
          dot={false}
        />
        <Line
          isAnimationActive={true}
          type="monotone"
          dataKey="Humidity"
          stroke="#82ca9d"
          dot={false}
        />
      </LineChart>
    </Box>
  );
};

export default Chart;
