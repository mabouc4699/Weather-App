import React, { useEffect, useState } from "react";
import Week from "./Week";
import { getImg, getTime } from "../../Utils/handleFunctions";

const WeekContainer = ({ weather, idx }) => {
  const [weatherIcon, setWeatherIcon] = useState();
  useEffect(() => {
    getImg(weather, setWeatherIcon);
  }, [weather]);
  return (
    <>
      {weather && (
        <Week
          weather={weather}
          idx={idx}
          getTime={getTime}
          weatherIcon={weatherIcon}
        />
      )}
    </>
  );
};

export default WeekContainer;
