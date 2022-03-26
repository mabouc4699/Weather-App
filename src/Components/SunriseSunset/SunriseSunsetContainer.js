import React from "react";
import SunriseSunset from "./SunriseSunset";

const SunriseSunsetContainer = ({ weather }) => {
  return (
    <>
      <SunriseSunset weather={weather} />
    </>
  );
};

export default SunriseSunsetContainer;
