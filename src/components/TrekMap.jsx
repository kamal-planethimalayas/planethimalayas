import { MapContainer, TileLayer, Polyline, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// ✅ Fix marker icon path issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: new URL("leaflet/dist/images/marker-icon-2x.png", import.meta.url).href,
  iconUrl: new URL("leaflet/dist/images/marker-icon.png", import.meta.url).href,
  shadowUrl: new URL("leaflet/dist/images/marker-shadow.png", import.meta.url).href,
});

export default function TrekMap({ trekName, coordinates }) {
  return (
    <div style={{ height: "400px", width: "100%" }}>
      <MapContainer
        center={coordinates[0]}
        zoom={12}
        style={{ height: "100%", width: "100%", borderRadius: "12px" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Polyline positions={coordinates} color="#ff7300" weight={4} />

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