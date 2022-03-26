import React, { useState, useEffect } from "react";
import Main from "./Main";
import axios from "axios";
import * as handle from "../../Utils/handleFunctions";
import { Box } from "@mui/material";

const MainContainer = () => {
  const [units, setUnits] = useState("imperial");
  const [forecastLength, setForecastLength] = useState(["minutely"]);
  const [lat, setLat] = useState();
  const [long, setLong] = useState();
  const [weather, setWeather] = useState();

  useEffect(() => {
    handle.getPositionData(setLat, setLong);

    if (weather === undefined && lat !== undefined && long !== undefined) {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=${forecastLength}&appid=fe146ea0475520c4d6cfdd513ceecb37&units=${units}`
        )
        .then((response) => {
          setWeather(response.data);
        })
        .catch((err) => console.log(err));
    }
  }, [lat, long]);

  return (
    <>
      {weather && (
        <Box>
          <Main weather={weather} />
        </Box>
      )}
    </>
  );
};

export default MainContainer;
