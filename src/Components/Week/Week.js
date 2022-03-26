import React from "react";
import { Box, Typography } from "@mui/material";
import { getImg } from "../../Utils/handleFunctions";

const Week = ({ weather, idx, weatherIcon, getTime }) => {
  return (
    <Box py={1} backgroundColor="#0e092b">
      <Box>
        <Typography>{getTime(weather, idx)} </Typography>
        <Box component="img" src={weatherIcon} alt="Weather_Icon" />
      </Box>
      <Typography borderBottom="1px solid white">
        {weather.weather[0].main}. High at {Math.ceil(weather.temp.max)}° and
        Lows around {Math.ceil(weather.temp.min)}°
      </Typography>
    </Box>
  );
};

export default Week;
