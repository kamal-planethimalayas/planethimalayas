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

import { useEffect, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-polylinedecorator";

// Fix marker icons
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: new URL(
    "leaflet/dist/images/marker-icon-2x.png",
    import.meta.url
  ).href,

  iconUrl: new URL(
    "leaflet/dist/images/marker-icon.png",
    import.meta.url
  ).href,

  shadowUrl: new URL(
    "leaflet/dist/images/marker-shadow.png",
    import.meta.url
  ).href,
});


// Enable scroll zoom ONLY when map is clicked
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


// Auto fit map to route
function FitBounds({ coordinates }) {
  const map = useMap();

  useEffect(() => {
    if (coordinates && coordinates.length > 0) {
      const bounds = L.latLngBounds(coordinates);

      map.fitBounds(bounds, {
        padding: [30, 30],
      });
    }
  }, [coordinates, map]);

  return null;
}


// Route arrows
function RouteArrows({ coordinates }) {
  const map = useMap();

  useEffect(() => {
    if (!coordinates || coordinates.length < 2) return;

    const mid = Math.floor(coordinates.length / 2);

    const forwardPath = coordinates.slice(0, mid + 1);
    const returnPath = coordinates.slice(mid);

    // Forward arrows
    const forwardDecorator = L.polylineDecorator(forwardPath, {
      patterns: [
        {
          offset: "5%",
          repeat: "60px",

          symbol: L.Symbol.arrowHead({
            pixelSize: 10,
            polygon: false,

            pathOptions: {
              color: "#ff7300",
              weight: 2,
            },
          }),
        },
      ],
    });

    // Return arrows
    const returnDecorator = L.polylineDecorator(returnPath, {
      patterns: [
        {
          offset: "5%",
          repeat: "60px",

          symbol: L.Symbol.arrowHead({
            pixelSize: 10,
            polygon: false,

            pathOptions: {
              color: "#555",
              weight: 2,
            },
          }),
        },
      ],
    });

    forwardDecorator.addTo(map);
    returnDecorator.addTo(map);

    return () => {
      map.removeLayer(forwardDecorator);
      map.removeLayer(returnDecorator);
    };
  }, [coordinates, map]);

  return null;
}


// --------------------------------------------------
// READ A GPX FILE
// --------------------------------------------------

async function loadGpxFile(url) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Could not load GPX file: ${url}`);
  }

  const gpxText = await response.text();

  const parser = new DOMParser();

  const xml = parser.parseFromString(
    gpxText,
    "application/xml"
  );

  const points = [];

  // Normal GPX track points
  const trackPoints = xml.querySelectorAll("trkpt");

  trackPoints.forEach((point) => {
    const lat = parseFloat(point.getAttribute("lat"));
    const lon = parseFloat(point.getAttribute("lon"));

    if (!isNaN(lat) && !isNaN(lon)) {
      points.push([lat, lon]);
    }
  });

  // If the GPX uses route points instead
  if (points.length === 0) {
    const routePoints = xml.querySelectorAll("rtept");

    routePoints.forEach((point) => {
      const lat = parseFloat(point.getAttribute("lat"));
      const lon = parseFloat(point.getAttribute("lon"));

      if (!isNaN(lat) && !isNaN(lon)) {
        points.push([lat, lon]);
      }
    });
  }

  return points;
}


// --------------------------------------------------
// LOAD ALL DAILY GPX FILES
// --------------------------------------------------

function useGpxTracks(gpx) {
  const [tracks, setTracks] = useState({});

  useEffect(() => {
    if (!gpx || Object.keys(gpx).length === 0) {
      setTracks({});
      return;
    }

    async function loadAllGpx() {
      const loadedTracks = {};

      for (const [day, url] of Object.entries(gpx)) {
        try {
          const points = await loadGpxFile(url);

          if (points.length > 0) {
            loadedTracks[day] = points;
          }
        } catch (error) {
          console.error(
            `Could not load GPX for Day ${day}:`,
            error
          );
        }
      }

      setTracks(loadedTracks);
    }

    loadAllGpx();
  }, [gpx]);

  return tracks;
}


// --------------------------------------------------
// TREK MAP
// --------------------------------------------------

export default function TrekMap({
  trekName,
  coordinates = [],
  gpx = {},
  waypoints = []
}) {

  // Load all GPX files
  const gpxTracks = useGpxTracks(gpx);


  // Combine all GPX points
  const allGpxCoordinates = Object.values(gpxTracks).flat();


  // Use GPX route if available
  // Otherwise use your existing coordinates
  const routeCoordinates =
    allGpxCoordinates.length > 0
      ? allGpxCoordinates
      : coordinates;


  // If there is no route yet
  if (!routeCoordinates || routeCoordinates.length === 0) {
    return (
      <div
        style={{
          height: "400px",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Loading route...
      </div>
    );
  }


  return (
    <div
      style={{
        height: "400px",
        width: "100%",
      }}
    >

      <MapContainer
        center={routeCoordinates[0]}
        zoom={12}
        scrollWheelZoom={false}
        style={{
          height: "100%",
          width: "100%",
          borderRadius: "12px",
        }}
      >

        {/* MAP LAYERS */}

        <LayersControl position="topleft">

          {/* TOPO MAP */}
          <LayersControl.BaseLayer
            checked
            name="Topo Map"
          >
            <TileLayer
              attribution="&copy; OpenTopoMap"
              url="https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png"
            />
          </LayersControl.BaseLayer>


          {/* NORMAL MAP */}
          <LayersControl.BaseLayer
            name="Normal Map"
          >
            <TileLayer
              attribution="&copy; OpenStreetMap"
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          </LayersControl.BaseLayer>

        </LayersControl>


        <EnableScrollOnClick />


        {/* AUTO ZOOM */}

        <FitBounds
          coordinates={routeCoordinates}
        />


        {/* ROUTE ARROWS */}

        <RouteArrows
          coordinates={routeCoordinates}
        />


        {/* ----------------------------------------
            GPX ROUTES
        ----------------------------------------- */}

        {Object.entries(gpxTracks).map(
          ([day, dayCoordinates]) => (

            <Polyline
              key={day}
              positions={dayCoordinates}
              pathOptions={{
                color: "#ff7300",
                weight: 4,
              }}
            />

          )
        )}


        {/* ----------------------------------------
            FALLBACK ROUTE
        ----------------------------------------- */}

        {Object.keys(gpxTracks).length === 0 &&
          coordinates.length > 0 && (

            <Polyline
              positions={coordinates}
              pathOptions={{
                color: "#ff7300",
                weight: 4,
              }}
            />

          )}


        {/* START MARKER */}

        <Marker
          position={routeCoordinates[0]}
        >
          <Popup>
            Start of {trekName}
          </Popup>
        </Marker>


        {/* END MARKER */}

        <Marker
          position={
            routeCoordinates[
              routeCoordinates.length - 1
            ]
          }
        >
          <Popup>
            End of {trekName}
          </Popup>
        </Marker>


        {/* WAYPOINTS */}

        {waypoints.map((point, index) => (

          <Marker
            key={index}
            position={point.coords}
          >

            {/* Always visible label */}

            <Tooltip
              direction="top"
              offset={[0, -10]}
              permanent
            >
              <span
                style={{
                  fontSize: "12px",
                  fontWeight: "600",
                }}
              >
                {point.name}
              </span>
            </Tooltip>


            {/* Popup */}

            <Popup>

              <b>{point.name}</b>

              <br />

              {point.type === "pass" &&
                "⛰️ High Pass"}

              {point.type === "lake" &&
                "🏔️ Alpine Lake"}

              {point.type === "camp" &&
                "⛺ Campsite"}

              {point.type === "start" &&
                "🚩 Start Point"}

              {point.type === "end" &&
                "🏁 End Point"}

              {point.type === "village" &&
                "🏡 Village"}

              {point.type === "valley" &&
                "🌄 Valley"}

            </Popup>

          </Marker>

        ))}

      </MapContainer>

    </div>
  );
}