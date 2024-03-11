import { useJsApiLoader, GoogleMap } from "@react-google-maps/api";
const GoogleMapComp = () => {
  const center = {
    lat: -3.745,
    lng: -38.523,
  };
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "",
  });
  if (!isLoaded) return <div>Loading...</div>;
  return (
    <GoogleMap
      center={center}
      zoom={15}
      mapContainerStyle={{ width: "100%", height: "100%" }}></GoogleMap>
  );
};

export default GoogleMapComp;
