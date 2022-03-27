import React from "react";
import { Box } from "@mui/material";
import { Alert } from "../Alert";
import { Week } from "../Week";
import { Current } from "../Current";

const Main = ({ weather, displayChoice, setDisplayChoice }) => {
  return (
    <Box textAlign="center">
      <Box display="flex">
        <Current
          weather={weather}
          displayChoice={displayChoice}
          setDisplayChoice={setDisplayChoice}
        />

        <Box
          width="100%"
          display="flex"
          flexDirection="column"
          textAlign="center"
          color="white"
        >
          {displayChoice === "week" ? (
            weather.daily.map((day, idx) => {
              return <Week key={idx} idx={idx} weather={day} />;
            })
          ) : (
            <Alert alerts={weather.alerts} timeZone={weather.timezone} />
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Main;
