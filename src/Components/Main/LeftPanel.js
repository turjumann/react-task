import React from "react";
import "./mainStyles.css";
const LeftPanel = () => {
  return (
    <div className="left-panel-container">
      <div className="title-container">
        <h2>Splyd ReactJs Task</h2>
        <h3>Ahmad Turjman</h3>
      </div>
      <div className="search-container">
        <div>
          <div>
            <input className="input" placeholder="Search place..." />
            <button className="btn button">Search</button>
          </div>
          <div>
            <p>Loading...</p>
          </div>
        </div>
      </div>
      <div className="info-container">
        <div>
          <div className="location-info">
            <h3>Country: </h3>
            <h3>
              <strong>SA</strong>
            </h3>
          </div>
          <div className="location-info">
            <h3>City: </h3>
            <h3>
              <strong>Riyadh</strong>
            </h3>
          </div>
          <div className="location-info">
            <h3>Temperature: </h3>
            <h3>
              <strong>25 C</strong>
            </h3>
          </div>
          <div className="location-info">
            <h3>Coordinates: </h3>
            <h3>
              <strong>NaN</strong>
            </h3>
          </div>
          <button className="btn button-2">Generate PDFs</button>
        </div>
      </div>
    </div>
  );
};

export default LeftPanel;
