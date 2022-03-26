import React from "react";
import { Box, Typography } from "@mui/material";

const SunriseSunset = ({ weather }) => {
  return (
    <>
      <Box mt={3} display="flex" justifyContent="center">
        <Box>
          <Typography variant="h1" fontWeight="500" fontSize="16px">
            Sunrise
          </Typography>{" "}
          <Box
            sx={{
              "&": { transform: "scale(0.75)", height: "75px", width: "75px" },
            }}
            component="img"
            src="http://openweathermap.org/img/wn/01d@2x.png"
            alt="Sunrise"
          />
          <Typography>
            {new Date(weather.daily[0].sunrise * 1000).toLocaleTimeString(
              "en-us",
              {
                hour: "2-digit",
                minute: "2-digit",
              }
            )}
          </Typography>
        </Box>

        <Box>
          <Typography variant="h1" fontWeight="500" fontSize="16px">
            Sunset
          </Typography>{" "}
          <Box
            sx={{
              "&": { transform: "scale(0.75)", height: "75px", width: "75px" },
            }}
            component="img"
            src="http://openweathermap.org/img/wn/01n@2x.png"
            alt="Sunset"
          />
          <Typography>
            {new Date(weather.daily[0].sunset * 1000).toLocaleTimeString(
              "en-us",
              {
                hour: "2-digit",
                minute: "2-digit",
              }
            )}
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default SunriseSunset;
