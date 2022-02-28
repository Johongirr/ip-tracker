import React, { useState, useEffect } from "react";
import SearchLocation from "./components/SearchLocation";
import Location from "./components/Location";
import Map from "./components/Map";

function App() {
  const [currentLocation, setCurrentLocation] = useState(null);

  const getCurrentLocation = async (query = "", val = "") => {
    try {
      let response;
      if (query) {
        response = await fetch(
          `https://geo.ipify.org/api/v2/country,city?apiKey=at_k08shU8oNG7LtQHc1IQaHqoZ6eeBN&${query}=${val}`
        );
      } else {
        response = await fetch(
          "https://geo.ipify.org/api/v2/country,city?apiKey=at_k08shU8oNG7LtQHc1IQaHqoZ6eeBN"
        );
      }
      const location = await response.json();
      setCurrentLocation(location);
    } catch (err) {
      console.log(err.message);
    }
  };
  useEffect(() => {
    getCurrentLocation();
  }, []);
  const updateCurrentLocation = (val) => {
    const isIpAddress = val.split(".").every((val) => /[0-9]/.test(val));
    if (isIpAddress) {
      getCurrentLocation("ipAddress", val);
    } else {
      getCurrentLocation("domain", val);
    }
  };
  return (
    <div className="ip-address-tracker">
      <div className="ip-address-tracker__bg-img">
        <h1 className="ip-address-tracker__title">IP Address Tracker</h1>
        <SearchLocation updateCurrentLocation={updateCurrentLocation} />
        <Location location={currentLocation} />
      </div>
      <Map location={currentLocation} />
    </div>
  );
}

export default App;

/**
 *  Components
 *  App - do following on App component
 *          1. get current location of user and display it on the map and get user' current
 *              location and ip address by default
 *          2. create callback and pass it to SearchLocation component and
 *              and identify if data is ip address or domain name. based on that
 *              get current location and pass location to Location component
 *    SearchLocation
 *          1. get user data and send it back to App component
 *    Location
 *          1. display data given by App component
 *    Map
 *          display user location on the map by current coordinates
 *
 *
 */
