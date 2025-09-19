import { MapContainer, TileLayer, Polyline, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function TrekMap({ trekName, coordinates }) {
  return (
    <div style={{ height: "400px", width: "100%" }}>
      <MapContainer
        center={coordinates[0]} // first point as center
        zoom={12}
        style={{ height: "100%", width: "100%", borderRadius: "12px" }}
      >
        {/* Base map layer */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Trek route line */}
        <Polyline positions={coordinates} color="#ff7300" weight={4} />

        {/* Start & end markers */}
        <Marker position={coordinates[0]}>
          <Popup>Start of {trekName}</Popup>
        </Marker>
        <Marker position={coordinates[coordinates.length - 1]}>
          <Popup>End of {trekName}</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
