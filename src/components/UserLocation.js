import { useContext, useEffect, useState } from "react";
import { Marker, Popup, useMap, useMapEvents } from "react-leaflet";
import L, { map } from "leaflet";
import { ApplicationContext } from "../App";

function UserLocation() {
  const { data, setData } = useContext(ApplicationContext);
  const [userPosition, setuserPosition] = useState({
    lat:0,
    lng:0
});
  const map = useMap();
  var templat,templng,position

  useEffect(() => {
    if (!map) return;
    map.on("click", (e) => {
      templat=e.latlng.lat;
      const { lat, lng } = e.latlng;
      setuserPosition({
        lat: lat,
        lng: lng
    })
      templng=e.latlng.lng;
      var finallat=templat.toString();
      var finallng=templng.toString();
      setData({...data,latitude:finallat,longitude:finallng})
    });
  }, [map]);

  return userPosition === null ? null : (
    <Marker position={[userPosition.lat,userPosition.lng]}>
        <Popup>
            You are here
        </Popup>
    </Marker>
);
}

export default UserLocation;
