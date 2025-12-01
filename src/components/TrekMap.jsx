import {
  MapContainer,
  TileLayer,
  Polyline,
  Marker,
  Popup,
  LayersControl,
  useMapEvents
} from "react-leaflet";

import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: new URL("leaflet/dist/images/marker-icon-2x.png", import.meta.url).href,
  iconUrl: new URL("leaflet/dist/images/marker-icon.png", import.meta.url).href,
  shadowUrl: new URL("leaflet/dist/images/marker-shadow.png", import.meta.url).href,
});

// Enable scroll zoom ONLY when map is clicked
function EnableScrollOnClick() {
  const map = useMapEvents({
    click() {
      map.scrollWheelZoom.enable();
    },
    mouseout() {
      map.scrollWheelZoom.disable();
    }
  });

  return null;
}

export default function TrekMap({ trekName, coordinates }) {
  return (
    <div style={{ height: "400px", width: "100%" }}>
      <MapContainer
        center={coordinates[0]}
        zoom={12}
        scrollWheelZoom={false}   // disabled until clicked
        style={{ height: "100%", width: "100%", borderRadius: "12px" }}
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
