import React, { useEffect, useState } from "react";
import { getCurrentTime, getImg } from "../../Utils/handleFunctions";
import Current from "./Current";

const CurrentContainer = ({ weather }) => {
  const [data, setData] = useState();
  const [dataPref, setDataPref] = useState("conditions");
  const [weatherIcon, setWeatherIcon] = useState();

  useEffect(() => {
    getImg(weather, setWeatherIcon);
    setData(weather.hourly.slice(0, 24));
  }, [weather]);

  return (
    <>
      <Current
        data={data}
        pref={dataPref}
        setPref={setDataPref}
        getCurrentTime={getCurrentTime}
        weather={weather}
        weatherIcon={weatherIcon}
      />
    </>
  );
};

export default CurrentContainer;
