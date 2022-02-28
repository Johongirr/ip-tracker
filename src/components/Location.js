import React from "react";

function Location({ location }) {
  return (
    <div className="result">
      <div className="result__box">
        <span className="result__text">IP ADDRESS</span>
        <p className="result__output">{location?.ip}</p>
      </div>
      <div className="result__box">
        <span className="result__text">LOCATION</span>
        <p className="result__output">
          {location?.location?.city}, {location?.location?.country} <br />
          {location?.location?.postalCode}
        </p>
      </div>
      <div className="result__box">
        <span className="result__text">TIMEZONE</span>
        <p className="result__output">UTC {location?.location?.timezone}</p>
      </div>
      <div className="result__box">
        <span className="result__text">ISP</span>
        <p className="result__output">{location?.isp}</p>
      </div>
    </div>
  );
}

export default Location;
