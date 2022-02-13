import React, { useState, useRef, useEffect } from "react";
//@ts-ignore
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
mapboxgl.accessToken =
  "pk.eyJ1Ijoicm9iZXJ0ZTc3NyIsImEiOiJja3prcWdmMzUwdTRjMnZueHRsY3FweWNjIn0.jYLgwY9mEqr2OGadrne6Bg";
export default function Mapbox({ coords }) {
  console.log(coords);
  const mapContainer = useRef(null);
  const popup = useRef(null);
  const map = useRef(null);
  const [zoom, setZoom] = useState(9);
  useEffect(() => {
    map.current?.flyTo({ center: coords });
  }, [coords]);
  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      width: "100%",
      height: "100%",
      style: "mapbox://styles/mapbox/streets-v11",
      center: coords,
      
    });
  });
  return (
    <div>
      <div
        ref={mapContainer}
        style={{ height: "100vh", width: "100%", position: "fixed" }}
        className="map-container"
      />
    </div>
  );
}
