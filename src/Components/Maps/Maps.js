import React, { useState, useRef, useEffect } from "react";

import { useJsApiLoader, GoogleMap, MarkerF } from "@react-google-maps/api";
import "./mapStyles.css";
const Maps = (props) => {
  const { setCity } = props;
  useEffect(() => {}, []);

  const libraries = ["places"];
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API,
    libraries,
  });

  const [isLoading, setIsLoading] = useState(false);
  const [cityInfo, setCityInfo] = useState({
    lat: 24.774265,
    lng: 46.738586,
  });

  const cityRef = useRef();

  const handleClick = async () => {
    setIsLoading(true);
    if (cityRef.current.value === "") {
      alert("Please enter a city");
      return;
    }
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityRef.current.value}&appid=${process.env.REACT_APP_OPENWEATHER_API}&units=metric`
      );

      const data = await response.json();

      setCityInfo({
        country: data.sys.country,
        name: data.name,
        lat: data.coord.lat,
        lng: data.coord.lon,
        temp: data.main.temp,
      });

      setCity({
        country: data.sys.country,
        name: data.name,
        lat: data.coord.lat,
        lng: data.coord.lon,
        temp: data.main.temp,
      });
    } catch (err) {
      alert("Location not found. Error: ", err);
    }
    setIsLoading(false);
  };

  const handleEnterKey = (e) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };
  return (
    <>
      {isLoaded && (
        <div className="map-container">
          {/* <div style={{ display: "flex", alignItems: "center" }}>
                <input
                  type="text"
                  placeholder="City"
                  style={{ padding: 2, width: "83%" }}
                  ref={cityRef}
                  onKeyDown={handleEnterKey}
                />
                <button style={{ margin: 5, padding: 2 }} onClick={handleClick}>
                  Search
                </button>
                {isLoading && <p>Loading...</p>}
              </div> */}
          <GoogleMap
            options={{
              mapId: "904efaf1230f37cd",
              zoomControl: false,
              streetViewControl: false,
              mapTypeControl: false,
              fullscreenControl: false,
              keyboardShortcuts: false,
              disableDoubleClickZoom: true,
              scrollwheel: false,
            }}
            center={{ lat: cityInfo.lat, lng: cityInfo.lng }}
            zoom={isLoading ? 6 : 7}
            mapContainerStyle={{
              height: "100%",
              width: "100%",
              borderRadius: "25px",
            }}
          >
            <MarkerF position={{ lat: cityInfo.lat, lng: cityInfo.lng }} />
          </GoogleMap>
        </div>
      )}
    </>
  );
};

export default Maps;
