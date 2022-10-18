import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCityInfo } from "../../APIs/CityApiCall";
import { exportPDF } from "../../Functions/exportPDF";
import { startExporting, finishExporting } from "../../Redux/appSlice";
import "./mainStyles.css";

const LeftPanel = () => {
  const dispatch = useDispatch();
  const { cityInfo, pending, exporting } = useSelector((state) => state.app);
  const [city, setCity] = useState("");

  const handleEnterKey = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleSearch = () => {
    getCityInfo(city, dispatch);
  };

  const handleExport = () => {
    exportPDF(dispatch, startExporting, finishExporting);
  };

  return (
    <div className="left-panel-container">
      <div className="title-container">
        <h2>Splyd ReactJs Task</h2>
        <h3>Ahmad Turjman</h3>
      </div>
      <div className="search-container">
        <div>
          <div>
            <input
              className="input"
              placeholder="Search places..."
              onChange={(e) => {
                setCity(e.target.value);
              }}
              onKeyDown={handleEnterKey}
            />
            <button
              disabled={pending}
              className="btn button"
              onClick={handleSearch}
            >
              {pending ? "Searching..." : "Search"}
            </button>
          </div>
          <div></div>
        </div>
      </div>
      <div className="info-container">
        <div>
          <div className="location-info">
            <p>Country: </p>
            <p>
              <strong>{cityInfo.country}</strong>
            </p>
          </div>
          <div className="location-info">
            <p>City: </p>
            <p>
              <strong>{cityInfo.city}</strong>
            </p>
          </div>
          <div className="location-info">
            <p>Temperature: </p>
            <p>
              <strong>{cityInfo.temp} </strong>
            </p>
          </div>
          <div className="location-info">
            <p>Coordinates: </p>
            <p>
              <strong>
                {cityInfo.lat.toFixed(3)}, {cityInfo.lng.toFixed(3)}
              </strong>
            </p>
          </div>
          <button
            disabled={exporting}
            className="btn button-2"
            onClick={handleExport}
          >
            {exporting ? "Exporting..." : "Export PDFs"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LeftPanel;
