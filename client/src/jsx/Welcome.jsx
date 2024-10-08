import { WiDaySnowWind } from "react-icons/wi";
import { Link } from "react-router-dom";
import React from 'react';
import "../css/Home.css"




export default function LoadWelcome() {

  return (

    <>
      <div className="background">
        <div className="Welcome-section">
          <div className="welcome-empty-section">
            < WiDaySnowWind className="WeatherIcon" />

          </div>
          <div className="Welcome-heading">
            <div className="heading"> Welcome to Zeo-<span style={{ color: 'White' }}>Weather</span></div>

            
            <Link to="/login">
              <button className="Welcome-button">Dashboard</button>
            </Link>

          </div>
        </div>
      </div>
    </>
  )
}
