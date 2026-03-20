import {
  MapContainer,
  TileLayer,
  Polyline,
  Marker,
  Popup,
  LayersControl,
  useMap,
  useMapEvents,
  Tooltip
} from "react-leaflet";

import { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: new URL("leaflet/dist/images/marker-icon-2x.png", import.meta.url).href,
  iconUrl: new URL("leaflet/dist/images/marker-icon.png", import.meta.url).href,
  shadowUrl: new URL("leaflet/dist/images/marker-shadow.png", import.meta.url).href,
});

// Enable scroll zoom ONLY when map is clicked (same behavior, slightly cleaner)
function EnableScrollOnClick() {
  const map = useMapEvents({
    click() {
      map.scrollWheelZoom.enable();
    },
  });

  useEffect(() => {
    map.scrollWheelZoom.disable();
  }, [map]);

  return null;
}

// ✅ NEW: Auto fit map to route (no manual zoom needed)
function FitBounds({ coordinates }) {
  const map = useMap();

  useEffect(() => {
    if (coordinates && coordinates.length > 0) {
      const bounds = L.latLngBounds(coordinates);
      map.fitBounds(bounds, { padding: [30, 30] });
    }
  }, [coordinates, map]);

  return null;
}

export default function TrekMap({ trekName, coordinates, waypoints = [] }) {
  return (
    <div style={{ height: "400px", width: "100%" }}>
      <MapContainer
        center={coordinates[0]}
        zoom={12}
        scrollWheelZoom={false}   // unchanged behavior
        style={{
          height: "100%",
          width: "100%",
          borderRadius: "12px",
        }}
      >
        <LayersControl position="topleft">

          {/* TOPO MAP DEFAULT */}
          <LayersControl.BaseLayer checked name="Topo Map">
            <TileLayer
              attribution="&copy; OpenTopoMap"
              url="https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png"
            />
          </LayersControl.BaseLayer>

          <LayersControl.BaseLayer name="Normal Map">
            <TileLayer
              attribution="&copy; OpenStreetMap"
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          </LayersControl.BaseLayer>

        </LayersControl>

        <EnableScrollOnClick />

        {/* ✅ NEW: Auto zoom */}
        <FitBounds coordinates={coordinates} />

        {/* Route line (unchanged, slightly enhanced style) */}
        <Polyline
          positions={coordinates}
          pathOptions={{
            color: "#ff7300",
            weight: 4,
          }}
        />

        {/* Start marker (unchanged) */}
        <Marker position={coordinates[0]}>
          <Popup>Start of {trekName}</Popup>
        </Marker>

        {/* End marker (unchanged) */}
        <Marker position={coordinates[coordinates.length - 1]}>
          <Popup>End of {trekName}</Popup>
        </Marker>

        {/* ✅ NEW: Optional waypoints (safe addition) */}
        {waypoints.map((point, index) => (
        <Marker key={index} position={point.coords}>

        {/* Always visible label */}
        <Tooltip direction="top" offset={[0, -10]} permanent>
          <span style={{ fontSize: "12px", fontWeight: "600" }}>
            {point.name}
          </span>
        </Tooltip>

        {/* Click popup */}
        <Popup>
          <b>{point.name}</b><br />
          {point.type === "pass" && "⛰️ High Pass"}
          {point.type === "lake" && "🏔️ Alpine Lake"}
          {point.type === "camp" && "⛺ Campsite"}
          {point.type === "start" && "🚩 Start Point"}
          {point.type === "end" && "🏁 End Point"}
          {point.type === "village" && "🏡 Village"}
          {point.type === "valley" && "🌄 Valley"}
        </Popup>

        </Marker>
        ))}

      </MapContainer>
    </div>
  );
}