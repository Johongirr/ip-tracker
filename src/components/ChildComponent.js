import React from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";

function ChildComponent({ coords }) {
  const map = useMap();
  map.setView(coords, map.getZoom());
  return null;
}

export default ChildComponent;
