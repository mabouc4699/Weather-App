const axios = require("axios");

const degToCompass = (num) => {
  let val = parseInt(num / 22.5 + 0.5);
  const arr = [
    "N",
    "NNE",
    "NE",
    "ENE",
    "E",
    "ESE",
    "SE",
    "SSE",
    "S",
    "SSW",
    "SW",
    "WSW",
    "W",
    "WNW",
    "NW",
    "NNW",
  ];
  return arr[val % 16];
};

const getImg = (weather, setWeatherIcon = "") => {
  if (weather.current !== undefined) {
    setWeatherIcon(
      `http://openweathermap.org/img/wn/${weather.current.weather[0].icon}@2x.png`
    );
  } else {
    console.log(
      `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`
    );
    return setWeatherIcon(
      `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`
    );
  }
};

const getCityName = (lat, long, setCounty) => {
  axios
    .get(
      `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${long}&limit=5&appid=fe146ea0475520c4d6cfdd513ceecb37`
    )
    .then((response) => setCounty(response.data[0].name))
    .catch((error) => console.log(error));
};

const getPositionData = (setLat, setLong) => {
  navigator.geolocation.getCurrentPosition(
    function (position) {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    },
    function (error) {
      console.log(error);
    },
    {
      maximumAge: 60000,
      timeout: 5000,
      enableHighAccuracy: true,
    }
  );
};

const getFullTime = (dt) => {
  return new Date(dt * 1000).toLocaleString("en-us", {
    weekday: "long",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};

const getCurrentTime = (weather) => {
  return new Date(weather.current.dt * 1000).toLocaleString("en-us", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });
};

const getTime = (weather, idx) => {
  return new Date(weather.dt * 1000).toLocaleString("en-us", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });
};

const getDay = (dt) => {
  var options = {
    weekday: "long",
  };
  let date = new Date(dt * 1000)
    .toLocaleTimeString("en-us", options)
    .split(" ")[0];
  return date;
};

exports.degToCompass = degToCompass;
exports.getImg = getImg;
exports.getCityName = getCityName;
exports.getPositionData = getPositionData;
exports.getCurrentTime = getCurrentTime;
exports.getDay = getDay;
exports.getTime = getTime;
exports.getFullTime = getFullTime;
