import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { Chart } from "../Chart";
import { SunriseSunset } from "../SunriseSunset";

const Current = ({
  data,
  getCurrentTime,
  weather,
  weatherIcon,
  pref,
  setPref,
}) => {
  return (
    <Box
      position="sticky"
      top="0"
      height="100vh"
      alignSelf="flex-start"
      width="100%"
      backgroundColor="white"
      display="flex"
      flexDirection="column"
    >
      <Box pt={3}>
        <Typography variant="h5">Today</Typography>
        <Typography variant="h6" fontSize="15px">
          {getCurrentTime(weather)}
        </Typography>
        <Typography variant="h3">{Math.ceil(weather.current.temp)}°</Typography>
        <Box
          sx={{ "&": { transform: "scale(1.15)" } }}
          src={weatherIcon}
          alt="Weather_Icon"
          component="img"
        />
        <Typography>{weather.current.weather[0].main}</Typography>
        <Typography>
          Wind: {Math.ceil(weather.current.wind_speed)}mph
        </Typography>
        <Button onClick={() => setPref("conditions")}>Conditions</Button>
        <Button onClick={() => setPref("temperature")}>Temperature</Button>
      </Box>
      <Chart data={data} pref={pref} />
      <SunriseSunset weather={weather} />
    </Box>
  );
};

export default Current;
