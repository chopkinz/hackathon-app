import React, { useState, useRef, useEffect } from "react";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
mapboxgl.accessToken =
  "pk.eyJ1Ijoicm9iZXJ0ZTc3NyIsImEiOiJja3prcWdmMzUwdTRjMnZueHRsY3FweWNjIn0.jYLgwY9mEqr2OGadrne6Bg";
export default function Mapbox({ coords }) {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(9);
  useEffect(() => {
    setLng(coords[0]);
    setLat(coords[1]);
  }, [coords]);
  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom,
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
