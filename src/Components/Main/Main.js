import React from "react";
import { Box } from "@mui/material";
import { Alert } from "../Alert";
import { Week } from "../Week";
import { Current } from "../Current";

const Main = ({ weather }) => {
  return (
    <Box textAlign="center">
      {weather.alerts && weather.alerts.length > 0 && (
        <>
          {weather.alerts.map((alert, idx) => {
            return (
              <>
                <Alert alert={alert} timeZone={weather.timezone} />
              </>
            );
          })}
        </>
      )}

      <Box display="flex">
        <Box
          width="100%"
          display="flex"
          flexDirection="column"
          textAlign="center"
          color="white"
        >
          {weather.daily.map((day, idx) => {
            return <>{<Week key={idx} idx={idx} weather={day} />}</>;
          })}
        </Box>
        <Current weather={weather} />
      </Box>
    </Box>
  );
};

export default Main;
