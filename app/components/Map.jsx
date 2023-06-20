"use client";

import { MapContainer, Marker, TileLayer } from "react-leaflet";

import "leaflet/dist/leaflet.css";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import { useRentForm } from "../hooks/useRentForm";
import { useEffect } from "react";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon.src,
  iconRetinaUrl: markerIcon2x.src,
  shadowUrl: markerShadow.src,
});

export const Map = () => {
  const { formData } = useRentForm();
  const latlng = formData.location?.latlng;

  useEffect(() => {
    if (typeof window !== "undefined") {
    }
  }, []);

  return (
    <MapContainer
      center={latlng || [51, -0.09]}
      zoom={latlng ? 4 : 2}
      scrollWheelZoom={false}
      className="h-[35vh] rounded-lg"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {latlng && <Marker position={latlng} />}
    </MapContainer>
  );
};
