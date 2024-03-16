import { useEffect, useState } from "react";
import { useJsApiLoader, GoogleMap, Marker } from "@react-google-maps/api";
const GoogleMapComp = () => {
  // State to store the current location
  const [center, setCenter] = useState(null);
  console.log(center);
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }, []);

  function successCallback(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    // Update the center state with the current location
    setCenter({ lat: latitude, lng: longitude });
  }

  function errorCallback(error) {
    console.log("Error getting location: " + error.message);
  }

  const containerStyle = {
    width: "100%",
    height: "100vh",
    zIndex: "10",
  };

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAP_API,
    libraries: ["places", "streetView", "routes"],
  });

  if (!isLoaded) return <div>Loading...</div>;

  return isLoaded ? (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
      <Marker position={center} />
    </GoogleMap>
  ) : (
    <></>
  );
};

export default GoogleMapComp;
