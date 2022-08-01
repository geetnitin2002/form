import { MapContainer, Marker, TileLayer, useMapEvents } from "react-leaflet";
import { ApplicationContext } from "../App";
import { useContext } from "react";
import UserLocation from "./UserLocation";

export default function Map() {
  const { data, setData } = useContext(ApplicationContext);

  const position = [17.5125388, 78.3864943];
  return (
    <MapContainer
      center={[20.593683, 78.962883]}
      zoom={5}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <UserLocation />
    </MapContainer>
  );
}
