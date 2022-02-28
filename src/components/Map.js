import React from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import ChildComponent from "./ChildComponent";

function Map({ location }) {
  const position = location
    ? [location.location.lat, location.location.lng]
    : [];
  return (
    <div id="map">
      {position.length && (
        <MapContainer center={position} zoom={13} className="map__box">
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              {location.location.city}, {location.location.country}
            </Popup>
          </Marker>
          <ChildComponent coords={position} />
        </MapContainer>
      )}
    </div>
  );
}

export default Map;
