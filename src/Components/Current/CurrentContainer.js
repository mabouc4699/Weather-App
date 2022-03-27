import React, { useEffect, useState } from "react";
import { getCurrentTime } from "../../Utils/handleFunctions";
import Current from "./Current";

const CurrentContainer = ({ weather, displayChoice, setDisplayChoice }) => {
  const [data, setData] = useState();
  const [dataPref, setDataPref] = useState("conditions");

  useEffect(() => {
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
        displayChoice={displayChoice}
        setDisplayChoice={setDisplayChoice}
      />
    </>
  );
};

export default CurrentContainer;
