import React, { useEffect } from "react";
import { useJsApiLoader, GoogleMap, MarkerF } from "@react-google-maps/api";
import { useSelector } from "react-redux";
import "./mapStyles.css";

const Maps = () => {
  const { cityInfo, pending } = useSelector((state) => state.app);

  const libraries = ["places"];
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API,
    libraries,
  });

  return (
    <>
      {isLoaded && (
        <div className="map-container">
          <GoogleMap
            options={{
              mapId: "904efaf1230f37cd",
              zoomControl: false,
              streetViewControl: false,
              mapTypeControl: false,
              fullscreenControl: false,
              keyboardShortcuts: false,
              disableDoubleClickZoom: true,
            }}
            center={{ lat: cityInfo.lat, lng: cityInfo.lng }}
            zoom={pending ? 6 : 7}
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
