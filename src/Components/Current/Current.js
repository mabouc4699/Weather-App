import React from "react";
import { Box, Button, Typography, SvgIcon } from "@mui/material";
import { Chart } from "../Chart";
import { SunriseSunset } from "../SunriseSunset";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

const Current = ({
  data,
  getCurrentTime,
  weather,
  pref,
  setPref,
  displayChoice,
  setDisplayChoice,
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
        <Typography>{weather.current.weather[0].main}</Typography>
        <Typography>
          Wind: {Math.ceil(weather.current.wind_speed)}mph
        </Typography>
        {weather.alerts && displayChoice === "week" ? (
          <Box>
            <Button
              onClick={() => setDisplayChoice("alerts")}
              display="flex"
              sx={{
                "&": {
                  color: "#fff",
                  backgroundColor: "#FF7F7F",
                },
                "&:hover": { color: "#fff", backgroundColor: "red" },
              }}
            >
              <SvgIcon
                sx={{
                  "&": { justifyContent: "center", transform: "scale(0.7)" },
                }}
                component={ErrorOutlineIcon}
                viewBox="0 0 25 25"
              />
              Alerts
            </Button>
          </Box>
        ) : (
          <Box>
            <Button onClick={() => setDisplayChoice("week")}>
              Weekly Forecast
            </Button>
          </Box>
        )}
        <Button onClick={() => setPref("conditions")}>Conditions</Button>
        <Button onClick={() => setPref("temperature")}>Temperature</Button>
      </Box>
      <Chart data={data} pref={pref} />
      {/* <SunriseSunset weather={weather} /> */}
    </Box>
  );
};

export default Current;
