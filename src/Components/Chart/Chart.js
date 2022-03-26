import React from "react";
import { Box } from "@mui/material";
import { LineChart, XAxis, YAxis, Line, Tooltip, Legend } from "recharts";

const Chart = ({ data, pref }) => {
  return (
    <Box mx="auto">
      {pref === "conditions" ? (
        <LineChart
          width={500}
          height={275}
          data={data.map((datum) => {
            return {
              Cloud: datum.clouds,
              Precipitation: datum.pop * 100,
              Humidity: datum.humidity,
              Name: new Date(datum.dt * 1000).toLocaleTimeString("en-us", {
                hour: "2-digit",
                minute: "2-digit",
              }),
            };
          })}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis stroke="black" dataKey={"Name"} />
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
      ) : (
        <LineChart
          width={500}
          height={275}
          data={data.map((datum) => {
            return {
              Temperature: datum.temp.toFixed(0),
              Name: new Date(datum.dt * 1000).toLocaleTimeString("en-us", {
                hour: "2-digit",
                minute: "2-digit",
              }),
            };
          })}
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
          <Legend dataKey="Name" />
          <Line
            isAnimationActive={true}
            type="monotone"
            dataKey="Temperature"
            stroke="green"
            dot={false}
          />
        </LineChart>
      )}
    </Box>
  );
};

export default Chart;
