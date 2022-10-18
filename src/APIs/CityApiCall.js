import {
  startApi,
  updateCityInfo,
  apiSuccess,
  apiError,
} from "../Redux/appSlice";

export const getCityInfo = async (city, dispatch) => {
  dispatch(startApi());
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_OPENWEATHER_API}&units=metric`
    );
    const data = await response.json();
    const cityInfo = {
      country: data.sys.country,
      city: data.name,
      temp: data.main.temp + " C",
      lat: data.coord.lat,
      lng: data.coord.lon,
    };
    dispatch(updateCityInfo(cityInfo));
    dispatch(apiSuccess());
  } catch (err) {
    alert("Make sure you wrote a correct place...");
    dispatch(apiError({ errorMsg: "Make sure you wrote a real place..." }));
  }
};
